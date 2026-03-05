import styles from './login.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login() {
    const [falseData, setFalseData] = useState('')
    const [form, setForm] = useState({ email: '', password: '' })

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
                        console.log(response)
                    })
                    .catch(err => {
                        console.log(err)
                        setFalseData('Kata Sandi atau Email Salah!')
                    })
            } else {
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
                    {falseData && <p className={styles.formInfo}>{falseData}</p>}
                    <p>
                        Apakah kamu belum memiliki akun? <a href="/daftar">Daftar</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
