import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Styles from './CreatePosts.module.css'

import api from '../../services/api/Api'

import MyEditor from './components/Editor'

export default function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        thumbnail: null,
    })

     const navigate = useNavigate()

    const [message, setMessage] = useState('')

    const handleTitleChange = e => {
        setFormData({
            ...formData,
            title: e.target.value,
        })
    }

    const handleContentChange = (e) => {
        setFormData({
            ...formData,
            content: e,
        })
    }

    const handleFileChange = e => {
        const file = e.target.files[0] // Ambil file pertama
        setFormData({
            ...formData,
            thumbnail: file,
        })
        // console.log(file)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const formDataToSend = new FormData()

        formDataToSend.append('title', formData.title)
        formDataToSend.append('content', formData.content)
        formDataToSend.append('thumbnail', formData.thumbnail)

        // console.log(formDataToSend)
        // for (let pair of formDataToSend.entries()) {
        //     console.log(pair[0], pair[1])
        // }

        api
            .post('/api/post/', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                console.log(response.data)
                navigate('/dashboard/posted')
                setMessage('Artikel berhasil dibuat')
            })
            .catch(err => {
                console.log(err.response.data)
                setMessage('Artikel gagal dibuat')
            })
    }

    console.log(message)

    return (
        <div className={Styles.createArtikel}>
            <h3>tambah artikel</h3>

            <div className={Styles.formArea}>
                <form onSubmit={handleSubmit}>
                    <div className={Styles.formGroup}>
                        <label>Thumbnail</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>

                    <div className={Styles.formGroup}>
                        <label>Judul Artikel</label>
                        <input value={formData.title} onChange={handleTitleChange} type="text" />
                    </div>

                    <div className={Styles.editorArea}>
                        <MyEditor value={formData.content} onChange={handleContentChange} />
                    </div>

                    <div className={Styles.boxInformation}>
                        <span>
                            <button className={Styles.btn} type="submit">
                                post
                            </button>
                        </span>
                        <span>{message && <p>{message}</p>}</span>
                    </div>
                </form>
            </div>
            <div className={Styles.information}></div>
        </div>
    )
}
