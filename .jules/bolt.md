## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

