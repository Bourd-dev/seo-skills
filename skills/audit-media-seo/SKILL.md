---
name: audit-media-seo
description: Audit image and video visibility surfaces on an existing site. Use when checking whether important media is discoverable, indexable, useful, embedded appropriately, described well, or eligible for image and video search features.
---

# Audit media SEO

## Goal

Determine whether images and videos meaningfully support users and whether Search can discover the media that matters.

## Workflow

1. Read `references/media-seo.md`, `references/helpful-content-rubric.md`, and `references/audit-output-contract.md`.
2. Sample templates where media is central or strategically useful.
3. For images, inspect:
   - HTML embedding method
   - alt text quality where meaningful
   - relevance to the page
   - crawlability and indexability of important image URLs
4. For video, inspect:
   - rendered presence of the video
   - whether a dedicated watch page exists when appropriate
   - unique watch-page title and description
   - thumbnail and metadata availability where relevant
5. Distinguish decorative media from value-bearing media.
6. Pair with `audit-js-rendering` if important media appears only after user interaction or client-side injection.

## Decision rules

- More media is not automatically better.
- Search visibility and user value should reinforce each other.
- Treat image and video as separate surfaces with different failure modes.

## Output

Return:

- media visibility summary by template
- high-risk discoverability or eligibility gaps
- prioritized findings using the shared audit contract

## Before returning output

Run these checks against the draft before handing it back.

1. Image and video are reported as separate surfaces with separate failure modes. Findings do not blend the two into one media verdict.
2. Decorative media and value-bearing media are distinguished. A missing alt on a spacer image is not the same finding as a missing alt on a product photo.
3. Where media depends on user interaction or client-side injection to become available, the conclusion is paired with `audit-js-rendering`, not assumed.
4. Verbs name their object. Media is not "missing" without saying from which view (raw HTML, rendered DOM, sitemap); not "ineligible" without naming the feature that would have qualified.
5. No em-dashes. No "X, not Y" reversals. No filler ("delve," "landscape," "navigate" as metaphor, "journey," "underscore").
