// npm package manager
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// css
import '../Main.css'

// layouts
import SiteLayout from '../layouts/site.jsx'
import DashboardLayout from '../layouts/dashboard.jsx'

// sites pages
import Home from '../pages/sites/home.jsx'
import Detail from '../pages/sites/detail.jsx'
import NotFound from '../components/NotFound.jsx'
import About from '../pages/sites/about.jsx'
import Register from '../pages/sites/register.jsx'
import Login from '../pages/sites/login.jsx'

// admin
import Article from '../pages/dashboard/articles.jsx'

// service
import ProtectedRoute from '../services/protected/ProtectedRoute'
import ProtectedLogin from '../services/protected/ProtectedLogin.jsx'

export default function MainRouter() {
    return (
        <Routes>
            {/* BLOG ROUTES */}
            <Route element={<SiteLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
                <Route path="/tentang" element={<About />} />
                {/* login route */}
                <Route element={<ProtectedLogin />}>
                    <Route path="/masuk" element={<Login />} />
                </Route>
                <Route path="/daftar" element={<Register />} />
            </Route>

            {/* ADMIN ROUTES */}
            <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<DashboardLayout />}>
                    <Route index element={<h2>dashboard</h2>} />
                    <Route path="artikel" element={<Article />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
