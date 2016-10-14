/// <reference path="../typings/angularjs/angular.d.ts" />
import * as angular from "angular";
import "./index.scss";

var app = angular.module("grid-app", []);
app.controller("gridController", function() {
    var controller = this;
    controller.users = [
        {name: "Vitalii", birthdate: "14/03/1996", age: 20},
        {name: "Marta", birthdate: "23/06/1996", age: 19},
        {name: "Mykola", birthdate: "05/10/1996", age: 20}
    ];
    controller.newUser = {};
    //controller.new_user_login = undefined;
    //controller.new_user_birthdate = undefined;
    controller.calculate_age = function(birthdate:string):number {
        return Math.floor((Date.now() - new Date(birthdate).getTime()) / (1000 * 3600 * 24 * 365));
    };

    controller.adding_user = false;
    controller.addNewUser = function():void {
        //noinspection RedundantIfStatementJS
        if(controller.adding_user) {
            //adding new user, performing ajax call
            //just for show
            controller.newUser.age = controller.calculate_age(controller.newUser.birthdate);
            controller.users.push(controller.newUser);
            controller.adding_user = false;
        } else controller.adding_user = true;
    }
});

