// npm package manager
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// css
import styles from './ManagerArtikel.module.css'

// services
import api from '../../services/api/Api'

// icons
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

export default function ManagerArtikel() {
    const [artikel, setArtikel] = useState([])

    useEffect(() => {
        api.get('/api/post/user?limit=0&offset=0')
            .then(response => {
                // console.log(response)
                setArtikel(response.data.data)
            })
            .catch(err => {
                console.error(err)
                console.error(err.response)
            })
    }, [])

    return (
        <div className={styles.artikelListWrapper}>
            <h3>Daftar Artikel</h3>

            <div className={styles.tableGroup}>
                <table>
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>judul artikel</th>
                            <th>aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artikel.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.title}</td>
                                <td className={styles.aksi}>
                                    <Link
                                        className={styles.delete}
                                        to={`delete-artikel/${data.id}`}
                                    >
                                        <MdDelete />
                                    </Link>
                                    <Link className={styles.edit} to={`update-artikel/${data.id}`}>
                                        <FaRegEdit />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
