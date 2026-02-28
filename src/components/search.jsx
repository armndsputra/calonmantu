import { FaMagnifyingGlass } from "react-icons/fa6";

import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Search () {

    // const [contents, setContents] = useState(null);
    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      navigate("/", {
        state: { search : keywords }
      });

      setKeywords("")

    } catch (error) {
      console.error(error);
    }

  }; 
  
  return (
    <div className="search">
        <div className="search-area">
          <form action="/" onSubmit={handleSubmit}>
              <input type="text"  value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder=" Search" />
              <button><FaMagnifyingGlass /></button>
          </form>
        </div>
    </div>
  )
}   