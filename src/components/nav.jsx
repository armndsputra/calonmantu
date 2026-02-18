import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <div className='title-weblogid'>
            <h2><Link className='color-white text-decoration-none color-dark' to="/">Calonmantu</Link></h2>
        </div>
        <div className='menu'>
            <Link className='datalink' to="/">Home</Link>
            <Link className='datalink' to="/images">Portfolio</Link>
            {/* <Link className='datalink' to="/projects">Projects</Link> */}
        </div>
        <div className='account-identity'>
            <Link className='datalink-login' to="/login">Log in</Link>
            <Link className='datalink-signup' to="/signup">Sign up</Link>
        </div>
    </nav>
  )
} 