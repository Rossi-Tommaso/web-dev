"use strict"

function hello() {}
typeof hello === "function";
const greeting = hello;
typeof greeting === "function";
greeting === hello; /**FUNCTIONS ARE VALUES, TOO**/

const multiply = function(a, b) {
    return a * b;
} //literal function

const logValue = x => { 
    console.log(x);
    return x;
}; //arrow function

const sum = (a, b) => {return a + b;};//arrow function

/*Javascript's APIs*/
//ECMAScript Core APIs ----> String manipulation, arrays, collectiion, dates, regular expression, objects, funcions, ...
//Web APIs ----> DOM, AJAX, Web Storage, Web Workers, Canvas, ...
//Node.js APIs ----> File system, IO stream, Networking, OS, Processes, ...
//Third-party APIs ----> Libraries, Frameworks, Interfaces to external services

/*Web APIs*/
//Document Object Model (DOM) ----> Dynamicaly manipulate structured documents
//Nodes ----> We can:
            //Navigate the tree to acces nodes
            //Modify node attributes and properties
            //Add an remove nodes to the tree
//Nodes - Navigation:
        //-document ----> The entry point to the DOM
        //-document.documentElement ----> The root node of the document tree
        //-document.head ----> The HTML head node
        //-document.body ----> The HTML body node
//Nodes - Manipulation
        //-"node".textContent ----> The text contained in a node and its children ex: document.body.textContent --> it returns the content of Body
                /*we can manipulate a node with textContent like that ---> "node".textContent = "something"*/
        //-"node".cloneNode(*deep) ----> Return a copy of node. if deep is true, copy descendand nodes too. 
            /*deep is optional but it's safer to always provide it ----> deep can be true or false*/
        //"node".appendChild(newChild) ----> Detaches newChild from its parent and attach it to "node" as last child
        //"node".insertBefore(newChild, childNode) ----> Detaches newChild from its parent and attach it to "node" as childNode previous sibling
        //"node".removeChild(oldChild) ----> Detaches oldChild from "node" and Returns oldChild
        //"node".replaceChild(newChild, oldChild) ----> Detaches newChild from its parent, attach it to "node" in place of oldChild, detaches oldChild from node and returns oldChild
//Node - Type
        //"node".nodeType ----> It gives the types of a node
            /*ex: "node".childNodes[N].nodeType === node.TEXT_NODE/ELEMENT_NODE/... ----> true/false */
/*Elements*/
//Elements - Navigation
        //"element".children
        //...
//Elements - Querying
        //document.getElementById(id)
        //element.getElementByClassName(class)
        //element.getElementByTagName(tagName)
        //element.querySelector(cssSelector)
        //element.querySelectorALL(cssSelector)
//Elements - Creation
        //document.createElement(tagName)
/*ex:*/
const span = document.createElement("span");
document.body.appendChild(span);
span.textContent = "Fine della pagina";
/**/
//Elements -Attributes
        //element.className
        //element.classList
        //element.innerText
        //element.innerHTML
        //element.outerHTML
        //element.before(...newSiblings)
        //element.after(...newSibling)
        //...
/*Events*/
//Web page objects can be target of events
//Events are dispached on various occurences        
//Loading, Rendering, Media playback, User interaction, ...
/*Listeners*/
//A listener can be attached to a target, declaring
        //an event type
        //a callback function
//when an event of the requested type is dispathced to the target, the callback is executed
/*ex:*/
/*
function logEvent(evt) {
        console.log(
                evt.type,
                evt.target
                evt. //many more property
        )
}
*/
//Listeners - Declaring
//element.addEventListener(type, cb, options?)