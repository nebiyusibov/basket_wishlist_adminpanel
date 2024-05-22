import { Link } from "react-router-dom"

function AdminNavbar() {
  return (
    <header>
    <nav>
        <ul>
            <li><Link to={"/adminpanel"}>adminpanel</Link></li>
            <li><Link to={"/adminpanel/add"}>Add</Link></li>
        </ul>
    </nav>
   </header>
  )
}

export default AdminNavbar
