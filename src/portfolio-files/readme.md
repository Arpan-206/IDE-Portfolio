# Arpan Pandey

> Final-year CS student @ Manchester. Software engineer. Published author. Currently putting spiking neural networks on FPGAs.

Manchester ↔ Delhi &nbsp;·&nbsp; [arpanpandey.dev](https://arpanpandey.dev) &nbsp;·&nbsp; [hello@arpanpandey.dev](mailto:hello@arpanpandey.dev)

---

I grew up tinkering — soldering circuits in Delhi, running a 50-member tech club at school, organising a fest with 3,000 people at 17. Then I got to university and found that the scale just kept going up.

At 18 I was writing Go harnesses at CodeCrafters that verify systems programming challenges for 100,000+ developers worldwide. At the same time I was elected the youngest Chair in UniCS history, managing a £55k budget and directing three hackathons. Somewhere in between I co-authored an ACM TechBrief on AI-assisted software development that got published before I finished my second year.

These days I work closer to the silicon. My final-year project puts a spiking neural network on an FPGA so an event camera can pick out what matters before a bigger network ever looks at it. I spent summer 2026 at the Manchester Institute of Innovation Research untangling 141M publication records, and I teach the first-year Verilog lab two hours a week.

I don't have a single lane. I've prototyped UAVs with IIT Delhi researchers, maintained a production Rails/Ember platform, built a biometric system that won NASA's PowerPitch, and written Rust WASM that's running in your browser right now.

This portfolio is itself a project — an IDE in the browser, because a static page felt too quiet.

---

## What I'm working on

**Spiking Neural Networks on FPGA for Event-Camera Vision** — final-year project, University of Manchester  
An optimised FPGA implementation (AMD Zynq UltraScale+ ZCU102) of a spiking neural network that selects regions of interest from event-camera output, so a smaller downstream network classifies only the crop. I'm measuring power, latency and resource utilisation against an ARM software baseline and SpiNNaker. Supervised by Dr Davide Bertozzi.

**Research interests**  
Hardware-software co-design for efficient, event-driven computation; neuromorphic systems; operating systems and compilers for novel hardware.

---

## The work I'm most proud of

**Geppetto** — [try the public tour](https://the-geppetto-bodega.netlify.app)  
Hand skills are taught in person, one learner at a time, and a video can't tell you which finger is wrong. Geppetto records an expert once with Rokoko motion-capture gloves. A learner then trains against the expert's ghost hand in 3D and gets a score for each finger, 30 times a second. The same glove stream drives a robot hand twin, joined to your fingertips by marionette strings. Two of us built it in one weekend at Junction 2026, with a self-hosted Gemma model that we tuned on our own glove data as the coach. It took 3rd place in the Rokoko Robot Teleoperation Challenge, 3rd place in the Verda Compute Track, and was one of three winners of Best Use of Gemma from Google DeepMind.

**Bare-metal RISC-V SoC** — [github.com/Arpan-206/RustMicroController](https://github.com/Arpan-206/RustMicroController)  
It started as coursework and I kept extending it. A machine-mode OS layer in RISC-V assembly, a custom Rust toolchain, and — because software rendering was too slow on the core — a memory-mapped hardware drawing engine in SystemVerilog. When something broke, the bug could be in my hardware, my compiler, my OS or my application. I finished when a two-player Pong, written in Rust, ran on it.

**CCBench** — [ccbench.org](https://ccbench.org)  
I built this at CodeCrafters because existing benchmarks were too easy to game. CCBench runs coding agents against small, private codebases they've never seen, measuring actual reasoning instead of memorised patterns. It started as an internal tool and got launched publicly.

**Scopus collaboration atlas** — Manchester Institute of Innovation Research  
A five-tier Polars and RapidFuzz pipeline that resolved 5.78M Scopus affiliation IDs to 9,603 universities across 141M records. On top of it: a 10.19M-edge co-publication network spanning 170 countries, a BERT classifier sorting 1.18M AI papers into four collaboration modes, and an interactive Streamlit and Pydeck atlas so researchers can explore it themselves.

**Mr. Spiky** — [github.com/Arpan-206/mr-spiky](https://github.com/Arpan-206/mr-spiky)  
What does senior developer intuition actually look like, encoded as math? Mr. Spiky is an unsupervised AI code-review tool built on spiking neural networks. It trained on 2,680+ real functions from CPython, Django, and FastAPI, and flags structural red flags across 6 interpretable axes — nesting depth, cyclomatic complexity, variable reach, delegation density, and more. Not a linter. A structural conscience. It won Null Hack 3.0.

**BIOMET** — [biomet.vercel.app](https://biomet.vercel.app)  
A periocular biometric system built for the 850M+ people worldwide without a legal identity. Raspberry Pi, real-time GPIO, ML inference, custom CAD housing. Took it to NASA Space Center Houston and won PowerPitch at the Conrad Challenge.

**This portfolio** — [github.com/Arpan-206/IDE-Portfolio](https://github.com/Arpan-206/IDE-Portfolio)  
Most portfolios are glorified CVs. I wanted mine to feel alive. Zed-inspired layout, Monaco editor, live file tree, Rust compiled to WASM running a shell in your browser. You're inside it right now.

**Terminal Portfolio** — `ssh ssh.arpanpandey.dev`  
Before the IDE, there was the SSH portfolio. Type that command in a real terminal and you get a full TUI — keyboard navigation, Glamour-rendered markdown, blog posts. Built in Go with Bubble Tea.

---

## Published

**ACM TechBrief: AI-Assisted Software Development, or Vibe Coding**  
*S. Garfinkel, M. Sankaran, R. Sharma, A. Balasubramanian Shrinivass, A. Pandey, A. Kumar — ACM Technology Policy Council, Issue 17, 2026*  
A policy-facing brief on the risks and benefits of AI-driven development. Published before I finished Year 2.

→ [doi.org/10.1145/3807518](https://doi.org/10.1145/3807518)

**No Frames Attached: A Spiking Neural Network for Your Webcam**  
*XRDS: Crossroads, The ACM Magazine for Students — "Hello World" column. Accepted September 2026, forthcoming.*  
A hands-on introduction to event cameras and spiking networks: turn a five-second webcam capture into an event stream, then watch an 8-neuron network track the motion.

→ [github.com/Arpan-206/xrds-snn-hello-world](https://github.com/Arpan-206/xrds-snn-hello-world)

---

## What I reach for

```
Hardware    SystemVerilog · Verilog · Vivado · Vitis HLS · FPGA (ZCU102) · RISC-V
Languages   Python · Rust · Go · TypeScript · C/C++ · OCaml · Java · Ruby · SQL
ML & data   PyTorch · snnTorch · Brian2 · BERT · Polars · NetworkX
Web         Rails · Ember · Astro · React · FastAPI · Django · Flask
Systems     Docker · Linux · PostgreSQL · GitHub Actions · WASM · Temporal
Embedded    Raspberry Pi · ESP32 · Arduino · OpenCV
```

---

## Beyond the code

From November 2024 to June 2026 I chaired UniCS — the University of Manchester's CS society, representing 1,500+ students. I secured £55k in annual funding, directed three hackathons (GreatUniHack twice and StudentHack, 150+ participants each), and rewrote the society's constitution.

Before that, I spent nearly two years at Hack Club directing the Special Activities Division. During Hack Club Arcade we ran 20+ global events, engaged 2,000+ participants, and distributed over $100,000 in prizes. I led the supply chain that shipped 5,000+ items worldwide, and co-built the ten-person fraud prevention team.

I sit on the ACM Europe Technology Policy Committee, after three years on its US counterpart. I also teach: the first-year Verilog lab at Manchester, electronics and PCB design workshops, and before that 15 programming sessions for learners in 12 countries on Schoolhouse.world.

I'm also a licensed amateur radio operator — KC1TPD in the US, VU3OIZ in India.

---

## Let's talk

I'm based in Manchester during term, Delhi otherwise. I graduate in summer 2027. I'm open to graduate roles, research collaborations, open-source work, and interesting conversations.

[hello@arpanpandey.dev](mailto:hello@arpanpandey.dev) &nbsp;·&nbsp; [linkedin.com/in/arpan-pandey](https://linkedin.com/in/arpan-pandey) &nbsp;·&nbsp; [github.com/Arpan-206](https://github.com/Arpan-206)
