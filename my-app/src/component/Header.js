import { React } from 'react';
import {
    Link
} from "react-router-dom";

function Header() {

    return (
        <div>
            <header>
                <h1>
                    Api GitHub
                </h1>
                <ul>
                    <li> <Link to="*">Accueil</Link> </li>
                    <li> <Link to="/favoris">Favoris</Link> </li>
                </ul>

            </header>
        </div>
    );

}

export default Header;