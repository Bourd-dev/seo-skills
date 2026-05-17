---
name: merge-audit-findings
description: Merge compatible SEO audit findings into one deduplicated, dependency-aware report. Use when multiple audit skills have produced overlapping findings and the task is to reconcile evidence, collapse duplicates, preserve uncertainty, rank priorities, or prepare a unified audit summary.
---

# Merge audit findings

## Goal

Turn many compatible audit outputs into one truthful report without double-counting the same root cause or flattening meaningful distinctions.

## Workflow

1. Read `references/finding-synthesis.md`, `references/audit-output-contract.md`, and `assets/audit-finding.schema.json`.
2. Validate that input findings use the shared contract or normalize them before synthesis.
3. Group candidate overlaps by:
   - root cause
   - affected scope
   - smallest sensible corrective action
   - verification method
4. For each group, classify the relationship:
   - duplicate
   - supporting
   - dependent
   - adjacent
5. Merge duplicates and supporting findings while preserving:
   - contributing categories
   - representative evidence
   - the strongest supported severity
   - unresolved uncertainty
6. Keep dependent and adjacent findings separate, but record their relationship so the final sequence is intelligible.
7. Order the final set by:
   - blocker status
   - dependency order
   - severity
   - scope
   - confidence from evidence
8. Produce the final audit shape:
   - executive summary
   - priority table
   - merged findings
   - dependency-aware fix sequence
   - unknowns

## Decision rules

- Do not merge findings merely because they mention the same page or share a category.
- Do not average away disagreement; explain it.
- Prefer one root-cause finding with multiple witnesses over several shallow repeats.
- Keep remediation units human-sized: one merged finding should still map to a coherent fix.

## Output

Produce:

- merge log showing which findings collapsed together and why
- final prioritized findings set
- dependency-aware fix sequence
- unresolved unknowns that should stay visible to downstream recommendation work
