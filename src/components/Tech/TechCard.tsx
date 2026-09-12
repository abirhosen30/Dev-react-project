import React from "react";
import type { ITechnology } from "../../assets/Type/Type";

const TechCard = ({ tech }: ITechnology) => {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-12 w-12" />

        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-lg text-emerald-600">
          {tech.badge}
        </span>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-slate-900">{tech.name}</h2>

        <p className="mt-4 text-lg leading-8 text-slate-500">
          {tech.description}
        </p>
      </div>

      <div className="my-6 border-t border-slate-100"></div>

      <div className="flex items-center justify-between">
        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-lg text-slate-600">
          {tech.category}
        </span>

        <span className="text-lg text-slate-500">{tech.difficulty}</span>

        <span className="flex items-center gap-1 text-lg font-semibold text-slate-700">
          <span className="text-yellow-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button className="mt-7 w-full rounded-xl bg-slate-950 py-4 text-xl text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
