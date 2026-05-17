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
