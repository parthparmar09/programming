### Prototype
    - Mechanism to inherit features in JS
    - Every object's hidden property - `__proto__`
    - `__proto__` refers to the parent's `prototype` property
    - `prototype` - exists on the `classes` or `constructor `functions` only
    - used for inheritance when we create objects using new - copies the prototype in the __proto__

### Prototype vs __proto__
    - `prototype` → property on functions (used only when creating objects with new).
    - `__proto__` → property on objects that points to their prototype (actual link).

### Prototype Chian
    - when we try to access a property on any object
        - JS first looks in the object itself - then its prototype - then the prototype of the prototype - at the end null.
    - Object is the last in the chain - it doesn't have prototype but has getters and setters

### Inheritance
    - Object.create(proto)/extends - creates new obj with given prototype
    - Object.getPrototypeOf(obj) and .setPrototypeOf(obj, proto) - to work with prototypes instead of directly using __proto__
    
    ```
        function Dog(name) {
            Animal.call(this, name); // call parent constructor
            }
            Dog.prototype = Object.create(Animal.prototype); // link to parent prototype
            Dog.prototype.constructor = Dog;

            Dog.prototype.speak = function () {
            console.log(this.name + " barks");
            };

            const dog = new Dog("Bruno");
            dog.speak(); // "Bruno barks"
    ```

### Key Points:
    - `Shadowing` - if property exists on the object it skips the prototype lookup
    - `Prototype Pollution` - if someone modifies .protoype - all the inheritant objects will get affect - *Dangerous*
    - `ES6 Classes` - provides syntactic sugar over prototype-based inheritance - uses the same under the hood
