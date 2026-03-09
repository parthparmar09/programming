let map = new Map([["key1" , 'val1'] , ['key2' , 'val2']]);

// console.log(map.size);
// console.log(map.set("key3" , 11));
// console.log(map.get("key2"));
// console.log(map.has("key4"));
// console.log(map.delete("key3"));
// console.log(map.entries());
// console.log(map.keys());
// console.log(map.values());

map.forEach((val,key) => {
    console.log(key , "=>" , val);
})