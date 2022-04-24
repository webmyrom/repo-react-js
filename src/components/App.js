import './App.css';
import { useState } from 'react';
import RepositorioItem from './RepositorioItem';
import api from '../services/api';

function App() {
  const [pesquisar, setPesquisar] = useState('');
  const [repoData, setrepoData] = useState(null);
  async function buscaRepositorio() {

    const response = await api.get(`/repos/${pesquisar}`)
      .catch(()=>{ 
        alert("Dados Não encontrados!!") 
      });
        setrepoData(response.data);
  }

  return (
    <div className="App">
      <div className="Pesquisar">
        <input
          value={pesquisar}
          onChange={(e)=>{ setPesquisar(e.target.value)}}
          placeholder="Escreva aqui"></input>
        
        <button onClick={buscaRepositorio}>Pesquisar</button>
      </div>
      {repoData &&
        <RepositorioItem data={repoData}/>
      }
      
    </div>
    
  );
}

export default App;
