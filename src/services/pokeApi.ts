const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokemons = async () => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=20`);
  const data = await response.json();

  const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default,
        types: details.types.map(
            (type: { type:{name:string}}) => type.type.name
        ),
      };
    })
  );

  return detailedPokemons;
};