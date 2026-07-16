# Design Tokens

Copy-paste values for building on-brand interfaces. Tokens come in two parallel notations: **HEX** — the canonical, authoritative set that works in every tool (Figma, Adobe, CI, older browsers) — and **OKLCH** — a perceptually-uniform variant for wide-gamut (P3) displays and smoother tint ramps. RGB and HSL are listed for convenience. Because COVALIDA is a 100% digital brand, there are **no CMYK or Pantone** values — screen color only.

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

## Canonical token set (HEX)

The **default reference** for implementation — it works in any workflow (Figma, Adobe, CI pipelines, older browsers) and is the source of truth for all brand assets.

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

## Parallel OKLCH notation (web/display)

**Additive, not a replacement:** existing components keep using the HEX tokens. The `-oklch` suffix marks the perceptually-precise variant for wide-gamut (P3) displays and smoother programmatic tint/shade ramps. Values are derived from the canonical HEX above.

```css
:root {
  /* Core brand colors */
  --cv-primary-oklch: oklch(54.3% 0.093 194.8); /* Deep Teal */
  --cv-accent-oklch:  oklch(69.1% 0.114 189.0); /* Light Teal */
  --cv-petrol-oklch:  oklch(43.6% 0.068 192.2); /* Deep Petrol */
  --cv-slate-oklch:   oklch(40.3% 0.038 195.8); /* Deep Slate Gray */
  --cv-mint-oklch:    oklch(91.3% 0.030 188.8); /* Light Mint */

  /* Teal scale */
  --cv-teal-50-oklch:  oklch(95.8% 0.013 196.9);
  --cv-teal-100-oklch: oklch(91.3% 0.030 188.8);
  --cv-teal-200-oklch: oklch(82.7% 0.058 189.2);
  --cv-teal-300-oklch: oklch(72.6% 0.086 188.7);
  --cv-teal-400-oklch: oklch(69.1% 0.114 189.0);
  --cv-teal-500-oklch: oklch(54.3% 0.093 194.8);
  --cv-teal-600-oklch: oklch(48.8% 0.081 194.8);
  --cv-teal-700-oklch: oklch(43.6% 0.068 192.2);
  --cv-teal-800-oklch: oklch(37.7% 0.057 191.6);
  --cv-teal-900-oklch: oklch(31.8% 0.047 190.7);

  /* Signature gradient */
  --cv-gradient-oklch: linear-gradient(135deg,
    oklch(69.4% 0.113 183.7) 0%,
    oklch(65.6% 0.108 184.6) 38%,
    oklch(55.6% 0.090 190.0) 68%,
    oklch(43.6% 0.068 192.2) 100%);

  /* Semantic */
  --cv-success-oklch: oklch(72.3% 0.192 149.6);
  --cv-warning-oklch: oklch(79.5% 0.162 86.0);
  --cv-error-oklch:   oklch(63.7% 0.208 25.3);
  --cv-info-oklch:    oklch(54.3% 0.093 194.8); /* = brand teal */
}
```

::: tip Which notation when?

- **Standard components** → `var(--cv-teal-500)` (HEX): works everywhere, no fallback needed.
- **Wide-gamut hero / P3 displays** → `var(--cv-teal-500-oklch)` for maximum fidelity and smoother tint ramps.
- **SVG logos & asset export** → always use the HEX from the brand assets directly; never back-convert from OKLCH.

See the [Color Methodology](/colors/methodology) for the full notation hierarchy.
:::

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
