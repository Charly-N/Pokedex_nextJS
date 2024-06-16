import { Pokemon } from '@/@types/pokemon';
import Image from 'next/image';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="bg-cyan-900 rounded-lg shadow-lg p-4 flex flex-col w-full hover:rotate-12 duration-300 hover:scale-110 hover:bg-cyan-800">

      <img
        src={ pokemon.sprites.shiny || pokemon.sprites.regular }
        alt={ pokemon.name.fr }
      // Width + Height pour placeholder
      // width={ 300 }
      // height={ 300 }
      />
      <div className="py-2 text-center">
        <h3 className="font-bold text-cyan-400">
          { `#${pokemon.pokedex_id} - ${pokemon.name.fr}` }
        </h3>
        <h4 className="text-cyan-600 text-center">
          { pokemon.name.en }
        </h4>
      </div>
      <p className="flex flex-wrap gap-2 justify-center">
        { pokemon.types?.map((type) => (
          <span key={ type.name } className="flex items-center gap-2 text-sm text-slate-300">
            { type.name }
            <Image src={ type.image } alt={ type.name } className="w-6" width={ 300 } height={ 300 } />
          </span>
        )) }
      </p>
    </div>
  );
}
