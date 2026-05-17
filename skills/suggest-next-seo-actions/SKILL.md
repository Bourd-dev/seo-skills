---
name: suggest-next-seo-actions
description: Recommend the next highest-impact SEO actions for an existing site by combining audit findings, business context, audience needs, and current search fundamentals. Use when the user asks what to do next, how to improve SEO/AEO/GEO, where to focus after an audit, or which opportunities deserve priority.
---

# Suggest next SEO actions

## Goal

Turn the site's current condition into a short, evidence-backed recommendation set: what to do now, what to test next, and what to defer.

## Workflow

1. Read `references/opportunity-prioritization.md`, `references/ai-search-guidance.md`, and `references/audit-output-contract.md`.
2. Gather the best available inputs:
   - recent audit findings
   - site type and business model
   - target audience or conversion goal
   - Search Console, analytics, or query evidence when available
   - representative examples of current pages when relevant
3. Start by identifying the dominant current constraint:
   - technical eligibility
   - discoverability or interpretation
   - content distinctiveness or trust
   - missing commercial/local details
   - weak measurement
   - growth opportunity after fundamentals are sound
4. Generate a small candidate set of actions across:
   - fix
   - improve
   - expand
   - measure
5. Rank candidates by:
   - expected user value
   - search impact
   - confidence from evidence
   - dependency order
   - effort or complexity
6. Distinguish:
   - **do now**: highest-impact action with clear evidence
   - **test next**: promising action with uncertainty
   - **defer**: plausible but not yet justified
7. If the user frames the request as AEO or GEO, translate that into grounded SEO work rather than inventing AI-specific rituals.

## Decision rules

- Fix foundational blockers before suggesting additive growth work.
- Prefer a few decisive recommendations over a long undifferentiated backlog.
- Recommend differentiated content, media, or business-data work only when it serves users and the evidence supports it.
- Call out when a recommendation depends on missing data rather than hiding uncertainty.

## Output

Produce:

- the dominant current constraint
- the top 3–5 recommended actions
- a short "do now / test next / defer" ladder
- evidence and rationale for each recommendation
- any assumptions or missing inputs that could change the ranking
