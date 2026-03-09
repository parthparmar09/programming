//promises
const promise =  new Promise((res,rej) => {
    const success = true;
    if(success){
        res("Sucessfully Done");
    }else{
        rej("Failure");
    }
})

console.log(promise);

promise.then(msg => console.log(msg)).catch(err => console.error(err)).finally(()=>console.log("Anyways..."));


//async/await
async function promise2 () { //this returns a promise which needs to be handled
    const success = false;
    if(success){
        return "Sucessfully Done";
    }else{
        throw new Error("Failure");
    }
}
console.log(promise2());

// the thrown error doesn't get caught by .then .catch
promise2().then(msg => console.log(msg)).catch(err => console.error(err)).finally(()=>console.log("Anyways..."));

//or with await keyword (can be used inside a async function only)
async function pr2Handle(){
    try {
        const res = await promise2();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

pr2Handle()
