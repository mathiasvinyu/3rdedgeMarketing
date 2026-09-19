# Quickstart Validation Guide: Four-Page Website Rebuild

**Feature**: [001-website-rebuild](spec.md)  
**Date**: 2026-09-19 (Updated)  

## 1. Prerequisites

- **Node.js**: `v20.x` or `v22.x` LTS
- **Package Manager**: `npm` or `pnpm`
- **Modern Evergreen Browser**: Chrome, Safari, Firefox, or Edge

---

## 2. Environment Setup & Execution

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
- Public Website: `http://localhost:3000/`
- Headless Payload CMS Admin: `http://localhost:3000/admin`
- Headless REST Endpoints: `http://localhost:3000/api/*`

---

## 3. End-to-End Validation Scenarios

### Scenario A: Verify Home Page & Brand Principles
1. Open `http://localhost:3000/`.
2. Verify Hero displays:
   - Primary `<h1>`: "We Build Things That Work" in Google Font Unbounded.
   - Ambient background particle field running via Three.js (or immediate static gradient fallback if reduced motion is simulated).
3. Scroll through "The Problem" section:
   - Confirm prose is continuous without 2-column problem/solution cards.
   - Confirm GSAP ScrollTrigger illuminates text phrases sequentially.
4. Scroll through "How We Work":
   - Confirm single narrative story of questioning, specifying, building, and observing.
   - Verify SVG path draw animation.
5. Check closing CTA:
   - "Let's talk about what you're building" with a functional `[Get in Touch]` trigger.

### Scenario B: Verify About Page & Delivery Guarantee
1. Navigate to `http://localhost:3000/about`.
2. Verify "Our Story" ("A rare combination, on purpose").
3. Inspect the three operational moments ("The brief becomes a build", "The edge cases show up early", "The last 10% doesn't get skipped").
4. Verify the senior-led commitment line:
   - *"One more thing worth knowing: whoever you talk to at the start is who actually builds it — no handoff to a junior team partway through."*
5. Check the quiet technical keywords line at the bottom.

### Scenario C: Verify Services Page (5 Pillars Only)
1. Navigate to `http://localhost:3000/services`.
2. Confirm exactly 5 core service offerings:
   - `01 — UX & Product Design`
   - `02 — Web Development`
   - `03 — Performance`
   - `04 — Complex & Enterprise Builds`
   - `05 — Design Systems & Brand`
3. Verify absence of standalone Mobile App Development card.
4. Verify absence of per-service CTA links; confirm unified bottom CTA.

### Scenario D: Verify Insights Page ("Notes from the work")
1. Navigate to `http://localhost:3000/insights`.
2. Verify title: "Notes from the work".
3. Check article list and click through to an insight detail page.
4. Verify tone is pragmatic, plain-spoken, and free of marketing buzzwords.

### Scenario E: Accessibility & Reduced Motion Audits
1. Run automated axe-core / Lighthouse audit:
   ```bash
   npm run test:a11y
   ```
   **Expected**: 0 WCAG 2.1 AA violations.
2. In browser DevTools, emulate `prefers-reduced-motion: reduce`:
   - All particle fields and scroll triggers must immediately render final resting state with zero movement.
3. Test keyboard navigation using `Tab` and `Shift+Tab`:
   - Visible orange focus ring (`#EA5807`) on all interactive buttons and links.
   - Zero keyboard focus traps.

### Scenario F: Copy Compliance Linting
1. Run automated copy linter to detect banned jargon words:
   ```bash
   npm run test:copy
   ```
   **Expected**: 0 occurrences of prohibited terms ("we leverage", "ecosystems", "UX debt", "revenue engine", etc.).

### Scenario G: Payload CMS Admin & Local API Verification
1. Navigate to `http://localhost:3000/admin`.
2. Log in and inspect the collection navigation sidebar:
   - **Content**: `Posts` (Insights) and grouped `Topics` taxonomy.
   - **Work & Capabilities**: `Services` and grouped `Capabilities` taxonomy; `Case Studies` and grouped `Tags` taxonomy.
   - **Pages**: Page builder and singleton records.
   - **Inquiries**: `Contact Inquiries` submissions.
   - **Settings (Globals)**: `Site Settings` (Navigation, Header, Footer).
3. Test editing an Insight or Service item: verify instant reflection on the public website via Next.js Server Component revalidation.

---

## 4. Execution & Validation Results (Verified 2026-09-19)

| Test Suite | Runner | Targets / Scope | Status | Outcome |
| :--- | :--- | :--- | :--- | :--- |
| **Copy & Jargon Linter** | Vitest | Public source, markdown, and components | **PASSED** | 0 prohibited agency buzzwords detected (Constitution Principle I compliant) |
| **Input Validation** | Vitest | Contact inquiry schema & sanitization | **PASSED** | 5/5 boundary test cases passed |
| **Home Page (US1)** | Playwright | Hero headline, Three.js canvas, diagnosis, process, case studies, closing CTA | **PASSED** | 12/12 scenarios passed across Desktop & Mobile Chrome |
| **About Page (US2)** | Playwright | Origin story, 3 operational moments, senior delivery guarantee, tech stack | **PASSED** | 6/6 scenarios passed across Desktop & Mobile Chrome |
| **Services Page (US3)** | Playwright | 5 pillars, no mobile app card, no per-service buttons, single CTA | **PASSED** | 8/8 scenarios passed across Desktop & Mobile Chrome |
| **Insights Archive & Detail (US4)** | Playwright | Archive listing, notes from work, detail route with Lexical viewer | **PASSED** | 6/6 scenarios passed across Desktop & Mobile Chrome |
| **Reduced Motion Fallbacks (US5)** | Playwright | `prefers-reduced-motion: reduce` simulation | **PASSED** | 2/2 scenarios passed with instantaneous static rendering |
| **WCAG 2.1 AA Accessibility Audit (US5)** | @axe-core/playwright | Complete scans of `/`, `/about`, `/services`, `/insights`, plus skip link | **PASSED** | 10/10 scenarios passed with **0 accessibility violations** |
| **Production Build** | Next.js Turbopack | TypeScript compilation & route generation | **PASSED** | Exit Code 0; all 9 static and dynamic routes compiled |
