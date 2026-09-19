<!--
### Sync Impact Report
- Version change: Template → 1.0.0 (Initial Ratification)
- Core Principles Ratified:
  - Principle I: Plain Clarity & Human Voice (NON-NEGOTIABLE)
  - Principle II: Anti-Template Architecture & Narrative Honesty
  - Principle III: Unified Design & Engineering (End-to-End Craft)
  - Principle IV: Disciplined Design System & 60/30/10 Hierarchy
  - Principle V: Intentional Motion & Uncompromising Accessibility (WCAG AA)
- Added Sections:
  - Site Architecture & Content Boundaries
  - Quality Gates & Verification Standards
- Removed Sections: None
- Follow-up TODOs: None
-->

# 3rd Edge Creative Constitution

## Core Principles

### I. Plain Clarity & Human Voice (NON-NEGOTIABLE)
All site copy and future editorial content MUST speak like an experienced human professional in conversation over coffee, not an agency brand.
- Banned Vocabulary: Writers and contributors MUST NOT use corporate or growth-marketing buzzwords, including but not limited to: "we leverage", "ecosystems", "frictionless", "industrial-strength", "revenue engines", "UX debt", "cognitive load", "sub-second experiences", "insights for growth", "psychology-backed design", or "our team of experts".
- Specific Nouns Required: Concrete terms ("websites", "forms", "case management systems") MUST replace abstractions ("digital ecosystems", "journeys", "touchpoints").
- Sentence Discipline: Short, declarative sentences MUST do the heavy lifting; long compound sentences that conceal jargon are prohibited.
- Plain Confidence: Claims MUST be stated plainly and supported with real, verifiable context. Warmth MUST be earned through specificity rather than adjectives or generic enthusiasm.
- Target Audience Balance: Voice MUST maintain universal credibility across both institutional buyers (government, NGOs) and growing private/fintech firms without alienating either group.

### II. Anti-Template Architecture & Narrative Honesty
Pages MUST engage visitors through cohesive editorial narrative rather than modular, generic agency layouts.
- Prohibited Components: The site MUST NOT use two-column problem/solution cards, numbered four-step icon grids, stat-bar counters (e.g., broken 0/100 metrics or unsourced percentage stats), or interactive estimate-builder widgets that risk anchoring enterprise quotes too low.
- Narrative Flow: Content sections MUST be delivered as cohesive prose narratives (e.g., quiet diagnosis, how we work) rather than fragmented bullet cards.
- Process Discretion: Proprietary methodologies (such as spec-driven development) MUST be kept implicit in public-facing copy; demonstrate rigor through execution rather than publishing a procedural playbook for competitors.
- Proof Over Padding: Evidence of capability MUST come from real, named case studies and demonstrated technical craftsmanship rather than abstract metric bars.

### III. Unified Design & Engineering (End-to-End Craft)
Software and digital experiences MUST be conceived, designed, and engineered as an unbroken continuum without lossy handoffs.
- No Concept-to-Code Degradation: The same senior practitioners who shape the brief and visual concept MUST carry it into production code, ensuring aesthetic intent ("effortless") is built directly rather than lost in translation.
- Early Edge-Case Resolution: Awkward edge cases (empty states, oversized strings, latency, responsive anomalies) MUST be surfaced and resolved in design exploration while changes are inexpensive, never deferred to downstream tickets.
- The Non-Negotiable Last 10%: Micro-interactions, typography optical alignment, state transitions, and responsive polish MUST NOT be cut or compromised to meet artificial velocity goals.
- Senior-Led Delivery: Client engagements MUST be led and delivered directly by senior specialists; delegating delivery to junior offshore teams or secondary contractors is strictly forbidden.

### IV. Disciplined Design System & 60/30/10 Hierarchy
All user interfaces MUST adhere strictly to the established design system tokens, typography scales, and color discipline.
- 60/30/10 Color Rule:
  - Dominant (60%): Dark charcoal `#14161A` MUST serve as the foundational dark-forward background across all primary layouts.
  - Secondary (30%): Slate grey `#6A727F` (with light `#A8AEB6` and dark `#4A5158` variants) MUST handle body copy, muted text, borders, and structural dividers.
  - Primary Accent (10%): Orange `#EA5807` exclusively owns interactive calls-to-action, buttons, active links, and hover states.
  - Graphic Highlight: Rich yellow `#FFCC00` MUST be restricted to subtle graphic accents (icon fills, underlines, single emphasized words). Rich yellow MUST NEVER be used as a text color due to WCAG contrast failures.
- Typography Discipline:
  - Display / Headlines: Google Font **Unbounded** is reserved strictly for H1/H2 headers and major display statements; it MUST NOT be used below 24px.
  - Body & UI: Google Font **Montserrat** handles all body copy, UI elements, subheadings, and captions.
- 8-Point Spatial Grid: Layouts MUST align to the 8px grid (8, 16, 24, 32, 48, 64, 96, 128px) with generous section padding (128px desktop top/bottom for primary sections, 64px for subsections) to preserve an expansive, premium aesthetic.

### V. Intentional Motion & Uncompromising Accessibility (WCAG AA)
Motion MUST exist solely to clarify narrative pacing or reveal information; gratuitous animation that mimics generic agency templates is prohibited.
- Purposeful Motion Only: Allowed motion includes subtle ambient background particles/mesh, GSAP ScrollTrigger sequential text illumination, and progressive SVG path reveals. Indiscriminate parallax, multi-directional fly-ins, and scroll-jacking are strictly prohibited.
- Micro-Interaction Timing: State transitions and button hovers MUST be crisp (150–250ms easing) and never bouncy or elastic.
- Accessibility Standards (WCAG 2.1 AA):
  - Every animation or canvas interaction MUST respect `prefers-reduced-motion` by providing an immediate, fully-rendered static fallback.
  - Full keyboard accessibility MUST be preserved across all custom components without focus traps.
  - Text and UI contrast MUST be verified to meet WCAG AA requirements across all breakpoints; orange `#EA5807` and yellow `#FFCC00` are forbidden for small body copy.
  - Semantic HTML5 structure, landmarks, and descriptive alt text MUST be maintained regardless of animation complexity.

## Site Architecture & Content Boundaries

### Page Structure
The site MUST be strictly limited to four core pages:
1. **Home**: High-impact hero ("We Build Things That Work"), diagnosis narrative of quiet digital failures, single-paragraph workflow narrative, featured case studies, and closing conversation CTA.
2. **About**: Origin story emphasizing design-engineering unification, three operational moments ("The brief becomes a build", "The edge cases show up early", "The last 10% doesn't get skipped"), senior-led guarantee, and quiet technical keyword line.
3. **Services**: Structured presentation of five core capabilities with dedicated keyword coverage for technical literacy.
4. **Insights**: Editorial blog ("Notes from the work") sharing pragmatic, honest lessons from production projects.

### Scope Boundaries & Exclusions
- The standalone Partnership page is permanently retired; its senior-led delivery premise is integrated into About.
- Mobile App Development MUST NOT be listed or promoted as a standalone core service.
- The five featured service offerings are strictly scoped to:
  1. UX & Product Design
  2. Web Development
  3. Performance (Core Web Vitals & edge delivery)
  4. Complex & Enterprise Builds
  5. Design Systems & Brand
- Per-service CTA buttons are prohibited on the Services page; inquiries are routed through a unified page-level contact section.

## Quality Gates & Verification Standards

All features, code changes, and content updates MUST pass through the following verification checkpoints before approval:
1. **Copy Compliance Check**: Copy MUST be audited against Principle I. Any presence of prohibited agency buzzwords or unearned superlatives fails review.
2. **Structural & Design Review**: Layouts MUST be inspected for adherence to the 60/30/10 palette, 8pt spacing grid, and typography limits (Unbounded >= 24px).
3. **Accessibility Audit**: Automated tests (axe-core / Lighthouse) MUST confirm 100% WCAG AA compliance with zero contrast or keyboard navigation violations.
4. **Performance Gate**: Pages MUST achieve Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms on simulated mobile conditions.
5. **Reduced Motion Verification**: All interactive sections MUST be verified with `prefers-reduced-motion: reduce` enabled to ensure graceful degradation.

## Governance

This Constitution is the supreme governing specification for the 3rd Edge Creative digital presence. It supersedes all informal design suggestions, ad-hoc tickets, and temporary content drafts.
- **Amendment Procedure**: Any modification to these principles, design tokens, or architectural boundaries requires a formal review, documented rationale, and an explicit version bump.
- **Semantic Versioning Policy**:
  - **MAJOR** bump (e.g., 2.0.0): Incompatible redefinitions or removals of core principles or architectural scope.
  - **MINOR** bump (e.g., 1.1.0): Introduction of new principles, service boundaries, or materially expanded design rules.
  - **PATCH** bump (e.g., 1.0.1): Wording refinements, grammatical corrections, and non-semantic clarifications.
- **Enforcement**: All implementation plans, pull requests, and automated tasks MUST verify adherence to this document before merging.

**Version**: 1.0.0 | **Ratified**: 2026-09-19 | **Last Amended**: 2026-09-19
