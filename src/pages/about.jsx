import styles from './About.module.css'
import me from '../assets/user.png'

export default function About () {

    return(<div className={styles.about}>
        <div className={styles.container}>
            <div className={styles.userPicture}>
                <img src='' alt="" />
            </div>
            <div className={styles.description}>
                <h3>Helo.. Saya Trisna</h3>
                <p>
                     Seorang pemuda asal Yogyakarta yang antusias terhadap perkembangan teknologi. Di sela-sela menikmati musik, film, dan beratnya kehidupan, saya menuangkan pemikiran serta pengalaman ke dalam tulisan.
                </p>
                <p>
                    Blog ini adalah ruang bagi saya untuk berbagi pengetahuan dan cerita seputar dunia teknologi, serta hal-hal menarik lainnya yang saya pelajari dalam perjalanan sebagai life-long learner.
                </p>
            </div>
        </div>
    </div>)

}