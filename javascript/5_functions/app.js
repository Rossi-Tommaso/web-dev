"use strict";

function defaultValue(string) {
    string = string || "World";
    return string;
}

function toCapital(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function getUserName() {
    const name = prompt("il tuo nome?");
    return toCapital(defaultValue(name));
}


const name = getUserName();

document.body.innerHTML = "Hello, " + name + "!";

function nothing() {}
console.log(nothing()); //invocation
console.log(nothing); //value of nothing

function something() {
    return "miao";
}
console.log(something()); //invocation
console.log(something); //value of nothing

const x = [];
const y = function () {}; //anonymous function

function doTwice(fn) { 
    return function() {
        fn();
        fn();
    }
}
const f = doTwice(function () {
    console.log("miao");
});
f();

const o = {
    //method
    hello: function () {
        console.log("Hello");
    }
}

o.hello(); //method invocation