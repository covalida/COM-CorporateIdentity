# Web & UI

The web is COVALIDA's primary home. Everything the brand promises — calm, premium, sovereign — has to survive contact with a real layout, real buttons and real content. This page gives designers and front-end developers the concrete rules: how the grid works, how much space to leave, where each color belongs, and how interactive elements should look and behave.

The working reference is **this brand-guide site**. When in doubt, match what you can see rendered here.

::: tip The web brand in one line
White and mint canvas · Deep Teal and Deep Petrol for structure · Light Teal as a thin accent · Montserrat throughout · lots of room to breathe.
:::

## Layout and grid

COVALIDA layouts are wide, calm and content-first. The goal is an unhurried reading rhythm, not density.

- **Content column.** Cap long-form text at roughly **65–75 characters** per line — about `720px` for body content, up to `1152px` for full-width sections and dashboards. Center the column and let the margins carry whitespace.
- **Grid.** Use a **12-column grid** with a `24px` gutter on desktop, collapsing to a single column on mobile. Cards and feature rows snap to 2, 3 or 4 columns; never crowd more than four across.
- **Spacing scale.** Work on an **8px base**. Use `8 · 16 · 24 · 32 · 48 · 64 · 96` for padding and gaps. Section vertical padding runs generous — `64px` to `96px` between major sections on desktop, `40px` to `56px` on mobile.
- **Breakpoints.** Design mobile-first. Common stops: `640px` (small), `768px` (tablet), `1024px` (laptop), `1280px` (desktop). Content should never touch the viewport edge — keep a minimum `16px` gutter on mobile, `24px` and up on larger screens.

```css
:root {
  --cv-space-1: 8px;
  --cv-space-2: 16px;
  --cv-space-3: 24px;
  --cv-space-4: 32px;
  --cv-space-6: 48px;
  --cv-space-8: 64px;
  --cv-space-12: 96px;

  --cv-content-max: 720px;   /* long-form reading column */
  --cv-page-max: 1152px;     /* full-width sections */
  --cv-radius: 12px;         /* cards, buttons, inputs */
  --cv-gutter: 24px;
}
```

## Whitespace is a feature

Whitespace carries the same calm as the [imagery](/imagery/) and the [tone of voice](/brand/). Treat it as a design element, not leftover space.

- Give each section **one** clear job and frame it with air above and below.
- Prefer a shorter page with breathing room over a dense one that fits everything above the fold.
- Let headlines sit against empty space; do not box every element in a card.
- If a layout feels cramped, add space before you add cleverness.

## Color usage on the web

The palette is narrow on purpose. A rough **60 / 30 / 10** split keeps pages calm: about 60% neutral canvas, 30% structural teal, 10% accent.

<div class="color-scale">
  <div style="background:#ffffff;color:#2f4f4f">Canvas · white</div>
  <div style="background:#cde9e6;color:#155d5b">Surface · mint</div>
  <div style="background:#008080;color:#fff">Structure · teal</div>
  <div style="background:#155d5b;color:#fff">Deep · petrol</div>
  <div style="background:#20b2aa;color:#0e3a38">Accent</div>
</div>

- **Surfaces — white and mint.** The default background is white; [Light Mint #CDE9E6](/colors/) marks calm section bands, cards and callouts. Alternating white and mint gives a page quiet rhythm without lines.
- **Structure — Deep Teal and Deep Petrol.** [Deep Teal #008080](/colors/) carries the primary emphasis on a screen — the key action, an active nav item, a headline accent. [Deep Petrol #155D5B](/colors/) grounds heavier elements: filled buttons, footers, icon circles, the dark end of the [signature gradient](/downloads/tokens).
- **Text — Deep Slate Gray.** Body copy and headings sit in [Deep Slate Gray #2F4F4F](/colors/) on light backgrounds — a teal-tinted near-charcoal, never pure black. On teal or petrol surfaces, use white.
- **Accent — Light Teal, sparingly.** [Light Teal #20B2AA](/colors/) is for hairline rules, hover highlights, chart series and decorative underlines. It is **not** a text color on white — small Light Teal type on white fails contrast. Keep it to the 10% role.

::: warning Accent discipline
Light Teal is bright and low-contrast on white. Never set body text, links or small UI labels in Light Teal on a white or mint background. For links and interactive text, use Deep Teal or Deep Petrol. Verify every pairing against [Accessibility](/accessibility/).
:::

## Buttons

Buttons follow the [component library](/components/buttons). The essentials for web:

- **Primary button** — solid [Deep Petrol #155D5B](/colors/) background, white label, `12px` radius. This is the single most important action in a view. On hover, darken toward `#124b49`; on focus, show a visible ring.
- **Secondary button** — transparent or white background with a Deep Teal border and Deep Teal label. Use for the alternative action next to a primary.
- **Sizing.** Minimum touch target `44 × 44px`. Comfortable padding is `12px` vertical, `24px` horizontal. Label in Montserrat 600.
- **One primary per view.** Multiple solid teal buttons compete and raise the volume. Keep exactly one primary action per screen or section; everything else is secondary or a link.

```css
.cv-btn-primary {
  background: #155d5b;
  color: #fff;
  font: 600 16px/1 "Montserrat", system-ui, sans-serif;
  padding: 12px 24px;
  border-radius: 12px;
  border: 0;
}
.cv-btn-primary:hover { background: #124b49; }
.cv-btn-primary:focus-visible { outline: 3px solid #20b2aa; outline-offset: 2px; }
```

## Links

- **Default links** are [Deep Teal #008080](/colors/), which passes contrast for body text on white and mint.
- Underline links inside body copy so they are distinguishable without relying on color alone — an accessibility requirement, not a preference.
- On hover, shift toward Deep Petrol and keep or thicken the underline. Always show a visible focus ring for keyboard users.

## Imagery placement

Photography follows the [Imagery](/imagery/) direction — nature-meets-tech, cool teal grade, lots of negative space. On the web:

- **Hero images** run full-bleed with a calm subject and empty sky or water on one side, reserved for the headline and the [logo](/logo/). Keep text off busy areas; if needed, use a subtle Deep Petrol gradient scrim (never a heavy dark box) to hold contrast.
- **Inline images** sit within the content column with generous margin above and below. One clear subject per image; no busy composites.
- **Backgrounds without a photo** use white, mint, or the [signature gradient](/downloads/tokens) — never Light Teal behind body text.
- Always set `max-width: 100%` so images scale, and provide meaningful `alt` text.

## Motion

Motion is quiet and functional. Fades and short slides of `150–250ms` with an ease-out curve; no bounce, no parallax spectacle, no autoplaying attention-grabbers. Respect `prefers-reduced-motion` and disable non-essential animation when it is set.

## Accessibility built in

Accessibility is part of the brand's calm, not an add-on. Every web layout must:

- Clear **WCAG 2.1 AA** contrast — 4.5:1 for body text, 3:1 for large text and UI components.
- Support full keyboard navigation with a visible focus ring on every interactive element.
- Use semantic HTML and a logical heading order.
- Never rely on color alone to convey meaning (pair status colors with an icon or label).

See [Accessibility](/accessibility/) for verified color pairings and contrast checks.

## The reference implementation

This VitePress site is the canonical example of the web brand: teal section underlines, alternating calm surfaces, restrained accent use, and a wide content column framed in whitespace. Reuse its patterns before inventing new ones.

## Related pages

- [UI Components](/components/) — buttons, badges and forms in detail.
- [Accessibility](/accessibility/) — WCAG pairings and contrast checks.
- [Color System](/colors/) and [Scales & Tints](/colors/scales) — the full palette and UI states.
- [Typography](/typography/) — the Montserrat system and hierarchy.
- [Design Tokens](/downloads/tokens) — copy-paste values, custom properties and the gradient.
- [Trust Center](/digital/trust-center) — applying these rules to the product UI.
