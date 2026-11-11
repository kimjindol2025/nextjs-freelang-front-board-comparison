# Next.js board comparison

FreeLang Front implementation with identical schema, seed, SQL predicates, 20-row pagination and UI is next door at `../freelang-front-board`.

## Run

```bash
pnpm install
pnpm db:init
pnpm build
pnpm start
```

The `data` link resolves to `../shared-data`; initialise it exactly once before either app is run. No environment variables are required.

`@next/swc-wasm-nodejs` is pinned only to make the build work on the Android/ARM64 comparison executor, where Next does not publish a native SWC package. It affects build tooling, not the Node server runtime.

## Measure

```bash
curl -o /dev/null -s -w 'TTFB=%{time_starttransfer}\n' http://localhost:3000/
curl -o /dev/null -s -w 'TTFB=%{time_starttransfer}\n' 'http://localhost:3000/?q=%EA%B3%B5%EC%A7%80&page=2'
du -sh .next
```

Use Chrome DevTools/Lighthouse mobile for transferred JavaScript, LCP and INP. Use the same warmed/cold process state and the same shared database for both applications.
