# Type Hierarchy

A clear hierarchy is what makes a page feel calm instead of crowded. COVALIDA uses one typeface — **[Montserrat](/typography/)** — and creates order through **size, weight, line-height and letter-spacing** alone. This page is the authoritative digital type scale. Use these exact values; do not invent intermediate steps.

## The scale at a glance

The scale is built on a **1.25 modular ratio** (the "major third") from a **16px base**. Each step multiplies the last by 1.25, then rounds to a whole pixel for crisp rendering. The result is eight named levels — enough range for a hero headline down to a legal caption, with nothing redundant in between.

| Level | Size (px / rem) | Weight | Line-height | Letter-spacing | Montserrat |
|-------|-----------------|--------|-------------|----------------|------------|
| Display | 61 / 3.815 | 800 | 1.05 | −0.02em | ExtraBold |
| H1 | 39 / 2.441 | 800 | 1.15 | −0.02em | ExtraBold |
| H2 | 31 / 1.953 | 700 | 1.20 | −0.01em | Bold |
| H3 | 25 / 1.563 | 700 | 1.30 | −0.01em | Bold |
| H4 | 20 / 1.25 | 600 | 1.40 | 0 | SemiBold |
| Body Large | 18 / 1.125 | 400 | 1.70 | 0 | Regular |
| Body | 16 / 1.0 | 400 | 1.65 | 0 | Regular |
| Small / Caption | 13 / 0.8125 | 500 | 1.50 | +0.01em | Medium |

::: info Why 1.25
A 1.25 ratio gives noticeable, confident jumps between levels without the extreme contrast of a 1.333 or 1.5 scale. It keeps the brand feeling *composed* — every heading is clearly larger than the last, but nothing screams. The mathematical steps are 16 → 20 → 25 → 31.25 → 39.06 → (48.83) → 61.04, rounded for the pixel grid.
:::

## Rendered examples

Each level below is set with its exact production values, so you can see the rhythm the scale produces.

<div style="border:1px solid var(--vp-c-divider);border-radius:12px;padding:32px;margin:24px 0;color:#2f4f4f">
  <div style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:3.815rem;line-height:1.05;letter-spacing:-0.02em;margin:0 0 4px">Securing the Core.</div>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">Display · 61px · 800 · −0.02em</div>

  <div style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:2.441rem;line-height:1.15;letter-spacing:-0.02em;margin:0 0 4px">The holistic compliance partner</div>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">H1 · 39px · 800 · −0.02em</div>

  <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:1.953rem;line-height:1.2;letter-spacing:-0.01em;margin:0 0 4px">Five pillars, one core</div>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">H2 · 31px · 700 · −0.01em</div>

  <div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:1.563rem;line-height:1.3;letter-spacing:-0.01em;margin:0 0 4px">Covalida Tech &amp; Trust</div>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">H3 · 25px · 700 · −0.01em</div>

  <div style="font-family:'Montserrat',sans-serif;font-weight:600;font-size:1.25rem;line-height:1.4;margin:0 0 4px">Digital resilience &amp; AI management</div>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">H4 · 20px · 600</div>

  <p style="font-family:'Montserrat',sans-serif;font-weight:400;font-size:1.125rem;line-height:1.7;margin:0 0 4px;max-width:64ch">COVALIDA takes the fear out of complex regulation. One partner, one calm process, from management systems to AI to supply chains.</p>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">Body Large · 18px · 400</div>

  <p style="font-family:'Montserrat',sans-serif;font-weight:400;font-size:1rem;line-height:1.65;margin:0 0 4px;max-width:66ch">Standard running text for articles, documentation and descriptions. Set at Regular so the color of the paragraph stays even and comfortable across long passages, with generous line-height for readability on screen.</p>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2);margin-bottom:24px">Body · 16px · 400</div>

  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8125rem;line-height:1.5;letter-spacing:0.01em;color:var(--vp-c-text-2);margin:0 0 4px">Figure 1 — The accreditation credibility pyramid. Screen color only; no CMYK or Pantone.</div>
  <div style="font-family:'Montserrat',sans-serif;font-weight:500;font-size:0.8rem;color:var(--vp-c-text-2)">Small / Caption · 13px · 500 · +0.01em</div>
</div>

## Where each level applies

- **Display (61 / 800)** — Reserved for hero moments: a landing-page headline, a section cover, a single brand claim. One per view, maximum. Always pair with whitespace, never crowd it.
- **H1 (39 / 800)** — The page title. Exactly one H1 per page. It names the topic and sets the tone.
- **H2 (31 / 700)** — Major section headings. In this guide, H2 renders with the teal underline that marks a new section.
- **H3 (25 / 700)** — Sub-sections within an H2. Also the natural size for card titles and pillar names.
- **H4 (20 / 600)** — Minor headings, labels above a group, small card headers. The lightest "heading" weight — SemiBold keeps it distinct from body without shouting.
- **Body Large (18 / 400)** — Intros, lead paragraphs, pull quotes and any text meant to feel a touch more spacious. Ideal for the first paragraph under an H1.
- **Body (16 / 400)** — The workhorse. All running copy, lists, table cells and general reading text.
- **Small / Caption (13 / 500)** — Image captions, footnotes, metadata, timestamps, legal fine print and helper text. Bumped to Medium so it stays legible at a small size. Never smaller than 13px for readable text.

## Kickers and eyebrows

Above headlines, COVALIDA often uses an **all-caps kicker** — a short label such as `COVALIDA TECH & TRUST` or `SECURING THE CORE`. This is not a scale level; it is a treatment applied to Caption or H4 size.

```css
.cv-kicker {
  font-family: var(--cv-font-family);
  font-weight: 500;         /* Medium */
  font-size: 0.75rem;       /* 12px */
  line-height: 1.4;
  letter-spacing: 0.14em;   /* wide tracking for all-caps */
  text-transform: uppercase;
  color: var(--cv-primary); /* Deep Teal #008080 */
}
```

## Spacing rules

Type only feels premium when it has room. A few non-negotiables:

- **Negative tracking scales with size.** Apply `−0.02em` at Display/H1 and `−0.01em` at H2/H3. From H4 down, use `0`. All-caps kickers get positive tracking.
- **Line-length matters more than font size.** Keep body measure between **50 and 75 characters** (`max-width: 66ch` is a good default). Long lines break the calm.
- **Space above a heading > space below it.** A heading belongs to the content that follows. Give it roughly `2×` the space above as below.
- **Don't stack two big levels.** Between a Display and an H2, insert a kicker, a rule or whitespace — never two heavy headings touching.

## Ready-to-use CSS scale

Drop these variables alongside the color tokens and reference them throughout a build.

```css
:root {
  /* Type scale — 1.25 ratio, 16px base */
  --cv-text-display: 3.815rem;  /* 61px */
  --cv-text-h1:      2.441rem;  /* 39px */
  --cv-text-h2:      1.953rem;  /* 31px */
  --cv-text-h3:      1.563rem;  /* 25px */
  --cv-text-h4:      1.25rem;   /* 20px */
  --cv-text-lg:      1.125rem;  /* 18px */
  --cv-text-base:    1rem;      /* 16px */
  --cv-text-sm:      0.8125rem; /* 13px */

  /* Weights */
  --cv-fw-regular:  400;
  --cv-fw-medium:   500;
  --cv-fw-semibold: 600;
  --cv-fw-bold:     700;
  --cv-fw-extrabold:800;

  /* Line-heights */
  --cv-lh-tight:   1.15;  /* display & H1 */
  --cv-lh-heading: 1.30;  /* H2–H4 */
  --cv-lh-body:    1.65;  /* body */
}
```

::: tip Fluid display type
For hero headlines, let Display flex with the viewport instead of jumping at breakpoints: `font-size: clamp(2.4rem, 6vw, 3.815rem)`. It keeps the headline confident on mobile and commanding on desktop.
:::

## Related

- **[Typography overview](/typography/)** — Montserrat, its character and the five weights.
- **[Font Stack](/typography/font-stack)** — self-hosted delivery, the fallback stack and CSS.
- **[Design Tokens](/downloads/tokens)** — the full token reference for color and type.
