//asynchronous operations - fs.promises
const fs = require("fs");
const dir = "../dummy_files/";

//either use Callbacks or Async/Await to handle the files asynchronously

//1.using callbacks
fs.readFile(`${dir}read_sync.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  }
  console.log(data);

  fs.writeFile(
    `${dir}write_sync.txt`,
    `Data from another file: ${data} \nLast Update: ${Date.now()}`,
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Done!");
      }
    }
  );
});

//2.using async/await - to prevent callback hell
const { promisify } = require("util"); // to convert traditional cb based functions to the promises

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const readAndWrite = async () => {
  try {
    const data = await readFileAsync(`${dir}read_sync.txt`, "utf-8");
    console.log(data);

    await writeFileAsync(
      `${dir}write_sync.txt`,
      `Data from another file: ${data} \nLast Update: ${Date.now()}`,
      "utf-8"
    );

    console.log("Done!");
  } catch (err) {
    console.error(err);
  }
};

readAndWrite();
