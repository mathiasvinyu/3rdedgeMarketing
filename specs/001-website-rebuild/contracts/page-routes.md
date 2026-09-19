# Page Routes & UI Contracts: Four-Page Website Rebuild

**Feature**: [001-website-rebuild](../spec.md)  
**Date**: 2026-09-19  

## 1. Global Navigation & Layout Contract

### Header (`<header role="banner">`)
- **Logo**: 3rd Edge Creative visual mark linking to `/`.
- **Navigation Links (`<nav aria-label="Main Navigation">`)**:
  - `Home`: `/`
  - `About`: `/about`
  - `Services`: `/services`
  - `Insights`: `/insights`
- **Primary Action (`CTA`)**: Button/link triggers contact modal or anchors to contact section (`#contact`), styled with orange `#EA5807`.
- **Mobile Menu**: Accessible drawer/modal with keyboard trap prevention, `aria-expanded` toggle, and full focus restoration.

### Footer (`<footer role="contentinfo">`)
- Agency identity, plain positioning statement ("Clear thinking, honest design, solid engineering").
- Full site navigation links.
- Direct contact details (email, location).
- Copyright & legal line.

---

## 2. Route Contracts

### Route 1: `/` (Home Page)
1. **Hero Section (`<section id="hero">`)**:
   - Headline: `<h1>` "We Build Things That Work" (Google Font Unbounded, fluid 64–96px).
   - Supporting Copy: "Good websites aren't magic, they're just done properly — clear thinking, honest design, solid engineering. That's what we do, for clients who'd rather not gamble on their digital presence."
   - Background Canvas: Subtle, ambient Three.js particle mesh with gentle cursor reactivity. Fallback: CSS subtle radial gradient.
   - Primary Action: "Let's Talk" button.
2. **The Problem Section (`<section id="diagnosis">`)**:
   - Single narrative prose block (no columns, no card grids).
   - Copy: "Most sites don't fail loudly. They fail quietly — a form that's slightly too fiddly on mobile, a menu that buries the one thing people actually came for, a page that takes just long enough to lose someone's patience. None of it looks broken. All of it costs you. We notice the quiet failures, and we fix them properly."
   - Motion: GSAP ScrollTrigger phrase-by-phrase illumination.
3. **How We Work Section (`<section id="process">`)**:
   - Single continuous narrative prose block (no numbered 4-step icon cards).
   - Copy: "We start most projects with more questions than people expect — not just what you want built, but who's actually going to use it and what they're trying to get done. From there, we set out exactly what we're building before anyone touches a line of code, so nothing gets lost between a conversation and a finished product. Then we build it properly — fast, accessible, tested against real behaviour rather than a static mockup. And once it's live, we keep watching how people actually use it, because a website is never really finished."
   - Visual: Connecting SVG path drawing itself as the user scrolls.
4. **Case Studies Section (`<section id="work">`)**:
   - Editorial showcase of real named client builds with subtle scroll parallax image reveals.
5. **Closing CTA (`<section id="contact-cta">`)**:
   - Headline: `<h2>` "Let's talk about what you're building"
   - Copy: "If you've got a project in mind — or you're just not sure where to start — we're happy to have a conversation, no pressure and no commitment."
   - Button: `[Get in Touch]` opening contact pathway.

---

### Route 2: `/about` (About Page)
1. **Hero & Origin Story (`<section id="about-story">`)**:
   - Subhead: "A rare combination, on purpose"
   - Prose: "3rd Edge Creative started with a simple observation: most people are good at design, or good at engineering — rarely both, and rarely well enough to move fluently between the two. We built the agency around closing that gap. We design and build, end to end, without a handoff where ideas get lost in translation.\n\nEven now, with AI reshaping how software gets made, that combination is still surprisingly rare. Understanding both sides — how something should feel and how it actually gets built — is still what lets us deliver applications that work in practice, not just in a mockup."
2. **How We Think (`<section id="how-we-think">`)**:
   - Three distinct sequential narrative moments:
     1. **The brief becomes a build**: "Normally, a designer says something like 'make it feel effortless,' and that gets handed to a developer as a ticket — and something gets lost in that handoff, every time. When the same people carry the idea from concept to code, 'effortless' doesn't need translating. It just gets built that way."
     2. **The edge cases show up early, not late**: "A design file shows the happy path. The awkward cases — a form with no data yet, a name that's too long for its box, a slow connection — usually only surface once a developer starts building, by which point they're expensive to fix. We hit those the same week we're still deciding how something should look, while it's still cheap to change."
     3. **The last 10% doesn't get skipped**: "Polish is usually the first thing dropped when a project runs over budget or handoff friction eats the schedule — it's the part that depends on someone downstream still caring after the 'real work' is done. When design and build live with the same people, that 10% isn't a nice-to-have someone has to fight for. It's just how the work finishes."
3. **Technical Keywords Line**:
   - Quiet, plain-text scanability line: "Core technical capabilities: React, Next.js, Node.js, TypeScript, Accessibility (WCAG 2.1 AA), Core Web Vitals, CMS Architecture, Design Systems."
4. **Senior-Led Delivery Guarantee (folded from cut Partnership page)**:
   - "One more thing worth knowing: whoever you talk to at the start is who actually builds it — no handoff to a junior team partway through."
5. **Closing CTA**:
   - Aligned with the homepage conversation CTA.

---

### Route 3: `/services` (Services Page)
1. **Header**:
   - Title: `<h1>` "Services"
   - Introduction: "We design and build digital products for clients who can't afford to get it wrong. Five core capabilities, front to back."
2. **Five Service Pillars (`<div class="services-list">`)**:
   - **01 — UX & Product Design**: "We design the actual experience — how something looks, how it flows, and whether people can use it without thinking too hard. Every project starts with real research, not assumptions."  
     *Keywords: User research · Prototyping · Visual design · Accessibility audits*
   - **02 — Web Development**: "We build the site or application properly, front to back — modern frameworks, clean architecture, systems that hold up under real use, not just a demo."  
     *Keywords: Next.js / React · Node.js & APIs · Custom web applications · Secure, scalable architecture*
   - **03 — Performance**: "A slow site loses people before they've even seen what you built. We optimize load times, Core Web Vitals, and asset delivery so that doesn't happen."  
     *Keywords: Core Web Vitals · Server-side rendering & edge delivery · Asset optimization · Database performance*
   - **04 — Complex & Enterprise Builds**: "Some projects are more than a marketing site — internal tools, case management systems, multi-stakeholder platforms. We handle that complexity without losing the plot."  
     *Keywords: Custom dashboards · CMS architecture · Workflow automation · Systems integration*
   - **05 — Design Systems & Brand**: "A brand and a design system should make future work faster, not slower. We build both so your team — or ours — can keep building consistently after we're gone."  
     *Keywords: Style guides · Component libraries · Visual identity · Documentation*
3. **Unified Page CTA**:
   - Single closing conversation prompt at the bottom of the page. No per-service CTA buttons.

---

### Route 4: `/insights` (Insights Page)
1. **Header**:
   - Title: `<h1>` "Notes from the work"
   - Subtitle: "Things we've learned building for clients who can't afford to get it wrong — some technical, some strategic, most of it stuff we wish someone had told us earlier."
2. **Article Archive (`<section class="insights-archive">`)**:
   - Grid or list of insight cards showing title, publication date, reading time, excerpt, topic tags, and direct article link.
3. **Article Detail View (`/insights/[slug]`)**:
   - Full article prose, formatted with clean editorial typography, key takeaways callout, and author notes.
