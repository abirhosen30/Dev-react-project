import React from "react";
import type { ITechnology } from "../../assets/Type/Type";
import { Bounce, toast } from "react-toastify";

interface TechCardProps {
  tech: ITechnology;
  selectedTech: ITechnology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechCard = ({ tech, selectedTech, setSelectedTech }: TechCardProps) => {
  const isSelected = selectedTech.some((item) => item.id === tech.id);

  const handleSelectedTech = () => {
    if (isSelected) return;

    setSelectedTech((prevTechs) => [...prevTechs, tech]);

    toast.success(`${tech.name} is added to stack`, {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-full max-w-sm">
      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-8 w-8 object-contain"
          />

          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] text-emerald-600">
            {tech.badge}
          </span>
        </div>

        {/* Title + Description */}
        <div className="mt-3">
          <h2 className="text-base font-bold text-slate-900">{tech.name}</h2>

          <p className="mt-2 text-[9px] leading-4 text-slate-500">
            {tech.description}
          </p>
        </div>

        <div className="my-3 border-t border-slate-100" />

        {/* Info */}
        <div className="flex items-center justify-between text-[9px]">
          <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-600">
            {tech.category}
          </span>

          <span className="text-slate-500">{tech.difficulty}</span>

          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-yellow-400">★</span>
            {tech.rating}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleSelectedTech}
          disabled={isSelected}
          className={`mt-3 w-full rounded-md py-2 text-[10px] font-medium text-white ${
            isSelected
              ? "cursor-not-allowed bg-slate-400"
              : "bg-slate-950 hover:bg-slate-800"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
