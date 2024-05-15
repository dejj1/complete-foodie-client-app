import axios from "axios";
import React from "react";

const axiosPublic = axios.create({
  baseURL: "https://complete-foodie-client-server.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
