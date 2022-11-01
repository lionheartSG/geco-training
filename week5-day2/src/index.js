require("file-loader?name=[name].[ext]!./index.html")
import React from "react"
// import ReactDOM from "react-dom"
import App from "./App"
import { createRoot } from "react-dom/client" //new
import { RecoilRoot } from "recoil"

const container = document.getElementById("app") //new
const root = createRoot(container) //new

root.render(
  <RecoilRoot>
    <App tab="home" />
  </RecoilRoot>
) //new
// ReactDOM.render(<App />, document.getElementById("app"))
