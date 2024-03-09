import React from 'react'
import Couses from '../componets/Courses/Courses'
import Navbar from '../componets/Navbar/Navbar'
import Home from '../componets/Home/Home'
import About from '../componets/About/About'
import News from '../componets/News/News'
import Contact from '../componets/Contact/Contact'
import Footer from '../componets/Footer/Footer'
import Slider from '../componets/Slider/Slider'



function Main() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Couses/>
      <Slider/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main