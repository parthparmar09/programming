//Date methods

console.log(Date.now());
console.log(new Date());
console.log(new Date(1697100617793));
console.log(new Date("2023-10-20T12:00:30"));
console.log(new Date(2023,9,20,12,0,20,121));

//Date object methods

const dt = new Date(2023,9,20,12,0,20,121);
console.log(dt.getDate() , dt.getMonth() , dt.getFullYear(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds());

console.log(dt.getTime(), dt.getDay());

console.log(dt.toDateString());
console.log(dt.toLocaleDateString());
console.log(dt.toTimeString());
console.log(dt.toLocaleTimeString());
console.log(dt.toISOString());
console.log(dt.toUTCString());
console.log(dt.toString());
console.log(dt.toJSON());

dt.setDate(12);
dt.setMonth(11);
dt.setFullYear(2121);
dt.setHours(23);
dt.setMinutes(56);
dt.setSeconds(34);
dt.setMilliseconds(999);

console.log(dt.toString());