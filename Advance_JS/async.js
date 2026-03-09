// Promise - object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// Structured way to handle async code

//structure
const myPromise = new Promise((resolve, reject) => {
    const status = true;
    setTimeout(() => {
        if(status){
            resolve("Success!");
        }else{
            reject("Error!");
        }
    }, 2000)
})

myPromise
    .then((data)=>console.log("Success data ->", data)) // can handle both success and error cb but not used - can't handle the exceptions from the success or error cb 
    .catch((data)=>console.log("Error data ->", data));

// Promise.all - hanlde all promises - rejects if anyone rejects or throws an error - returns the first rejection error/message
// Promise.allSettled - wait for all to get completed regardless
// Promise.race - the first to get completed (resolve or reject) - returns the value from that one only

// Callbacks vs promises vs async-await
// Callback
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Fetched User");
    callback(null, { id, name: "Alice" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Fetched Posts");
    callback(null, [{ id: 101, title: "Post 1" }]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Fetched Comments");
    callback(null, ["Comment A", "Comment B"]);
  }, 1000);
}

getUser(1, (err, user) => {
  if (err) return console.error(err);

  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);

    getComments(posts[0].id, (err, comments) => {
      if (err) return console.error(err);

      console.log("Comments:", comments);
    });
  });
});// Callback hell

// Promise
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched User");
      resolve({ id, name: "Alice" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched Posts");
      resolve([{ id: 101, title: "Post 1" }]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched Comments");
      resolve(["Comment A", "Comment B"]);
    }, 1000);
  });
}

getUser(1) // promise chain
  .then((user) => getPosts(user.id))
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log("Comments:", comments))
  .catch((err) => console.error(err));

// Async-await - allows promise based async behaviour in cleaner style - no promise chains
async function fetchData() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);

    console.log("Comments:", comments);
  } catch (err) {
    console.error(err);
  }
}

fetchData();

// Sequential, Parallel and Concurrent execution
// let getUser - 3  seconds , getPosts - 2 seconds

// Sequential - 3 + 2 = 5 sec - blocks the execution till the above one completes
await getUser();
await getPosts();

// Concurrent - max of all
const user = getUser();
const posts = getPosts();
console.log(await user)// 3 sec
console.log(await posts)// 3 sec

// Parallel 
function parallel(){
    Promise.all([
        async () => console.log(await getUser()), // 3 sec
        async () => console.log(await getPosts()) // 2 sec
    ])
    console.log("Done") // after all are done
}


