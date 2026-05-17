# Finding synthesis

Use this when combining compatible findings from multiple audit skills into one report.

## Core principles

- Preserve evidence; collapse duplication.
- Merge around the underlying issue, not around the wording of the summary.
- Keep distinct findings separate when they require different fixes, owners, or verification steps.
- Preserve uncertainty instead of laundering it into false certainty.

## Merge keys

Two findings are candidates for merging when they substantially overlap on:

- root cause
- affected scope or URL set
- smallest sensible recommendation
- verification step

Shared severity or category alone is not enough.

## Relationship types

- **duplicate**: same issue, same remedy
- **supporting**: separate evidence for the same issue
- **dependent**: one issue should be fixed before another can be judged or remediated
- **adjacent**: related topic, but materially different fix

## Severity resolution

- Do not average severities.
- If duplicate findings disagree, use the highest supported severity and explain why.
- If the higher severity is based only on inference while lower severity has direct evidence, preserve the uncertainty rather than escalating automatically.

## Priority ordering

Prefer:

1. broad blockers over local polish
2. issues that unblock downstream diagnosis before issues that depend on them
3. high-confidence findings before speculative findings
4. fixes with large template or business impact before isolated edge cases

## Final synthesis shape

Return:

1. executive summary
2. priority table
3. merged findings
4. dependency-aware fix sequence
5. unresolved unknowns

## Reporting guidance

- Keep source categories visible so the reader can see which audits contributed evidence.
- When findings are merged, preserve representative evidence from each contributing source.
- When findings remain separate, explain the boundary if the distinction is non-obvious.
