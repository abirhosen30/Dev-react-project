import React, { useState } from "react";
import type { ITechnology } from "../../assets/Type/Type";
import { Bounce, toast } from "react-toastify";
import SelectedTech from "./SelectedTech";

interface TechCardProps {
  tech: ITechnology;
  selectedTech: ITechnology[];
  setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechCard = ({ tech, selectedTech, setSelectedTech }: TechCardProps) => {
  const [isSelceted, setIsSelected] = useState(false);

  const handleSelectedtech = () => {
    if (isSelceted === false) {
      toast.success(`${tech.name} is added to stack`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setIsSelected(true);
      setSelectedTech((prevTechs) => [...prevTechs, tech]);
    }
  };
  return (
    <div>
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-3 shadow-sm mb-10">
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="h-8 w-8" />

          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-lg text-emerald-600">
            {tech.badge}
          </span>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">{tech.name}</h2>

          <p className="mt-2 text-[12px] leading-5 text-slate-500">
            {tech.description}
          </p>
        </div>

        <div className="my-6 border-t border-slate-100"></div>

        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[12px] text-slate-600">
            {tech.category}
          </span>

          <span className="text-[12px] text-slate-500">{tech.difficulty}</span>

          <span className="flex items-center gap-1 text-lg font-semibold text-slate-700">
            <span className="text-yellow-400">★</span>
            {tech.rating}
          </span>
        </div>

        <button
          onClick={() => handleSelectedtech()}
          className="mt-7 w-full rounded-xl bg-slate-950 py-2 text-[10px] text-white "
          disabled={isSelceted === true ? true : false}
        >
          {isSelceted === true ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
