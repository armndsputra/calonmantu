import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// css
import './Main.css'

// layouts
import MainLayout from './layouts/main.jsx'
import AdminLayout from './layouts/admin.jsx'

// main pages
import Home from './pages/main/home.jsx'
import Detail from './pages/main/detail.jsx'
import NotFound from './components/NotFound.jsx'
import About from './pages/main/about.jsx'
import Register from './pages/main/register.jsx'
import Login from './pages/main/login.jsx'

export default function MainRouter() {
    return (
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
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
