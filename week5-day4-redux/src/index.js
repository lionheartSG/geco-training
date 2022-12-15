require("file-loader?name=[name].[ext]!./index.html")
import React from "react"
// import ReactDOM from "react-dom"
import App from "./App"
import { createRoot } from 'react-dom/client'; //new


import { Provider } from 'react-redux' //it will provide store to app and nested component
import { store } from "./store" // for redux

const container = document.getElementById('app'); //new
const root = createRoot(container); //new


root.render(<Provider store={store}><App tab="home" /></Provider>); //new
// ReactDOM.render(<App />, document.getElementById("app"))
