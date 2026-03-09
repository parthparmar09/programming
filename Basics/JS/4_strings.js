let str = "Hello Worlld!!!";

console.log(str.length);
console.log(str.concat('Any', 'Thing'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log("        Hello       ".trim());
console.log(str.charAt(10));
console.log(str.charCodeAt(10));
console.log(str.startsWith('hel'));
console.log(str.endsWith('!!'));
console.log(str.includes("Worlld"));
console.log(str.indexOf('ll'))// -1 if not presenet
console.log(str.lastIndexOf('ll'));
console.log(str.replace("ll" , "||"))
console.log(str.substring(6,12));
console.log(str.slice(6,-2));
console.log(str.split('l'));