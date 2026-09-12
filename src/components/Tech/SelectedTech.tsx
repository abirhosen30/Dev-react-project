import type { ITechnology } from "../../assets/Type/Type";
import SelectedTechCard from "./SelectedTechCard";

interface SelectedTechProps {
  selectedTech: ITechnology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const SelectedTech = ({
  selectedTech,
  setSelectedTech,
}: SelectedTechProps) => {
  const handleRemove = (id: string) => {
    setSelectedTech((currentTech) =>
      currentTech.filter((tech) => tech.id !== id)
    );
  };

  return (
    <div className="w-full min-w-[350px] border-l border-slate-200 pl-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-slate-800">
        Your Stack
      </h2>

      {/* Selected count */}
      <p className="mt-4 text-lg text-slate-400">
        {selectedTech.length} Technology Selected
      </p>

      {/* Selected technologies */}
      <div className="mt-6 space-y-4">
        {selectedTech.map((tech) => (
          <SelectedTechCard
            key={tech.id}
            tech={tech}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedTech;