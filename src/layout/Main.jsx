import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div className='bg-primaryBG'>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      )}
       
    </div>
  );
};

export default Main;
