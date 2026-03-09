//console object
console.log("hello world!!!");
console.info("This is an information");
console.warn("This is a warning");
console.error("This is an error");
console.assert(10<5, "Condition is false"); //displays if the condition is false


const data = [
    { name: "John", age: 30, country:'IND' },
    { name: "Jane", age: 25, country:'UK' },
  ];
console.table(data);

console.group("Group A");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.group("Group B");
console.log("Message 3");
console.log("Message 4");
console.groupEnd();

console.time("Timer");
for(let i = 0; i < 1000; i++){
    continue;
}
console.timeEnd("Timer");


//location object
console.log(location);
console.log(screen);


  
