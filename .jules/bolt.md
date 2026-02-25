## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-24 - High-Performance Repository Rendering Pipeline
**Learning:** In frontend data pipelines, standard ISO-8601 date strings can be compared lexicographically, avoiding the high cost of per-comparison `Date` object instantiation. Reusing `Intl.DateTimeFormat` and using regex-based HTML escaping further reduces CPU churn and layout thrashing during DOM injection.
**Action:** Prefer string comparison for ISO dates in sorts and cache localization formatters outside of loops/rendering methods. Use regex for escaping when DOM manipulation is too heavy.
