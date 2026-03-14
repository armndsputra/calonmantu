import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Styles from './Posted.module.css'
import api from '../../services/api/Api'
import { MdDelete } from 'react-icons/md'
import { FaRegEdit } from "react-icons/fa";

export default function Posted() {
    const [artikel, setArtikel] = useState([])

    useEffect(() => {
        api.get('/api/post/user?limit=0&offset=0')
            .then(response => {
                // console.log(response)
                setArtikel(response.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // console.log(artikel)

    return (
        <div className={Styles.article}>
            <h3>Daftar Artikel</h3>
            <div className={Styles.tableGroup}>
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
                                <td className={Styles.action}>
                                    <Link className={Styles.delete} to={`delete/${data.id}`}>
                                        <MdDelete />
                                    </Link>
                                    <Link className={Styles.edit} to={`update-artikel/${data.id}`}>
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
