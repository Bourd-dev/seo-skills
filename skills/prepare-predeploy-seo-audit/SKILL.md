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

## Before returning output

Run these checks against the draft before handing it back.

1. Each conclusion is labelled verified-preflight, inferred-from-source, or requiring-post-deploy. No conclusion is allowed to drift between categories.
2. Production crawlability, indexing, Search Console performance, and field experience are never claimed from source inspection alone. Where the question would require live evidence, the post-deploy checklist carries it.
3. The audit evaluates the generated HTML or local preview where available, not raw template source. Source-only inferences are flagged as such.
4. Verbs name their object. A finding is not "verified" without naming the surface that verified it (built HTML, local preview, source template); not "deferred" without naming the post-deploy check that would settle it.
5. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").
