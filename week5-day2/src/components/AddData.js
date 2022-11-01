import '../App.css';
import React, { useState } from "react"
import {useRecoilState} from 'recoil'


let id = 0


const AddData = () => {
  const [inputValue, setInputValue] = useState("")
  const [val, setAtomData] = useRecoilState(atomData) //access atom data

  const onChange =() => {
    setInputValue(inputValue)
  }


  //to update atom
  const addData = () => {
    if (inputValue) {
      setAtomData((list) => [
        ...list, {
          id: getId(),
          text: inputValue
        }
      ])
    }
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}/>
      <button onClick={handleClick}>Add Data</button>
    </div>
  )
}

export default AddData
