# Board comparison report

## Status

No comparative winner is asserted yet. The current evidence establishes basic HTTP behavior only; browser and repeated-load measurements remain required.

## Protocol

1. Restore the SQLite seed before a write case.
2. Start one server only; alternate which app runs first per round.
3. Warm once, then run 30-second autocannon trials at concurrency 1, 10 and 50, five times each.
4. Store autocannon JSON unmodified under `raw/`; transcribe aggregate values to `summary.csv`.
5. Capture browser LCP, transferred JS/CSS/total bytes and like-click-to-painted-update independently in the same viewport.

## Limits

The server and generator currently share an Android/ARM64 executor. That makes CPU and memory contention a material limitation. The Next build uses WASM SWC + Webpack; no inference about another platform's build cost is valid.
