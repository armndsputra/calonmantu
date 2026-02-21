import user from '../assets/634469017_2112247306243469_3073043294671796415_n.jpg'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGit } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function About () {

    return(<div className="container-about">
        <div className="about-content">
            <div className="about-image">
                <img src={user} alt="Profile" />
            </div>
            <div className="about-description">
                <h3>About Me</h3><br />
                
                <p>
                <span className='font-500'>Halo! Saya Trisna</span><br />

                Seorang pemuda asal <span className='font-500'>Yogyakarta</span> yang antusias terhadap perkembangan teknologi. Di sela-sela menikmati musik, film, dan beratnya kehidupan, saya menuangkan pemikiran serta pengalaman ke dalam tulisan.
                <br /><br />
                Blog ini adalah ruang bagi saya untuk berbagi pengetahuan dan cerita seputar dunia teknologi, serta hal-hal menarik lainnya yang saya pelajari dalam perjalanan sebagai life-long learner.
                <br />
                Mari terhubung! Temukan saya di media sosial melalui tautan di bawah. 👇</p>
                <div className='medsos'>
                    <a href="https://www.facebook.com/trisna.armandasaputra" target="_blank" rel="noopener noreferrer"><FaSquareFacebook /></a>
                    <a href="https://github.com/armndsputra" target="_blank" rel="noopener noreferrer"><FaSquareGit /></a>
                    
                    <a href="https://www.instagram.com/armndsputra/" target="_blank" rel="noopener noreferrer"><FaSquareInstagram /></a>
                </div>
            </div>
        </div>
        <div className='album'>
            
        </div>
        
    </div>)

}