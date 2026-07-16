# Color Palette

Color is how COVALIDA feels before a single word is read: calm, premium, and unmistakably teal. The palette is deliberately narrow — five core colors carry the entire brand. Restraint is the point. A wide, whitespace-rich canvas with one confident teal reads as sovereign and modern, not loud.

::: tip HEX is the source of truth
Every value below is authoritative as **HEX**. COVALIDA is a 100% digital brand, so there is **no CMYK and no Pantone** — screen color only. RGB and HSL are provided for convenience on the **[Design Tokens](/downloads/tokens)** page. Never convert these colors for print; there is no print.
:::

## The core five

<div class="swatch-grid">
  <div class="swatch-card">
    <div class="chip" style="background:#008080"></div>
    <div class="meta"><div class="name">Deep Teal</div><div class="hex">#008080</div><div class="use">Primary — brand color, key surfaces, primary emphasis</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#20B2AA"></div>
    <div class="meta"><div class="name">Light Teal</div><div class="hex">#20B2AA</div><div class="use">Accent — lines, highlights, data-viz (not small text on white)</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#155D5B"></div>
    <div class="meta"><div class="name">Deep Petrol</div><div class="hex">#155D5B</div><div class="use">Deep — button backgrounds, icon circles, gradient end</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#2F4F4F"></div>
    <div class="meta"><div class="name">Deep Slate Gray</div><div class="hex">#2F4F4F</div><div class="use">Text — body copy and the wordmark</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#CDE9E6"></div>
    <div class="meta"><div class="name">Light Mint</div><div class="hex">#CDE9E6</div><div class="use">Surface — section backgrounds, calm fills</div></div>
  </div>
</div>

## Each color's role

### Deep Teal — #008080

<span class="color-swatch"><span class="dot" style="background:#008080"></span> #008080</span> · `rgb(0, 128, 128)` · `hsl(180, 100%, 25%)`

The primary brand color and the anchor of everything. Deep Teal is the color a viewer should remember. Use it for the strongest single point of emphasis on a screen — a primary action, an active state, a key figure — and for the brand's core surfaces. It is dark enough to carry white text at large sizes and passes contrast for body text on white and mint. When in doubt, this is "the COVALIDA color."

### Light Teal — #20B2AA

<span class="color-swatch"><span class="dot" style="background:#20B2AA"></span> #20B2AA</span> · `rgb(32, 178, 170)` · `hsl(177, 70%, 41%)`

The accent. Light Teal adds life and lift — hairline rules, chart series, hover highlights, decorative underlines, and the lighter end of gradients. It is bright and low-contrast against white, so treat it as a graphic accent, **not a text color on white** (small Light Teal type on white fails contrast). Reserve it for the 10% accent role — a little goes a long way.

### Deep Petrol — #155D5B

<span class="color-swatch"><span class="dot" style="background:#155D5B"></span> #155D5B</span> · `rgb(21, 93, 91)` · `hsl(178, 63%, 22%)`

The deep, grounding teal. Deep Petrol is where teal goes to feel solid: button backgrounds, filled icon circles, footers, and the dark end of the signature gradient. It carries white text comfortably at any size and gives the palette weight without going fully black. Pair it with Light Mint or white for a composed, premium contrast.

### Deep Slate Gray — #2F4F4F

<span class="color-swatch"><span class="dot" style="background:#2F4F4F"></span> #2F4F4F</span> · `rgb(47, 79, 79)` · `hsl(180, 25%, 25%)`

The text color and the wordmark color. Deep Slate Gray is a teal-tinted near-charcoal — never a pure, cold `#000`. Using a warm-teal gray for body copy keeps long text calm and on-brand while staying highly legible. This is the default for headings and paragraphs on light backgrounds, and the color of the COVALIDA wordmark.

### Light Mint — #CDE9E6

<span class="color-swatch"><span class="dot" style="background:#CDE9E6"></span> #CDE9E6</span> · `rgb(205, 233, 230)` · `hsl(174, 39%, 86%)`

The signature surface. Light Mint is the soft, airy tint that fills section backgrounds, cards, and callouts — the "breathing room" color that makes the brand feel spacious and premium. It is a background, never a text color. Slate text and Deep Teal both read cleanly on top of it.

## The signature gradient

The Core-Shield symbol is filled with a single diagonal teal gradient. It runs from a bright mint-teal down to Deep Petrol, giving the mark depth and the sense of a living force-field around the company core. Use the gradient only where brand guidance allows — the symbol itself, hero accents, and large graphic shapes. **Never place body text on it**, and never recolor it.

<div class="color-scale">
  <div style="background:#2DB3A4;color:#0e3a38">#2DB3A4</div>
  <div style="background:#25A699;color:#fff">#25A699</div>
  <div style="background:#1A847F;color:#fff">#1A847F</div>
  <div style="background:#155D5B;color:#fff">#155D5B</div>
</div>

```css
background: linear-gradient(135deg, #2db3a4 0%, #25a699 38%, #1a847f 68%, #155d5b 100%);
```

The four stops are `#2DB3A4 → #25A699 → #1A847F → #155D5B`, blended at a 135° diagonal. See **[Methodology](/colors/methodology)** for when to reach for the gradient versus a flat fill.

## Quick reference

| Role | Name | HEX | Primary use |
|------|------|-----|-------------|
| Primary | Deep Teal | `#008080` | Brand color, primary emphasis, key surfaces |
| Accent | Light Teal | `#20B2AA` | Lines, highlights, data-viz accents |
| Deep | Deep Petrol | `#155D5B` | Buttons, icon circles, gradient end |
| Text | Deep Slate Gray | `#2F4F4F` | Body copy, headings, wordmark |
| Surface | Light Mint | `#CDE9E6` | Backgrounds, cards, calm fills |

## Where to go next

- **[Scales & Tints](/colors/scales)** — the full teal scale from 50 to 900 and which step to use where.
- **[Semantic Colors](/colors/semantic)** — success, warning, error, and info for UI states.
- **[Methodology](/colors/methodology)** — the 60-30-10 ratio, pairing rules, and flat-vs-gradient decisions.
- **[Design Tokens](/downloads/tokens)** — copy-paste HEX, RGB, HSL, and CSS custom properties.

::: info Accessibility first
Teal on white and slate on mint are comfortable, legible pairings — but always verify combinations before shipping. The **[Accessibility](/accessibility/)** section documents the tested contrast ratios for every core pairing.
:::
