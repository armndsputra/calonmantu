import { AiOutlineDashboard } from 'react-icons/ai';
import { IoIosCreate } from "react-icons/io";
import { IoMdList } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";

import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <span className={styles.sidebarTitle}> <MdAdminPanelSettings className={styles.sidebarTitleIcon} />idhopes panel</span>
            <div className={styles.sidebarMenu}>
                <div className={styles.menu}>
                    <div className='divider'></div>
                    <ul>
                        <li>
                            <AiOutlineDashboard className={styles.menuIcon} />
                            Dashboard
                        </li>
                    </ul>
                    <div className='divider'></div>
                    <h5>post managements</h5>
                    <ul>
                        <li>
                            <IoIosCreate className={styles.menuIcon} />
                            Post
                        </li>
                        <li>
                            <IoMdList className={styles.menuIcon} />
                            All post listings
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
