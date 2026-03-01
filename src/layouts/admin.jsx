// npm package manager
import { Outlet } from "react-router-dom";

// css
import styles from './admin.module.css'

// components
import Header from '../pages/admin/header.jsx'
import Sidebar from '../pages/admin/sidebar.jsx'

export default function Admin () {

    return(
        <div className={styles.admin}>
        <Header />
        <Sidebar />
        <main className="adminContent">
            <Outlet />
        </main>
        </div>
    )

}