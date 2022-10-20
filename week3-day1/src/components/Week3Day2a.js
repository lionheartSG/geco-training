import "../App.css"
import { Component } from "react"

class Week3Day2a extends Component {
  employees = [
    {
      id: 1,
      name: "Abdul Rafi",
      age: 42,
      DOB: "01/05/1980",
      salary: 2000,
      designation: "Manager",
      image: "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      department: "Marketing"
    },
    {
      id: 2,
      name: "Mohamed Sabri",
      age: 38,
      DOB: "1/1/1984",
      salary: 3000,
      designation: "developer",
      image: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Blank&hatColor=Red&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
      department: "Engineering"
    },
    {
      id: 3,
      name: "Sean Seow",
      age: 32,
      DOB: "1/05/1990",
      salary: 1500,
      designation: "Data Analyst",
      image: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=Default&mouthType=Default&skinColor=Light",
      department: "Research"
    },
    {
      id: 4,
      name: "Ng Jun Hui",
      age: 32,
      DOB: "07/07/1990",
      salary: 1800,
      designation: "Technician",
      image: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Blank&hatColor=Heather&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=Default&mouthType=Default&skinColor=Light",
      department: "Engineering"
    }
  ]

  render() {
    return (
      <div className="employee-cards" onMouseOver={this.mouseOver} onMouseLeave={this.mouseOut}>
        {this.employees.map(employee => {
          return (
            <div id={employee.id} key={employee.id} className="card" >
              <h3>{employee.name}</h3>
              <img src={employee.image} alt="" />
              <div style={{ display: "none" }}>
                <h6>Age: {employee.age}</h6>
                <h6>D.O.B: {employee.DOB}</h6>
                <h6>Salary: {employee.salary}</h6>
                <h6> Designation: {employee.designation}</h6>
                <h6>Department: {employee.department}</h6>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  mouseOver = () => {
      const hoverElements = document.querySelectorAll(".card")
      const hiddenElements = document.querySelectorAll(".card")
      hoverElements.forEach(hoverElement => {
        hoverElement.addEventListener("mouseover", e => {
          hiddenElements.forEach(ele => {
            if (e.target.id === ele.id)
            ele.lastChild.style.display = "block"
          })
        })
      })
  }

  mouseOut = () => {
    const outhoverElements = document.querySelectorAll(".card")
    const outhiddenElements = document.querySelectorAll(".card")
    outhoverElements.forEach(outhoverElement => {
      outhoverElement.addEventListener("mouseleave", e => {
        outhiddenElements.forEach(outEle => {
          if (e.target.id === outEle.id)
          outEle.lastChild.style.display = "none"
        })
      })
    })
}
}

export default Week3Day2a
