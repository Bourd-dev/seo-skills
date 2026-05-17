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

## Before returning output

Run these checks against the draft before handing it back.

1. Duplicates collapse only on shared root cause. Findings that share a page or a category but not a cause stay separate.
2. Disagreement between sources is explained, not averaged. Where two inputs ranked the same issue at different severities, the merged finding records both and the basis for the chosen call.
3. Each merged finding maps to one coherent remediation unit. A "finding" that requires three independent fixes is split back into three.
4. Dependent and adjacent findings are kept separate from duplicates. The relationship is recorded so the fix sequence reads as a sequence, not a heap.
5. Verbs name their object. Findings are not "related" without saying how (duplicate, supporting, dependent, adjacent); priorities are not "high" without naming the basis (blocker, severity, scope, confidence).
6. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").
