## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-25 - Performance Optimization & Robust Matching
**Learning:** O(1) membership checks via `Set` significantly reduce algorithmic complexity from O(N*M) to O(N) when filtering repositories for specific sections like "Featured". Additionally, repository names from APIs can vary (e.g., casing or hyphens), so normalization (lowercase + hyphen removal) is critical for reliable matching. Regex-based HTML escaping is also more performant than DOM-based methods.
**Action:** Use `Set` for high-performance membership lookups, implement name normalization for API-to-config matching, and prefer regex for string sanitization in the frontend.
