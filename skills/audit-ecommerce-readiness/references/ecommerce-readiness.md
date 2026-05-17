# Ecommerce readiness

Use this when auditing whether a site selling goods or paid digital products gives Google the product data needed for the Search surfaces Google documents.

## Scope

- Physical goods, downloadable digital products, and subscriptions are all in scope. Google's structured-data documentation describes `Product` for retail goods and `SoftwareApplication` (a subtype of `Product` on schema.org) for software and SaaS, including pricing through `Offer` and `priceSpecification`.
- Google Merchant Center surfaces (Shopping, free product listings) require retail inventory feeds and apply to physical and certain digital goods, not to SaaS subscriptions. When a site sells only SaaS subscriptions, record Merchant Center as not applicable and continue with the structured-data and on-page checks below.
- If the site does not sell anything, stop and record that ecommerce checks are not applicable.

## Core checks

- product data is available through product-page structured data where feasible
- Google Merchant Center is used when richer eligibility or surfaces require it
- product attributes are available, such as title, description, color, price, and availability
- the site is prepared for ecommerce surfaces Google documents, including Search, Images, Lens, and Shopping experiences where applicable

## Reporting guidance

- Do not imply that Merchant Center is mandatory for ordinary Search visibility when Google says it is not.
- Keep product-data completeness separate from generic structured-data validity.
- Pair with `audit-media-seo` and `audit-structured-data` when image or markup specifics need deeper review.
