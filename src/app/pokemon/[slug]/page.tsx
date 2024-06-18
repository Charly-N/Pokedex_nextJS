'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';

import { Pokemon } from '@/@types/pokemon';
import Image from 'next/image';

import dracaufeu from '../../../assets/1200px-Dracaufeu-RFVF.png';
import big_img from '../../../assets/big_img.jpg'

type Slug = `${number}-${string}`;

interface SingleProps {
  params: {
    slug: Slug;
  };
}

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Pokemon>;
}

export default function Single({ params }: SingleProps) {

  const router = useRouter();

  // console.log(params.slug);
  const [id] = params.slug.split('-');

  const pokemon = use(getData(id));
  console.log(pokemon.sprites.gmax);

  return (
    <main className='bg-cyan-950 min-h-screen'>
      <h1 className='font-bold text-cyan-400 text-4xl p-12'>
        { pokemon.name.fr }
      </h1>

      <button type='button' onClick={ () => router.back() }>
        ← Accueil
      </button>

      <Image
        // src={ big_img }
        src={ pokemon.sprites.regular }
        alt={ pokemon.name.fr }
        width={ 6000 }
        height={ 4000 }
      // blurDataURL={ "data:https://img.freepik.com/photos-premium/image-floue-rue-image-floue-rue-arbres_204916-275.jpg" }
      // automatique si local
      // placeholder='blur'
      />
      <p>TEXTEEEEEEEE</p>
    </main>
  );
}
