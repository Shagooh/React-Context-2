import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalles() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if(isLoading){
        const peticionPokemon = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`
          )
          if (response.ok) {
            const data = await response.json();
            setPokemon(data);
            setError(null);
            setIsLoading(false);
          } else {
            setError("Hubo un error");
          }
        } catch (error) {
          setError("No pudimos hacer la solicitud");
        }
      }
      peticionPokemon()
    }
    }, [isLoading, id])

    if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="App">
        <h1>{error}</h1>
        <button onClick={setPokemon}>Volver a intentarlo</button>
      </div>
    );
  }
  //     try {
  //       const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setPokemon(data);
  //       console.log(data["stats"][1].base_stat);

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(() => {
  //     peticionPokemon();
  //   }, [id]);
  return (
    <>
    <div className="container">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={`foto ${pokemon.name}`}/>
      <ul className="card">
        <div className="stats" key={id}>
          <h2>Element: {pokemon["types"][0].type.name}</h2>
          <h2>{pokemon["stats"][0].stat.name}: {pokemon["stats"][0].base_stat}</h2>
          <h2>{pokemon["stats"][1].stat.name}: {pokemon["stats"][1].base_stat}</h2>
          <h2>{pokemon["stats"][2].stat.name}: {pokemon["stats"][2].base_stat}</h2>
          <h2>{pokemon["stats"][3].stat.name}: {pokemon["stats"][3].base_stat}</h2>
          <h2>{pokemon["stats"][4].stat.name}: {pokemon["stats"][4].base_stat}</h2>
          <h2>{pokemon["stats"][5].stat.name}: {pokemon["stats"][5].base_stat}</h2>
          
        </div>
      </ul>
    </div>
      {/* <ul>
        {pokemon.map(({stats, id}) => (
            <div className="imagen" key={id}>
                <h1>{["stats"][1].base_stat}</h1>
                <h1>{["stats"][1].stat.name}</h1>

            </div>
          ))}
          ;

      </ul> */}
    </>
  );
}
