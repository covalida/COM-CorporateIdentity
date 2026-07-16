# Scales & Tints

The five [core colors](/colors/) define the brand. The extended teal scale makes it buildable. Ten evenly-judged steps — from the near-white `50` to the near-black `900` — give designers a full range of surfaces, borders, interactive states, and text colors that all stay in the same teal family. Step `500` is the primary Deep Teal; everything else is a tint (lighter) or shade (darker) of the same hue.

<div class="color-scale">
  <div style="background:#e8f4f4;color:#155d5b">50</div>
  <div style="background:#cde9e6;color:#155d5b">100</div>
  <div style="background:#9bd3ce;color:#155d5b">200</div>
  <div style="background:#5fb8b1;color:#0e3a38">300</div>
  <div style="background:#20b2aa;color:#0e3a38">400</div>
  <div style="background:#008080;color:#fff">500</div>
  <div style="background:#0a6e6e;color:#fff">600</div>
  <div style="background:#155d5b;color:#fff">700</div>
  <div style="background:#124b49;color:#fff">800</div>
  <div style="background:#0e3a38;color:#fff">900</div>
</div>

::: tip Read the label contrast
Notice how the labels flip: dark ink on steps `50–400`, white ink from `500` down. That crossover — around step `500` — is the practical line between "background/accent" colors and "text/fill" colors. If a step needs white text to stay legible on it, it is dark enough to carry white UI text too.
:::

## The ten steps

| Step | HEX | Typical role |
|------|-----|--------------|
| 50 | `#e8f4f4` | Lightest surface, hover tint on white |
| 100 | `#cde9e6` | Primary surface — same as Light Mint |
| 200 | `#9bd3ce` | Subtle borders, dividers, disabled fills |
| 300 | `#5fb8b1` | Stronger borders, focus rings, chart fills |
| 400 | `#20b2aa` | Accent — Light Teal, highlights, data-viz |
| 500 | `#008080` | Primary — Deep Teal, key emphasis |
| 600 | `#0a6e6e` | Interactive hover / pressed state |
| 700 | `#155d5b` | Deep Petrol — buttons, deep fills |
| 800 | `#124b49` | Text on light, deep footers |
| 900 | `#0e3a38` | Darkest text, maximum-contrast headings |

## How to choose a step

The scale is organized so that each band answers one design question. Pick by role, not by "how much teal do I want."

### Surfaces — 50 and 100

Backgrounds and fills that sit *behind* content. Use `50` for the faintest lift on a white page (a hovered row, a subtle panel) and `100` (Light Mint) for the standard section background, card, or callout. Both are pale enough to carry Slate `#2F4F4F` body text and Deep Teal accents cleanly.

### Borders and dividers — 200 and 300

Structure without shouting. Use `200` for quiet hairlines, table rules, and disabled-control fills. Step up to `300` when a border needs to be seen — an input outline, a focus ring, a selected card edge, or a soft fill inside a chart.

### Interactive — 400, 500, 600

The action band. `500` is the resting color of a primary element (link, active tab, key figure). `600` is its hover and pressed state — one perceptible step darker, which reads as "the button responded." `400` (Light Teal) is the bright accent for highlights and non-text emphasis; keep it off small text on white.

### Text on light — 700, 800, 900

When teal *is* the text. On white or mint, small type needs a dark step to stay accessible: `700` for teal-tinted labels and links, `800` for emphasized copy, and `900` for the darkest headings and maximum contrast. For ordinary body copy, prefer the core **Deep Slate Gray `#2F4F4F`** — reserve the deep teal steps for accented or branded text.

## Data visualization

Charts are where the full scale earns its keep. Because every step shares one hue, a monochrome teal ramp produces sequences that read as ordered and on-brand — no rainbow, no clashing.

- **Sequential data** (low → high): walk the scale, e.g. `100 → 300 → 500 → 700 → 900`. Skip a step between samples so adjacent bands stay distinguishable.
- **Categorical data** (unordered): teal alone can't carry many categories accessibly. Anchor on `500`, add `300` and `700`, then borrow a **[semantic color](/colors/semantic)** or a neutral gray for further series. Do not stretch teal into six near-identical greens.
- **Emphasis in a chart**: draw the important series in `500` or `700` and mute the rest to `200`/`300`.
- **Fills vs. lines**: use `400` for line strokes and accents; use paler steps (`100`/`200`) for area fills so overlapping regions stay readable.

::: warning Keep contrast honest
A lighter step is not always the friendlier choice. Chart labels, legends, and axis text still need to pass contrast against their background. Verify any teal-on-teal or teal-on-white text combination against the ratios in **[Accessibility](/accessibility/contrast)** before it ships.
:::

## Related

- **[Palette](/colors/)** — the five core colors and the signature gradient.
- **[Semantic Colors](/colors/semantic)** — functional colors for status and alerts.
- **[Methodology](/colors/methodology)** — the 60-30-10 ratio and pairing rules.
- **[Design Tokens](/downloads/tokens)** — every step as a CSS custom property.
