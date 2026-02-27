import { FaRegComment } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom";

import Loading from "../assets/Loading.gif"

import styles from './home.module.css'

export default function Home() {

    const location = useLocation();
    const { search } = location.state || {};

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
    if (search) {
      // Jika ada hasil search dari halaman Search
      setContents(search.data);
      // console.log(search.data)
      setLoading(false);
    } else {
      // Jika buka halaman home biasa
      axios.get('https://calonmantu.sbs/api/post/?limit=0&offset=0')
        .then(response => {
          // console.log(response.data.data)
          setContents(response.data.data); // ambil array saja
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  },[search]);

  if (loading) return <div className="loading-container"><img src={Loading} alt="Loading" /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.home}>
      <div className={styles.pageTitle}>
        <h3 className="text-capitalizer">Latest News</h3>
      </div>
      <div className={styles.container}>
        
        {contents.map(content => (
          <div key={content.id} className={styles.box}>
            {/* <img src={`http://localhost:3000/${content.thumbnail.replace(/^\/?public\/?/i, '')}`} alt="News Image" /> */}
            <Link to={`/${content.id}`} className="text-decoration-none">
            <img src={`https://calonmantu.sbs/${content.thumbnail.replace(/^\/?public\/?/i, '')}`} alt="News Image" />
            </Link>
            {/* <span>{`http://localhost:3000/posts/284917364.jpeg)}`}</span> */}
            <h3 className=""><Link className={styles.detailLink} to={`/${content.id}`}>{content.title}</Link></h3>
            <span className={styles.writer}>by <span className="font-500 text-capitalizer">{content.author.name}</span></span>
            <span className={styles.commentCount}><FaRegComment className='comment-icon' /> 0</span>
        </div>
        ))}
        
      </div>
    </div>
  )
}