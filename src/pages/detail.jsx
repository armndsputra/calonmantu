import { use } from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import { FaAnglesRight } from "react-icons/fa6";

import Loading from "../assets/Loading.gif"

export default function Detail() {
 
    // console.log(useParams().id)
    const id = useParams().id

    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Mengambil data dari API
    axios.get('https://calonmantu.sbs/api/post/' + id)
    // axios.get('http://localhost:3000/api/post/?limit=0&offset=0')
      .then(response => {
        setContent(response.data.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching content:", error);
        setError(error);
      });
  }, []);  

  if (loading) return <div className="loading-container"><img src={Loading} alt="Loading" /></div>

    // console.log(content);
    if (error) {
        return <div className="page-not-found">
            <h1>404 Not Found</h1>
        </div>
    }

    return (
        <div className="container-detail">

            <div className="page-detail">
                <div className="breadcrumb text-capitalizer">
                <ul>
                    <li><Link className="text-decoration-none color-dark font-500" to="/">Home</Link></li>
                    <li className="separator"><FaAnglesRight className="color-dark" /></li>
                    <li>{content?.author?.name || "Unknown Author"}</li>
                    <li className="separator"><FaAnglesRight className="color-dark" /></li>
                    <li>{content?.title || "Loading..."}</li>
                </ul>
                </div>

                <h1 className="">{content?.title || "Loading..."}</h1>
                <div className="post-data">
                    <p className="post-author">by <span className="font-500 text-capitalizer">{content?.author?.name || "Unknown Author"}</span></p> |
                    <p className="post-date">{content?.createdAt?.split("T")[0] || "Unknown Date"}</p> |
                    <p className="post-category">Category: {content?.category?.name || "Uncategorized"}</p>
                </div>
                <div className="post-thumbnail">
                    <img src={`https://calonmantu.sbs/${content?.thumbnail.replace(/^\/?public\/?/i, '')}`} alt="News Image" />
                </div>
                <div className="post-content">
                    {/* <p>{content?.content || "Loading content..."}</p> */}
                     <div dangerouslySetInnerHTML={{ __html: content?.content || "Loading content..." }} />
                </div>
            </div>
            {/* <h1>Detail Page for ID: {id}</h1> */}
        </div>
    )
}