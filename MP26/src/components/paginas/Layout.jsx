import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar"
function Layout() {
    return (
        <div>
            <Sidebar/>
            <Outlet />
        </div>
    )
}

export default Layout