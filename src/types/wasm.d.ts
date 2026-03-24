declare module "/wasm/portfolio-wasm/portfolio_wasm.js" {
  const init: (
    input?: RequestInfo | URL | Response | BufferSource | WebAssembly.Module,
  ) => Promise<unknown>;

  export default init;

  export class Shell {
    constructor(initJson: string);
    process(input: string): string;
    complete(input: string): string;
  }
}
