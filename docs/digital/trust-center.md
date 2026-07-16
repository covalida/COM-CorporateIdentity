# Trust Center

The **Covalida Trust Center** is the brand made into a product: the customer portal where a client logs in and sees the real-time status of their certifications and compliance proofs. It is the difference between compliance-as-a-filing-cabinet and compliance-as-a-living-dashboard. Instead of hunting through folders and PDFs, a customer opens a calm, well-designed screen and simply *sees* where they stand.

This page is the branding guidance for that product UI — how the design system applies to dashboards, status and data visualization. The Trust Center is **in build**; keep everything here forward-looking.

::: tip The Trust Center in one line
A login instead of a file-folder — certification status shown as calm reassurance, in the teal scale, with generous space, never an alarm panel.
:::

## The intended feel

The Trust Center is the tangible proof of the brand's promise, so it must feel like the brand: **calm, premium, sovereign**.

- **A login, not a document dump.** The core experience is opening a dashboard and understanding your compliance position at a glance — not downloading a stack of files. Design for reassurance and overview first.
- **Data as reassurance.** Show status calmly. A healthy compliance program should look composed and in control, not like a monitoring console blinking with alerts. This mirrors the [imagery](/imagery/) principle: show the core worth protecting, never the fear of losing it.
- **Premium restraint.** Generous whitespace, one clear focus per screen, and the [teal palette](/colors/) doing the structural work. The portal is a C-level surface; it should feel considered and quiet.
- **One-stop overview.** The Trust Center spans every pillar — [Core, Tech & Trust, Traceability, Circularity and Training](/architecture/). Its job is to unify them into a single calm view, which is the brand's core differentiator against island point tools.

## Color in the product UI

The portal builds almost entirely on white and mint surfaces with the [teal scale](/colors/scales) carrying structure and data. Reserve strong color for meaning.

<div class="color-scale">
  <div style="background:#ffffff;color:#2f4f4f">App canvas</div>
  <div style="background:#e8f4f4;color:#155d5b">Panel · 50</div>
  <div style="background:#cde9e6;color:#155d5b">Surface · 100</div>
  <div style="background:#008080;color:#fff">Structure · 500</div>
  <div style="background:#155d5b;color:#fff">Deep · 700</div>
</div>

- **Surfaces.** White app canvas; [teal-50 #e8f4f4](/colors/scales) and [teal-100 / Light Mint #cde9e6](/colors/scales) for panels, cards and calm section fills.
- **Structure.** [Deep Teal #008080](/colors/) and [Deep Petrol #155D5B](/colors/) for the app bar, primary navigation, primary actions and filled headers.
- **Text.** [Deep Slate Gray #2F4F4F](/colors/) on light surfaces; white on teal and petrol.
- **Accent.** [Light Teal #20B2AA](/colors/) for hairline rules, chart lines and hover highlights — never for small text on white.

## Dashboards and layout

- **Overview first.** The landing view is a calm summary — a compliance overview across pillars — before any detail table. Lead with the answer to "where do I stand?"
- **Card-based, generous spacing.** Group information into cards on an **8px spacing scale** with `24px` gutters and `12px` radius, matching the [web layout rules](/digital/web). Do not pack the screen; let cards breathe.
- **Progressive disclosure.** Summary on top, detail one click away. A calm dashboard that hides complexity until asked for is more premium than one that shows everything at once.
- **Consistent components.** Buttons, badges and forms come from the [component library](/components/) — a single primary [Deep Petrol](/colors/) action per view, secondary actions as outlined buttons or links.

## Status and semantic color

Certification and proof status is the heart of the portal. Use the [semantic colors](/colors/semantic) for state, and always pair color with a label or icon so status never depends on color alone.

<div class="swatch-grid">
  <div class="swatch-card">
    <div class="chip" style="background:#22C55E"></div>
    <div class="meta"><div class="name">Success</div><div class="hex">#22C55E</div><div class="use">Valid · compliant · on track</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#EAB308"></div>
    <div class="meta"><div class="name">Warning</div><div class="hex">#EAB308</div><div class="use">Expiring soon · action needed</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#EF4444"></div>
    <div class="meta"><div class="name">Error</div><div class="hex">#EF4444</div><div class="use">Expired · non-compliant</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#008080"></div>
    <div class="meta"><div class="name">Info</div><div class="hex">#008080</div><div class="use">Informational · in progress</div></div>
  </div>
</div>

- **Calm by default.** Most of the dashboard should sit in the neutral teal-and-mint world. Semantic color is the exception that draws the eye to the one thing that needs attention — not a wall of red.
- **Never alarmist.** Even an expired-certificate state stays composed: a clear red badge and a plain next step, not a flashing, full-bleed warning. The brand takes fear out of compliance.
- **Pair color with meaning.** Every status uses an icon and a text label alongside the color, so it reads for color-blind users and passes [accessibility](/accessibility/) requirements.

## Data visualization

Charts and figures should look like part of the same calm system — see the [Imagery](/imagery/) note on data as reassurance.

- **Sequential data — the teal scale.** For a single measure across categories or over time, step through the [teal scale](/colors/scales): `100 → 300 → 400 → 500 → 700`. It reads as one coherent family.
- **Categorical series — teal plus semantics.** When distinct categories need distinct colors, lead with teal-scale steps and bring in semantic colors only where they carry status meaning. Keep the count low; a calm chart has few series.
- **Status in charts** uses the semantic palette (success, warning, error, info) consistently with the badges above.
- **Restraint.** Thin lines, generous spacing, clear labels, no heavy gridlines, no 3D, no decorative gradients behind data. Light Teal is ideal for hairline axes and reference lines.
- **Accessible charts.** Do not encode meaning in color alone — use labels, direct annotation, or pattern. Ensure chart text and key marks clear contrast on their background.

## The app icon

The portal's app icon, favicon and login mark is the **symbol** — the Core-Shield:

- Use the [gradient symbol](/downloads/) as the primary app icon; the [flat mono symbol](/downloads/) where a single-color mark is required.
- On a colored app-icon tile, center the symbol in white or mint on [Deep Teal](/colors/) or [Deep Petrol](/colors/), keeping even clear space per [Logo Construction](/logo/construction).
- The favicon is `/favicon.svg`. Never stretch, recolor per pillar, or redraw the symbol — it represents the whole brand.

## Forward-looking language

::: warning Concept phase — product in build
The Covalida Trust Center is **in build**. COVALIDA is in the concept and foundation phase — **not accredited yet** and with **no live audits yet**. When you design mockups, label states as illustrative and use plausible placeholder data — never real customer names, real certificate numbers, or implied live audits. Describe the portal as the intended experience, not a shipped, accredited product.
:::

## Related pages

- [Web & UI](/digital/web) — the layout, spacing and color rules the portal inherits.
- [Color Scales & Tints](/colors/scales) — the teal scale for dashboards and data-viz.
- [Semantic Colors](/colors/semantic) — status colors for compliance state.
- [UI Components](/components/) — buttons, badges and forms for the product.
- [Accessibility](/accessibility/) — contrast and color-independence requirements.
- [Brand Architecture](/architecture/) — the five pillars the Trust Center unifies.
