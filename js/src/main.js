/***
 *
 * Main JS
 *
 */


import { Monkey } from "./classes/Monkey"

import { MainController } from './controllers/MainController';




// Launch a Monkey Object
var simian = new Monkey("bob");

simian.say("cats are aliens");
simian.how();






// Bootstrap Angular JS

var app = angular.module('myApp', [

    //'ngRoute',
    //'ngResource'


]);


app.controller('mainController', MainController)




//export default {}