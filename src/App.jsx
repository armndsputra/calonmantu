import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// css others
import './App.css'

// css components
import './css/search.css'
import './css/footer.css'

// css pages
import './css/NotFound.css'

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// pages  
import Home from './pages/home.jsx'
import Detail from './pages/detail.jsx'
import NotFound from './pages/NotFound.jsx'
import About from './pages/about.jsx'
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'

function App() {

    return (
    <BrowserRouter>
      <Routes>

        {/* BLOG ROUTES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>

         {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h2>das</h2>} />
          <Route path="posts" element={<h2>posts</h2>} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
