const readline = require('readline');//to read input from the console
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let username = null;
let password = null;
rl.question("Hello, Please enter your name followed by the password: " , (name) => {

    [username, password] = name.split(' ');
    console.log(`Welcome Mr.${username}`);

    if(password == 'xyz'){
        console.log("Access Granted!!!");
    }else{
        console.log("Unauthorized Access!!! , Initiating Immediate Shutdown.");
        rl.close();
        process.exit(1);
    }
});


