import React, { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const {signUpWithGmail, createUser, updateUserProfile } = useContext(AuthContext);
  
    const axiosPublic = useAxiosPublic();
  // redirecting to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password).then((result) => {
      // Signed up 
      const user = result.user;
      updateUserProfile(data.email, data.photoURL).then(()=>{
        const userInfo = {
          name: data.name,
          email: data.email
        }
        axiosPublic.post('/users', userInfo)
      .then((response)=>{
        if (response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          toast.error("No message in response");
        }
        alert("Account created successfully!")
        if (response.data.success){
          navigate(from, {replace: true});
        }
        // ...
      })
    })
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
  }

  // login with google 
  const handleRegister = () => {
    signUpWithGmail()
    .then((result) => {
      const user = result.user;
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email
      };
      axiosPublic.post('/users', userInfo)
      .then((response) => {
        alert("Signin successful!");
        navigate('/');
      })
    })
    .catch((error) => console.log(error))
  };

  return (
    <div className=" p-7 lg:p-0">
      <div className="max-w-md bg-[#eef3f0] shadow w-full mx-auto flex items-center justify-center my-16 rounded">
      <div className="mb-5 ">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Please Create An Account!</h3>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Your name"
              className="input input-bordered text-sm"
              {...register("name")}
            />
          </div>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered text-sm"
              {...register("email")}
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-sm"
              {...register("password")}
            />
           
          </div>

          {/* error message */}
          <p>{errors.message}</p>

          {/* submit btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-green text-white border-0 outline-0 rounded-full"
              value="Sign up"
            />
          </div>

          <div className="text-center my-2 text-sm font-semibold">
            Have an account?
            <Link to="/login">
              <button className="ml-1 underline text-red">Login here</button>
            </Link>
          </div>
        </form>
        <div className="text-center space-x-3">
          <button
            onClick={handleRegister}
            className="btn btn-circle hover:bg-green hover:text-white"
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
