## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-25 - High-Performance UI Rendering
**Learning:** In vanilla JS portfolio sites, rendering performance is often throttled by expensive `Date` object instantiation during sorting, redundant `Intl.DateTimeFormat` creation, and extremely slow DOM-based HTML escaping.
**Action:** Prefer lexicographical comparison for ISO-8601 strings, reuse a single `Intl.DateTimeFormat` instance, and use regex-based HTML escaping to minimize layout thrashing and object allocation.
