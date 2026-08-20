import { useEffect, useRef, useState } from "react";

//css
import './style/Header.css';

//Icones
import { IconSearch } from '@tabler/icons-react';

//rotes
import { Link } from 'react-router-dom'

//Components
import Movie from '../Components/Movie';
import MovieCards from '../Components/MovieCards';
import SelectedCategory from "../Components/SelectedCategory";

import { useContext } from 'react';
import { UserContext } from '../Context/userContext';
import { FilmeContext } from '../Context/FilmeContext';

//react-router-dom
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userName, icon, } = useContext(UserContext)
  const { movie } = useContext(FilmeContext)


  //search
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/filmes');
  };



  //Sistema feito com chatgpt
  const moviesRowRef = useRef(null);

  useEffect(() => {
    const row = moviesRowRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      row.scrollLeft += e.deltaY;
    };

    row.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      row.removeEventListener("wheel", handleWheel);
    };
  }, []);

  //Sistema feito com chatgpt


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
    <div style={{ paddingBottom: '100px' }} className='header-content'>

      <div className="top-content">

        <div className="search">

          <input
            type="text"
            placeholder="Pesquisar filmes..."


          />

          <IconSearch onClick={handleSearch} stroke={2} color='#fff' />

        </div>

        <div className="profile">

          <Link to={'/config'}>

            <img
              style={{ width: '80px' }}
              src={icon}
              alt="Avatar do usuário"
            />

            <p>{userName}</p>

          </Link>

        </div>

      </div>

      <header className='movies-content'>
        <Movie />


        <div className="movies-section">

          <div className="movies-header">
            <h2>Filmes</h2>

            <Link to="/filmes">
              <p>
                Ver todos
              </p>
            </Link>

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
            ref={moviesRowRef}

            className="movies-row">
            {FilteredCategory.map((movie) => (
              <MovieCards
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>

        </div>
      </header>


    </div>
  )
}

export default Header