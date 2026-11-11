# FreeLang Front board comparison

The application behavior is implemented in `.flx`; the copied `fl-front-build.js`, compilers and bootstrap adapter are the FreeLang Front infrastructure required to build it.

## Run

```bash
node fl-front-build.js
node runtime/bootstrap.js run _app.fl
```

The `data` link resolves to `../shared-data`, which is the exact same SQLite file used by `../nextjs-board`. Run `pnpm db:init` inside the Next app once before first use.

The default port is `40850`; override it with `PORT=40850` only when you need an explicit value.

## Measure

```bash
curl -o /dev/null -s -w 'TTFB=%{time_starttransfer}\n' http://localhost:40850/
curl -o /dev/null -s -w 'TTFB=%{time_starttransfer}\n' 'http://localhost:40850/?q=%EA%B3%B5%EC%A7%80&page=2'
du -sh _app.fl _app.fl.out.js
```

Use the same Chrome DevTools/Lighthouse profile and the same warm/cold conditions as the Next app.
