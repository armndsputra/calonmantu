// npm packages
import { Link, useLocation } from 'react-router-dom'

import styles from './header.module.css'

// icons
import { FaBars } from 'react-icons/fa6'
import { useState, useEffect } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    // const [menuActive, setMenuActive] = useState('')

    // toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // control navbar visibility based on scroll direction
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // Scroll ke bawah
                setShowNavbar(false)
            } else {
                // Scroll ke atas
                setShowNavbar(true)
            }
            setLastScrollY(window.scrollY)
        }
    }

    // close menu when location changes
    useEffect(() => {
        setIsOpen(false)
    }, [location])

    // add scroll event listener to control navbar visibility
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)

            // Cleanup
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])

    // console.log(menuActive)

    return (
        <header className={`${styles.navbar} ${!showNavbar ? `${styles.inactive}` : ''}`}>
            {/* button navbar */}
            <div className={styles.buttonMenu}>
                <span onClick={toggleMenu}>
                    <FaBars />
                </span>
            </div>

            {/* web title */}
            <div className={styles.webTitle}>
                <h2>
                    <Link className={styles.webName} to="/">
                        idhopes
                    </Link>
                </h2>
            </div>

            {/* menu */}
            <div className={`${styles.wrapperMenu} ${isOpen ? `${styles.active}` : ''}`}>
                <div className={styles.menu}>
                    <Link
                        className={`${styles.datalink} ${location.pathname === '/' ? styles.menuActive : ''}`}
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className={`${styles.datalink} ${location.pathname === '/portfolio' ? styles.menuActive : ''}`}
                        to="/portfolio"
                    >
                        Portfolio
                    </Link>
                    <Link
                        className={`${styles.datalink} ${location.pathname === '/about' ? styles.menuActive : ''}`}
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className={`${styles.datalink} ${location.pathname === '/category' ? styles.menuActive : ''}`}
                        to="/category"
                    >
                        Category
                    </Link>
                </div>
                <div className={styles.accountIdentity}>
                    <Link className={styles.datalinkLogin} to="/login">
                        Log in
                    </Link>
                    <Link className={styles.datalinkSignup} to="/signup">
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    )
}
