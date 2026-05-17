# Information architecture

Use this when auditing whether a site's structure helps both people and crawlers understand what matters.

## Core checks

- Important pages should be reachable from meaningful crawl paths, not isolated behind search, filters, or campaign links.
- Hubs, categories, breadcrumbs, navigation, and pagination should reveal the site's conceptual hierarchy.
- Internal links should use crawlable anchors and useful surrounding context.
- Anchor text should help readers and systems understand the destination.
- Similar concepts should be grouped consistently; avoid route sprawl that exposes duplicates without adding user value.

## Evidence to preserve

- source page and destination page
- anchor text
- crawl depth or path from a hub
- orphan or near-orphan examples
- repeated template pattern where the issue is systemic

## Reporting guidance

- Separate architecture defects from content gaps.
- Prefer page groups and templates over isolated one-off URLs.
- If the site uses pagination or incremental loading, pair with crawlability or rendering checks before concluding that all content is discoverable.
