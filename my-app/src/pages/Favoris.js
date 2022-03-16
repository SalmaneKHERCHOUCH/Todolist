import Header from '../component/Header';




function Favoris() {

function tableauFavoris() {
        let tab = [];

        for(let key in localStorage) {
        tab.push(localStorage.getItem(key))
        console.log("On verifie les cles de notre tableau",localStorage.getItem(key))
        }
        return tab;
    }
    return (
        <div>
            <Header />

            <h2>Mes favoris</h2>
            {tableauFavoris()}

        </div>
    );
}

export default Favoris;
