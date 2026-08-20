import { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {


    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");

        return savedFavorites ? JSON.parse(savedFavorites) : [];
    })

    const addFavorite = (id) => {
        if (favorites.includes(id)) {
            return console.log('esse filme ja esta em seu favoritos');
        }

        const updatedFavorites = [...favorites, id];

        setFavorites(updatedFavorites);

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        );
    };


    //Pegando id da url e fazendo os filmes virem

    const [favoritesMovies, setfavoritesMovies] = useState([])

    const getFavoriteMovie = async () => {
        try {
            const res = await axios.get("http://localhost:3000/movies")

            const movies = res.data.filter(movie =>
                favorites.includes(movie.id)
            );

            setfavoritesMovies(movies);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFavoriteMovie()
    }, [favorites])


    //Removendo da id da local storage
    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(
            favoriteId => favoriteId !== id
        );

        setFavorites(updatedFavorites);

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        );
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, favoritesMovies }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}