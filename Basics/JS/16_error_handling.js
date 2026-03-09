class MyCustomErr extends Error{
    constructor(msg){
        super(msg);
        this.name = 'MyCustomError';
    }
}

function errDemo(){
    try {
        //errogeneous code

        if(true){
            throw new MyCustomErr("The error is here!");
        }

    } catch (error) {
        //the error gets catched here
        console.error(error);
    } finally{
        console.log("Gets executed anyways");
    }
}

errDemo();