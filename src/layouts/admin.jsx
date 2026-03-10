// npm package manager
import { Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// css
import styles from './admin.module.css'

// components
import Sidebar from '../pages/admin/components/sidebar'

export default function Admin() {
    
    return (
        <div className={styles.admin}>
            <Sidebar />
            <main className="adminContent">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
