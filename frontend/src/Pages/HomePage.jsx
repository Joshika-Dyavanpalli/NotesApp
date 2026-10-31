import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import RateLimiter from "../Components/RateLimiter";
import Navbar from "../Components/Navbar.jsx";


function HomePage() {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    const fetchedNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notes");
        setNotes(res.data) 
        setIsRateLimited(false)
      } catch (error) {
        console.log(error)
        if (error.response.status === 429) {
            console.log("Too many requests");
            setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes")
        }
      } finally {
        setIsLoading(false)
      }
      }
    fetchedNotes();
  }, []);

  return (
    <div className="min-h-screen">
      

      <Navbar />

      

      {isRateLimited && <RateLimiter/>};

    </div>
  );
}

export default HomePage;
