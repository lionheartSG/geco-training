// // alert('Hi!')
// // document.write("Today we are learning JS") //to output directly into HTML
// // console.log("This is for console.log") //for debugging purposes

// // // Variables

// // var firstName = 'alina' //declaration and initialization

// // // Declare multiple variable in single statement

// // var first = "test", age = 5, gender = "Male"

// // console.log(firstName.length)

// // var str = ' front-end development'

// // console.log(str.indexOf('development', 5)) //2nd argument is to start after 5th index
// // console.log(str.lastIndexOf('development'))
// // console.log(str.search("development"))

// // //extraction of strings
// // console.log(str.slice(2, 7)) // 1st argument is starting, 2nd is ending excluding
// // console.log(str.slice(7)) //return the string from 7th index till the end
// // console.log(str.trim())
// // console.log(str.toLowerCase)
// // console.log(str.toUpperCase)
// // console.log(str.replace('end', 'END'))
// // console.log(str.replaceAll('end', 'END'))

// // // number to string
// // var num = 20
// // console.log(num.toString()) // 20 in String (black colour:"")
// // console.log(num.toFixed(2)) // 20.00 in String

// // //convert string to number

// // console.log(Number('8989')) //8989
// // console.log(Number('uirif')) //NaN (Not a number)
// // console.log(Number('')) //0
// // console.log(parseInt('89')) //89
// // console.log(parseFloat('98.22')) //98.22

// // //check Typeof datatype

// // console.log(typeof(num)) // number

// // //null
// // var y = null
// // console.log(y) //null
// // console.log(typeof(null)) //object

// // //operator

// // // === will include comparing datatype
// // // == will compare value only without datatype

// // // assignments

// // Objects - Four Ways

// // 1. Object Literal
// // Key/value pair
// // Property value pair
// var person = {
//   firstName: 'alex',
//   age: 35,
//   salary: 90000
// }

// console.log(person.firstName)
// console.log(person['age'])
// console.log(Object.keys(person))
// console.log(Object.values(person))

// // 2. Using constructor to clone

// // var obj = Object.create(car) //will be cloning into a different memory
// // console.log(obj.model)
// // console.log(obj.specialFeature)

// // 3. new keyword (Prototype - ES5)

// // var objVal = new Student()

// // 4. new keyword (Class - ES6)

// // var objVal = new University()

// //update
// person.firstName = 'something else'

// //Arrays
// var num = [90, 89, 67, 56]
// var color = ['pink', 'red', 'orange', 'blue']
// var mix = [90, 'color', null, true, false, [899, 8990]]

// console.log(typeof(num)) //object

// //verification of array

// console.log(Array.isArray(num))

// // convert array to string

// console.log(color.join('*'))

// // pop & push

// color.pop() // delete last element
// color.push('white') // add element in the end of an array

// // shift & unshift

// color.shift() // delete first element
// color.unshift() //add element in the beginning of an array

// // splice (will add & delete element in the between of array)

// console.log(color.splice(1, 2, 'blue', 'yellow')) //1st argument: start of index, 2nd argument: num of elements I want to delete, 3rd agument: value to be added

// color.splice(3, 0, "pink", "purple")

// //concat
// var newArray = mix.concat(num, color)
// console.log(newArray)

// //array of objects (IMP)
// //employee data

// var employeeData = [{
//   name: 'test',
//   age: 20,
//   salary: 20000
// },{
//   name: 'test1',
//   age: 21,
//   salary: 60000,
//   // method: function() {}
// }]

// //operators
// //1. Arithmetic Operator

// var numOne = 20
// var numTwo = 30

// var addition = numOne + numTwo //addition
// var subtract = numOne - numTwo //substraction
// var multiple = numOne * numTwo //multiplication
// var division = numOne / numTwo //division
// var modulu = numOne % numTwo //modulo (remainder)

// addition++
// subtract--

// console.log(Math.round(division))
// console.log()

// //2. Assignment Operator

// var val = 20;

// //3. String Operator

// var strOne = 'Hello'
// var strTwo = 'World'
// console.log(strOne + ' ' + strTwo) // Hello World

// // Implicit coersion (automatic type conversion)

// // Operator precedance (), *, /, +, -, L-R
// // Rules >> 1. Operator precedence, 2. datatype of oprands, 3. non-numeric or numeric, 4. result

// //4. Comparison Operator

var x = 9;
var y = '9'

console.log(x == y) //look for value (true)
console.log(x === y) //look for value and datatype (false)
console.log(x > 20) // false
console.log(y < 20) // true
console.log(x != 9) //look for value
console.log(x !== 9) // look for value and datatype
console.log(x >= 10) // false
console.log(y <= 9) // true

//Logical Operator &&, ||, !

console.log(x == y && x === y && y <=9 ) // if all are true, then it return true.
console.log(x == y || x === y || y <=9 ) // if one of them true, it return true
console.log((x == y || x === y) && y <= 9) // true
console.log (!(x == y)) // false
