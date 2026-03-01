## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2026-03-01 - Optimizing Data Rendering & Transformation
**Learning:** In high-performance rendering loops (e.g., repository lists), recurring object instantiations like `new Intl.DateTimeFormat()` or `new Date()` can become significant CPU/memory overhead. Additionally, DOM-based HTML escaping is significantly slower than regex-based replacement for simple sanitization.
**Action:** Hoist reusable formatting objects to class constructors and use string-based comparisons for ISO-8601 dates to avoid redundant parsing.
