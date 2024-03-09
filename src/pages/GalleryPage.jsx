import React from 'react'


import Navbar from '../componets/Navbar/Navbar';
// import Contact from '../componets/Contact/Contact';
import Footer from '../componets/Footer/Footer';
import Gallery from '../componets/Gallery/Gallery';

function GalleryPage() {
  return (
    <div>

      <Navbar/>
      <Gallery/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default GalleryPage;