import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export default function ProtectedLogin() {
    const token = localStorage.getItem('token')

    if (token) {
        try {
            const decoded = jwtDecode(token)
            const currentTime = Date.now() / 1000

            if (decoded.exp > currentTime) {
                return <Navigate to="/dashboard" replace />
            }
        } catch (err) {
            return <Navigate to="/" replace />
        }
    }

    return <Outlet />
}
