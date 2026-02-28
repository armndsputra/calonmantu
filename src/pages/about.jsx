import styles from './about.module.css'

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


export default function About () {

    return(<div className={styles.about}>
        <div className={styles.decoration}></div>
        <div className={styles.container}>
            <div className={styles.description}>
                <h3>Hello, ini saya</h3>
                <h1>Trisna Armanda Saputra</h1>
                <div className={styles.ability}>and I Am internet network technician</div>
                <p>
                     Seorang pemuda asal Yogyakarta yang tertarik terhadap perkembangan teknologi. Di sela-sela menikmati musik, film, dan beratnya kehidupan, saya menuangkan pemikiran serta pengalaman ke dalam tulisan.
                </p>
                <p>
                    Blog ini adalah ruang bagi saya untuk berbagi pengetahuan dan cerita seputar dunia teknologi, serta hal-hal menarik lainnya yang saya pelajari dalam perjalanan sebagai life-long learner.
                </p>
                <div className={styles.link}>
                    <h5>Follow Me</h5>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/trisna.armandasaputra/"><FaFacebookSquare /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/armndsputra/"><FaInstagramSquare /></a>
                        </li>
                        <li>
                            <a href="https://github.com/armndsputra"><FaSquareGithub /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)

}