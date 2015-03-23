

export class Monkey {

    constructor(name) {
        this.name = name;
        console.log("es6 class loaded...");
    }

    say(msg) {
        console.log(this.name + " says: " + msg);
    }

    load() {
        console.log("I am bob");
        console.log("built via grunt");
    }

}



//export default new Monkey();


