import { createContext, useState, useEffect } from "react";
import axios from 'axios'


export const FilmeContext = createContext()

export const FilmeContextProvider = ({ children }) => {
    const [movie, setMovie] = useState([])


    const getMovie = async () => {
        try {
            const res = await axios.get("http://localhost:3000/movies")

            setMovie(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovie()

    }, [])

    return (
        <FilmeContext.Provider value={{ movie }} >
            {children}
        </FilmeContext.Provider>
    )
}