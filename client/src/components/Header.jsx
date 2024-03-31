import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black ">
      <div className="flex justify-between  max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap">
            <span className="text-blue-600 ">Comfort</span>
            <span className="text-blue-900">Crib</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparennt focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-white hover:text-blue-500 p-3 items-center">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-white hover:text-blue-500">
              About
            </li>
          </Link>
          <button className="bg-blue-500 rounded-lg w-[100px] h-[50px] ml-3">
          <Link to="/sign-in">
            <li className=" text-white ">Sign In</li>
          </Link>
          </button>
        </ul>
      </div>
    </header>
  );
}
