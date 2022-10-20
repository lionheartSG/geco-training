// Functions
// declaration of function

var num = 90 // global scope

function add () {
  //block of code
  //local scope
  var a = 20
  var b = 30
  console.log(a + b)
}

//calling a function
add()


//parameterized function
function substract(a, b) {  //parameters
  console.log(a - b)
}

//calling a function
substract(20, 10) //arguments (can be [], {}, null)
substract(40, 20) // 20

//passing function a value

function multiply (x, y) {
  var result = x * y
  return result
}

var r = multiply(2, 3)
console.log(r)

//see html file
function displayName (){
  test = document.getElementById('fname').value
  test2 = document.getElementById('lname').value
  document.getElementById('display').innerHTML = `${test} ${test2}`
  console.log(test, test2)
}

//self-invoking/anonymous function

// (function() {
//   console.log(10+20)
// })() // without parameter

// (function(a, b) {
//   console.log(a + b)
// })(1, 2) //with parameter and argument

// Conditional Statement
// if-else

var firstName = 'alex'
var lastName = 'joe'

if (firstName === 'alex') {
  console.log(firstName)
} else {
  console.log("This is not true")
}

// Ternary Operator
// (condition) ? (true) : (false)

var returnVal = (firstName === 'alex') ? (firstName) : ('This is not true')
console.log(returnVal)

// else if

if (firstName == 'alex' && lastName === 'joe') {
  console.log(firstName, lastName)
} else if (firstName === 'alex') {
  console.log(firstName)
} else if (lastName === 'joe') {
  console.log(lastName)
} else {
  console.log("Wrong input")
}

// switch
var age = 1

switch (age) { //strict checking (===) and cannot use range like ruby
  case 1:
    console.log('Correct input')
    break;
  case 2:
    console.log('wrong input')
    break;
  default:
    break;
}

// loops
// for(statement1 ; statement 2 ; statement 3) {
//  block of code
// }

// statement 1 -> initialization of value
// statement 2 -> condition
// statement 3 -> increment / decrement

// steps of execution
// st1 -> st2 -> Block of code -> st3 -> st2 -> block of code, so on...

// for (let index = 0; index < array.length; index++) {
//   if (condition) {
//     return
//   }
// }

// var a = 10
// do {
//   console.log(a)
//   a++
// } while (a < 10);

// document.getElementById('display').innerHTML = n

// var x = document.getElementsByClassName('example')
// console.log(x) // array if there is multiple class

// for (let i = 0; i < x.length; i++) {
//   if (x.innerHTML == 'HTML') {
//     console.log("Exist")
//   }
// }

// DOM methods (self-study)
// addEventListener
// ClassList


// debugging
// console.log, debugger, adding breakpoints
