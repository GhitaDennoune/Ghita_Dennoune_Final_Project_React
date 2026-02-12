import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Contact from "./components/Contact/Contact"
import { MoviesProvider } from "./context/context"
import User from "./components/User/User"
import Register from "./components/Registre/Registre"
export default function App() {
  return (
    <>
      <MoviesProvider>
        <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User/>}/>
        <Route path="/registre" element={<Register/>}/>
      </Routes>
    </MoviesProvider>
    </>
  )
}

















































