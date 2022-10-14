//qn1 - Write a js method, when user click on button, display random integer below it.

const generateRandomNumber = () => {
  let number = Math.floor(Math.random() * 10)
  document.getElementById("ans1").innerHTML = number
}


//qn2 -	Write js function to format number up to specified decimal places.

const decimalPlaces = () => {
  const inputNum = parseFloat(document.getElementById("num").value)
  const inputDec = parseInt(document.getElementById("dec").value)
  const result = inputNum.toFixed(inputDec)
  document.getElementById("ans2").innerHTML = result
}

//qn3 -Check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

const checkWord = () => {
  const inputText = document.getElementById("qn3a").value.toLowerCase()
  const inputWord = document.getElementById("qn3b").value.toLowerCase()
  const splitString = inputText.split(' ').some(e => e === inputWord)


  splitString ? document.getElementById("ans3").innerHTML = "The word exists" : document.getElementById("ans3").innerHTML = "The word doesn't exists"
}

//qn4 - Given year leap year or not (29 in feb)

const checkLeapYear = () => {
  const inputYear = parseInt(document.getElementById("qn4").value)
  const leap = new Date(inputYear, 1, 29).getDate() === 29;
  leap ? document.getElementById("ans4").innerHTML = `${inputYear} is a leap year` : document.getElementById("ans4").innerHTML = `${inputYear} is not a leap year`
}

//qn6 - Add only even numbers in an array (array elements to be input by user)

const array6 = [25, 36, 42]

const addOnlyEven = (array) => {
  totalSum = array.reduce((initial, current) => current % 2 === 0 && initial % 2 === 0 ? initial + current : current)
  return totalSum
}

console.log('Answer for question 6:', addOnlyEven(array6))

//qn7 - Found an element in array [10, 78, 90] return number, exit from an array// take user input

const array7 = [24, 64, 56, 25, 21, 26, 96, 111, 2525]

const findElement = (array, input) => {
  array.find(e => e === input ? console.log(`The number ${e} is found in the array`) : null)
}

findElement(array7, 64)

//Qn8 - Biggest of even number in an array ([10, 12, 90, 93, 707]): biggest even number is 90

const array8 = [10, 12, 90, 93, 707]

const findBiggestEven = (array) => {
  evenArrays = array.map (e => e % 2 === 0 ? e : null)
  return Math.max(...evenArrays)
}

console.log(findBiggestEven(array8))

//Qn9 - Add two array [10,20,30] + [1,2,3]: [11, 22, 33]

array9a = [10,20,30]
array9b = [1,2,3]

const addTwoArrays = (array1, array2) => {
  results = array1.map((e,i) => e + array2[i])
  console.log(results)
}

addTwoArrays(array9a, array9b)

//Qn10 - Reverse an array(with loops) [10, 78, 0]: [0, 78, 10]

const array10 = [10, 78, 0]

const reverseArray = (array) => {
  results = []
  for (let index = 0; index < array.length; index++) {
    results.push(array[array.length -1 - index])
  }
  console.log("Array has been reversed: ", results)
}

reverseArray(array10)

//Qn 11 - Reverse a string using loops

const reverseString = (string) => {
  results = []
  splitString = string.split(" ")
  console.log(splitString)
  for (let index = 0; index < splitString.length; index++) {
    results.push(splitString[splitString.length -1 - index])
  }
  console.log("String 'My name is Rafi' has been reversed: ", results)
}

reverseString("My name is Rafi")

//Qn 12 - Remove duplicate items from an array [10, 50,20 67, 10, 20]: remove 10, 20

const array12 = [10, 50, 20, 67, 10, 20]

const removeDuplicate = (array) => {
  return array.filter((e,i,a) => a.indexOf(e) === i)
}

console.log("Duplicates of 10, 50, 20, 67, 10, 20 removed", removeDuplicate(array12))

//Qn 13 - Find duplicate values in an array.(display index of duplicate values e.g. 0,2,4,5)

const array13 = [1, 5, 3, 7, 2, 5, 8, 2, 0, 6]

const findDuplicate = (array) => {
  duplicates = array.map((e,i,a) => a.indexOf(e) !== i ? i: 'Not duplicate')
  return duplicates
}

console.log(findDuplicate(array13))

//Qn 14 - Find difference/subtraction in 2 arrays [12, 56, 789] - [12, 56, 789]: [0, 0, 0]

array14a = [112, 56, 789]
array14b = [112, 56, 789]

const subtractTwoArrays = (array1, array2) => {
  results = array1.map((e,i) => e - array2[i])
  console.log(array14a, "-", array14b, '=', results)
}

subtractTwoArrays(array14a, array14b)

//Qn 15 - Ask user, remove a specific element from an array [12, 56, 89]: remove 1 element
const array15 = [12, 56, 89]

const removeSpecificElement = (array, input) => {
  return array.filter(e => e !== input)
}

console.log("Removing 12 from [12, 56, 89]", removeSpecificElement(array15, 12))

//Qn 16 -	Get the largest odd and even number in an array [10, 12, 900, 93, 707].

const array16 = [10, 12, 900, 93, 707]

const largestOddandEven = (array) => {
  maxEven = array.filter(e => e % 2 === 0)
  maxOdd = array.filter(e => e % 2 !== 0)
  console.log("Max for even number:", Math.max(...maxEven), "Max for odd number:", Math.max(...maxOdd))
}

largestOddandEven(array16)

//Qn 17 - Take 3 inputs from user and structure them into objects.

class somePerson {
  constructor(name, age, gender){
    this.name = name
    this.age = age
    this.gender = gender
  }
}

const person1 = new somePerson("Abdul Rafi", 38, "Male")

console.log(person1)

//Qn 18 - 18.	Create a class Car: city(),specialFeature() name, brand, color, manufacture

class Car {
  constructor(name, brand, color, manufacture) {
    this.name = name
    this.brand = brand
    this.color = color
    this.manufacture = manufacture
  }
  city(){
    console.log("This car is from France")
  }

  specialFeature(){
    console.log("This car can drive autopilot")
  }
}

const car1 = new Car("Model S", "Tesla", "Red", 2022)

console.log(car1)
car1.city()
car1.specialFeature()

//Qn 19 - Create a class Book: type_of_book() no. of pages, type of pages, author

class Book{
  constructor(pages, type, author){
    this.pages = pages
    this.type = type
    this.author = author
  }

  type_of_books(){
    console.log("This is a horror book")
  }
}

const scaryBook = new Book(222, "paperback", "Stephen Hawking")
console.log(scaryBook)
scaryBook.type_of_books()

//Qn 20 - 20.	Create a class Animal: walk(), eat(), climb() gender, name, disease

class Animal {
  constructor(name, gender, disease){
    this.name = name
    this.gender = gender
    this.disease = disease
  }
  walk(){
    if (this.name === 'fish' || this.name === 'bird') {
      console.log(this.name, "don't walk")
    } else {
      console.log(this.name, "walks")
    }
  }

  eat(){
    if (this.name === 'fish' || this.name === 'bird'){
      console.log(this.name, "eats plant")
    } else {
      console.log(this.name, "maybe eat meat")
    }
  }

  climb(){
    if (this.name === 'fish' || this.name === 'bird'){
      console.log(this.name, "cannot climb")
    } else {
      console.log(this.name, "maybe can climb")
    }
  }
}

const fish = new Animal ("fish", "male", "slimy scale")

console.log(fish)
fish.eat()
fish.walk()
fish.climb()

//Qn 21 - Inheritance: parent electronics (methods: name, version, company name):
//childclass(laptop, ipad, mobile, tablet):

class Electronics{
  constructor(model, version, company){
    this.model = model
    this.version = version
    this.company = company
  }
}

class laptop extends Electronics {
  constructor(model, version, company){
    super(model, version, company)
  }
  configuration(ram){
    this.configuration = ram
  }

  price(price){
    this.price = price
  }
}

class ipad extends Electronics {
  constructor(model, version, company){
    super(model, version, company)
  }
  configuration(ram){
    this.configuration = ram
  }

  price(price){
    this.price = price
  }
}

class mobile extends Electronics {
  constructor(model, version, company){
    super(model, version, company)
  }
  configuration(ram){
    this.configuration = ram
  }

  price(price){
    this.price = price
  }
}

class tablet extends Electronics {
  constructor(model, version, company){
    super(model, version, company)
  }
  configuration(ram){
    this.configuration = ram
  }

  price(price){
    this.price = price
  }
}

const laptop1 = new laptop ("Legion", "V1", "Lenovo")
laptop1.configuration("64gb")
laptop1.price("2500")
console.log(laptop1)


const askPin = () => {
  options = document.getElementById("screen")
  options.innerHTML = `
  <p> <strong> Key in your pin below: </strong></p>
  <form>
    <input type="text" id="pin" value="">
  </form>
  <p>Press Clear to clear Pin</p>
  `
  document.getElementById("")
}


const optionScreen = () => {
  options.innerHTML = `
  <p> <strong> Please choose from the following options:</strong></p>
  <p> 1. Balance & Query </p>
  <p> 2. Withdraw Amount </p>
  <p> 3. Change Pin </p>
  <p> 4. Mini statement </p>
  <p> 5. Saving & current account</p>
  <p> 6. Print receipt </p>
  `
  selection = document.querySelectorAll(".keys")
  selection.forEach((s)=>{
    s.addEventListener("click", (e)=>{
      switch (e.target.dataset.id) {
        case "1":
          balanceQuery()
          break;

        default:
          break;
      }
    })
  })
}

const exit = () => {
  options = document.getElementById("screen")
  options.innerHTML = `
  <p>Welcome. Click red button to insert card</p>
  <div class="insert-card" onClick="askPin()"></div>
  `
}

const cleanUp = () => {
  options = document.getElementById("pin")
  options.value = ''
}

const enter = () => {
  getPin = document.getElementById("pin").value
  if (getPin === '27') {
    optionScreen()
  } else {
    options = document.getElementById("screen")
    options.innerHTML = `
    <p>You have entered an incorrect pin. Please try again</p>
    `
    setTimeout(() => {
      askPin()
    }, 2000);
  }
}

const balanceQuery = () => {
  options = document.getElementById("screen")
  options.innerHTML = `
  <h3>Your balance</h3>
  <p>$5000</p>
  `
}
