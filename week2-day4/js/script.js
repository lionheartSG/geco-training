// Code - Parsing - Compilation - Execution

//Parsing - AST (Abstract Syntax Tree)
//Every engine has their own interpreter and compiler
//Interpreter give a fast execution code.
//Compilation - Javascript is an interpreted language. Java and C++ is a compiler language which means it will be compiled for optimization.

//

// Very important! Using this on arrow function, I access windows object. I can access other object from there.
// If I use named function, "this" refers to the owner of the object. I cannot access other objects from there

var person = {
  name: function(){
    console.log(this.contact)
  },
  contact: {
    telephone: 98525252
  },
  data: () => {
    this.data.test()
  }
}

var data = {
  address: "blk 506",
  funny: "this is funny",
  test: () => {
      console.log ("this is from data object")
  }

}

person.name()
person.data()

const arrVal = [90, 78, 56, 45, 100]

// All these functions takes a callback function
// #map always return back an array
arrVal.map((e, i, a) => {
  console.log("Returning element", e * 2)
  console.log("Returning index", i * 2)
  console.log("Returning array", a)
  return e * 2
})

const mapVal = arrVal.map(e => {
  return e * 2
})

console.log(mapVal)

//#filter wil return all element that pass the test in array
const filterArray = arrVal.filter((element, index, array)=>{
  return element > 60
})

console.log(filterArray)

//#forEach will loop through each element to run the code
arrVal.forEach((element, index, array) => {
  return element
})

//#find will return first element that pass the test
const findVal = arrVal.find((element, index, array) => {
  return element > 60
})

console.log(findVal)

//#some if one and more element pass the test, then it returns true. Check if value exist

const someVal = arrVal.some(e => { //true
  return e <= 45
})

console.log(someVal)

//#every if all element pass the test, then it returns true

const everyVal = arrVal.every((e) => {  //false
  return e < 1
})

console.log(everyVal)

//#reduce array into a single value(can be number or string)

let reduceVal = arrVal.reduce((t, n) => {
  return t + n
})

// t = 90, n = 78
// t = 168, n = 56
// t = 224, n = 45
// t = 269, n = 100
// t = 369, n = finish

//default function arguments

multiply = (a, b = 20) => {
  return a * b
}

const resultVal = multiply(10)

console.log(resultVal)
