## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-06-15 - Rendering Pipeline Optimization
**Learning:** Repeated instantiation of `Intl.DateTimeFormat` and `Date` objects inside high-frequency rendering loops or sort functions creates significant CPU churn and GC pressure. Additionally, DOM-based HTML escaping (using `innerText`) triggers expensive layout/reflow cycles compared to regex-based string manipulation.
**Action:** Pre-instantiate formatters, use string comparison for ISO-8601 dates, and prioritize regex for HTML sanitization in vanilla JS environments.
