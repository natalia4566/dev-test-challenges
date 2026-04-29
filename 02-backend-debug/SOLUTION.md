## Bug — Missing await in GET /data
- File: server.js
- Issue: The async function was not awaited
- Root Cause: getDataFromDB() returns a Promise, not the actual data
- Impact: The endpoint returned a Promise instead of resolved data
- Fix: Added await when calling getDataFromDB()

---

## Bug — Wrong field returned in response
- File: server.js
- Issue: The code returned data.result, but that field does not exist
- Root Cause: Incorrect property name used
- Impact: The response always returned undefined
- Fix: Changed data.result to data.value

---

## Bug — Incorrect HTTP status code on missing data
- File: server.js
- Issue: Returned 200 even when no data was found
- Root Cause: No distinction between success and error responses
- Impact: Misleading response for clients
- Fix: Changed status code to 404 when data is not found

---

## Bug — Missing input validation in POST /save
- File: server.js
- Issue: The endpoint accepted any input without validation
- Root Cause: No checks for required fields or types
- Impact: Invalid or empty data could be processed
- Fix: Added validation to check required fields and ensure correct types

---

## Bug — Memory issue due to unbounded array
- File: server.js
- Issue: requestLog kept growing with every request
- Root Cause: No limit or cleanup mechanism for stored data
- Impact: Memory usage could grow indefinitely under load
- Fix: Limited the size of the array and removed old entries

---

## Bug — Incorrect status code for POST success
- File: server.js
- Issue: Returned 200 for a successful creation
- Root Cause: Incorrect use of HTTP status codes
- Impact: Does not follow REST conventions
- Fix: Changed response status to 201

---

## Bug — Missing error handling middleware
- File: server.js
- Issue: No centralized error handling
- Root Cause: Missing Express error middleware
- Impact: Unhandled errors could crash the server or expose stack traces
- Fix: Added a global error handling middleware