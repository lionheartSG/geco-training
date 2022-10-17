setTimeout(() => {
  alert("Welcome to Week 1 Day 3 assignment")
}, 3000);

function getAPI(){
  const result = document.getElementById("name").value
  const results = document.querySelector("#results")

  url = `https://www.omdbapi.com/?s=${result}&apikey=7fd2119a`
  axios.get(url)
  .then(function(res){
    res.data.Search.forEach(r => {
      const movieTag =
      `<li>
        <img src="${r.Poster}">
        <p>${r.Title}</p>
      </li>`
      results.insertAdjacentHTML("beforeend", movieTag)
    })
  })
  .catch(function(err){
    console.log(err)
  })
}

function toMakeAPromise(a){
  console.log("Please wait for 5 seconds before Promise is made :)")
  setTimeout(() => {
    const promiseMe = new Promise((resolve, reject) => {
      if (typeof a === "string") {
        setTimeout(() => {
          resolve(a.toUpperCase());
        }, 5000);
      } else {
        setTimeout(() => {
          reject('This promise is settled but rejected after 2 seconds');
        }, 2000);
      }
    });

    promiseMe.then(
      (result) => {
         console.log(result);
      },
      (error) => {
         console.log(error);
      }
    );
  }, 5000);
}

toMakeAPromise("This is a string. Resolved and made upperCase!")
toMakeAPromise(123)

alphaRegex = /^[a-zA-Z\s]+$/
emailRegex = /(\w*)(@)(\w*)(\.)(\w*)$/
contactRegex = /\d{8}/
ageRegex = /\d/
desRegex = /[a-zA-Z1-9]/

const personName = document.getElementById('personName')
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const age = document.getElementById('age')
const designation = document.getElementById('designation')
const files = document.getElementById('files')
const dob = document.getElementById('dob')

let [validName, validEmail, validContact, validAge, validDesignation, validFile, validDOB] = Array(7).fill(false)

personName.addEventListener("keyup", (e)=>{
  if(e.target.value.match(alphaRegex) || e.target.value === '') {
    document.getElementById('nameError').innerHTML = ""
    validName = true
  } else {
    document.getElementById('nameError').innerHTML = "No numbers or special character allowed"
    validName = false
  }
})

email.addEventListener("keyup", (e)=>{
  if(e.target.value.match(emailRegex) || e.target.value === '') {
    document.getElementById('emailError').innerHTML = ""
    validEmail = true
  } else {
    document.getElementById('emailError').innerHTML = "Please key in a valid email"
    validEmail = false
  }
})

contact.addEventListener("keyup", (e)=>{
  if(e.target.value.match(contactRegex) && e.target.value.length === 8 || e.target.value === '') {
    document.getElementById('contactError').innerHTML = ""
    validContact = true
  } else {
    document.getElementById('contactError').innerHTML = "Please input 8 digits contact number"
    validContact = false
  }
})

age.addEventListener("keyup", (e)=>{
  if(e.target.value.match(ageRegex) && e.target.value.length === 2 && e.target.value >= 18 || e.target.value === '') {
    document.getElementById('ageError').innerHTML = ""
    validAge = true
  } else {
    document.getElementById('ageError').innerHTML = "Please input a valid age! You must be more than 18 to register"
    validAge = false
  }
})

designation.addEventListener("keyup", (e)=>{
  if(e.target.value.match(desRegex) || e.target.value === '') {
    document.getElementById('designationError').innerHTML = ""
    validDesignation = true
  } else {
    document.getElementById('designationError').innerHTML = "Only alphabets and numbers allowed"
    validDesignation = false
  }
})

files.addEventListener("change", (e)=>{
  if(e.target.value) {
    document.getElementById('fileError').innerHTML = ""
    validFile = true
  } else {
    document.getElementById('fileError').innerHTML = "Please upload at least one file"
    validFile = false
  }
})

dob.addEventListener("change", (e)=>{
  let validateDate = e.target.value.split('-')
  if(validateDate[0] < 2022 && validateDate[0] > 1922) {
    document.getElementById('dateOfBirthError').innerHTML = ""
    validDOB = true
  } else {
    document.getElementById('dateOfBirthError').innerHTML = "Please input your correct year of birth (1922 - 2022)"
    validDOB = false
  }
})


const validateForm = () => {
  if (validName && validEmail && validContact && validAge && validDesignation && validFile && validDOB){
    document.getElementById('valid?').innerHTML = "FORM IS SUBMITTED"
  } else
  document.getElementById('valid?').innerHTML = "FORM IS NOT SUBMITTED! PLEASE CHECK!"
}
