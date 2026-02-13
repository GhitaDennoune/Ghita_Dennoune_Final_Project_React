import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Contact from "./pages/Contact/Contact"
import Shop from "./pages/Shop/Shop"
import { MoviesProvider } from "./context/context"
import User from "./components/User/User"
import Register from "./components/Registre/Registre"
import Blog from "./pages/Blog/Blog"
import Sale from "./pages/Sale/Sale"
import  Features  from "../src/pages/Features/Features"
import Panier from "./pages/panier/Panier"
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
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/panier" element={<Panier/>}/>
        <Route path="/features" element={<Features/>}/>

      </Routes>
    </MoviesProvider>
    </>
  )
}

















































