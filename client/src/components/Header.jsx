import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" bg-slate-700 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mr-auto ml-auto p-3">
        <Link to="/">
          <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap  ">
            <span>bayatouni</span>
            <span>Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-2xl flex items-center ">
          <input
            placeholder="search...."
            className=" text-yellow-500 bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
        <Link to="/">
          <li className="hidden sm:inline hover:underline cursor-pointer">
            Home
          </li>
          </Link>
          <Link to="/about">
          <li className="hidden sm:inline hover:underline cursor-pointer ">
            About
          </li>
          </Link>
          <Link to="/sign-in">
          <li className="sm:inline hover:underline cursor-pointer ">
            Sign in
          </li>
          </Link>
          <Link to="/sign-up">
          <li className="sm:inline hover:underline cursor-pointer ">
            Sign up
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
