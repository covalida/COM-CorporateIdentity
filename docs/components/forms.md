# Forms

Forms are where a user hands COVALIDA something real — their work email, a company detail, a document. That is an act of trust, and the interface should honor it: clear labels, generous spacing, calm validation, and a helpful voice when something goes wrong. A form should never make a compliance officer feel scolded. It should feel like a knowledgeable partner guiding them through.

Inputs share the `8px` radius and the teal state model with **[buttons](/components/buttons)**, so a field and its submit button read as one family. Everything below is built for accessible, low-anxiety data entry.

::: tip Calm over clever
Skip multi-step wizards, floating-label tricks, and fields that validate on every keystroke. A plain label above a plain input, validated when the user leaves the field, is the most trustworthy pattern there is.
:::

## Anatomy of a field

Every field is the same four parts, stacked with `6px` between label and input and `6px` between input and help text: **label → input → help text → (error message, only when invalid)**.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:28px;margin:18px 0">
  <div style="max-width:420px">
    <label for="demo-email" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin-bottom:6px">Work email</label>
    <input id="demo-email" type="email" placeholder="name@company.com" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #d7dedf;border-radius:8px;padding:10px 12px" />
    <p style="font-family:inherit;font-size:13px;color:#6f7d7d;margin:6px 0 0">We use this only to send your Trust Center invitation.</p>
  </div>
</div>

- **Label** — semibold `14px` in Deep Slate Gray `#2F4F4F`, always visible above the input. Never a placeholder-only label.
- **Input** — `15px` Slate text, white fill, a `1.5px` gray-200 `#d7dedf` border, `8px` radius, `10px 12px` padding.
- **Help text** — `13px` in gray-500 `#6f7d7d`, one calm sentence explaining what and why. Optional but encouraged.
- **Error message** — appears only when validation fails, replacing or following the help text (see below).

```css
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-weight: 600; font-size: 14px; color: #2f4f4f; }
.field input {
  font-size: 15px;
  color: #2f4f4f;
  background: #fff;
  border: 1.5px solid #d7dedf;
  border-radius: 8px;
  padding: 10px 12px;
}
.field .help { font-size: 13px; color: #6f7d7d; }
```

## Labels and accessibility

Label association is not optional — it is what lets screen readers, click targets, and autofill work.

- **Always associate the label with the input.** Use `<label for="id">` matching the input's `id`, or wrap the input inside the `<label>`. Clicking the label must focus the field.
- **Never use the placeholder as the label.** Placeholders vanish on input, fail contrast, and are invisible to some assistive tech. Placeholders are for *format hints* only (`name@company.com`), never the field's name.
- **Mark required fields in text**, not color alone — append "(required)" or a note, so the requirement survives for color-blind users. If you use an asterisk, explain it once at the top of the form.
- **Tie help and error text to the input** with `aria-describedby`, and set `aria-invalid="true"` on a field in the error state so the message is announced.

```html
<label for="company">Company name (required)</label>
<input id="company" name="company" required
       aria-describedby="company-help" />
<p id="company-help" class="help">As registered — used on your certificate.</p>
```

## Validation states

Four states, driven by the same tokens as the rest of the system. The border does the primary signalling; on focus a teal ring is added; on error and success the border and message color shift to the **[semantic colors](/colors/semantic)**. Focus and validity can co-exist — a focused invalid field shows both a red border and the focus ring.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:28px;margin:18px 0">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;max-width:720px">
    <div>
      <label for="s-default" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin-bottom:6px">Default</label>
      <input id="s-default" type="text" placeholder="Company name" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #d7dedf;border-radius:8px;padding:10px 12px" />
      <p style="font-family:inherit;font-size:13px;color:#6f7d7d;margin:6px 0 0">Resting state.</p>
    </div>
    <div>
      <label for="s-focus" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin-bottom:6px">Focus</label>
      <input id="s-focus" type="text" value="COVALIDA Compliance" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #008080;border-radius:8px;padding:10px 12px;box-shadow:0 0 0 3px rgba(0,128,128,.35)" />
      <p style="font-family:inherit;font-size:13px;color:#6f7d7d;margin:6px 0 0">Teal border plus a 3px ring.</p>
    </div>
    <div>
      <label for="s-error" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin-bottom:6px">Error</label>
      <input id="s-error" type="email" value="name@company" aria-invalid="true" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #ef4444;border-radius:8px;padding:10px 12px" />
      <p style="font-family:inherit;font-size:13px;color:#b91c1c;margin:6px 0 0">Add the part after the &commat;, e.g. company.com</p>
    </div>
    <div>
      <label for="s-success" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin-bottom:6px">Success</label>
      <input id="s-success" type="email" value="name@company.com" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #22c55e;border-radius:8px;padding:10px 12px" />
      <p style="font-family:inherit;font-size:13px;color:#15803d;margin:6px 0 0">Looks good — we'll send the invite here.</p>
    </div>
  </div>
</div>

| State | Border | Ring / message | Notes |
|-------|--------|----------------|-------|
| Default | gray-200 `#D7DEDF` | help text gray-500 `#6F7D7D` | The resting field |
| Focus | Deep Teal `#008080` | `3px` ring `rgba(0, 128, 128, .35)` | Keyboard-visible; never remove it |
| Error | Error `#EF4444` | message `#B91C1C`, `aria-invalid="true"` | Validate on blur / submit, not per keystroke |
| Success | Success `#22C55E` | message `#15803D` | Optional — use only when confirmation adds value |

```css
.field input:focus-visible {
  outline: none;
  border-color: #008080;
  box-shadow: 0 0 0 3px rgba(0, 128, 128, 0.35);
}
.field.is-error input   { border-color: #ef4444; }
.field.is-error .msg    { color: #b91c1c; }
.field.is-success input { border-color: #22c55e; }
.field.is-success .msg  { color: #15803d; }
```

::: warning Color is never the only signal
A red border alone is invisible to many color-blind users. Every error state pairs the color with an icon or a written message and `aria-invalid="true"`. The words carry the meaning; the color reinforces it.
:::

## Error-message voice

The words matter as much as the color. COVALIDA's tone is sovereign and reassuring — an error message helps the user fix the problem without blame.

- **Say what to do, not just what's wrong.** "Add the part after the @, e.g. company.com" beats "Invalid email."
- **Be specific and human.** "This certificate number is 8 digits" beats "Format error."
- **Never blame or alarm.** Avoid "You entered…", "Illegal value", "ERROR". No red walls, no exclamation marks, no all-caps.
- **Keep it to one calm sentence.** If a rule needs a paragraph, the field is asking for too much.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="do-card">
    <div class="label">Do</div>
    <p style="font-size:13px;color:#15803d;margin:8px 0 0;text-align:left">"Add the part after the @, for example company.com."</p>
  </div>
  <div class="dont-card">
    <div class="label">Don't</div>
    <p style="font-size:13px;color:#b91c1c;margin:8px 0 0;text-align:left">"ERROR: Invalid input. You entered a malformed value."</p>
  </div>
</div>

## Layout and spacing

- **Stack fields vertically**, one per row, at `16px` gaps. Multi-column forms slow scanning and break on mobile; reserve side-by-side fields for genuinely paired data (city / postal code).
- **Full-width inputs** inside their container — set `box-sizing: border-box` so padding doesn't overflow the width.
- **Group related fields** under a section heading with `32px` between groups; use `<fieldset>` and `<legend>` for true groupings (an address, a set of choices).
- **One primary submit** per form, using the primary **[button](/components/buttons)**. Place a ghost "Cancel" beside it, never a second primary.
- **Match input and button height.** Both use `8px` radius and comparable vertical padding so a field and its adjacent button align cleanly.

<div style="background:#ffffff;border:1px solid #e3eae9;border-radius:12px;padding:28px;margin:18px 0">
  <div style="max-width:420px">
    <label for="demo-co" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin-bottom:6px">Company name (required)</label>
    <input id="demo-co" type="text" placeholder="As registered" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #d7dedf;border-radius:8px;padding:10px 12px" />
    <label for="demo-mail" style="display:block;font-family:inherit;font-weight:600;font-size:14px;color:#2f4f4f;margin:16px 0 6px">Work email (required)</label>
    <input id="demo-mail" type="email" placeholder="name@company.com" style="width:100%;box-sizing:border-box;font-family:inherit;font-size:15px;color:#2f4f4f;background:#fff;border:1.5px solid #d7dedf;border-radius:8px;padding:10px 12px" />
    <div style="display:flex;gap:12px;align-items:center;margin-top:20px">
      <button style="font-family:inherit;font-weight:600;font-size:15px;color:#fff;background:#008080;border:1px solid #008080;border-radius:8px;padding:10px 20px;cursor:pointer">Request access</button>
      <button style="font-family:inherit;font-weight:600;font-size:15px;color:#008080;background:transparent;border:1px solid transparent;border-radius:8px;padding:10px 16px;cursor:pointer">Cancel</button>
    </div>
  </div>
</div>

## Radius and consistency

Inputs use the same `--cv-radius-md` token as buttons: **`8px`**. This is deliberate — a form is a set of controls that should look uniform, and a mismatched radius between a field and its submit button is the fastest way to make a screen feel unpolished. Keep every input, select, and textarea at `8px`; reserve `999px` for **[badges](/components/badges)** and `12px` for the card or panel the form sits inside.

## Related

- **[Buttons](/components/buttons)** — the submit and cancel actions that complete a form, sharing radius and focus styling.
- **[Semantic Colors](/colors/semantic)** — the error and success values behind validation states.
- **[Badges &amp; Status](/components/badges)** — status pills that reuse the same semantic palette.
- **[Shared tokens](/components/)** — the radius, spacing, and state tokens every field inherits.
- **[Accessibility](/accessibility/)** — label association, focus, and the AA commitments these forms meet.
