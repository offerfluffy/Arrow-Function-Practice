// Function Types:

// 1) Function Expression (function that is assigned to a variable) + Anonymous Function
const sayHello = function () {
  return "Hello";
};

// 2) Callback Function (function that is passed to another as a parametr)
setTimeout(function () {
  return "Hello";
}, 100);

// 3) Function Declaration / Statement / Named (Hoisted)
function sayHello2() {
  return "Hello";
}

// 4) Function Constructor
function Person(name) {
  this.name = name;
}

const p = new Person("Me");

// 5) Factory Function (function that returns an object)
function person(name) {
  return {
    name,
  };
}

const p2 = person("You");

// 6) Object Methods
const me = {
  sayHello: function () {
    return "Hello";
  },
  sayBye() {
    return "Bye";
  },
};

// 7) Arrow Functions
// Always anonymous
// Cant be a Constructor
// Cant be a prototype method
// Cant be an Event handler

// Does not create its own EC and gets this from where its created (its surroundings)
// "Inherits" this from parent scope
// Regular functions define this based on how they’re called.
/* 
  const somefunc = () => this;
  
  same as

  this
*/

const sayHelloArrow = (name, lastName) => {
  return `Hello, ${name} ${lastName}`;
};

// If one argument
const sayHelloArrow2 = (name) => {
  return `Hello, ${name}`;
};

// If one argument and single return
const sayHelloArrow3 = (name) => `Hello, ${name}`;

// Arrow Function dont have arguments variable
function argumentsFunc() {
  console.log(arguments);
}
// argumentsFunc("hello", "world")

const arrow = () => console.log(arguments);
// arrow()

// This keyword in Arrow Fucntions
const me2 = {
  name: "me",
  value: this, // executed in global scope → 'this' is window
  talk() {
    console.log(this);
  },
  arrowTalk: () => {
    console.log(this); // logs window, because arrowTalk is defined in global context
  },
  timeTalk() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

// me2.talk() // me2
// me2.arrowTalk() // window
me2.timeTalk(); // me

console.log(me2.value); // window
// If we are inside an object doesnt mean that this equals to the whole object this is still referring to the window object
// Objects dont create binding with this, functions do