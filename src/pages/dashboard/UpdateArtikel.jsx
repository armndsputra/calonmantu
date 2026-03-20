import styles from './UpdateArtikel.module.css'
import MyEditor from './components/Editor'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api/Api'

const UpdateArtikel = () => {

    const [message, setMessage] = useState([])
    const [data, setData] = useState({
        title: '',
        content: '',
        thumbnail: null,
    })
    const id = useParams().id

    useEffect(() => {
        api.get('/api/post/' + id)
            .then(response => {
                setData({
                    title: response.data.data.title || '',
                    content: response.data.data.content || '',
                    thumbnail: null, // Can't set file from API for security reasons
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // handle update
    const handleContentChange = e => {
        setData(prev => ({
            ...prev,
            content: e,
        }))
    }

    const handleTitleChange = e => {
        const value = e.target.value
        setData(prev => ({
            ...prev,
            title: value,
        }))
    }

    const handleFileChange = e => {
        const file = e.target.files[0]
        setData(prev => ({
            ...prev,
            thumbnail: file,
        }))
    }

    // submit
    const handleSubmit = e => {
        e.preventDefault()
         const cleanContent = data.content.replace(/&nbsp;/g, " ")
        console.log(cleanContent)

        // return
        const formDataToSend = new FormData()

        formDataToSend.append('title', data.title)
        formDataToSend.append('content', cleanContent)
        formDataToSend.append('thumbnail', data.thumbnail)

        console.log(data)
        // console.log(formDataToSend)
        for (let pair of formDataToSend.entries()) {
            console.log(pair[0], pair[1])
        }

        api.patch('/api/post/' + id, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log('Update successful:', response.data)
                // Handle success (show message, redirect, etc.)
                setMessage('Artikel Berhasil Dirubah')
            })
            .catch(err => {
                console.error('Update failed:', err.response)
                // Handle error (show error message)
                setMessage('Artikel Gagal Dirubah')
            })
    }


    return (
        <div className={styles.updateArtikel}>
            <h3>Ubah artikel</h3>

            <div className={styles.formArea}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Thumbnail</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Judul Artikel</label>
                        <input value={data.title} onChange={handleTitleChange} type="text" />
                    </div>

                    <div className={styles.editorArea}>
                        <MyEditor value={data.content} onChange={handleContentChange} />
                    </div>

                    <div className={styles.cardNotif}>
                        <span>
                            <button className={styles.button} type="submit">
                                Ubah
                            </button>
                        </span>
                        <span>
                            {message && <p>{message}</p>}
                        </span>
                    </div>
                </form>
            </div>
            <div className={styles.information}></div>
        </div>
    )
}

export default UpdateArtikel
