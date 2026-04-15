### Lexical Scope:
    - accessibility of variables detemined by their physical location
    - Global, Function, Block

### Hoisting:
    - JS behaviour - moves the declarations at the top - calling before initializing
    - `var` - hoisted but not initialized - undefined
    - `let` and `const` - hoisted but in temp. dead zone - reference err
    - functions - hoisted completely
    
### Closures:
    - the functions defined in a function which has the access to the outer scope
    - retains the variables even after the outer function's execution
    - retains only the ones getting used in the inner function
    - variables will get garbage collected only when no function references them
    - to declare the private variables
    - implemet separate lexical scope (scope of declaration - not execution) for each declaration
    - Class alternatives

    ```
        const closureFn = () => {
            const obj = {
                name : 'parth',
                age : 23
            }

            const innerFn = () => {
                obj.age = obj.age + 10;
                console.log(obj);
            }

            return innerFn;
        }


        const cls1 = closureFn();
        const cls2 = closureFn();


        cls1()
        cls2()
        cls1()
        cls2()
    ```

### Currying:
    - seq of functions, each takes separate arg and returns a fun. 
    - used in `Partial Application` (when we get some args in adv. and some later) and `Functional Programming` (use of pure functions, immutability, and the avoidance of shared state and side effects)

    ```
        // Function Currying
        function add(a) {
            return function(b) {
                return a + b;
            }
        }

        const addTwo = add(5);  // First function call with 5
        console.log(addTwo(4));
    ```

### Iterators & Iterables:
    - Iterables are those who implement the iterator protocol
    - Has a function on `[Symbol.iterator]` key which returns an object having a `next()` method which returns obj with `value` and `done` properties.

### Generator Functions:
    - Implements iterator protocol internally - returns an iterable

    ```
        function  *generatorFn (...args){
            yeild val1;
            yeild val2;
        }

        const gen = generatorFn();
        console.log(gen.next());
        console.log(gen.next());
        //or
        for(const val of gen) {}
    ```    

### Callbacks:
    - A function passed as an argument
    - functions are first class objects - can be passed and returned

### Higher Order Functions:
    - who accept functions as arguments or returns functions or both

### `this` Keyword:
    - Referes to the current scope, the object it belongs to
    - In normal functions 
        - `this` referes to the caller/object, 
    - In arrow functions 
        - `this` gets inherited lexically from where they are created
        - can't rebind, can't be used as constructors
        - browser -> window, node ESM -> undefined, node CommonJS - module.exports
    - To bind the `this` keyword:
        1. New binding - when using new keyword - constructor call - assigns empty scope - new empty object
        2. Explicit binding - when binded with `call` method
        3. Implicit binding - when inside an object or class
            - functionName.call(<reference-to-bind>,...args)
        4. Default - window object in browser and global in node (empty by default,  to set - globalThis.name)

### `new` keyword:
    1. creates new object
    2. gets linked to the prototype property of constructor fn - has access to all properties/methods of constructor's prototype
    3. constructor called with the given args - if no `non-primitive` return value then returns the object by default

## Global `await`:
    - top-level await - allows awaiting async functions without wrapping them inside async block
    - works in ES modules (.mjs, type: module) and latest node/browsers only - is a module - gets loaded async'ly
    - not in CommonJS (.cjs) - because it is a script - runs line by line - stops the whole flow

## `Object` methods:
    - .create(proto) - creates a new object with its prototype set to proto
    - .assign(target, ...sources) - copies properties from source objects to the target - shallow copy
    - .freeze(obj) - makes it immutable
    - .seal(obj) - prevents adding/removing properties - can modify the existing
    - .preventExtensions(obj) - prevents adding - can modify and delete the existing
    - .defineProperty(obj, key, descriptor) - add of modify key with fine-grained control
        ```
        const obj = {};
        Object.defineProperty(obj, "a", {
        value: 10,
        writable: false,
        enumerable: true,
        configurable: false
        });
        console.log(obj.a); // 10
        obj.a = 20;         // ignored (non-writable)
        ```
    - .defineProperties(obj, descriptors)
    - .is(obj1, obj2) - hard compare like === but handles edge cases better - truely strict
        ```
        console.log(+0 === -0);         // true (same)
        console.log(Object.is(+0, -0)); // false (different)

        console.log(NaN === NaN);         // false  
        console.log(Object.is(NaN, NaN)); // true
        ```
    - .Keys, .values, .entries, .fromEntries, 

## Object Copies:
    - `Shallow Copy` - Copies one level properties - nested ones are shared (references) , will affect each other
        - const a = {...b} or Object.assign(a, b)
    - `Deep Copy` - Copies all levels - no mutation leakes -  new references for all
        - const b = structuredClone(a) //modern
        - const b = JSON.parse(JSON.stringify(a)) //older - fails for Date/Set/Map/Functions etc
        - Loadash library - .cloneDeep method
    - `Reference Copy` - no copy - same obj to new variable - const b = a;

## Static vs Dynamic Typing:

| **Aspect**               | **Static Typing**            | **Dynamic Typing**            |
| ------------------------ | ---------------------------- | ----------------------------- |
| **When type is checked** | At **compile time**          | At **runtime**                |
| **Variable type**        | Fixed after declaration      | Can change anytime            |
| **Error detection**      | Early (before running)       | Late (while running)          |
| **Examples**             | Java, C, C++, C#, TypeScript | JavaScript, Python, Ruby, PHP |

## Strict vs Loose Typing:

| **Aspect**        | **Strict Typing**                      | **Loose Typing**                           |
| ----------------- | -------------------------------------- | ------------------------------------------ |
| **Type coercion** | No implicit coercion                   | Implicit coercion allowed                  |
| **Conversions**   | Must be **explicit** (`parseInt("5")`) | Happens **automatically** (`"5" * 2 → 10`) |
| **Safety**        | Safer, fewer surprises                 | More flexible but error-prone              |
| **Examples**      | Java, Python, C#                       | JavaScript, PHP                            |

## Memory Management & Garbage Collection
    - JavaScript automatically allocates and frees memory using Garbage Collection
    - Mark-and-Sweep Algorithm
        - Root objects (global, stack) are marked
        - Anything reachable → kept
        - Anything unreachable → removed
    - Memory Leaks
        - Caches, Global Vars, Event listeners not removed, Closures holding references
        - Nullify unused variables, remove event listeners, clear intervals/timeouts