Bug — Deprecated expression for counting items
-Node: n8n workflow — If node
-Issue: Used $items().length which is no longer supported
-Root Cause: $items() was deprecated in newer versions of n8n
-Impact: The condition threw an error and the workflow could not continue
-Fix: Replaced with $input.all().length

Bug — Email field not passed between nodes
-Node: n8n workflow — Get row(s) in sheet node
-Issue: $json.email was undefined in downstream nodes
-Root Cause: Intermediate nodes (If, If1) were not forwarding the email field
-Impact: The duplicate check always failed because the lookup value was empty
-Fix: Referenced the source node directly using $('Code in JavaScript').item.json.email

Bug — Workflow stopped silently when no sheet results found
-Node: n8n workflow — Get row(s) in sheet node
-Issue: When no matching row was found, no items were passed to the next node
-Root Cause: n8n stops the flow by default when a query returns zero results
-Impact: New emails never reached the Append row node and were never saved
--Fix: Enabled "Always Output Data" in the node settings

Bug — Type mismatch in If1 condition
-Node: n8n workflow — If1 node
-Issue: Condition expected a boolean but received a string
-Root Cause: $json.email returns a string, not a boolean value
-Impact: The node threw a type error and the workflow could not route correctly
-Fix: Enabled "Convert types where required" in the If1 node

Bug — Append row saving empty values
-Node: n8n workflow — Append row in sheet node
-Issue: All fields (name, email, source) were saved as empty
-Root Cause: $json references were empty because If1 was not forwarding items
-Impact: Records were created in Google Sheets with no data
-Fix: Changed all field references to $('Code in JavaScript').item.json.*

Bug — Respond to Webhook returning empty body
-Node: n8n workflow — Respond to Webhook nodes
-Issue: Postman received 200 OK with no body
-Root Cause: Respond to Webhook nodes had no response body configured
-Impact: API clients received no information about the request result
-Fix: Configured each node with the correct status code and JSON response body