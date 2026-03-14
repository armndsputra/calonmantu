import styles from './UpdateArtikel.module.css'
import MyEditor from './components/Editor'
import { useEffect, useState } from 'react'

const UpdateArtikel = () => {
    const content = 'data'

    const handleContentChange = e => {
        console.log(e)
    }

    return (
        <div className={styles.UpdateArtikel}>
            <h3>edit artikel</h3>

            <div className={styles.formArea}>
                <form>
                    <div className={styles.formGroup}>
                        <label>Thumbnail</label>
                        <input type="file" />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Judul Artikel</label>
                        <input type="text" />
                    </div>

                    <div className={styles.editorArea}>
                        <MyEditor value={content} onChange={handleContentChange} />
                    </div>

                    <div className={styles.boxInformation}>
                        <span>
                            <button className={styles.btn} type="submit">
                                post
                            </button>
                        </span>
                        {/* <span>{message && <p>{message}</p>}</span> */}
                    </div>
                </form>
            </div>
            <div className={styles.information}></div>
        </div>
    )
}

export default UpdateArtikel
