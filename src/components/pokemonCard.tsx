interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

function PokemonCard({ name, image, types }: PokemonCardProps) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <p>{name}</p>

      <div>
        {types.map ((type) => (
            <span key={type}>{type}</span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
