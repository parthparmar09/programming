//use with html
console.log("gloabal --" , this);

const obj = {
    key : 'val', key2 : 'val2' , todo() {console.log("object --" , this);  }
}

function hello() {console.log("function --" , this)  }

for(let i = 0 ; i < 1 ; i++){
    console.log("loop --" , this);
}

hello();
obj.todo();

document.querySelector('#btn').addEventListener('click' , (e) => {
    console.log("event--" , e);
})