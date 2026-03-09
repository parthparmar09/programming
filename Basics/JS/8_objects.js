const myObj = {
    name :'xyz',
    age : 18,
    status : false,
    todo(){ console.log("hello")}
}

console.log(myObj);
console.log(myObj.name, myObj['age']);
myObj.todo();

myObj.country = 'ind';
console.log(myObj);

delete myObj.age;
console.log(myObj);

console.log("Keys ---" , Object.keys(myObj) );
console.log("Values ---" , Object.values(myObj) );
console.log("Entries ---" , Object.entries(myObj) );



//objects using spread operator
const obj1 = {key : "value" , 12 : 'value'};
const obj2 = obj1; // share same referece - changing one changes the others
const obj3 = {...obj1};//shallow copy - only upper levels share diff. ref - deep levels are sharing the same

const obj4 = JSON.parse(JSON.stringify(obj1));//deep copy - all levels share diff. ref
obj2[12] = 11;//effect on obj 1
obj3.key = "no-key";//no effect on obj 1

console.log(obj1 , obj2,  obj3)

//optional chaining - ?.

const person = {
    name: "John",
    address: {
      city: "New York",
    address: null
    },
  };
  
  const city = person.address?.city;
  const street = person.address?.address?.street;
  
  console.log(city); // "New York"
  console.log(street); // undefined (no error)

//nullish coalescing - ??

const defaultValue = "Default Value";
const userInput = null;

const result = userInput ?? defaultValue;

console.log(result); // "Default Value"
