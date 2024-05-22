import { Outlet } from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import MainFooter from "../MainLayout/MainFooter"

function AdminLayout() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Outlet></Outlet>
      <MainFooter></MainFooter>
    </div>
  )
}

export default AdminLayout
