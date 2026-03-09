//primitives
let a = 10;//Number
let b = "10xx"; //String
let c = false; //Boolean
let d; //undefined
let e = null;//Null - object

// console.log(a,"is of type",typeof a);
// console.log(b,"is of type",typeof b);
// console.log(c,"is of type",typeof c);
// console.log(d,"is of type",typeof d);
// console.log(e,"is of type",typeof e);

//type casting
// console.log(a.toString() , "is of type", typeof a.toString());
// console.log(Number(b),"is of type",typeof Number(b));
// console.log(parseInt(b),"is of type",typeof parseInt(b));
// console.log(Number(c),"is of type",typeof Number(c));
// console.log(String(c),"is of type",typeof String(c));
// console.log(Boolean(e),"is of type",typeof Boolean(e));

//non-primitives
let obj = {
    key : 'value',
} // object
let arr = [1,2,"hello"];//array
function myFunc(){return "hello";} //function
let dt = Date.now();//date
let regex = /myregex/;//regexp
let set = new Set([1,2,3,1,1]);//set
let map = new Map();//map
map["key"] = "value";
let err = new Error();//error
let promise =  new Promise((res,rej)=>res("ok"));//promise

// console.log(arr,"is of type",typeof arr);
// console.log(myFunc,"is of type",typeof myFunc);
// console.log(dt,"is of type",typeof dt);
// console.log(regex,"is of type",typeof regex);
// console.log(set,"is of type",typeof set);
// console.log(map,"is of type",typeof map);
// console.log(err,"is of type",typeof err);
// console.log(promise,"is of type",typeof promise);


