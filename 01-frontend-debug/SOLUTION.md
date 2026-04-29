## Bug — Incorrect assignment in condition causing runtime error
- File: app.js
- Line: 9
- Issue: Assignment operator (=) used instead of comparison
- Root Cause: Attempted to reassign a constant variable (userId), causing a runtime error
- Impact: Prevented function execution and broke user interaction
- Fix: Replaced assignment with strict equality (===)

---

## Bug — Incorrect numeric validation logic
- File: app.js
- Line: 14
- Issue: Invalid condition used to validate positive ID
- Root Cause: Implicit type coercion and unclear boolean comparison
- Impact: Incorrect validation results due to unpredictable evaluation
- Fix: Converted userId to Number and used explicit comparison (<= 0)

---

## Bug — Missing async/await in API call
- File: api.js
- Line: 4-5
- Issue: fetch() result was not awaited
- Root Cause: fetch returns a Promise, not a resolved Response object
- Impact: Runtime error when calling response.json() on unresolved Promise
- Fix: Added await to fetch and response.json()

---

## Bug — Invalid input not validated
- File: app.js
- Line: 19
- Issue: Non-numeric IDs sent to API
- Root Cause: Missing input validation
- Impact: Generated failed API requests (404 errors)
- Fix: Added numeric validation using isNaN()

---

## Bug — Incorrect caching logic
- File: app.js
- Line: 20-24
- Issue: Same user returned for different IDs
- Root Cause: Cached value not tied to userId and never updated
- Impact: Displayed stale data regardless of user input
- Fix: Removed global cache and fetched data per request

---

## Bug — XSS vulnerability due to unsafe DOM injection
- File: app.js
- Line: 26
- Issue: Using innerHTML with external API data
- Root Cause: Direct injection into DOM without sanitization
- Impact: Potential execution of malicious scripts (Cross-Site Scripting attack)
- Fix: Replaced innerHTML with safe DOM manipulation using textContent
