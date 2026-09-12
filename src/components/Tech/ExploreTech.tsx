import React from "react";
import type { ITechnology } from "../../assets/Type/Type";
import TechCard from "./TechCard";
import SelectedTech from "./SelectedTech";

interface ExploreTechProps {
  teches: ITechnology[];
  selectedTech: ITechnology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const ExploreTech = ({
  teches,
  selectedTech,
  setSelectedTech,
}: ExploreTechProps) => {
  const SelectedTechComponent = SelectedTech as React.ComponentType<{
    selectedTech: ITechnology[];
    setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
  }>;

  return (
    <div className="flex justify-between gap-10 mt-6">
      <div className="grid grid-cols-3 gap-7 mt-6">
        {teches.map((tech: ITechnology) => {
          return (
            <TechCard
              key={tech.id}
              tech={tech}
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            />
          );
        })}
      </div>
      <div>
        <SelectedTechComponent
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </div>
    </div>
  );
};

export default ExploreTech;
