# Search intent

Use this when interpreting queries before recommending pages, content, or local/business actions.

## Core query dimensions from the Search Quality Evaluator Guidelines

- dominant, common, minor, and no-chance interpretations
- Know
- Know Simple
- Do
- Website
- Visit-in-Person
- mixed intent
- explicit location
- locale and user location
- changing meaning over time
- freshness
- specificity

## Working guidance

- Start with what users are trying to accomplish, not with the literal words alone.
- Important words in the query can rule out superficially matching but unhelpful pages.
- A query can support multiple reasonable interpretations; recommendations should reflect that when needed.
- Some queries require current information by default even if they do not say so explicitly.
- A page can be high quality yet still fail to meet a specific user need.

## Reporting guidance

- Distinguish query meaning from page quality.
- Record uncertainty where intent is genuinely mixed.
- Prefer the dominant interpretation while preserving reasonable secondary interpretations when they matter.

## When no target queries are provided

The skill operates on queries. When none are supplied by the caller, derive candidates from the site itself rather than guessing the market. Use only signals the site exposes:

- queries implied by `<title>` tags, H1s, and visible body copy on the homepage and major hub pages
- queries implied by competitor or comparison pages, including the named entities in their URLs
- queries implied by category, tag, or hub structures in the navigation and sitemap
- queries implied by Search Console exports if available

Record each candidate query alongside the page-level evidence that produced it so the audit shows where the query came from. Do not introduce queries without a site-evidence anchor.
