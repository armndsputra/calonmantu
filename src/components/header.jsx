// npm packages
import { Link, useLocation } from 'react-router-dom'

// icons
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from 'react';

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
    <header className={`navbar ${!showNavbar ? 'nonactive' : ''}`}>
        {/* button navbar */}
        <div className='button-menu'>
            <span onClick={toggleMenu}>
                <FaBars />
            </span>
        </div>

        {/* web title */}
        <div className='web-title'>
            <h2>
                <Link className='color-dark text-decoration-none color-dark web-name' to="/">calonmantu</Link>
            </h2>
        </div>

        {/* menu */}
        <div className={`wrapper-menu ${isOpen ? 'active' : ''}`}>
            <div className={`menu`}>
                <Link className='datalink' to="/">Home</Link>
                <Link className='datalink' to="/images">Portfolio</Link>
                <Link className='datalink' to="/about">About Me</Link>
            </div>
            <div className={`account-identity`}>
                <Link className='datalink-login' to="/login">Log in</Link>
                <Link className='datalink-signup' to="/signup">Sign up</Link>
            </div>
        </div>

    </header>
  )
} 