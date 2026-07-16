/**
 * COVALIDA Brand Guide — Raster asset generation
 * -------------------------------------------------
 * Renders high-resolution PNGs from the source SVGs (logos, symbol,
 * pillar icons), plus favicons and an Open Graph image.
 *
 * All source SVGs embed their text as vector outlines, so rendering
 * needs no fonts — sharp (librsvg/resvg) rasterizes them faithfully.
 *
 * Density is supersampled relative to each SVG's viewBox so edges and
 * gradients stay crisp at the target pixel size, then the render is
 * resized to the exact output width.
 *
 * Usage:  npm run generate:assets   (runs automatically before build)
 */

import sharp from 'sharp'
import { readFile, mkdir, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = resolve(__dirname, '..', 'docs', 'public')
const PNG_DIR = join(PUBLIC, 'downloads', 'png')

// ── Source SVG → PNG size manifests ──────────────────────────────
const ICONS = [
  { src: 'brand/covalida-icon.svg', name: 'covalida-icon', sizes: [256, 512, 1024, 2048] },
  { src: 'brand/covalida-icon-flat.svg', name: 'covalida-icon-flat', sizes: [256, 512, 1024, 2048] },
  { src: 'brand/pillars/core.svg', name: 'pillar-core', sizes: [512, 1024] },
  { src: 'brand/pillars/tech-trust.svg', name: 'pillar-tech-trust', sizes: [512, 1024] },
  { src: 'brand/pillars/traceability.svg', name: 'pillar-traceability', sizes: [512, 1024] },
  { src: 'brand/pillars/circularity.svg', name: 'pillar-circularity', sizes: [512, 1024] },
  { src: 'brand/pillars/training.svg', name: 'pillar-training', sizes: [512, 1024] },
]

const LOGOS = [
  { src: 'brand/covalida-logo-horizontal.svg', name: 'covalida-logo-horizontal', sizes: [960, 1440, 2048] },
  { src: 'brand/covalida-logo-horizontal-dark.svg', name: 'covalida-logo-horizontal-dark', sizes: [960, 1440, 2048] },
  { src: 'brand/covalida-logo-vertical.svg', name: 'covalida-logo-vertical', sizes: [720, 1080, 1440] },
  { src: 'brand/covalida-logo-vertical-dark.svg', name: 'covalida-logo-vertical-dark', sizes: [720, 1080, 1440] },
]

// Favicons + touch/app icons rendered from the flat mono mark, written to /public root.
const FAVICONS = [
  { size: 16, out: 'favicon-16.png' },
  { size: 32, out: 'favicon-32.png' },
  { size: 48, out: 'favicon-48.png' },
  { size: 180, out: 'apple-touch-icon.png' },
  { size: 192, out: 'icon-192.png' },
  { size: 512, out: 'icon-512.png' },
]

// ── Helpers ──────────────────────────────────────────────────────
function viewBoxWidth(svg) {
  const m = svg.toString().match(/viewBox="\s*[\d.+-]+\s+[\d.+-]+\s+([\d.]+)\s+([\d.]+)/)
  return m ? parseFloat(m[1]) : 512
}

/** Render an SVG buffer to a PNG at an exact output width, supersampled for crispness. */
async function renderPng(svg, outPath, width) {
  const vbW = viewBoxWidth(svg)
  // Supersample ~1.15× the target, capped so huge renders don't blow memory.
  const density = Math.min(2600, Math.max(72, Math.round((width / vbW) * 72 * 1.15)))
  await sharp(svg, { density })
    .resize({ width, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: false })
    .toFile(outPath)
}

/** Render a square PNG of an exact width×height (for favicons/app icons). */
async function renderSquare(svg, outPath, size) {
  const vbW = viewBoxWidth(svg)
  const density = Math.min(2600, Math.max(72, Math.round((size / vbW) * 72 * 1.15)))
  await sharp(svg, { density })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath)
}

let count = 0
async function emit(promise, label) {
  await promise
  count++
  console.log(`  ✓ ${label}`)
}

// ── Main ─────────────────────────────────────────────────────────
async function main() {
  console.log('COVALIDA · generating raster assets from SVG …')
  await mkdir(PNG_DIR, { recursive: true })

  // Logos + icons → downloads/png/<name>-<width>.png
  for (const item of [...ICONS, ...LOGOS]) {
    const svg = await readFile(join(PUBLIC, item.src))
    for (const width of item.sizes) {
      const out = join(PNG_DIR, `${item.name}-${width}.png`)
      await emit(renderPng(svg, out, width), `downloads/png/${item.name}-${width}.png`)
    }
  }

  // Favicons + touch icons → public root, from the flat mono mark
  const favSvg = await readFile(join(PUBLIC, 'favicon.svg'))
  for (const f of FAVICONS) {
    await emit(renderSquare(favSvg, join(PUBLIC, f.out), f.size), f.out)
  }

  // Open Graph image (1200×630): horizontal logo centered on white
  const OG_W = 1200
  const OG_H = 630
  const hLogo = await readFile(join(PUBLIC, 'brand', 'covalida-logo-horizontal.svg'))
  const logoBuf = await sharp(hLogo, { density: 300 })
    .resize({ width: 760 })
    .png()
    .toBuffer()
  await emit(
    sharp({
      create: { width: OG_W, height: OG_H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
    })
      .composite([
        { input: logoBuf, gravity: 'center' },
        // thin brand bar along the bottom edge
        {
          input: { create: { width: OG_W, height: 12, channels: 4, background: { r: 0, g: 128, b: 128, alpha: 1 } } },
          gravity: 'south',
        },
      ])
      .png({ compressionLevel: 9 })
      .toFile(join(PUBLIC, 'og-image.png')),
    'og-image.png',
  )

  // Sanity: confirm the flat favicon actually produced output
  const produced = await readdir(PNG_DIR)
  console.log(`\nDone. ${count} raster files written (${produced.length} in downloads/png/).`)
}

main().catch((err) => {
  console.error('Asset generation failed:', err)
  process.exit(1)
})
