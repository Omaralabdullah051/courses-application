import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../firebase.init";
import LoadingState from "./LoadingState";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, loading, googleError] =
    useSignInWithGoogle(auth);
  //   const userEmail = googleUser?.user?.email;

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const hookError = googleError;
    if (hookError) {
      switch (hookError?.code) {
        case "auth/account-exists-with-different-credential":
          Swal.fire({
            title: "Error",
            text: "Doesn't allow to log in with same email that exists with different credential",
            icon: "error",
            color: "#a3a3a3",
            background: "#1e293b",
            confirmButtonColor: "#166534",
            confirmButtonText: "OK",
          });
          break;

        case "auth/popup-closed-by-user":
          Swal.fire({
            title: "Error",
            text: "popup closed. Please Don't close the popup",
            icon: "error",
            color: "#a3a3a3",
            background: "#1e293b",
            confirmButtonColor: "#166534",
            confirmButtonText: "OK",
          });
          break;

        default:
          Swal.fire({
            title: "Error",
            text: hookError?.message,
            icon: "error",
            color: "#a3a3a3",
            background: "#1e293b",
            confirmButtonColor: "#166534",
            confirmButtonText: "OK",
          });
      }
    }
  }, [googleError]);

  useEffect(() => {
    if (googleUser) {
      if (googleUser) {
        Swal.fire({
          title: "Success",
          text: "Successfully logged in with Google",
          icon: "success",
          color: "#38BDF8",
          background: "#1e293b",
          confirmButtonColor: "#166534",
          confirmButtonText: "OK",
        });
      }
    }
  }, [googleUser]);

  useEffect(() => {
    if (googleUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, navigate, from]);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="mb-2 md:mb-8">
      <div className="flex justify-center items-center mb-3">
        <div className="w-32 md:w-44 h-1 bg-[#38BDF8]"></div>
        <div className="mx-2 text-purple-400">OR</div>
        <div className="w-32 md:w-44 h-1 bg-[#38BDF8]"></div>
      </div>
      <div className="w-[270px] md:w-[400px] mx-auto">
        <div
          onClick={() => signInWithGoogle()}
          className="flex justify-center items-center bg-[#38BDF8] text-black mb-3 mr-3 md:mr-2 p-1 rounded cursor-pointer hover:bg-[#38BDF8]/90 hover:text-gray-800 focus:ring-4 focus:ring-offset-slate-800 ml-3 md:ml-0"
        >
          <img
            className="w-12"
            src="https://i.postimg.cc/BbW09c5Y/google.png"
            alt=""
          />
          <h6>Google</h6>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
