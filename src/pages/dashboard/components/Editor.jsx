// npm package manager
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { useEffect, useState } from 'react'
// css
import Styles from './Editor.module.css'

function Editor({ value, onChange }) {

    return (
        <div>
            {/* <input type="text" value={value} onChange={handleChange} /> */}
            <ReactQuill
                className={Styles.editor}
                theme="snow"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Editor

// import React, { useEffect, useRef, useState } from 'react';
// import Quill from 'quill';
// import 'quill/dist/quill.snow.css';

// const QuillEditor = ({ value, onChange, placeholder = 'Tulis sesuatu...' }) => {
//   const editorRef = useRef(null);
//   const quillRef = useRef(null);
//   const [editorId] = useState(`quill-${Math.random().toString(36).substring(2, 9)}`);

//   useEffect(() => {
//     // Bersihkan instance lama jika ada
//     if (quillRef.current) {
//       quillRef.current = null;
//     }

//     // Buat elemen editor
//     if (editorRef.current) {
//       editorRef.current.innerHTML = '';
//       const editorElement = document.createElement('div');
//       editorElement.id = editorId;
//       editorRef.current.appendChild(editorElement);

//       // Inisialisasi Quill
//       const quill = new Quill(editorElement, {
//         theme: 'snow',
//         placeholder: placeholder,
//         modules: {
//           toolbar: [
//             [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//             ['bold', 'italic', 'underline', 'strike'],
//             [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//             ['link','image'],
//             ['clean']
//           ]
//         }
//       });

//       quillRef.current = quill;

//       // Set initial value
//       if (value) {
//         quill.root.innerHTML = value;
//       }

//       // Handle perubahan
//       quill.on('text-change', () => {
//         if (onChange) {
//           onChange(quill.root.innerHTML);
//         }
//       });
//     }

//     // Cleanup saat komponen unmount
//     return () => {
//       if (editorRef.current) {
//         editorRef.current.innerHTML = '';
//       }
//       quillRef.current = null;
//     };
//   }, [editorId, placeholder]);

//   return <div ref={editorRef} className="quill-editor-container" />;
// };

// export default QuillEditor;
