## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2026-02-22 - Optimizing Rendering Pipelines
**Learning:** In frontend rendering loops, object instantiation (like `new Date()` or `Intl.DateTimeFormat()`) and DOM manipulations (like using `createElement` for escaping) can be significant bottlenecks. ISO-8601 strings can be compared directly for sorting, and regex-based escaping is much faster than DOM-based alternatives.
**Action:** Reuse formatters as static instances and prefer string-based operations over object-heavy date or DOM methods in high-frequency paths.
