import { useContext } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../../context/MainProvaider"

function MainNavbar() {
    const {basket}=useContext(MainContext)
  return (
   <header>
    <nav>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>about</Link></li>
            <li><Link to={"/contact"}>contact</Link></li>
            <li><Link to={"/basket"}>basket</Link></li> {basket.length}
            <li><Link to={"/wishlist"}>wishlist</Link></li>
        </ul>
    </nav>
   </header>
  )
}

export default MainNavbar
