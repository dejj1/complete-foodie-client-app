import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";
import { AuthContext } from "../contexts/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const {loading} = useContext(AuthContext);

  return (
    <div>
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
        <Navbar />
        <Outlet />
        <ToastContainer />
        <Footer />
      </div>
      )}
       
    </div>
  );
};

export default Main;
