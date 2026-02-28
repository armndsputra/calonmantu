import { Outlet } from "react-router-dom";

export default function AdminLayouts () {

    return(
        <div className="adminContainer">
        <aside className="sidebar">Admin Sidebar</aside>
        <main className="adminContent">
            <Outlet />
        </main>
        </div>
    )

}