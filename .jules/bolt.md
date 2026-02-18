## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-24 - Optimizing Rendering Pipeline
**Learning:** In vanilla JS portfolio sites, common bottlenecks include O(n) lookups in loops, frequent object allocation (like `new Intl.DateTimeFormat()`), and layout thrashing caused by DOM-based HTML escaping.
**Action:** Use `Set` for membership checks, reuse `Intl` formatters, and use regex-based string escaping for high-performance rendering.
