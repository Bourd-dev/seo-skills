---
name: map-search-intent
description: Map user intent for target queries before recommending content or page types. Use when deciding what users likely want from a query, distinguishing Know, Know Simple, Do, Website, Visit-in-Person, mixed, local, fresh, or ambiguous intents, or checking whether an existing page matches the need behind the query.
---

# Map search intent

## Goal

Describe what users are likely trying to accomplish for a query so downstream content and SEO recommendations fit the need rather than merely matching words.

## Workflow

1. Read `references/search-intent.md`, `references/helpful-content-rubric.md`, and `references/opportunity-prioritization.md`.
2. If the caller did not supply target queries, derive candidates from the site itself using the procedure in `references/search-intent.md` and record where each query came from before applying the intent rubric.
3. For each target query, determine:
   - dominant interpretation
   - reasonable secondary interpretations
   - Know / Know Simple / Do / Website / Visit-in-Person intent
   - whether locale, explicit location, freshness, or specificity materially changes the answer
4. If multiple meanings or intents are plausible, preserve the ambiguity rather than forcing a false single answer.
5. Compare the likely intent with the current or proposed page:
   - does it answer the need directly?
   - is the content type appropriate?
   - is the page too broad, too narrow, stale, or off-purpose?
6. Hand off:
   - to `map-search-opportunities` when intent reveals a gap or opportunity
   - to `shape-comparison-pages` when the query implies evaluation among options
   - to `suggest-next-seo-actions` when the intent decision must compete with other priorities

## Decision rules

- Do not infer intent from keyword overlap alone.
- Do not recommend a page type that satisfies a convenient adjacent need while missing the actual query.
- Treat query meaning as time-sensitive when the guidelines imply users usually expect the current interpretation.

## Output

Produce:

- intent map by query
- dominant and secondary interpretations
- content-fit judgment for current or proposed pages
- recommended next move where mismatch exists
