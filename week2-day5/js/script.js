// OOPS: Object-Oriented Programming

//template of js objects (prob or method)

class University {
  //pre-defined method: that is used to initialize value
  constructor(name, age, department) {
    this.name = name
    this.age = age
    this.dept = department
  }
}

const studentOne = new University ('alina', 20, 'cse') //create an object

//inheritance

class Shape {
  constructor(id) {
    this.id = id
  }
}

class Circle extends Shape {
  constructor(id, radius){
    super(id) //calls the parent constructor
    this.radius = radius
  }

  circumference(){
    console.log(2 * Math.PI * this.radius)
  }
}

const c = new Circle(1,5)

c.circumference()
console.log(c)

class Triangle extends Shape { //siblings can't access each other data
  constructor(id,  type) {
    super(id)
    this.type = type
  }
}

const t = new Triangle(2, 'Scalene')
console.log(t)

//object literal enhancement
//restructuring of object

const firstName = 'alina'
const lastName = 'joe'
const age = 20

const person = {firstName, lastName, age}

console.log(person)

//rest operator (...)

addVal = (...args) => {
  console.log(args)
}

addVal(10,20,30,90)

//destructuring objects

const userVal = {
  id: 30,
  isVerified: true,
  age: 25
}

const {id, isVerified} = userVal //becomes a free floating variable. can skip value by leaving variable empty.
console.log(id, isVerified)

const array = [1, 2]

//destructuring array

const [a, b] = array

console.log(a, b)

//Spread Operator

const objOne = {
  A: 30,
  B: 40
}

//shallow copy
// const objTwo = objOne
// objTwo.A = 100
// console.log(objOne, objTwo)

//using Spread Operator: deep copy

const objTwo = {...objOne, Z: 20, A: 100}
console.log(objOne, objTwo)

//spread operator to concat array

const one = [90, 89, 89]
const two = [40, 30, 20]
const three = [...one, 25, 65, ...two]
console.log(three)

//destructuring of arrays

const [d, , f] = one // skip value

console.log(d, f)

//rest operator
const [x, ...y] = two
console.log(x, y)

//for in (iterate over objects)
for(key in objTwo) {
  console.log(key)
  console.log(objTwo[key])
}

//for of () can be used for string and arrays
//considering one

for(var ele of one) {
  console.log(ele)
}

const str = 'hello'

for(let string of str) {
  console.log(string)
}

//Object.keys
//Object.values
