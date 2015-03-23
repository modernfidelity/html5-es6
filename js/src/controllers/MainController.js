/**
 *
 * MainController
 *
 */

class MainController {

    constructor($scope) {

        console.log("MainController loaded..." );


        this.firstName= "Monkey1";
        this.lastName= "Bob1";



        //
        //this.$scope.firstName= "Monkey";
        //this.$scope.lastName= "Bob";




    }


    setname(){

        return "set name func called";

    }


}

export { MainController }