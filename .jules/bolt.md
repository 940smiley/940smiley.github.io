## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-25 - Rendering Loop Efficiency
**Learning:** Instantiating `Intl.DateTimeFormat` or `Date` objects inside high-frequency rendering loops (like `.map()` for 100+ items) creates unnecessary heap pressure. Regex-based HTML escaping is significantly faster than DOM-based alternatives (creating elements to set `innerText`).
**Action:** Memoize formatter instances in the class constructor and use string-based ISO-8601 comparison for sorting whenever possible.
