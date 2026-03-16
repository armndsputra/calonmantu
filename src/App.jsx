// npm package manager
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// Import global CSS Quill
import 'quill/dist/quill.snow.css'; 

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
