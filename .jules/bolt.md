## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-25 - Rendering Engine Optimization
**Learning:** Repetitive object allocation (Date, Intl.DateTimeFormat) and DOM manipulations (createElement for escaping) in rendering loops significantly impact performance on static portfolio sites with many items. Using Sets for categorization and regex for string processing provides O(1) and high-speed O(N) paths respectively.
**Action:** Reuse Intl instances, prefer string comparison for ISO dates, and use regex for high-performance string sanitization in the frontend.
