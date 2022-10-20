//Qn1 - Create multiply, division, subtraction function with arrow function/fat arrow

const multiply = (a, b) => {
  console.log("Multiplication of a and b is", a * b)
}
multiply(5, 10)

const division = (a, b) => {
  console.log("Division of a and b is", a / b)
}
division(5, 10)

const subtraction = (a, b) => {
  console.log("Subtraction of a and b is", a - b)
}

subtraction(5, 10)

// Qn2 - Create a employee object and display its data in console (for...in).

const employee = {
  firstName: "Abdul",
  lastName: "Rafi",
  age: 38,
  race: "Malay"
}

for (const key in employee) {
  console.log(`${key}: ${employee[key]}`)
}

//Qn3a - Check if all the property values(firstName) in an array of object is same or not

const employees = [
  {
    firstName: "Muhammad",
    lastName: "Sabri",
    age: 32,
    race: "Malay"
  },
  {
    firstName: "Ng",
    lastName: "Jun Hui",
    age: 25,
    race: "Chinese"
  },
  {
    firstName: "Sean",
    lastName: "Seow",
    age: 26,
    race: "Chinese"
  }
]

const firstNameArray = arrayObj =>
  arrayObj.map(element => {
    return element.firstName
  })

const firstNameEvaluation = nameArrays => {
  const result = nameArrays.every(value => {
    return value === nameArrays[0]
  })
  console.log(result)
}

firstNameEvaluation(firstNameArray(employees))

//Qn3b - Get the value of the first element in an array that has value greater than 20

const array3b = [1, 13, 54, 21, 10, 40]

const findValueMoreThan20 = array => {
  const result = array.find(element => element > 20)
  return result
}

console.log(findValueMoreThan20(array3b))

//Qn3c - Get the value of the first element in an array that has value less than 20

const array3c = [77, 13, 22, 21, 12, 7]

const findValueLessThan20 = array => {
  const result = array.find(element => element < 20)
  return result
}

console.log(findValueLessThan20(array3c))

//Qn3d - Filter data based on a id(property) in an array of objects: pick any random id value

const students = [
  {
    firstName: "Abdul",
    lastName: "Rafi",
    age: 38,
    race: "Malay",
    id: 1
  },
  {
    firstName: "Muhammad",
    lastName: "Sabri",
    age: 32,
    race: "Malay",
    id: 2
  },
  {
    firstName: "Ng",
    lastName: "Jun Hui",
    age: 25,
    race: "Chinese",
    id: 3
  },
  {
    firstName: "Sean",
    lastName: "Seow",
    age: 26,
    race: "Chinese",
    id: 4
  }
]

const filterByID = (array, id) => {
  const result = array.filter(e => e.id == id)
  for (const key in result[0]) {
    console.log(`${key}: ${result[0][key]}`)
  }
}

const getRandomInt = max => Math.floor(Math.random() * max)

console.log(filterByID(students, getRandomInt(4)))

//Qn3e - Round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]

const array3e = [9.8, 9.7, 4.5, 3.4]

const roundArrayToDecimal = array => {
  const roundedArray = array.map(e => Math.round(e))
  const totalSum = roundedArray.reduce((initial, current) => initial + current)
  return totalSum
}

console.log(roundArrayToDecimal(array3e))

//Qn3f - Get all the person name based on age greater than and equal to 18, eligible to vote

const citizens = [
  {
    firstName: "joe",
    age: 24
  },
  {
    firstName: "alina",
    age: 12
  },

  {
    firstName: "alex",
    age: 20
  }
]

const eligibleVoters = array => {
  const voters = array.filter(e => e.age >= 18)
  voters.forEach(voter => console.log("This person is eligible to vote:", voter.firstName, "age:", voter.age))
}

eligibleVoters(citizens)

//Qn3G - Sum all the elements of an array [90, 89, 56, 45]

const array3g3h = [90, 89, 56, 45]

const sumOfArray = array => {
  totalSum = array.reduce((initial, current) => initial + current)
  return totalSum
}

console.log(sumOfArray(array3g3h))

//Qn3H - Check element is odd or even in an array [90, 89, 56, 45]

const checkElementOddorEven = array => {
  array.forEach(e => {
    e % 2 == 0 ? console.log(`${e} is even`) : console.log(`${e} is odd`)
  })
}

checkElementOddorEven(array3g3h)

//Qn3i - Sum of all the salaries and display final sum value

const salaries = [
  {
    salary: 56000
  },
  {
    salary: 90000
  }
]

const sumSalaries = (arrayObj) => {
  totalSum = arrayObj.reduce((initial, current) => initial.salary + current.salary)
  return totalSum
}

console.log(sumSalaries(salaries))

//Qn3j - Concat all array elements ['red', 'pink', 'orange', 'red']: 'redpinkorangered'

const colours = ['red', 'pink', 'orange', 'red']

const concatColours = (array) => {
  let concat = array.reduce((initial, current) => initial + current)
  return concat
}

console.log(concatColours(colours))
