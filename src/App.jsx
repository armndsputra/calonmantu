// npm package manager
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

// Import global CSS Quill
import 'quill/dist/quill.snow.css'; 

// To Routes Folder
import MainRouter from './routes/MainRouter'

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default App
