# Accessibility

A compliance brand must be exemplary. COVALIDA helps companies meet demanding regulation with confidence — so its own materials cannot fall short of the accessibility standards its clients are held to. Accessibility here is not decoration or a late checklist; it is part of "Securing the Core." An interface, document, or graphic that some people cannot read is, quite simply, not compliant.

::: tip Our commitment
COVALIDA designs to **WCAG 2.1 Level AA** as the baseline for every digital touchpoint, and reaches for **Level AAA wherever it is practical** — which, with this palette, is most body text. AA is the floor, not the goal.
:::

## Why this matters for COVALIDA

Accessibility and the brand pull in the same direction. The calm, whitespace-rich, high-contrast look that makes COVALIDA feel premium is the same look that makes it legible. Generous spacing, restrained color, and dark teal-gray text on light surfaces are accessible *by design*. When you follow the brand, you are most of the way to AA already — these guidelines close the remaining gap and keep you from the few combinations that break it.

The brand also carries an implicit promise. COVALIDA takes the fear out of complex regulation; a page a user cannot navigate or read reintroduces exactly the friction the brand exists to remove. Accessible work is on-brand work.

## The principles

Seven principles govern every COVALIDA design. They map to WCAG's four foundations — perceivable, operable, understandable, robust — translated into concrete design decisions.

### 1. Sufficient contrast

Text and meaningful graphics must clear the WCAG contrast thresholds against their background: **4.5:1 for normal text**, **3:1 for large text (≥ 24px, or ≥ 19px bold) and UI components**. The palette makes this easy if you follow one rule — for text, use **Deep Slate `#2F4F4F`** or **Deep Petrol `#155D5B`**, or **white on Deep Teal/Deep Petrol**. Reserve **Light Teal `#20B2AA`** for non-text accents; it fails as a text color on white. Every tested pairing is documented on **[Contrast Checks](/accessibility/contrast)**.

### 2. Visible focus states

Every interactive element — links, buttons, inputs, tabs, menu items — must show a clear focus indicator when reached by keyboard. Never remove the outline without replacing it. Use a **2px Deep Petrol `#155D5B` outline with a 2px offset** so the ring sits clear of the element and stays visible on both white and Light Mint surfaces.

```css
:focus-visible {
  outline: 2px solid #155d5b;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### 3. Do not rely on color alone

Color can reinforce meaning but must never be the *only* carrier of it. A red field border needs an icon and a message; a status must have a label, not just a dot; a chart series needs a direct label or pattern, not only a hue. This protects color-blind users (roughly 1 in 12 men) and anyone reading in grayscale or bright sunlight. It is also why COVALIDA's [semantic colors](/colors/semantic) always ship with an icon and text.

### 4. Respect reduced motion

Motion should be calm and purposeful, in line with the brand's tone — and always optional. Honor the user's system setting and remove or soften non-essential animation when reduced motion is requested. No parallax, no auto-playing loops, no large sliding transitions for users who have opted out.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 5. Semantic structure

Structure carries meaning for screen readers and keyboard users. Use one `<h1>` per page and a logical, unskipped heading order (`h1 → h2 → h3`); use real lists, tables, and landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`) rather than styled `<div>`s. Never pick a heading level for its size — style with CSS, structure with HTML. Well-ordered headings are also how sighted users skim, so this helps everyone.

### 6. Keyboard support

Everything that works with a mouse must work with a keyboard. Users must be able to `Tab` to every control in a sensible order, operate it with `Enter`/`Space`, and escape overlays with `Esc`. Do not trap focus, and do not build interactions that only respond to hover or a pointer. Provide a "skip to content" link at the top of each page so keyboard users can bypass the navigation.

### 7. Alt text for brand imagery

Every meaningful image needs a text alternative. Describe the *content and intent*, not the file. Decorative flourishes get an empty `alt=""` so screen readers skip them.

- **Logo:** `alt="COVALIDA logo"` (or `"COVALIDA — Securing the Core"` where the claim is part of the lockup).
- **Core-Shield symbol:** `alt="COVALIDA Core-Shield symbol"` — describe it as a protective shield, never a coat-of-arms or stamp.
- **Pillar icons:** name the pillar, e.g. `alt="Covalida Traceability icon"`.
- **Decorative gradients / background shapes:** `alt=""` so they are ignored.

## Designer checklist

Run this before shipping any COVALIDA screen, document, or graphic. It is deliberately short — most items are a direct consequence of following the brand.

- [ ] **Contrast** — all text meets AA (4.5:1 normal, 3:1 large); verified against [Contrast Checks](/accessibility/contrast).
- [ ] **Text colors** — body text is Deep Slate or Deep Petrol (or white on Deep Teal/Petrol); Light Teal is used only for non-text accents.
- [ ] **Focus** — every interactive element has a visible focus ring (2px Deep Petrol, 2px offset).
- [ ] **Color independence** — no meaning is carried by color alone; icons and labels back up every signal color.
- [ ] **Motion** — non-essential animation is disabled under `prefers-reduced-motion`; nothing flashes more than 3 times per second.
- [ ] **Structure** — one `<h1>`, logical heading order, real lists/tables, semantic landmarks.
- [ ] **Keyboard** — full tab order, no traps, `Esc` closes overlays, a skip-link is present.
- [ ] **Alt text** — every meaningful image has a descriptive alt; decorative images use `alt=""`.
- [ ] **Target size** — interactive targets are at least **24 × 24 px** (aim for 44 × 44 px on touch).
- [ ] **Text sizing** — body text is at least **16px**, and the layout survives 200% zoom without loss of content.
- [ ] **Language** — the page declares its language (`<html lang="…">`) so screen readers pronounce it correctly.

## Type and spacing minimums

Legibility starts with size and space, not just contrast.

- **Body text:** minimum **16px**; prefer **17–18px** for long-form reading. Montserrat 400/500.
- **Line length:** aim for **60–75 characters** per line for comfortable reading.
- **Line height:** at least **1.5** for body copy; the brand's generous leading already helps here.
- **Never justify** long body text, and never set important copy in Light Teal on white.

See **[Typography](/typography/)** for the full hierarchy and the [font stack](/typography/font-stack).

## Testing your work

Automated checks catch the obvious; human checks catch the rest.

- **Contrast:** a checker (browser dev tools, or the WebAIM contrast checker) against the [tested pairings](/accessibility/contrast).
- **Keyboard:** unplug the mouse and complete the key task with `Tab`, `Enter`, and `Esc` only.
- **Zoom:** set the browser to 200% and confirm nothing is clipped or overlaps.
- **Grayscale:** view the screen in grayscale — every state and signal should still read.
- **Screen reader:** sample the flow with VoiceOver (macOS/iOS) or NVDA (Windows) to confirm headings, labels, and alt text make sense in sequence.

::: info Related

- **[Contrast Checks](/accessibility/contrast)** — every tested brand pairing with its exact ratio and AA/AAA verdict.
- **[Color Palette](/colors/)** and **[Semantic Colors](/colors/semantic)** — the roles that keep contrast safe.
- **[Typography](/typography/)** — sizes, weights, and hierarchy for legible text.
:::
