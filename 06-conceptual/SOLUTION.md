**Q1. Explain how async/await works internally in JavaScript.**  

Async/await is built on top of Promises. When a function is marked as async, it always returns a Promise. When you use await, the function pauses its execution at that line and gives control back to the event loop, allowing other code to run. Once the Promise resolves, execution resumes from where it stopped. It solves callback hell by making asynchronous code look synchronous and easier to read.

**Q2. What risks does `innerHTML` introduce, and how do you mitigate them?**  

innerHTML is dangerous because it directly parses and executes HTML strings, which can include malicious scripts. For example, a user input like <img src=x onerror="alert('hacked')"> can execute JavaScript if injected. This is a Cross-Site Scripting (XSS) risk. To prevent it, you should use textContent for plain text or sanitize HTML using libraries like DOMPurify before rendering.

**Q3. What is the difference between `==` and `===` in edge cases?**  

The difference is type coercion. == converts types before comparing, while === compares both value and type strictly. For example, 0 == false is true, but 0 === false is false. Another case is null == undefined which is true, while null === undefined is false. Using === avoids unexpected behavior in most cases.

**Q4. What happens if an API does not validate its input?** 

If an API does not validate input, it can store invalid or corrupted data in the database, breaking system consistency. It can also expose security risks like SQL injection or crashes from unexpected payloads. To prevent this, you must validate all inputs on the server side, checking required fields, types, and value limits before processing.

**Q5. Explain how a webhook differs from polling.** 

Polling is when a client repeatedly requests data from a server to check for updates, which is inefficient because it uses resources even when nothing changes. Webhooks are event-driven, meaning the server sends data to your endpoint only when something happens. Webhooks are better for real-time systems like payments or notifications, while polling is used when webhooks are not available.

**Q6. Why should you use separate `dev` and `main` branches?**  

Using separate dev and main branches prevents unstable code from reaching production. Developers can test and integrate features in dev without affecting users. Main should always contain stable and tested code. This workflow reduces the risk of deploying broken features and allows safe collaboration through pull requests and code reviews.

**Q7. What causes a memory leak in backend systems?** 

Memory leaks happen when references to unused objects are not released, preventing garbage collection. In Node.js, a common example is a global array like requestLog that stores every request without limits. Over time, memory usage increases until the server crashes. You can detect this using heap snapshots or monitoring memory usage, and fix it by limiting data storage or using proper logging tools.

**Q8. Why should HTTP status codes match the actual response?** 

Status codes are important because they tell the client the real result of a request. If a server returns 200 even when an error happens, the client may treat it as success and break logic. For example, a frontend using response.ok will assume everything worked and try to render invalid data. Correct status codes ensure proper error handling, retries, and monitoring.

**Q9. What is idempotency in APIs?** 

Idempotency means that repeating an operation produces the same result as executing it once. GET and DELETE are idempotent because repeating them does not change the final state. POST is not idempotent because sending the same request twice can create duplicate data, like double payments. Idempotency is important in distributed systems where requests can be retried.

**Q10. How would you debug a production issue with no logs?**

First, I try to reproduce the issue using the same inputs in a local or staging environment. Then I add temporary logs to identify where the failure occurs. Next, I check system metrics like CPU, memory, error rates, and timeouts. After that, I isolate the problem by disabling parts of the system. Once fixed, I add proper logging to prevent future blind debugging.