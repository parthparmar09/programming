//synchronous operations - blocks the main thread

const fs = require("fs");
const dir = "../dummy_files/";


let data = null;
try {
  data = fs.readFileSync(`${dir}read_sync.txt`, "utf-8");
  console.log(data);
} catch (error) {
  console.error(error.message);
}

try {
  data = `Data from another file: ${data} \nLast Update: ${Date.now()}`;
  fs.writeFileSync(`${dir}write_sync.txt`, data, "utf-8");
  console.log("Done!");
} catch (error) {
  console.error(error.message);
}

try {
  data = `\n${data} \nLast Update: ${Date.now()}`;
  fs.appendFileSync(`${dir}write_sync.txt`, data, "utf-8");
  console.log("Done!");
} catch (error) {
  console.error(error.message);
}

try {
  fs.mkdirSync(`${dir}new_sync`);
  console.log("Done!");
} catch (error) {
  console.error(error.message);
}

try {
  fs.rmdirSync(`${dir}newdir`);
} catch (error) {
  console.error(error.message);
}

try {
  const data = fs.readdirSync(`${dir}`);
  console.log("File names :" , data);
} catch (error) {
  console.error(error.message);
}