import axios from 'axios'

import { useState } from 'react'
import Styles from './CreatePosts.module.css'

import MyEditor from './components/Editor'

export default function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        thumbnail: null,
    })

    const handleTitleChange = e => {
        setFormData({
            ...formData,
            title: e.target.value,
        })
    }

    const handleContentChange = e => {
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
        for (let pair of formDataToSend.entries()) {
            console.log(pair[0], pair[1])
        }

        const token = localStorage.getItem('token')
        console.log(token)
        axios
            .post('https://calonmantu.sbs/api/post/', formDataToSend, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.error(err)
            })
    }

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
                        <MyEditor onChange={handleContentChange} />
                    </div>

                    <button type="submit">post</button>
                </form>
            </div>
        </div>
    )
}
