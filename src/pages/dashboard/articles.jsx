import { useEffect, useState } from 'react'
import axios from 'axios'

import styles from './articles.module.css'

export default function Articles() {
    const [artikel, setArtikel] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        // console.log(token)
        axios
            .get('https://calonmantu.sbs/api/post/user?limit=2&offset=0', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                console.log(response)
                setArtikel(response.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(artikel)

    return (
        <div className={styles.article}>
            <h3>Daftar Artikel</h3>
            <div className={styles.tableGroup}>
                <table>
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>title</th>
                            <th>ID</th>

                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artikel.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.title}</td>
                                <td>{data.id}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
