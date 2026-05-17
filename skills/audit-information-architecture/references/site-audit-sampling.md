# Site audit sampling

Use this when an existing site is too large to inspect URL-by-URL.

## Representative sample

Start with:

- homepage
- one or more category or hub pages
- one high-value detail page per major template
- important conversion pages
- representative paginated or faceted pages when present
- recent and old content when freshness may matter

## Minimum sample

A sample is only representative when it covers enough distinct templates to support a template-level claim. At minimum, gather:

- the homepage
- at least one page from each major template observed in navigation, the sitemap, or internal links
- when several templates exist, include at least one page from a primary commercial or conversion surface, one informational or hub surface, and one detail surface

If a site has fewer than three meaningful templates, audit every template. Record the templates audited and the templates omitted in the audit output so the scope of any claim is legible.

## Standalone fallback

When no upstream skill output (for example `audit-site-overview`) is available, build the template map from primary evidence before drawing site-wide conclusions:

1. Fetch `robots.txt` and any sitemaps it declares.
2. Fetch the homepage and any global navigation hubs reachable from it.
3. Group the sitemap URLs by URL-prefix templates, then sample at least one URL per template per the minimum-sample rule above.
4. Record this construction step in the audit output so downstream skills can reuse it instead of repeating the work.

## Template-first reasoning

- Group URLs by template, rendering path, and business function before drawing site-wide conclusions.
- Preserve at least one representative URL per template in findings.
- If templates diverge materially, split the finding rather than forcing a false site-wide claim.

## Escalation rule

Move from sample audit to broad crawl or data export when:

- a defect appears template-wide
- important URLs are missing from discovery paths
- the site uses many generated combinations, locales, or faceted routes
- Search Console or logs suggest scale effects that samples cannot settle
