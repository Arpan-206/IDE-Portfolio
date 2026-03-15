use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use wasm_bindgen::prelude::*;

#[derive(Deserialize)]
struct ShellInit {
    files: HashMap<String, String>,
    pwd: String,
}

#[derive(Serialize)]
struct ShellOutput {
    lines: Vec<String>,
    clear: bool,
    open: Option<String>,
    pwd: String,
}

impl ShellOutput {
    fn new(pwd: String) -> Self {
        Self {
            lines: Vec::new(),
            clear: false,
            open: None,
            pwd,
        }
    }
}

#[derive(Serialize)]
struct CompleteOutput {
    insert: String,
    candidates: Vec<String>,
    show_list: bool,
}

#[derive(Serialize)]
struct HistoryOutput {
    line: String,
    changed: bool,
}

const COMMANDS: [&str; 11] = [
    "help", "history", "about", "contact", "clear", "ls", "open", "cat", "pwd", "cd", "echo",
];
const MAX_HISTORY: usize = 100;

fn common_prefix(items: &[String]) -> String {
    if items.is_empty() {
        return String::new();
    }

    let mut prefix = items[0].clone();
    for item in items.iter().skip(1) {
        let mut i = 0;
        let left = prefix.as_bytes();
        let right = item.as_bytes();
        while i < left.len() && i < right.len() && left[i] == right[i] {
            i += 1;
        }
        prefix.truncate(i);
        if prefix.is_empty() {
            break;
        }
    }
    prefix
}

#[wasm_bindgen]
pub struct Shell {
    files: HashMap<String, String>,
    pwd: String,
    history: Vec<String>,
    history_index: Option<usize>,
    history_snapshot: String,
}

#[wasm_bindgen]
impl Shell {
    #[wasm_bindgen(constructor)]
    pub fn new(init_json: &str) -> Result<Shell, JsValue> {
        let init: ShellInit = serde_json::from_str(init_json)
            .map_err(|e| JsValue::from_str(&format!("init parse error: {e}")))?;

        Ok(Shell {
            files: init.files,
            pwd: init.pwd,
            history: Vec::new(),
            history_index: None,
            history_snapshot: String::new(),
        })
    }

    pub fn complete(&self, input: &str) -> String {
        let is_trailing_space = input
            .chars()
            .last()
            .map(|c| c.is_whitespace())
            .unwrap_or(false);
        let trimmed = input.trim();
        let parts: Vec<&str> = if trimmed.is_empty() {
            Vec::new()
        } else {
            trimmed.split_whitespace().collect()
        };

        let mut prefix = "";
        let candidates: Vec<String>;

        if parts.is_empty() {
            candidates = COMMANDS.iter().map(|cmd| (*cmd).to_string()).collect();
        } else if parts.len() == 1 && !is_trailing_space {
            prefix = parts[0];
            candidates = COMMANDS
                .iter()
                .filter(|cmd| cmd.starts_with(prefix))
                .map(|cmd| (*cmd).to_string())
                .collect();
        } else {
            prefix = if is_trailing_space {
                ""
            } else {
                parts[parts.len() - 1]
            };
            let mut files = self.files.keys().cloned().collect::<Vec<_>>();
            files.sort();
            candidates = files
                .into_iter()
                .filter(|file| file.starts_with(prefix))
                .collect();
        }

        let mut output = CompleteOutput {
            insert: String::new(),
            candidates: Vec::new(),
            show_list: false,
        };

        if candidates.is_empty() {
            return serde_json::to_string(&output).unwrap_or_default();
        }

        if candidates.len() == 1 {
            output.insert = candidates[0][prefix.len()..].to_string();
            output.candidates = candidates;
            return serde_json::to_string(&output).unwrap_or_default();
        }

        let common = common_prefix(&candidates);
        if common.len() > prefix.len() {
            output.insert = common[prefix.len()..].to_string();
        } else {
            output.show_list = true;
        }
        output.candidates = candidates;

        serde_json::to_string(&output).unwrap_or_default()
    }

    fn reset_history_nav(&mut self) {
        self.history_index = None;
        self.history_snapshot.clear();
    }

    pub fn history_up(&mut self, current: &str) -> String {
        let mut out = HistoryOutput {
            line: String::new(),
            changed: false,
        };

        if self.history.is_empty() {
            return serde_json::to_string(&out).unwrap_or_default();
        }

        match self.history_index {
            None => {
                self.history_snapshot = current.to_string();
                let last_index = self.history.len() - 1;
                self.history_index = Some(last_index);
                out.line = self.history[last_index].clone();
                out.changed = true;
            }
            Some(0) => {}
            Some(index) => {
                let next_index = index - 1;
                self.history_index = Some(next_index);
                out.line = self.history[next_index].clone();
                out.changed = true;
            }
        }

        serde_json::to_string(&out).unwrap_or_default()
    }

    pub fn history_down(&mut self, _current: &str) -> String {
        let mut out = HistoryOutput {
            line: String::new(),
            changed: false,
        };

        if self.history.is_empty() {
            return serde_json::to_string(&out).unwrap_or_default();
        }

        match self.history_index {
            None => {}
            Some(index) if index + 1 < self.history.len() => {
                let next_index = index + 1;
                self.history_index = Some(next_index);
                out.line = self.history[next_index].clone();
                out.changed = true;
            }
            Some(_) => {
                self.history_index = None;
                out.line = self.history_snapshot.clone();
                out.changed = true;
            }
        }

        serde_json::to_string(&out).unwrap_or_default()
    }

    pub fn history_reset(&mut self) {
        self.reset_history_nav();
    }

    pub fn process(&mut self, input: &str) -> String {
        let trimmed = input.trim();
        let mut out = ShellOutput::new(self.pwd.clone());

        if trimmed.is_empty() {
            self.reset_history_nav();
            return serde_json::to_string(&out).unwrap_or_default();
        }

        self.reset_history_nav();

        let mut parts = trimmed.split_whitespace();
        let command = parts.next().unwrap_or("");
        let arg = parts.collect::<Vec<_>>().join(" ");

        if self
            .history
            .last()
            .map(|last| last != trimmed)
            .unwrap_or(true)
        {
            self.history.push(trimmed.to_string());
            if self.history.len() > MAX_HISTORY {
                let overflow = self.history.len() - MAX_HISTORY;
                self.history.drain(0..overflow);
            }
        }

        match command {
            "help" => {
                out.lines.push("Available commands:".to_string());
                out.lines
                    .push("  help              Show this help message".to_string());
                out.lines
                    .push("  history           Show command history".to_string());
                out.lines
                    .push("  about             Quick intro".to_string());
                out.lines
                    .push("  contact           Show contact info".to_string());
                out.lines
                    .push("  clear             Clear the screen".to_string());
                out.lines
                    .push("  ls                List portfolio files".to_string());
                out.lines
                    .push("  open <file>       Open a file in the editor".to_string());
                out.lines
                    .push("  cat <file>        Print a file's contents".to_string());
                out.lines
                    .push("  pwd               Print working directory".to_string());
                out.lines
                    .push("  cd <dir>          Change directory".to_string());
                out.lines.push("  echo <text>       Print text".to_string());
            }
            "history" => {
                if self.history.is_empty() {
                    out.lines.push("history is empty".to_string());
                } else {
                    for (index, entry) in self.history.iter().enumerate() {
                        out.lines.push(format!("{:>3}  {}", index + 1, entry));
                    }
                }
            }
            "about" => {
                out.lines
                    .push("Arpan Pandey — Software Engineer".to_string());
                out.lines
                    .push("Interests: systems, WebAssembly, hacker UX".to_string());
            }
            "contact" => {
                out.lines.push("email: hello@arpanpandey.dev".to_string());
                out.lines
                    .push("github: https://github.com/Arpan-206".to_string());
                out.lines
                    .push("linkedin: https://linkedin.com/in/arpan-pandey".to_string());
            }
            "clear" => {
                out.clear = true;
            }
            "ls" => {
                let mut keys = self.files.keys().cloned().collect::<Vec<_>>();
                keys.sort();
                out.lines.push(keys.join("  "));
            }
            "open" => {
                if arg.is_empty() {
                    out.lines.push("usage: open <file>".to_string());
                } else if !self.files.contains_key(&arg) {
                    out.lines.push(format!("file not found: {arg}"));
                    out.lines
                        .push("Type `ls` to list available files.".to_string());
                } else {
                    out.open = Some(arg.clone());
                    out.lines.push(format!("opened {arg}"));
                }
            }
            "cat" => {
                if arg.is_empty() {
                    out.lines.push("usage: cat <file>".to_string());
                } else if let Some(content) = self.files.get(&arg) {
                    for line in content.lines() {
                        out.lines.push(line.to_string());
                    }
                } else {
                    out.lines.push(format!("file not found: {arg}"));
                    out.lines
                        .push("Type `ls` to list available files.".to_string());
                }
            }
            "pwd" => {
                out.lines.push(self.pwd.clone());
            }
            "cd" => {
                if arg.is_empty() || arg == "~" {
                    self.pwd = "~".to_string();
                    out.pwd = self.pwd.clone();
                } else {
                    out.lines.push(format!("no such file or directory: {arg}"));
                }
            }
            "echo" => {
                out.lines.push(arg);
            }
            _ => {
                out.lines.push(format!("command not found: {trimmed}"));
                out.lines
                    .push("Type `help` to see available commands.".to_string());
            }
        }

        serde_json::to_string(&out).unwrap_or_default()
    }
}
