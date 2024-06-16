import { Pokemon } from '@/@types/pokemon';
import PokemonList from '@/components/PokemonList';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Pokemon[]>;
}

export default async function Home() {
  const pokemons = await getData();

  // console.log(pokemons);


  return (
    <main className="bg-cyan-950 min-h-screen">
      <PokemonList pokemons={ pokemons } />
    </main>
  );
}
