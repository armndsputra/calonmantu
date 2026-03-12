// npm package manager
import { Outlet } from 'react-router-dom'

// css
import styles from './Dashboard.module.css'

// components
import Sidebar from '../pages/dashboard/components/Sidebar'

export default function Dashboard() {
    
    return (
        <div className={styles.container}>
            <Sidebar />
            <main className={styles.content}>
                <div className={styles.core}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
