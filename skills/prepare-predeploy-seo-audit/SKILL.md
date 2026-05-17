---
name: prepare-predeploy-seo-audit
description: Prepare a source-repository or built-site audit before deployment while preserving live-site SEO evidence standards. Use when auditing a static-site or CMS codebase such as Astro, Next.js, or documentation content before release and deciding which SEO checks can be verified preflight versus only after deploy.
---

# Prepare predeploy SEO audit

## Goal

Adapt the existing audit library to a source repository or local build so SEO issues can be caught before deployment without pretending preflight evidence is the same as production evidence.

## Workflow

1. Read `references/evidence-modes.md`, `references/site-audit-sampling.md`, and `references/audit-output-contract.md`.
2. Identify the available predeploy surfaces:
   - source templates
   - content files
   - route definitions
   - generated build output
   - local preview server
3. Prefer generated HTML or a local preview over raw source when evaluating what crawlers will receive.
4. Build a representative template sample from the repo or generated routes.
5. Choose downstream audit skills that make sense predeploy, commonly:
   - `audit-information-architecture`
   - `audit-on-page-signals`
   - `audit-helpful-content`
   - `audit-structured-data`
   - `audit-media-seo`
   - `audit-page-experience`
   - `audit-spam-policy-risk`
   - selected parts of `audit-canonicalization`, `audit-js-rendering`, and `audit-indexability`
6. Mark each conclusion as:
   - verified preflight
   - inferred from source
   - requiring post-deploy verification
7. Produce a short post-deploy checklist for the claims that cannot be settled locally.

## Decision rules

- Do not invent a CMS-specific fork when the built output can answer the question.
- Do not claim production crawlability, indexing, Search Console performance, or real field experience from source inspection alone.
- Prefer preventing template-wide defects before deploy over waiting for them to become live incidents.

## Output

Produce:

- predeploy evidence map
- applicable audit sequence
- findings split by evidence confidence
- post-deploy verification checklist
