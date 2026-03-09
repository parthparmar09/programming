let set = new Set([5,6,8,4,5,9,10,4,11]);

console.log(set.size);
console.log(set.add(19));
console.log(set.has(5));

console.log(set.delete(5));
console.log(set.has(5));

console.log(set.clear());

let objSet = new Set();
const obj1 = {key : "value" , 12 : 'value'};
const obj2 = obj1; // share same referece - changing one changes the others
const obj3 = {...obj1};//shares diff. reference - shallow copy - only upper level is copied, deep levels share same ref.


obj2[12] = 11;//effect on obj 1
obj3.key = "no-key";//no effect on obj 1

objSet.add(obj1);
objSet.add(obj2);//doesnt get added -  same reference
objSet.add(obj3);//gets added - diff. reference

console.log(objSet);
console.log(obj2);
