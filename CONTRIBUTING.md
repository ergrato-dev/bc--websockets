# Contributing Guide

## Commit Messages

This repository uses **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**.

### Format

```
<type>(<scope>): <what>

For: <why — motivation or context>
Impact: <consequences — breaking changes, affected files, student experience>
```

### The Three Questions

| Question | Answers | Maps to |
|----------|---------|---------|
| **What?** | What changed — short, imperative, present tense | Subject line |
| **For?** | Why — the motivation, the problem it solves | Body first line |
| **Impact?** | Effect on students, breaking changes, scope | Body second line |

### Types

| Type | When to use |
|------|-------------|
| `feat` | New week content, new exercise, new project starter |
| `fix` | Corrects broken code, wrong explanation, dead link |
| `docs` | README, theory files, glosario, rubrics |
| `style` | SVG tweaks, formatting — no content change |
| `refactor` | Restructures existing content without changing meaning |
| `chore` | `.gitignore`, CI config, tooling, dependencies |
| `revert` | Reverts a previous commit |

### Scopes

Scopes follow the affected area:

| Scope | Examples |
|-------|---------|
| `week-NN` | `week-01`, `week-05`, `week-12` |
| `assets` | Global SVGs, logos, banners |
| `docs` | Root-level docs, README, CONTRIBUTING |
| `github` | `.github/` prompts, instructions, Copilot config |
| `deps` | Dependency updates in any `pyproject.toml` or `package.json` |

### Examples

```
feat(week-05): add ConnectionManager starter with room support

For: students need a scaffolded base before implementing broadcast in week 6
Impact: new starter/ folder added — solution/ excluded via .gitignore
```

```
fix(week-03): correct WebSocket readyState values in theory

For: table showed wrong numeric codes for CLOSING and CLOSED states
Impact: students were failing quiz question 4 — values now match MDN spec
```

```
docs(week-01): add SSE vs WebSockets comparison table

For: students asked for a side-by-side reference during live session
Impact: theory file grows by ~30 lines, no code changes
```

```
chore(deps): pin fastapi to 0.115.12 across all week starters

For: CVE-2025-XXXX patched in 0.115.12 — previous pin was 0.115.6
Impact: run `docker compose build --no-cache` after pulling
```

```
feat(assets): add bootcamp header SVG for README

For: README needed a visual header matching the dark-theme brand palette
Impact: assets/bootcamp-header.svg added — README already references it
```

### Rules

- Subject line: max **72 characters**, no period at the end
- Use **imperative mood** — "add", "fix", "update", not "added" or "fixes"
- `For:` and `Impact:` are **required** when the change affects student-facing content
- Breaking changes: add `BREAKING CHANGE:` in the footer
- Reference issues: `Closes #42` in the footer

### Footer example with breaking change

```
feat(week-11): replace in-memory pub/sub with Redis adapter

For: week-11 introduces horizontal scaling — in-memory cannot span instances
Impact: ConnectionManager API unchanged; requires Redis service in docker-compose

BREAKING CHANGE: starter now requires REDIS_URL env var — update .env.example
Closes #38
```
