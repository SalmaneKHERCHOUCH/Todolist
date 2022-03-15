import React from 'react';
import {
    Link
} from "react-router-dom";

function Favoris() {

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

      <h1>Mes favoris</h1>

    </div>
  );
}

export default Favoris;
