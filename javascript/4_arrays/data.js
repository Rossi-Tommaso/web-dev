"use strict";

// Arrays
const arr = [];

console.log(arr);

const stuff = [
    "divano",
    "poltrone",
    {
        oggetto: "zaino",
        contenuto: [
            "libri",
            "computer", 
            "cavi"
        ]
    }
];

console.log(stuff[2].oggetto, "\n", stuff[2].contenuto[0], "\n", stuff[2].contenuto[1], "\n", stuff[2].contenuto[2]);

//mothods
console.log(stuff.length);
stuff.length = 0;
console.log(stuff);

arr.push(1);
arr.push(2, 3, 4);
console.log(arr);

arr.unshift(0);

const x = arr.pop();
const y= arr.shift();
console.log(x, y);

const z = arr.slice(1, 2); //[1, 2)
console.log(z, arr);

const k = arr.splice(1, 1, -1, -2, -3);
console.log(k, arr);
