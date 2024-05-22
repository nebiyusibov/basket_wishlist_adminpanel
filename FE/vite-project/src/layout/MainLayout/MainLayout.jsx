import { Outlet } from "react-router-dom"
import MainNavbar from "./MainNavbar"
import MainFooter from "./MainFooter"

function MainLayout() {
  return (
    <div>
      <MainNavbar></MainNavbar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </div>
  )
}

export default MainLayout
