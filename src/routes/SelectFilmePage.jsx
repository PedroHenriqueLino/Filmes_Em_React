import { IconStarFilled } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';

// CSS
import './style/SelectFilme.css';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from 'axios';

// Loading
import Loading from "../Components/Loading";


//UseContext
import { useContext } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const SelectFilmePage = () => {
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext)

    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const isFavorite = favorites.includes(id);

    const getFilmeId = async () => {
        const res = await axios.get(`http://localhost:3000/movies/${id}`);

        setMovie(res.data);
    };

    useEffect(() => {
        getFilmeId();

        console.log("id da URL:", id, typeof id);
        console.log("favorites:", favorites);
        console.log("ID convertido:", Number(id), typeof Number(id));
        console.log("é favorito:", favorites.includes(Number(id)));
    }, [id]);

    return (
        <div className="SelectFilme-content" style={{ marginBottom: '400px', }}>

            {!movie ? (
                <Loading />
            ) : (
                <div>

                    <div className="movie-card">

                        <div className="movie-image">
                            <img
                                src={movie.image}
                                alt={movie.title}
                            />
                        </div>

                        <div className="movie-content">

                            <h1>{movie.title}</h1>

                            <div className="movie-info">

                                <span>{movie.year}</span>

                                <span className="star">
                                    <IconStarFilled />
                                    {movie.rating}
                                </span>

                            </div>

                            <div className="movie-genres">

                                {movie.genre.map((genre) => (
                                    <span key={genre}>
                                        {genre}
                                    </span>
                                ))}

                            </div>

                            <p id='description'>{movie.description}</p>

                            <button className="favorite-button"
                                onClick={() => {
                                    if (isFavorite) {
                                        removeFavorite(movie.id);
                                    } else {
                                        addFavorite(String(movie.id));
                                    }
                                }}
                            >
                                <IconHeartFilled
                                    className={`Selectfavorite ${isFavorite ? "active" : ""} `}
                                />
                                {isFavorite
                                    ? "Remover dos favoritos"
                                    : "Adicionar aos favoritos"
                                }
                            </button>

                        </div>

                    </div>

                    <div className="movie-info-extra">

                        <h2>Informações</h2>

                        <div className="info-content">

                            <div className="info-item">
                                <span>Diretor</span>
                                <p>{movie.director}</p>
                            </div>

                            <div className="info-item">
                                <span>Ano</span>
                                <p>{movie.year}</p>
                            </div>

                            <div className="info-item">
                                <span>Duração</span>
                                <p>{movie.duration}</p>
                            </div>

                            <div className="info-item">
                                <span>Gêneros</span>

                                <div className="info-genres">
                                    {movie.genre.map((genre) => (
                                        <span key={genre}>
                                            {genre}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            )}

        </div >
    );
};

export default SelectFilmePage;