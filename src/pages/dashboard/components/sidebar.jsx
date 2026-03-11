import { AiOutlineDashboard } from 'react-icons/ai'
import { IoIosCreate } from 'react-icons/io'
import { IoMdList } from 'react-icons/io'
import { MdAdminPanelSettings } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { FaListCheck } from "react-icons/fa6";

import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <span className={styles.sidebarTitle}>
                {' '}
                <MdAdminPanelSettings className={styles.sidebarTitleIcon} />
                Asura Panel
            </span>
            <div className={styles.sidebarMenu}>
                <div className={styles.menu}>
                    <div className="divider"></div>
                    <ul>
                        <li>
                            
                            
                            <Link className='textLight' to="/dashboard">
                                <AiOutlineDashboard className={styles.menuIcon} />
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                    <div className="divider"></div>
                    <h5>post managements</h5>
                    <ul>
                        <li>
                            <Link className='textLight' to="/dashboard/tambahartikel">
                                <IoIosCreate className={styles.menuIcon} />
                                Tambah Artikel
                            </Link>
                        </li>
                        <li>
                            <Link className='textLight' to="/dashboard/artikel">
                                <FaListCheck className={styles.menuIcon} />
                                Artikel
                            </Link>
                        </li>
                    </ul>
                    <h5>account managements</h5>
                    <ul>
                        <li>
                            <Link to="/artikel/artikel">
                                {' '}
                                <FaUser className={styles.menuIcon} />
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
