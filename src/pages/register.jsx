import styles from './register.module.css'

export default function Register () {

    return(
        <div className={styles.register}>
            <div className={styles.decoration}></div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Yuk, Gabung Sekarang</h2>
                    <p>Buat akun gratis dan mulai berbagi cerita, ide, serta pengalamanmu bersama komunitas kami.</p>
                    <form action="">
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Full Name</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Username</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Password</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Password Confirmation</label>
                            <input type="text" />
                        </div>
                        <div className={styles.genderGroup}>
                            <label htmlFor="">Gender</label>
                            <select>
                                <option value="">Male</option>
                                <option value="">Famale</option>
                            </select>
                        </div>
                        <div className={styles.birthdayGroup}>
                            <label htmlFor="">Birthday</label>
                            <input type="date" />
                        </div>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )

}