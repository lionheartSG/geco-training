import "../App.css"
import React from "react"
import PropTypes from "prop-types"

class Week3Day2a extends React.Component {
  render() {
    const { employees } = this.props

    return (
      <div className="employee-cards" onMouseOver={this.mouseOver} onMouseLeave={this.mouseOut}>
        {employees.map(employee => {
          return (
            <div id={employee.id} key={employee.id} className="card">
              <h1>{employee.name}</h1>
              <img src={employee.image} alt="" />
              <div style={{ display: "none" }}>
                <h4>Age: {employee.age}</h4>
                <h4>D.O.B: {employee.DOB}</h4>
                <h4>Salary: {employee.salary}</h4>
                <h4> Designation: {employee.designation}</h4>
                <h4>Department: {employee.department}</h4>
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
          if (e.target.id === ele.id) ele.lastChild.style.display = "block"
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
          if (e.target.id === outEle.id) outEle.lastChild.style.display = "none"
        })
      })
    })
  }
}

Week3Day2a.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    DOB: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    designation: PropTypes.string.isRequired,
  }))
}

export default Week3Day2a
