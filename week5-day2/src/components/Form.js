import "../App.css"
import React, {useState, useRef} from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"


export const Form = ({ customBackground, labelColor, inputColor, addTodoItem, setInputValue }) => {
  const [value, setValue] = React.useState(dayjs("2022-11-01T21:11:54"))
  const inputRef = useRef(null);
  const handleChange = newValue => {
    setValue(newValue)
  }

  return (
    <>
      <div className="full-form" style={{ backgroundColor: customBackground }}>
        Fill in information
        <form>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TextField
              inputRef={inputRef}
              id="outlined-required"
              defaultValue=""
              fullWidth
              margin="normal"
              label="To Do"
              onChange={e => setInputValue(e.target.value)}
              InputProps={{
                style: {
                  color: inputColor
                }
              }}
              InputLabelProps={{
                style: { color: labelColor },
              }}
            />
            <MobileDatePicker
              label="By when?"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={params => (
                <TextField
                  {...params}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    style: {
                      color: inputColor
                    }
                  }}
                  InputLabelProps={{
                    style: { color: labelColor },
                  }}
                />
              )}
            />
            <br />
            <br />
            <Button type="submit" variant="outlined" onClick={(e) => {
              e.preventDefault()
              addTodoItem(value)
              inputRef.current.value = ''
              }}>Submit</Button>
          </LocalizationProvider>
        </form>
      </div>
    </>
  )
}
