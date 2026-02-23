import { FaRegComment } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

import Loading from "../assets/Loading.gif"

export default function Home() {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
    // Mengambil data dari API
    axios.get('https://calonmantu.sbs/api/post/?limit=0&offset=0')
    // axios.get('http://localhost:3000/api/post/?limit=0&offset=0')
      .then(response => {
        setContents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);   

  if (loading) return <div className="loading-container"><img src={Loading} alt="Loading" /></div>;
  if (error) return <div>Error: {error}</div>;

  console.log(contents.data);

  return (
    <div className="page-home">
      <div className="page-title">
        <h1 className="text-capitalizer">Latest News</h1>
      </div>
      <div className="container-box">
        
        {contents.data.map(content => (
          <div key={content.id} className="box">
            {/* <img src={`http://localhost:3000/${content.thumbnail.replace(/^\/?public\/?/i, '')}`} alt="News Image" /> */}
            <Link to={`/${content.id}`} className="text-decoration-none">
            <img src={`https://calonmantu.sbs/${content.thumbnail.replace(/^\/?public\/?/i, '')}`} alt="News Image" />
            </Link>
            {/* <span>{`http://localhost:3000/posts/284917364.jpeg)}`}</span> */}
            <h3 className="text-capitalizer"><Link className='detail-link' to={`/detail/${content.id}`}>{content.title}</Link></h3>
            <span className='writer'>by <span className="font-500 text-capitalizer">{content.author.name}</span></span>
            <span className='comment-count'><FaRegComment className='comment-icon' /> 0</span>
        </div>
        ))}
        
      </div>
    </div>
  )
}