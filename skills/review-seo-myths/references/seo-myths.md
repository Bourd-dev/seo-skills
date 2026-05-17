# SEO myths

Use this when checking whether a proposed SEO, AEO, or GEO tactic is supported by Google's own current guidance.

## Primary sources

- Google's guide to optimizing for generative AI features on Google Search  
  https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- AI features and your website  
  https://developers.google.com/search/docs/appearance/ai-features
- Google Search spam policies  
  https://developers.google.com/search/docs/essentials/spam-policies

## Current myth checks explicitly called out by Google

- New AI-specific files or markup such as `llms.txt` are not required for generative AI visibility.
- Content does not need to be "chunked" into tiny pieces for AI systems to understand it.
- Copy does not need to be rewritten into a special AI dialect or exhaust every long-tail query variation.
- Inauthentic mentions are not a useful substitute for strong content and spam-policy compliance.
- Structured data is not required for generative AI search, and there is no special schema.org markup for it.
- Mass-producing query-variant pages to manipulate rankings or AI responses can violate scaled content abuse policy.

## Core frame

- For Google Search, AEO and GEO are still SEO.
- Prefer foundational SEO, useful non-commodity content, and clear technical structure over speculative hacks.
- When Google's docs are silent on a tactic, say it is unsupported by the current source base rather than presenting it as necessary.

## Scope of adjudication

This reference adjudicates tactics against Google's own documented guidance. Other answer engines (for example ChatGPT, Claude, Perplexity, Copilot, Gemini's non-Search surfaces, or AI Mode aspects not covered by Google's Search docs) publish far less operator-facing documentation.

- For a tactic targeting Google Search or its generative-AI surfaces in Search, cite the relevant official Google Search documentation (Search Essentials, technical requirements, spam policies, structured data, helpful-content guidance, or related primary sources).
- For a tactic targeting a non-Google engine, do not classify it as "explicitly unnecessary" or "explicitly contradicted" unless that engine's operator documents the position. In the absence of operator documentation, classify as `unsupported by current guidance` and record which engine the tactic claims to target.
- Do not invent a verdict from observed engine behaviour. If no operator documentation exists, the honest finding is that the tactic cannot be adjudicated.

## When no proposed tactic list is provided

When the skill is invoked against a live site with no explicit list of tactics to review, derive observed tactics from primary evidence:

- machine-readable files referenced from the site (for example `/llms.txt`, parallel `.md` endpoints, AI-specific markup)
- structured-data choices visible in raw HTML
- explicit advice the site gives its own readers in content (blog, docs, comparison pages)
- explicit advice the site makes about ranking in AI engines, on the same surfaces it sells against

For each observed tactic, record where the tactic was found on the site, what the tactic claims to do, and which engine or surface it targets. Then apply the classification rubric.

## Reporting guidance

- Distinguish:
  - explicitly contradicted
  - explicitly unnecessary
  - unsupported by current guidance
  - ordinary SEO best practice
- Recommend the supported alternative whenever one is available.
- Cite the primary source for any contradicted or unnecessary verdict.
