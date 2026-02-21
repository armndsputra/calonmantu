// npm packages
import { Link, useLocation } from 'react-router-dom'

// icons
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from 'react';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    // toggle menu
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    // close menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);


  return (
    <header className='navbar'>
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