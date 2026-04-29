Bug — Weak email validation
-File: script.py
-Issue: Email validation only checks for "@"
-Root Cause: No proper format validation was implemented
-Impact: Invalid emails like "frank@" or "@test" were accepted
-Fix: Replaced simple check with proper validation using regex

Bug — No deduplication of emails
-File: script.py
-Issue: Duplicate emails were counted multiple times
-Root Cause: No tracking of already processed emails
-Impact: Same user email increased counts incorrectly
-Fix: Added a set to store and skip duplicate emails

Bug — Wrong grouping logic
-File: script.py
-Issue: Grouping was done using full email instead of domain
-Root Cause: Did not extract domain from email
-Impact: Output used full emails as keys instead of domains
-Fix: Used email.split("@")[1] to group by domain

Bug — Incorrect counting logic
-Node: script.py
-Issue: Count was always set to 1
-Root Cause: Value was overwritten instead of incremented
-Impact: Domains never accumulated correct counts
-Fix: Used result.get(domain, 0) + 1 to properly accumulate values

Bug — Invalid emails still processed
-Node: script.py
-Issue: Invalid emails passed into logic before filtering
-Root Cause: Validation was not strict enough
-Impact: Corrupted data like "frank@" was included in output
-Fix: Invalid emails are now filtered out before processing