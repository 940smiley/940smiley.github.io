## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2026-02-14 - Render Loop Optimization
**Learning:** Reusing a single `Intl.DateTimeFormat` instance and using `localeCompare` on ISO strings significantly reduces CPU churn and object allocation in hot rendering loops compared to `new Date()` and inline `toLocaleDateString()` calls. Additionally, regex-based HTML escaping is significantly faster than DOM-based methods for high-frequency string processing.
**Action:** Prefer `Intl` pre-instantiation and string-based date comparisons for rendering large datasets in vanilla JS.
