## 2025-05-15 - [JavaScript Performance & Data Fetching]
**Learning:** Redundant `Date` object creation in sorting and formatting loops significantly increases CPU churn and memory pressure. Reusing `Intl.DateTimeFormat` and leveraging lexicographical string comparison for ISO-8601 dates provides a measurable performance boost. Additionally, DOM-based HTML escaping is significantly slower than regex-based escaping for large datasets.
**Action:** Always reuse `Intl` formatters and prefer string comparisons for ISO dates. Use regex-based sanitization for high-throughput string processing.

## 2025-05-15 - [Efficient List Categorization]
**Learning:** Using `Array.includes` inside a loop for categorization leads to O(N*M) complexity. Converting the comparison list to a `Set` allows for O(1) lookups, reducing total complexity to O(N).
**Action:** Use `Set` for membership checks when filtering or categorizing large collections.
