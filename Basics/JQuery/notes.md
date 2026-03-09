# Jquery - write less, do more

1- What is jQuery? What is the puropose of it?	
 	jQuery is a fast, small, and feature-rich JavaScript library. Its primary purpose is to simplify client-side scripting in web development. It provides an easy-to-use API for handling various tasks, including HTML document traversal, event handling, animation, and AJAX interactions. jQuery abstracts many of the complexities and cross-browser inconsistencies in JavaScript, making it easier for developers to create interactive and dynamic web applications.

    jQuery is widely used for several reasons:
        - Simplified DOM manipulation: jQuery simplifies selecting and manipulating HTML elements with concise and expressive syntax.
        - Cross-browser compatibility: It abstracts browser differences, making your code more reliable across various browsers.
        - Event handling: jQuery streamlines event binding and handling.
        - AJAX capabilities: jQuery offers powerful AJAX functionality for data exchange with servers.
        - Animation and effects: jQuery provides easy tools for creating interactive web experiences.
    

2- Summary of Prerequisites required for learning jQuery?	
    HTML and CSS: You should be comfortable with HTML for structuring web content and CSS for styling it.
    JavaScript: A good grasp of fundamental JavaScript concepts is essential. jQuery is a JavaScript library, so knowing how to work with variables, functions, events, and the DOM (Document Object Model) will be very beneficial.

3- Will jQuery work in all browsers?
    jQuery was designed to be cross-browser compatible, and it is known for abstracting many of the browser inconsistencies that developers commonly encounter. This means that jQuery code can work in most modern web browsers. Since jQuery is written in a common language, it can be run on all major browsers without any modifications or special coding techniques. 

4- How to use jQuery in your projects?	
     Include jQuery: To get started, you should include the jQuery library in your HTML document. You can do this by adding the following line in the <head> section of your HTML file. You can either download the jQuery library or use a content delivery network(CDN)
     For ex: <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

5- jQuery Syntax
6- How to escape a special characters		
7- JQuery Selectors and Events, Effects		
8- JQuery HTML and Traversing		
9- JQuery Ajax & JSON		
 	Ajax with jQuery	
		a) Load method
		b) jQuery get and getJson methods
		c) jQuery POST request
		d) Retrieving js file
		e) Helper methods

10- AJAX - The XMLHttpRequest Object	

11- How to use multiple jQuery versions in one project?	
    - Load jQuery Versions in Isolation:
        To avoid conflicts between different jQuery versions, you should load each version of jQuery in isolation. This means that each version should be encapsulated and not interfere with other versions on the page.
        <!-- Load jQuery 2.x -->
        <script src="path/to/jquery-2.x.min.js"></script>
        <script>
            var jq2 = jQuery.noConflict(true);
        </script>
        <!-- Load jQuery 3.x -->
        <script src="path/to/jquery-3.x.min.js"></script>

    -Use Specific jQuery Versions for Respective Code:
        Once you've loaded multiple jQuery versions in isolation, you should use the appropriate version of jQuery for the specific code that relies on it. This means that any code that should work with jQuery 2.x should use the jq2 object, while code that should work with jQuery 3.x should use the default $ object.

        <script>
            jq2(document).ready(function () {
                // Code that uses jQuery 2.x
            });

            $(document).ready(function () {
                // Code that uses jQuery 3.x
            });
        </script>


Topics covered today(18/10/23) in C# & OOPs:
1. Polymorphism:
 - Compile-time Polymorphism (method overloading, operator overloading)
 - Run-time Polymorphism ( method overriding, method hiding. upcasting)
2. Abstraction
 - Abstract Classes and Abstract members, Interfaces, Multiple Inheritance, Explicit Interface Implimentation
3. Exception Handling
 - Exception types, Try-Catch-Finally, Custom Exceptions, Exception Object

Remaining Topics : C# and MsSQL


