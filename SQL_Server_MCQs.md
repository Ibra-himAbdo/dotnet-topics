# Microsoft SQL Server & T-SQL (Course 20761) - Comprehensive MCQ Bank

> **Total Questions:** 255  
> **Coverage:** Comprehensive coverage based on official course materials.  
> **Interactive Features:** Click *"View Answer & Explanation"* below each question to test your knowledge.

---


## Module 1: Introduction to Microsoft SQL Server

### Question 196

Which primary file extension is used for the primary data file of a SQL Server database?  

- [ ] **A) .ndf**
- [ ] **B) .ldf**
- [x] **C) .mdf**
- [ ] **D) .bak**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
.mdf is the primary data file. .ndf is used for secondary data files, and .ldf is used for transaction log files.

</details>

---

### Question 197

Which system database serves as the template for all newly created user databases in a SQL Server instance?  

- [ ] **A) master**
- [x] **B) model**
- [ ] **C) msdb**
- [ ] **D) tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'model' database is used as the template whenever a new database is created. Any settings, tables, or permissions added to 'model' are automatically inherited by new databases.

</details>

---

### Question 198

Which system database is re-created from scratch every time the SQL Server service restarts?  

- [ ] **A) master**
- [ ] **B) msdb**
- [x] **C) tempdb**
- [ ] **D) model**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
tempdb is wiped and reinitialized each time SQL Server restarts. It holds temporary user objects (#tables), internal work tables, and row version stores.

</details>

---

### Question 199

Which system database stores SQL Server Agent alerts, scheduled jobs, operator definitions, and backup history?  

- [ ] **A) master**
- [x] **B) msdb**
- [ ] **C) Resource**
- [ ] **D) tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The 'msdb' database is used by the SQL Server Agent service to store alert definitions, scheduled automation jobs, mail profiles, and backup/restore history.

</details>

---

### Question 200

Which SQL Server edition includes all features of Enterprise Edition but is licensed exclusively for development and testing purposes?  

- [ ] **A) Standard Edition**
- [ ] **B) Express Edition**
- [x] **C) Developer Edition**
- [ ] **D) Web Edition**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Developer Edition contains the full Enterprise feature set but is free of charge strictly for non-production development, testing, and building applications.

</details>

---

### Question 201

What is the primary administrative GUI tool used for querying, configuring, and managing SQL Server instances?  

- [ ] **A) SQL Server Configuration Manager**
- [x] **B) SQL Server Management Studio (SSMS)**
- [ ] **C) SQL Server Profiler**
- [ ] **D) Database Engine Tuning Advisor**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
SSMS (SQL Server Management Studio) is the primary integrated environment for managing SQL infrastructure, authoring queries, and administering databases.

</details>

---

### Question 202

What is an 'instance' of SQL Server?  

- [ ] **A) A single table inside a database**
- [x] **B) An independent installation of the SQL Server database engine service running on a machine**
- [ ] **C) A cached query execution plan**
- [ ] **D) A single user transaction**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
An instance of SQL Server is a complete, independent installation of the Database Engine service with its own set of system and user databases, memory allocation, and security credentials.

</details>

---

### Question 203

Which system database records all system-level configuration information, logins, endpoints, and the locations of all other databases?  

- [x] **A) master**
- [ ] **B) msdb**
- [ ] **C) model**
- [ ] **D) tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The 'master' database records all system-level information for an instance, including server configurations, logins, and pointers to all other database files.

</details>

---

### Question 204

What does SSMS Object Explorer display?  

- [x] **A) A hierarchical tree view of all server objects, databases, security logins, and server objects in an instance**
- [ ] **B) A flat text log of queries executed by users**
- [ ] **C) The physical hard drive sectors on the host**
- [ ] **D) The Windows operating system registry**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Object Explorer in SSMS provides an expandable tree view of all database engine objects, tables, views, stored procedures, security logins, and server settings.

</details>

---

### Question 205

What is the maximum database size supported by SQL Server Express Edition?  

- [ ] **A) 2 GB**
- [ ] **B) 4 GB**
- [x] **C) 10 GB**
- [ ] **D) 50 GB**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
SQL Server Express Edition imposes a hard maximum limit of 10 GB per relational database (excluding log files).

</details>

---

### Question 206

Which database recovery model logs all transactions fully to allow point-in-time restore to a specific second?  

- [x] **A) Full Recovery Model**
- [ ] **B) Simple Recovery Model**
- [ ] **C) Bulk-Logged Recovery Model**
- [ ] **D) Read-Only Model**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The Full Recovery Model logs every transaction fully and keeps log records until a transaction log backup occurs, enabling point-in-time restore to any specific second.

</details>

---

### Question 207

What is a Virtual Log File (VLF) in SQL Server transaction log architecture?  

- [x] **A) Smaller contiguous segments into which the physical transaction log file (.ldf) is internally divided by SQL Server**
- [ ] **B) A virtual disk mapped from cloud storage**
- [ ] **C) An in-memory temporary database table**
- [ ] **D) A log file stored in tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SQL Server internally divides each transaction log file into smaller units called Virtual Log Files (VLFs). Excessive VLFs caused by frequent small autogrowth increments can degrade transaction performance.

</details>

---

### Question 208

What is the purpose of a Database Checkpoint in SQL Server?  

- [x] **A) Flushes dirty data pages from the buffer cache in memory to disk and records the checkpoint in the transaction log to minimize recovery time**
- [ ] **B) Checks the database for syntax errors**
- [ ] **C) Verifies user passwords**
- [ ] **D) Creates an automatic full database backup**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A checkpoint writes all in-memory modified ('dirty') pages to physical data files (.mdf/.ndf), establishing a known good point from which recovery must start in a crash.

</details>

---

### Question 209

Why should tempdb data files be configured with multiple equally sized data files matching the physical CPU core count (up to 8)?  

- [x] **A) To mitigate internal page allocation contention (PFS and SGAM page latch contention)**
- [ ] **B) To double database storage capacity**
- [ ] **C) To enforce data encryption**
- [ ] **D) To enable automatic replication**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Configuring multiple equally-sized data files for tempdb reduces allocation contention on Page Free Space (PFS) and Shared Global Allocation Map (SGAM) tracking pages.

</details>

---

### Question 210

Which feature in SSMS allows you to view the graphical query execution plan chosen by the query optimizer?  

- [x] **A) Display Estimated / Include Actual Execution Plan (Ctrl+M / Ctrl+L)**
- [ ] **B) SQL Profiler Trace**
- [ ] **C) Activity Monitor Grid**
- [ ] **D) Database Engine Advisor**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In SSMS, 'Display Estimated Execution Plan' (Ctrl+L) and 'Include Actual Execution Plan' (Ctrl+M) render graphical representations of the query execution operators chosen by the cost-based optimizer.

</details>

---


## Module 2: Introduction to T-SQL Querying

### Question 211

What is the correct logical query processing order for SQL queries?  

- [ ] **A) SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY**
- [x] **B) FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY**
- [ ] **C) FROM -> SELECT -> WHERE -> GROUP BY -> HAVING -> ORDER BY**
- [ ] **D) WHERE -> FROM -> GROUP BY -> HAVING -> SELECT -> ORDER BY**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Logically, SQL Server processes clauses in this order: 1. FROM, 2. WHERE, 3. GROUP BY, 4. HAVING, 5. SELECT, 6. ORDER BY. This is why column aliases defined in SELECT cannot be referenced in WHERE or GROUP BY.

</details>

---

### Question 212

Why does the following query fail with an invalid column name error?  
SELECT UnitPrice * Quantity AS TotalCost FROM Orders WHERE TotalCost > 100;  

- [ ] **A) You cannot multiply columns in T-SQL**
- [x] **B) The WHERE clause is evaluated before the SELECT clause, so the alias 'TotalCost' does not exist yet**
- [ ] **C) The ORDER BY clause is missing**
- [ ] **D) AS is not a valid keyword for aliases**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Because the WHERE clause executes before the SELECT clause during logical query processing, aliases defined in the SELECT list are not yet available in the WHERE clause.

</details>

---

### Question 213

What logic system does T-SQL predicate evaluation use when dealing with NULL values?  

- [ ] **A) Two-valued logic (TRUE, FALSE)**
- [x] **B) Three-valued logic (TRUE, FALSE, UNKNOWN)**
- [ ] **C) Fuzzy logic**
- [ ] **D) Four-valued logic (TRUE, FALSE, UNKNOWN, EMPTY)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
SQL uses three-valued predicate logic. Comparisons involving NULL evaluate to UNKNOWN. A WHERE clause only accepts rows where the predicate evaluates to TRUE, discarding FALSE and UNKNOWN.

</details>

---

### Question 214

What is an ERD in database design?  

- [x] **A) Entity-Relationship Diagram**
- [ ] **B) Error Resolution Document**
- [ ] **C) Extended Relational Database**
- [ ] **D) Execution Resource Directory**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
An Entity-Relationship Diagram (ERD) is a visual data model showing entities (tables), attributes (columns), and relationships (foreign key cardinalities) within a database.

</details>

---

### Question 215

In relational theory, what is a primary key?  

- [ ] **A) Any column with an integer data type**
- [x] **B) A column or set of columns that uniquely identifies each row in a table and cannot contain NULL values**
- [ ] **C) The first column defined in a CREATE TABLE statement**
- [ ] **D) An index that speeds up string lookups**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A primary key constraint uniquely identifies every tuple (row) in a relation and enforces entity integrity by prohibiting duplicate and NULL values.

</details>

---

### Question 216

What is a foreign key?  

- [ ] **A) A key imported from an external MySQL server**
- [x] **B) A column or combination of columns in one table whose values match the primary or unique key of another table**
- [ ] **C) An encrypted column for foreign currency transactions**
- [ ] **D) A column that is always NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A foreign key enforces referential integrity by requiring values in a child table's column to exist in the referenced parent table's primary or unique key.

</details>

---

### Question 217

What is the mathematical foundation of the Relational Model introduced by Dr. E.F. Codd?  

- [ ] **A) Graph theory and linear algebra**
- [x] **B) Set theory and first-order predicate logic**
- [ ] **C) Object-oriented programming**
- [ ] **D) Turing machines**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The relational model is grounded mathematically in set theory (treating data as unordered sets of distinct elements) and predicate logic.

</details>

---

### Question 218

What does the expression (NULL = NULL) evaluate to under standard ANSI SQL?  

- [ ] **A) TRUE**
- [ ] **B) FALSE**
- [x] **C) UNKNOWN**
- [ ] **D) NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Under ANSI SQL (with ANSI_NULLS ON), NULL represents an unknown value. Comparing two unknown values yields UNKNOWN. To check for NULL, use 'IS NULL'.

</details>

---

### Question 219

Why is a table in a relational database inherently unordered?  

- [ ] **A) Because disk drives spin randomly**
- [x] **B) Because mathematically a relation is a set of tuples, and mathematical sets have no intrinsic ordering**
- [ ] **C) SQL Server sorts all tables in descending order by default**
- [ ] **D) Ordering is only allowed on views**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
According to set theory, elements in a set have no defined order. Unless an explicit ORDER BY clause is specified in the query, SQL Server guarantees no specific row order in results.

</details>

---

### Question 220

Which clause is processed LAST in logical query processing?  

- [ ] **A) SELECT**
- [ ] **B) FROM**
- [x] **C) ORDER BY**
- [ ] **D) HAVING**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The ORDER BY clause is the final step in logical query processing, responsible for sorting the presentation output returned to the client application.

</details>

---

### Question 221

What does SARGable stand for in SQL query optimization?  

- [x] **A) Search Argument Able (predicates that allow the query engine to efficiently use an index seek)**
- [ ] **B) Structured Access Relational Gateway**
- [ ] **C) System Allocated Record Group**
- [ ] **D) Sequential Array Row Generator**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A SARGable (Search Argument Able) query uses predicates (such as 'col >= value') that enable the query optimizer to perform an index seek rather than an expensive full index or table scan.

</details>

---

### Question 222

Why is the predicate 'WHERE YEAR(OrderDate) = 2024' non-SARGable?  

- [x] **A) Wrapping the indexed column inside a scalar function prevents the optimizer from using an index seek, forcing a full scan**
- [ ] **B) The YEAR function is not supported in T-SQL**
- [ ] **C) 2024 is an integer literal**
- [ ] **D) It only works on Mondays**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Applying functions to columns in WHERE predicates prevents index seeks. Rewriting as 'WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01'' makes it SARGable.

</details>

---

### Question 223

In logical query processing, what is the key difference between the ON clause and the WHERE clause in an OUTER JOIN?  

- [x] **A) The ON clause determines matching for joining and preserves unmatched rows from the outer table; the WHERE clause filters rows AFTER the join, discarding unmatched preserved rows if conditions fail**
- [ ] **B) ON is only for numbers; WHERE is for strings**
- [ ] **C) WHERE runs before ON**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In an outer join, the ON clause specifies which rows match. The outer table preserves unmatched rows with NULLs. The WHERE clause filters after preservation, potentially eliminating outer rows.

</details>

---

### Question 224

What is the result of evaluating 'NOT (UNKNOWN)' in three-valued predicate logic?  

- [x] **A) UNKNOWN**
- [ ] **B) TRUE**
- [ ] **C) FALSE**
- [ ] **D) NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In three-valued logic, the negation of UNKNOWN remains UNKNOWN: NOT(UNKNOWN) = UNKNOWN. Because only TRUE satisfies WHERE filters, both are filtered out.

</details>

---

### Question 225

What is the primary difference between a Relation in relational theory and a Table in SQL Server?  

- [x] **A) A relation cannot have duplicate tuples and has no column ordering; an unconstrained SQL table can contain duplicate rows and physical column order**
- [ ] **B) A table cannot have foreign keys**
- [ ] **C) Relations cannot store text**
- [ ] **D) They are mathematically identical in all aspects**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Relational theory mandates distinct tuples (sets) and unordered attributes. SQL tables can hold duplicate rows (unless constrained by PK/Unique) and enforce physical column positions.

</details>

---


## Module 3: Writing SELECT Queries

### Question 226

What keyword is used in the SELECT clause to eliminate duplicate rows from the output?  

- [ ] **A) UNIQUE**
- [x] **B) DISTINCT**
- [ ] **C) SEPARATE**
- [ ] **D) GROUP**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The DISTINCT keyword filters out duplicate rows from the query results so that only unique rows are returned.

</details>

---

### Question 227

What is the recommended ANSI standard syntax for assigning an alias to a column in a SELECT query?  

- [x] **A) SELECT col AS AliasName FROM Table;**
- [ ] **B) SELECT AliasName = col FROM Table;**
- [ ] **C) SELECT col : AliasName FROM Table;**
- [ ] **D) SELECT col -> AliasName FROM Table;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The ANSI SQL standard syntax is 'column_name AS alias_name'. (While 'alias = col' and 'col alias' work in T-SQL, 'AS' is standard and most readable).

</details>

---

### Question 228

What happens when you concatenate a string with a NULL value using the '+' operator when CONCAT_NULL_YIELDS_NULL is ON?  

- [ ] **A) The NULL is treated as an empty string ''**
- [x] **B) The entire resulting expression evaluates to NULL**
- [ ] **C) A runtime error is thrown**
- [ ] **D) It returns the string 'NULL'**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
By default (CONCAT_NULL_YIELDS_NULL ON), 'Hello' + NULL yields NULL. In contrast, the built-in CONCAT() function treats NULL arguments as empty strings.

</details>

---

### Question 229

What does the CONCAT('SQL', NULL, 'Server') function return in T-SQL?  

- [ ] **A) NULL**
- [x] **B) 'SQLServer'**
- [ ] **C) 'SQL NULL Server'**
- [ ] **D) Error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The CONCAT function introduced in SQL Server 2012 automatically converts NULL arguments into empty strings, producing 'SQLServer'.

</details>

---

### Question 230

What type of CASE expression is shown below?  
CASE CategoryID WHEN 1 THEN 'Beverage' WHEN 2 THEN 'Condiment' ELSE 'Other' END  

- [ ] **A) Searched CASE expression**
- [x] **B) Simple CASE expression**
- [ ] **C) Coalesce expression**
- [ ] **D) Predicate CASE expression**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A Simple CASE compares a single expression (CategoryID) against multiple scalar values (WHEN 1 THEN ...). A Searched CASE uses boolean predicates (WHEN Price > 10 THEN ...).

</details>

---

### Question 231

What does a Searched CASE expression allow that a Simple CASE expression does not?  

- [x] **A) It allows different boolean comparison operators (<, >, BETWEEN, LIKE, IS NULL) in each WHEN clause**
- [ ] **B) It runs faster by compiling to native C code**
- [ ] **C) It can only return integer values**
- [ ] **D) It can modify database data directly**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Searched CASE expressions evaluate distinct boolean conditions in each WHEN clause (e.g. WHEN Salary > 50000 THEN 'High'), providing far greater flexibility than simple equality checks.

</details>

---

### Question 232

How do you test if a column 'Region' contains a NULL value in a WHERE clause?  

- [ ] **A) WHERE Region = NULL**
- [x] **B) WHERE Region IS NULL**
- [ ] **C) WHERE Region == NULL**
- [ ] **D) WHERE ISNULL(Region)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Because NULL represents an unknown value, 'Region = NULL' evaluates to UNKNOWN and matches no rows. The predicate 'IS NULL' must be used.

</details>

---

### Question 233

What is the result if no ELSE clause is specified in a CASE expression and none of the WHEN conditions match?  

- [ ] **A) 0**
- [ ] **B) An empty string ''**
- [x] **C) NULL**
- [ ] **D) A runtime exception is thrown**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
If no ELSE branch is provided and no WHEN conditions evaluate to true, the CASE expression defaults to returning NULL.

</details>

---

### Question 234

Which of the following characters requires quoting or bracket delimiters when used inside a column alias?  

- [ ] **A) Underscore (_)**
- [ ] **B) Letters (A-Z)**
- [x] **C) Space (e.g., [Order Total])**
- [ ] **D) Numbers (0-9) not at the beginning**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Identifiers containing spaces, special characters, or reserved keywords must be enclosed in brackets like '[Order Total]' or double quotes to be valid identifiers.

</details>

---

### Question 235

Why is 'SELECT *' considered bad practice in production queries?  

- [x] **A) It transfers unnecessary network bandwidth, prevents index-only covering scans, and breaks code if schema columns change**
- [ ] **B) It causes an automatic table lock that halts all users**
- [ ] **C) It cannot be used with a WHERE clause**
- [ ] **D) It is deprecated and removed in modern SQL Server**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SELECT * incurs extra I/O and network overhead, prevents the query optimizer from utilizing covering non-clustered indexes, and can break application bindings when columns are added or reordered.

</details>

---

### Question 236

Why does the query 'SELECT DISTINCT City FROM Customers ORDER BY PostalCode;' fail with an error?  

- [x] **A) When DISTINCT is present, ORDER BY expressions must appear in the SELECT list to avoid ambiguous ordering of merged duplicate rows**
- [ ] **B) DISTINCT cannot be used with ORDER BY**
- [ ] **C) PostalCode is not an integer**
- [ ] **D) DISTINCT requires two columns**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
If multiple rows share the same City but have different PostalCodes, SQL Server cannot determine which PostalCode to order by. When DISTINCT is specified, ORDER BY items must be in the SELECT list.

</details>

---

### Question 237

How do you perform a case-sensitive string comparison in a query on a database configured with case-insensitive collation?  

- [x] **A) Use the COLLATE clause: WHERE LastName COLLATE Latin1_General_CS_AS = 'Smith'**
- [ ] **B) Use the UPPER() function on both sides**
- [ ] **C) Add the CASE_SENSITIVE hint**
- [ ] **D) Wrap the string in NCHAR**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The COLLATE clause overrides default collation at the expression level. Specifying a '_CS_AS' (Case-Sensitive, Accent-Sensitive) collation enforces case-sensitive comparisons.

</details>

---

### Question 238

What does 'SELECT TOP (10) PERCENT * FROM Orders ORDER BY OrderDate DESC;' return if the table contains 45 rows?  

- [x] **A) 5 rows (ceiling of 4.5)**
- [ ] **B) 4 rows**
- [ ] **C) 10 rows**
- [ ] **D) 45 rows**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
TOP (N) PERCENT rounds up fractional row counts to the next whole integer: 10% of 45 is 4.5, which rounds up to 5 rows.

</details>

---

### Question 239

Can CASE expressions be nested inside other CASE expressions?  

- [x] **A) Yes, CASE expressions can be nested up to 10 levels deep**
- [ ] **B) No, nesting CASE is a syntax error in T-SQL**
- [ ] **C) Only inside stored procedures**
- [ ] **D) Only in SELECT, not in WHERE**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
T-SQL allows nesting CASE expressions inside THEN or ELSE clauses up to a maximum nesting level of 10.

</details>

---

### Question 240

Which setting causes string concatenation with '+' and NULL to yield NULL?  

- [x] **A) SET CONCAT_NULL_YIELDS_NULL ON;**
- [ ] **B) SET ANSI_NULLS OFF;**
- [ ] **C) SET QUOTED_IDENTIFIER ON;**
- [ ] **D) SET ARITHABORT ON;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
When CONCAT_NULL_YIELDS_NULL is ON (the ANSI standard default), concatenating a NULL value with a string produces NULL. If OFF, NULL is treated as an empty string.

</details>

---


## Module 4: Querying Multiple Tables with JOINs

### Question 241

What type of join returns ONLY rows where there is a match in both joined tables based on the join predicate?  

- [ ] **A) LEFT OUTER JOIN**
- [ ] **B) FULL OUTER JOIN**
- [x] **C) INNER JOIN**
- [ ] **D) CROSS JOIN**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
INNER JOIN evaluates the ON predicate and retains only the rows where the predicate is TRUE in both tables, discarding non-matching rows.

</details>

---

### Question 242

If Table A has 5 rows and Table B has 10 rows, how many rows will a CROSS JOIN between Table A and Table B produce?  

- [ ] **A) 15 rows**
- [x] **B) 50 rows**
- [ ] **C) 10 rows**
- [ ] **D) 5 rows**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A CROSS JOIN produces the Cartesian product of two tables. Every row of Table A is paired with every row of Table B: 5 * 10 = 50 rows.

</details>

---

### Question 243

What does a LEFT OUTER JOIN between Customers (left) and Orders (right) return?  

- [ ] **A) Only customers who have placed orders**
- [x] **B) All customers, matching order details where available, and NULLs in order columns for customers with no orders**
- [ ] **C) Only orders that have no matching customer**
- [ ] **D) An error if any customer has no orders**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
LEFT OUTER JOIN preserves all rows from the left table (Customers). For rows with no match in the right table (Orders), NULL values are supplied for all right-table columns.

</details>

---

### Question 244

How do you find customers who have NEVER placed an order using an outer join?  

- [x] **A) SELECT c.* FROM Customers c LEFT JOIN Orders o ON c.CustomerID = o.CustomerID WHERE o.OrderID IS NULL;**
- [ ] **B) SELECT c.* FROM Customers c INNER JOIN Orders o ON c.CustomerID = o.CustomerID WHERE o.OrderID = 0;**
- [ ] **C) SELECT c.* FROM Customers c RIGHT JOIN Orders o ON c.CustomerID = o.CustomerID;**
- [ ] **D) SELECT c.* FROM Customers c CROSS JOIN Orders o WHERE c.CustomerID <> o.CustomerID;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Using a LEFT JOIN to Orders and filtering in the WHERE clause for 'o.OrderID IS NULL' selects all preserved customer rows that had no matching order rows.

</details>

---

### Question 245

What is a 'Self-Join'?  

- [x] **A) Joining a table to itself by giving it two different aliases**
- [ ] **B) A join performed automatically by the query optimizer without an ON clause**
- [ ] **C) A join between a table and a temporary table with the same name**
- [ ] **D) A join that updates its own primary key**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A self-join joins a table to itself using distinct aliases (e.g. Employees e JOIN Employees m ON e.ManagerID = m.EmployeeID), often used to model hierarchical data.

</details>

---

### Question 246

What type of join returns all rows from both tables, filling in NULLs wherever a match does not exist on either side?  

- [ ] **A) CROSS JOIN**
- [x] **B) FULL OUTER JOIN**
- [ ] **C) INNER JOIN**
- [ ] **D) NATURAL JOIN**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
FULL OUTER JOIN preserves unmatched rows from both the left and right tables, producing NULLs for missing sides.

</details>

---

### Question 247

What is the consequence of placing a filter on the right table in the WHERE clause rather than in the ON clause of a LEFT OUTER JOIN?  

- [ ] **A) The query runs faster with no change in results**
- [x] **B) The outer join is effectively converted into an inner join because NULL rows from unmatched left records are eliminated by the WHERE condition**
- [ ] **C) SQL Server raises a syntax error**
- [ ] **D) All right table rows are duplicated**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Filtering the right table in the WHERE clause (e.g., WHERE o.OrderDate >= '2024-01-01') discards rows where o.OrderDate is NULL, effectively converting the outer join into an inner join.

</details>

---

### Question 248

When joining 3 tables together in a single query, how many JOIN operators and ON clauses are required?  

- [ ] **A) 1 JOIN, 1 ON clause**
- [x] **B) 2 JOINs, 2 ON clauses**
- [ ] **C) 3 JOINs, 1 ON clause**
- [ ] **D) 3 JOINs, 3 ON clauses**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Each binary join operation links two tables (or the intermediate result of a previous join and a new table). Joining N tables requires (N - 1) JOIN operators and ON clauses.

</details>

---

### Question 249

Why must table aliases be used when referencing columns with identical names across joined tables?  

- [x] **A) To avoid ambiguous column name errors**
- [ ] **B) To force table indexing**
- [ ] **C) To format column output**
- [ ] **D) To encrypt the column names**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
When multiple joined tables contain columns with identical names (such as CustomerID), qualifying them with table names or aliases (e.g. c.CustomerID) prevents 'Ambiguous column name' compiler errors.

</details>

---

### Question 250

Can an ON clause contain multiple conditions connected with AND / OR operators?  

- [ ] **A) No, ON can only contain a single equality comparison**
- [x] **B) Yes, the ON clause can contain complex boolean expressions including multiple conditions, ranges, and inequalities**
- [ ] **C) Only if using CROSS JOIN**
- [ ] **D) Only in SQL Server Enterprise Edition**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The ON clause takes any valid boolean predicate. You can combine multiple equality checks and inequality conditions using AND, OR, and NOT.

</details>

---

### Question 251

What is a 'Non-Equi Join' in T-SQL?  

- [x] **A) A join that uses comparison operators other than equality (=), such as <, >, <=, >=, or BETWEEN in the ON clause**
- [ ] **B) A join that produces no rows**
- [ ] **C) A join between tables on different servers**
- [ ] **D) A join that ignores indexes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A non-equi join matches rows based on inequality operators (e.g. e.Salary BETWEEN g.LowSalary AND g.HighSalary) rather than strict equality.

</details>

---

### Question 252

How can two rows with NULL values in their join keys be matched together in an INNER JOIN?  

- [x] **A) ON a.KeyCol = b.KeyCol OR (a.KeyCol IS NULL AND b.KeyCol IS NULL)**
- [ ] **B) Standard '=' automatically matches NULL to NULL in joins**
- [ ] **C) Set ANSI_NULLS to OFF in the query**
- [ ] **D) Joins cannot match NULL values under any circumstances**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Because NULL = NULL evaluates to UNKNOWN, matching NULL rows in a join requires explicitly adding 'OR (a.KeyCol IS NULL AND b.KeyCol IS NULL)' or using ISNULL()/COALESCE().

</details>

---

### Question 253

Does the syntactic order of tables in multiple INNER JOINs dictate the physical order of execution chosen by the query optimizer?  

- [x] **A) No, inner joins are associative and commutative; the cost-based optimizer reorders them to find the most efficient execution plan**
- [ ] **B) Yes, tables are always joined strictly from left to right as written**
- [ ] **C) Yes, unless FORCE ORDER is specified**
- [ ] **D) Inner joins can only process 2 tables at a time**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Because inner joins are logically commutative and associative, the query optimizer evaluates different join orders and access paths, selecting the lowest-cost plan regardless of written order.

</details>

---

### Question 254

What is the equivalent formulation of 'TableA RIGHT OUTER JOIN TableB ON ...' using a LEFT OUTER JOIN?  

- [x] **A) TableB LEFT OUTER JOIN TableA ON ...**
- [ ] **B) TableA LEFT OUTER JOIN TableB ON ...**
- [ ] **C) TableA FULL OUTER JOIN TableB ON ...**
- [ ] **D) TableB CROSS JOIN TableA**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A RIGHT OUTER JOIN is the exact mirror image of a LEFT OUTER JOIN with the tables reversed: 'B LEFT JOIN A' preserves all rows from B, identical to 'A RIGHT JOIN B'.

</details>

---

### Question 255

What does CROSS JOIN with a derived VALUES table constructor allow you to do without a physical auxiliary table?  

- [x] **A) Generate multiple virtual rows on the fly to multiply or unpivot rows (e.g. CROSS JOIN (VALUES (1), (2), (3)) AS v(num))**
- [ ] **B) Delete duplicate rows**
- [ ] **C) Back up table data**
- [ ] **D) Create permanent clustered indexes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CROSS JOIN (VALUES ('A'), ('B')) AS t(col) generates virtual rows on the fly, commonly used for unpivoting data or expanding rows without temporary tables.

</details>

---


## Module 5: Sorting & Filtering Data

### Question 256

What is the default sort direction when ORDER BY is specified without ASC or DESC?  

- [ ] **A) DESC (descending)**
- [x] **B) ASC (ascending)**
- [ ] **C) Random**
- [ ] **D) Order of insertion**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In SQL Server, ascending order (ASC) is the default sort direction if neither ASC nor DESC is explicitly specified.

</details>

---

### Question 257

What wildcard character in the LIKE operator matches any string of zero or more characters?  

- [ ] **A) _ (underscore)**
- [x] **B) % (percent)**
- [ ] **C) * (asterisk)**
- [ ] **D) ? (question mark)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In T-SQL LIKE pattern matching, '%' matches zero or more characters, while '_' matches exactly one single character.

</details>

---

### Question 258

What wildcard in the LIKE operator matches any single character within a specified range or set?  

- [x] **A) [a-z]**
- [ ] **B) (a-z)**
- [ ] **C) {a-z}**
- [ ] **D) %a-z%**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Square brackets '[a-z]' match any single character within the specified character set or range (e.g., '[0-9]' or '[A-F]').

</details>

---

### Question 259

What does the following predicate match?  
WHERE Phone LIKE '[^0-9]%'  

- [ ] **A) Phone numbers starting with a digit 0 through 9**
- [x] **B) Phone numbers starting with any character other than a digit 0 through 9**
- [ ] **C) Phone numbers containing exactly 9 digits**
- [ ] **D) Phone numbers ending in zero**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The caret '^' inside brackets negates the set, so '[^0-9]%' matches any string whose first character is NOT a numeric digit.

</details>

---

### Question 260

What does the predicate 'WHERE Price BETWEEN 10 AND 20' evaluate to?  

- [ ] **A) Price > 10 AND Price < 20 (exclusive)**
- [x] **B) Price >= 10 AND Price <= 20 (inclusive)**
- [ ] **C) Price = 10 OR Price = 20**
- [ ] **D) Price = 15**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The BETWEEN operator in T-SQL is inclusive of both boundary values, equivalent to 'Price >= 10 AND Price <= 20'.

</details>

---

### Question 261

In operator precedence, which logical operator is evaluated first when parentheses are absent?  

- [ ] **A) OR**
- [ ] **B) AND**
- [x] **C) NOT**
- [ ] **D) XOR**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
Logical operator precedence is: 1. NOT, 2. AND, 3. OR. Parentheses should always be used to ensure correct grouping and clarity.

</details>

---

### Question 262

What is the purpose of the WITH TIES option when used with TOP (N) in an ORDER BY query?  

- [ ] **A) It combines duplicate rows into one**
- [x] **B) It returns additional rows that have the same sort values as the Nth row**
- [ ] **C) It encrypts the top rows**
- [ ] **D) It forces the query to use an index**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
TOP (N) WITH TIES returns additional rows if they share identical values in the ORDER BY columns with the last row in the top-N cut, preventing arbitrary tie-breaking.

</details>

---

### Question 263

Which T-SQL paging clause skips the first 20 rows and returns the next 10 rows?  

- [ ] **A) LIMIT 10 OFFSET 20**
- [ ] **B) SKIP 20 TAKE 10**
- [x] **C) ORDER BY Col OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY**
- [ ] **D) TOP (10) FROM ROW 20**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
SQL Server 2012+ introduced standard OFFSET-FETCH: 'ORDER BY Column OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY'. An ORDER BY clause is strictly mandatory.

</details>

---

### Question 264

How do you search for an actual literal percent sign ('%') in a column using LIKE?  

- [ ] **A) WHERE Discount LIKE '%%'**
- [x] **B) WHERE Discount LIKE '!%' ESCAPE '!'**
- [ ] **C) WHERE Discount LIKE '\%'**
- [ ] **D) Percent signs cannot be searched in LIKE**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
You can define an escape character using the ESCAPE clause: LIKE '!%' ESCAPE '!' treats the percent sign following '!' as a literal character rather than a wildcard.

</details>

---

### Question 265

Where do NULL values sort by default in an ORDER BY ASC query in SQL Server?  

- [ ] **A) At the very end (after all values)**
- [x] **B) At the very beginning (before all values)**
- [ ] **C) They are omitted from results**
- [ ] **D) In arbitrary positions**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In SQL Server, NULL values are treated as the lowest possible values and appear first when sorted in ASC order, and last when sorted in DESC order.

</details>

---

### Question 266

What is the difference between an Index Seek and an Index Scan?  

- [x] **A) Index Seek navigates the B-Tree directly to find specific qualifying rows using SARGable predicates; Index Scan traverses all leaves of the index from start to end**
- [ ] **B) Index Scan is always faster than Index Seek**
- [ ] **C) Index Seek requires a clustered index; Index Scan is for heaps**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
An Index Seek traverses the B-Tree root and branch pages directly to locate matching leaf rows efficiently. An Index Scan touches every leaf page in the index, acting like a table scan.

</details>

---

### Question 267

What does the query 'SELECT * FROM Products ORDER BY UnitPrice OFFSET 10 ROWS;' do?  

- [x] **A) Skips the first 10 rows and returns all remaining rows from row 11 to the end**
- [ ] **B) Returns only the first 10 rows**
- [ ] **C) Raises a syntax error because FETCH NEXT is required**
- [ ] **D) Deletes 10 rows**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In T-SQL, the FETCH NEXT clause is optional with OFFSET. Specifying 'OFFSET 10 ROWS' skips the first 10 rows and returns all remaining rows.

</details>

---

### Question 268

What is 'Sort Stability' in SQL Server ORDER BY queries?  

- [x] **A) If ORDER BY values contain ties, the relative order of tied rows is non-deterministic and can vary between query runs unless tied columns are uniquely sorted**
- [ ] **B) Sorts are always guaranteed to be identical across runs**
- [ ] **C) Sorted queries cannot be aborted**
- [ ] **D) Stability refers to disk page locks**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SQL Server sorting is not stable for tied values. If multiple rows have the same ORDER BY value, their order is arbitrary unless unique tie-breaking columns are added.

</details>

---

### Question 269

How do you search for strings containing square brackets '[]' in a LIKE query?  

- [x] **A) Escape the bracket: WHERE Code LIKE '![%]!' ESCAPE '!' or WHERE Code LIKE '[[]%'**
- [ ] **B) Brackets cannot be matched in LIKE**
- [ ] **C) WHERE Code LIKE '[]'**
- [ ] **D) WHERE Code LIKE '\['**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Because square brackets are wildcard characters in LIKE, a literal bracket must either be enclosed in brackets ('[[]') or escaped via an ESCAPE character.

</details>

---

### Question 270

Which predicate correctly finds all customers whose CompanyName starts with any letter between 'A' and 'C'?  

- [x] **A) WHERE CompanyName LIKE '[A-C]%'**
- [ ] **B) WHERE CompanyName LIKE 'A-C%'**
- [ ] **C) WHERE CompanyName = 'A' OR 'B' OR 'C'**
- [ ] **D) WHERE CompanyName BETWEEN 'A%' AND 'C%'**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'[A-C]%' uses range matching inside square brackets to match any string whose first character is A, B, or C.

</details>

---


## Module 6: SQL Server Data Types

### Question 271

What is the key difference between CHAR(10) and VARCHAR(10)?  

- [ ] **A) CHAR is variable-length; VARCHAR is fixed-length**
- [x] **B) CHAR is fixed-length (pads unused spaces up to 10 bytes); VARCHAR is variable-length (stores only actual characters plus 2 bytes overhead)**
- [ ] **C) CHAR stores Unicode; VARCHAR stores ASCII**
- [ ] **D) CHAR supports up to 2 GB of text**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
CHAR(n) is fixed-length and right-pads with spaces to exactly 'n' bytes. VARCHAR(n) is variable-length, storing only the actual string length plus 2 bytes of length tracking.

</details>

---

### Question 272

Why should you use NVARCHAR instead of VARCHAR?  

- [x] **A) To store Unicode characters (such as Arabic, Chinese, emojis) requiring 2 bytes per character**
- [ ] **B) Because NVARCHAR takes half the storage space of VARCHAR**
- [ ] **C) Because NVARCHAR supports mathematical calculations directly**
- [ ] **D) Because VARCHAR is deprecated in SQL Server 2016**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
NVARCHAR stores UTF-16 Unicode data (prefix N'string'), supporting international multi-lingual characters, whereas VARCHAR stores 1-byte code-page characters.

</details>

---

### Question 273

In the data type DECIMAL(8, 2), what do the numbers 8 and 2 represent?  

- [ ] **A) 8 decimal places and 2 integer digits**
- [x] **B) Precision of 8 (total digits) and Scale of 2 (digits to the right of the decimal point)**
- [ ] **C) Minimum 8 bytes and maximum 2 bytes**
- [ ] **D) 8 rows and 2 columns**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Precision (p = 8) is the total number of digits stored (both left and right of decimal). Scale (s = 2) is the number of digits to the right of the decimal point.

</details>

---

### Question 274

Which date/time data type includes timezone offset awareness (e.g. +03:00)?  

- [ ] **A) DATETIME**
- [ ] **B) DATETIME2**
- [x] **C) DATETIMEOFFSET**
- [ ] **D) TIME**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
DATETIMEOFFSET includes the date, time of day (fractional seconds precision), and an offset from UTC (Coordinated Universal Time), making it timezone-aware.

</details>

---

### Question 275

What storage size does the INT data type occupy in SQL Server?  

- [ ] **A) 1 byte**
- [ ] **B) 2 bytes**
- [x] **C) 4 bytes**
- [ ] **D) 8 bytes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
INT occupies 4 bytes (storing values from -2,147,483,648 to 2,147,483,647). TINYINT is 1 byte, SMALLINT is 2 bytes, and BIGINT is 8 bytes.

</details>

---

### Question 276

Why should FLOAT and REAL be avoided for financial and monetary calculations?  

- [x] **A) They are approximate numeric data types that introduce rounding discrepancies due to binary floating-point representation**
- [ ] **B) They cannot store negative numbers**
- [ ] **C) They only store integers**
- [ ] **D) They are limited to values below $1,000**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
FLOAT and REAL are approximate numeric types. For financial and accounting applications, exact numeric types like DECIMAL/NUMERIC or MONEY must be used to prevent rounding errors.

</details>

---

### Question 277

What data type is used to store Globally Unique Identifiers (GUIDs) in SQL Server?  

- [x] **A) UNIQUEIDENTIFIER**
- [ ] **B) UUID**
- [ ] **C) GUID_TYPE**
- [ ] **D) VARBINARY(16)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UNIQUEIDENTIFIER is a 16-byte binary value initialized typically via the NEWID() or NEWSEQUENTIALID() functions to create globally unique values across systems.

</details>

---

### Question 278

What literal prefix must precede a string literal to designate it as Unicode in T-SQL?  

- [ ] **A) U'text'**
- [x] **B) N'text'**
- [ ] **C) E'text'**
- [ ] **D) B'text'**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The uppercase letter 'N' prefix (e.g. N'مرحبا' or N'John') stands for National Language and informs SQL Server to treat the string as Unicode (NVARCHAR).

</details>

---

### Question 279

What does the (MAX) specifier mean in VARCHAR(MAX) or VARBINARY(MAX)?  

- [ ] **A) Maximum length is 8,000 bytes**
- [x] **B) Maximum length is up to 2 gigabytes (2^31 - 1 bytes) stored as a Large Object (LOB)**
- [ ] **C) It automatically sizes to the largest record in the table**
- [ ] **D) It can only hold 65,535 characters**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The (MAX) specifier replaces older TEXT/IMAGE types, allowing columns to store up to 2 GB of variable-length character, Unicode, or binary data.

</details>

---

### Question 280

What happens during 'Implicit Conversion' when an INT column is compared with a VARCHAR string containing digits in a WHERE clause?  

- [x] **A) SQL Server automatically converts the VARCHAR to INT according to data type precedence**
- [ ] **B) SQL Server converts the INT to VARCHAR**
- [ ] **C) The query fails immediately with a syntax error**
- [ ] **D) The comparison always returns UNKNOWN**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SQL Server uses a defined Data Type Precedence hierarchy. INT has higher precedence than VARCHAR, so the VARCHAR value is implicitly converted to INT.

</details>

---

### Question 281

What is the numeric storage range of the TINYINT data type in SQL Server?  

- [x] **A) 0 to 255 (1 byte unsigned)**
- [ ] **B) -128 to 127**
- [ ] **C) 0 to 65,535**
- [ ] **D) -32,768 to 32,767**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
TINYINT is an unsigned 1-byte integer storing whole numbers from 0 to 255. It cannot store negative numbers.

</details>

---

### Question 282

What is the maximum fractional second precision supported by the DATETIME2 data type?  

- [x] **A) 7 decimal places (100 nanoseconds precision: DATETIME2(7))**
- [ ] **B) 3 decimal places (milliseconds: 3.33ms)**
- [ ] **C) 0 decimal places**
- [ ] **D) 9 decimal places**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
DATETIME2 supports configurable precision from 0 to 7 digits, where DATETIME2(7) tracks fractional seconds down to 100 nanoseconds (0.0000001s).

</details>

---

### Question 283

Why is SMALLDATETIME limited compared to modern date types?  

- [x] **A) It only stores date and time to the minute (seconds are always :00) and its date range is limited from 1900-01-01 to 2079-06-06**
- [ ] **B) It cannot store dates after the year 2000**
- [ ] **C) It occupies 16 bytes**
- [ ] **D) It only works on 32-bit systems**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SMALLDATETIME occupies 4 bytes, has a range of 1900-01-01 through 2079-06-06, and rounds seconds to the nearest whole minute.

</details>

---

### Question 284

When should CHAR(2) be chosen over VARCHAR(2) for a CountryCode column?  

- [x] **A) When data is always a fixed length; CHAR(2) uses exactly 2 bytes without the 2-byte length-offset tracking overhead of VARCHAR**
- [ ] **B) Because CHAR supports Unicode**
- [ ] **C) Because VARCHAR cannot store 2 characters**
- [ ] **D) Only when indexing is disabled**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
For strictly fixed-length codes (like 2-letter ISO country codes), CHAR(2) uses 2 bytes, whereas VARCHAR(2) incurs 2 bytes of data plus 2 bytes of offset array metadata in the row header.

</details>

---

### Question 285

What is the SQL_VARIANT data type in SQL Server?  

- [x] **A) A special data type that can store values of various SQL Server data types (except text, ntext, image, varchar(max), and xml)**
- [ ] **B) A pointer to a C# object**
- [ ] **C) An encrypted variant of INT**
- [ ] **D) A JSON data type**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SQL_VARIANT stores values of almost any SQL Server base data type alongside internal metadata recording the base type and precision.

</details>

---


## Module 7: Using DML to Modify Data

### Question 286

Which statement is used to add new rows of data to a database table?  

- [ ] **A) ADD ROW**
- [x] **B) INSERT INTO**
- [ ] **C) APPEND**
- [ ] **D) UPDATE**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
INSERT INTO is the standard DML statement used to insert one or more rows into a table or view.

</details>

---

### Question 287

What is the key functional difference between DELETE and TRUNCATE TABLE?  

- [x] **A) DELETE is DML, can have a WHERE clause, and logs individual row deletions; TRUNCATE is DDL, deallocates entire pages with minimal logging, and cannot have a WHERE clause**
- [ ] **B) TRUNCATE fires AFTER DELETE triggers on the table**
- [ ] **C) DELETE resets the IDENTITY seed, while TRUNCATE preserves it**
- [ ] **D) TRUNCATE can be used on tables referenced by foreign keys**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
TRUNCATE deallocates data pages with minimal logging, resets the IDENTITY seed, and does not fire DELETE triggers. It cannot have a WHERE clause and cannot be run on tables referenced by active foreign keys.

</details>

---

### Question 288

Which function returns the last identity value generated in the current session AND within the current execution scope?  

- [ ] **A) @@IDENTITY**
- [x] **B) SCOPE_IDENTITY()**
- [ ] **C) IDENT_CURRENT('tablename')**
- [ ] **D) IDENT_SEED()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
SCOPE_IDENTITY() returns the last identity value generated within the current session and current scope (protecting against values generated by triggers). @@IDENTITY returns the last value in the session regardless of scope.

</details>

---

### Question 289

What happens if you execute an UPDATE statement without a WHERE clause?  

- [ ] **A) Only the first row is updated**
- [x] **B) Every row in the table is updated with the new values**
- [ ] **C) SQL Server raises an error demanding confirmation**
- [ ] **D) No rows are updated**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
An UPDATE statement without a WHERE clause applies the SET modifications to every single row in the target table.

</details>

---

### Question 290

What does the OUTPUT clause in an INSERT, UPDATE, or DELETE statement do?  

- [ ] **A) Prints debug messages to the Windows Event Log**
- [x] **B) Returns information from modified rows using the 'INSERTED' and 'DELETED' virtual tables**
- [ ] **C) Exports data directly to an Excel file**
- [ ] **D) Formats numbers with currency symbols**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The OUTPUT clause returns data from the rows affected by DML statements via the special 'INSERTED' (new values) and 'DELETED' (old values) memory tables.

</details>

---

### Question 291

Which statement combines INSERT, UPDATE, and DELETE operations into a single atomic operation based on matching criteria with a source table?  

- [ ] **A) UPSERT**
- [x] **B) MERGE**
- [ ] **C) COMBINE**
- [ ] **D) SYNC**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The MERGE statement performs conditional INSERT, UPDATE, and DELETE operations against a target table in a single atomic statement based on WHEN MATCHED and WHEN NOT MATCHED clauses.

</details>

---

### Question 292

What must terminate a MERGE statement in T-SQL?  

- [ ] **A) A GO command**
- [x] **B) A semicolon (;)**
- [ ] **C) END MERGE**
- [ ] **D) COMMIT**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In T-SQL, the MERGE statement must strictly terminate with a semicolon (;) or a syntax error is raised.

</details>

---

### Question 293

How do you explicitly insert an explicit value into a column that has the IDENTITY property enabled?  

- [x] **A) SET IDENTITY_INSERT TableName ON;**
- [ ] **B) ALTER TABLE TableName DISABLE IDENTITY;**
- [ ] **C) UPDATE TableName SET ID = value;**
- [ ] **D) It is physically impossible to insert explicit values into identity columns**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
To supply explicit values for an IDENTITY column, execute 'SET IDENTITY_INSERT TableName ON' before the INSERT statement, and turn it OFF afterward.

</details>

---

### Question 294

Which syntax copies data and creates a new permanent table on the fly based on the result set of a query?  

- [ ] **A) INSERT INTO NewTable SELECT * FROM OldTable;**
- [x] **B) SELECT * INTO NewTable FROM OldTable;**
- [ ] **C) CREATE TABLE AS SELECT * FROM OldTable;**
- [ ] **D) COPY TABLE OldTable TO NewTable;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
'SELECT ... INTO NewTable FROM ...' creates the destination table based on the schema and column types of the query result set and copies the data into it.

</details>

---

### Question 295

In an UPDATE statement, which virtual table in the OUTPUT clause contains the values as they were BEFORE the update?  

- [ ] **A) INSERTED**
- [x] **B) DELETED**
- [ ] **C) PRIOR**
- [ ] **D) OLD**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In an UPDATE operation, the 'DELETED' table holds the pre-update row values, and the 'INSERTED' table holds the post-update values.

</details>

---

### Question 296

In a MERGE statement, what does the '$action' column in the OUTPUT clause return?  

- [x] **A) An NVARCHAR(10) string indicating the action performed on each row: 'INSERT', 'UPDATE', or 'DELETE'**
- [ ] **B) The execution duration in milliseconds**
- [ ] **C) The transaction ID**
- [ ] **D) The user login name**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In a MERGE statement's OUTPUT clause, '$action' is a system virtual column returning 'INSERT', 'UPDATE', or 'DELETE' indicating which operation affected that specific row.

</details>

---

### Question 297

How can you capture rows returned from a stored procedure directly into an existing table?  

- [x] **A) INSERT INTO TargetTable EXEC StoredProcName;**
- [ ] **B) SELECT * FROM EXEC(StoredProcName) INTO TargetTable;**
- [ ] **C) TargetTable.Load(StoredProcName);**
- [ ] **D) IMPORT StoredProcName INTO TargetTable;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'INSERT INTO TargetTable EXEC ProcedureName' captures the tabular output of a stored procedure directly into a pre-existing target table with matching columns.

</details>

---

### Question 298

How do you update a table based on data joined from another table in T-SQL?  

- [x] **A) UPDATE t SET t.Price = s.NewPrice FROM TargetTable t INNER JOIN SourceTable s ON t.ID = s.ID;**
- [ ] **B) UPDATE TargetTable JOIN SourceTable ON ... SET Price = NewPrice;**
- [ ] **C) UPDATE TargetTable SET Price = (SELECT NewPrice);**
- [ ] **D) MERGE is the only way to update from another table**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
T-SQL supports updating via an explicit FROM clause: 'UPDATE t SET t.Col = s.Col FROM Target t JOIN Source s ON t.ID = s.ID'.

</details>

---

### Question 299

How can you delete a fixed number of rows from a table in batches to avoid locking escalation?  

- [x] **A) DELETE TOP (5000) FROM Orders WHERE Status = 'Archived';**
- [ ] **B) TRUNCATE TOP (5000) TABLE Orders;**
- [ ] **C) DELETE FROM Orders LIMIT 5000;**
- [ ] **D) DROP 5000 ROWS FROM Orders;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'DELETE TOP (N) FROM Table WHERE ...' removes rows in chunks, allowing developers to execute batch deletions in a loop to avoid full-table lock escalation and log truncation bottlenecks.

</details>

---

### Question 300

Why cannot TRUNCATE TABLE be executed on a table that is referenced by a FOREIGN KEY constraint, even if the child table has 0 rows?  

- [x] **A) SQL Server validates schema metadata: any table referenced by an active foreign key is prohibited from truncation regardless of whether child rows exist**
- [ ] **B) Because foreign keys require clustered indexes**
- [ ] **C) Because TRUNCATE only works on views**
- [ ] **D) Because TRUNCATE deletes foreign keys permanently**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
TRUNCATE does not scan individual rows to verify referential integrity; it deallocates pages directly. Therefore, it is blocked if any FOREIGN KEY constraint references the table.

</details>

---


## Module 8: Using Built-In Functions

### Question 301

What is the difference between a deterministic function and a non-deterministic function?  

- [x] **A) Deterministic functions always return the same result given the same input parameters; non-deterministic functions (like GETDATE()) can return different results on each call**
- [ ] **B) Deterministic functions can only be run once per day**
- [ ] **C) Non-deterministic functions cannot be used in stored procedures**
- [ ] **D) Deterministic functions do not take arguments**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Deterministic functions (e.g. SQUARE, ABS) always return the identical result given the same input parameters. Non-deterministic functions (e.g. GETDATE(), NEWID()) return different values each time.

</details>

---

### Question 302

What is the advantage of TRY_CONVERT or TRY_CAST over standard CONVERT or CAST?  

- [ ] **A) They run twice as fast**
- [x] **B) If the conversion fails, they return NULL instead of terminating the query with a runtime error**
- [ ] **C) They support XML serialization**
- [ ] **D) They automatically decrypt data**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Standard CAST and CONVERT fail with runtime conversion errors on invalid data. TRY_CAST and TRY_CONVERT return NULL if the conversion is invalid, allowing queries to continue gracefully.

</details>

---

### Question 303

What does COALESCE('arg1', 'arg2', 'arg3') return?  

- [ ] **A) The concatenation of all arguments**
- [x] **B) The first non-NULL expression among its arguments**
- [ ] **C) The count of non-null arguments**
- [ ] **D) NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
COALESCE is an ANSI SQL standard function that evaluates the arguments in order and returns the current value of the first expression that does not evaluate to NULL.

</details>

---

### Question 304

How does ISNULL(check_expression, replacement_value) differ from COALESCE?  

- [x] **A) ISNULL is proprietary to T-SQL and accepts only 2 arguments, adopting the data type of the first argument; COALESCE is ANSI standard, accepts multiple arguments, and returns the highest precedence data type**
- [ ] **B) ISNULL works only with strings**
- [ ] **C) COALESCE cannot handle NULLs**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ISNULL is T-SQL specific, accepts exactly 2 arguments, and determines result type from the first argument. COALESCE is ANSI standard, accepts N arguments, and promotes to the highest precedence type.

</details>

---

### Question 305

What does the function DATEDIFF(day, '2024-01-01', '2024-01-10') return?  

- [ ] **A) 10**
- [x] **B) 9**
- [ ] **C) 8**
- [ ] **D) -9**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
DATEDIFF calculates the count of specified datepart boundaries crossed between startdate and enddate (10 - 1 = 9 days).

</details>

---

### Question 306

Which function returns the last day of the month containing the specified date?  

- [ ] **A) LAST_DAY()**
- [x] **B) EOMONTH()**
- [ ] **C) MONTH_END()**
- [ ] **D) ENDOFMONTH()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
EOMONTH(start_date [, month_to_add]) returns the last day of the month containing the specified date as a DATE data type.

</details>

---

### Question 307

What does NULLIF(val1, val2) return if val1 is equal to val2?  

- [ ] **A) TRUE**
- [ ] **B) 0**
- [x] **C) NULL**
- [ ] **D) val1**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
NULLIF returns NULL if its two arguments are equal; otherwise, it returns the first argument. It is commonly used to prevent division by zero: val / NULLIF(divisor, 0).

</details>

---

### Question 308

What does the IIF function in T-SQL do?  

- [x] **A) Serves as a shorthand for writing a CASE expression: IIF(condition, true_value, false_value)**
- [ ] **B) Declares an index in an inline function**
- [ ] **C) Validates if an IP address is valid**
- [ ] **D) Compares two tables for row identity**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
IIF is a shorthand syntactic wrapper around a simple boolean CASE expression: IIF(boolean_expression, true_value, false_value).

</details>

---

### Question 309

Which string function extracts 5 characters from 'Microsoft' starting at position 6?  

- [x] **A) SUBSTRING('Microsoft', 6, 5)**
- [ ] **B) MID('Microsoft', 6, 5)**
- [ ] **C) SUBSTR('Microsoft', 5, 5)**
- [ ] **D) LEFT('Microsoft', 5)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SUBSTRING(expression, start, length) uses 1-based indexing. SUBSTRING('Microsoft', 6, 5) starts at the 6th character ('s') and takes 5 characters ('soft').

</details>

---

### Question 310

What does the CHOOSE function do in T-SQL?  

- [x] **A) Returns the item at the specified 1-based index from an ordered list of values: CHOOSE(2, 'A', 'B', 'C') returns 'B'**
- [ ] **B) Randomly selects a row from a table**
- [ ] **C) Selects the best index for a query**
- [ ] **D) Picks the smallest number from a list**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CHOOSE(index, val_1, val_2, ... val_n) acts like an array indexer in T-SQL, returning the value at the 1-based index position.

</details>

---

### Question 311

What does the STRING_SPLIT function introduced in SQL Server 2016 return?  

- [x] **A) A table with a single column named 'value' containing substrings split by the specified delimiter character**
- [ ] **B) An array in memory**
- [ ] **C) A comma-separated string**
- [ ] **D) An XML document**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
STRING_SPLIT(string, separator) is an inline table-valued function that parses a delimited string and returns rows in a single column named 'value'.

</details>

---

### Question 312

Why should the FORMAT() function be used cautiously in large query result sets?  

- [x] **A) It relies on the .NET CLR runtime internally and introduces significant CPU performance overhead compared to CONVERT()**
- [ ] **B) It drops database connections**
- [ ] **C) It truncates dates to 1900**
- [ ] **D) It only formats currency**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
FORMAT() is implemented via the .NET Common Language Runtime, resulting in high CPU overhead and context switching. For large queries, CONVERT() with style codes is significantly faster.

</details>

---

### Question 313

What does the optional third argument in ROUND(123.456, 1, 1) do?  

- [x] **A) When non-zero, it truncates the number instead of rounding, returning 123.400**
- [ ] **B) Rounds to the nearest hundred**
- [ ] **C) Converts the result to integer**
- [ ] **D) Divides the result by 10**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In ROUND(numeric_expression, length [, function]), if 'function' is non-zero, SQL Server truncates the expression to the specified decimal places rather than rounding.

</details>

---

### Question 314

What is the difference between CEILING(4.2) and FLOOR(4.8)?  

- [x] **A) CEILING(4.2) returns 5; FLOOR(4.8) returns 4**
- [ ] **B) CEILING(4.2) returns 4; FLOOR(4.8) returns 5**
- [ ] **C) Both return 5**
- [ ] **D) Both return 4**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CEILING returns the smallest integer greater than or equal to the numeric expression (5). FLOOR returns the largest integer less than or equal to the numeric expression (4).

</details>

---

### Question 315

What is the difference between GETDATE() and GETUTCDATE()?  

- [x] **A) GETDATE() returns the current date/time of the host operating system; GETUTCDATE() returns the current Coordinated Universal Time (UTC)**
- [ ] **B) GETUTCDATE() includes timezone offset**
- [ ] **C) GETDATE() returns date only; GETUTCDATE() returns time only**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GETDATE() returns the local datetime of the database server host. GETUTCDATE() returns the current datetime in UTC (GMT).

</details>

---


## Module 9: Grouping & Aggregating Data

### Question 316

What rule governs the SELECT list when a query contains a GROUP BY clause?  

- [x] **A) All columns in the SELECT list must either be listed in the GROUP BY clause or enclosed within an aggregate function**
- [ ] **B) The SELECT list cannot contain any columns other than the primary key**
- [ ] **C) Aggregate functions cannot be used in the SELECT list**
- [ ] **D) The GROUP BY clause must match the ORDER BY clause exactly**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Every column appearing in the SELECT list that is not encapsulated within an aggregate function (COUNT, SUM, AVG, etc.) must be explicitly included in the GROUP BY clause.

</details>

---

### Question 317

What is the key difference between the WHERE clause and the HAVING clause?  

- [x] **A) WHERE filters individual rows before grouping; HAVING filters aggregated groups after grouping**
- [ ] **B) HAVING can only be used with numbers**
- [ ] **C) WHERE is evaluated after GROUP BY**
- [ ] **D) HAVING can modify the data**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
WHERE filters rows before they enter the grouping phase. HAVING filters the resulting aggregated groups and can evaluate aggregate functions (e.g. HAVING COUNT(*) > 5).

</details>

---

### Question 318

How do standard aggregate functions (SUM, AVG, MIN, MAX) handle NULL values?  

- [ ] **A) They treat NULLs as zeros**
- [x] **B) They ignore NULL values completely when computing the result**
- [ ] **C) They return NULL if any single row is NULL**
- [ ] **D) They throw a runtime exception**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Aggregate functions (with the exception of COUNT(*)) eliminate NULL values before calculating their results. (A warning 'Null value is eliminated by an aggregate or other SET operation' is emitted).

</details>

---

### Question 319

What is the difference between COUNT(*) and COUNT(column_name)?  

- [x] **A) COUNT(*) counts all rows including those with NULLs; COUNT(column_name) counts only rows where column_name is NOT NULL**
- [ ] **B) COUNT(*) only counts indexed columns**
- [ ] **C) COUNT(column_name) counts duplicates only once**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
COUNT(*) counts every row in the group regardless of contents. COUNT(column_name) counts only rows where the specified column contains a non-NULL value.

</details>

---

### Question 320

How do you count the number of distinct cities represented in a Customers table?  

- [x] **A) COUNT(DISTINCT City)**
- [ ] **B) DISTINCT(COUNT(City))**
- [ ] **C) COUNT(UNIQUE City)**
- [ ] **D) SUM(DISTINCT City)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Placing the DISTINCT keyword inside the aggregate function: COUNT(DISTINCT City) de-duplicates the city values before counting.

</details>

---

### Question 321

What will AVG(Score) return if the table contains four rows with Scores: 10, 20, 30, and NULL?  

- [ ] **A) 15 (60 / 4)**
- [x] **B) 20 (60 / 3)**
- [ ] **C) NULL**
- [ ] **D) 60**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Because aggregate functions ignore NULLs, the NULL row is omitted from both the sum and the count: (10 + 20 + 30) / 3 = 60 / 3 = 20.

</details>

---

### Question 322

Can an aggregate function be used directly inside a WHERE clause without a subquery (e.g. WHERE COUNT(*) > 5)?  

- [ ] **A) Yes, if GROUP BY is also present**
- [x] **B) No, aggregate functions cannot appear in a WHERE clause because WHERE executes before grouping occurs**
- [ ] **C) Yes, in SQL Server 2016 and later**
- [ ] **D) Only for MIN and MAX**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Aggregates summarize groups of rows, which do not exist when the WHERE clause executes. Aggregate conditions must be placed in the HAVING clause or a subquery.

</details>

---

### Question 323

How does GROUP BY handle rows where the grouping column is NULL?  

- [ ] **A) Discards all NULL rows**
- [x] **B) Places all NULL rows together into a single group**
- [ ] **C) Creates a separate group for each individual NULL row**
- [ ] **D) Converts NULLs to 0**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In T-SQL grouping, all NULL values are considered equal for grouping purposes and are collected into a single combined group.

</details>

---

### Question 324

What does the query 'SELECT COUNT(*) FROM Orders HAVING COUNT(*) > 100;' return if there are only 50 orders in the table?  

- [ ] **A) 0**
- [ ] **B) NULL**
- [x] **C) An empty result set (0 rows)**
- [ ] **D) 50**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `C`

**Explanation:**  
The query aggregates all rows into a single group with COUNT(*) = 50. The HAVING clause evaluates 50 > 100 as FALSE, filtering out the group and returning an empty result set.

</details>

---

### Question 325

Which aggregate function returns the population standard deviation for all values in a numeric expression?  

- [ ] **A) STDEV**
- [x] **B) STDEVP**
- [ ] **C) VAR**
- [ ] **D) VARP**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
STDEVP computes the standard deviation for the entire population. STDEV computes the sample standard deviation.

</details>

---

### Question 326

What is the performance difference between COUNT(1) and COUNT(*) in SQL Server?  

- [x] **A) None; the query optimizer parses them identically into the exact same execution plan**
- [ ] **B) COUNT(1) is twice as fast because it does not read columns**
- [ ] **C) COUNT(*) requires reading every column off disk**
- [ ] **D) COUNT(1) ignores NULLs**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
In SQL Server, COUNT(*) and COUNT(1) are functionally and performance-wise completely identical. The optimizer treats both as counting rows.

</details>

---

### Question 327

Which aggregate function concatenates string values from multiple rows into a single delimited string?  

- [x] **A) STRING_AGG(column, delimiter) [WITHIN GROUP (ORDER BY ...)]**
- [ ] **B) CONCAT_ROWS()**
- [ ] **C) GROUP_CONCAT()**
- [ ] **D) TEXT_JOIN()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
STRING_AGG (introduced in SQL Server 2017) aggregates string expressions across rows into a delimited string with optional WITHIN GROUP (ORDER BY) ordering.

</details>

---

### Question 328

Can a query contain a HAVING clause without an explicit GROUP BY clause?  

- [x] **A) Yes; the entire result set is treated as a single group**
- [ ] **B) No; HAVING strictly requires GROUP BY or a syntax error is raised**
- [ ] **C) Only if WHERE is omitted**
- [ ] **D) Only in views**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
If HAVING is used without GROUP BY, the entire table or filtered result set is treated as a single aggregate group (e.g. 'SELECT 1 HAVING COUNT(*) > 10').

</details>

---

### Question 329

What do MIN() and MAX() return when applied to a character/string column?  

- [x] **A) The lowest and highest alphabetical strings based on collation sort rules**
- [ ] **B) The string with shortest and longest length**
- [ ] **C) An error because MIN and MAX only work on numbers**
- [ ] **D) NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
MIN and MAX evaluate character columns using collation sort order, returning the string that sorts first (lowest) and last (highest) alphabetically.

</details>

---

### Question 330

Can you group by a complex expression (such as YEAR(OrderDate)) in a GROUP BY clause?  

- [x] **A) Yes, expressions can appear in GROUP BY, and identical expressions can be selected in the SELECT list**
- [ ] **B) No, GROUP BY only accepts raw column names**
- [ ] **C) Only if defined in a CTE first**
- [ ] **D) Only in SQL Server Enterprise**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GROUP BY allows expressions (e.g. 'GROUP BY YEAR(OrderDate), MONTH(OrderDate)'). The exact same expression can be projected in the SELECT list.

</details>

---


## Module 10: Using Subqueries

### Question 331

What is a Scalar Subquery?  

- [ ] **A) A subquery that returns a single column and multiple rows**
- [x] **B) A subquery that returns exactly one single value (one row and one column)**
- [ ] **C) A subquery that returns an entire table**
- [ ] **D) A subquery that cannot contain a WHERE clause**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A scalar subquery returns exactly one row with one column. Because it evaluates to a single scalar value, it can be used anywhere a single expression is valid.

</details>

---

### Question 332

What happens at runtime if a scalar subquery used in an equality comparison returns multiple rows?  

- [ ] **A) SQL Server picks the first row automatically**
- [x] **B) A runtime error is raised: 'Subquery returned more than 1 value'**
- [ ] **C) The comparison converts to an IN clause automatically**
- [ ] **D) It evaluates to NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
When an operator expecting a single value (=, <, >) receives multiple rows from a subquery, SQL Server terminates execution with runtime error 512.

</details>

---

### Question 333

What is a Correlated Subquery?  

- [ ] **A) A subquery that runs once before the outer query and caches its results**
- [x] **B) A subquery that references columns from the outer query, executing once for each row processed by the outer query**
- [ ] **C) A subquery that joins two unrelated databases**
- [ ] **D) A subquery that does not return any rows**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A correlated subquery references one or more columns from the outer query table, creating a dependency where the subquery evaluates in the context of each candidate outer row.

</details>

---

### Question 334

What does the EXISTS operator return?  

- [ ] **A) The row count of the subquery**
- [x] **B) A boolean TRUE if the subquery returns at least one row; FALSE otherwise**
- [ ] **C) The primary key of the matching row**
- [ ] **D) The elapsed time of the query**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
EXISTS tests for the presence of any rows matching the subquery. It short-circuits evaluation as soon as the first matching record is found, returning TRUE.

</details>

---

### Question 335

Why is 'SELECT *' inside an EXISTS subquery (e.g. WHERE EXISTS (SELECT * FROM ...)) not a performance hazard?  

- [x] **A) The query optimizer ignores the SELECT list in an EXISTS subquery and only checks for row existence**
- [ ] **B) SQL Server only reads the first column anyway**
- [ ] **C) EXISTS only works on clustered indexes**
- [ ] **D) It is a performance hazard and should never be done**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The query optimizer does not project or transfer columns specified in the SELECT list of an EXISTS predicate; it solely verifies row existence.

</details>

---

### Question 336

What unexpected result occurs when using 'WHERE ID NOT IN (SELECT ID FROM Table)' if the subquery returns even a single NULL value?  

- [ ] **A) All matching rows are returned**
- [x] **B) The entire NOT IN predicate evaluates to UNKNOWN for all outer rows, returning an empty result set (0 rows)**
- [ ] **C) The NULL is converted to 0**
- [ ] **D) The database crashes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Because 'val <> NULL' is UNKNOWN, if any value in the NOT IN set is NULL, the AND-chain evaluates to UNKNOWN for all rows, causing NOT IN to return zero rows. Using NOT EXISTS avoids this hazard.

</details>

---

### Question 337

What does the '> ALL (subquery)' comparison require to evaluate to TRUE for a candidate row?  

- [ ] **A) The candidate value must be greater than at least one value returned by the subquery**
- [x] **B) The candidate value must be greater than every single value returned by the subquery (greater than MAX)**
- [ ] **C) The subquery must return all rows from the table**
- [ ] **D) The candidate value must be equal to the average**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The '> ALL' comparison requires the value to be greater than every value returned by the subquery, meaning it must be strictly greater than the maximum value.

</details>

---

### Question 338

What does '> ANY (subquery)' or '> SOME (subquery)' mean?  

- [x] **A) The value must be greater than at least one value returned by the subquery (greater than MIN)**
- [ ] **B) The value must be greater than all values**
- [ ] **C) The value must match the first value only**
- [ ] **D) The subquery must return NULL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'> ANY' (or '> SOME') evaluates to TRUE if the value is greater than at least one value in the subquery result set (i.e. greater than the minimum value).

</details>

---

### Question 339

Where can subqueries be placed in a T-SQL query?  

- [ ] **A) Only in the WHERE clause**
- [x] **B) In SELECT, FROM, WHERE, and HAVING clauses**
- [ ] **C) Only in the FROM clause**
- [ ] **D) Only in the ORDER BY clause**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Subqueries can appear in multiple clauses: as scalar expressions in SELECT, derived tables in FROM, filters in WHERE, and group criteria in HAVING.

</details>

---

### Question 340

What is a Self-Contained (or Non-Correlated) Subquery?  

- [x] **A) A subquery that has no dependency on the outer query and can be executed independently**
- [ ] **B) A subquery that references its own table name only**
- [ ] **C) A subquery inside a stored procedure**
- [ ] **D) A subquery that contains a TRANSACTION**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A self-contained subquery does not reference any columns from the outer query. It can be highlighted and executed completely on its own, running once for the entire query.

</details>

---

### Question 341

What is 'Subquery Unnesting' (or flattening) performed by the SQL Server query optimizer?  

- [x] **A) An internal optimization where the optimizer transforms subqueries (like EXISTS or IN) into equivalent relational JOIN operators to explore better join algorithms**
- [ ] **B) Deleting subqueries from memory**
- [ ] **C) Converting correlated subqueries into stored procedures**
- [ ] **D) Running subqueries on client machines**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Subquery unnesting is an optimization where the engine rewrites subqueries into relational joins (semi-joins or anti-semi-joins), allowing hash, merge, or loop join algorithms.

</details>

---

### Question 342

Where can a correlated subquery be used to return a dynamic calculated value for each row of the outer query?  

- [x] **A) In the SELECT projection list**
- [ ] **B) Only in the GROUP BY clause**
- [ ] **C) Only in the ORDER BY clause**
- [ ] **D) Correlated subqueries cannot be used in SELECT**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A scalar correlated subquery can appear in the SELECT list (e.g. 'SELECT c.Name, (SELECT COUNT(*) FROM Orders o WHERE o.CustID = c.CustID) AS OrderCount FROM Customers c').

</details>

---

### Question 343

How can you return only the single most recent order date for each customer using a correlated subquery in SELECT?  

- [x] **A) (SELECT TOP (1) o.OrderDate FROM Orders o WHERE o.CustomerID = c.CustomerID ORDER BY o.OrderDate DESC)**
- [ ] **B) (SELECT o.OrderDate FROM Orders o WHERE o.CustomerID = c.CustomerID)**
- [ ] **C) (SELECT FIRST(o.OrderDate) FROM Orders o)**
- [ ] **D) Correlated subqueries cannot use ORDER BY**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A subquery in the SELECT list must be scalar (returning 1 value). Pairing 'TOP (1)' with an 'ORDER BY' ensures exactly one row is returned.

</details>

---

### Question 344

Why does EXISTS generally perform better than IN when testing existence against a subquery that could contain NULLs?  

- [x] **A) EXISTS uses two-valued boolean logic and short-circuits on the first matching row, while NOT IN evaluates to UNKNOWN if any NULL is present**
- [ ] **B) IN requires creating temporary tables on disk**
- [ ] **C) EXISTS encrypts data**
- [ ] **D) IN is deprecated**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
EXISTS evaluates row existence directly using two-valued logic (True/False). NOT IN evaluates three-valued logic and collapses to 0 rows if a single NULL is returned.

</details>

---

### Question 345

What is a Table Subquery?  

- [x] **A) A subquery that returns multiple rows and multiple columns, typically used in the FROM clause as a derived table**
- [ ] **B) A subquery that creates a physical table**
- [ ] **C) A subquery that modifies table schema**
- [ ] **D) A subquery inside a trigger**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A table subquery returns a multi-row, multi-column tabular result set, most commonly utilized in the FROM clause with an alias as a derived table.

</details>

---


## Module 11: Using Table Expressions

### Question 346

What is a View in SQL Server?  

- [ ] **A) A physical copy of data stored in a separate table**
- [x] **B) A named, saved SELECT query definition stored in the database catalog that acts as a virtual table**
- [ ] **C) A graphical dashboard in SSMS**
- [ ] **D) A temporary table in tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A view is a stored query definition. When queried, SQL Server expands the view definition and queries the underlying base tables directly (unless it is an indexed view).

</details>

---

### Question 347

What is a Common Table Expression (CTE)?  

- [x] **A) A temporary named result set defined within the execution scope of a single SELECT, INSERT, UPDATE, or DELETE statement using the WITH keyword**
- [ ] **B) A global temporary table shared by all users**
- [ ] **C) A table stored in the master database**
- [ ] **D) An index defined on multiple columns**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A CTE is a named temporary table expression defined using 'WITH CTE_Name AS (SELECT ...)' that exists only for the duration of the statement that follows it.

</details>

---

### Question 348

What are the two distinct parts of a Recursive CTE?  

- [ ] **A) Primary member and Foreign member**
- [x] **B) Anchor member and Recursive member (combined with UNION ALL)**
- [ ] **C) Master query and Detail query**
- [ ] **D) Initial loop and Final loop**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
A recursive CTE consists of an Anchor member (which returns the base rows), a UNION ALL operator, and a Recursive member that references the CTE itself until an empty set is produced.

</details>

---

### Question 349

What is a Derived Table in T-SQL?  

- [x] **A) A subquery defined in the FROM clause of an outer query and assigned a mandatory correlation alias**
- [ ] **B) A table created by inheritance in C#**
- [ ] **C) A table generated from a backup file**
- [ ] **D) A partitioned table on SAN storage**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A derived table is an inline subquery in the FROM clause: 'FROM (SELECT col1, col2 FROM MyTable) AS dt'. Giving it an alias is mandatory.

</details>

---

### Question 350

What is an Inline Table-Valued Function (iTVF)?  

- [x] **A) A function that returns a table using a single SELECT statement without a BEGIN/END block, essentially acting as a parameterized view**
- [ ] **B) A scalar function returning integer counts**
- [ ] **C) A stored procedure returning output parameters**
- [ ] **D) A trigger on a view**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
An inline TVF contains a single RETURN SELECT statement. Because it has no multi-statement procedural logic, SQL Server can inline its definition directly into the calling query execution plan.

</details>

---

### Question 351

Why does an ORDER BY clause without TOP or OFFSET-FETCH cause an error inside a View or CTE definition?  

- [x] **A) Because views and CTEs represent mathematical relations, and relations have no intrinsic ordering**
- [ ] **B) Because sorting is not supported in T-SQL**
- [ ] **C) Because views can only sort alphabetically**
- [ ] **D) Because ORDER BY requires administrative permissions**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A view or table expression defines a relational set, which by definition is unordered. ORDER BY is disallowed in view definitions unless TOP or OFFSET-FETCH is used to restrict rows.

</details>

---

### Question 352

What option on CREATE VIEW prevents modifying base table schemas in ways that would invalidate the view?  

- [ ] **A) WITH ENCRYPTION**
- [x] **B) WITH SCHEMABINDING**
- [ ] **C) WITH CHECK OPTION**
- [ ] **D) WITH RECOMPILE**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
WITH SCHEMABINDING locks the underlying base tables against structural changes (altering or dropping columns/tables) that would break the view definition.

</details>

---

### Question 353

What does the WITH CHECK OPTION clause do when added to an updatable View?  

- [ ] **A) It verifies table permissions for the current user**
- [x] **B) It ensures that any INSERT or UPDATE through the view conforms to the filter conditions defined in the view's WHERE clause**
- [ ] **C) It encrypts the view definition**
- [ ] **D) It checks database integrity daily**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
WITH CHECK OPTION prevents DML modifications through the view that would result in rows disappearing from the view (i.e. failing the view's WHERE predicate).

</details>

---

### Question 354

What query hint controls the maximum number of recursion levels allowed for a recursive CTE to prevent infinite loops?  

- [x] **A) OPTION (MAXRECURSION n)**
- [ ] **B) OPTION (RECURSE_LIMIT n)**
- [ ] **C) OPTION (LOOP_COUNT n)**
- [ ] **D) OPTION (FAST n)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The MAXRECURSION hint (e.g., OPTION (MAXRECURSION 100)) sets the maximum recursion depth. If the recursion exceeds this number, an error is raised and the query aborts.

</details>

---

### Question 355

Can multiple CTEs be defined in a single WITH statement?  

- [x] **A) Yes, by separating them with commas (e.g. WITH CTE1 AS (...), CTE2 AS (...))**
- [ ] **B) No, each CTE requires its own separate WITH keyword**
- [ ] **C) Only if they reference identical tables**
- [ ] **D) Only up to 2 CTEs per query**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
You can define multiple CTEs consecutively using a single WITH keyword by separating each CTE definition with a comma.

</details>

---

### Question 356

What is an Indexed View (or Materialized View) in SQL Server?  

- [x] **A) A view on which a unique clustered index has been created, causing the view result set to be physically computed and stored on disk like a table**
- [ ] **B) A view that has only non-clustered indexes**
- [ ] **C) A view stored in the master database**
- [ ] **D) An index on tempdb**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Creating a UNIQUE CLUSTERED INDEX on a view (with SCHEMABINDING) physically materializes the view data to disk, updated automatically as underlying tables change.

</details>

---

### Question 357

What causes a Recursive CTE to terminate its recursion naturally?  

- [x] **A) When the recursive member query returns an empty result set (0 rows)**
- [ ] **B) When the MAXRECURSION limit is reached**
- [ ] **C) When the anchor member completes**
- [ ] **D) When the transaction commits**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A recursive CTE continues iterating until the recursive member returns an empty result set. If it never terminates, MAXRECURSION terminates it with an error.

</details>

---

### Question 358

Can a CTE reference another CTE defined previously in the same WITH clause?  

- [x] **A) Yes, subsequent CTEs can reference preceding CTEs in the same WITH statement**
- [ ] **B) No, CTEs cannot reference other CTEs**
- [ ] **C) Only if separated by GO**
- [ ] **D) Only in stored procedures**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
You can chain CTEs: 'WITH CTE1 AS (...), CTE2 AS (SELECT * FROM CTE1) SELECT * FROM CTE2;' Preceding CTEs are accessible to subsequent ones.

</details>

---

### Question 359

What are the two syntactic methods for assigning column aliases to a Derived Table?  

- [x] **A) Inline aliasing (SELECT col AS Alias) and External aliasing (FROM (...) AS dt(Alias1, Alias2))**
- [ ] **B) Header aliasing and Footer aliasing**
- [ ] **C) Static and Dynamic aliasing**
- [ ] **D) There is only one method**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Derived tables allow inline aliasing in the SELECT list or external column aliasing in the correlation clause: 'FROM (SELECT c1, c2 FROM T) AS dt(colA, colB)'.

</details>

---

### Question 360

Why do Multi-Statement Table-Valued Functions (MSTVFs) often cause poor query performance compared to Inline TVFs?  

- [x] **A) SQL Server historically uses fixed cardinality estimates (1 row in older versions, 100 in 2014) for MSTVFs, leading to suboptimal query execution plans**
- [ ] **B) MSTVFs cannot be indexed**
- [ ] **C) MSTVFs do not support parameters**
- [ ] **D) MSTVFs lock the entire database**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
MSTVFs use table variables whose cardinality cannot be accurately estimated during compilation, often resulting in bad plans. Inline TVFs are inlined directly like views.

</details>

---


## Module 12: Using Set Operators

### Question 361

What is the primary difference between UNION and UNION ALL?  

- [x] **A) UNION eliminates duplicate rows from the combined result set; UNION ALL retains all rows including duplicates**
- [ ] **B) UNION ALL is slower because it sorts rows**
- [ ] **C) UNION allows different numbers of columns**
- [ ] **D) UNION ALL only works on integer data types**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UNION performs a distinct sort operation to eliminate duplicate rows across sets. UNION ALL simply concatenates the sets without sorting or de-duplication, making it significantly faster.

</details>

---

### Question 362

What are the two mandatory requirements for queries combined by set operators (UNION, EXCEPT, INTERSECT)?  

- [x] **A) They must have the same number of columns, and corresponding columns must have compatible data types**
- [ ] **B) They must reference the same table**
- [ ] **C) They must have identical column names and indexes**
- [ ] **D) They must use the same WHERE clause**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
All set operators require: 1. Both queries must return the exact same number of columns. 2. The data types of corresponding columns in order must be implicitly or explicitly compatible.

</details>

---

### Question 363

What does the INTERSECT operator return?  

- [x] **A) Only rows that appear in both the first and second query result sets**
- [ ] **B) Rows that appear in the first query but not in the second query**
- [ ] **C) All rows from both queries with duplicates**
- [ ] **D) A Cartesian cross-product**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
INTERSECT returns only distinct rows that are present in both input query result sets.

</details>

---

### Question 364

What does the query 'QueryA EXCEPT QueryB' return?  

- [x] **A) Rows that appear in QueryA but do NOT appear in QueryB**
- [ ] **B) Rows that appear in QueryB but not QueryA**
- [ ] **C) Rows that appear in either QueryA or QueryB but not both**
- [ ] **D) All rows except NULLs**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
EXCEPT returns distinct rows from the left (first) query that do not exist in the right (second) query result set.

</details>

---

### Question 365

How do set operators (UNION, EXCEPT, INTERSECT) treat NULL values when comparing rows?  

- [x] **A) They treat two NULL values as equal to each other for de-duplication purposes**
- [ ] **B) They treat comparisons with NULL as UNKNOWN and discard them**
- [ ] **C) They convert NULLs to empty strings**
- [ ] **D) They raise a syntax error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Unlike standard equality predicates in WHERE clauses, set operators treat two NULL values in corresponding columns as matching/equal for set comparison.

</details>

---

### Question 366

Where can an ORDER BY clause be placed when using set operators?  

- [ ] **A) In each individual query before the set operator**
- [x] **B) Only once at the very end of the entire statement to sort the combined result**
- [ ] **C) Set operations cannot have an ORDER BY clause**
- [ ] **D) Immediately after the first SELECT**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
When using set operators, an ORDER BY clause can only appear once at the very end of the compound query, sorting the final combined result set.

</details>

---

### Question 367

Which column names are assigned to the output of a UNION query?  

- [x] **A) The column names or aliases defined in the first query**
- [ ] **B) The column names from the second query**
- [ ] **C) System-generated column names like Col1, Col2**
- [ ] **D) The user must define an alias on the UNION keyword**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The column names in the final result set of a set operation are determined solely by the column names or aliases specified in the first SELECT query.

</details>

---

### Question 368

What is the purpose of the CROSS APPLY operator in T-SQL?  

- [x] **A) It invokes a table-valued function or correlated subquery for each row of an outer table, returning only rows where the inner expression produces results (like an INNER JOIN)**
- [ ] **B) It creates a Cartesian product between two physical tables**
- [ ] **C) It applies a mathematical matrix transform**
- [ ] **D) It converts rows to JSON**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CROSS APPLY evaluates a right-side table-valued expression (such as a TVF or correlated subquery) for each row of the left table and returns matching combined rows, analogous to an INNER JOIN.

</details>

---

### Question 369

How does OUTER APPLY differ from CROSS APPLY?  

- [x] **A) OUTER APPLY preserves all rows from the left table even if the right-side expression produces no rows (returning NULLs, like a LEFT OUTER JOIN)**
- [ ] **B) OUTER APPLY only returns non-matching rows**
- [ ] **C) OUTER APPLY cannot take arguments**
- [ ] **D) OUTER APPLY runs in parallel**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
OUTER APPLY behaves like a LEFT OUTER JOIN: it preserves left-side rows even when the right-side table expression returns an empty set, supplying NULLs for right-side columns.

</details>

---

### Question 370

Why does UNION ALL generally deliver higher performance than UNION?  

- [x] **A) Because it bypasses the expensive sorting and hashing operations required to identify and eliminate duplicate rows**
- [ ] **B) Because UNION ALL uses uncommitted read isolation**
- [ ] **C) Because UNION ALL compresses the data**
- [ ] **D) Because UNION ALL runs on the GPU**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UNION requires a sort or hash distinct operation in the execution plan to detect duplicate rows. UNION ALL omits this step, streaming rows directly.

</details>

---

### Question 371

In standard T-SQL operator precedence, which set operator has HIGHER precedence when combining multiple queries without parentheses?  

- [x] **A) INTERSECT has higher precedence than UNION and EXCEPT**
- [ ] **B) UNION has higher precedence than INTERSECT**
- [ ] **C) EXCEPT has higher precedence than all others**
- [ ] **D) All set operators have identical precedence from left to right**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
INTERSECT precedes UNION and EXCEPT in precedence. 'Q1 UNION Q2 INTERSECT Q3' evaluates 'Q2 INTERSECT Q3' first, then unions with Q1.

</details>

---

### Question 372

Do the corresponding column names in queries combined by UNION need to match?  

- [x] **A) No, only the data types must be compatible; column names in the output are taken solely from the first query**
- [ ] **B) Yes, column names must be identical character for character**
- [ ] **C) Column names are replaced by numbers**
- [ ] **D) Aliases cannot be used**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Column names do not need to match across queries in a set operation. The column names of the final result set are determined by the first SELECT query.

</details>

---

### Question 373

How can you pass columns from an outer table as arguments into an Inline Table-Valued Function?  

- [x] **A) Using the CROSS APPLY or OUTER APPLY operator**
- [ ] **B) Using an INNER JOIN with ON clause**
- [ ] **C) Using a subquery in GROUP BY**
- [ ] **D) Using UNION ALL**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Standard JOINs cannot pass left-table columns as parameters into right-side functions. The APPLY operator (CROSS/OUTER APPLY) evaluates the function per outer row with parameters.

</details>

---

### Question 374

What happens to rows from the left table when using CROSS APPLY if the right-side table expression returns zero rows?  

- [x] **A) The left-table row is eliminated from the result set (like an INNER JOIN)**
- [ ] **B) The left-table row is returned with NULLs**
- [ ] **C) An error is raised**
- [ ] **D) The query restarts**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CROSS APPLY drops left rows that produce 0 right rows. To preserve left rows with NULLs when the right side is empty, use OUTER APPLY.

</details>

---

### Question 375

Why does UNION ALL not perform any sorting or duplicate removal?  

- [x] **A) By design, UNION ALL is a pure concatenation operation that streams input sets directly into the result**
- [ ] **B) Because UNION ALL only accepts sorted tables**
- [ ] **C) Because UNION ALL runs in single-user mode**
- [ ] **D) Because UNION ALL uses clustered indexes only**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UNION ALL concatenates streams without de-duplication, avoiding memory and CPU costs associated with Distinct Sort or Hash Aggregate operators.

</details>

---


## Module 13: Window Functions

### Question 376

What clause is required to define a window for window functions in T-SQL?  

- [ ] **A) GROUP BY**
- [x] **B) OVER()**
- [ ] **C) WINDOW()**
- [ ] **D) PARTITION()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
The OVER() clause defines the window or subset of rows over which the window function (ranking, offset, or aggregate) operates.

</details>

---

### Question 377

What does the PARTITION BY subclause inside the OVER() clause do?  

- [x] **A) Divides the query result set into independent partitions where the window function calculates independently for each partition**
- [ ] **B) Physically divides the hard disk storage**
- [ ] **C) Filters rows from the query**
- [ ] **D) Sorts the overall query output**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
PARTITION BY divides rows into groups or partitions. The window function calculates over each partition separately and resets for the next partition.

</details>

---

### Question 378

What is the difference between RANK() and DENSE_RANK() when duplicate values occur in the order?  

- [x] **A) RANK() skips subsequent rank numbers after ties (e.g. 1, 2, 2, 4); DENSE_RANK() does not skip numbers (e.g. 1, 2, 2, 3)**
- [ ] **B) DENSE_RANK() skips numbers, whereas RANK() does not**
- [ ] **C) RANK() returns decimal values**
- [ ] **D) DENSE_RANK() only works with dates**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
RANK() leaves gaps in ranking numbers after ties (1, 2, 2, 4). DENSE_RANK() assigns consecutive rankings without any gaps (1, 2, 2, 3).

</details>

---

### Question 379

Which window function assigns a sequential unique integer starting at 1 to each row within a partition?  

- [x] **A) ROW_NUMBER()**
- [ ] **B) RANK()**
- [ ] **C) NTILE()**
- [ ] **D) DENSE_RANK()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ROW_NUMBER() returns an incrementing unique integer starting at 1 for each row within the partition according to the specified ORDER BY.

</details>

---

### Question 380

What does NTILE(4) OVER (ORDER BY Salary DESC) do to a result set of 100 employees?  

- [ ] **A) Selects only the top 4 employees**
- [x] **B) Divides the 100 rows into 4 equal quartiles of 25 rows each, assigning bucket numbers 1 through 4**
- [ ] **C) Multiplies salaries by 4**
- [ ] **D) Skips every 4th row**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
NTILE(n) distributes sorted rows across 'n' roughly equal groups (buckets), returning the bucket number (1, 2, 3, 4) for each row.

</details>

---

### Question 381

Which offset window function accesses data from a subsequent row in the same result set without using a self-join?  

- [ ] **A) LAG()**
- [x] **B) LEAD()**
- [ ] **C) FIRST_VALUE()**
- [ ] **D) NEXT_VALUE()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
LEAD(column, offset) accesses data from a subsequent row at a specified physical offset ahead of the current row. LAG() accesses data from a preceding row.

</details>

---

### Question 382

What does the default framing clause 'ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW' compute when used with SUM(Amount) OVER (ORDER BY OrderDate)?  

- [x] **A) A running cumulative total of Amount ordered by OrderDate**
- [ ] **B) The total sum of the entire table on every row**
- [ ] **C) Only the sum of the first row**
- [ ] **D) The average amount**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
'UNBOUNDED PRECEDING AND CURRENT ROW' aggregates from the very start of the partition up to the current row, producing a cumulative running total.

</details>

---

### Question 383

Can window functions be placed directly inside a WHERE or HAVING clause?  

- [ ] **A) Yes, if prefixed with OVER**
- [x] **B) No, window functions are evaluated after WHERE and HAVING; to filter on them, wrap the query in a CTE or derived table**
- [ ] **C) Yes, in SQL Server 2016+**
- [ ] **D) Only ROW_NUMBER() can be used in WHERE**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In logical query processing, window functions evaluate during the SELECT phase (after WHERE and HAVING). To filter on a window function value, place it in a CTE or derived table first.

</details>

---

### Question 384

Which window function returns the value of an expression from the very first row of the window frame?  

- [x] **A) FIRST_VALUE()**
- [ ] **B) TOP_VALUE()**
- [ ] **C) HEAD()**
- [ ] **D) LEAD_FIRST()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
FIRST_VALUE(expression) returns the value of the specified expression evaluated against the first row in the window frame.

</details>

---

### Question 385

What is the key difference between the ROWS frame specification and the RANGE frame specification?  

- [x] **A) ROWS specifies frame boundaries by exact physical row offsets; RANGE specifies frame boundaries by logical value differences**
- [ ] **B) RANGE cannot use UNBOUNDED PRECEDING**
- [ ] **C) ROWS only works with numbers**
- [ ] **D) There is no difference**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ROWS specifies framing based on a physical count of rows (e.g. 1 PRECEDING). RANGE specifies framing based on logical value equality in the ordering column.

</details>

---

### Question 386

What common trap occurs when using LAST_VALUE(column) OVER (ORDER BY col) without an explicit ROWS framing clause?  

- [x] **A) The default frame is 'RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW', meaning LAST_VALUE returns the current row value rather than the last row in the partition**
- [ ] **B) It throws a syntax error**
- [ ] **C) It returns NULL always**
- [ ] **D) It reverses sort order**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The default frame stops at CURRENT ROW. Therefore, LAST_VALUE() evaluates against the window up to the current row, returning the current row value. Adding 'ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING' fixes it.

</details>

---

### Question 387

What does the CUME_DIST() window function calculate?  

- [x] **A) The cumulative distribution of a value within a partition, calculating the relative position of a value as a number between 0 and 1**
- [ ] **B) The distance between two GPS coordinates**
- [ ] **C) The count of duplicate values**
- [ ] **D) The geometric mean**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CUME_DIST() computes the relative rank of a row within a partition, defined as (number of rows with values <= current row) / (total rows in partition).

</details>

---

### Question 388

Can multiple window functions in the same SELECT query have different PARTITION BY and ORDER BY definitions?  

- [x] **A) Yes, each window function can have its own independent OVER() clause specification**
- [ ] **B) No, all window functions in a query must share the exact same OVER definition**
- [ ] **C) Only if they use the same aggregation**
- [ ] **D) Only up to 2 window functions per query**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Every window function specifies its own independent OVER() clause, allowing multiple ranking, offset, and aggregate windows to coexist in the same SELECT list.

</details>

---

### Question 389

What does an empty OVER() clause (e.g. COUNT(*) OVER ()) compute?  

- [x] **A) Aggregates over the entire query result set as a single window without collapsing rows**
- [ ] **B) Returns 0**
- [ ] **C) Causes a syntax error**
- [ ] **D) Groups rows by primary key**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
OVER() with empty parentheses treats the entire result set as a single partition with no specific order, returning the overall table aggregate alongside each detail row.

</details>

---

### Question 390

What does the third argument in LAG(col, offset, default_value) specify?  

- [x] **A) The replacement value to return if the offset falls outside the partition boundary instead of NULL**
- [ ] **B) The maximum recursion depth**
- [ ] **C) The column sorting order**
- [ ] **D) The frame boundary**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
LAG(column, offset, default_value) returns 'default_value' (e.g. 0) when the offset references a non-existent row before the partition start, avoiding NULLs.

</details>

---


## Module 14: Pivoting & Grouping Sets

### Question 391

What does the T-SQL PIVOT relational operator do?  

- [x] **A) Rotates unique values from rows into multiple columns while aggregating remaining column values**
- [ ] **B) Rotates columns into rows**
- [ ] **C) Sorts rows diagonally**
- [ ] **D) Encrypts column headers**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The PIVOT operator rotates row-based data into column-based format, turning unique values from one column into multiple output columns with aggregations.

</details>

---

### Question 392

What does the UNPIVOT operator do?  

- [x] **A) Rotates columns of a table into rows**
- [ ] **B) Deletes pivoted tables**
- [ ] **C) Converts numeric columns to strings**
- [ ] **D) Merges duplicate rows**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UNPIVOT is the reverse of PIVOT: it transforms column-oriented data into row-oriented pairs (attribute and value columns).

</details>

---

### Question 393

Why should you use a derived table or CTE containing only the necessary columns as input to a PIVOT operator?  

- [x] **A) Any column not specified in the aggregate or PIVOT IN clause is implicitly treated as a grouping column**
- [ ] **B) PIVOT cannot accept physical table names**
- [ ] **C) To avoid locking the entire database**
- [ ] **D) To bypass syntax checking**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
PIVOT implicitly groups by every column present in the input table expression that is not explicitly used as the pivoted column or the aggregated column.

</details>

---

### Question 394

What does GROUP BY GROUPING SETS((Year, Month), (Year), ()) produce?  

- [x] **A) Multiple distinct aggregations in a single query: subtotals by Year & Month, subtotals by Year, and a grand total across all rows**
- [ ] **B) Three separate physical tables**
- [ ] **C) An error because empty parentheses () are invalid**
- [ ] **D) A cross join of Year and Month**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GROUPING SETS allows defining multiple group combinations in one query. () represents the empty grouping set (the grand total).

</details>

---

### Question 395

What grouping sets does 'GROUP BY ROLLUP(Year, Quarter, Month)' generate?  

- [x] **A) Hierarchical aggregations: (Year, Quarter, Month), (Year, Quarter), (Year), and () grand total**
- [ ] **B) All possible permutations of the three columns**
- [ ] **C) Only the grand total ()**
- [ ] **D) Only (Year, Quarter, Month)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ROLLUP creates hierarchical grouping sets, progressively stripping columns from right to left: (Year, Quarter, Month), (Year, Quarter), (Year), and ().

</details>

---

### Question 396

What grouping sets does 'GROUP BY CUBE(Department, Location)' generate?  

- [x] **A) (Department, Location), (Department), (Location), and () grand total (all 2^N combinations)**
- [ ] **B) Only (Department, Location)**
- [ ] **C) Only the grand total**
- [ ] **D) 3 combinations**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
CUBE produces all 2^N multidimensional combinations of the specified columns: both columns together, each column independently, and the grand total.

</details>

---

### Question 397

What function differentiates whether a NULL in a ROLLUP/CUBE result represents an original NULL data value or a subtotal row generated by the grouping operation?  

- [x] **A) GROUPING() or GROUPING_ID()**
- [ ] **B) ISNULL()**
- [ ] **C) COALESCE()**
- [ ] **D) NULLIF()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The GROUPING(column) function returns 1 if the column is currently aggregated (acting as a subtotal) and 0 if the row represents a regular data row.

</details>

---

### Question 398

In a PIVOT operator, what must be specified inside the 'IN (...)' clause?  

- [x] **A) The exact list of hardcoded values that will become the new column names**
- [ ] **B) A SELECT query returning column names**
- [ ] **C) A table alias**
- [ ] **D) A data type**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Standard static PIVOT syntax requires an explicit, hardcoded comma-separated list of values in the IN clause: FOR PivotCol IN ([2022], [2023], [2024]).

</details>

---

### Question 399

How can you pivot on dynamic values that are not known until runtime?  

- [x] **A) Construct and execute dynamic SQL using sp_executesql**
- [ ] **B) Use the DYNAMIC PIVOT keyword**
- [ ] **C) Use an index hint**
- [ ] **D) Static PIVOT automatically discovers dynamic columns**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
To pivot on dynamic columns, you must query distinct values from the table, concatenate them into a comma-delimited string, construct a dynamic SQL query, and execute it with sp_executesql.

</details>

---

### Question 400

What does GROUPING_ID(col1, col2) return?  

- [x] **A) An integer bitmap where each bit indicates whether the corresponding column was aggregated in that grouping set**
- [ ] **B) The identity value of the group**
- [ ] **C) The count of rows in the group**
- [ ] **D) A unique GUID**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GROUPING_ID computes an integer bitmask (e.g. 0, 1, 2, 3) representing the combination of columns aggregated, simplifying filtering of specific subtotal levels.

</details>

---

### Question 401

How does the UNPIVOT operator handle NULL values in the rotated columns by default?  

- [x] **A) UNPIVOT automatically eliminates rows where the unpivoted value is NULL**
- [ ] **B) UNPIVOT converts NULLs to zeros**
- [ ] **C) UNPIVOT throws a runtime error on NULLs**
- [ ] **D) UNPIVOT creates empty strings**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
UNPIVOT filters out rows with NULL values in source columns by default, returning only rows corresponding to existing values.

</details>

---

### Question 402

What is the key advantage of GROUP BY GROUPING SETS over multiple UNION ALL queries?  

- [x] **A) SQL Server scans the base table only once and computes multiple aggregation levels efficiently in a single pass**
- [ ] **B) GROUPING SETS allows unindexed queries to run faster**
- [ ] **C) GROUPING SETS automatically creates permanent tables**
- [ ] **D) GROUPING SETS can only be used in SSIS**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Instead of scanning the underlying table multiple times with UNION ALL, GROUPING SETS allows SQL Server to optimize data access and compute subtotals in a single pass.

</details>

---

### Question 403

How many grouping sets are produced by 'GROUP BY ROLLUP(A, B, C)' vs 'GROUP BY CUBE(A, B, C)'?  

- [x] **A) ROLLUP produces 4 grouping sets (N + 1); CUBE produces 8 grouping sets (2^N)**
- [ ] **B) ROLLUP produces 8; CUBE produces 4**
- [ ] **C) Both produce 8**
- [ ] **D) Both produce 3**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ROLLUP produces N + 1 hierarchical levels: (A,B,C), (A,B), (A), (). CUBE produces all 2^N combinations: 2^3 = 8 multidimensional combinations.

</details>

---

### Question 404

What does GROUPING_ID(col1, col2) return for a grand total row where both col1 and col2 are aggregated?  

- [x] **A) 3 (binary 11)**
- [ ] **B) 0 (binary 00)**
- [ ] **C) 1**
- [ ] **D) -1**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GROUPING_ID sets bit 1 for col1 and bit 0 for col2. For the grand total row, both are aggregated (1 and 1), giving binary 11 = decimal 3.

</details>

---

### Question 405

Why must dynamic SQL be used to construct pivot queries when pivoted column names depend on database data?  

- [x] **A) Static PIVOT requires column names to be hardcoded in the IN clause at compile time**
- [ ] **B) PIVOT does not support character data**
- [ ] **C) Dynamic SQL runs on the client**
- [ ] **D) Static PIVOT is deprecated**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Static PIVOT syntax strictly requires literal column headers inside the IN clause. When headers vary dynamically (e.g. dynamic years or months), dynamic SQL must construct the query string.

</details>

---


## Module 15: Executing Stored Procedures

### Question 406

What command is used to execute a stored procedure in T-SQL?  

- [ ] **A) CALL**
- [x] **B) EXECUTE (or EXEC)**
- [ ] **C) RUN**
- [ ] **D) START**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
EXECUTE or EXEC is the T-SQL statement used to execute a stored procedure, scalar user-defined function, or dynamic SQL string.

</details>

---

### Question 407

How do you define a parameter in a stored procedure that returns a value back to the caller?  

- [x] **A) @param INT OUTPUT**
- [ ] **B) @param INT RETURN**
- [ ] **C) @param INT OUT_ONLY**
- [ ] **D) @param INT AS REF**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The OUTPUT keyword specifies that the parameter can return a value to the calling program. The caller must also specify OUTPUT when executing the procedure.

</details>

---

### Question 408

What does the RETURN statement inside a stored procedure return to the caller?  

- [x] **A) A single integer status/return code (typically 0 for success, non-zero for error)**
- [ ] **B) A complete table result set**
- [ ] **C) A string message**
- [ ] **D) A GUID**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
The RETURN statement exits the procedure unconditionally and returns an integer return code (by convention, 0 signifies success; non-zero indicates an error).

</details>

---

### Question 409

Which system stored procedure is recommended for executing dynamic SQL statements with parameterization?  

- [x] **A) sp_executesql**
- [ ] **B) xp_cmdshell**
- [ ] **C) sp_runquery**
- [ ] **D) sp_dynamic**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
sp_executesql supports parameterized dynamic SQL execution, which promotes query execution plan reuse in the cache and protects against SQL injection.

</details>

---

### Question 410

What is the primary danger of concatenating user input directly into dynamic SQL executed via EXEC(@sql)?  

- [x] **A) SQL Injection vulnerability**
- [ ] **B) Memory buffer overflow in the network card**
- [ ] **C) High disk fragmentation**
- [ ] **D) It converts numbers to text**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
String concatenation allows attackers to inject malicious T-SQL code. Dynamic SQL should always use parameterized queries with sp_executesql.

</details>

---

### Question 411

What is an advantage of Stored Procedures over ad-hoc T-SQL queries?  

- [x] **A) Security encapsulation (granting EXEC permissions without direct table access), reduced network traffic, and cached execution plans**
- [ ] **B) Stored procedures never recompile**
- [ ] **C) Stored procedures eliminate the need for backups**
- [ ] **D) Stored procedures bypass database constraints**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Stored procedures encapsulate business logic, permit granular security access without granting table-level SELECT/INSERT rights, reduce network bandwidth, and reuse compiled plans.

</details>

---

### Question 412

What clause on CREATE PROCEDURE forces SQL Server to generate a fresh execution plan every time the procedure is executed?  

- [x] **A) WITH RECOMPILE**
- [ ] **B) WITH FRESH_PLAN**
- [ ] **C) WITH OPTIMIZE**
- [ ] **D) WITH NEW_EXEC**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
WITH RECOMPILE causes SQL Server to discard the existing execution plan and compile a new plan each time the procedure runs, useful when parameters vary drastically.

</details>

---

### Question 413

How can default values be defined for stored procedure parameters?  

- [x] **A) In the parameter declaration: @City NVARCHAR(30) = 'London'**
- [ ] **B) In the body using DEFAULT @City = 'London'**
- [ ] **C) Stored procedures cannot have default parameter values**
- [ ] **D) In the caller's EXEC statement**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Default parameter values are declared in the procedure header: '@ParamName DataType = DefaultValue'. If the caller omits that parameter, the default is used.

</details>

---

### Question 414

What command passes parameters by name to a stored procedure?  

- [x] **A) EXEC GetOrders @CustID = 5, @Year = 2024;**
- [ ] **B) EXEC GetOrders(5, 2024);**
- [ ] **C) EXEC GetOrders @CustID -> 5;**
- [ ] **D) EXEC GetOrders :CustID = 5;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Parameters can be passed by name using '@ParameterName = value', allowing parameters to be supplied in any order and optional parameters to be skipped.

</details>

---

### Question 415

Which system procedure displays the text definition of an unencrypted stored procedure or view?  

- [x] **A) sp_helptext**
- [ ] **B) sp_showcode**
- [ ] **C) sp_viewtext**
- [ ] **D) sp_inspect**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
sp_helptext 'ProcedureName' displays the definition text of an unencrypted stored procedure, view, function, or trigger.

</details>

---

### Question 416

What is 'Parameter Sniffing' in SQL Server stored procedures?  

- [x] **A) SQL Server inspects parameter values passed during the initial compilation to create an execution plan optimized for those specific values**
- [ ] **B) A network security vulnerability that intercepts passwords**
- [ ] **C) Reading parameters from the Windows registry**
- [ ] **D) Validating parameter data types**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
When a procedure compiles, SQL Server 'sniffs' the current parameter values to estimate cardinality and build a plan. If subsequent calls use drastically different values, performance can degrade.

</details>

---

### Question 417

What query hint instructs SQL Server to compile a stored procedure query without parameter sniffing, using average distribution statistics?  

- [x] **A) OPTION (OPTIMIZE FOR UNKNOWN)**
- [ ] **B) OPTION (FAST 10)**
- [ ] **C) OPTION (IGNORE PARAMETERS)**
- [ ] **D) OPTION (NO SNIFF)**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
OPTION (OPTIMIZE FOR UNKNOWN) directs the optimizer to use statistical density vector averages rather than sniffing the runtime parameter values, providing a stable, average plan.

</details>

---

### Question 418

What does 'SET NOCOUNT ON;' do at the beginning of a stored procedure?  

- [x] **A) Suppresses the '(N rows affected)' informational messages sent to the client after each DML statement, reducing network traffic**
- [ ] **B) Prevents counting rows in queries**
- [ ] **C) Disables transaction logs**
- [ ] **D) Cancels long-running queries**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SET NOCOUNT ON stops the transmission of DONE_IN_PROC tokens ('X rows affected') to the client for each statement, reducing network latency and preventing client driver parsing issues.

</details>

---

### Question 419

What keyword is required when passing a Table-Valued Parameter (TVP) into a stored procedure?  

- [x] **A) READONLY**
- [ ] **B) OUTPUT**
- [ ] **C) CONSTANT**
- [ ] **D) STATIC**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Table-valued parameters must be declared with the READONLY modifier in the stored procedure signature; modifications (INSERT, UPDATE, DELETE) are not permitted on TVPs.

</details>

---

### Question 420

What is the benefit of sp_executesql over EXEC(@sql) regarding query execution plan reuse?  

- [x] **A) Parameterized statements in sp_executesql permit execution plans to be cached and reused across different parameter values, reducing compilation overhead**
- [ ] **B) sp_executesql runs on background threads**
- [ ] **C) EXEC(@sql) is deprecated**
- [ ] **D) sp_executesql bypasses user permissions**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
sp_executesql separates the query template from parameter values. SQL Server caches the parameterized plan and reuses it for different arguments, avoiding recompilations.

</details>

---


## Module 16: Programming with T-SQL

### Question 421

What does the GO command signify in SSMS and SQLCMD?  

- [x] **A) It is not a T-SQL keyword; it is a client-side command separator signaling the end of a batch of T-SQL statements**
- [ ] **B) It begins a transaction**
- [ ] **C) It commits data to disk immediately**
- [ ] **D) It compiles the database**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
GO is not an engine T-SQL statement. It is a utility command recognized by SSMS, sqlcmd, and PowerShell to divide T-SQL scripts into batches sent separately to the server.

</details>

---

### Question 422

What is the lifetime and scope of a T-SQL local variable declared with DECLARE @VarName INT?  

- [ ] **A) The entire database session**
- [x] **B) Limited to the batch or stored procedure in which it is declared**
- [ ] **C) Global across all connections**
- [ ] **D) Persisted until server reboot**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Local variables are scoped strictly to the batch, stored procedure, or block in which they are declared. Once the batch ends (e.g. at a GO command), the variable ceases to exist.

</details>

---

### Question 423

What initial value does a declared local variable hold before explicit assignment?  

- [ ] **A) 0**
- [x] **B) NULL**
- [ ] **C) An empty string ''**
- [ ] **D) Undefined error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In T-SQL, all local variables are initialized to NULL when declared, unless assigned an inline default value (e.g. DECLARE @x INT = 10).

</details>

---

### Question 424

What looping construct is supported natively in T-SQL for programmatic control of flow?  

- [ ] **A) FOR loop**
- [x] **B) WHILE loop**
- [ ] **C) DO...UNTIL loop**
- [ ] **D) FOREACH loop**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
T-SQL provides the WHILE statement to repeat statement execution while a boolean condition remains true. (BREAK and CONTINUE control execution flow inside the loop).

</details>

---

### Question 425

What do the BREAK and CONTINUE statements do inside a WHILE loop?  

- [x] **A) BREAK exits the loop entirely; CONTINUE skips the remaining statements and starts the next iteration**
- [ ] **B) CONTINUE exits the loop; BREAK restarts it**
- [ ] **C) BREAK deletes the loop counter**
- [ ] **D) Both exit the database connection**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
BREAK exits the innermost WHILE loop immediately. CONTINUE skips the remaining statements in the current loop iteration and re-evaluates the WHILE condition.

</details>

---

### Question 426

What is required if an IF or ELSE branch needs to execute multiple T-SQL statements?  

- [x] **A) Enclosing the statements in a BEGIN ... END block**
- [ ] **B) Enclosing the statements in parentheses (...)**
- [ ] **C) Adding a GO statement after each line**
- [ ] **D) Using curly braces {...}**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
BEGIN and END enclose a block of multiple T-SQL statements so they execute as a single programmatic unit under an IF, ELSE, or WHILE clause.

</details>

---

### Question 427

What is a Synonym in SQL Server?  

- [x] **A) An alternative single-part alias name for a database object (table, view, stored proc) that abstracts its physical location or schema**
- [ ] **B) A duplicate copy of a table**
- [ ] **C) A word with similar meaning in full-text search**
- [ ] **D) An encrypted backup**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A Synonym (CREATE SYNONYM SynName FOR Server.Database.Schema.Object) provides an abstraction layer so code references a single alias rather than hardcoded four-part object names.

</details>

---

### Question 428

What is the key danger when using 'SELECT @var = Column FROM Table' if the query returns multiple rows?  

- [ ] **A) A runtime error is raised immediately**
- [x] **B) The variable silently retains the value from the last processed row, masking a potential logic bug**
- [ ] **C) The variable is set to NULL**
- [ ] **D) The table is dropped**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Unlike SET @var = (subquery) which fails if multiple rows are returned, 'SELECT @var = col' does not error; it repeatedly overwrites @var, silently leaving it with the value of the last processed row.

</details>

---

### Question 429

How do you define a Table Variable in T-SQL?  

- [x] **A) DECLARE @MyTable TABLE (ID INT, Name VARCHAR(50));**
- [ ] **B) CREATE TABLE #MyTable (ID INT);**
- [ ] **C) VAR Table MyTable = new Table();**
- [ ] **D) DECLARE TABLE @MyTable;**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Table variables are declared using 'DECLARE @VariableName TABLE (...)'. They exist in tempdb and are scoped to the executing batch, transaction, or stored procedure.

</details>

---

### Question 430

What statement pauses the execution of a batch or stored procedure for a specified duration or until a specific time of day?  

- [ ] **A) SLEEP**
- [x] **B) WAITFOR (e.g. WAITFOR DELAY '00:00:05' or WAITFOR TIME '23:00:00')**
- [ ] **C) PAUSE**
- [ ] **D) HALT**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
WAITFOR blocks batch execution either for a specific duration ('WAITFOR DELAY 'hh:mm:ss'') or until an exact time ('WAITFOR TIME 'hh:mm:ss'').

</details>

---

### Question 431

What does the @@ROWCOUNT system function return?  

- [x] **A) The number of rows affected by the statement immediately preceding it**
- [ ] **B) The total rows in the database**
- [ ] **C) The row count of the current table**
- [ ] **D) The active session count**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
@@ROWCOUNT returns the number of rows affected or returned by the most recent statement. It resets after every statement (including IF tests), so it must be captured immediately.

</details>

---

### Question 432

What does the system function @@TRANCOUNT report?  

- [x] **A) The number of active BEGIN TRANSACTION statements issued in the current session**
- [ ] **B) The total transactions committed since server startup**
- [ ] **C) The transaction log size**
- [ ] **D) The count of open tables**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
@@TRANCOUNT increments by 1 with each BEGIN TRAN. COMMIT decrements it by 1. A ROLLBACK statement unconditionally resets @@TRANCOUNT to 0, rolling back all nested levels.

</details>

---

### Question 433

What happens when a ROLLBACK TRANSACTION statement is executed inside a nested transaction (where @@TRANCOUNT > 1)?  

- [x] **A) It rolls back all inner and outer transactions completely and resets @@TRANCOUNT to 0**
- [ ] **B) It rolls back only the innermost transaction and decrements @@TRANCOUNT by 1**
- [ ] **C) It commits the outer transaction**
- [ ] **D) A syntax error is raised**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SQL Server does not support true autonomous nested transactions. Any ROLLBACK without a savepoint rolls back the entire transaction stack down to @@TRANCOUNT = 0.

</details>

---

### Question 434

What statement defines a branch label in T-SQL for unconditional jumps using GOTO?  

- [x] **A) LabelName:**
- [ ] **B) GOTO LabelName**
- [ ] **C) #LabelName**
- [ ] **D) LABEL LabelName**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
A label is defined by an identifier followed by a colon (e.g. 'Cleanup:'). 'GOTO Cleanup;' unconditionally jumps execution to that label.

</details>

---

### Question 435

Why should table variables (@table) generally be avoided for multi-million row datasets?  

- [x] **A) Table variables lack column distribution statistics and histograms, leading the query optimizer to assume 1 row (or fixed low count) and select poor query plans**
- [ ] **B) Table variables cannot be joined**
- [ ] **C) Table variables do not support indexes**
- [ ] **D) Table variables crash the server**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Table variables do not maintain statistics. For large datasets, temporary tables (#tables) are preferred because they support statistics, parallel plans, and dynamic re-indexing.

</details>

---


## Module 17: Implementing Error Handling

### Question 436

What construct provides structured exception handling in T-SQL?  

- [x] **A) BEGIN TRY ... END TRY BEGIN CATCH ... END CATCH**
- [ ] **B) TRY ... EXCEPT**
- [ ] **C) ON ERROR GOTO**
- [ ] **D) CATCH ... FINALLY**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
SQL Server 2005+ supports structured exception handling using 'BEGIN TRY ... END TRY' followed immediately by 'BEGIN CATCH ... END CATCH'.

</details>

---

### Question 437

Which function returns the human-readable text description of the error that caused a CATCH block to execute?  

- [x] **A) ERROR_MESSAGE()**
- [ ] **B) ERROR_NUMBER()**
- [ ] **C) ERROR_TEXT()**
- [ ] **D) @@ERROR**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ERROR_MESSAGE() returns the complete message text of the error that triggered the CATCH block.

</details>

---

### Question 438

What function returns the severity level of the error caught in a CATCH block?  

- [ ] **A) ERROR_LEVEL()**
- [x] **B) ERROR_SEVERITY()**
- [ ] **C) ERROR_STATUS()**
- [ ] **D) ERROR_GRADE()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
ERROR_SEVERITY() returns the severity level (0-25) of the error that caused the CATCH block to run.

</details>

---

### Question 439

What is the recommended modern statement for raising custom errors or re-throwing caught exceptions in SQL Server 2012+?  

- [ ] **A) RAISERROR**
- [x] **B) THROW**
- [ ] **C) ERROR**
- [ ] **D) ABORT**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
THROW is the ANSI-compliant modern statement. Inside a CATCH block, 'THROW;' without parameters re-throws the original exception preserving details. Unlike RAISERROR, THROW always honors XACT_ABORT.

</details>

---

### Question 440

What happens if a statement preceding a THROW statement is not terminated with a semicolon?  

- [ ] **A) The THROW statement executes normally**
- [x] **B) A syntax error is raised because the statement before THROW must end with a semicolon**
- [ ] **C) The error is written to tempdb**
- [ ] **D) The server crashes**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
In T-SQL, the statement immediately preceding a THROW statement MUST terminate with a semicolon (;), otherwise a parsing syntax error occurs.

</details>

---

### Question 441

What does the function XACT_STATE() return?  

- [x] **A) 1 if an active committable transaction exists; -1 if an uncommittable 'doomed' transaction exists; 0 if no transaction is active**
- [ ] **B) The elapsed time of the current transaction**
- [ ] **C) The transaction log file size**
- [ ] **D) The session ID**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
XACT_STATE() reports the status of the current user transaction: 1 (valid and committable), -1 (uncommittable; must be rolled back), or 0 (no active transaction).

</details>

---

### Question 442

What is the behavior of SET XACT_ABORT ON?  

- [x] **A) SQL Server automatically rolls back the entire transaction and terminates batch execution if any run-time error occurs**
- [ ] **B) Ignores all errors and continues execution**
- [ ] **C) Commits transactions automatically**
- [ ] **D) Suppresses all error messages**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
When SET XACT_ABORT is ON, any statement that raises a runtime error causes the entire transaction to be terminated and rolled back immediately.

</details>

---

### Question 443

What system variable holds the error number of the most recently executed statement prior to SQL Server 2005?  

- [x] **A) @@ERROR**
- [ ] **B) @@ERR_NUM**
- [ ] **C) @@STATUS**
- [ ] **D) @@EXCEPTION**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
@@ERROR returns the error number for the last statement executed. Because it resets to 0 after any successful statement, it had to be captured immediately into a variable.

</details>

---

### Question 444

Can compile-time syntax errors and object-resolution errors be caught by a TRY...CATCH block in the same batch?  

- [ ] **A) Yes, all errors are caught**
- [x] **B) No, syntax errors and deferred name resolution errors occur at compile time before the batch starts executing**
- [ ] **C) Only if XACT_ABORT is OFF**
- [ ] **D) Only if inside a stored procedure**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `B`

**Explanation:**  
Compile-time syntax errors and statement-level recompilation errors prevent the batch from executing at all, so they cannot be trapped by a TRY...CATCH block in the same batch.

</details>

---

### Question 445

Which function returns the line number within the routine or batch where the error occurred?  

- [x] **A) ERROR_LINE()**
- [ ] **B) ERROR_ROW()**
- [ ] **C) LINE_NUMBER()**
- [ ] **D) ERROR_POSITION()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ERROR_LINE() returns the exact source line number where the exception occurred that caused the CATCH block to execute.

</details>

---

### Question 446

What is SQL Server error number 1205?  

- [x] **A) Transaction was deadlocked on lock resources with another process and has been chosen as the deadlock victim**
- [ ] **B) Division by zero error**
- [ ] **C) Primary key violation error**
- [ ] **D) Syntax error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
Error 1205 is the classic SQL Server deadlock error: 'Transaction (Process ID ...) was deadlocked on lock resources with another process and has been chosen as the deadlock victim. Rerun the transaction.'

</details>

---

### Question 447

What must you do if XACT_STATE() returns -1 inside a CATCH block?  

- [x] **A) The transaction is uncommittable (doomed) and MUST be rolled back; attempting to commit raises an error**
- [ ] **B) The transaction can be committed normally**
- [ ] **C) Execute another query to fix the error**
- [ ] **D) Restart SQL Server**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
XACT_STATE() = -1 indicates a doomed, uncommittable transaction caused by an error under XACT_ABORT ON. The only permissible action is ROLLBACK TRANSACTION.

</details>

---

### Question 448

What does the WITH NOWAIT clause do when raising a message with RAISERROR?  

- [x] **A) Sends the message immediately to the client application without waiting for output buffers to fill**
- [ ] **B) Terminates the query immediately**
- [ ] **C) Disables transaction logging**
- [ ] **D) Halts the operating system**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
RAISERROR ('message', 0, 1) WITH NOWAIT flushes the message immediately to the client console without buffering.

</details>

---

### Question 449

Which system stored procedure registers custom user-defined error messages in the sys.messages catalog for use with RAISERROR or THROW?  

- [x] **A) sp_addmessage**
- [ ] **B) sp_register_error**
- [ ] **C) sp_newmessage**
- [ ] **D) sp_custom_error**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
sp_addmessage adds custom error messages (with message numbers >= 50001) to sys.messages, supporting multi-language error strings.

</details>

---

### Question 450

Which function inside a CATCH block returns the name of the stored procedure or trigger where the error occurred?  

- [x] **A) ERROR_PROCEDURE()**
- [ ] **B) ERROR_ROUTINE()**
- [ ] **C) ERROR_SOURCE()**
- [ ] **D) ERROR_ORIGIN()**

<details>
<summary><b>View Answer & Explanation</b></summary>

**Correct Answer:** `A`

**Explanation:**  
ERROR_PROCEDURE() returns the name of the stored procedure or trigger in which the error occurred, or NULL if the error happened in an ad-hoc batch.

</details>

---

