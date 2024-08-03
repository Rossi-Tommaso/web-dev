"use strict"

const x = 3; 
let y = 4; 
{
    debugger;
    let x = 7;
    y = 8;
    console.log(x, y);
}
console.log(x, y);