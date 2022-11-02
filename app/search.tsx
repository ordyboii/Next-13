"use client";
import { useState } from "react";
import { useRQStore, useStore } from "./example";

export default function Search({ pokemon }: { pokemon: { name: string }[] }) {
  const [query, setQuery] = useState("");
  const store = useStore();
  const rqStore = useRQStore();

  const filterPokemon = pokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <p>From React Context - {store?.name}</p>
      <p>From React Query - {rqStore.store.name}</p>
      <input
        type='search'
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search Pokemon'
      />
      {filterPokemon.map((pokemon, idx) => (
        <li key={idx}>{pokemon.name}</li>
      ))}
    </>
  );
}
