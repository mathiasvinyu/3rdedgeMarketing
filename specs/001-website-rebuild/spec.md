# Feature Specification: Four-Page Website Rebuild

**Feature Branch**: `001-website-rebuild`

**Created**: 2026-09-19

**Status**: Draft

**Input**: User description: "Build the 4-page website (Home, About, Services, Insights) for 3rd Edge Creative adhering to the design system and constitution."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Prospective Client Evaluates Credibility & Initiates Contact (Priority: P1)

An institutional buyer (e.g., from government or an international NGO) or an executive at a growing private company arrives on the Home page seeking a reliable partner for a digital build. They read plain-spoken, confident copy explaining the agency's focus on building things that work properly, review the diagnosis of quiet digital failures, see proof of real capability, and feel confident enough to start a low-pressure conversation.

**Why this priority**: The primary business purpose of the website is establishing trust and credibility with institutional and high-growth buyers to generate high-quality project inquiries.

**Independent Test**: Can be fully tested by navigating through the Home page, reviewing the narrative sections, clicking the primary call-to-action ("Get in Touch"), and submitting a project inquiry.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the Home page, **When** they view the hero section, **Then** they see a clear, confident headline ("We Build Things That Work") and supporting copy free of marketing jargon.
2. **Given** a visitor scrolls down the Home page, **When** they read the diagnosis narrative ("The Problem"), **Then** the text explains quiet digital failures in continuous prose without two-column problem/solution cards or broken stat metrics.
3. **Given** a visitor reads the "How We Work" section, **When** they review the process narrative, **Then** it describes an end-to-end craft (questioning, spec-first planning, robust engineering, post-launch observation) as a unified story without numbered four-step icon cards.
4. **Given** a visitor reaches the closing section, **When** they interact with the closing call-to-action ("Let's talk about what you're building"), **Then** they can access a clear, unpressured contact pathway to submit project details.

---

### User Story 2 - Evaluator Assesses Design-Engineering Craft on About (Priority: P2)

A technical director or product manager visits the About page to understand who will actually do the work. They learn that 3rd Edge operates as an integrated design-and-engineering studio with no lossy handoffs, where senior practitioners carry the brief from concept to code, surface edge cases early, and never skip the final 10% of polish.

**Why this priority**: Differentiates 3rd Edge from typical agencies by proving that senior specialists deliver the work directly and resolve complex implementation challenges before they become expensive.

**Independent Test**: Can be fully tested by loading the About page, verifying the narrative flow through the origin story and three operational moments, and checking the quiet keyword summary.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the About page, **When** they read "Our Story", **Then** they understand 3rd Edge's founding principle of eliminating the friction between design and engineering.
2. **Given** a visitor reviews "How We Think", **When** they read the three core moments, **Then** they see concrete explanations of "The brief becomes a build", "The edge cases show up early", and "The last 10% doesn't get skipped".
3. **Given** a visitor finishes the narrative, **When** they reach the team commitment section, **Then** they find explicit reassurance that whoever scopes the project builds the project, with no junior handoffs.
4. **Given** a visitor scans the page footer area, **When** they seek technical capabilities, **Then** they find a quiet, plain-text summary of core competencies without generic feature grids.

---

### User Story 3 - Procurement Buyer Verifies Capabilities on Services (Priority: P3)

A procurement officer or technology lead navigates to the Services page to confirm whether 3rd Edge handles their specific technical requirements. They find five clear, distinct capability domains with concrete deliverables and technical keywords, without distracting per-service sales pitches or pricing gimmicks.

**Why this priority**: Provides the explicit technical verification required by sophisticated buyers during vendor selection and RFP evaluations.

**Independent Test**: Can be fully tested by viewing the Services page, verifying all five core pillars are present with correct descriptions and keyword tags, and confirming a single unified contact action exists at the bottom.

**Acceptance Scenarios**:

1. **Given** a visitor accesses the Services page, **When** they inspect the service catalog, **Then** exactly five core service areas are presented: UX & Product Design, Web Development, Performance, Complex & Enterprise Builds, and Design Systems & Brand.
2. **Given** a visitor examines any service block, **When** they read the details, **Then** each block outlines what 3rd Edge delivers along with specific technical capability tags.
3. **Given** a visitor reviews the entire Services page, **When** they inspect interactive elements, **Then** there are no individual per-service CTA buttons or standalone mobile app service cards, but rather a unified page-level contact prompt.

---

### User Story 4 - Reader Explores Production Lessons on Insights (Priority: P4)

A prospective client or technology practitioner explores the Insights page to assess the agency's depth of experience. They find pragmatic notes and articles ("Notes from the work") detailing lessons learned from real client projects, written in a clear, reflective tone.

**Why this priority**: Builds lasting authority and search relevance by demonstrating practical problem-solving in production environments without falling into generic content marketing.

**Independent Test**: Can be fully tested by navigating to Insights, reviewing article summaries, reading an article entry, and verifying the editorial voice adheres to constitutional standards.

**Acceptance Scenarios**:

1. **Given** a visitor navigates to the Insights page, **When** the page loads, **Then** the header introduces the section as "Notes from the work" focused on lessons learned from high-stakes client builds.
2. **Given** a visitor browses article entries, **When** they read post titles and summaries, **Then** the content covers practical technical and strategic insights without generic growth-hacking slogans.

---

### User Story 5 - Accessible & Motion-Sensitive Navigation (Priority: P5)

A visitor using assistive technology (screen reader, keyboard-only navigation) or a visitor with vestibular motion sensitivities accesses the site. They experience full semantic navigation, proper contrast, and zero disorienting animations.

**Why this priority**: Non-negotiable constitutional compliance ensuring equal access, legal compliance, and a frictionless experience for all users regardless of ability or device settings.

**Independent Test**: Can be fully tested by navigating all four pages using only the keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`), testing with screen reader software, and activating `prefers-reduced-motion` in browser settings.

**Acceptance Scenarios**:

1. **Given** a user has enabled `prefers-reduced-motion`, **When** they navigate and scroll through any page, **Then** all animations and scroll-driven effects immediately display in their final static resting states.
2. **Given** a user navigates using only the keyboard, **When** they move through interactive elements, **Then** focus rings are clearly visible, tab order follows logical visual hierarchy, and no focus traps exist.
3. **Given** a user visits any page, **When** content is rendered, **Then** all text-to-background combinations meet or exceed WCAG 2.1 AA contrast ratios (with orange and yellow never used for small body copy).

---

### Edge Cases

- **Slow Connections & Asset Loading**: When media or script assets take extended time to load, the core typography, text narratives, and interactive contact triggers remain readable and functional immediately without content shifts.
- **Extreme Viewport Dimensions**: On ultra-compact screens (down to 320px width) or ultra-wide displays (above 2560px), typography scales gracefully and text containers maintain comfortable line lengths (50–75 characters) without horizontal scrolling.
- **Empty or Incomplete Form Submission**: When a visitor attempts to submit the contact pathway with missing required fields or invalid email formatting, clear inline validation alerts guide correction without losing previously typed information.
- **JavaScript Disabled / Blocked**: If JavaScript fails or is blocked by client security extensions, the full text of all four pages and basic contact affordances remain entirely readable and usable.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The website MUST provide a global navigation header linking across all four primary pages: Home, About, Services, and Insights, with a prominent "Get in Touch" primary action.
- **FR-002**: The Home page MUST display the hero statement "We Build Things That Work" accompanied by plain-spoken supporting copy explaining the agency's focus.
- **FR-003**: The Home page MUST present the diagnosis narrative ("The Problem") as an unbroken, editorial prose section addressing quiet digital failures.
- **FR-004**: The Home page MUST present the workflow narrative ("How We Work") as a single cohesive story detailing questioning, specification, engineering, and post-launch observation.
- **FR-005**: The Home page MUST feature real, named case study highlights demonstrating tangible client outcomes instead of abstract percentage counters or scorecard bars.
- **FR-006**: The Home page and About page MUST include a closing call-to-action inviting prospective clients to start a conversation without pressure or commitment.
- **FR-007**: The About page MUST convey the agency origin story ("A rare combination, on purpose"), explaining the value of unifying design and engineering.
- **FR-008**: The About page MUST detail the three operational mindsets: "The brief becomes a build", "The edge cases show up early", and "The last 10% doesn't get skipped".
- **FR-009**: The About page MUST explicitly communicate that senior practitioners lead and execute delivery directly without junior handoffs.
- **FR-010**: The About page MUST provide a quiet, plain-text summary of technical competencies for scanability and search relevance.
- **FR-011**: The Services page MUST detail exactly five core capability domains: UX & Product Design, Web Development, Performance, Complex & Enterprise Builds, and Design Systems & Brand.
- **FR-012**: Each service block on the Services page MUST include capability descriptions and concrete deliverable tags without isolated per-service contact buttons.
- **FR-013**: The Insights page MUST provide an editorial archive titled "Notes from the work" housing pragmatic, experience-based articles.
- **FR-014**: The site MUST provide an accessible contact pathway (inquiry form / direct contact info) capturing visitor name, organization, email, and project description.
- **FR-015**: All pages and interactive states MUST strictly adhere to the 60/30/10 color palette: dark charcoal `#14161A` (60%), slate grey `#6A727F` (30%), orange `#EA5807` (10% action), and rich yellow `#FFCC00` (graphic highlight only, never text).
- **FR-016**: All pages MUST utilize Google Font **Unbounded** strictly for headlines $\ge 24\text{px}$ and Google Font **Montserrat** for all body, subhead, and UI copy.
- **FR-017**: All motion and animations MUST provide an immediate static fallback whenever `prefers-reduced-motion` is detected.
- **FR-018**: The site MUST strictly exclude generic two-column problem/solution cards, numbered 4-step icon cards, stat counters, interactive pricing calculators, and standalone mobile app development offerings.

### Key Entities *(include if feature involves data)*

- **Project Inquiry**: Captures prospective client details (contact name, organization, email address, project summary, estimated timeframe).
- **Service Domain**: Represents a core capability offering (name, overview paragraph, focus areas / technical tags).
- **Case Study**: Represents client proof of work (client/project name, quiet failure identified, solution implemented, verified outcome).
- **Insight Article**: Represents an editorial post (title, slug, publication date, summary, article body, topic tags).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of public-facing copy complies with the Plain Clarity & Human Voice principle, with zero instances of banned agency buzzwords across all four pages.
- **SC-002**: A first-time visitor can review capability offerings and initiate a project inquiry in under 60 seconds from any page.
- **SC-003**: 100% of pages achieve WCAG 2.1 AA accessibility conformance with zero automated color contrast or keyboard navigation defects.
- **SC-004**: 100% of motion effects immediately resolve to stable, accessible static views when `prefers-reduced-motion` is enabled.
- **SC-005**: All pages render flawlessly across screen widths from 320px to 2560px with zero horizontal scroll overflow and appropriate typographic scaling.
- **SC-006**: Core page content loads and renders in under 2 seconds on standard mobile broadband connections.

## Assumptions

- The website is an editorial-forward presentation site with no gated user account authentication required.
- Contact inquiries are submitted directly via an integrated contact form or linked email protocol, without requiring complex client-side user accounts.
- The Insights section will initially launch with core foundational articles and structured templates ready for ongoing editorial publication.
- Case study highlights on the Home page will draw from real client work as documented in the agency brief.
- Browser compatibility targets all modern evergreen browsers (Chrome, Safari, Firefox, Edge).
