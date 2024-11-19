import { Children, createContext } from "react";

const MovieContext = createContext();

const MovieProvider = ({children}) =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    
    const handleTrailer = async (id) => {
        setTrailerKey("");
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };
  
            const response = await fetch(url, options);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setTrailerKey(data.results[0].key);
                setModalIsOpen(true);
            }
        } catch (error) {
            setModalIsOpen(false);
            console.log(error);
        }
    };
    return (
        <MovieContext.Provider>
            
        </MovieContext.Provider>
    )
}