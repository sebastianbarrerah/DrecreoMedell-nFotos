import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../page/Home"
import Plantilas from "../page/plantillas"
import Navbar from "../components/navbar/Navbar"


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plantillas" element={<Plantilas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
