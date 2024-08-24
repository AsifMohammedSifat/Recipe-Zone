import { RiAccountCircleLine } from "react-icons/ri";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-72 p-2 shadow"
          >
            <li>
              <a href="#home" className="block w-full text-center py-2">
                Home
              </a>
            </li>

            <li>
              <a href="#recepies" className="block w-full text-center py-2">
                Recepies
              </a>
            </li>
            <li>
              <a href="#about" className="block w-full text-center py-2">
                About
              </a>
            </li>
            <li>
              <a href="#search" className="block w-full text-center py-2">
                <div className="">
                  <SearchBar />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <a className="text-2xl brand-font font-bold">RecipeZone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#recepies">Recepies</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li></li>
        </ul>
      </div>

      <div className="navbar-end text-3xl">
        <div className="hidden md:block m-2">
          <SearchBar />
        </div>
        <button className="bg-green-600 rounded-full p-2 text-white ">
          <RiAccountCircleLine />
        </button>
      </div>
    </div>
  );
};

export default Nav;
