import { getPokemon } from "./yey/pokeapi";

const typeColors: Record<string, string> = {
  grass: "bg-green-500",
  poison: "bg-purple-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  bug: "bg-green-700",
  flying: "bg-sky-400",
  normal: "bg-gray-400",
  electric: "bg-yellow-400",
  ground: "bg-yellow-600",
  fairy: "bg-pink-400",
  fighting: "bg-orange-600",
  psychic: "bg-pink-500",
  rock: "bg-stone-500",
  ice: "bg-cyan-300",
  ghost: "bg-indigo-500",
  dragon: "bg-indigo-700",
};

export default async function Home() {
  const ditto = await getPokemon();

  // keep SAME structure as list so UI doesn't change
  const pokemonList = [ditto];

  return (
    <main className="bg-orange-100 rounded-2xl shadow-lg p-4 text-center">
      <h1 className="text-black text-4xl font-bold text-center mb-10">
        Lab: API Pokédex
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {pokemonList.map((p) => (
          <div
            key={p.id}
            className="bg-white border-2 border-yellow-300 rounded-2xl shadow-lg p-4 text-center hover:scale-105 transition"
          >
            <p className="text-gray-400 text-sm font-bold">
              #{String(p.id).padStart(4, "0")}
            </p>

            <img
              src={p.sprites.front_default}
              alt={p.name}
              className="w-24 h-24 mx-auto"
            />

            <h2 className="capitalize font-bold text-lg mt-1 text-black">
              {p.name}
            </h2>

            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              {p.types.map((t) => (
                <span
                  key={t.type.name}
                  className={`text-white text-xs px-2 py-1 rounded-full ${
                    typeColors[t.type.name] || "bg-black"
                  }`}
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-3 text-sm px-2">
              <div className="text-blue-500 font-medium">
                Height: <span className="text-black">{p.height}</span>
              </div>

              <div className="text-green-500 font-medium">
                Weight: <span className="text-black">{p.weight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
