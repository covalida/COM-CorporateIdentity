# Badges &amp; Status

Badges are the interface's quiet labels. They tag a norm to a pillar, mark a certificate as valid or expiring, or flag a contrast pairing as passing. Because they carry meaning at a glance, they must be legible, consistent, and — above all — subtle. A badge earns attention by being rare, not by being loud.

There are three families in the COVALIDA system: **standards chips** (teal, neutral), **status badges** (semantic — success, warning, error, info), and **contrast badges** (the pass/fail markers used throughout this guide). Each has a job; do not mix them.

::: tip Badges label, they don't act
A badge is never clickable. If a user should be able to do something, use a **[button](/components/buttons)**. Reserve badges for read-only state and metadata so their meaning stays stable.
:::

## Standards chips

The teal pill used to tag ISO norms and regulations — the same chips that appear on the **[pillar cards](/architecture/)**. They are neutral (not a semantic signal), so they use the brand teal rather than a status color: teal-100 `#cde9e6` fill with teal-800 `#124b49` text, in the monospace font, at the `999px` pill radius.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:24px;margin:18px 0">
  <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
    <span style="font-family:var(--vp-font-family-mono);font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;background:#cde9e6;color:#124b49">ISO 9001</span>
    <span style="font-family:var(--vp-font-family-mono);font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;background:#cde9e6;color:#124b49">ISO 27001</span>
    <span style="font-family:var(--vp-font-family-mono);font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;background:#cde9e6;color:#124b49">ISO 42001</span>
    <span style="font-family:var(--vp-font-family-mono);font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;background:#cde9e6;color:#124b49">EUDR</span>
    <span style="font-family:var(--vp-font-family-mono);font-size:12px;font-weight:600;padding:3px 10px;border-radius:999px;background:#cde9e6;color:#124b49">ISO/IEC 17065</span>
  </div>
</div>

Inside a `.pillar-card` the theme styles these automatically — you only write the markup:

```html
<div class="standards">
  <span>ISO 9001</span>
  <span>ISO 14001</span>
  <span>ISO 45001</span>
</div>
```

Outside a pillar card, apply the same values directly:

```css
.chip-standard {
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  background: #cde9e6; /* teal-100 */
  color: #124b49;      /* teal-800 */
}
```

**Guidance.** Use standards chips only for norms, regulations, and seals (ISO 9001, EUDR, CSDDD, the "Fair" seal). Keep the exact official designation — `ISO/IEC 17021-1`, not "17021". Don't tint them by pillar; the single teal keeps a row of chips calm and scannable. In dark UI, invert to a translucent teal fill (`rgba(32, 178, 170, 0.16)`) with teal-200 `#9bd3ce` text.

## Status badges

Status badges carry state, so they use the **[semantic colors](/colors/semantic)** — and only those. Each is a pale tinted pill with a dark label and a small leading dot, so meaning survives in grayscale and for color-blind users. Keep them low-saturation: the tint signals, the dot and word confirm.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:24px;margin:18px 0">
  <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">
    <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px 3px 8px;border-radius:999px;background:rgba(34,197,94,.14);color:#15803d"><span style="width:7px;height:7px;border-radius:999px;background:#22c55e"></span>Valid</span>
    <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px 3px 8px;border-radius:999px;background:rgba(234,179,8,.18);color:#854d0e"><span style="width:7px;height:7px;border-radius:999px;background:#eab308"></span>Expiring</span>
    <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px 3px 8px;border-radius:999px;background:rgba(239,68,68,.14);color:#b91c1c"><span style="width:7px;height:7px;border-radius:999px;background:#ef4444"></span>Expired</span>
    <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px 3px 8px;border-radius:999px;background:rgba(0,128,128,.12);color:#0a6e6e"><span style="width:7px;height:7px;border-radius:999px;background:#008080"></span>In review</span>
  </div>
</div>

| State | Meaning | Dot | Tint | Text |
|-------|---------|-----|------|------|
| Success | Valid, certified, healthy | `#22C55E` | `rgba(34, 197, 94, .14)` | `#15803D` |
| Warning | Expiring, needs review | `#EAB308` | `rgba(234, 179, 8, .18)` | `#854D0E` |
| Error | Expired, failed, rejected | `#EF4444` | `rgba(239, 68, 68, .14)` | `#B91C1C` |
| Info | In review, in progress | `#008080` | `rgba(0, 128, 128, .12)` | `#0A6E6E` |

```css
.badge-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px 3px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
.badge-status .dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
}
.badge-success { background: rgba(34, 197, 94, .14);  color: #15803d; }
.badge-warning { background: rgba(234, 179, 8, .18);  color: #854d0e; }
.badge-error   { background: rgba(239, 68, 68, .14);  color: #b91c1c; }
.badge-info    { background: rgba(0, 128, 128, .12);  color: #0a6e6e; }
```

**Guidance.** Info deliberately reuses Deep Teal, not blue, so neutral state stays on-brand — this is the one intentional overlap between brand and semantic color. Warning amber is light, so status badges always use a **dark label**, never white on saturated amber. Keep the label a single word where possible ("Valid", "Expiring") and always pair the color with that word — color is never the only signal.

::: warning Status is not decoration
Never scatter green and red pills to add "life" to a screen. A wall of colored badges reads as broken. A status badge should be rare enough that when one appears, it means something.
:::

## Contrast badges

The small pass/fail markers used across this guide to report tested contrast ratios. They are a documentation device — you'll see them on the **[Color](/colors/)** and **[Accessibility](/accessibility/contrast)** pages — built from the theme's `.contrast-pass` and `.contrast-fail` classes.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:24px;margin:18px 0">
  <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">
    <span class="contrast-pass">7.6:1 · AAA</span>
    <span class="contrast-pass">4.8:1 · AA</span>
    <span class="contrast-fail">2.6:1 · Fail</span>
  </div>
</div>

```html
<span class="contrast-pass">7.6:1 · AAA</span>
<span class="contrast-fail">2.6:1 · Fail</span>
```

**Guidance.** Use the middle dot `·` to separate the ratio from the WCAG level. Report the real, measured number — never round a `4.4:1` up to `4.5:1` to make it pass. These badges document accessibility honestly; a failing pairing labeled as failing is the whole point.

## Choosing the right family

| You want to… | Use | Family |
|--------------|-----|--------|
| Tag a norm, regulation, or seal | Standards chip (teal) | Neutral |
| Show whether something is valid, expiring, or failed | Status badge | Semantic |
| Report a tested contrast ratio | Contrast badge | Documentation |

If none of these fit, you probably want plain text or a **[button](/components/buttons)** — not a new badge style. Keeping the set to three families is what keeps them meaningful.

## Rules of restraint

- **Subtle by default.** Pale tints, small type (`12px`), pill radius. A badge should whisper the state, not announce it.
- **One meaning per color.** Green is valid, amber is expiring, red is failed — everywhere, always. Never repurpose a semantic color for style.
- **Pair color with a word and, for status, a dot.** Meaning must survive grayscale printing and color blindness.
- **Don't stack too many.** More than three or four chips in a row becomes noise; group or truncate instead.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="do-card">
    <span style="display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;padding:3px 10px 3px 8px;border-radius:999px;background:rgba(34,197,94,.14);color:#15803d"><span style="width:7px;height:7px;border-radius:999px;background:#22c55e"></span>Valid</span>
    <div class="label">Do — pale tint, dot plus word, one clear meaning</div>
  </div>
  <div class="dont-card">
    <span style="display:inline-flex;align-items:center;font-size:12px;font-weight:700;padding:4px 10px;border-radius:999px;background:#ef4444;color:#fff">NEW!</span>
    <div class="label">Don't — saturated fill, shouty label, decorative use</div>
  </div>
</div>

## Related

- **[Semantic Colors](/colors/semantic)** — the success / warning / error / info values behind status badges.
- **[Scales &amp; Tints](/colors/scales)** — building the pale tinted backgrounds these badges use.
- **[Buttons](/components/buttons)** — the interactive counterpart when a label needs to be an action.
- **[Forms](/components/forms)** — validation states reuse the same semantic colors as status badges.
- **[Contrast Checks](/accessibility/contrast)** — where the contrast badges are documented in full.
