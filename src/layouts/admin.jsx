// npm package manager
import { Outlet } from "react-router-dom";

// css
import styles from './admin.module.css'

// components
import Sidebar from '../pages/admin/components/sidebar'

export default function Admin () {

    return(
        <div className={styles.admin}>
        <Sidebar />
        <main className="adminContent">
            <Outlet />
        </main>
        </div>
    )

}