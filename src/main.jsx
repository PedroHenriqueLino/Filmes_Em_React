import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//React Routes
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';

//Routes
import ErrorPage from './routes/ErrorPage.jsx';
import Header from './routes/Header.jsx';
import FilmesPage from './routes/FilmesPage.jsx';


import FavaritasPage from './routes/FavaritasPage.jsx';
import ConfiguracoesPage from './routes/ConfiguracoesPage.jsx';

import SelectFilmePage from './routes/SelectFilmePage.jsx';

//Context
import { UseContextProvider } from './Context/userContext.jsx';
import { FilmeContextProvider } from './Context/FilmeContext.jsx';
import { FavoritesContextProvider } from './Context/FavoritesContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Header />
      },
      {
        path: '/filmes',
        element: <FilmesPage />
      },
      {
        path: '/favoritas',
        element: <FavaritasPage />
      },
      {
        path: '/config',
        element: <ConfiguracoesPage />
      },
      {
        path: '/filmes/:id',
        element: <SelectFilmePage />
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FilmeContextProvider>
      <UseContextProvider>
        <FavoritesContextProvider>
          <RouterProvider router={router} />
        </FavoritesContextProvider>
      </UseContextProvider>
    </FilmeContextProvider>



  </StrictMode>,
)
