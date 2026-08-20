//icons
import { IconHeart } from '@tabler/icons-react';

import { Link } from 'react-router-dom'
import './MovieCards.css';

//Context
import { useContext, useState } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const MovieCards = ({ movie }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const isFavorite = favorites.includes(movie.id);

    return (
        <div className="total-card">

            <Link to={`/filmes/${movie.id}`}>
                <div
                    className="total-card-image"
                    style={{ backgroundImage: `url(${movie.image})` }}
                >
                    <span className="total-card-rating">
                        {movie.rating}
                    </span>
                </div>
            </Link>

            <div className="total-card-info">

                <div className="total-card-title">
                    <h3>{movie.title}</h3>

                    <span><IconHeart stroke={2}
                        onClick={() => {
                            if (isFavorite) {
                                removeFavorite(movie.id);
                            } else {
                                addFavorite(String(movie.id));
                            }
                        }}
                        className={`favorite ${isFavorite ? "active" : ""} `} /></span>
                </div>

                <span className="total-card-year">
                    {movie.year}
                </span>

            </div>

        </div>
    )
}

export default MovieCards