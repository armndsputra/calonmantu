// npm packages
import { Link, useLocation } from 'react-router-dom'

import styles from './header.module.css'

// icons
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from 'react';

import logo from '../assets/logo.png'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    // toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // control navbar visibility based on scroll direction
    const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scroll ke bawah
        setShowNavbar(false);
      } else {
        // Scroll ke atas
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

    // close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // add scroll event listener to control navbar visibility
    useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return (
    <header className={`${styles.navbar} ${!showNavbar ? `${styles.nonective}` : ''}`}>
        {/* button navbar */}
        <div className={styles.buttonMenu}>
            <span onClick={toggleMenu}>
                <FaBars />
            </span>
        </div>

        {/* web title */}
        <div className={styles.webTitle}>
            <h2>
                <Link className={styles.webName} to="/">calonmantu
                </Link>
            </h2>
        </div>

        {/* menu */}
        <div className={`${styles.wrapperMenu} ${isOpen ? `${styles.active}` : ''}`}>
            <div className={styles.menu}>
                <Link className={styles.datalink} to="/">Home</Link>
                <Link className={styles.datalink} to="/images">Portfolio</Link>
                <Link className={styles.datalink} to="/about">About Me</Link>
                <Link className={styles.datalink} to="/category">Category</Link>
            </div>
            <div className={styles.accountIdentity}>
                <Link className={styles.datalinkLogin} to="/login">Log in</Link>
                <Link className={styles.datalinkSignup} to="/signup">Sign up</Link>
            </div>
        </div>

    </header>
  )
} 