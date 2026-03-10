import styles from './login.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export default function Login() {
    const [errMessage, setErrMessage] = useState('')
    const [form, setForm] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    useEffect(() => {
        const currentTime = Date.now() / 1000
        const token = localStorage.getItem('token')
        if (token) {
            const decoded = jwtDecode(token)
            if (decoded.exp > currentTime) {
                console.log('token is active')
                navigate('/admin')
            }
        }
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const isEmail = form.email
            const isPassword = form.password

            if (isEmail && isPassword) {
                axios
                    .post('https://calonmantu.sbs/api/account/login', {
                        email: isEmail,
                        password: isPassword,
                    })
                    .then(response => {
                        // console.log(response.data.data.access_token)
                        const token = `Bearer ${response.data.data.access_token}`
                        localStorage.setItem('token', token)
                        navigate('/admin')
                    })
                    .catch(err => {
                        console.log(err.response.data)
                        setErrMessage('Kata sandi atau email salah!')
                    })
            } else {
                setErrMessage('Data yang anda masukan kurang lengkap!')
            }
        } catch (error) {
            console.error(error)
           
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.card}>
                <div className={styles.brand}>
                    <h1>Login</h1>
                </div>
                <div className={styles.form}>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Kata Sandi</label>
                            <input
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                type="password"
                                id="password"
                                name="password"
                            />
                        </div>
                        <button type="submit">Masuk</button>
                    </form>
                </div>
                <div className={styles.footer}>
                    {errMessage && <p className={styles.formInfo}>{errMessage}</p>}
                    <p>
                        Apakah kamu belum memiliki akun? <a href="/daftar">Daftar</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
