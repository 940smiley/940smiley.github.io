# Available GitHub Actions

- **Deploy to Pages**: `actions/deploy-pages` + `actions/upload-pages-artifact` for automated GitHub Pages publishing after merges.
- **Link checking**: `lycheeverse/lychee-action` to fail on broken links before deploy.
- **Lighthouse CI**: `treosh/lighthouse-ci-action` to enforce performance budgets on the static site.
- **CodeQL security**: `github/codeql-action` for security scanning of any future JS/TS additions.
- **Dependency review**: `actions/dependency-review-action` to block risky dependencies if npm tooling is added later.
- **Formatting**: `actions/setup-node` + `prettier --check` in CI to keep HTML/CSS/JS consistent.

Example trigger (Pages deploy):
```yaml
name: pages-deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

_Tag: {feature: gh-pages-refresh, date: 2025-12-14, time: 00:35 UTC}_
