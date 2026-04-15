# OOP in JS

- JS is not a classical OOP lang - it is `prototype-based` - classes are just `syntactic sugar` over prototypes


| OOP Feature | Class-Based Languages (Java, C++, etc.) | Prototype-Based Languages (JavaScript) |
| --- | --- | --- |
| **Classes vs Objects** | **Classes** are blueprints. Objects are built from them. | No strict blueprints. **Objects** are built from other objects. |
| **Inheritance (Sharing)** | A **Class** inherits from another Class. | An **Object** inherits from another Object directly (Prototype chain). |
| **Creating Objects** | Must define a Class first to create objects. | Can create objects instantly `{}` or copy existing ones (`Object.create()`). |
| **Encapsulation (Hiding)** | Strict built-in rules (`public`, `private`, `protected`). | Achieved using `#` prefix for private fields or closures. |
| **Polymorphism (Variety)** | Tied to class hierarchies and strict types. | Very flexible. Any object with a matching method works (Duck Typing). |
| **Abstraction (Simplicity)** | Built-in tools like "Abstract Classes" and "Interfaces". | No built-in tools. Handled by convention or throwing errors if not implemented. |
| **Flexibility at Runtime** | Very rigid. Can't easily change class structure while running. | Highly dynamic. Can add, change, or delete methods/properties on the fly. |
| **Combining (Mixins)** | Sometimes complex or forbidden (Multiple Inheritance). | Easy to copy properties from many objects into one (Composition/Mixins). |
 
## Classes:
    ```
        class User {
            static count = 0;
            constructor(name, email) {
                this.name = name;
                this.email = email;
                User.count++;
            }

            sayHi() {
                console.log(this.name);
            }
        }

        // using prototype
        function User(name, email) {
            this.name = name;
            this.email = email;
            User.count++;
        }

        User.prototype.sayHi = function() {
            console.log(this.name);
        };

        User.count = 0;
    ```

## Inheritance:
    ```
        class Admin extends User {
            constructor(name, email, role) {
                super(name, email);
                this.role = role;
            }

            sayHi() {
                console.log(this.name + ' ' + this.role);
            }
        }

        //using prototype
        function Admin(name, email, role) {
            User.call(this, name, email);
            this.role = role;
        }

        Admin.prototype = Object.create(User.prototype);
        Admin.prototype.constructor = Admin;

        Admin.prototype.sayHi = function() {
            console.log(this.name + ' ' + this.role);
        };
    ```

## Encapsulation:
    - bundle data and methods into single unit, restrict access as required
    - private variables and methods using #

    ```
        class User {
            #name;
            #email;

            constructor(name, email) {
                this.#name = name;
                this.#email = email;
            }

            sayHi() {
                console.log(this.#name);
            }
        }

        //using closures(old way)
        function User(name) {
            let _name = name; // private, _name is not accessible outside the function

            this.getName = function () {
                return _name;
            };

            this.setName = function (newName) {
                _name = newName;
            };
        }
    ```

## Abstraction:
    - Hiding the implementation details and showing only the necessary features
    - No built in abstraction mechanism in JS
        - Using Typescript
        - Using base classes with enforced methods
        ```
            class PaymentService {
                pay() {
                    throw new Error("Method not implemented");
                }
            }

            class UPIService extends PaymentService {
                pay() {
                    return "Paid via UPI";
                }
            }
        ```

## Polymorphism:
    - Same method name, different behaviour
    - JS doesn't have compile time polymorphism, only run time(method overriding)

## Composition:
    - Inheritance drawbacks:
        - tightly coupled, rigid structure, wrong abstractions, code explosion(lot of combinations)
    - compositions is building objects by combining smaller pieces of behavior
    - "has-a" relationship instead of "is-a" relationship
    - **mixins:** reusable obj or fn - contains behaviour to copy
    ```
        const swimmer = {
            swim() {
                console.log(`${this.name} is swimming`);
            }
        };

        const flyer = {
            fly() {
                console.log(`${this.name} is flying`);
            }
        };

        class Duck {
            constructor(name) {
                this.name = name;
            }
        }

        // Mixin: copy properties from mixin objects into the class or target object only
        Object.assign(Duck.prototype, swimmer, flyer);

        const duck = new Duck("Donald");
        duck.swim();
        duck.fly();
    ``` 