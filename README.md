# Next.js × FreeLang Front board comparison

Two deliberately small, equivalent notice-board implementations for measuring framework trade-offs without changing data, SQL workload, or basic UI.

- `nextjs-board/`: Next.js App Router + TypeScript + Node SQLite
- `freelang-front-board/`: FreeLang Front `.flx` + SQLite
- `shared-data/`: canonical schema and deterministic 1,000-row Korean seed
- `results/`: reproducible measurement protocol and report templates

Both application `data` links point to the same SQLite location for integration checks. Restore the seed before every write-performance run; see `results/environment.md`.

## License

[MIT](LICENSE)
