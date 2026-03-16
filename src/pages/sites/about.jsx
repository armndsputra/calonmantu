import styles from './About.module.css'

export default function About () {

    return(<div className={styles.about}>
        {/* decoration */}
        <div className={styles.decoration}></div>

        <div className={styles.wrapperAbout}>
            <div className={styles.description}>
                <h3>Apa itu Asura?</h3>
                <h1></h1>
                
                <p>
                Asura adalah ruang pribadi yang dibangun untuk berbagi cerita, pengalaman, serta berbagai informasi yang dipelajari dalam perjalanan hidup.
                </p>
                <p>
                Di website ini, Anda akan menemukan berbagai konten seputar pengalaman pribadi, pembelajaran hidup, pengembangan diri, serta informasi yang bermanfaat dan relevan dengan kehidupan sehari-hari. Setiap tulisan dibuat dengan penuh kejujuran dan refleksi, dengan harapan dapat menjadi inspirasi, motivasi, atau setidaknya teman berpikir bagi para pembaca.
                </p>
                <p>
                Asura bukan sekadar blog, tetapi juga wadah untuk tumbuh bersama. Saya percaya bahwa setiap pengalaman memiliki nilai dan setiap cerita bisa menjadi pelajaran berharga.
                </p>
                <p>
                Terima kasih telah berkunjung dan menjadi bagian dari perjalanan ini.
                </p>
                
            </div>
        </div>
    </div>)

}