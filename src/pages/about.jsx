import user from '../assets/user.jpg'

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
                <p>Halo ! Makasih ya udah mampir ke website calonmantu. Saya Trisna seorang pemuda kampung asal Yogyakarta yang tertarik mempelajari dunia digital. Penyuka musik, dan sesuatu yang menantang. Web ini juga sebagai tempat untuk berbagi pengalaman dan pengetahuan yang saya pelajari. Untuk kontak silahkan hubungi saya via media sosial</p>
                <div className='medsos'>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaSquareFacebook /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FaSquareGit /></a>
                    
                </div>
            </div>
        </div>
        <div className='album'>
            
        </div>
        
    </div>)

}