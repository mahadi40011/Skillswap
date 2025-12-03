// import React, { useContext } from "react";
import logo from "../../assets/skillSwap-logo.png";
import { Link, NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "My Courses", path: "/my-courses" },
  ];

  const authLinks = [
    { name: "Log In", path: "/login" },
    { name: "Sign Up", path: "/register" },
  ];

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Log Out Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="navbar h-5 shadow-sm bg-sky-900 text-white">
      <div className="my-container navbar">
        <div className="navbar-start flex justify-start items-center">
          <img
            className="w-8 h-8 md:w-12 md:h-12 rounded-full"
            src={logo}
            alt=""
          />
          <span className="text-3xl md:text-4xl ml-1 font-bold ">
            SkillSwap{" "}
          </span>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink
                  className={"font-semibold text-xl hover:text-blue-500"}
                  key={index}
                  to={navLink.path}
                >
                  {navLink.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
            {user ? (
              <div className="tooltip tooltip-bottom ">
                <div className="tooltip-content bg-white">
                  <div className="animate-bounce text-sky-900 text-sm">
                    Profile
                  </div>
                </div>
                <img
                  className="w-12 h-12 rounded-full cursor-pointer border border-gray-500"
                  src={user.photoURL}
                  alt="Profile Photo"
                />
              </div>
            ) : (
              <div className=" border-white py-2 px-4 rounded-lg items-center font-semibold text-xl flex ">
                <NavLink className={"hover:text-blue-500"} to={"/login"}>
                  Log In
                </NavLink>
                <span className="mx-2">|</span>
                <NavLink className={"hover:text-blue-500"} to={"/register"}>
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
          <div className="drawer lg:hidden">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-end items-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-1" className=" lg:hidden drawer-button">
                <div className="tooltip tooltip-bottom ">
                  <div className="tooltip-content bg-white">
                    <div className="animate-bounce text-sky-900 text-sm">
                      Menu
                    </div>
                  </div>
                  <TiThMenu className="cursor-pointer mt-2" size={25} />
                </div>
              </label>
              <div className="tooltip tooltip-bottom ">
                <div className="tooltip-content bg-white">
                  <div className="animate-bounce text-sky-900 text-sm">
                    Profile
                  </div>
                </div>
                {user ? (
                  <img
                    className="w-8 h-8 md:h-12 md:w-12 rounded-full cursor-pointer border border-gray-500"
                    src={user.photoURL}
                    alt="Profile Photo"
                  />
                ) : (
                  <FaCircleUser
                    className="cursor-pointer rounded-full ml-2"
                    size={32}
                  />
                )}
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-1"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="bg-white py-2 w-fit min-h-screen px-3">
                {/* Sidebar Header/Logo */}
                <span className="text-3xl md:text-4xl ml-1 font-bold text-sky-900">
                  SkillSwap{" "}
                </span>

                <div className="flex flex-col justify-between h-[calc(100vh-65px)]">
                  <ul className="flex flex-col gap-1 text-gray-600 font-semibold  mt-5 w-full">
                    {navLinks.map((navLink, index) => (
                      <li key={index} className="w-full">
                        <NavLink
                          to={navLink.path}
                          className={({ isActive }) =>
                            `
                       sidebar-nav-item-style
                        ${
                          isActive
                            ? "bg-sky-900 text-white shadow-md"
                            : "text-gray-700 hover:bg-sky-100"
                        }
                        `
                          }
                        >
                          {navLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <hr className="w-full  text-gray-700" />

                    <ul className="flex flex-col gap-1 text-gray-600 font-semibold  mt-2 w-full">
                      {user ? (
                        <li
                          onClick={handleLogOut}
                          className={`
                       sidebar-nav-item-style
                        text-gray-700 hover:bg-sky-100
                        `}
                        >
                          Log Out
                        </li>
                      ) : (
                        authLinks.map((authLink, i) => (
                          <li key={i} className="w-full">
                            <NavLink
                              to={authLink.path}
                              className={`
                          sidebar-nav-item-style
                        text-gray-700 hover:bg-sky-100
                        `}
                            >
                              {authLink.name}
                            </NavLink>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
