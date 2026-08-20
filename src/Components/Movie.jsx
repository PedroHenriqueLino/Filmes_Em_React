import { useState, useContext, useEffect } from "react"
import { FilmeContext } from '../Context/FilmeContext';

//routes
import { Link } from 'react-router-dom'

//css
import './Movie.css';
const Movie = () => {
    const { movie } = useContext(FilmeContext)
    const [currentMovie, setCurrentMovie] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMovie(prev => {
                if (prev >= 10) {
                    return 0
                }
                return prev + 1
            })
        }, 3000)
    }, [])


    return (
        <div className='movie-container'>

            <div className="highlights"
                style={{
                    backgroundImage: `url(${movie[currentMovie]?.image})`
                }}
            >


                <div className="banner">
                    <h3>EM ALTA</h3>
                </div>


                <div className="banner-info">

                    <h1>{movie[currentMovie]?.title}</h1>


                    <div className="movie-meta">
                        <span>{movie[currentMovie]?.year} </span>
                        <span>{movie[currentMovie]?.duration}</span>
                        <span>{movie[currentMovie]?.genre.join(', ')}</span>
                    </div>

                    <p>{movie[currentMovie]?.description}</p>

                    <Link to={`/filmes/${movie[currentMovie]?.id}`}>
                        <button>Ver detalhes</button>
                    </Link>
                    <div className="dots">

                        {movie.slice(0, 6).map((_, index) => (
                            <span
                                key={index}
                                className={index === currentMovie ? 'active' : ''}
                            ></span>
                        ))}

                    </div>
                </div>



            </div>



        </div>
    )
}

export default Movie