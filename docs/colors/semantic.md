# Semantic Colors

Semantic colors carry *meaning*, not brand. They tell a user that something succeeded, needs attention, failed, or is simply informational. Because these meanings are near-universal, COVALIDA uses conventional signal colors — a designer should never invent a new "brand green" for success. The one deliberate exception: **info reuses the brand teal**, so neutral messages stay unmistakably COVALIDA.

<div class="swatch-grid">
  <div class="swatch-card">
    <div class="chip" style="background:#22C55E"></div>
    <div class="meta"><div class="name">Success</div><div class="hex">#22C55E</div><div class="use">Valid input, completed action, healthy state</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#EAB308"></div>
    <div class="meta"><div class="name">Warning</div><div class="hex">#EAB308</div><div class="use">Caution, needs attention, non-blocking issue</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#EF4444"></div>
    <div class="meta"><div class="name">Error</div><div class="hex">#EF4444</div><div class="use">Failure, invalid input, destructive action</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#008080"></div>
    <div class="meta"><div class="name">Info</div><div class="hex">#008080</div><div class="use">Neutral information — reuses Deep Teal</div></div>
  </div>
</div>

## When to use each

### Success — #22C55E

<span class="color-swatch"><span class="dot" style="background:#22C55E"></span> #22C55E</span> · `rgb(34, 197, 94)`

Confirmation. Use it for a valid form field, a completed upload, a passing check, a "saved" toast, or a healthy status dot in the Trust Center. Green means "you're clear to proceed" — the reassuring signal that fits COVALIDA's calm, fear-reducing tone. Keep it for genuine positive outcomes, not decoration.

### Warning — #EAB308

<span class="color-swatch"><span class="dot" style="background:#EAB308"></span> #EAB308</span> · `rgb(234, 179, 8)`

Attention without alarm. Use it for a soft caution: an expiring certificate, an incomplete-but-savable section, an approaching deadline, or a "review recommended" banner. Warning flags something the user should notice but that is not yet a failure. This amber is bright on light backgrounds, so **pair it with dark text** — never rely on small amber type on white to carry the message.

### Error — #EF4444

<span class="color-swatch"><span class="dot" style="background:#EF4444"></span> #EF4444</span> · `rgb(239, 68, 68)`

Something is wrong and blocks progress. Use it for invalid input, a failed submission, a required field left empty, or the confirm state of a destructive action (delete, revoke). Error is the strongest signal in the set — use it sparingly so it keeps its urgency. Never use red merely to make something look important.

### Info — #008080

<span class="color-swatch"><span class="dot" style="background:#008080"></span> #008080</span> · `rgb(0, 128, 128)`

Neutral, helpful context: a tip, a "what happens next" note, a general system message. Info deliberately **reuses Deep Teal** rather than the industry-default blue, so informational UI stays on-brand and the palette doesn't sprawl. This is the one place brand and semantic color intentionally overlap — see **[Palette](/colors/)**.

## Applying them in UI

Semantic color rarely appears alone. Combine it with an icon and text so meaning survives for color-blind users and in grayscale.

- **Validation** — tint the field border and helper text: Error `#EF4444` on an invalid field, Success `#22C55E` on a confirmed one. Always add an icon and a message; color is never the only signal.
- **Alerts and banners** — use a pale tinted background with a solid left accent bar and dark text. A 10–15% tint of the signal color keeps the surface readable; the accent bar and icon carry the meaning.
- **Toasts and inline status** — a small colored dot or icon plus a short label. Keep the surface neutral (white or Light Mint) and let the dot signal state.
- **Status dots** — Success = healthy/active, Warning = needs review, Error = failed/expired, Info/teal = informational or in-progress.

::: tip Text on signal colors
`#EAB308` (warning) is light — use **dark text** on it. `#EF4444` and `#22C55E` are mid-tones; verify text contrast per use, and prefer dark text on tinted (pale) backgrounds rather than white text on the saturated color. Check every combination against **[Accessibility](/accessibility/contrast)**.
:::

## Rules of restraint

Semantic colors are functional accents, not part of the brand palette. Keep them disciplined.

- **Use them sparingly.** A screen full of red and green looks broken. Signal colors should be rare enough that they still signal.
- **Never use a semantic color as a brand color.** Do not build a green button, a yellow header, or a red panel because it "looks nice." Brand emphasis is teal; green/amber/red mean success/warning/error and nothing else.
- **Keep meanings fixed.** One color, one meaning, everywhere. Green is never "on-brand accent," red is never "just a highlight."
- **Don't recolor them to match teal.** Their value is that they're recognizably conventional. Shifting them toward teal weakens the signal.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="do-card"><div class="label">Do — red only for genuine errors, green only for success, with an icon and message alongside the color.</div></div>
  <div class="dont-card"><div class="label">Don't — a green "Submit" button or a red section header. Brand emphasis is teal; signal colors mean status, not style.</div></div>
</div>

## Related

- **[Palette](/colors/)** — the five core brand colors.
- **[Scales & Tints](/colors/scales)** — building tinted backgrounds and borders.
- **[Methodology](/colors/methodology)** — how semantic accents fit the 60-30-10 ratio.
- **[Design Tokens](/downloads/tokens)** — semantic values ready to copy.
