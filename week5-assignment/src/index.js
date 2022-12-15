require("file-loader?name=[name].[ext]!./index.html")
import React from "react"
// import ReactDOM from "react-dom"
import App from "./App"
import { createRoot } from 'react-dom/client'; //new
const container = document.getElementById('app'); //new
const root = createRoot(container); //new
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from "./modules/components/store"
import {saveState} from './modules/components/LocalStorage'

store.subscribe(() => {
  saveState(
    store.getState().players
  );
});

root.render(<Provider store={store}><BrowserRouter><App tab="home" /></BrowserRouter></Provider>); //new
// ReactDOM.render(<App />, document.getElementById("app"))
