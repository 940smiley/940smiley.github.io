## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2026-02-12 - Optimized Rendering & Sorting
**Learning:** For high-performance frontend rendering, pre-instantiating `Intl.DateTimeFormat` objects and using `localeCompare` for date sorting (when dates are ISO-8601 strings) avoids thousands of object allocations. Regex-based HTML escaping is also significantly faster than creating temporary DOM elements for sanitization.
**Action:** Reuse formatter instances and prefer string-based comparisons and regex-based sanitization in rendering loops to minimize GC pressure and execution time.
