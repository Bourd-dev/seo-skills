---
name: review-seo-myths
description: Review proposed SEO, AEO, or GEO tactics against Google's current official mythbusting guidance. Use when checking whether a recommendation is unsupported, unnecessary, contradicted by Google docs, or drifting toward hacks such as llms.txt, AI-specific markup, content chunking, query-variant page factories, inauthentic mentions, or invented schema.
---

# Review SEO myths

## Goal

Prevent the library from recommending unsupported or contradicted SEO/AEO/GEO tactics when Google's own guidance points elsewhere.

## Workflow

1. Read `references/seo-myths.md`, `references/ai-search-guidance.md`, and `references/spam-policies.md`.
2. When internet access is available, verify the current Google AI optimization guide before making a time-sensitive claim.
3. If the caller did not supply a list of tactics, derive observed tactics from the live site using the procedure in `references/seo-myths.md` and record where each tactic was found before classifying it.
4. For each tactic, also record which engine or surface the tactic claims to target. Apply the scope-of-adjudication rules in `references/seo-myths.md` when the target is not Google Search.
5. For each tactic, classify it as:
   - ordinary supported SEO
   - explicitly unnecessary
   - explicitly contradicted
   - unsupported by current guidance
   - spam-policy risk
6. Check especially for:
   - `llms.txt` or other imagined AI-only files
   - chunking pages solely for AI systems
   - rewriting into an AI-specific dialect
   - producing query-variant pages at scale
   - seeking inauthentic mentions
   - adding invented AI-specific schema or overclaiming structured-data needs
7. Replace rejected tactics with the closest supported alternative when one exists.
8. If the tactic is merely unsupported rather than contradicted, preserve that distinction instead of overstating the case.

## Decision rules

- Do not call a tactic false just because it is unfashionable; use the official source base.
- Do not let "AEO" or "GEO" terminology smuggle in requirements Google says are still ordinary SEO.
- Prefer "unsupported by current guidance" over certainty where Google has not spoken.

## Output

Produce:

- tactic review table
- verdict for each tactic
- supporting source basis
- supported replacement action where relevant
