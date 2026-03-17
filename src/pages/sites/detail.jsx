// npm package manager
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

// icons
import { FaAnglesRight } from 'react-icons/fa6'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaShareAlt } from 'react-icons/fa'
import Loading from '../../assets/Loading.gif'

// css
import styles from './Detail.module.css'

// services
import Api from '../../services/api/Api'

export default function Detail() {
    const navigate = useNavigate()
    const id = useParams().id

    const [data, setData] = useState(null) // Data Artikel
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch data from API by ID
        Api
            .get('/api/post/' + id)
            .then(response => {
                setData(response.data.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setError(error)
            })
    }, [])

    if (error) {
        return navigate('/')
    }

    if (loading)
        return (
            <div className="loading">
                <img src={Loading} alt="Loading" />
            </div>
        )

    return (
        <div className={styles.detail}>
            <div className={styles.wrapperDetail}>
                <div className={styles.breadcrumb}>
                    <ul>
                        <li>
                            <Link className="text-decoration-none color-dark font-500" to="/">
                                home
                            </Link>
                        </li>
                        <li className={styles.separator}>
                            <FaAnglesRight className="color-dark" />
                        </li>

                        <li>{data?.title || 'Loading...'}</li>
                    </ul>
                </div>

                <h1 className="">{data?.title || 'Loading...'}</h1>
                <div className={styles.postData}>
                    <p className="post-author">
                        by{' '}
                        <span className="font-500 text-capitalizer">
                            {data?.author?.name || 'Unknown Author'}
                        </span>
                    </p>{' '}
                    |<p className="post-date">{data?.createdAt?.split('T')[0] || 'Unknown Date'}</p>{' '}
                    |
                    <p className="post-category">
                        Category: {data?.category?.name || 'Uncategorized'}
                    </p>
                </div>
                <div className={styles.postThumbnail}>
                    {/* share */}
                    <div className={styles.shareButtons}>
                        <ul>
                            <li>
                                <FaShareAlt className="color-dark" />
                            </li>
                            <li>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=https://calonmantu.sbs/detail/${id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaSquareFacebook className="color-dark" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <img
                        src={`https://calonmantu.sbs/${data?.thumbnail.replace(/^\/?public\/?/i, '')}`}
                        alt=""
                    />
                </div>
                <div className={styles.postContent}>
                    <div
                        className="quill-data"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </div>
            </div>
            {/* <h1>Detail Page for ID: {id}</h1> */}
        </div>
    )
}
