# COVALIDA — Brand Guide

The official corporate identity and brand guide for **COVALIDA Compliance**, built with [VitePress](https://vitepress.dev) and deployed to GitHub Pages at **[brand-guide.covalida.com](https://brand-guide.covalida.com)**.

It is a designer-facing reference: the visual identity (logo, color, typography, iconography, imagery), the five-pillar brand architecture, digital application guidance, and downloadable, production-ready assets (SVG + high-resolution PNG) generated from the source vectors.

## Tech stack

- **VitePress** — static documentation site generator
- **Montserrat** — house typeface, self-hosted via `@fontsource/montserrat` (no third-party font CDN, for GDPR)
- **sharp** — renders high-resolution PNGs and favicons from the source SVGs
- **Node.js 24** (see [`.nvmrc`](.nvmrc))

## Getting started

```bash
# Install dependencies (Node 24)
npm install

# Start the dev server (regenerates raster assets first)
npm run docs:dev

# Production build (regenerates assets, then builds to docs/.vitepress/dist)
npm run docs:build

# Preview the production build
npm run docs:preview
```

## Asset generation

The logo, symbol, pillar icons and favicons are authored as SVG under `docs/public/brand/`. High-resolution PNGs, favicons and the Open Graph image are generated from them:

```bash
npm run generate:assets
```

This runs automatically before `docs:dev` and `docs:build` (via `predocs:*` hooks). Generated PNGs are git-ignored and produced fresh in CI — only the source SVGs are committed.

## Project structure

```text
docs/
├── .vitepress/
│   ├── config.ts            # single-locale (EN) config, nav, sidebar, head, sitemap
│   └── theme/               # custom theme: teal design tokens, print stylesheet, footer
├── public/
│   ├── brand/               # source SVGs (logo, symbol, pillar icons, reference sheets)
│   ├── downloads/png/        # generated PNGs (git-ignored)
│   ├── favicon.svg · CNAME · robots.txt
│   └── *.png                # generated favicons + OG image (git-ignored)
├── brand/ logo/ colors/ …   # content pages (markdown)
└── index.md                 # home
scripts/
└── generate-assets.mjs      # SVG → PNG pipeline (sharp)
```

## Deployment

Pushes to `main` that touch `docs/**`, `scripts/**` or the workflow trigger [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which lints, builds (generating assets), and deploys to GitHub Pages. The custom domain is set via `docs/public/CNAME`.

## Notes

- **Single language:** the site is English-only. The brand's business documentation is German, but the public brand guide and claims are English.
- **100% digital:** COVALIDA is a fully digital brand — there is intentionally no stationery, print, CMYK or Pantone guidance.
- **Security audit:** `npm audit` reports advisories in the VitePress dev toolchain (Vite / esbuild dev server, markdownlint). These affect only the local dev server and build tooling — never the deployed static output, which contains no server. `npm audit fix --force` would break VitePress and is not applied.

## License

Site code is licensed under [MIT](LICENSE). Brand assets are © COVALIDA Compliance and provided for producing official COVALIDA communications.
