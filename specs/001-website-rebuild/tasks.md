# Tasks: Four-Page Website Rebuild

**Feature**: [001-website-rebuild](spec.md)  
**Spec**: [spec.md](spec.md) | **Plan**: [plan.md](plan.md)  

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, dependency installation, and baseline configuration.

- [x] T001 Initialize Next.js 15+ App Router project with TypeScript, React 19, and Sass in package.json
- [x] T002 Install and configure Payload CMS 3.x packages (`@payloadcms/next`, `@payloadcms/db-sqlite`, `@payloadcms/richtext-lexical`) in package.json and payload.config.ts
- [x] T003 Configure Next.js server proxy convention in proxy.ts (strictly no middleware.ts)
- [x] T004 [P] Setup SCSS design tokens (60/30/10 colors, 8pt grid, mobile-first breakpoints) in src/styles/abstracts/_variables.scss and src/styles/abstracts/_mixins.scss
- [x] T005 [P] Setup base styles and Google Fonts (Unbounded and Montserrat) in src/styles/base/_reset.scss, src/styles/base/_typography.scss, and src/styles/globals.scss
- [x] T006 [P] Configure Vitest and Playwright test environments in vitest.config.ts and playwright.config.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure, database schemas, and shared UI components that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T007 Implement Payload CMS taxonomy collections in src/collections/Topics.ts, src/collections/Capabilities.ts, and src/collections/Tags.ts under admin.group
- [x] T008 [P] Implement Payload CMS collections for media, pages, and inquiries in src/collections/Media.ts, src/collections/Pages.ts, and src/collections/ContactInquiries.ts
- [x] T009 [P] Implement Payload CMS global SiteSettings in src/globals/SiteSettings.ts
- [x] T010 Implement Payload Local API client helper in src/lib/payload.ts
- [x] T011 Setup Payload CMS admin and REST API endpoints in src/app/(payload)/admin/[[...segments]]/page.tsx and src/app/(payload)/api/[...slug]/route.ts
- [x] T012 Implement root layout with fonts, metadata, and global styles in src/app/(site)/layout.tsx
- [x] T013 [P] Implement global navigation header, mobile navigation drawer, and footer in src/components/layout/Header.tsx, src/components/layout/MobileNav.tsx, and src/components/layout/Footer.tsx
- [x] T014 [P] Implement reusable UI primitives (Button, Section, ContactModal) in src/components/ui/Button.tsx, src/components/ui/Section.tsx, and src/components/ui/ContactModal.tsx
- [x] T015 Implement contact inquiry API handler with input validation in src/app/(site)/api/contact/route.ts and src/lib/utils/validation.ts
- [x] T016 Create initial database seed script populating content from the brief in src/lib/seed.ts

**Checkpoint**: Foundation ready — user story implementation can now begin.

---

## Phase 3: User Story 1 - Home Page & Credibility Narrative (Priority: P1) 🎯 MVP

**Goal**: Deliver the high-impact Home page communicating "We Build Things That Work", quiet digital failures diagnosis, workflow narrative, real case studies, and closing conversation CTA.

**Independent Test**: Load `http://localhost:3000/`, verify the hero and ambient particle canvas, scroll through the diagnosis and process narratives, view case studies, and submit the closing contact inquiry.

### Implementation for User Story 1

- [x] T017 [P] [US1] Implement CaseStudies collection schema with verbatim constraints (quietFailureDiagnosed, solutionImplemented, verifiedOutcome) in src/collections/CaseStudies.ts
- [x] T018 [P] [US1] Implement Three.js ambient background particle field with reduced-motion fallback in src/components/home/HeroCanvas.tsx
- [x] T019 [US1] Implement Home Hero section with Unbounded headline and action button in src/components/home/HeroSection.tsx
- [x] T020 [US1] Implement Diagnosis narrative section with GSAP ScrollTrigger phrase illumination in src/components/home/DiagnosisSection.tsx
- [x] T021 [US1] Implement How We Work single narrative section with scroll-drawn SVG path connector in src/components/home/ProcessSection.tsx
- [x] T022 [US1] Implement Case Studies showcase cards with scroll parallax reveals in src/components/home/CaseStudySection.tsx
- [x] T023 [US1] Implement Closing Conversation CTA block in src/components/home/ClosingCTA.tsx
- [x] T024 [US1] Assemble Home Page route querying Payload Local API in src/app/(site)/page.tsx
- [x] T025 [US1] End-to-end integration test verifying Home page narrative and contact flow in tests/e2e/home.spec.ts

**Checkpoint**: At this point, User Story 1 (the MVP) is fully functional and testable independently.

---

## Phase 4: User Story 2 - About Page & Unified Craft (Priority: P2)

**Goal**: Deliver the About page explaining design-and-engineering unification, three operational moments, senior-led delivery guarantee, and technical capability summary.

**Independent Test**: Navigate to `/about`, verify "Our Story", inspect the three moments ("The brief becomes a build", "The edge cases show up early", "The last 10% doesn't get skipped"), and confirm the senior-led delivery guarantee.

### Implementation for User Story 2

- [x] T026 [P] [US2] Implement Origin Story section ("A rare combination, on purpose") in src/components/about/OriginStory.tsx
- [x] T027 [P] [US2] Implement Three Operational Moments narrative section in src/components/about/ThinkingMoments.tsx
- [x] T028 [US2] Implement Senior Delivery Guarantee and quiet technical keywords line in src/components/about/TeamCommitment.tsx
- [x] T029 [US2] Assemble About Page route querying Payload Local API in src/app/(site)/about/page.tsx
- [x] T030 [US2] End-to-end integration test verifying About page content and guarantees in tests/e2e/about.spec.ts

**Checkpoint**: User Stories 1 AND 2 are both functional independently.

---

## Phase 5: User Story 3 - Services Page & Capability Pillars (Priority: P3)

**Goal**: Deliver the Services page displaying exactly five core capability pillars with concrete deliverable tags and technical keywords, without isolated per-service buttons or mobile app development cards.

**Independent Test**: Navigate to `/services`, confirm all 5 service pillars are present with deliverable tags, verify absence of standalone mobile app development or per-service CTA fragmentation, and confirm single unified bottom CTA.

### Implementation for User Story 3

- [x] T031 [P] [US3] Implement Services collection schema with verbatim constraints (two-digit number ^\d{2}$, deliverables relationship) in src/collections/Services.ts
- [x] T032 [P] [US3] Implement Service Pillar list and card components in src/components/services/ServiceList.tsx and src/components/services/ServiceCard.tsx
- [x] T033 [US3] Assemble Services Page route with unified bottom conversation CTA in src/app/(site)/services/page.tsx
- [x] T034 [US3] End-to-end integration test verifying 5 services and absence of per-service CTA fragmentation in tests/e2e/services.spec.ts

**Checkpoint**: User Stories 1, 2, and 3 are all functional independently.

---

## Phase 6: User Story 4 - Insights Editorial Section (Priority: P4)

**Goal**: Deliver the Insights editorial section ("Notes from the work") featuring pragmatic articles from production client builds.

**Independent Test**: Navigate to `/insights`, review the article list, click through to an insight detail view at `/insights/[slug]`, and confirm the editorial voice adheres to constitutional standards.

### Implementation for User Story 4

- [x] T035 [P] [US4] Implement Posts collection schema with Lexical rich text and topic relationships in src/collections/Posts.ts
- [x] T036 [P] [US4] Implement Insight card and list components in src/components/insights/InsightCard.tsx and src/components/insights/InsightList.tsx
- [x] T037 [US4] Assemble Insights Archive page route querying Payload Local API in src/app/(site)/insights/page.tsx
- [x] T038 [US4] Assemble Individual Insight Article Detail route with Lexical viewer in src/app/(site)/insights/[slug]/page.tsx
- [x] T039 [US4] End-to-end integration test verifying Insights archive and detail route in tests/e2e/insights.spec.ts

**Checkpoint**: User Stories 1 through 4 are all functional independently.

---

## Phase 7: User Story 5 - Accessibility & Reduced Motion (Priority: P5)

**Goal**: Verify 100% WCAG 2.1 AA compliance, keyboard navigation, visible focus rings, and immediate static fallbacks for all animations when reduced motion is preferred.

**Independent Test**: Run automated axe-core accessibility tests across all 4 routes and test reduced-motion simulation in browser dev tools.

### Implementation for User Story 5

- [x] T040 [P] [US5] Implement visible focus-ring styles and skip-to-content navigation link in src/styles/abstracts/_a11y.scss and src/components/layout/SkipLink.tsx
- [x] T041 [US5] Implement automated WCAG 2.1 AA accessibility audit suite using @axe-core/playwright in tests/e2e/a11y.spec.ts
- [x] T042 [US5] Implement reduced-motion simulation test suite verifying static fallbacks for Three.js and GSAP in tests/e2e/reduced-motion.spec.ts

**Checkpoint**: All user stories meet strict constitutional accessibility and motion gates.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Cross-cutting compliance checks, performance validation, and final documentation.

- [x] T043 [P] Implement automated copy linter detecting prohibited agency buzzwords across all public copy in tests/unit/copy-linter.test.ts
- [x] T044 [P] Configure OpenGraph metadata, robots.txt, and sitemap.xml in src/app/(site)/sitemap.ts and src/app/(site)/robots.ts
- [x] T045 Execute full validation walkthrough per quickstart.md and record results in specs/001-website-rebuild/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup (T001 - T006)
       │
       ▼
Phase 2: Foundational (T007 - T016) ──► BLOCKS ALL USER STORIES
       │
       ├──► Phase 3: User Story 1 (Home Page) [P1] 🎯 MVP
       │          │
       ├──► Phase 4: User Story 2 (About Page) [P2]
       │          │
       ├──► Phase 5: User Story 3 (Services Page) [P3]
       │          │
       ├──► Phase 6: User Story 4 (Insights Page) [P4]
       │          │
       └──► Phase 7: User Story 5 (Accessibility & Motion) [P5]
                  │
                  ▼
Phase 8: Polish & Cross-Cutting Concerns (T043 - T045)
```

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Phase 2 (Foundational). Delivers the primary MVP.
- **User Story 2 (P2)**: Depends on Phase 2 (Foundational). Can execute in parallel with US1.
- **User Story 3 (P3)**: Depends on Phase 2 (Foundational). Can execute in parallel with US1/US2.
- **User Story 4 (P4)**: Depends on Phase 2 (Foundational). Can execute in parallel with US1/US2/US3.
- **User Story 5 (P5)**: Depends on completion of story routes for full accessibility scans.

---

## Parallel Opportunities

- **Setup Phase**: T004, T005, and T006 can run in parallel.
- **Foundational Phase**: T008, T009, T013, and T014 can run in parallel.
- **User Story 1**: T017 (CaseStudies schema) and T018 (HeroCanvas) can run in parallel.
- **User Story 2**: T026 (OriginStory) and T027 (ThinkingMoments) can run in parallel.
- **User Story 3**: T031 (Services schema) and T032 (ServiceList) can run in parallel.
- **User Story 4**: T035 (Posts schema) and T036 (InsightCard) can run in parallel.
- **Polish Phase**: T043 (Copy linter) and T044 (Metadata & sitemap) can run in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete **Phase 1: Setup** (T001–T006).
2. Complete **Phase 2: Foundational** (T007–T016).
3. Complete **Phase 3: User Story 1** (T017–T025).
4. **VALIDATE**: Run `tests/e2e/home.spec.ts`. The core Home page and contact pathway are now complete and functional.

### Incremental Delivery
1. Foundation + US1 $\rightarrow$ Working Home MVP.
2. Add US2 $\rightarrow$ About page and senior delivery guarantees.
3. Add US3 $\rightarrow$ 5 core capability pillars.
4. Add US4 $\rightarrow$ Insights editorial publishing.
5. Add US5 $\rightarrow$ Automated accessibility and reduced motion verification.
6. Polish $\rightarrow$ Copy linter and production build verification.
