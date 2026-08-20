//icons
import { IconHeartFilled } from '@tabler/icons-react';

//css
import './style/FavaritasPage.css';

//rotes
import { Link } from 'react-router-dom';
//useContext
import { useState, useContext } from "react"
import { FavoritesContext } from "../Context/FavoritesContext"

//Components
import MovieCards from "../Components/MovieCards"

const FavaritasPage = () => {
    const { favoritesMovies } = useContext(FavoritesContext)

    return (
        <div style={{ paddingBottom: '100px' }}>
            <div className="favorite-title">
                <h1 >Favoritos</h1>

                <h3> <IconHeartFilled /> Meus filmes favoritos  </h3>
            </div>
            <div className="category-line"></div>

            <div className="favoriteMovies-content">
                {favoritesMovies.length === 0 ? (
                    <div>
                        <h4>
                            Você ainda não possui
                            filmes favoritos.
                        </h4>
                        <Link to={'/filmes'}>
                            <button className='explore-movies'>Explorar filme</button>
                        </Link>
                    </div>
                ) : (
                    <div className="total-card-info">

                        {favoritesMovies.map((movie) => (
                            <MovieCards
                                key={movie}
                                movie={movie}
                            />
                        ))}


                    </div>

                )}
            </div>
        </div>
    )
}

export default FavaritasPage