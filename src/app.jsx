import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Main from "./pages/main"
import Write from "./pages/write"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/write' element={<Write />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
