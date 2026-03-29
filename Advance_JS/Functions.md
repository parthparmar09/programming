## Functions
    - First class citizens -stored, passed and returned like other values.

### Higher Order Function (HOF):
    - takes a fn as a param and/or returns a fn
    - abstraction, reusability

### Pure & Impure Functions:
    - *Pure function:* same ip, same op. No side effects.
    - *Impure function:* depends on the external states, modifies something.

### Function Composition:
    - combining fns to create a pipeline
    ```
        const compose = (f, g) => x => f(g(x));
        const result = compose(multiply, add)(5);
    ```
### IIFE (Immediately Invoked Function Expression)
    - runs immediately after being defined
    ```
        (function() {console.log("Hello")})();
    ```

### call(), apply() and bind() -- to control `this`:
    - call(thisArg, arg1, arg2, ...): sets this explicitly - executes immediately
    - apply(thisArg, [arg1, arg2, ...]): same as call() but with an array of arguments
    - bind(thisArg, arg1, arg2, ...): doesn't run immediately, returns a fn with bound `this`
    - missing params automatically become undefined and extra ones will be ignored

### Retry mechanisms:
    ```
        //basic
        async function retry(fn, retries = 3) {
            try {
                return await fn();
            } catch (err) {
                if (retries === 0) throw err;
                return retry(fn, retries - 1);
            }
        }
        //exponential backoff - wait for increasing time
        async function retry(fn, retries = 3, delay = 500) {
            try {
                return await fn();
            } catch (err) {
                if (retries === 0) throw err;

                await new Promise(res => setTimeout(res, delay));
                return retry(fn, retries - 1, delay * 2);
            }
        }
    ```

### Timeout pattern:
    ```
        function withTimeout(promise, ms) {
            const timeout = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Timeout")), ms)
            );
            return Promise.race([promise, timeout]);
        }
    ```

### Cancellation:
    ```
        //doesn't stop async fn - just prevents further execution
        let cancelled = false;
        async function task() {
        if (cancelled) return;
        const data = await fetchData();
        if (cancelled) return;
        console.log(data);
        }
        cancelled = true;
    ```