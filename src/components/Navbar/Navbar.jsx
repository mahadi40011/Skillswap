// import React, { useContext } from "react";
import logo from "../../assets/skillSwap-logo.png";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { FadeLoader } from "react-spinners";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser, loading } = useContext(AuthContext);
  // const loading = true

  const handleLogOut = () => {
    console.log("Log Out");
    logOutUser()
      .then(() => {
        toast.success("Log Out Successful")
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
              <TiThMenu className="cursor-pointer" size={30} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content custom-gradient rounded-b-2xl z-1 mt-6 w-20 p-2"
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
          {user && (
            <img
              className="w-12 h-12 rounded-full cursor-pointer"
              src={user.photoURL}
              alt="Profile Photo"
              title={user.displayName}
            />
          )}
          {loading ? (
              <FadeLoader className="mr-15" color="#ffffff" />
          ) : user ? (
            <button
              type="button"
              onClick={handleLogOut}
              className="btn bg-sky-900 border-none text-white text-xl ml-2"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn bg-sky-900 border-none text-white text-xl ml-2"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn bg-sky-900 border-none text-white text-xl ml-2"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
