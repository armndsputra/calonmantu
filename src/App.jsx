// npm package manager
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import 'quill/dist/quill.snow.css'; // Import global CSS Quill

// To Routes Folder
import MainRouter from './routes/MainRouter'

function App() {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    )
}

export default App
