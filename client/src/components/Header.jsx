import { current } from "@reduxjs/toolkit";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
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

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">
                <button className="bg-blue-500 rounded-lg w-[100px] h-[50px] ml-3">
                  
                  Sign in
                </button>
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
