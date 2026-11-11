# Board comparison plan

## Goal

Implement the same notice-board workload in two isolated applications:

- `nextjs-board`: Next.js App Router + TypeScript + Node built-in SQLite.
- `freelang-front-board`: FreeLang Front `.flx` + the same SQLite database.

## Fairness constraints

- Both `data` links resolve to `shared-data`, including the single `board.db` file.
- Both use the same schema, 1,000-row seed, page size (20), SQL predicates and ordering.
- No ORM, UI/state library, authentication, upload, realtime feature, or application cache.
- The only interactive control is the like button: a Next Client Component and a FreeLang Island.

## Stages

1. Create shared schema/seed and initialise the shared database.
2. Implement and build the Next app.
3. Implement and build the FreeLang Front app.
4. Smoke-test equivalent HTML/API/write paths and document measurement commands.
5. Record functional evidence and benchmark protocol without changing application behavior.

## Scope notes

The Next implementation necessarily uses TypeScript and Node because they are the requested framework runtime. The FreeLang implementation uses `.flx` for app behavior; copied FreeLang Front build/runtime adapters are framework infrastructure, not application code.

## Task-log limitation

No configured task-tracker integration is available in this session. This plan is the local durable task record.
