import { useEffect, useState } from "react";
import { getPokemons } from "./services/pokeApi";
import PokemonCard from "./components/pokemonCard";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="pokemon-grid">
      <h1>Pokédex</h1>

      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPokemons.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id} 
          name={pokemon.name}
          image={pokemon.image} 
          types={pokemon.types}
        />
      ))}
    </div>
  );
}

export default App;
