import { Link } from 'react-router-dom'

import O from '../assets/1.png'
import { FaBars } from "react-icons/fa6";

import { useState, useEffect } from 'react';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const [isCss, setCss] = useState('')

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen === true) {
            setCss('navbar-show')
        } else if (isOpen === false) {
            setCss('')
        }
      }, [isOpen]);

    console.log(isCss)

  return (
    <div div className='navbar'>
        <div className='btn-menu'>
            <span onClick={toggleMenu}>
                <FaBars />
            </span>
        </div>
        <div className='title-weblogid'>
            <h2>
                {/* <Link className='web-name'>
                    <img src={Calonmant} alt="" />
                </Link> */}
                <Link className='color-dark text-decoration-none color-dark web-name' to="/">Cal <img src={O} alt="" />nmantu</Link>
                </h2>
        </div>
        <div className={`navbar-menu ${isCss}`}>
            <div className={`menu`}>
                <Link className='datalink' to="/">Home</Link>
                <Link className='datalink' to="/images">Portfolio</Link>
                <Link className='datalink' to="/about">About</Link>
                {/* <Link className='datalink' to="/projects">Projects</Link> */}
            </div>
            <div className={`account-identity`}>
                <Link className='datalink-login' to="/login">Log in</Link>
                <Link className='datalink-signup' to="/signup">Sign up</Link>
            </div>
            {/* <div className='divider'></div> */}
        </div>
    </div>
  )
} 