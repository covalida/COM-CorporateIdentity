# Buttons

Buttons are where intent becomes action — request access, download a report, submit a form. In a compliance product that means they must be unmistakable, calm, and trustworthy. COVALIDA uses exactly three button types and one shared state model, drawn from the **[teal interaction states](/components/#teal-interaction-states)**. Resist inventing a fourth style; hierarchy comes from *which* button you use, not from new colors.

::: tip One primary per view
A screen should have a single, obvious primary action. Everything else is secondary or ghost. If two buttons compete for "the" action, the user hesitates — and hesitation is the opposite of the confidence the brand promises.
:::

## The three types

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:28px;margin:18px 0">
  <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
    <button style="font-family:inherit;font-weight:600;font-size:15px;color:#ffffff;background:#008080;border:1px solid #008080;border-radius:8px;padding:10px 20px;cursor:pointer">Request access</button>
    <button style="font-family:inherit;font-weight:600;font-size:15px;color:#008080;background:transparent;border:1.5px solid #008080;border-radius:8px;padding:9.5px 20px;cursor:pointer">View standards</button>
    <button style="font-family:inherit;font-weight:600;font-size:15px;color:#008080;background:transparent;border:1px solid transparent;border-radius:8px;padding:10px 16px;cursor:pointer">Learn more</button>
  </div>
</div>

### Primary

The one strong call to action. A solid Deep Teal fill with white text — the most saturated, most confident element on the screen.

- **Background** Deep Teal `#008080` · **Text** white `#ffffff`
- White on `#008080` measures 4.8:1 <span class="contrast-pass">AA</span>. Button labels are semibold, so this clears the requirement comfortably; on hover and press the button only gets darker (and higher contrast).
- For a deliberately heavier, more premium primary — hero sections, the Trust Center sign-in — use Deep Petrol `#155d5b` as the rest color instead. White on `#155d5b` is 7.6:1 <span class="contrast-pass">7.6:1 · AAA</span>.

```css
.btn-primary {
  background: #008080;
  color: #ffffff;
  border: 1px solid #008080;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
}
.btn-primary:hover  { background: #0a6e6e; border-color: #0a6e6e; }
.btn-primary:active { background: #155d5b; border-color: #155d5b; }
```

### Secondary

The supporting action, used next to a primary. A teal outline on a transparent fill — present and clickable, but visually quieter.

- **Border** Deep Teal `#008080`, `1.5px` · **Text** Deep Teal `#008080` · **Fill** transparent
- Teal text on white is 4.8:1 <span class="contrast-pass">AA</span>. On hover, fill with the faint teal-50 tint `#e8f4f4` rather than changing the text color.

```css
.btn-secondary {
  background: transparent;
  color: #008080;
  border: 1.5px solid #008080;
  border-radius: 8px;
  padding: 9.5px 20px; /* -0.5px to keep total height equal to primary */
  font-weight: 600;
}
.btn-secondary:hover  { background: #e8f4f4; }
.btn-secondary:active { background: #cde9e6; }
```

### Ghost / text

The lowest-emphasis action — "Learn more", "Cancel", a link-like control inside dense UI. No border, no fill at rest; teal text only.

- **Text** Deep Teal `#008080` · **Border & fill** none at rest
- On hover, add the same faint teal tint so the hit area becomes visible. Keep the label semibold so it never reads as body copy.

```css
.btn-ghost {
  background: transparent;
  color: #008080;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
}
.btn-ghost:hover { background: #e8f4f4; }
```

## States

Every button moves through the same five states. The color progression is the shared **[teal interaction model](/components/#teal-interaction-states)** — memorize it once, apply it everywhere. Below, the primary button is shown in each state (hover, active, and focus are rendered statically here since inline examples cannot animate).

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:28px;margin:18px 0">
  <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
    <div style="text-align:center">
      <button style="font-family:inherit;font-weight:600;font-size:15px;color:#fff;background:#008080;border:1px solid #008080;border-radius:8px;padding:10px 20px;cursor:pointer">Request access</button>
      <div style="font-size:11px;color:#6f7d7d;margin-top:8px">Default · #008080</div>
    </div>
    <div style="text-align:center">
      <button style="font-family:inherit;font-weight:600;font-size:15px;color:#fff;background:#0a6e6e;border:1px solid #0a6e6e;border-radius:8px;padding:10px 20px;cursor:pointer">Request access</button>
      <div style="font-size:11px;color:#6f7d7d;margin-top:8px">Hover · #0a6e6e</div>
    </div>
    <div style="text-align:center">
      <button style="font-family:inherit;font-weight:600;font-size:15px;color:#fff;background:#155d5b;border:1px solid #155d5b;border-radius:8px;padding:10px 20px;cursor:pointer">Request access</button>
      <div style="font-size:11px;color:#6f7d7d;margin-top:8px">Active · #155d5b</div>
    </div>
    <div style="text-align:center">
      <button style="font-family:inherit;font-weight:600;font-size:15px;color:#fff;background:#008080;border:1px solid #008080;border-radius:8px;padding:10px 20px;cursor:pointer;box-shadow:0 0 0 3px rgba(0,128,128,.35)">Request access</button>
      <div style="font-size:11px;color:#6f7d7d;margin-top:8px">Focus ring</div>
    </div>
    <div style="text-align:center">
      <button disabled style="font-family:inherit;font-weight:600;font-size:15px;color:#94a1a2;background:#eceff0;border:1px solid #eceff0;border-radius:8px;padding:10px 20px;cursor:not-allowed">Request access</button>
      <div style="font-size:11px;color:#6f7d7d;margin-top:8px">Disabled</div>
    </div>
  </div>
</div>

- **Default** — the rest color for the type (Deep Teal for primary).
- **Hover** — one step darker, teal-600 `#0a6e6e` for filled buttons; a faint teal tint for outline and ghost. Signals "this is clickable" without shouting.
- **Active / pressed** — Deep Petrol `#155d5b`. The darkest, most grounded state, held only while the pointer is down.
- **Focus** — a `3px` ring in `rgba(0, 128, 128, 0.35)` with a `2px` offset. This is **non-negotiable** and must survive keyboard navigation; never remove the outline without a visible replacement.
- **Disabled** — gray-100 `#eceff0` fill, gray-400 `#94a1a2` text, `cursor: not-allowed`, and `aria-disabled="true"`. Keep disabled buttons quiet — they should read as unavailable, not broken.

```css
.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px rgba(0, 128, 128, 0.35);
}
.btn:disabled {
  background: #eceff0;
  color: #94a1a2;
  border-color: #eceff0;
  cursor: not-allowed;
}
```

::: warning Never rely on hover alone
Hover-only affordances exclude touch and keyboard users. Every button must be fully identifiable and operable from its default and focus states before hover ever enters the picture.
:::

## Sizes

Three sizes cover almost every layout. All share the `8px` radius and semibold label; only padding and font-size change. Keep one size per button group.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:28px;margin:18px 0">
  <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center">
    <button style="font-family:inherit;font-weight:600;font-size:13px;color:#fff;background:#008080;border:1px solid #008080;border-radius:8px;padding:6px 14px;cursor:pointer">Small</button>
    <button style="font-family:inherit;font-weight:600;font-size:15px;color:#fff;background:#008080;border:1px solid #008080;border-radius:8px;padding:10px 20px;cursor:pointer">Medium</button>
    <button style="font-family:inherit;font-weight:600;font-size:16px;color:#fff;background:#008080;border:1px solid #008080;border-radius:8px;padding:14px 28px;cursor:pointer">Large</button>
  </div>
</div>

| Size | Font size | Padding | Use for |
|------|-----------|---------|---------|
| Small (`sm`) | `13px` | `6px 14px` | Dense tables, toolbars, inline actions |
| Medium (`md`) | `15px` | `10px 20px` | The default — forms, cards, most pages |
| Large (`lg`) | `16px` | `14px 28px` | Hero calls to action, primary landing-page actions |

Always keep a comfortable tap target. On touch surfaces the interactive area should be at least `44 × 44px`; for the small size, add invisible padding or spacing to reach it rather than shrinking the visual button further.

## Radius and shape

Buttons use the `--cv-radius-md` token: **`8px`**, the same radius as **[form inputs](/components/forms)** so controls sitting together look like one family. Soft but not pill-shaped — an `8px` corner reads as modern and composed, where a fully rounded pill would feel more consumer-app than C-level. Reserve the `999px` pill radius for **[badges and chips](/components/badges)**, not buttons.

## Content and labels

- **Verb first, specific.** "Request access", "Download tokens", "Start audit prep" — not "Submit", "OK", or "Click here". The label should describe the outcome.
- **Sentence case.** "View standards", not "View Standards" or "VIEW STANDARDS". Calm, not shouty.
- **Keep it short.** One to three words. If a button needs a sentence, it wants to be a link or needs helper text nearby.
- **Never encode meaning in color alone.** A destructive action still says "Delete"; it does not rely on red to carry the warning. See **[Semantic Colors](/colors/semantic)** for when a state color is appropriate.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="do-card">
    <button style="font-family:inherit;font-weight:600;font-size:14px;color:#fff;background:#008080;border:none;border-radius:8px;padding:9px 18px">Download report</button>
    <div class="label">Do — one clear teal primary, verb-first label</div>
  </div>
  <div class="dont-card">
    <button style="font-family:inherit;font-weight:600;font-size:14px;color:#fff;background:#22c55e;border:none;border-radius:8px;padding:9px 18px">Submit</button>
    <div class="label">Don't — green "brand" button and a vague label</div>
  </div>
</div>

## Related

- **[Shared tokens](/components/)** — radius, spacing, and the teal state model these buttons inherit.
- **[Forms](/components/forms)** — buttons submit forms; they share radius, height, and focus styling.
- **[Badges &amp; Status](/components/badges)** — the pill-shaped counterparts for non-interactive labels.
- **[Semantic Colors](/colors/semantic)** — when an action legitimately needs a status color.
- **[Contrast Checks](/accessibility/contrast)** — the verified ratios behind every button pairing.
