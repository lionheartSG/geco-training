import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import "./Form.css"

export default function ValidationTextFields() {
  const styles = {
    root: {
      // - The TextField-root
      border: "solid 10px #0ff", // - For demonstration: set the TextField-root border
      padding: "3px", // - Make the border more distinguishable

      // (Note: space or no space after `&` matters. See SASS "parent selector".)
      "& .MuiOutlinedInput-root": {
        // - The Input-root, inside the TextField-root
        "& fieldset": {
          // - The <fieldset> inside the Input-root
          borderColor: "pink" // - Set the Input border
        },
        "&:hover fieldset": {
          borderColor: "yellow" // - Set the Input border when parent has :hover
        },
        "&.Mui-focused fieldset": {
          // - Set the Input border when parent is focused
          borderColor: "green"
        }
      }
    }
  }

  return (
    <div className="form">
      <h1>Contact Us</h1>
      <Box
        component="form"
        width="650px"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "60ch" }, //Just change width of text field
          "& .MuiInputBase-root": { color: "white" }, //Change input text color
          "& .MuiFormControl-root": { borderColor: "white" },
          "& .MuiFormLabel-root": { color: "white" }, //Change label color
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": {
              borderColor: "yellow" // - Set the Input border when parent has :hover
            },
            "&.Mui-focused fieldset": { // - Set the Input border when parent is focused
              borderColor: "green"
            }
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" defaultValue="" helperText="" />
        <TextField label="Email" defaultValue="" helperText="" />
        <TextField id="outlined-multiline-static" label="Multiline" multiline rows={8} />
      </Box>
    </div>
  )
}
