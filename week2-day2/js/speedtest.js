function checkChar() {
  var x = document.getElementById("qn1").value.toLowerCase()
  const start = performance.now()
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
  const end = performance.now();
  console.log(`Execution time for hybrid(Regex and switch): ${end - start} ms`);
}


function fullSwitch() {
  var x = document.getElementById("qn1").value.toLowerCase()
  const start = performance.now()
    switch (x) {
      case "a":
      document.getElementById("ans1").innerHTML = "This is a vowel"
      document.getElementById("qn1").value = ""
      case "b":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "c":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "d":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "e":
      document.getElementById("ans1").innerHTML = "This is a vowel"
      document.getElementById("qn1").value = ""
      case "f":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "g":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "h":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "i":
      document.getElementById("ans1").innerHTML = "This is a vowel"
      document.getElementById("qn1").value = ""
      case "j":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "k":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "l":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "m":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "n":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "o":
      document.getElementById("ans1").innerHTML = "This is a vowel"
      document.getElementById("qn1").value = ""
      case "p":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "q":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "r":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "s":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "t":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "u":
      document.getElementById("ans1").innerHTML = "This is a vowel"
      document.getElementById("qn1").value = ""
      case "v":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "w":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "x":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "y":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
      case "z":
      document.getElementById("ans1").innerHTML = "This is not a vowel"
      document.getElementById("qn1").value = ""
        break

      default:
        document.getElementById("ans1").innerHTML = "This is not an alphabet"
        document.getElementById("qn1").value = ""
        break
    }
  const end = performance.now();
  console.log(`Execution time for full switch: ${end - start} ms`);
}
