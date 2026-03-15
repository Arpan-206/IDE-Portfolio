"use client";

import React, { useState } from "react";
import { theme } from "@/lib/theme";
import { useIDEStore } from "@/store/ideStore";

/**
 * Toolbar — lightweight icon buttons use inline hover handling so all colors come
 * from the theme tokens. Layout/spacing classes remain Tailwind.
 */

function IconButton({
  title,
  children,
  ariaLabel,
  onClick,
}: {
  title: string;
  ariaLabel?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const [hover, setHover] = useState(false);

  return (
    <button
      aria-label={ariaLabel ?? title}
      title={title}
      className="transition-colors p-1 rounded"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        // inactive color is textMuted, active/hover color is textActive
        color: hover ? theme.textActive : theme.textMuted,
        // subtle hover background for affordance
        background: hover ? theme.bgHover : "transparent",
        fontSize: "12px",
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  const toggleTerminal = useIDEStore((s) => s.toggleTerminal);

  return (
    <div
      className="flex items-center justify-between px-3 h-9 shrink-0"
      style={{
        background: theme.bgPanel,
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      {/* Left — project name */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: theme.accentRed,
              opacity: 0.75,
            }}
          />
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: theme.accentOrange,
              opacity: 0.75,
            }}
          />
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              background: theme.accent,
              opacity: 0.75,
            }}
          />
        </div>
        <img
          src="/icon.svg"
          alt="Arpan Pandey"
          className="h-4 w-4"
          aria-hidden="true"
        />
        <span
          style={{
            color: theme.textMuted,
            fontSize: "12px",
            letterSpacing: "0.02em",
          }}
        >
          arpan-portfolio
        </span>
      </div>

      {/* Right — icon buttons */}
      <div
        className="flex items-center gap-2"
        style={{ color: theme.textMuted }}
      >
        <IconButton title="Search" ariaLabel="Search">
          <img src="/icons/app/search.svg" alt="" className="h-4 w-4" />
        </IconButton>

        <IconButton
          title="Terminal"
          ariaLabel="Terminal"
          onClick={toggleTerminal}
        >
          <img src="/icons/app/bash.svg" alt="" className="h-4 w-4" />
        </IconButton>

        <IconButton title="Settings" ariaLabel="Settings">
          <img src="/icons/app/config.svg" alt="" className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
}
