import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg w-full mx-auto flex justify-between items-center"><Outlet /></main>
    </>
  );
};

export default MainLayout;
