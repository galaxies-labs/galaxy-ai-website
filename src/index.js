import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./app"
import store from "./store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
