import { useRecoilState } from "recoil"
import "../App.css"
import React from "react"
import { todoAtom } from "../recoil/todoAtom"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export const Display = () => {
  const [list, setList] = useRecoilState(todoAtom)

  const handleDelete = id => {
    const newList = list.filter(info => info.id !== id)
    setList(newList)
  }

  const handleUpdate = id => {
    const newList = list.map(info => {
      if (info.id === id) {
        return info.isComplete ? {...info, isComplete: false } : {...info, isComplete: true }
      }
      return info
    })
    setList(newList)
  }

  return (
    <>
      {list.length > 0 ? (
        list.map(info => {
          return (
            <div key={info.id} id="card">
              <div className="top-part">
                <h5>Task No: {info.id}</h5>
                <p>{info.text}</p>
                <h3>{info.date.$D}-{info.date.$m}-{info.date.$y}</h3>
                <div className="buttons-wrapper">
                  <Box sx={{ m: "15px" }}>
                    <Button variant="contained" color={info.isComplete ? "secondary" : "success"} size="small" onClick={() => handleUpdate(info.id)}>
                      {info.isComplete ? "Mark Incomplete" : "Mark Completed"}
                    </Button>
                  </Box>

                  <Button variant="contained" color="error" size="small" onClick={() => handleDelete(info.id)}>
                    Delete
                  </Button>
                </div>
              </div>
              <div className="bottom-part">
                <p style={{color: 'white'}}><strong>{info.isComplete ? "Completed" : "Not Completed"}</strong></p>
              </div>
            </div>
          )
        })
      ) : (
        <> </>
      )}
    </>
  )
}

export default Display
