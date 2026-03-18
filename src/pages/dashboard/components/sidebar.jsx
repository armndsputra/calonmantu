import { AiOutlineDashboard } from 'react-icons/ai'
import { IoIosCreate } from 'react-icons/io'
import { IoMdList } from 'react-icons/io'
import { MdAdminPanelSettings } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

import { FaListCheck } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { TbWorldWww } from "react-icons/tb";

import styles from './Sidebar.module.css'
import { useState, useEffect } from 'react'

export default function Sidebar() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const handleMenuButton = e => {
        setIsOpen(!isOpen)
    }

    // close menu when location changes
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // console.log(isOpen)

    return (
        <>
            <div className={styles.buttonSidebar}>
                <button onClick={handleMenuButton}>
                    <FaBars />
                </button>
            </div>

            <aside className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
                <span className={styles.sidebarTitle}>
                    <MdAdminPanelSettings className={styles.sidebarTitleIcon} />
                    Asura Panel
                </span>
                <div className={styles.sidebarMenu}>
                    <div className={styles.menu}>
                        <div className="divider"></div>
                        <ul>
                            <li>
                                <Link className="textLight" to="/dashboard">
                                    <AiOutlineDashboard className={styles.menuIcon} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link className="textLight" to="/">
                                    <TbWorldWww className={styles.menuIcon} />
                                    www.asura.com
                                </Link>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <h5>post managements</h5>
                        <ul>
                            <li>
                                <Link className="textLight" to="/dashboard/post-artikel">
                                    <IoIosCreate className={styles.menuIcon} />
                                    Tambah Artikel
                                </Link>
                            </li>
                            <li>
                                <Link className="textLight" to="/dashboard/artikel">
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

                <div className={styles.closeButton}>
                    <button onClick={handleMenuButton}>
                        <IoClose />
                    </button>
                </div>
            </aside>
        </>
    )
}
