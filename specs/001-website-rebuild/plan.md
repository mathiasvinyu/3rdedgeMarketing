# Implementation Plan: Four-Page Website Rebuild

**Branch**: `001-website-rebuild` | **Date**: 2026-09-19 (Updated) | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-website-rebuild/spec.md` and website brief from `/Volumes/Local/3rdedgeMarketing/3rd-edge-website-brief.md`

## Summary

Build the production-ready 4-page website for 3rd Edge Creative (**Home**, **About**, **Services**, **Insights**) using latest **Next.js (App Router)**, **TypeScript**, **SCSS** with auto-compile following a **Mobile-First design system**, and an embedded **Payload CMS 3.x Headless architecture** on local SQLite. The implementation strictly incorporates every section and copy directive from the project brief and ratified constitution:
- **Server Interception**: Modern Next.js **`proxy.ts`** convention (strictly no deprecated `middleware.ts`).
- **Styling**: SCSS auto-compiled via `sass`, structured mobile-first with design tokens (60/30/10: `#14161A`, `#6A727F`, `#EA5807`, `#FFCC00`), Google Fonts Unbounded ($\ge 24\text{px}$) & Montserrat, and 8pt spatial grid.
- **Headless CMS (Payload 3.x)**: Logically grouped WordPress-like post types (`Pages`, `Services`, `Case Studies`, `Posts`, `Inquiries`) and grouped taxonomies (`Topics`, `Capabilities`, `Tags`) with Lexical rich text. In-process querying via Payload Local API in Next.js Server Components.
- **Home**: "We Build Things That Work" hero with subtle Three.js particle mesh, single-narrative diagnosis of quiet digital failures with GSAP ScrollTrigger illumination, single-narrative "How We Work" with scroll-drawn SVG connector, real named case studies, and closing conversation CTA.
- **About**: "A rare combination, on purpose" origin story, three operational moments ("The brief becomes a build", "The edge cases show up early", "The last 10% doesn't get skipped"), folded-in senior-led delivery line, and quiet technical capability line.
- **Services**: Five core pillars (UX & Product Design, Web Development, Performance, Complex & Enterprise Builds, Design Systems & Brand) with concrete keywords and a single bottom CTA.
- **Insights**: "Notes from the work" editorial archive and post templates sharing pragmatic lessons from production.
- **Accessibility & Motion**: WCAG 2.1 AA contrast compliance, keyboard navigability, and mandatory `prefers-reduced-motion` fallbacks.

## Technical Context

**Language/Version**: TypeScript 5.5+ / Node.js 20+ LTS  
**Primary Dependencies**: Next.js 15+ (App Router), React 19, Payload CMS 3.x (`@payloadcms/next`, `@payloadcms/db-sqlite`, `@payloadcms/richtext-lexical`), Sass (`sass` for auto-compiled SCSS), GSAP 3.12+ (with ScrollTrigger), Three.js (for ambient particle mesh)  
**Server Interception**: Next.js `proxy.ts` file convention ([Next.js Proxy Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)) — strictly no deprecated `middleware.ts`  
**Styling & Responsive Paradigm**: SCSS with native auto-compile; strict **Mobile-First** responsive architecture using progressive `min-width` breakpoints ($bp-sm: 640px, $bp-md: 768px, $bp-lg: 1024px, $bp-xl: 1280px)  
**CMS & Data Persistence**: Headless Payload CMS 3.x with local SQLite database (`payload.db`) — zero external database dependencies; Local API (`getPayload`) in Server Components for zero-latency in-process data fetching  
**Testing**: Playwright for end-to-end user journeys; `@axe-core/playwright` for automated WCAG 2.1 AA accessibility scans; Vitest for unit copy-linting and Payload collection schema validation  
**Target Platform**: Modern evergreen desktop and mobile browsers (Chrome, Safari, Firefox, Edge) deployed on edge-optimized hosting  
**Project Type**: Modern Headless Web Application / Editorial Site with Embedded Headless CMS  
**Performance Goals**: Core Web Vitals targets: LCP < 2.0s, CLS < 0.05, INP < 150ms on mobile broadband; 60fps scrolling performance  
**Constraints**: Zero prohibited agency buzzwords; zero generic 2-col cards or 4-step icon templates; zero interactive estimation calculators; 100% WCAG AA contrast; mandatory `prefers-reduced-motion` fallbacks  
**Scale/Scope**: 4 primary pages + dynamic insight detail routes + Payload admin panel (`/admin`) + contact inquiry pathway; responsive from 320px to 2560px  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Constitutional Gate | Requirement | Status | Notes |
| --- | --- | --- | --- |
| **Principle I: Plain Clarity & Human Voice** | Strict prohibition of buzzwords; short sentences; concrete nouns ("websites", "forms"); plain confidence. | **PASS** | Seed content for Payload collections matches the approved brief verbatim. Automated copy-linter scheduled in testing. |
| **Principle II: Anti-Template Architecture** | No 2-col problem/solution grids; no 4-step icon cards; no stat-bar flex counters; no interactive estimate builders. | **PASS** | Layouts designed as continuous prose narratives (diagnosis and workflow) and real case study showcases. |
| **Principle III: Unified Design & Engineering** | Senior-led craft; resolve edge cases early; non-negotiable polish on the "last 10%". | **PASS** | Edge cases specified in `spec.md`; micro-interactions specified at 150–250ms; senior-led guarantee folded into About. |
| **Principle IV: Disciplined Design System** | 60% charcoal (`#14161A`), 30% slate grey (`#6A727F`), 10% orange (`#EA5807`), yellow (`#FFCC00`) graphic accent only (never text). Unbounded $\ge 24\text{px}$, Montserrat body. 8pt grid. | **PASS** | Enforced through SCSS design tokens in `styles/abstracts/_variables.scss`. Mobile-first progression. |
| **Principle V: Motion & Accessibility** | Purposeful motion only (Three.js ambient mesh, GSAP text illumination, SVG draw). Strict `prefers-reduced-motion` fallback. WCAG 2.1 AA compliant. | **PASS** | All dynamic components encapsulate immediate static CSS fallbacks for reduced-motion. Axe-core tests enforce AA compliance. |
| **Site Boundaries** | Exactly 4 pages: Home, About, Services, Insights. Exactly 5 service pillars. Mobile App Dev excluded. No per-service CTA links. | **PASS** | Payload collections restrict Services to the 5 specified pillars; routes locked in `contracts/page-routes.md`. |

## Project Structure

### Documentation (this feature)

```text
specs/001-website-rebuild/
├── spec.md              # Feature specification
├── plan.md              # This implementation plan (/speckit-plan output)
├── research.md          # Technical decisions: Next.js proxy, SCSS mobile-first, Payload CMS
├── data-model.md        # Payload CMS collection schemas, taxonomies, and relationships
├── quickstart.md        # Runnable validation guide and verification scenarios
├── contracts/           # Interface contracts
│   ├── page-routes.md   # UI contracts for all 4 pages and global layout
│   └── contact-api.md   # Contact inquiry submission contract
└── checklists/
    └── requirements.md  # Specification quality checklist
```

### Source Code (repository root)

```text
.
├── proxy.ts                   # Next.js Proxy convention (request interception, strictly no middleware)
├── payload.config.ts          # Payload CMS 3.x configuration (SQLite, Lexical, Collections)
├── src/
│   ├── app/
│   │   ├── (payload)/         # Payload CMS routes
│   │   │   ├── admin/[[...segments]]/page.tsx # Embedded Payload Admin Panel
│   │   │   └── api/[...slug]/route.ts         # Payload REST API endpoints
│   │   ├── (site)/            # Public-facing Next.js App Router
│   │   │   ├── layout.tsx     # Root layout: fonts, metadata, global styles, Header, Footer
│   │   │   ├── page.tsx       # Home Page (Hero, Diagnosis, Workflow, Case Studies, CTA)
│   │   │   ├── about/
│   │   │   │   └── page.tsx   # About Page (Story, How We Think, Capabilities line, Team)
│   │   │   │   └── page.tsx   # Services Page (5 Capability Pillars, Bottom CTA)
│   │   │   ├── insights/
│   │   │   │   ├── page.tsx   # Insights Archive ("Notes from the work")
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx # Individual Insight Article Detail
│   │   │   └── api/
│   │   │       └── contact/
│   │   │           └── route.ts # Contact inquiry submission handler
│   ├── collections/           # Payload CMS Collections (Post Types & Taxonomies)
│   │   ├── Posts.ts           # Insights editorial posts (Group: Content)
│   │   ├── Topics.ts          # Taxonomy for Insights (Group: Content)
│   │   ├── Services.ts        # Five core capability pillars (Group: Work & Capabilities)
│   │   ├── Capabilities.ts    # Taxonomy for Service tags (Group: Work & Capabilities)
│   │   ├── CaseStudies.ts     # Client case studies (Group: Work & Capabilities)
│   │   ├── Tags.ts            # Taxonomy for Case Studies (Group: Work & Capabilities)
│   │   ├── Pages.ts           # Page builder / singleton content (Group: Pages)
│   │   ├── ContactInquiries.ts# Form submissions (Group: Inquiries)
│   │   └── Media.ts           # Image upload collection (Group: Media)
│   ├── globals/
│   │   └── SiteSettings.ts    # Global navigation, header, footer, contact credentials
│   ├── components/            # React UI Components
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Semantic accessible navigation header
│   │   │   ├── Footer.tsx     # Site footer & contact credentials
│   │   │   └── MobileNav.tsx  # Mobile navigation drawer with focus trapping
│   │   ├── home/
│   │   │   ├── HeroCanvas.tsx # Three.js ambient particle field with reduced-motion fallback
│   │   │   ├── DiagnosisProse.tsx # GSAP ScrollTrigger phrase-by-phrase text reveal
│   │   │   ├── WorkflowStory.tsx  # Scroll-drawn SVG connecting path narrative
│   │   │   ├── CaseStudyList.tsx  # Real named client work with scroll parallax
│   │   │   └── ClosingCTA.tsx # Plain conversation prompt
│   │   ├── about/
│   │   │   ├── OriginStory.tsx    # "A rare combination, on purpose"
│   │   │   ├── ThinkingMoments.tsx# Three operational moments
│   │   │   └── TeamCommitment.tsx # Senior-led delivery guarantee
│   │   ├── services/
│   │   │   ├── ServiceList.tsx    # Five structured capability blocks
│   │   │   └── ServiceItem.tsx    # Service block with deliverables & keyword tags
│   │   ├── insights/
│   │   │   ├── InsightCard.tsx    # Editorial post card
│   │   │   └── InsightBody.tsx    # Clean typography article viewer
│   │   └── ui/
│   │       ├── Button.tsx     # Action button with 150-250ms easing (#EA5807)
│   │       ├── ContactModal.tsx   # Accessible contact inquiry modal dialog
│   │       └── Section.tsx    # Mobile-first 8pt spatial container
│   ├── styles/                # SCSS Architecture (Auto-compiled, Mobile-First)
│   │   ├── abstracts/
│   │   │   ├── _variables.scss# 60/30/10 tokens, spatial grid, typography
│   │   │   └── _mixins.scss   # Mobile-first min-width breakpoints, a11y focus rings
│   │   ├── base/
│   │   │   ├── _reset.scss    # Modern CSS reset & box-sizing
│   │   │   └── _typography.scss # Unbounded & Montserrat typography hierarchy
│   │   ├── globals.scss       # Global CSS variable mapping & body styling
│   │   └── components/        # Component-specific SCSS modules (*.module.scss)
│   └── lib/
│       ├── payload.ts         # Payload Local API client helper (`getPayloadClient`)
│       ├── animation/
│       │   ├── gsap.ts        # GSAP & ScrollTrigger initialization helpers
│       │   └── particles.ts   # Three.js particle mesh renderer
│       └── utils/
│           └── validation.ts  # Input validation for inquiries
└── tests/
    ├── e2e/
    │   ├── navigation.spec.ts # Page navigation & contact flow
    │   └── a11y.spec.ts       # Automated axe-core WCAG 2.1 AA audit
    └── unit/
        ├── copy-linter.test.ts# Buzzword detection test against site copy
        └── schema.test.ts     # Payload schema integrity tests
```

## Complexity Tracking

> **Zero violations. All constitutional gates passed without requiring complexity justifications.**

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --- | --- | --- |
| None | N/A | Embedded Payload CMS 3.x on SQLite runs in-process with zero infrastructure complexity. SCSS natively compiles via `sass`. |
