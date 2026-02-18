import notFound from '../assets/404.gif'

export default function NotFound() {
    return (
        <div className="page-not-found">
            <div className="">
                <img src={notFound} alt="Not Found" />
            </div>
            <h1>404 Not Found</h1>
        </div>
    )
}