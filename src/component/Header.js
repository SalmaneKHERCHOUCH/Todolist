import { React } from 'react';
import {
    Link
} from "react-router-dom";

function Header() {

    return (
        <div>
            <header  className='App'>
                <h1>
                    Api GitHub
                </h1>
                <ul className='Puce-delete'>
                    <li className='Li'> <Link to="*">Accueil </Link> </li>
                    <li className='Li'> <Link to="/favoris"> Favoris</Link> </li>
                </ul>

            </header>
        </div>
    );

}

export default Header;