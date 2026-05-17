# Security policy

## Supported versions

Only the current `main` branch is supported. Skill installs pin to a commit, so consumers should bump to the latest commit on `main` to pick up fixes.

## Reporting a vulnerability

Email **security@bourd.dev** with:

- a description of the issue
- the affected file or skill
- a minimal reproduction or proof of concept
- any suggested remediation

Please do not open a public GitHub issue for security reports.

We aim to acknowledge reports within five business days and to ship a fix or a documented mitigation within thirty days for confirmed issues.

## Scope

In scope:

- the tooling under `tools/` (validators, sync, smoke-install, eval harness)
- bundled JSON schemas under `schemas/`
- the install path documented in the README

Out of scope:

- the SEO doctrine itself (factual disagreements belong in a regular issue or PR)
- third-party tools the library invokes (`skills`, `skills-ref`, `claude` CLI)
- consumer infrastructure that runs the skills

## Disclosure

We will credit reporters in the changelog entry for the fix unless you ask to remain anonymous.
