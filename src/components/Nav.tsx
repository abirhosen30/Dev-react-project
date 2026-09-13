import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className="container mx-auto flex items-center justify-between mt-5 pb-3 sticky top-0 z-50 bg-white">
      <RxHamburgerMenu className="md:hidden" />
      <div>
        <img src={logo} alt="" className="h-8 w-auto sm:h-9" />
      </div>

      <div className="hidden md:block">
        <ul className="flex justify-around gap-6 items-center text-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div className=" flex text-center items-center gap-4 ">
        <button className="font-semibold">Sign In</button>
        <button className="border-2 bg-pink-600 text-white py-2 rounded-4xl px-4 font-semibold text-sm">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
