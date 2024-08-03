"use strict";

// Objects
const obj = {};
console.log(obj);

const io = {
    name: "Tommaso",
    surname: "Rossi"
};

io.age = 17;

console.log(io.name, io.surname, io.age); //static access

//const prop = prompt("Property?");
//const value = prompt("Value?");
//io[prop] = value; //dynamic acces
//if (prop in io)
//    console.log(prop,":", io[prop]); //dynamic acces
//else
//    console.log("property does not exist");
for (let i in io){
    console.log(i, io[i]);
}