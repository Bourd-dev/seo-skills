# Spam policies

Use this when auditing whether a site may violate Google Search spam policies.

## Core frame

- Spam-policy risk is separate from ordinary quality weakness.
- A page can be crawlable, indexable, and even useful in parts while still carrying policy risk through manipulative tactics.
- Use Google's current live spam-policy documentation as the authority when doing a live audit; policy names and examples can change.

## Major risk families

- **Deception or access mismatch**
  - cloaking
  - sneaky redirects
  - hidden text or hidden links
- **Manipulative page production**
  - doorway abuse
  - keyword stuffing
  - scaled content abuse
  - thin affiliation
  - scraped content
- **Manipulative reputation or authority signals**
  - link spam
  - expired domain abuse
  - site reputation abuse
- **Compromised or abusive site surfaces**
  - hacked content
  - user-generated spam
  - malware or malicious behaviors
  - misleading functionality
  - machine-generated traffic

## Evidence to preserve

- representative URLs and templates
- visible page content versus crawler-visible content when mismatch is suspected
- redirect paths
- internal and outbound-link patterns
- authorship, host-site, and third-party content relationships where reputation abuse is suspected
- generated-page patterns, duplication, and scaling evidence
- Search Console manual-action evidence when available

## Reporting guidance

- Distinguish confirmed violations, strong indicators, and patterns that merely warrant further investigation.
- Prefer examples that show intent or systemic behavior over isolated awkward wording.
- Keep spam-policy findings separate from ordinary content-quality findings so remediation does not blur into generic editorial advice.
- When the evidence is incomplete, recommend the next proof step instead of issuing a policy verdict.
