// npm package manager
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// icons
import { FaRegComment } from 'react-icons/fa6'
import Loading from '../../assets/Loading.gif'

// css
import styles from './Home.module.css'

// services
import Api from '../../services/api/Api'

export default function Home() {
    const location = useLocation()
    const { search } = location.state || {}

    const [data, setData] = useState([]) // Data Artikel
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null) // Data Error Message

    // pagination
    const [startPage, setStartPage] = useState(0)
    const [totalData, setTotalData] = useState(0)
    const limitPerPage = 8
    const totalPages = Math.ceil(totalData / limitPerPage)
    const listItems = []
    for (let i = 1; i <= totalPages; i++) {
        listItems.push(
            <li key={i}>
                <button onClick={() => setStartPage((i - 1) * limitPerPage)}>{i}</button>
            </li>
        )
    }

    useEffect(() => {
        if (search) {
            Api.post('/api/post/keywords?limit=0&offset=0', {
                keywords: search,
            })
                .then(response => {
                    // console.log(response.data.data)
                    setData(response.data.data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            // if normal home
            Api.get('/api/post/?limit=' + limitPerPage + '&offset=' + startPage)
                .then(response => {
                    // console.log(response.data.data)
                    setData(response.data.data)
                    setTotalData(response.data.total)
                    setLoading(false)
                })
                .catch(error => {
                    setError(error.message)
                    setLoading(false)
                })
        }
    }, [search, startPage])

    if (loading)
        return (
            <div className="loading">
                <img src={Loading} alt="" />
            </div>
        )

    if (error) {
        console.error(error)
    }

    return (
        <div className={styles.home}>

            <div className={styles.pageTitle}>
                <h3>artikel</h3>
            </div>
            <div className={styles.wrapperHome}>
                {data.map(e => (
                    <div key={e.id} className={styles.card}>
                        <Link to={`/${e.id}`} className="text-decoration-none">
                            <img
                                src={`https://calonmantu.sbs/${e.thumbnail.replace(/^\/?public\/?/i, '')}`}
                                alt=""
                            />
                        </Link>

                        <h3 className="">
                            <Link className={styles.targetLink} to={`/${e.id}`}>
                                {e.title}
                            </Link>
                        </h3>
                        <span className={styles.author}>
                            by <span>{e.author.name}</span>
                        </span>
                        <span className={styles.totalComment}>
                            <FaRegComment className={styles.iconComment} /> 0
                        </span>
                    </div>
                ))}
            </div>

            {/* pagination */}
            {!search && (
                <div className={styles.pagination}>
                    <ul>{listItems}</ul>
                </div>
            )}
        </div>
    )
}
