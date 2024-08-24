import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"

import Home from './Pages/Home'


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Toaster />
    </Router>
  )
}

export default App