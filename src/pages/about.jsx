import user from '../assets/634469017_2112247306243469_3073043294671796415_n.jpg'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareGit } from "react-icons/fa6";

export default function about () {

    return(<div className="container-about">
        <div className="about-content">
            <div className="about-image">
                <img src={user} alt="Profile" />
            </div>
            <div className="about-description">
                <h3>About Me</h3><br />
                
                <p>Hi, kamu yang sudah datang ke Web BLOG calonmantu. Saya <span className='font-500'>Trisna</span> pemuda kampung asal Kota Yogyakarta yang tertarik mempelajari Teknologi. Penyuka Musik, Film dan sesuatu yang menantang. Web BLOG ini juga sebagai tempat untuk berbagi pengalaman dan pengetahuan yang saya pelajari. Untuk kontak silahkan hubungi saya via media sosial</p>
                <div className='medsos'>
                    <a href="https://www.facebook.com/trisna.armandasaputra" target="_blank" rel="noopener noreferrer"><FaSquareFacebook /></a>
                    <a href="https://github.com/armndsputra" target="_blank" rel="noopener noreferrer"><FaSquareGit /></a>
                    
                </div>
            </div>
        </div>
        <div className='album'>
            
        </div>
        
    </div>)

}