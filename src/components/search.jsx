import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search () {
  return (
    <div className="page-search">
        <div className="search-area">
            <input type="text" placeholder="Search..." />
            <button><FaMagnifyingGlass /></button>
        </div>
    </div>
  )
}   