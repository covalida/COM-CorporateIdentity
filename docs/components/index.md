# UI Components

The component system is where the COVALIDA brand becomes an interface. Color, type, and spacing are the raw materials; components are how they get assembled into buttons a user clicks, badges they scan, and forms they trust with real data. This section documents the small, shared set of building blocks used across the marketing site and the **[Trust Center](/digital/trust-center)** portal.

The goal is calm consistency. A designer should be able to build a screen that feels unmistakably COVALIDA without inventing new patterns — reach for the tokens and components here first, and only extend when something genuinely new is needed.

::: tip Digital only
Everything on these pages is built for screens. COVALIDA is a 100% digital brand — there is no print component library, no CMYK, and no stationery. Every value is HEX and every measurement is in pixels or `rem`.
:::

## Principles

Four ideas govern every component.

- **Teal-led, restrained.** Deep Teal `#008080` carries emphasis and interaction. Most of the surface stays white or Light Mint, with teal reserved for the one thing that matters most on a screen. If everything is teal, nothing is.
- **Accessible by default.** Components ship meeting WCAG 2.1 AA before they ship looking good. Every interactive element has a visible focus state, a real text label, and a contrast-checked color pairing. Accessibility is not a later pass.
- **Calm, not loud.** Generous padding, soft radii, quiet borders. States change gently — a slightly darker teal on hover, a clear ring on focus — never a jarring flash. The interface should reduce a compliance officer's stress, not add to it.
- **Consistent tokens over one-off values.** Radius, spacing, and color come from a shared scale (below). Two buttons on two different pages should be pixel-identical because they draw from the same tokens, not because someone eyeballed them twice.

## The documented components

<div class="pillar-grid">
  <div class="pillar-card">
    <div class="kicker">Component</div>
    <h3>Buttons</h3>
    <p>Primary, secondary, and ghost actions with full state and size specs. The teal interaction model lives here.</p>
    <div class="standards"><span>Primary</span><span>Secondary</span><span>Ghost</span></div>
  </div>
  <div class="pillar-card">
    <div class="kicker">Component</div>
    <h3>Badges &amp; Status</h3>
    <p>Standards chips, semantic status badges, and contrast badges for signalling state quietly and consistently.</p>
    <div class="standards"><span>Chips</span><span>Status</span><span>Contrast</span></div>
  </div>
  <div class="pillar-card">
    <div class="kicker">Component</div>
    <h3>Forms</h3>
    <p>Inputs, labels, help text, and validation states — with accessible label association and a calm error voice.</p>
    <div class="standards"><span>Inputs</span><span>Validation</span><span>Labels</span></div>
  </div>
</div>

- **[Buttons](/components/buttons)** — the primary interaction surface: fills, outlines, sizes, and the hover/active/focus/disabled state matrix.
- **[Badges &amp; Status](/components/badges)** — teal standards chips, semantic status pills, and the pass/fail contrast markers used throughout this guide.
- **[Forms](/components/forms)** — text inputs and their validation states, written for accessible, low-anxiety data entry.

## Shared tokens

Every component is built from the same three token groups. Copy these once and reuse them everywhere; the full machine-readable set lives on the **[Design Tokens](/downloads/tokens)** page.

### Radius

Soft, consistent corners are part of the calm, premium feel. Four steps cover the system.

| Token | Value | Used for |
|-------|-------|----------|
| `--cv-radius-sm` | `6px` | Small controls, inline code, tight chips |
| `--cv-radius-md` | `8px` | Buttons and form inputs (the default control radius) |
| `--cv-radius-lg` | `12px` | Cards, panels, alert surfaces |
| `--cv-radius-pill` | `999px` | Badges, status pills, standards chips |

Buttons and inputs share the same `8px` radius so a button sitting next to a field looks like one family. Never mix radii within a single control group.

### Spacing

Spacing steps from a `4px` base. Use the scale for padding, gaps, and margins — never arbitrary values like `7px` or `13px`.

```css
:root {
  --cv-space-1: 4px;
  --cv-space-2: 8px;
  --cv-space-3: 12px;
  --cv-space-4: 16px;
  --cv-space-6: 24px;
  --cv-space-8: 32px;
  --cv-space-12: 48px;
}
```

Component padding lands on this scale: a medium button is `10px 20px`, an input is `10px 12px`, a card is `24px`. Vertical rhythm between stacked form fields is `16px`; between sections, `32px` or more. Whitespace is a brand asset — when in doubt, add more.

### Teal interaction states

Interactive components move through one shared teal progression. This is the single most important token group to memorize, because it makes every button, link, and control behave identically.

<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:stretch;margin:18px 0">
  <div style="flex:1;min-width:130px;border-radius:10px;overflow:hidden;border:1px solid #e3eae9">
    <div style="background:#008080;height:56px"></div>
    <div style="padding:8px 10px;font-size:12px;line-height:1.4"><strong>Rest</strong><br/><code>#008080</code></div>
  </div>
  <div style="flex:1;min-width:130px;border-radius:10px;overflow:hidden;border:1px solid #e3eae9">
    <div style="background:#0a6e6e;height:56px"></div>
    <div style="padding:8px 10px;font-size:12px;line-height:1.4"><strong>Hover</strong><br/><code>#0a6e6e</code></div>
  </div>
  <div style="flex:1;min-width:130px;border-radius:10px;overflow:hidden;border:1px solid #e3eae9">
    <div style="background:#155d5b;height:56px"></div>
    <div style="padding:8px 10px;font-size:12px;line-height:1.4"><strong>Active</strong><br/><code>#155d5b</code></div>
  </div>
  <div style="flex:1;min-width:130px;border-radius:10px;overflow:hidden;border:1px solid #e3eae9">
    <div style="background:#eceff0;height:56px"></div>
    <div style="padding:8px 10px;font-size:12px;line-height:1.4"><strong>Disabled</strong><br/><code>#eceff0</code></div>
  </div>
</div>

- **Rest** — Deep Teal `#008080`. White text sits at 4.8:1 (AA).
- **Hover** — teal-600 `#0a6e6e`. One step darker; white text at 6.1:1.
- **Active / pressed** — Deep Petrol `#155d5b`. White text at 7.6:1 <span class="contrast-pass">AAA</span>.
- **Focus** — a `3px` ring in `rgba(0, 128, 128, 0.35)` with a `2px` offset, added *alongside* the current state, never replacing it.
- **Disabled** — gray-100 `#eceff0` fill with gray-400 `#94a1a2` text and `cursor: not-allowed`.

```css
:root {
  --cv-interactive-rest:   #008080;
  --cv-interactive-hover:  #0a6e6e;
  --cv-interactive-active: #155d5b;
  --cv-focus-ring:         rgba(0, 128, 128, 0.35);
  --cv-disabled-bg:        #eceff0;
  --cv-disabled-text:      #94a1a2;
}
```

## How to use this section

Start with the tokens above, then compose. If you need an action, go to **[Buttons](/components/buttons)**. If you need to signal a state or label a standard, go to **[Badges &amp; Status](/components/badges)**. If you are collecting input, go to **[Forms](/components/forms)**. For the colors behind every state, see the **[Color Palette](/colors/)** and **[Semantic Colors](/colors/semantic)**; before shipping, verify pairings against **[Contrast Checks](/accessibility/contrast)**.

::: info One system, two surfaces
These components serve both the public brand site and the Covalida Trust Center product UI. Keeping them identical is what makes the portal feel like a natural extension of the brand rather than a separate island tool.
:::

## Related

- **[Design Tokens](/downloads/tokens)** — the full copy-paste set of color, radius, and spacing values.
- **[Color Palette](/colors/)** — the five core brand colors and the signature gradient.
- **[Semantic Colors](/colors/semantic)** — success, warning, error, and info.
- **[Accessibility](/accessibility/)** — the WCAG 2.1 AA commitments behind every component.
- **[Web &amp; UI](/digital/web)** — how these components lay out on real pages.
