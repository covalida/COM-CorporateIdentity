# Contrast Checks

Contrast is the single most common accessibility failure — and the easiest to get right with the COVALIDA palette. This page lists every tested brand pairing with its measured ratio and its WCAG verdict, so you never have to guess. Use these numbers as authoritative; they are measured, not estimated.

::: tip The one rule to remember
For **text**, use **Deep Slate `#2F4F4F`** or **Deep Petrol `#155D5B`** on light surfaces, or **white on Deep Teal / Deep Petrol**. Reserve **Light Teal `#20B2AA`** for **non-text accents** — lines, fills, data-viz, large decorative shapes. It fails contrast as a text color.
:::

## WCAG thresholds

The verdicts below are measured against these WCAG 2.1 minimums. "Large" text means **≥ 24px**, or **≥ 19px bold**.

| Level | Normal text | Large text | UI & graphics |
|-------|-------------|------------|---------------|
| AA (baseline) | 4.5:1 | 3:1 | 3:1 |
| AAA (target) | 7:1 | 4.5:1 | — |

## Tested brand pairings

Every core pairing, ranked from strongest to weakest contrast. The badge shows the measured ratio and the highest level the pairing clears for **normal** body text.

| Foreground | Background | Ratio | Normal text | Verdict |
|-----------|-----------|-------|-------------|---------|
| Deep Slate `#2F4F4F` | White `#FFFFFF` | 8.93:1 | AAA | <span class="contrast-pass">8.93:1 · AAA</span> |
| Deep Petrol `#155D5B` | White `#FFFFFF` | 7.64:1 | AAA | <span class="contrast-pass">7.64:1 · AAA</span> |
| White `#FFFFFF` | Deep Petrol `#155D5B` | 7.64:1 | AAA | <span class="contrast-pass">7.64:1 · AAA</span> |
| Deep Slate `#2F4F4F` | Light Mint `#CDE9E6` | 6.97:1 | AA (AAA large) | <span class="contrast-pass">6.97:1 · AA</span> |
| Deep Teal `#008080` | White `#FFFFFF` | 4.77:1 | AA (AAA large) | <span class="contrast-pass">4.77:1 · AA</span> |
| White `#FFFFFF` | Deep Teal `#008080` | 4.77:1 | AA | <span class="contrast-pass">4.77:1 · AA</span> |
| Light Teal `#20B2AA` | White `#FFFFFF` | 2.62:1 | — | <span class="contrast-fail">2.62:1 · Fail</span> |
| White `#FFFFFF` | Light Teal `#20B2AA` | 2.62:1 | — | <span class="contrast-fail">2.62:1 · Fail</span> |

::: warning Read the "Verdict" carefully
Two pairings — **Deep Slate on Light Mint (6.97:1)** and **Deep Teal on White (4.77:1)** — pass AA for all text and AAA only for *large* text. They are fully safe for body copy at AA, but if you are chasing AAA on small text, switch to Deep Slate or Deep Petrol on white.
:::

## Recommended defaults

Reach for these pairings first — they are the workhorses that keep the whole system at AAA.

- **Body text:** Deep Slate `#2F4F4F` on white — <span class="contrast-pass">8.93:1 · AAA</span>. The default for paragraphs and headings on light backgrounds.
- **Links & button text:** Deep Petrol `#155D5B` on white — <span class="contrast-pass">7.64:1 · AAA</span>. The recommended text-color pairing for interactive elements.
- **Primary button:** white text on Deep Petrol `#155D5B` — <span class="contrast-pass">7.64:1 · AAA</span>. The recommended primary action.
- **Text on a mint surface:** Deep Slate `#2F4F4F` on Light Mint `#CDE9E6` — <span class="contrast-pass">6.97:1 · AA</span>. Safe for callouts and cards.

## Good and bad in practice

The examples below use the exact brand hex values so you can see each verdict rather than just read it.

### Safe for text

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:20px 0">
  <div style="background:#ffffff;color:#2f4f4f;border:1px solid #cde9e6;border-radius:10px;padding:16px">
    <div style="font-weight:700">Deep Slate on White</div>
    <div>Securing the Core. Default body text — comfortable at any size.</div>
    <div style="margin-top:8px"><span class="contrast-pass">8.93:1 · AAA</span></div>
  </div>
  <div style="background:#155d5b;color:#ffffff;border-radius:10px;padding:16px">
    <div style="font-weight:700">White on Deep Petrol</div>
    <div>Trust your Core. The recommended primary button pairing.</div>
    <div style="margin-top:8px"><span class="contrast-pass">7.64:1 · AAA</span></div>
  </div>
  <div style="background:#cde9e6;color:#2f4f4f;border-radius:10px;padding:16px">
    <div style="font-weight:700">Deep Slate on Light Mint</div>
    <div>Compliance at the Core. Safe for cards and callout surfaces.</div>
    <div style="margin-top:8px"><span class="contrast-pass">6.97:1 · AA</span></div>
  </div>
  <div style="background:#008080;color:#ffffff;border-radius:10px;padding:16px">
    <div style="font-weight:700">White on Deep Teal</div>
    <div>The COVALIDA color, carrying white text at AA.</div>
    <div style="margin-top:8px"><span class="contrast-pass">4.77:1 · AA</span></div>
  </div>
</div>

### Not for text

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:20px 0">
  <div style="background:#ffffff;color:#20b2aa;border:1px solid #cde9e6;border-radius:10px;padding:16px">
    <div style="font-weight:700">Light Teal on White</div>
    <div>This sentence is hard to read — Light Teal is too pale for text on white.</div>
    <div style="margin-top:8px"><span class="contrast-fail">2.62:1 · Fail</span></div>
  </div>
  <div style="background:#20b2aa;color:#ffffff;border-radius:10px;padding:16px">
    <div style="font-weight:700">White on Light Teal</div>
    <div>Also fails — white type on Light Teal is not legible enough for body text.</div>
    <div style="margin-top:8px"><span class="contrast-fail">2.62:1 · Fail</span></div>
  </div>
</div>

## Where Light Teal belongs

Light Teal `#20B2AA` fails as a text color, but it is not banned — it is simply an **accent**, not a type color. Contrast thresholds for text do not apply to purely decorative elements. Use it for:

- Hairline rules, dividers, and decorative underlines.
- Chart and data-viz fills, series, and highlights (pair with direct labels, never color alone).
- The lighter end of the [signature gradient](/colors/).
- Large graphic shapes and background accents.

If Light Teal must sit next to text as a **UI boundary** — an input border, a focus ring, an active tab underline — remember that non-text UI components only need **3:1**, which is a different (looser) requirement than text. For any actual words, switch to Deep Slate, Deep Petrol, or Deep Teal.

## Semantic colors

The [semantic colors](/colors/semantic) — success, warning, error, info — follow the same discipline. In particular, **warning `#EAB308` is light**: always pair it with dark text, never rely on small amber type on white, and always back a signal color with an icon and a label so meaning survives in grayscale.

## How these were measured

Ratios are computed with the standard WCAG 2.1 relative-luminance formula on the sRGB hex values, rounded to two decimals. They are a property of the two colors alone, so a pairing scores the same whichever color is foreground or background — which is why the reversed pairs above share a ratio. Do not recompute or round these differently; cite the numbers on this page.

::: info Related

- **[Accessibility](/accessibility/)** — the full WCAG 2.1 AA commitment, principles, and designer checklist.
- **[Color Palette](/colors/)** — the five core colors and their intended roles.
- **[Semantic Colors](/colors/semantic)** — status colors and their text-pairing rules.
- **[Design Tokens](/downloads/tokens)** — copy-paste HEX, RGB, and HSL values.
:::
