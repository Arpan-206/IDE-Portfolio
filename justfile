# Root Justfile for arpan-portfolio (bun-first)

set shell := ["sh", "-uc"]

default:
  @just --list

dev:
  bun run dev

build:
  bun run build

start:
  bun run start

lint:
  bun run lint

format:
  bun run format

# Build the WASM bundle for the terminal backend
wasm-build:
  cd portfolio-wasm && bunx wasm-pack build --target web --out-dir ../public/wasm/portfolio-wasm
