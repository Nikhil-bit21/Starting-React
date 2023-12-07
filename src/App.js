import './App.css';
import pokemon from "./pokemon.json";

function App() {
  return (
    <div className="App"
    style={{
      margin : "auto",
      width : 800,
      paddingTop : "1rem",
    }}
    >
      <h1 className='title'>Pokemon Search App</h1> 
      <table width="100%" >

        <thead>
          <th>Name</th>
          <th>Type</th>
        </thead>

        <tbody>
          
          {pokemon.map(pokemon=>(
            <tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(" , ")}</td>
          </tr>
          ))}
        
        </tbody>
      </table>
    </div>
  );
}

export default App;
