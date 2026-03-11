// css
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
                            <label htmlFor="">Nama Lengkap</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Username</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder="@mail"/>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Kata Sandi</label>
                            <input type="text" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="">Konfirmasi Kata Sandi</label>
                            <input type="text" />
                        </div>
                        <div className={styles.genderGroup}>
                            <label htmlFor="">Jenis Kelamin</label>
                            <select>
                                <option value="">Laki</option>
                                <option value="">Perempuan</option>
                            </select>
                        </div>
                        <div className={styles.birthdayGroup}>
                            <label htmlFor="">Tanggal Lahir</label>
                            <input type="date" />
                        </div>
                        <button>Daftar</button>
                    </form>
                </div>
            </div>
        </div>
    )

}