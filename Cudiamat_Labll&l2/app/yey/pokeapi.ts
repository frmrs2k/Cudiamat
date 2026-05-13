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

export async function getPokemon(): Promise<Pokemon> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
    cache: "no-store",
  });

  return res.json();
}
