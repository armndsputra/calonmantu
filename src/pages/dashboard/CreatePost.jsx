import { useState } from "react";
import Styles from "./CreatePosts.module.css";

import MyEditor from "../../components/Editor";

export default function CreatePost() {
  const [content, setContent] = useState("");

  return (
    <div className={Styles.createArtikel}>
      <h3>tambah artikel</h3>

      <div className={Styles.formArea}>
        <form>
          <div className={Styles.formGroup}>
            <label>Thumbnail</label>
            <input type="file" />
          </div>

          <div className={Styles.formGroup}>
            <label>Judul Artikel</label>
            <input type="text" />
          </div>

          <div className={Styles.editorArea}>
            {/* <label>Konten</label> */}
            <MyEditor />
          </div>
        </form>
      </div>
    </div>
  );
}