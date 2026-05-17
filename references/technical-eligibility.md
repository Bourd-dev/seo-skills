# Technical eligibility

Use this when auditing whether important URLs can participate in Google Search at all.

## Minimum eligibility checks

For each representative URL, determine:

1. **Access**: can Googlebot reach it, or is access blocked by robots rules, authentication, or other controls?
2. **Response**: does the final URL return an HTTP success response rather than an error, redirect loop, soft 404, or unstable chain?
3. **Indexable content**: does the page expose content Google can index, and is it free of directives that intentionally remove it from Search?

## Adjacent checks

- `robots.txt` controls crawling, not guaranteed removal from the index.
- `noindex` only works if the crawler can access the page and see the directive.
- Rendered content matters for JavaScript-heavy pages; compare initial and rendered HTML when visibility depends on client-side code.
- Canonicals should describe the preferred duplicate representative, not be used as a bandage for broken site architecture.
- Large or fast-changing sites may need crawl-budget analysis after basic eligibility issues are excluded.

## Common evidence

- HTTP status and redirect chain
- `robots.txt` rule matched
- robots meta tag or `X-Robots-Tag`
- canonical target
- initial HTML vs rendered HTML
- sitemap inclusion
- internal-link path to the URL

## Tooling note for head-tag inspection

Several eligibility signals live in the `<head>` of the raw HTTP response: canonical link, robots meta, `hreflang`, JSON-LD blocks, `X-Robots-Tag` (response header). Verify them against the raw response, not a tool that converts HTML to markdown:

- response headers: `curl -sIL <url>` follows redirects and shows every status code in the chain
- raw body: `curl -s <url>` returns the unmodified HTML so `<head>` tags and inline JSON-LD remain intact
- compare crawler-perceived view by changing the `User-Agent` header when needed

If a finding asserts that a head-tag is absent, the evidence field must show a raw-response inspection that confirms the absence. If only a markdown-converted fetch was performed, record the finding as a follow-up check rather than as a confirmed absence.

## Head tags injected by client-side rendering

Google's JavaScript SEO basics documentation describes indexing in two passes: an initial HTML crawl, followed by a second pass that renders JavaScript via the Web Rendering Service. On client-side-rendered sites, head tags including `<link rel="canonical">`, `<meta name="robots">`, and JSON-LD blocks may be injected only after JavaScript runs. The raw HTTP response and the rendered DOM are therefore two distinct observed states and must be treated as such.

When a finding depends on a head tag:

1. Inspect the raw HTTP response with `curl -s` as the primary view.
2. If the tag is absent from raw HTML, check whether the page is client-side rendered. Common markers in the raw HTML include `__NEXT_DATA__`, `__NUXT__`, `data-reactroot`, `data-server-rendered`, or hydration container elements.
3. If client-side rendering is in use, the rendered-DOM state must be checked separately before the finding can claim absence. Tools that expose the rendered view:
   - Google Search Console URL Inspection ("Rendered HTML" panel): the authoritative view of what Google indexes for a given URL. Requires verified Search Console access.
   - Google's Rich Results Test: exposes a rendered DOM for any public URL.
   - A headless browser (for example Playwright or Puppeteer) producing the post-load DOM.
4. If no rendered-DOM check is available, record the finding as "absent from server-rendered HTML; rendered-DOM state not verified" rather than asserting absence outright.

Divergence between raw HTML and rendered DOM is itself a finding category. A canonical present only in the rendered DOM is still a real risk for consumers that do not render JavaScript (some non-Google crawlers, link validators, and AI agents), and is worth recording with the same `evidence` discipline as any other finding.
