# OOP in JS

- JS is not a classical OOP lang - it is `prototype-based` - classes are just `syntactic sugar` over prototypes


| Feature                  | Class-based OOP (Java, C++)               | Prototypal OOP (JavaScript)                             |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------- |
| **Class**                | Blueprint, separate from objects          | No real classes, objects inherit from objects           |
| **Inheritance**          | Defined at compile time (`extends`)       | Dynamic, objects can link to any prototype              |
| **Instantiation**        | `new` creates an object from a class      | `Object.create(proto)` or constructor function          |
| **Flexibility**          | Rigid hierarchy, type-checked             | Very dynamic, can change prototypes at runtime          |
| **Encapsulation**        | Access modifiers (`public`, `private`)    | Simulated via closures or `#private` fields             |
| **Polymorphism**         | Method overriding via class hierarchy     | Any object with the right method “quacks” (duck typing) |
| **Multiple inheritance** | Not supported directly (uses interfaces)  | Achieved via mixins / composition                       |
| **Typing**               | Static & strict (compiler enforces rules) | Dynamic & loosely typed                                 |
