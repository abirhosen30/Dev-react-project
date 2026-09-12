import React, { use } from "react";
import type { ITechnology } from "../../assets/Type/Type";
import ExploreTech from "./ExploreTech";

interface TechProps {
  techPromise: Promise<ITechnology[]>;
}

const Tech = ({ techPromise }: TechProps) => {
  const teches = use(techPromise);
  return (
    <div className="container mx-auto">
      <div className="">
        <h1 className="font-bold text-3xl">Explore the <span className="text-[#9d23bc]">Technologies</span></h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <ExploreTech teches={teches} />
    </div>
  );
};

export default Tech;
