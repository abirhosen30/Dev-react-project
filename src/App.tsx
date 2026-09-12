import { Suspense } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ExploreTech from "./components/Tech/Tech";
import type { ITechnology } from "./assets/Type/Type";

const techFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techPromise = techFetch();

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <ExploreTech  techPromise={techPromise} ></ExploreTech>
      </Suspense>
    </>
  );
}

export default App;
