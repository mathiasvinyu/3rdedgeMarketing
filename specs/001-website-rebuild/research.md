# Research & Technical Decisions: Four-Page Website Rebuild

**Feature**: [001-website-rebuild](spec.md)  
**Date**: 2026-09-19 (Updated)  

## Technical Decisions

### 1. Framework & Server Interception: Latest Next.js (App Router) with Proxy Convention
- **Decision**: 
  - Use the latest **Next.js** (App Router) with React 19 and TypeScript.
  - For server-level request interception, headers, redirects, and path rewrites, follow the modern Next.js file convention **`proxy.ts`** located at the root/src level per official documentation ([Next.js Proxy Convention](https://nextjs.org/docs/app/api-reference/file-conventions/proxy)).
  - **Strictly prohibit `middleware.ts`**: The legacy `middleware` file convention is deprecated in modern Next.js and has been replaced by `proxy.ts` (exporting a `proxy(request: NextRequest)` function with matcher configuration).
- **Rationale**: 
  - Aligns with the agency's stated technical capability ("Next.js / React, Node.js & APIs" highlighted on the Services and About pages).
  - Offers server-side rendering (SSR) and static generation (SSG) for ultra-fast page delivery and edge deployment for optimal Core Web Vitals (< 2.0s LCP).
  - `proxy.ts` executes cleanly before routes render for fast routing, header injection, security headers, and redirection without the overhead or deprecated conventions of legacy middleware.
- **Alternatives Considered**: 
  - *Legacy `middleware.ts`*: Deprecated in latest Next.js; rejected in favor of standard `proxy.ts`.
  - *Vite + React SPA*: Lacks native SSG/SSR without extra plugins; requires separate routing and meta hydration that can harm SEO and first-contentful paint on slower networks.

---

### 2. Styling: SCSS with Native Auto-Compile & Strict Mobile-First Architecture
- **Decision**: 
  - Use **SCSS** (`sass` package) natively auto-compiled by Next.js without requiring external watchers, custom Webpack configs, or utility frameworks.
  - Structure styles with SCSS Modules (`*.module.scss`) alongside global tokens in `src/styles/`.
  - Enforce a strict **Mobile-First Design** approach across all layouts and components.
- **Mobile-First Architecture**:
  - **Base CSS**: Written for the smallest mobile viewport (320px+). All typography, layouts, padding, and interactive touch targets (minimum 44x44px) default to single-column, touch-optimized mobile ergonomics.
  - **Progressive Enhancement via `min-width` Breakpoints**:
    ```scss
    // Breakpoints (Mobile-First)
    $bp-sm: 640px;   // Large mobile / small tablet
    $bp-md: 768px;   // Tablet portrait
    $bp-lg: 1024px;  // Desktop / Tablet landscape
    $bp-xl: 1280px;  // Wide desktop
    $bp-xxl: 1536px; // Ultra-wide / 2K
    ```
  - **Spacing Progression**: Section vertical padding scales mobile-first:
    - Mobile: `64px` top/bottom padding
    - Desktop (`@media (min-width: 1024px)`): `128px` top/bottom padding (per Constitution Principle IV).
- **Design System Tokens (60/30/10 Hierarchy)**:
  - Declared in SCSS variables (`_variables.scss`) and mapped to CSS custom properties:
    - Dominant (60%): `$color-charcoal: #14161A` (`--bg-dominant`)
    - Secondary (30%): `$color-slate: #6A727F`, `$color-slate-light: #A8AEB6`, `$color-slate-dark: #4A5158`
    - Primary Accent (10% Action): `$color-orange: #EA5807` (`--accent-action`), hover: `#D04F06`
    - Graphic Highlight: `$color-yellow: #FFCC00` (`--highlight-decorative`) — **never used as text**
    - Typography: Google Font `Unbounded` (strictly headlines $\ge 24\text{px}$) and `Montserrat` (all body & UI text).
- **Alternatives Considered**: 
  - *TailwindCSS*: Violates workspace conventions and dilutes curated token discipline with excessive utility clutter.
  - *Desktop-first CSS (`max-width`)*: Produces bloated overrides on mobile and degrades mobile Core Web Vitals.

---

### 3. CMS & Data Architecture: Headless Payload CMS 3.x
- **Decision**: 
  - Install **Payload CMS 3.x** embedded natively into the Next.js App Router (`@payloadcms/next`).
  - Use `@payloadcms/db-sqlite` for lightweight, zero-configuration local file persistence (`payload.db`) that requires no external database service to develop or deploy.
  - Use `@payloadcms/richtext-lexical` for accessible, structured editorial content.
  - Host the Payload admin panel at `/admin` and headless REST/GraphQL endpoints at `/api/*`.
  - Leverage the Payload **Local API** (`getPayload({ config })`) inside Next.js Server Components for instantaneous, zero-network-latency in-process queries during SSR and SSG.
- **Logically Grouped WordPress-Like Architecture (Post Types & Taxonomies)**:
  - Organize collections into clean administrative navigation groups using Payload's `admin.group` configuration:
    1. **Group: Content / Editorial**:
       - `Posts` (`slug`, `title`, `publishedAt`, `readTimeMinutes`, `excerpt`, `content`: Lexical richText, `keyTakeaways`: array, `topics`: relationship to `Topics`)
       - `Topics` (Taxonomy / Category collection grouped directly under Posts)
    2. **Group: Work & Capabilities**:
       - `Services` (`slug`, `number`: "01".."05", `title`, `summary`, `capabilities`: relationship to `Capabilities`)
       - `Capabilities` (Taxonomy for service deliverable tags like "User research", "Accessibility audits")
       - `Case Studies` (`slug`, `clientName`, `title`, `quietFailureDiagnosed`, `solutionImplemented`, `verifiedOutcome`, `featuredImage`: upload, `tags`: relationship to `Tags`)
       - `Tags` (Taxonomy for case study technology/sector tags)
    3. **Group: Pages**:
       - `Pages` (Page builder/singleton records for `Home`, `About`, `Services`, `Insights` holding hero text, narrative prose blocks, SEO meta, and section flags)
    4. **Group: Inquiries**:
       - `Contact Inquiries` (`name`, `email`, `organization`, `projectSummary`, `timeframe`, `status`: `['new', 'reviewed', 'archived']`, `submittedAt`)
    5. **Group: Media**:
       - `Media` (Upload collection for optimized static images, case study artwork, and diagrams)
    6. **Globals (Settings)**:
       - `Site Settings` (Global navigation links, header configuration, closing CTA copy, footer credentials, social links)
- **Field Type Suitability**:
  - Headings/Labels: `text` with validation
  - Long narratives: `textarea` or `richText` (Lexical)
  - Identifiers/Badges: `text` with regex validation (e.g. `number` format `^\d{2}$`)
  - Taxonomies: `relationship` (hasMany: true)
  - Layout options: `select` or `checkbox`
  - Client inquiries: Dedicated read-only/secured `Inquiries` collection
- **Alternatives Considered**: 
  - *Hardcoded JSON / Markdown files only*: Lacks editorial UI for non-technical stakeholders to publish new insights and manage content without code pushes.
  - *External SaaS CMS (Sanity / Contentful)*: Adds unnecessary monthly costs, external API latencies, and API token dependencies compared to native embedded Payload CMS 3.x.

---

### 4. Motion & Animation: GSAP ScrollTrigger & Three.js with Strict Accessibility Fallbacks
- **Decision**: 
  - **Three.js** for the subtle, ambient hero background canvas (floating particle grid / gradient mesh responding gently to pointer movement against `#14161A`).
  - **GSAP (GreenSock) with ScrollTrigger** for the editorial text illumination (Diagnosis section) and dynamic SVG path drawing (How We Work section).
  - Immediate static CSS / DOM fallback triggered whenever `prefers-reduced-motion: reduce` is detected.
- **Rationale**: 
  - Fulfills the brief's specific motion directions ("Hero: subtle, ambient Three.js particle field; Diagnosis-narrative: GSAP ScrollTrigger text reveal; Process narrative: connecting SVG path that draws itself").
  - GSAP ScrollTrigger provides buttery 60fps scrolling without scroll-jacking, preserving native browser scrolling physics.
  - Encapsulating Three.js in a lazy-loaded client component ensures zero impact on initial text rendering and LCP.

---

### 5. Accessibility & Contrast Verification (WCAG 2.1 AA)
- **Decision**: 
  - Strict compliance with WCAG 2.1 AA contrast ratios ($\ge 4.5:1$ for normal body text, $\ge 3:1$ for large text $\ge 18.5\text{px}$ or bold $\ge 14\text{px}$).
  - Orange (`#EA5807`) is strictly restricted to interactive buttons, large headers, and active links against dark charcoal (`#14161A`); it is never used for small body copy.
  - Yellow (`#FFCC00`) is treated solely as a graphic highlight (underlines, SVG icon fills), never as a text color on any background.
  - All interactive buttons and links have visible `:focus-visible` focus rings (2px solid `#EA5807` with 2px offset).
  - Full keyboard accessibility and semantic landmark roles (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).

---

### 6. Verification & Automated Testing
- **Decision**: 
  - **Playwright** for end-to-end functional testing of user journeys (Home, About, Services, Insights, Payload admin, and Contact modal).
  - **`@axe-core/playwright`** for automated WCAG 2.1 AA accessibility scans across all 4 routes.
  - **Vitest** for unit testing copy linters (detecting banned buzzwords) and Payload collection schema integrity.
