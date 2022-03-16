import { useState, useEffect } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../component/Header';

function Accueil() {

    const [newgit, setNewgit] = useState({});
    const [input, setInput] = useState("");
    const [supprimer, setSupprimer] = useState("");
    const notify = () => toast("L'element est bien supprimer");


    //On récupere les données utilisateurs git de notre api sous format JSON
    const fetchUser = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setNewgit(data);
    }

    //On stock notre données dans le localStorage
    useEffect(() => {
        localStorage.setItem(newgit.id, newgit.login);
        localStorage.removeItem(undefined);
    }, [newgit]);

    //On vérifie dans cette fonction que la donnée qu'on saisit représente une donnée dans notre localStorage, si oui une pop-up apparait sur le cote.
    function supprimerElement(supprimer) {
        if(localStorage.getItem(supprimer) !== null) {
        console.log("On verifie la donnée",localStorage.getItem(supprimer));
        localStorage.removeItem(supprimer);
        notify();
        }
    }
    
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
            <Button className='Milieu-bouton' variant="danger" onClick={() => supprimerElement(supprimer)}>Supprimer</Button>
            <br />

            <ToastContainer />

            

        </div>

    );

}

export default Accueil;

