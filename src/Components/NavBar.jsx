import './NavBar.css';

// Routes
import { NavLink } from 'react-router-dom';

// Ícones
import { IconHome2 } from '@tabler/icons-react';
import { IconPlaylistAdd } from '@tabler/icons-react';
import { IconCategory } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { IconMovie } from '@tabler/icons-react';

const NavBar = () => {
    return (
        <div className="nav-content">

            <div className="menu">
                <NavLink to="/">
                    <h4>
                        <IconMovie
                            stroke={1.5}
                            color="#f5b700"
                        />
                        CineCartaz
                    </h4>
                </NavLink>
            </div>

            <div className="nav">
                <ul className="nav-list">

                    <NavLink to="/">
                        <li>
                            <IconHome2 stroke={1} />
                            <p>Início</p>
                        </li>
                    </NavLink>

                    <NavLink to="/filmes">
                        <li>
                            <IconPlaylistAdd stroke={1} />
                            <p>Filmes</p>
                        </li>
                    </NavLink>

                    <NavLink to="/favoritas">
                        <li>
                            <IconHeart stroke={1} />
                            <p>Favoritos</p>
                        </li>
                    </NavLink>

                    <li className="config-mobile">
                        <NavLink to="/config">
                            <IconSettings stroke={2} />
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className="arrow">
                <NavLink to="/config">
                    <IconSettings stroke={2} />

                </NavLink>
            </div>

        </div>
    );
};

export default NavBar;