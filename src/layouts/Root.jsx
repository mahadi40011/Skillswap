import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10">
        <Navbar></Navbar>
      </header>

      <main className=" flex-1">
        {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
