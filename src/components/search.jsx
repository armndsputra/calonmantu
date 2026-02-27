import { FaMagnifyingGlass } from "react-icons/fa6";

import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function Search () {

    const [contents, setContents] = useState(null);
    const [keywords, setKeywords] = useState("");
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://calonmantu.sbs/api/post/keywords?limit=0&offset=0",
        {
          keywords: keywords,
        }
      );

      // console.log(response.data.data);
      setContents(response.data)
      setKeywords("")

    } catch (error) {
      console.error(error.response?.data || error.message);
    }

  }; 

  useEffect(() => {
  if (contents !== null) {
    console.log(contents)
    navigate("/", {
      state: { search : contents }
    });
  }
}, [contents, navigate]);
  
  return (
    <div className="search">
        <div className="search-area">
          <form action="/" onSubmit={handleSubmit}>
              <input type="text"  value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="  Search..." />
              <button><FaMagnifyingGlass /></button>
          </form>
        </div>
    </div>
  )
}   