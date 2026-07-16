# Covalida Training

**Covalida Training** protects the one asset every other pillar depends on: **people who know what they are doing**. It certifies individual competence and delivers the enablement — courses, e-learning, examinations — that keeps compliance knowledge current. Customer-facing, it also carries the program name **Covalida Academy**.

Training is unusual in the portfolio. It is a **standalone practice** with its own revenue, and at the same time a **cross-cutting layer** that feeds every other pillar. Design it to stand alone *and* to connect.

Write the sub-brand as a soft lockup — **Covalida Training** — following the [lockup rules](/architecture/). Use **Covalida Academy** only where the customer-facing program name is the established label.

<div class="logo-stage mint" style="display:flex;align-items:center;gap:24px;justify-content:center;flex-wrap:wrap">
  <img src="/brand/pillars/training.svg" alt="Covalida Training icon — graduation cap" style="width:96px;height:96px" />
  <div style="text-align:left">
    <div style="font-weight:600;color:#155D5B;letter-spacing:.08em;text-transform:uppercase;font-size:.8rem">Covalida</div>
    <div style="font-weight:800;font-size:1.9rem;color:#2F4F4F;line-height:1.1">Training</div>
  </div>
</div>

## At a glance

Keep this identity kit constant across all Training and Academy material — one icon, one audience, one standard family.

| Attribute | Value |
| --- | --- |
| Domain | Enablement and person certification |
| Program name | Covalida Academy (customer-facing) |
| Icon | Graduation cap ([training.svg](/brand/pillars/training.svg)) |
| Standard | ISO/IEC 17024 (person certification), plus e-learning / LMS |
| Audit object | People and competencies |
| Certification norm | ISO/IEC 17024 |
| Primary audience | HR / L&D, Compliance officers |
| Main driver | ISO/IEC 17024, mandatory training proof |

<div class="standards" style="margin:16px 0">
  <span>ISO/IEC 17024</span><span>LMS</span>
</div>

## The domain — competence, certified and proven

Compliance is only as strong as the people who run it. Training addresses that on two fronts:

- **Person certification under ISO/IEC 17024.** The international norm for bodies that certify *persons* — auditors, officers, specialists. A certified person is portable, market-recognized proof of competence, distinct from certifying a company or a product.
- **Enablement through e-learning and an LMS.** Courses, learning paths and a learning-management platform that keep knowledge current and produce the **mandatory training proof** that regulators and contracts increasingly demand.

The design consequence: Training speaks to people investing in their teams. The tone stays [confident and enabling](/brand/) — growth and capability, never remedial or box-ticking. Whitespace, clarity, a sense of progress.

## Standalone and cross-cutting

This dual nature is the defining idea of the pillar. Design has to express both roles.

<div class="pillar-grid">
  <div class="pillar-card">
    <div class="kicker">Role one</div>
    <h3>Standalone practice</h3>
    <p>A revenue stream in its own right — person certification and Academy courses that a customer can buy on their own, with no other pillar attached.</p>
    <div class="standards"><span>ISO/IEC 17024</span></div>
  </div>
  <div class="pillar-card">
    <div class="kicker">Role two</div>
    <h3>Cross-cutting layer</h3>
    <p>The connective tissue of the portfolio. The people certified here are the same people who run the systems, manage the suppliers and design the products in every other pillar.</p>
    <div class="standards"><span>Feeds Core · Tech &amp; Trust · Traceability · Circularity</span></div>
  </div>
</div>

In diagrams of the whole portfolio, it is legitimate to draw Training two ways: as a **fifth peer pillar** in the row of five, and as a **horizontal band beneath the other four**, feeding competence upward. Pick the framing that fits the story — just keep the lockup and icon consistent.

```text
        Core   Tech & Trust   Traceability   Circularity
        ----------------------------------------------------
Training  ...........  competence feeds every pillar  ...........
```

## Audit object and norm

Training certifies **people** — individual competence — which places it under **ISO/IEC 17024**. It is the sole pillar in the "people" group, distinct from the "systems" pillars ([Core](/architecture/core), [Tech & Trust](/architecture/tech-trust)) under ISO/IEC 17021-1 and the "products and processes" pillars ([Traceability](/architecture/traceability), [Circularity](/architecture/circularity)) under ISO/IEC 17065.

```text
Audit object   Norm             Pillar
People         ISO/IEC 17024    Training
```

## Audience

The buyer is **HR and Learning & Development**, working hand in hand with **Compliance officers**. HR/L&D cares about learning experience, completion and record-keeping; Compliance cares about defensible proof. Design for both — an inviting learning surface backed by rigorous, auditable certification.

## Designing for Training

Differentiate with the **icon and the words**, drawing on the shared brand system.

### Icon

The graduation-cap symbol is a white line-drawing on a **Deep Petrol #155D5B** circle. Pull it from [Iconography](/iconography/) and keep the shared grammar: fixed stroke, rounded caps, no recoloring. Use the same icon for both "Training" and the "Academy" program — do not invent a second cap.

<div class="icon-gallery">
  <figure><img src="/brand/pillars/training.svg" alt="Training graduation-cap icon"/><figcaption>Training — the cap</figcaption></figure>
</div>

### Color

Training touches learner-facing surfaces, so lean on the lighter, more inviting end of the palette — **Light Mint #CDE9E6** for course cards and backgrounds, Deep Teal for structure and labels.

<div class="swatch-grid">
  <div class="swatch-card">
    <div class="chip" style="background:#008080"></div>
    <div class="meta"><div class="name">Deep Teal</div><div class="hex">#008080</div><div class="use">Primary — headings, labels</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#20B2AA"></div>
    <div class="meta"><div class="name">Light Teal</div><div class="hex">#20B2AA</div><div class="use">Progress bars, highlights</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#155D5B"></div>
    <div class="meta"><div class="name">Deep Petrol</div><div class="hex">#155D5B</div><div class="use">Icon circle, buttons</div></div>
  </div>
  <div class="swatch-card">
    <div class="chip" style="background:#CDE9E6"></div>
    <div class="meta"><div class="name">Light Mint</div><div class="hex">#CDE9E6</div><div class="use">Course cards, learner surfaces</div></div>
  </div>
</div>

::: tip Progress, not pressure
Light Teal is the natural color for progress indicators and completion states in the LMS — it reads as forward motion. Keep numeric labels and small text in Deep Teal or [Deep Slate Gray](/colors/) for contrast; Light Teal is an accent, never body text.
:::

### Standards chips

Set the standard as a compact chip using the `.standards` style; add "LMS" where the platform is in scope.

```html
<div class="standards">
  <span>ISO/IEC 17024</span><span>LMS</span>
</div>
```

## Do and Don't

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="do-card">
    <div class="label">Do</div>
    <p style="margin:8px 0 0">Show Training as both a peer pillar and a cross-cutting layer. Use "Covalida Academy" for learner-facing programs and "Covalida Training" for the practice.</p>
  </div>
  <div class="dont-card">
    <div class="label">Don't</div>
    <p style="margin:8px 0 0">Don't split "Academy" off into its own logo, invent a second icon, or imply COVALIDA is already issuing ISO/IEC 17024 person certificates.</p>
  </div>
</div>

## Do not overclaim

::: warning Concept phase
COVALIDA is in the concept and foundation phase — **not accredited** and running **no live audits or certifications**. Describe what Training and the Academy will offer and the standard they will work under; never state or imply that COVALIDA is already certifying people or issuing ISO/IEC 17024 credentials. Read the full honesty rules on [Accreditation & Trust](/architecture/accreditation).
:::

## Related pages

- [Brand Architecture](/architecture/) — how all five pillars lock together.
- [Covalida Core](/architecture/core) · [Tech & Trust](/architecture/tech-trust) · [Traceability](/architecture/traceability) · [Circularity](/architecture/circularity) — the pillars Training feeds.
- [Accreditation & Trust](/architecture/accreditation) — the credibility chain, told honestly.
- [Iconography](/iconography/) · [Color System](/colors/) · [Downloads](/downloads/)
