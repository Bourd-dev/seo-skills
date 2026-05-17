---
name: audit-ecommerce-readiness
description: Audit whether an ecommerce site exposes the product data Google documents for Search surfaces. Use when checking product-page structured data, Google Merchant Center usage, product attributes, or readiness for ecommerce appearances in Search, Images, Lens, or Shopping experiences.
---

# Audit ecommerce readiness

## Goal

Determine whether the ecommerce site provides Google with the product data needed for the commerce surfaces Google documents.

## Workflow

1. Read `references/ecommerce-readiness.md`, `references/structured-data-policies.md`, and `references/audit-output-contract.md`.
2. Confirm the site actually sells products before running the full audit. Physical goods, downloadable digital products, and paid subscriptions (including SaaS) are in scope per `references/ecommerce-readiness.md`. If the site does not sell anything, stop and record the audit as not applicable.
3. Inspect:
   - product-page structured data where feasible
   - Google Merchant Center participation where relevant
   - available product attributes such as title, description, color, price, and availability
   - whether product data is sufficient for the documented commerce surfaces the business cares about
4. Separate:
   - absent product data
   - incomplete product data
   - markup-validity issues that belong in `audit-structured-data`
   - media issues that belong in `audit-media-seo`
5. Note where a feed gives Google data the page itself does not expose.

## Decision rules

- Do not imply Merchant Center is required for ordinary Search visibility.
- Prefer the smallest truthful improvement that increases eligibility or data accuracy.
- Pair with `audit-business-presence` when organization-level merchant details are the main gap.

## Output

Produce:

- ecommerce-readiness summary
- product-data gaps by template or feed surface
- prioritized findings using the shared audit contract
- follow-up checks requiring Merchant Center, feed, or business-operations access

## Before returning output

Run these checks against the draft before handing it back.

1. The "is this actually an ecommerce site?" gate has been passed. If the site sells nothing, the audit was stopped and recorded as not applicable.
2. Markup-validity defects are routed to `audit-structured-data`. Media defects are routed to `audit-media-seo`. This skill reports the product-data picture, not its constituent parts twice.
3. Merchant Center is not implied as required for ordinary Search visibility. Recommendations tied to it are scoped to the commerce surfaces that actually need it.
4. Verbs name their object. A product is not "incomplete" without naming which fields; a page is not "ineligible" without naming the surface it would have qualified for.
5. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").
