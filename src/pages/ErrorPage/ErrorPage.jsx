import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen custom-gradient overflow-hidden">
      <title>Error-404</title>
      <h1 className="text-[10rem] md:text-[15rem] font-extrabold leading-none tracking-widest animate-pulse">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 ">
        Page Not Found
      </h2>
      <p className="text-gray-300 mt-4 text-center max-w-md ">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:text-white hover:bg-gray-500 transition-all  cursor-pointer"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
