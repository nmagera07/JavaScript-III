/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding: when in global scope, "this" keyword will be bound to the entire console object
* 2. Implicit binding: when a function is followed by a "dot", the object before the dot will be bound to that function
* 3. New binding: when a constructor function is used, the object that is created and returned by the constructor function, is newly bounded to that function
* 4.  Explicit binding: this binding occurs when .call(), .apply(), or bind() are used on a function. you are explicitly passing in a 'this' context to these methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}
sayName("Nate");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Nate');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman); newman.speak.apply(jerry);