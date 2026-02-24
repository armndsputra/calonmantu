import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// css others
import './App.css'

// css components
import './css/search.css'
import './css/footer.css'

// css pages
import './css/NotFound.css'

// components
import Header from './components/header.jsx'
import Search from './components/search.jsx'
import Footer from './components/footer.jsx'
import Login from './pages/login.jsx'

// pages  
import Home from './pages/home.jsx'
import Detail from './pages/detail.jsx'
import NotFound from './pages/NotFound.jsx'
import About from './pages/about.jsx'

function App() {

    return (
    <BrowserRouter>
      <Header /> 
      <Search />
      <div className='bodyArea'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />

        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
