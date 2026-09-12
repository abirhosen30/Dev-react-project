import React from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="container mx-auto flex items-center justify-between mt-5">
      <div>
        <img src={logo} alt="" className="w-full" />
      </div>

      <div>
        <ul className="flex justify-around gap-6 items-center text-center">
          <li>
            <a href=""></a>Home
          </li>
          <li>
            <a href=""></a>Technologies
          </li>
          <li>
            <a href=""></a>Projects
          </li>
          <li>
            <a href=""></a>About
          </li>
          <li>
            <a href=""></a>Contact
          </li>
        </ul>
      </div>

      <div className=" flex text-center items-center gap-4 ">
        <button className="font-semibold">Sign In</button>
        <button className="border-2 bg-pink-600 text-white py-2 rounded-4xl px-4 font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
