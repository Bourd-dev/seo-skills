# Search traffic drop diagnosis workflow

Use this workflow when organic Google Search performance has declined and the user wants to know why.

```text
audit-search-performance
-> diagnose-search-traffic-drop
-> relevant specialist audit when the likely cause becomes clear
```

## Sequence logic

1. Confirm the shape of the decline with Search Console and Analytics evidence.
2. Diagnose the most likely cause family from Google's documented set.
3. Hand off to the specialist audit that can prove or remediate the suspected cause.

## Common handoffs

- `audit-http-and-directives`
- `audit-indexability`
- `audit-helpful-content`
- `audit-spam-policy-risk`
- `audit-canonicalization`

## Final synthesis

Return:

- likely cause ranking
- evidence for and against each cause
- next proof step
- remediation sequence when the evidence is strong enough
