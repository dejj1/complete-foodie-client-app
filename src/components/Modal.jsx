import React, { useState, useContext, useEffect } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Modal = () => {
  // const [isOpen, setIsOpen] = useState(true);
  

  // const handleOnClose = (e) => {
  //   if(e.target.id === 'my_modal_5') {
  //     setIsOpen(false);
  // }

  const handleOnClose = () => {
    const modal = document.getElementById("my_modal_5");
    // add event listener to modal's background
    modal.addEventListener("click", (e) => {
      // check if the target of the click event is the modal itself
      if (e.target === modal) {
        // close the modal
        modal.close();
        // onClick={() => document.getElementById("my_modal_5").close()}
      }
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const axiosPublic = useAxiosPublic();

  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000); // Clear the error message after 5 seconds

      // Cleanup the timer if the component unmounts or errorMessage changes
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const onSubmit = (data, event) => {
    event.preventDefault();
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        alert("User signed in successfully!", userInfo);
        navigate(from, { replace: true });
        // console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage("Please provide valid email & password!");
      });
    reset();
  }
    // axiosPublic.post("/users/login", userInfo).then((response) => {
    //     if (response.data && response.data.message) {
    //       toast.success(response.data.message);
    //     } else {
    //       toast.error("No message in response");
    //     }

    //     alert("User logged in successfully.");

    //     if (response.data.success) {
    // Make a request to the JWT endpoint to get the token
    // axios.post(
    //     "/jwt",
    //     userInfo
    //   )
    //   .then((jwtResponse) => {
    //     const token = jwtResponse.data.token;

    //     if (token) {
    //       localStorage.setItem("jwtToken", token);

    // Set a timeout to log out the user after 1 hour
    // setTimeout(() => {
    //   localStorage.removeItem("jwtToken");
    //   alert("Session expired. Please log in again.");
    // }, 3600000); // 1 hour in milliseconds

    // Navigate to the desired page after successful login and token retrieval
    //                 navigate(from, { replace: true });
    //               } else {
    //                 toast.error("Failed to retrieve JWT token.");
    //               }
    //             })
    //             .catch((error) => {
    //               toast.error("Error retrieving JWT token: " + error.message);
    //             });
    //         }
    //       })
    //       .catch((error) => {
    //         toast.error("Error during user login: " + error.message);
    //       });
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setErrorMessage("Please provide valid email & password!");
    //   });

    // reset();

    // google signin
    const handleRegister = () => {
      signUpWithGmail()
        .then((result) => {
          const user = result.user;
          const userInfo = {
            name: result?.user?.displayName,
            email: result?.user?.email,
          };
          axiosPublic.post("/users", userInfo).then((response) => {
            // console.log(response);
            toast.success(response);
            alert("Signin successful!");
            navigate("/");
          });
        })
        .catch((error) => console.log(error));
    };

    return (
      <dialog
        id="my_modal_5"
        onClick={handleOnClose}
        className="modal modal-middle sm:modal-middle bg-black bg-opacity-30 backdrop-blur-sm"
      >
        <div className="modal-box  bg-gradient-to-b from-[#bce3bb] from-0% to-[#e9e6e6] to-100%">
          <div className="modal-action flex-col justify-center mt-0 ">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg">Please Login!</h3>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
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
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover mt-2">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* show errors */}
              {errorMessage ? (
                <p className="text-red text-xs italic">
                  {errorMessage}
                </p>
              ) : (
                ""
              )}

              {/* submit btn */}
              <div className="form-control mt-4">
                <input
                  type="submit"
                  className="btn bg-green text-white border-0 outline-0 rounded-full"
                  value="Login"
                  onChange={handleOnClose}
                />
              </div>

              {/* close btn */}
              <div
                htmlFor="my_modal_5"
                className="btn  btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                X
              </div>

              <p className="text-center my-2 text-sm font-semibold">
                Do not have an account?
                <Link to="/signup" className="underline text-red ml-1">
                  Sign up Now
                </Link>
              </p>
            </form>
            <div className="text-center space-x-3 mb-5">
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
      </dialog>
    );
  };


export default Modal;
