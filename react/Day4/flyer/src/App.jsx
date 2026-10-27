import { Route, Routes } from "react-router-dom"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Help from "./components/pages/Help"
import NavBar from "./components/NavBar"


const App = () => {
  return (<>
      <NavBar/>
    <Routes>
   
      <Route path= "/" element={<Home/>}></Route>
       <Route path= "/about" element={<About/>}></Route>
        <Route path= "/contact" element={<Contact/>}></Route>
         <Route path= "/help" element={<Help/>}></Route>




    </Routes>
</>
  
  )
}

export default App
