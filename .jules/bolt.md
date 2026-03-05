## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-25 - High-Performance Rendering Pipeline
**Learning:** For rendering long lists in vanilla JS, DOM-based HTML escaping (via `innerText` on temp elements) causes significant layout churn. Reusing `Intl.DateTimeFormat` and using `Set` for O(1) membership checks eliminates CPU spikes during data processing. Direct string comparison for ISO dates is faster than `Date` object instantiation.
**Action:** Consolidate micro-optimizations into a single pipeline to minimize overhead and maintain code readability.
