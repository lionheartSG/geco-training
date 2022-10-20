//this keyword
//alone

console.log(this) //refers to the global object. give us back browser

// object: property or method

var person = {
  firstName: "alina",
  lastName: "hero",
  designation: "developer",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName) // this keyword will refer to the owner of this function
  }
}

console.log(person.firstName)
person.fullName()

// Scope
// global scope
var num = 20
console.log(window.num) // can be written this way

function subtract() {
  //local scope
  var numTwo = 30
  console.log(numTwo - num)
}

// console.log(numTwo) //will not be accessible
subtract()
console.log(window.history)
console.log(window.navigator)
console.log(window.location)
let url = window.location.href.split('/')
console.log()

//Asynchronous (Callbacks) (Promises) (Async/await)

//Callback

function display(solution) {
  console.log(solution)
}

function calculate(a, b, cb) { //parameters
  var result = a + b
  cb(result)
}

calculate(12, 34, display); //display is a callback

//global execution context
//click button -> call function e.g. calculate -> callback (queue)

// setTimeout(() => {
//   console.log("hello")
// }, 2000);

// setInterval(() => {
//   console.log("hello")
// }, 1000);

// setInterval(function(){
//   var d = new Date() //creating date object
//   console.log(d)
// }, 2000)

// call chaining
// callback hell
// createOrder(product, function(orderId){
//   payment(orderId, function(){
//     showOrderHistory(paymentInfo, function(){
//       checkWalletBalance()
//     })
//   })
// })

//promises

var promise = new Promise(function(myResolve, myReject){ //create a promise object
  //producing code
  var x = 0
  if (x === 0) {
    myResolve('This is a result')
  } else {
    myReject('This is an error')
  }
})

console.log(promise)

promise.then()

// consuming code
promise.then(function(val){ //
  console.log(val)
}, function(err){
  console.log(err)
})

// using Promises as example

createOrder(product).then(function(){
  return payment(orderId)
}).then (function(){
  return showOrderHistory()
}).then (function (){
  checkWalletBalance()
})

// Application Programming Interface (AJAX, AXIOS, FETCH, HTTP Library)

function getData(){
  axios.get(url)
    .then(function(res){
      console.log(res.data)
    })
    .catch(function(err){
      console.log(err)
    })
}

// fetch.get(url).then().catch()

// axios.post(url, {}).then().catch()
