import { toast } from "react-toastify";
import type { ITechnology } from "../../assets/Type/Type";
import SelectedTechCard from "./SelectedTechCard";

interface SelectedTechProps {
  selectedTech: ITechnology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const SelectedTech = ({ selectedTech, setSelectedTech }: SelectedTechProps) => {
  const handleRemove = (id: string) => {
    const tech = selectedTech.find((tech) => tech.id === id);

    setSelectedTech((currentTech) =>
      currentTech.filter((tech) => tech.id !== id),
    );

    if (tech) {
      toast.info(`${tech.name} removed from stack!`, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="w-full min-w-[350px] border-l border-slate-200 pl-8">
      {/* Heading */}
      <h2 className="text-xl font-bold text-slate-800">Your Stack</h2>

      {/* Selected count */}
      <p className="mt-4 text-[12px] text-slate-400">
        {selectedTech.length === 0 ? "No" : selectedTech.length} Technology
        Selected Yet
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
