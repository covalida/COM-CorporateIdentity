# Font Stack

How Montserrat actually reaches the screen. This page covers the technical delivery: why COVALIDA **self-hosts** the font, the exact weights loaded, the full `font-family` fallback stack, and copy-paste CSS. If you are building anything that renders COVALIDA text — a website, an email template, a Trust Center view — start here.

## Self-hosted, on purpose

COVALIDA loads Montserrat from its own origin via the **`@fontsource/montserrat`** package — **not** from the Google Fonts CDN.

This is a deliberate, on-brand decision. A request to `fonts.googleapis.com` sends the visitor's IP address and request headers to a third party before a single word is read. For a brand whose entire product is EU compliance, that is the wrong first impression. Self-hosting means:

- **No third-party font call.** No visitor data leaves the site to render text. This is the GDPR-clean posture German courts have repeatedly favored over CDN-loaded webfonts.
- **The brand practices what it sells.** The delivery method itself models the compliance discipline COVALIDA offers clients — a detail C-level visitors notice.
- **Performance and resilience.** Fonts ship from the same origin as the page: one fewer DNS lookup, one fewer point of failure, and full control over caching.

::: tip Compliance as a design decision
Self-hosting the typeface is not a performance footnote — it is a small proof of the brand promise. "Securing the Core" starts with not leaking your visitors' data to load a headline.
:::

## What `@fontsource` provides

`@fontsource` packages Montserrat (SIL Open Font License) as versioned npm modules with the `.woff2` and `.woff` files plus ready-made `@font-face` CSS. You import only the weights you need; each import registers one `@font-face` rule for the `Montserrat` family.

COVALIDA loads exactly **five weights**, matching the [type system](/typography/):

```ts
// docs/.vitepress/theme/index.ts
import '@fontsource/montserrat/400.css' // Regular  — body
import '@fontsource/montserrat/500.css' // Medium   — captions, labels, kickers
import '@fontsource/montserrat/600.css' // SemiBold — H4, buttons
import '@fontsource/montserrat/700.css' // Bold     — H1–H3
import '@fontsource/montserrat/800.css' // ExtraBold— wordmark, display
```

Load **only these five**. Every extra weight or italic is another file to download; the brand does not use them, so do not import them. Montserrat's italics are not part of the COVALIDA system — use them nowhere.

## The font-family fallback stack

A font file takes a moment to load, and occasionally fails. The fallback stack decides what the visitor sees in that gap. COVALIDA's stack leads with Montserrat, then hands off to the best native geometric-humanist sans on each platform, so the layout barely shifts.

```css
font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

Each fallback is chosen on purpose:

| Fallback | Platform | Why |
|----------|----------|-----|
| `system-ui` | All modern browsers | Resolves to the OS UI font — the fastest, most native match |
| `-apple-system` | Safari (macOS / iOS) | San Francisco — a clean, humanist sans close to Montserrat's feel |
| `BlinkMacSystemFont` | Chrome on macOS | San Francisco via Blink |
| `Segoe UI` | Windows | The default Windows humanist sans |
| `Roboto` | Android / Chrome OS | Google's neutral, geometric-leaning sans |
| `Helvetica Neue` | Older macOS | Reliable grotesque fallback |
| `Arial` | Universal | Present on virtually every device |
| `sans-serif` | Everywhere | Final guarantee — never a serif |

The stack degrades *gracefully*: every fallback is a sans-serif with a comparable x-height, so if Montserrat is momentarily unavailable the page stays legible and on-brand, never jarring.

## The `--cv-font-family` token

Reference the brand font through a single custom property. Define it once, use it everywhere — never hard-code the stack in component styles.

```css
:root {
  --cv-font-family: "Montserrat", system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

body {
  font-family: var(--cv-font-family);
}
```

::: info Two forms of the same token
The short token `--cv-font-family` in **[Design Tokens](/downloads/tokens)** is the portable form for external builds. Inside this VitePress site the same stack is wired to VitePress's own `--vp-font-family-base`, which is why every page here renders in Montserrat automatically. Both resolve to Montserrat first, then the identical native fallbacks.
:::

## Controlling the load: `font-display`

`@fontsource` sets `font-display: swap` by default — text renders immediately in a fallback, then swaps to Montserrat when it arrives. That is the right default for COVALIDA: content is never invisible while a font loads. Because the fallbacks are metrically close, the swap is subtle rather than a visible jump.

For a hero wordmark where you want to avoid any flash, preload the ExtraBold `.woff2` so it is ready before first paint:

```html
<link
  rel="preload"
  as="font"
  type="font/woff2"
  href="/fonts/montserrat-latin-800-normal.woff2"
  crossorigin
/>
```

Preload sparingly — one or two weights at most. Preloading everything defeats the purpose and slows first paint.

## Weights reference

The five `@font-face` faces registered under the `Montserrat` family, and where each is used:

| Import | `font-weight` | Name | Used for |
|--------|---------------|------|----------|
| `400.css` | 400 | Regular | Body, long-form text, table cells |
| `500.css` | 500 | Medium | Captions, labels, kickers, UI text |
| `600.css` | 600 | SemiBold | H4, button labels, small emphasis |
| `700.css` | 700 | Bold | H1–H3, section titles |
| `800.css` | 800 | ExtraBold | Wordmark, display, hero headlines, big numbers |

::: warning Do not synthesize weights
Only call `font-weight` values that are actually loaded (400 / 500 / 600 / 700 / 800). Asking for `300` or `900` makes the browser *synthesize* a fake weight — a distorted, off-brand rendering. Stick to the five.
:::

## Non-web surfaces

For contexts without a live stylesheet — an HTML email, a slide deck, an embedded widget — Montserrat may not be available and cannot always be embedded. The rule is the same: **fall back to a system sans, never a serif.**

```css
/* Email-safe declaration */
font-family: "Montserrat", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

Because COVALIDA is a **100% digital brand**, there is no print, stationery or physical font licensing to manage — only screen delivery, which the self-hosted stack fully covers.

## Related

- **[Typography overview](/typography/)** — Montserrat, its character and the five weights.
- **[Type Hierarchy](/typography/hierarchy)** — the digital type scale and CSS variables.
- **[Design Tokens](/downloads/tokens)** — the `--cv-font-family` token alongside color tokens.
