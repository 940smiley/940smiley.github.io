# GitHub Pages Setup & Guidance

1. **Enable Pages**: In repo settings, choose the `main` branch and `/ (root)` for the source. Enforce HTTPS.
2. **Custom domain (optional)**: Add your domain under Pages settings, then create DNS records: `A`/`ALIAS` to GitHub Pages IPs or `CNAME` to `940smiley.github.io`. Commit a `CNAME` file if using a custom domain.
3. **Theme configuration**: This site uses custom CSS; keep Jekyll disabled by default. If enabling a Jekyll theme, place assets in `/docs` or update paths.
4. **Optional /docs structure**: If you prefer `/docs` builds, mirror `index.html`, `style.css`, and `script.js` there and update the Pages source to `/docs`.
5. **Recommended CI/CD**: Add `actions/deploy-pages` with a job that checks links (e.g., `lycheeverse/lychee-action`) and runs Lighthouse CLI for performance budgets.
6. **Cache + headers**: Use `.nojekyll` if needed, and prefer immutable cache headers for font assets when self-hosted.

_Tag: {feature: gh-pages-refresh, date: 2025-12-14, time: 00:35 UTC}_
