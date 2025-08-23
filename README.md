# 🌐 Personal Homepage (static)

A minimalist, modern personal homepage built with just HTML + CSS. No frameworks, no build step, zero runtime dependencies. Designed to be fast, accessible, and easy to host on Cloudflare Pages. The site is intentionally served under the `/ira` path.

Live path targets:
- Site: https://fabioo.live/ira
- Blog: https://blog.fabioo.live/ira

## What’s inside

- `ira/index.html` — the entire site (inline CSS, light/dark support)
- `ira/favicon/` — favicon set and manifest
- `ira/keybase.txt` — Keybase proof file (served from `/ira/`)
- `index.html` — a minimal root redirect to `/ira/`
- `_headers` — cache rules for `/ira` paths
- `LICENSE` — unchanged

All asset links in `ira/index.html` use relative paths so the site works under the `/ira` subpath without rewriting.

## Local preview

- Easiest: open `ira/index.html` directly in your browser.
- Or serve the repo root and visit `http://localhost:8080/ira/`:
  - Python: `python3 -m http.server 8080`
  - Node: `npx serve -l 8080`

## Deploying on Cloudflare Pages

You have two good options:

### Option A — Connect the repo (recommended)

1) In the Cloudflare dashboard, create a Pages project and connect this repository.
2) Build settings:
   - Framework preset: None
   - Build command: None
   - Output directory: .
3) Deploy.

This publishes the repository root as-is. Your site will be available under `/ira` on your domain. The root `index.html` redirects to `/ira/`.

### Option B — Direct Uploads

1) Zip the repository (or just the files you want to publish).
2) Create a Pages project using “Direct Uploads” and upload the archive.
3) Deploy.

## Served under /ira

This site is designed to live under the `/ira` subpath. No Worker is required for this setup. If you later want the site at the domain root, move the contents of `ira/` to the repository root and adjust paths in `index.html` and `_headers`.

## Headers and caching

Cloudflare Pages supports a `_headers` file in your repo to define custom headers and caching. This repo includes one targeting `/ira` paths. Typical rules:

```
/ira/index.html
  Cache-Control: no-store

/ira/
  Cache-Control: no-store

/ira/*.html
  Cache-Control: no-store

/ira/favicon/*
  Cache-Control: public, max-age=31536000, immutable
```

Commit changes and redeploy whenever you adjust these rules.

## Customization

- Social links: Update the hrefs inside `ira/index.html`.
- SEO: Update `<title>`, `<meta name="description">`, and the `<link rel="canonical">` URL (currently set to `https://fabioo.live/ira/`).
- Favicons: Replace files under `ira/favicon/` if you want a different set.
- Analytics: Cloudflare Web Analytics beacon is embedded in `ira/index.html`. Replace the token if needed.

## Why static?

- Faster: No JS frameworks or client libraries to load.
- Smaller: Single request for the page plus favicons.
- Simpler: No toolchain, no Node, no tailwind/postcss. Drop-in deploy.

## License

See LICENSE for details.