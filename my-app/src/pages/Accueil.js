import { useState } from 'react';
import User from '../component/User';
import {
    Link
} from "react-router-dom";


function Accueil() {
    const [user, setUser] = useState(false);

    return (
        <div>
            <header>
                <h1>
                    Api GitHub
                </h1>
                <ul>
                    <Link to="*">Accueil</Link>
                    <Link to="/favoris">Favoris</Link>
                </ul>
                
            </header>

            <label>
                Nom du GitHub:
                <input type="text" name="name" />
            </label>
            <br />
            <button onClick={() => setUser(true)}>Ajouter</button>
            <button>Supprimer</button><br />
            {user&&<User />}

        </div>

    );
}

export default Accueil;
