import React from "react";
import heroPic from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="container mx-auto md:flex items-center text-center md:justify-between mt-5">
      <div>
        <h1 className="font-bold text-4xl mb-5">
          Build Your Ideal <br /><span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span>
        </h1>
        <p className="text-[#475569] mb-5">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br />next project.
        </p>

        <div className="md:flex gap-3 mt-9">
            <button className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white">Explore Technologies</button>
            <button className="rounded-lg border border-gray-200 bg-white px-10 py-2 text-sm text-gray-600">Learn More</button>
        </div>
      </div>
      <div>
            <img src={heroPic} alt="" className="w-full md:w-auto" />
      </div>
    </div>
  );
};

export default Hero;
