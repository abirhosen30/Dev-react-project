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

  const handleRemoveAll = () => {
    if (selectedTech.length === 0) return;

    setSelectedTech([]);

    toast.info("All technologies removed from stack!", {
      position: "bottom-right",
    });
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

      {selectedTech.length === 0 ? (
        <div className="mt-6 rounded-xl border-2 border-slate-200 px-2 py-2 md:px-4 md:py-10 text-center md:-ml-2">
          <p className="text-[12px] text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
          {selectedTech.map((tech) => (
            <SelectedTechCard
              key={tech.id}
              tech={tech}
              handleRemove={handleRemove}
            />
          ))}
          <button
            onClick={handleRemoveAll}
            className="mt-4 self-start rounded-lg border border-red-500 bg-red-100 px-6 py-2 text-sm font-medium text-red-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedTech;
