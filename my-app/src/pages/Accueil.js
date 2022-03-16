import { useState, useEffect } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
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
            <label className='Milieu'>
                Nom du GitHub :
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Full name" />
            </label><br />

            <ListGroup>
                <ListGroup.Item>Id : {newgit.id}</ListGroup.Item>
                <ListGroup.Item>Login : {newgit.login}</ListGroup.Item>
                <ListGroup.Item>Url : {newgit.html_url}</ListGroup.Item>
                <ListGroup.Item>Compagnie : {newgit.company}</ListGroup.Item>
            </ListGroup>

            <br/>

            <Button className='Milieu-bouton' variant="success" onClick={async () => fetchUser(input)}>Favoris</Button><br />

            <label className='Milieu'>
                Pour supprimer un favoris, rentrer l'id du git : 
                <input type="text" onChange={(e) => setSupprimer(e.target.value)} placeholder="Id a supprimer" />
            </label>
            <br/>
            <Button className='Milieu-bouton' variant="danger" onClick={() => localStorage.removeItem(supprimer)}>Supprimer</Button>
            <br />




        </div>

    );

}

export default Accueil;

