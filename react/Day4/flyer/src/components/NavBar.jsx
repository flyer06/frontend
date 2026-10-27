import { Link } from "react-router-dom"


const NavBar = () => {
  return (<>
  
    <div className="bg-amber-200 ">
      <div>
       <Link to={ "/"}>Home</Link>
        <Link to={ "/about"}>About</Link>
       <Link to={ "/contact"}>Contact</Link>
       <Link to={ "/help"}>Help</Link>
      

      </div>
    </div>
    </>
  )
}

export default NavBar
