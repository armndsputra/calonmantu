// npm package manager
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

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
