# Discoverability and deservingness audit workflow

Use this workflow after the technical audit spine has established that the site can generally be crawled and interpreted.

```text
audit-information-architecture
-> audit-on-page-signals
-> audit-helpful-content
-> audit-spam-policy-risk
```

## Sequence logic

1. Understand how the site organizes meaning.
2. Inspect how individual pages describe themselves.
3. Judge whether the content deserves visibility once found.
4. Separate ordinary quality weakness from manipulative policy risk.

## Conditional extensions

Run these only when the site or business model makes them material:

- `audit-media-seo`: when images or video are a meaningful user or search surface
- `audit-structured-data`: when markup is present, rich-result eligibility matters, or markup truthfulness is in doubt

## Final synthesis

Merge outputs into:

- architecture risks
- page-interpretation risks
- content-quality risks
- spam-policy risks
- media visibility opportunities when applicable
- structured-data eligibility issues when applicable

Use `references/audit-output-contract.md` so these findings can later merge cleanly with `technical-site-audit` results.
