// JavaScript is a powerful scripting language that you can use to make web pages interactive.
// It's one of the core technologies of the web, along with HTML and CSS.
// i'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Gam, how to work with arrays, strings, objects, functions, loops, if/else statements, and more.
// ------
// developer console --> it  include errors that are produced by your code, but you can also use it to see values of variables in your code, which is helpful for debugging.
// It is common practice in JavaScript to end your code lines with semi-colons.
// ----------
// <h1>variable</h1>
// In JavaScript, a variable is used to hold a value.
// there are 3 ways to declare a variable.
// <ul>
//     <li>var</li>
//     <li>let</li>
//     <li>const</li>
// </ul>
// ---------------------
// var - let - const
// All this keywords use to declare a variables, but there is some differnces betwen them.
// Some problems with var keyword.
/* 1 - hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
1)
function testVar() {
  var x = 10;
  console.log(x);
}
testVar(); // 10
2)
function testVar() {
  // var x = 10;
  console.log(x);
}
testVar(); //error

3)
function testVar() {
  console.log(x);
  var x = 10;
}
testVar(); //undefined
it is interpreted as this:
function testVar() {
  var x ;
  console.log(x);
  x = 10;
}
So var variables are hoisted to the top of their scope and initialized with a value of undefined.
 */
/**
 *  re-declared and updated
 * This means that we can do this within the same scope and won't get an error.
 * ex:
 *  var greeter = "hey hi";
    var greeter = "say Hello instead";
  or
    var greeter = "hey hi";
    greeter = "say Hello instead";
 */
/**
 * var is Function scope not block scope
 * Scope essentially means where these variables are available for use.
 * var declarations are globally scoped or function/locally scoped
 */
/**
 *  in modern JavaScript it is best practice to use the (let) to declaring variables .
 *
 */
