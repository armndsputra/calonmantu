import { FaRegComment } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";


import Loading from "../assets/Loading.gif"

import styles from './home.module.css'

export default function Home() {

    // const navigate = useNavigate();
    const location = useLocation();
    const { search } = location.state || {};

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     // pagination
    const [startPage, setStartPage] = useState(0);
    const [totalData, setTotalData] = useState(0);
    const limitPerPage = 8
    const totalPages = Math.ceil(totalData/limitPerPage)
    const listItems = [];
    for (let i = 1; i <= totalPages; i++) {
      listItems.push(<li key={i}>
              <button onClick={() => setStartPage((i - 1) * limitPerPage)}>{i}</button>
            </li>);
    }


   useEffect(() => {
    console.log(search)
    if (search) {
      // Jika ada hasil search dari halaman Search
      // console.log('ini search', search)

      axios.post('https://calonmantu.sbs/api/post/keywords?limit=0&offset=0',{
        keywords : search
      }).then(response => {
        // console.log(response.data.data)
        setContents(response.data.data)
        setLoading(false);
      }).catch(err => {
        console.log(err)
      })


    } else {
      // Jika buka halaman home biasa
      axios.get('https://calonmantu.sbs/api/post/?limit='+ limitPerPage+'&offset='+ startPage)
        .then(response => {
          // console.log(response.data.data)
          setContents(response.data.data);
          setTotalData(response.data.total)
          setLoading(false);
          
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  },[search, startPage]);

 

  if (loading) return <div className="loading-container"><img src={Loading} alt="Loading" /></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.home}>
      <div className={styles.pageTitle}>
        <h3 className="text-capitalizer">Home</h3>
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
      {/* pagination */}
      
      {!search && (
        <div className={styles.pagination}>
          <ul>
            {listItems}
          </ul>
        </div>
      )}
    </div>
  )
}