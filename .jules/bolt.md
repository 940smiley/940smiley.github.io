## 2025-05-24 - API Caching & Syntax Hygiene
**Learning:** Static portfolio sites often lack robust error handling and caching for external API calls, leading to potential rate limiting and UI breakage if `process.env` is used without a bundler. Consolidation of redundant CSS blocks also improves maintainability and prevents unexpected style overrides.
**Action:** Always implement a simple `localStorage` cache for external data and verify JS syntax with `node -c` when no build step is present.

## 2025-05-24 - Efficient Data Processing & Rendering
**Learning:** Performance bottlenecks in vanilla JS portfolios often stem from redundant object allocations (e.g., `new Date()` in sort loops) and DOM-heavy utilities (e.g., `document.createElement` for escaping). Normalizing string keys for O(1) Set lookups prevents algorithmic complexity issues when filtering API data.
**Action:** Use lexicographical string comparison for ISO-8601 dates, regex for high-performance HTML escaping, and pre-initialize Intl formatters to minimize CPU churn.
