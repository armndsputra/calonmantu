import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header () {

    return(
        <div className={styles.header}>
            <span className={styles.brand}>
                <Link>idhopes</Link>
            </span>
        </div>
    )

}