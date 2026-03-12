// css
import Styles from './CreatePosts.module.css'

export default function CreatePost() {
    return (
        <div className={Styles.createArtikel}>
            <h3>tambah artikel</h3>
            <div className={Styles.formArea}>
                <form action="">
                    <div className={Styles.formGroup}>
                        <label htmlFor="">Thumbnail</label>
                        <input type="file" />
                    </div>
                    <div className={Styles.formGroup}>
                        <label htmlFor="">Judul Artikel</label>
                        <input type="text" />
                    </div>
                    <div className={Styles.editorArea}>
                        <label htmlFor="">Konten</label>
                    </div>
                </form>
            </div>
        </div>
    )
}
