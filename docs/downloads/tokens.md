# Design Tokens

Copy-paste values for building on-brand interfaces. HEX is authoritative; RGB and HSL are provided for convenience. Because COVALIDA is a 100% digital brand, there are **no CMYK or Pantone** values — screen color only.

## Core palette

| Token | Name | HEX | RGB | HSL |
|-------|------|-----|-----|-----|
| <span class="color-swatch"><span class="dot" style="background:#008080"></span></span> Primary | Deep Teal | `#008080` | `rgb(0, 128, 128)` | `hsl(180, 100%, 25%)` |
| <span class="color-swatch"><span class="dot" style="background:#20B2AA"></span></span> Accent | Light Teal | `#20B2AA` | `rgb(32, 178, 170)` | `hsl(177, 70%, 41%)` |
| <span class="color-swatch"><span class="dot" style="background:#155D5B"></span></span> Deep | Deep Petrol | `#155D5B` | `rgb(21, 93, 91)` | `hsl(178, 63%, 22%)` |
| <span class="color-swatch"><span class="dot" style="background:#2F4F4F"></span></span> Text | Deep Slate Gray | `#2F4F4F` | `rgb(47, 79, 79)` | `hsl(180, 25%, 25%)` |
| <span class="color-swatch"><span class="dot" style="background:#CDE9E6"></span></span> Surface | Light Mint | `#CDE9E6` | `rgb(205, 233, 230)` | `hsl(174, 39%, 86%)` |

## Signature gradient

The symbol's diagonal gradient runs from a light mint-teal to deep petrol. Use it only where the brand asset guidance allows (the symbol, hero accents) — never behind body text.

<div class="color-scale">
  <div style="background:#2DB3A4;color:#fff">#2DB3A4</div>
  <div style="background:#25A699;color:#fff">#25A699</div>
  <div style="background:#1A847F;color:#fff">#1A847F</div>
  <div style="background:#155D5B;color:#fff">#155D5B</div>
</div>

```css
background: linear-gradient(135deg, #2db3a4 0%, #25a699 38%, #1a847f 68%, #155d5b 100%);
```

## Teal scale

The extended scale for UI states, surfaces and data visualization. `500` is the primary Deep Teal.

<div class="color-scale">
  <div style="background:#e8f4f4;color:#155d5b">50</div>
  <div style="background:#cde9e6;color:#155d5b">100</div>
  <div style="background:#9bd3ce;color:#155d5b">200</div>
  <div style="background:#5fb8b1;color:#0e3a38">300</div>
  <div style="background:#20b2aa;color:#fff">400</div>
  <div style="background:#008080;color:#fff">500</div>
  <div style="background:#0a6e6e;color:#fff">600</div>
  <div style="background:#155d5b;color:#fff">700</div>
  <div style="background:#124b49;color:#fff">800</div>
  <div style="background:#0e3a38;color:#fff">900</div>
</div>

## CSS custom properties

```css
:root {
  /* Core brand colors */
  --cv-primary: #008080; /* Deep Teal */
  --cv-accent:  #20b2aa; /* Light Teal */
  --cv-petrol:  #155d5b; /* Deep Petrol */
  --cv-slate:   #2f4f4f; /* Deep Slate Gray — text */
  --cv-mint:    #cde9e6; /* Light Mint — surfaces */

  /* Teal scale */
  --cv-teal-50:  #e8f4f4;
  --cv-teal-100: #cde9e6;
  --cv-teal-200: #9bd3ce;
  --cv-teal-300: #5fb8b1;
  --cv-teal-400: #20b2aa;
  --cv-teal-500: #008080;
  --cv-teal-600: #0a6e6e;
  --cv-teal-700: #155d5b;
  --cv-teal-800: #124b49;
  --cv-teal-900: #0e3a38;

  /* Signature gradient */
  --cv-gradient: linear-gradient(135deg, #2db3a4 0%, #25a699 38%, #1a847f 68%, #155d5b 100%);

  /* Typography */
  --cv-font-family: "Montserrat", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

## Semantic tokens

| Purpose | HEX | Notes |
|---------|-----|-------|
| Success | `#22C55E` | Confirmation, valid state |
| Warning | `#EAB308` | Caution, needs attention |
| Error | `#EF4444` | Failure, destructive action |
| Info | `#008080` | Neutral information — uses brand teal |

## Typography reference

| Property | Value |
|----------|-------|
| Typeface | **Montserrat** (Google Fonts, SIL Open Font License) |
| Weights | 400 Regular · 500 Medium · 600 SemiBold · 700 Bold · 800 ExtraBold |
| Wordmark / display | 800 ExtraBold |
| Headings | 700 Bold · 800 ExtraBold |
| Body | 400 Regular · 500 Medium |
| Fallback stack | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` |

::: tip Self-host for compliance
COVALIDA self-hosts Montserrat (via `@fontsource/montserrat`) rather than calling the Google Fonts CDN, so no visitor data leaves the site — a small detail that models the compliance posture the brand sells. See **[Font Stack](/typography/font-stack)**.
:::
