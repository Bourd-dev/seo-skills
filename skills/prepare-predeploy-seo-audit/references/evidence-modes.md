# Evidence modes

Use this to decide what can be concluded from a live site, a source repository, or both.

## Operating modes

### Live audit

Use the public site or fetched URLs as the primary evidence surface.

Best for:

- crawlability
- HTTP behavior and directives
- rendered output
- canonicalization
- structured data as deployed
- media discoverability
- actual public business or ecommerce surfaces

### Preflight audit

Use source code plus locally rendered or built output before deployment.

Best for:

- intended routes and templates
- generated HTML
- titles, headings, canonicals, robots meta, structured data, and internal links
- content, media markup, and information architecture
- many template-level spam-policy risks

## Confidence rules

- Prefer rendered build output over source inspection when the question is about what users or crawlers will receive.
- Prefer live-site evidence over preflight evidence when the question is about production behavior.
- Keep environment-dependent conclusions provisional until verified after deployment.

## Usually live-only or privileged-data-only

- Search Console performance
- Google Analytics behavior
- indexed state
- real production crawl behavior
- field Core Web Vitals
- Business Profile, Merchant Center, or knowledge-panel account state
- any claim that depends on Google having already processed the deployed site

## Reporting guidance

Label findings by evidence mode:

- `observed-live`
- `verified-preflight`
- `inferred-from-source`
- `requires-post-deploy-verification`

The same skill may run in either mode, but the claim strength should change with the evidence.
