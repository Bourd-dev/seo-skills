---
name: shape-comparison-pages
description: Shape or review evidence-led comparison-page briefs for competitor, alternative, versus, and ranked-list review content from observed demand, audit findings, product truths, and original research. Use when deciding whether a comparison page should exist, prioritizing which comparison-query pages to create, turning justified review opportunities into differentiated briefs, or evaluating existing comparison pages without drafting the final copy.
---

# Shape comparison pages

## Goal

Turn a justified comparison-query opportunity into a small set of review-grade page briefs, or judge whether an existing comparison page actually helps people choose.

## Workflow

1. Read `references/comparison-pages.md`, `references/helpful-content-rubric.md`, and `references/opportunity-prioritization.md`.
2. Gather the best available evidence:
   - demand signals from Search Console, `map-search-opportunities`, or equivalent research
   - current audit findings that affect whether expansion is sensible now
   - product truths, differentiators, and known weaknesses
   - first-hand product experience, measurements, customer evidence, or other original research
   - current comparison-subject facts and freshness dates
3. Choose the operating mode:
   - **shape**: define a justified future page
   - **review**: evaluate an existing page against the same evidence standard
4. In **shape** mode, decide whether the opportunity deserves a page before choosing a format.
5. For justified opportunities, choose the smallest fitting format:
   - single alternative
   - ranked alternatives list
   - head-to-head
   - scenario-led comparison
6. Build an evidence ledger for each proposed or existing page:
   - core claims
   - supporting evidence
   - decision factors
   - unknowns or claims that still require research
   - refresh risks
7. Derive the page's angle from the user's decision:
   - who is comparing
   - what they are trying to choose
   - which criteria actually change the answer
   - what evidence would make the page more useful than existing results
8. In **shape** mode, shape the page brief around:
   - query intent
   - recommended reader
   - format and role in the site
   - decision factors
   - meaningful differences
   - benefits and drawbacks
   - best-fit and poor-fit scenarios
   - supporting evidence to collect or show
   - internal-link role
9. In **review** mode, evaluate the existing page for:
   - whether the comparison problem is clear
   - whether the chosen format fits the intent
   - whether material claims are evidenced and current
   - whether the page explains meaningful differences, trade-offs, and best-fit scenarios
   - whether the page stands above generic vendor-claim aggregation
10. Rank the candidate pages or reviewed fixes by:
   - user value
   - demand or business importance
   - evidence strength
   - distinctiveness
   - dependency order
   - effort and refresh burden
11. Hand the surviving recommendation set to `suggest-next-seo-actions` when it must compete with other SEO work.

## Decision rules

- Do not recommend comparison pages just because a keyword pattern exists.
- Do not scale page count faster than the evidence can stay truthful and current.
- Do not write unsupported negatives about compared products, services, or brands, or pretend public vendor claims are original research.
- Do not draft final page copy; stop at briefs, findings, and evidence requirements.
- Prefer robust, useful comparisons over boilerplate feature matrices.
- When the best answer is conditional, make the condition explicit instead of forcing a universal winner.
- If the page cannot offer original evidence, first-hand insight, or a clearer decision than existing results, defer it.

## Output

Produce:

- a recommended comparison-page set with rationale, or a review summary for existing pages
- a page brief for each approved page when shaping new work
- the evidence ledger and missing research
- the top reasons each page would deserve visibility
- a `do now / test next / defer` ladder when multiple opportunities compete

## Before returning output

Run these checks against the draft before handing it back.

1. Every recommended page can offer original evidence, first-hand insight, or a clearer decision than existing results. Pages that cannot meet that bar are deferred, not shipped.
2. Final copy has not been drafted. The work stops at briefs, evidence ledgers, and findings.
3. Every negative claim about a compared product, service, or brand carries evidence. Vendor public claims are not relabelled as original research.
4. The chosen format (single alternative, ranked list, head-to-head, scenario-led) is justified by the user's decision and the available evidence, not by the keyword pattern.
5. Where the best answer is conditional, the condition is named explicitly. A forced universal winner over a genuinely conditional answer is rewritten or split.
6. Verbs name their object. A page is not "useful" or "differentiated" without saying for which reader, on which decision, and against which alternatives.
7. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").
