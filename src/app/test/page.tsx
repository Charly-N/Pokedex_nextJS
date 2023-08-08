'use client';

import { use } from 'react';

import { Pokemon } from '@/@types/pokemon';

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
  //   const pokemon = use(getData(id));

  return (
    <main className='bg-cyan-950 min-h-screen'>
      <h1>TEST</h1>
    </main>
  );
}
