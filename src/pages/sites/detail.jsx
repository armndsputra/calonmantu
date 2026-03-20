// npm package manager
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// icons
import { FaAnglesRight } from 'react-icons/fa6'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaShareAlt } from 'react-icons/fa'
import Loading from '../../assets/Loading.gif'

// css
import styles from './Detail.module.css'

// services
import Api from '../../services/api/Api'

// shareBotton
const ShareBotton = ({ id, title }) => {
    const baseUrl = 'https://calonmantu.sbs'
    const articleUrl = `${baseUrl}/detail/${id}`
    // const encodedUrl = encodeURIComponent(articleUrl)
    // const encodedTitle = encodeURIComponent(title)

    const shareLinks = {
        // facebook: `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}&quote=${id}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=https://calonmantu.sbs/detail/${id}`
    }

    const handleShare = (platform, url) => {
        // Optional: Track share event
        console.log(`Sharing to ${platform}:`, { id, title })

        // Buka popup dengan ukuran yang sesuai
        window.open(
            url,
            '_blank',
            'width=600,height=400,left=200,top=100,resizable=yes,scrollbars=yes'
        )
    }

    return (
        <>
            <a
                href={shareLinks.facebook}
                onClick={e => {
                    e.preventDefault()
                    handleShare('facebook', shareLinks.facebook)
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn facebook"
                aria-label="Bagikan ke Facebook"
            >
                <FaSquareFacebook className="color-dark" size={24} />
            </a>
        </>
    )
}

export default function Detail() {
    const navigate = useNavigate()
    const id = useParams().id

    const [data, setData] = useState(null) // Data Artikel
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch data from API by ID
        Api.get('/api/post/' + id)
            .then(response => {
                setData(response.data.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
                setError(error)
            })
    }, [id])

    if (error) {
        // return navigate('/')
    }

    if (loading)
        return (
            <div className="loading">
                <img src={Loading} alt="Loading" />
            </div>
        )

    return (
        <>
            <Helmet>
                <title>{`Asura - ` + `${data.title}`}</title>
                <meta name="description" content="" />
            </Helmet>
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
                        |
                        <p className="post-date">
                            {data?.createdAt?.split('T')[0] || 'Unknown Date'}
                        </p>{' '}
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
                                    {/* <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=https://calonmantu.sbs/detail/${id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaSquareFacebook className="color-dark" />
                                    </a> */}
                                    <ShareBotton id={data.id} title={data.title} />
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
                            className="quill-content"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                        {/* {console.log(data.content)} */}
                    </div>
                </div>
                {/* <h1>Detail Page for ID: {id}</h1> */}
            </div>
        </>
    )
}
