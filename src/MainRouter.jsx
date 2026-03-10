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

// admin
import Article from './pages/admin/articles'

// service
import ProtectedRoute from './services/ProtectedRoute.jsx'

export default function MainRouter() {
    return (
        <Routes>
            {/* BLOG ROUTES */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/tentang" element={<About />} />
                <Route path="/masuk" element={<Login />} />
                <Route path="/daftar" element={<Register />} />
            </Route>

            {/* ADMIN ROUTES */}
            <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<h2>dashboard</h2>} />
                    <Route path="artikel" element={<Article />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
