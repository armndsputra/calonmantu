import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export default function ProtectedRoute() {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/masuk" replace />
    }

    try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000

        if (decoded.exp < currentTime) {
            return <Navigate to="/masuk" replace />
        }
    } catch (err) {
        return <Navigate to="/masuk" replace />
    }

    return <Outlet />
}
