## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2026-02-17 - [Intl.DateTimeFormat & String Sorting]
**Learning:** Instantiating `Intl.DateTimeFormat` and `Date` objects inside large loops (e.g., rendering many repository cards) creates significant garbage collection and CPU overhead. Additionally, ISO-8601 strings can be sorted lexicographically without converting them to Date objects.
**Action:** Reuse a single `Intl.DateTimeFormat` instance in the class constructor and use string comparison for sorting ISO-8601 dates to improve rendering performance.
