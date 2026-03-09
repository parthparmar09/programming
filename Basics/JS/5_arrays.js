const arr1 = [1,2,3,4,5];
const arr2 = new Array("a", "b", "c", "d", "e");

const [[first], [second], ...last] = arr2;
console.log(first, second,last);
// console.log(arr1.length);
// console.log(arr1.concat(arr2));
// console.log(arr1.push(6,7) , arr1);
// console.log(arr1.pop() , arr1)
// console.log(arr2.unshift("y", "z") , arr2);
// console.log(arr2.shift() , arr2);
// console.log(arr1.includes(10) , arr1.includes(3));
// console.log(arr1.indexOf(10) , arr1.indexOf(3));

// console.log(arr1.reverse());

// console.log(arr2.reverse());
// console.log(arr2.sort());

// console.log(arr1.fill(10));

// console.log(arr2.slice(2,4));
// console.log(arr2.find(el => el > 'c'));

// console.log(arr2.splice(2,4 , "o" , "p" , "q") , arr2);

// console.log(arr1.join('') , arr2.join("---"));

// console.log(arr2.every(el => el < 'e') , arr1.every(el => el > 0));
// console.log(arr2.some(el => el < 'e') , arr1.some(el => el > 0));

// console.log(arr2.filter(el => el < "d"));
// console.log(arr1.map( el => el * el));
// console.log(arr1.reduce((acc,el) => acc * el));

arr2.forEach((el,i) => {
    console.log(el, "-- with index --", i);
})