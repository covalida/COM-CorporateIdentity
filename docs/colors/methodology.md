# Color Methodology

Knowing the palette is not the same as using it well. This page is the decision framework: how to mix the [core five](/colors/) so every COVALIDA surface feels calm, premium, and consistent — whether it's a slide, a web page, or a Trust Center screen.

## HEX is the authority

There is one canonical form for every COVALIDA color: its **HEX value**. RGB and HSL exist only as conveniences for tools that need them. When a color looks off, check it against the HEX on the **[Design Tokens](/downloads/tokens)** page — never eyedrop a color out of a screenshot, a compressed PNG, or a slide, because those introduce drift.

## Why digital-only — no CMYK, no Pantone

COVALIDA is a 100% digital brand. Everything the brand produces is a screen: web, app, PDF, presentation, social. That is a deliberate posture, not a gap.

- **No CMYK and no Pantone.** There is no print workflow to serve, so there are no print values. Do not "convert to CMYK for the printer" — there is no printer in scope.
- **No stationery or physical merch.** No business cards, letterhead, or branded objects. If a project seems to need them, raise it with the brand team rather than inventing print specs.
- **The upside:** one authoritative color model (sRGB HEX) means zero conversion loss and perfect consistency across every surface. The teal you specify is the teal everyone sees.

## The 60-30-10 ratio

The fastest way to make a layout feel on-brand is to budget color by area, not by enthusiasm. Aim for roughly:

<div class="color-scale">
  <div style="background:#ffffff;color:#2f4f4f">60% Light</div>
  <div style="background:#008080;color:#fff">30% Teal</div>
  <div style="background:#20b2aa;color:#0e3a38">10% Accent</div>
</div>

- **60% — light & calm.** White and Light Mint `#CDE9E6` surfaces plus generous whitespace. This is the majority of any screen. Whitespace *is* a brand asset; it's what makes COVALIDA read as sovereign rather than busy.
- **30% — teal presence.** Deep Teal `#008080` and Deep Petrol `#155D5B` for key surfaces, headers, buttons, and structural elements. This is where the brand asserts itself.
- **10% — accent.** Light Teal `#20B2AA`, the signature gradient, and — sparingly — a [semantic color](/colors/semantic) for status. Accents draw the eye to one thing at a time.

Slate `#2F4F4F` text sits across all three zones as the reading layer and isn't counted in the ratio. The principle is simple: **when unsure, add more space and less color.**

::: tip A quick gut check
If a mock feels loud or "off," it's almost always too much of the 30/10 and not enough of the 60. Pull color back to whitespace and mint before adding anything new.
:::

## Pairing rules

Reliable combinations, and the ones to avoid.

| Foreground | Background | Verdict |
|------------|-----------|---------|
| Slate `#2F4F4F` | White / Light Mint `#CDE9E6` | Default reading pair — safe |
| Deep Teal `#008080` | White / Light Mint | Strong, legible emphasis — safe |
| White | Deep Petrol `#155D5B` / Deep Teal `#008080` | Reversed text — safe at normal sizes |
| Light Teal `#20B2AA` | White | Accent shapes only — **not** small text |
| Deep Teal `#008080` | Deep Petrol `#155D5B` | Too close — low contrast, avoid |
| White | Light Mint `#CDE9E6` | No contrast — avoid |

Working principles behind the table:

- **Light on dark, dark on light.** Put light type on Petrol/Teal, and Slate or Deep Teal on white/mint. Don't stack two mid-tones.
- **Light Teal is a graphic, not a font.** Use `#20B2AA` for lines, fills, and accents — never for small text on white. For teal *text*, step down to `700`/`800` from the **[scale](/colors/scales)**.
- **Mint is a floor, not a font.** `#CDE9E6` is always a background; never set text in it.
- **One accent per view.** Let a single Light Teal or gradient moment lead. Competing accents flatten the hierarchy.

## Flat vs. gradient

The signature gradient is powerful precisely because it's rare. Default to flat color; reach for the gradient only for brand moments.

**Use the gradient for:**

- The Core-Shield symbol (its defining fill).
- One hero or feature moment per page — a large shape, banner, or key visual.
- Big graphic surfaces where the diagonal blend can breathe.

**Use flat color for:**

- All UI — buttons, cards, navigation, form controls. Flat teal is predictable and legible; interactive states are easier to reason about.
- Anything with text on top. **Never set body text over the gradient** — contrast shifts across the blend and legibility breaks.
- Small elements, icons in-line, and dense layouts, where a gradient just reads as noise.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="do-card"><div class="label">Do — gradient on the symbol and one hero shape; flat Deep Petrol on buttons and cards.</div></div>
  <div class="dont-card"><div class="label">Don't — gradient behind paragraphs, on buttons, or repeated across every card on a page.</div></div>
</div>

See **[Palette](/colors/)** for the exact gradient stops and CSS.

## A decision checklist

Before shipping any colored surface, run through this:

1. **Budget** — does the layout sit near 60/30/10, with light surfaces dominating?
2. **HEX** — is every color an exact palette HEX, not an eyedropped approximation?
3. **Pairing** — is each text/background combo on the safe list above?
4. **Accent** — is there one clear accent per view, not several competing ones?
5. **Gradient** — is it reserved for a brand moment, with no text on top?
6. **Semantics** — are green/amber/red used only for status, never as brand color?
7. **Contrast** — has every text pairing been checked against **[Accessibility](/accessibility/contrast)**?

## Related

- **[Palette](/colors/)** — the five core colors and the gradient.
- **[Scales & Tints](/colors/scales)** — the 50–900 teal scale for surfaces and states.
- **[Semantic Colors](/colors/semantic)** — status colors and how sparingly to use them.
- **[Accessibility](/accessibility/)** — contrast requirements and tested pairings.
- **[Design Tokens](/downloads/tokens)** — every value ready to copy.
