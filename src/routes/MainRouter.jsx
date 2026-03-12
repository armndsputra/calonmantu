// npm package manager
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// css
import '../Main.css'

// layouts
import SiteLayout from '../layouts/Site.jsx'
import DashboardLayout from '../layouts/Dashboard.jsx'

// sites pages
import Home from '../pages/sites/Home.jsx'
import Detail from '../pages/sites/Detail.jsx'
import NotFound from '../components/NotFound.jsx'
import About from '../pages/sites/About.jsx'
import Register from '../pages/sites/Register.jsx'
import Login from '../pages/sites/Login.jsx'

// admin
import Posted from '../pages/dashboard/Posted.jsx'
import CreatePost from '../pages/dashboard/CreatePost.jsx'

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
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<h2>dashboard</h2>} />
                    <Route path="posted" element={<Posted />} />
                    <Route path="create-post" element={<CreatePost />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
