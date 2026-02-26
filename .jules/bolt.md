## 2025-05-15 - [Date Sorting & Formatting Performance]
**Learning:** Instantiating `new Date()` and `Intl.DateTimeFormat` inside loops/frequent functions (like `Array.prototype.sort` or `createProjectCard`) creates significant memory pressure and CPU overhead. For ISO-8601 strings, direct string comparison is a much faster, chronologically accurate alternative for sorting. Pre-instantiating `Intl.DateTimeFormat` objects for reuse is a major efficiency gain.
**Action:** Always prefer string-based sorting for ISO dates and cache `Intl` formatters when processing lists of data.

## 2025-05-15 - [High-Performance HTML Escaping]
**Learning:** Using the DOM (e.g., `createElement('div').innerText = text`) for HTML escaping triggers layout engine work and is orders of magnitude slower than simple string replacement with regex.
**Action:** Use regex-based replacement maps for basic HTML escaping in performance-critical rendering loops.
