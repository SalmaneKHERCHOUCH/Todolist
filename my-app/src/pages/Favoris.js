import Header from '../component/Header';
import { Table } from 'react-bootstrap';



function Favoris() {

    function tableauFavoris() {
        let tab = [];

        for (let key in localStorage) {
            tab.push(localStorage.getItem(key));
        }
        return tab;
    }
    console.log("Tableau des favoris", tableauFavoris());

    return (
        <div>
            <Header />

            <h2 className='Milieu'>Mes favoris</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Login</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{tableauFavoris()[0]}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{tableauFavoris()[1]}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{tableauFavoris()[2]}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{tableauFavoris()[3]}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{tableauFavoris()[4]}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{tableauFavoris()[5]}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Favoris;
