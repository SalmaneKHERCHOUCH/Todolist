import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Favoris from './pages/Favoris';
import Accueil from './pages/Accueil';


function App() {

  return (
    <>
    <Routes>
  <Route exact path="/favoris" element={<Favoris />} />
</Routes>
    </>

  );
}

export default App;

/*
<Routes>
<Route path="*" element={<Accueil />} />
<Route exact path="/favoris" element={<Favoris />} />
</Routes>*/
