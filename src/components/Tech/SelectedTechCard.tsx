import React from 'react';
import type { ITechnology } from '../../assets/Type/Type';

const SelectedTechCard = ({ tech, handleRemove }: { tech: ITechnology; handleRemove: (id: string) => void }) => {
    return (
        <div
            key={tech.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
          >
            {/* Left side */}
            <div className="flex items-center gap-4">
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h3 className="text-base font-bold text-slate-800">
                  {tech.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {tech.category}
                </p>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => handleRemove(tech.id)}
              className="text-4xl font-light leading-none text-slate-400 transition hover:text-red-500"
            >
              ×
            </button>
          </div>
    );
};

export default SelectedTechCard;