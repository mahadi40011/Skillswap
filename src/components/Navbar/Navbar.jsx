import React from "react";
import logo from "../../assets/skillSwap-logo.png";
import userIcon from "../../assets/User-icon.png";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const navItem = (
    <>
      <li className="font-semibold text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold text-xl">
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm custom-gradient">
      <div className="my-container navbar">
        <div className="navbar-start flex justify-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <TiThMenu size={30} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-linear-to-r from-slate-900 via-sky-900 to-slate-800 text-gray-300 rounded-b-2xl z-1 mt-5 w-20 p-2"
            >
              {navItem}
            </ul>
          </div>
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
          <span className="text-4xl ml-3 font-bold hidden md:block">
            SkillSwap{" "}
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <img className="w-12 h-12 rounded-full" src={userIcon} alt="" />
          <Link className="btn bg-sky-900 border-none text-white text-xl ml-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
