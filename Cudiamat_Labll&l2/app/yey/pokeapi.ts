export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

export type PokemonListItem = {
  url: string;
};

export async function getPokemonList(limit = 20): Promise<Pokemon[]> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
    cache: "no-store",
  });

  const data: { results: PokemonListItem[] } = await res.json();

  const pokemonList = await Promise.all(
    data.results.map(async (p) => {
      const res = await fetch(p.url, {
        cache: "no-store",
      });

      return res.json() as Promise<Pokemon>;
    })
  );

  return pokemonList;
}