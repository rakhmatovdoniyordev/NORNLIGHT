import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from "./pages/home/Home"
import Shipping from "./pages/shipping/Shipping"
import Return from "./pages/return/Return"
import Garant from "./pages/garant/Garant"
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Notfound from "./pages/not-found/Notfound"
import About from "./pages/about/About"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/return' element={<Return/>}/>
          <Route path='/garant' element={<Garant/>}/>
          <Route path='/contacts' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/not-found' element={<Notfound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
