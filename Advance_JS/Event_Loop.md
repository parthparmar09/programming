# Event Loop

### 1. Javascript Runtime
    - `Single-threaded` - only one call stack
    - Concurrency using `event loop` and `task queues`
    - Async tasks run outside JS (Web APIs in browsers, libuv in Node)

### 2. Components
    - Call Stack → Executes synchronous JS code.
    - Heap → Stores objects in memory.
    - Web APIs / libuv → Handle async tasks (timers, network, IO, etc).
    - Task Queues
        - Macrotask Queue: setTimeout, setInterval, setImmediate (Node - higher priority), IO tasks.
        - Microtask Queue: Promises, queueMicrotask, process.nextTick (Node - higher priority).

### 3. Event Loop Flow
    1. Execute everything in call stack (sync code).
    2. Process all microtasks (empty the microtask queue).
    3. Process one macrotask from the queue.
    4. Repeat forever

```
    //execution priority example
    Promise.resolve().then(()=> console.log('success promise')) // 2. in microtask queue 

    setTimeout(()=>console.log('timeout'), 0) // 5. in callback queue

    queueMicrotask(()=> {
    console.log('queue 1') // 3. in microtask queue
    queueMicrotask(()=> console.log("queue 2")) // 4. in microtask queue
    })

    console.log('last') // 1. in the call stack
```