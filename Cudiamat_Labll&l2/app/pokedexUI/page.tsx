export default function Home() {
  const pokemon = [
    {
      name: "Bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      type: "Grass / Poison",
    },
    {
      name: "Charmander",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      type: "Fire",
    },
    {
      name: "Squirtle",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      type: "Water",
    },
    {
      name: "Pikachu",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      type: "Electric",
    },
    {
      name: "Mewtwo",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      type: "Psychic",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Pokédex UI Design (5 Cards Only)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {pokemon.map((p, index) => (
          <div
            key={index}
            className="border-2 border-yellow-400 rounded-xl p-4 bg-red-900 hover:scale-105 transition"
          >
            <img
              src={p.img}
              alt={p.name}
              className="mx-auto w-24 h-24"
            />

            <h2 className="text-xl font-bold text-center capitalize mt-2">
              {p.name}
            </h2>

            <p className="text-center text-sm mt-1">
              Type: {p.type}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}