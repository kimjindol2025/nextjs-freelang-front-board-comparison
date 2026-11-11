# Environment

- Date: 2026-11-11 UTC
- Executor: Android/ARM64 container; load generator and servers share the same machine.
- Node: 24.17.0; Next: 16.4.6; FreeLang Front builder: copied local current implementation.
- Database: shared SQLite `shared-data/board.db`; schema and deterministic 1,000-row seed are beside it.
- SQLite settings: default journal mode, no WAL pragma, no explicit `busy_timeout`; each app uses its runtime's default connection behavior.
- Cache policy: dynamic/request-time pages and APIs in Next (`force-dynamic`); FreeLang routes execute DB queries on request. Static assets are framework defaults.
- Next build: WASM SWC + Webpack due Android/ARM64 native-SWC unavailability. Build-cost results apply only to that configuration.

## Restoration

Before every write scenario, remove `shared-data/board.db`, then apply `schema.sql` and `seed.sql` with SQLite. Do not run both servers during a load run.
