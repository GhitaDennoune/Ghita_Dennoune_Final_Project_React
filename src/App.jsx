import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import { MoviesProvider } from "./context/context"
export default function App() {
  return (
    <>
      <MoviesProvider>
        <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </MoviesProvider>
    </>
  )
}

















































