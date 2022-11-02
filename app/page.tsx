import Search from "./search";

export default async function Home() {
  const pokemon = (await (
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
  ).json()) as { results: { name: string }[] };

  return (
    <>
      <h1>Pokemon list</h1>
      <Search pokemon={pokemon.results} />
    </>
  );
}
