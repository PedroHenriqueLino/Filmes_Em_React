import { useEffect, useRef, useState, useContext } from 'react';
//css
import './style/Filmes.css';
//icons
import { IconSearch } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';

//components
import MovieCards from '../Components/MovieCards';
import SelectedCategory from '../Components/SelectedCategory';
//Routes
import { Link } from 'react-router-dom'

//Contex
import { FilmeContext } from '../Context/FilmeContext';

const FilmesPage = () => {
    const { movie } = useContext(FilmeContext)
    const searchRef = useRef(null);
    const [search, setSearch] = useState("")

    //sistma de pesquisa
    const FilteredMovies = movie.filter((filme) =>
        filme.title.toLowerCase().includes(normalizeText(search.toLowerCase()))
    )
    function normalizeText(text) {
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    //sistma de pesquisa

    //SelectCategorias
    const categories = [
        "Todos",
        "Ação",
        "Drama",
        "Terror",
        "Comédia",
        "Ficção Científica"
    ];
    const [selectedCategory, setSelectedCategory] = useState("Todos")


    const FilteredCategory = selectedCategory === "Todos" ? movie : movie.filter((filme) => filme.genre.includes(selectedCategory))

    return (
        <div style={{ paddingBottom: '100px' }} className='movies-page'>

            <div className="search">

                <input
                    type="text"
                    placeholder="Pesquisar filmes..."
                    ref={searchRef}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <IconSearch stroke={2} color='#fff' />

            </div>

            <div className="Category">

                <div className="category-line"></div>

                <h2>Categorias</h2>

                <div className="btn">
                    {categories.map((category) => (
                        <SelectedCategory
                            key={category}
                            category={category}
                            active={category === selectedCategory}
                            onClick={() => setSelectedCategory(category)}
                        />

                    ))}
                </div>

                <div className="category-line"></div>

            </div>

            <div
                className="movies-row">
                {FilteredMovies.map((movie) => (
                    <MovieCards
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>

        </div>


    )
}

export default FilmesPage