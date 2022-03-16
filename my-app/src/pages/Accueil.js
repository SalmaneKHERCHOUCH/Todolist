import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../component/Header';


//function numeroRandom(min,max) {
//    return Math.trunc(Math.random()*(max-min) + min);
//}

function Accueil() {

    const [newgit, setNewgit] = useState({});
    const [input, setInput] = useState("");
    const [supprimer, setSupprimer] = useState("");



    //On récupere les données utilisateurs git de notre api sous format JSON
    const fetchUser = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setNewgit(data);    
    }
    
    //On récupere les repos utilisateurs git de notre api sous format JSON
    //const fetchRepos = async (username) => {
    //    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    //    const data = await response.json();
    //    setNewgit(data);    
    //}

    //console.log("On verifie le repos",fetchRepos('SalmaneKHERCHOUCH'))
    
    //On stock notre données dans le localStorage
    useEffect(() => {
        localStorage.setItem(newgit.id, newgit.login);
        localStorage.removeItem(undefined);
    }, [newgit]);   


    return (
        <div>
            <Header />
            <br />
            <label>
                Nom du GitHub : 
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Full name" />
            </label><br/>
            
            <span>Id : {newgit.id}</span><br/>
            <span>Login : {newgit.login}</span><br/>
            <span>Url : {newgit.html_url}</span><br/>
            <span>Compagnie : {newgit.company}</span><br/>
            
            <Button variant="success" onClick={async () => fetchUser(input)}>Favoris</Button><br/>

            <span>Pour supprimer un favoris, rentrer l'id du git : </span>
            <input type="text" onChange={(e) => setSupprimer(e.target.value)}  placeholder="Id a supprimer" />
            <Button variant="danger" onClick={() => localStorage.removeItem(supprimer)}>Supprimer</Button>
            <br />




        </div>

    );

}

export default Accueil;
