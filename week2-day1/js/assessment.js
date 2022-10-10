// Question 1 -

console.log('A' - 1);                 // NaN
console.log('A' + 1);                 // A1
console.log(2 + '2' + '2');           // 42
console.log('hello' + 'world' + 89);  // helloworld89
console.log('hello' - 'world' + 89);  // NaN
console.log('hello' + 78);            // hello78
console.log('78' - 90 + '2');         // -122 (change to string and concat)
console.log(2 - '2' + 90);            // 90
console.log(89 - '90' / 2);           // 44
console.log(89  + 'hello' + 90 / 9)   // 89hello10
console.log(2 + '2' + null);					// 22null
console.log(true > false)			        // true
console.log(true + false)			        // 1 (Because true is 1 and false is 0)
console.log(true + false / 2)			    // 1 ( 0/2 result in 0 but true is 1)
console.log((true + false) > 3)			  // False



// Question 2 - Extract first five letters from a string ('gfuh ieiuei')
var str2 = "gfuh ieiuei"
console.log(str2.replace(/\s+/, '').slice(0, 5))

// Question 3 - Get the length of a string and make it uppercase ('hduej dij')
var str3 = 'hduej dij'
console.log(str3.toUpperCase())

// Question 4 - Take a string, make it uppercase and trim it (' biji jdo ')
var str4 = ' biji jdo '
console.log(str4.toUpperCase().trim())

// Question 5 - Replace specified word in a string ('', '')
var str5 = "My name is Rafi"
console.log(str5.replace("Rafi", "John"))

// Question 6 - Find the duplicate in a string() (use array)
var str6 = "My name is Rafi. Rafi is a programmer"
str6array = str6.split(/\W/)
var set = new Set(str6array)

const duplicates = str6array.filter((s) => {
  if (set.has(s)) {
    set.delete(s)
  } else {
    return s
  }
})

console.log(duplicates)

// Question 7 = Reverse a string (use array method)

var str7 = "My name is Rafi. Rafi is a programmer"
console.log(str7.split(" ").reverse().join())

// Question 8 - Find the highest and lowest value in array

var array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(Math.min(...array8))
console.log(Math.max(...array8))

// Question 9 - Practice array of objects

const User = [
  {
  firstName: "James",
  lastName: "Bond"
  },
  {
  firstName: "Harry",
  lastName: "Potter"
  },
  {
  firstName: "Ron",
  lastName: "Weasley"
  },
  {
  firstName: "Tom",
  lastName: "Cruise"
  },
  {
  firstName: "Taylor",
  lastName: "Swift"
  }
]

// Question 10 - Display first 3 elements in an array (Using array of object from Qn 9)

console.log(User.slice(0, 3))

// Question 11 - Remove 4th (index) element and add 2 element there (Using array of object from Qn 9)

User.splice(4, 1, {firstName: "Freddy", lastName: "Kruger"} , {firstName: "Jason", lastName: "Bourne"})

console.log(User)

// Question 12 -

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '

console.log(result = str1.trim() + " " + str2.trim() + " " + str3.trim().toLowerCase().replace("hawaii" , "Hawaii"))
