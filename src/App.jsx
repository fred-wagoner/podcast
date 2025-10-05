import React from 'react'
import Header from "./components/header"
import Footer from "./components/footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Gallery from "./sections/Gallery"
import Episodes from "./sections/Episodes"
import Contact from "./sections/Contact"


function App() {
  return(
    <>
    <Header />
    <Hero />
    <About />
    <Gallery />
    <Episodes />
    <Contact />
    <Footer />
    </>
  )
}
export default App
