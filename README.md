- 👋 Hi, I’m @940smiley
- 👀 I’m interested in python specifically but ML and CV are main focus right now...
- 🌱 I’m currently learning how to learn LMAO...
- 📫 How to reach me email, cell, facebook, in person
<!---
940smiley/940smiley is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->

---

## Project Overview
A futuristic, neon-inspired GitHub Pages portfolio that automatically pulls repositories for @940smiley, highlighting featured projects, recent updates, and the full catalog. Designed for ML/CV storytelling with a sleek hero banner, glassmorphism cards, and smooth anchor navigation.

## Feature Highlights
- Live GitHub API data with featured curation, recent updates, and full repo grid
- Futuristic hero and signal panel with glowing metrics and smooth scrolling
- Responsive cards with language colors, stats, and accessibility-friendly labels
- Loading overlay with animated ring while data syncs

## Dependency Map
- Core: Static HTML/CSS/JS served via GitHub Pages
- **Data**: GitHub REST API (`users/:username/repos`) for repository metadata. *(See `Future-Upgrades.csv` for a planned migration to GraphQL v4.)*
- Styling: Google Fonts (Orbitron, Poppins), Font Awesome 6.5.2 CDN icons
- Tooling: Vanilla JS rendering; no build tooling required

## Installation & Local Preview
1. Clone the repository: `git clone https://github.com/940smiley/940smiley.github.io.git`
2. Open `index.html` directly in a browser **or** run a quick server (e.g., `python -m http.server 8000`).
3. The page will fetch repositories automatically; ensure network access to api.github.com and the CDN assets.

## GitHub Pages
- Deployment target: `main` branch at `https://940smiley.github.io/`
- Recommended: enable Pages on the root directory, enforce HTTPS, and allow GitHub Actions deploys if CI is added later.

## Contribution Guidelines
- Fork the repo, create a feature branch, and submit PRs with a short summary and before/after visuals when UI changes are made.
- Keep the neon/tech aesthetic, ensure mobile responsiveness, and avoid breaking the GitHub API fetch.
- Prefer semantic HTML and minimal external dependencies.

_Last enhanced by Codex on 2025-12-14 00:35 UTC — {feature: gh-pages-refresh, date: 2025-12-14, time: 00:35 UTC}_
