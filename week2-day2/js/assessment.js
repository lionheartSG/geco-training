function checkChar() {
  var x = document.getElementById("qn1").value.toLowerCase()

  if (x.match(/[a-z]/)) {
    switch (x) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        document.getElementById("ans1").innerHTML = "This is a vowel"
        document.getElementById("qn1").value = ""
        break

      default:
        document.getElementById("ans1").innerHTML = "This is not a vowel"
        document.getElementById("qn1").value = ""
        break
    }
  } else {
    document.getElementById("ans1").innerHTML = "This is not an alphabet or you have not input anything"
    document.getElementById("qn1").value = ""
  }
}

function calculate() {
  var qn2a = parseInt(document.getElementById("qn2a").value)
  var qn2b = document.getElementById("qn2b").value
  var qn2c = parseInt(document.getElementById("qn2c").value)

  console.log(qn2a, qn2b, qn2c)

  switch (qn2b) {
    case "+":
      document.getElementById("ans2").innerHTML = qn2a + qn2c
      break

    case "+":
      document.getElementById("ans2").innerHTML = qn2a - qn2c
      break

    case "*":
      document.getElementById("ans2").innerHTML = qn2a * qn2c
      break

    case "/":
      document.getElementById("ans2").innerHTML = qn2a / qn2c
      break

    default:
      document.getElementById("ans2").innerHTML = "You have input the wrong operator"
      break
  }
}

function triangleCheck() {
  var qn3a = parseInt(document.getElementById("qn3a").value)
  var qn3b = parseInt(document.getElementById("qn3b").value)
  var qn3c = parseInt(document.getElementById("qn3c").value)

  if (qn3a === qn3b && qn3b === qn3c) {
    document.getElementById("ans3").innerHTML = "This is an Equilateral triangle"
  } else if (qn3a === qn3b || qn3b === qn3c) {
    document.getElementById("ans3").innerHTML = "This is an Isosceles triangle"
  } else {
    document.getElementById("ans3").innerHTML = "This is a Scalene triangle"
  }
}

function calculateEnergyCost() {
  const pricing = [
    { rate: 0.5, limit: 50 },
    { rate: 0.75, limit: 100 },
    { rate: 1.2, limit: 100 },
    { rate: 1.5, limit: 1000000 }
  ]

  var qn4 = parseInt(document.getElementById("qn4").value)

  let total = ""

  for (let i = 0; i < pricing.length; i++) {
    if (qn4 > pricing[i].limit) {
      total = +(pricing[i].rate * pricing[i].limit)
      qn4 = qn4 - pricing[i].limit
    } else {
      total = total + pricing[i].rate * qn4
      break
    }
  }

  const totalWithTax = qn4 >= 250 ? (document.getElementById("ans4").innerHTML = `$${total * 1.2}`) : (document.getElementById("ans4").innerHTML = `$${total}`)
}

//Qn5 - Create parametized method/function to multiply 3 numbers

function multiplyBy3Number(a, b, c) {
  return a * b * c
}

console.log(multiplyBy3Number(10, 20, 30))

//Qn6 - Create parametized method to divide 2 numbers

function divideWith2(a, b) {
  return a / b
}

console.log(divideWith2(10, 20))

//Qn7 - Find the biggest of 3 numbers (89, 78, 56)

function biggestNumber(a) {
  return Math.max(...a)
}

console.log(biggestNumber([89, 78, 56]))

//Qn8 - Take user input: value is even or odd

function evenOrOdd(a) {
  a % 2 === 0 ? console.log("Even") : console.log("Odd")
}

evenOrOdd(7)

//Qn9 - Take user input: given number is multiple of 3 or not e.g.10900

function multipleOf3(a) {
  a % 3 === 0 ? console.log("Yes. It is multiple of 3") : console.log("No. It is not multiple of 3")
}

multipleOf3(10)

//Qn10 - Take user input: calculate simple interest ((p/r * t) * 100 )

function simpleInterest(principal, rate, time) {
  return (principal / (rate * time)) * 100
}

console.log(simpleInterest(1000, 24, 1))

//Qn11 - Take user input: 0-6 display day week depending upon what user is entering (0-> sunday) : using switch

function displayDay(num) {
  switch (num) {
    case 0:
      console.log("Sunday")
      break
    case 1:
      console.log("Monday")
      break
    case 2:
      console.log("Tuesday")
      break
    case 3:
      console.log("Wednesday")
      break
    case 4:
      console.log("Thursday")
      break
    case 5:
      console.log("Friday")
      break
    case 6:
      console.log("Saturday")
      break

    default:
      console.log("Wrong input")
      break
  }
}

displayDay(4)

//Qn 12a - Multiplication table (ask number from user)

function multiplicationTable(baseNumber, upTo) {
  for(let i = 1; i <= upTo; i++) {
      const eachAnswer = i * baseNumber
      console.log(`${baseNumber} * ${i} = ${eachAnswer}`);
  }
}

multiplicationTable(7, 3)

//Qn 12b - Sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus

function sumOfDigits(a) {
  let total = 0
  const array = Array.from(String(a), Number)
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

console.log(sumOfDigits(1234568))

//Qn 12c - Pallindrome string (aca: aca(reverse) is a pallindrome, abc: cba is not a Pallindrome)

function isPalindrome(a){
  const str = [...a]
  const palin = str.reverse().join('') === a ? console.log("Its a Palindrome") : console.log("Its not a Palindrome")
}

isPalindrome("ABCCBA")

//Qn 12d - display even numbers up to n number (ask user for number

function displayEvenNumber(a) {
  for (let i = 1; i < a; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}

displayEvenNumber(20)

//Qn 12e - Count of even and odd number from 1 to 999

function countEvenAndOdd(a) {
  let even = 0
  let odd = 0

  for (let i = 1; i < a; i++) {
    if (i % 2 === 0) {
      even += 1
    } else {
      odd += 1
    }
  }
  console.log(`Number of even: ${even}`, `Number of odd: ${odd}`)
}

countEvenAndOdd(999)

//Qn 12f - Count occurrence of a particular character in a string (hello: count of l is 2)

function countChars(char, string) {
  count = 0
  const stringArray = [...string]
  stringArray.forEach(str => {
    if (str === char)
    count += 1
  })
  return count
}

console.log(countChars("l", "hello"))

//Qn 12g - Sum and average of array elements [1, 9, 8]

function sumAndAverage(array) {
  sum = 0
  array.forEach((a) => {
    sum += a
  })
  console.log(`Sum: ${sum}, Average: ${sum / array.length}`)
}

sumAndAverage([1,2,3,4])

//Qn 12h - Largest number in an array (do with loops)

function largestNumber(a) {
  let large = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > large) {
      large = a[i]
    }
  }
  return large

}

 console.log(largestNumber([1,2,3,,4,5,6,7,200]))

 //Qn 13 - From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or else print the number

 function fooBarHello (a) {
  if (a % 5 === 0 && a % 3 === 0 ) {
    console.log("Hello")
  } else if (a % 5 === 0) {
    console.log("Bar")
  } else if (a % 3 === 0) {
    console.log("Foo")
  } else {
    console.log(a)
  }
 }

fooBarHello(15)

//Qn 14 - Using selectors: create a list in html: ask user any item from list display 'item' found.

function checkItemFound() {
  const itemList = document.querySelectorAll(".item")
  const value = document.getElementById('qn14').value

  itemList.forEach(item => {
    if (item.innerText.toLowerCase() === value.toLowerCase()) {
      item.innerHTML = `${item.innerText} "Item Found"`
    }
  })
  document.getElementById('qn14').value = ''
}
