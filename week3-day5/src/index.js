require("file-loader?name=[name].[ext]!./index.html")
import React from "react"
// import ReactDOM from "react-dom"
import App from "./app"
import { createRoot } from 'react-dom/client'; //new
const container = document.getElementById('app'); //new
const root = createRoot(container); //new


root.render(<App tab="home" />); //new
// ReactDOM.render(<App />, document.getElementById("app"))
