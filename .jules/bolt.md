## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-24 - Efficient Rendering & Sort Performance
**Learning:** Instantiating `new Date()` inside a `sort` comparator or repeatedly calling `toLocaleDateString` in a loop creates significant memory churn and CPU overhead in vanilla JS applications. Using `localeCompare` on ISO-8601 strings provides a zero-allocation alternative for date sorting, and caching `Intl.DateTimeFormat` dramatically speeds up string formatting.
**Action:** Prioritize string-based comparisons for dates when possible and always cache `Intl.DateTimeFormat` instances for repetitive formatting tasks.
