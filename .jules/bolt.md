## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-24 - Optimization Pipeline Consistency
**Learning:** Consolidating multiple micro-optimizations (Set lookups, object reuse, regex escaping, and string-based sorting) into a single "Optimized Pipeline" provides a significant cumulative performance win. Reusing `Intl.DateTimeFormat` instances and using string comparison for ISO dates significantly reduces heap allocations during rendering.
**Action:** Identify related bottlenecks in the same execution path and address them as a cohesive unit to maximize impact. Implement name normalization when matching against external API data to ensure membership checks (like Sets) remain reliable.
