import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import './css/nav.css'
import './css/search.css'
import './css/home.css'
import './css/footer.css'
import './css/detail.css'
import './css/notFound.css'

// components
import Nav from './components/nav.jsx'
import Search from './components/search.jsx'
import Footer from './components/footer.jsx'


// pages  
import Home from './pages/home.jsx'
import Detail from './pages/detail.jsx'
import NotFound from './pages/notFound.jsx'

function App() {

  return (
    <BrowserRouter>
      <Nav /> 
      <Search />
      <div className='body-area'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/images" element={<h1>Images Page</h1>} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
