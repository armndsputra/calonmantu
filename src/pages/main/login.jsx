import styles from './login.module.css'

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.card}>
                <div className={styles.brand}>
                    <h1>Login</h1>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Kata Sandi</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <button type="submit">Masuk</button>
                    </form>
                </div>
                <div className={styles.footer}>
                    <p>
                        Apakah kamu belum memiliki akun? <a href="/daftar">Daftar</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
