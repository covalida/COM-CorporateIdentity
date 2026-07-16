# Email & Newsletter

Email is where COVALIDA shows up in someone's inbox uninvited, so it has to earn the open with calm and usefulness — never noise. This page covers the **Covalida Care** newsletter concept, the design rules that keep email on-brand across unpredictable clients, and a minimal email-signature pattern.

Email is the one surface where the brand cannot fully control rendering. The rules here are built for resilience: they assume Montserrat may not load, that some clients strip CSS, and that dark mode will invert things.

::: tip Email in one line
Resilient Montserrat-with-fallback, mint section bands, one Deep Petrol call to action, and enough whitespace that the message reads calm even in a busy inbox.
:::

## Covalida Care — the newsletter

**Covalida Care** is the brand's compliance newsletter: a calm, regular digest that helps readers stay ahead of EU regulation. The name signals the brand's role — a partner that looks after your core, not a vendor chasing a sale.

- **Purpose.** Plain-language compliance updates — what changed in EUDR, CSDDD, ESPR, PPWR, ISO 27001, ISO 42001 and the rest — and why it matters, explained without fear.
- **Editorial tone.** The same [sovereign, calm voice](/brand/) as everywhere: short sentences, no urgency, no jargon-drunk paragraphs. Take the fear out of the regulation.
- **Cadence and content.** One clear theme per issue. A short intro, two or three digestible items, and a single call to action. Resist the urge to pack every update into one email.

::: warning Concept phase — do not overclaim
COVALIDA is in the concept and foundation phase — **not accredited yet**, with **no live audits yet**. Covalida Care explains the regulatory landscape and the domains the brand addresses; it must not imply certificates are being issued or accreditation is in hand. Do not invent statistics, customer names or team members for editorial content.
:::

## Email design

### Structure

- **Single column.** Cap the body at **600px** wide — the safe, universal email width. Everything stacks in one column; multi-column layouts break in too many clients.
- **Generous padding.** Give the outer container `24px` side padding and space sections apart by `32–40px`. Whitespace survives even when styling degrades.
- **Clear hierarchy.** One `H1`-level headline per email in Montserrat 800, section headings in 700, body in 400/500. Lead with the point; do not bury it below a giant banner.
- **One clear CTA.** A single primary button per email — solid [Deep Petrol #155D5B](/colors/), white label. Additional actions are text links, not more buttons.

### Fonts — Montserrat with a safe fallback

Many email clients (notably Outlook on Windows) will not load web fonts. Always declare **Montserrat first with a full system fallback**, so mail degrades gracefully to a clean sans-serif rather than a serif default.

```css
font-family: "Montserrat", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

- Set the fallback stack inline on every text element, not just once in the head — some clients strip `<style>` blocks.
- Design and test assuming the fallback: keep line lengths and sizes comfortable in Arial or Segoe UI, since a large share of readers will see exactly that.
- Do not embed font files in email. Rely on the stack above.

### Color

<div class="color-scale">
  <div style="background:#ffffff;color:#2f4f4f">Body · white</div>
  <div style="background:#cde9e6;color:#155d5b">Section · mint</div>
  <div style="background:#008080;color:#fff">Accent · teal</div>
  <div style="background:#155d5b;color:#fff">CTA · petrol</div>
</div>

- **White body, mint sections.** The email body is white; use [Light Mint #CDE9E6](/colors/) as a calm background band to separate a section — for example, a highlighted tip or the footer.
- **Teal accents.** [Deep Teal #008080](/colors/) for links, small rules and section markers. [Light Teal #20B2AA](/colors/) may appear as a thin decorative rule, but **never** as text on white.
- **Petrol CTA.** The primary button is solid [Deep Petrol #155D5B](/colors/) with a white label — high contrast, unmistakable.
- **Text in slate.** Body copy in [Deep Slate Gray #2F4F4F](/colors/); white text only on teal or petrol fills.

Pull exact values from the [Design Tokens](/downloads/tokens) page so email matches every other surface.

### Accessible contrast

Inbox contrast matters as much as web contrast — and dark mode makes it trickier.

- Every text-on-background pairing clears **WCAG 2.1 AA** (4.5:1 body, 3:1 large text and buttons). See [Accessibility](/accessibility/) for verified pairings.
- Never rely on color alone — label links and buttons with clear words, not just a color change.
- Use a real background color on colored elements (buttons, bands) rather than a background image, so the color survives when images are blocked.
- Set meaningful `alt` text on every image; assume a meaningful share of readers have images off.
- Provide enough contrast that the email still reads if a client force-inverts to dark mode.

### The CTA button

Build the button as a bulletproof, table-based element with a solid background color so it renders even where images and advanced CSS are stripped.

```html
<a href="#"
   style="display:inline-block;background:#155d5b;color:#ffffff;
          font-family:'Montserrat','Segoe UI',Arial,sans-serif;font-weight:600;
          font-size:16px;line-height:1;padding:14px 28px;border-radius:8px;
          text-decoration:none">
  Read the update
</a>
```

## Email signature

Signatures stay minimal and calm — a small brand presence, not a billboard.

- **Include:** the person's name, their role, and the COVALIDA horizontal logo (or the symbol where space is tight).
- **Type and color.** Name in Montserrat 600 [Deep Slate Gray](/colors/); role in 400. A thin [Deep Teal](/colors/) rule may separate the name block from the logo. Keep it to a few lines.
- **One link maximum.** If a link is included, use the website — a single Deep Teal link, underlined.

::: warning Never invent contact details
Do **not** fabricate email addresses, phone numbers, postal addresses, legal-entity details or team-member names for signatures. Use clear placeholders and let the brand team supply the real values.
:::

```text
[Full Name]
[Role]
COVALIDA Compliance  ·  [website]

[COVALIDA horizontal logo]
```

- **No physical or print elements.** No mailing address block styled as letterhead, no scanned signature image, no printed business-card layout — COVALIDA is a [100% digital brand](/digital/).

## What to avoid

- Multi-column layouts, or bodies wider than 600px.
- Web fonts without a system fallback, or a serif fallback.
- Light Teal text on white, or any pairing below AA contrast.
- More than one primary button per email.
- Background-image buttons or colored bands that vanish when images are blocked.
- Invented contact details, statistics, customer names or accreditation claims.

## Related pages

- [Design Tokens](/downloads/tokens) — copy-paste HEX, custom properties and the font stack.
- [Color System](/colors/) — the palette and accent discipline.
- [Typography](/typography/) and [Font Stack](/typography/font-stack) — Montserrat and its resilient fallback.
- [Accessibility](/accessibility/) — WCAG pairings and contrast checks.
- [Digital Applications](/digital/) — the shared principles across every surface.
