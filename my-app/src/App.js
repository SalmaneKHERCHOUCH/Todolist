import { useState } from 'react';
import './App.css';
import './component/HelloWorld';
import HelloWorld from './component/HelloWorld';



function App() {
  const [hello, setHello] = useState(false);



  return (
    <div className="App">
      <header>
        <p>
          TodoList
        </p>
        <button onClick={() => setHello(true)}>Ajouter</button>        
        <button>Supprimer</button>
        {hello&&<HelloWorld />}
      </header>
    </div>
  );
}

export default App;
