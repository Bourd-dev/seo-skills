# Predeploy site audit workflow

Use this workflow when a site can be inspected before deployment from source code, generated output, or a local preview server.

```text
prepare-predeploy-seo-audit
-> relevant audit skills against generated output or local preview
-> post-deploy verification checklist
```

## Sequence logic

1. Map what can be proven before deployment.
2. Prefer built or rendered output over raw source whenever possible.
3. Run only the audits that remain meaningful in preflight mode.
4. Preserve a clear boundary between predeploy findings and checks that still need live confirmation.

## Usually useful predeploy

- `audit-information-architecture`
- `audit-on-page-signals`
- `audit-helpful-content`
- `audit-structured-data`
- `audit-media-seo`
- `audit-spam-policy-risk`

## Usually needs live follow-up

- `audit-http-and-directives`
- `audit-crawlability`
- `audit-search-performance`
- `diagnose-search-traffic-drop`
- real production rendering or indexing checks

## Final synthesis

Return:

- predeploy findings
- inferred-from-source findings
- required post-deploy checks
- release-blocking issues, if any
