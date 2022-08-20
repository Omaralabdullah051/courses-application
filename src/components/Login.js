import React, { useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
// import LoadingState from "../../Shared/LoadingState/LoadingState";
// import SocialLogin from "../SocialLogin/SocialLogin";
import image from "../assets/images/cover.png";
// import PageTitle from "../../Shared/PageTitle/PageTitle";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef?.current?.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast(
        "Email is sent to reset your password. Please check you mail inbox"
      );
    } else {
      toast("Please provide your email");
    }
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email provided, please provide a valid email");
          setError("Invalid email provided, please provide a valid email");
          break;

        case "auth/user-not-found":
          toast.error("User not found");
          setError("User not found");
          break;

        case "auth/wrong-password":
          toast.error("Wrong password");
          setError("Wrong password");
          break;

        default:
          toast.error(hookError?.message);
          setError(hookError?.message);
      }
    }
  }, [hookError]);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  //   if (loading) {
  //     return <LoadingState />;
  //   }

  return (
    <div className="text-[#38BDF8] font-bold mb-52">
      <div className="w-[320px] md:w-[500px] mx-auto">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col md:border-2 border-gray-700 mx-auto mt-3 md:mt-24 rounded-lg"
        >
          <div className=" mx-auto mt-8 flex justify-center items-center">
            <img className="w-10" src={image} alt="" />
            <p className="text-[#38BDF8] font-bold">
              <i>bookMart</i>
            </p>
          </div>
          <h4 className="md:text-4xl text-center  font-bold text-[#38BDF8] mt-5">
            Please login
          </h4>
          <input
            ref={emailRef}
            className="w-[300px] md:w-[400px] px-4 py-2 mx-auto mb-3 bg-gray-700 text-gray-400 font-bold rounded mt-10 md:mt-12 required:border-red-500"
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <input
            ref={passwordRef}
            className="w-[300px] md:w-[400px] px-4 py-2 mx-auto mb-3 bg-gray-700 text-gray-400 font-bold rounded required:border-red-500"
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            autoComplete="off"
            required
          />
          <p className="text-center text-sm md:text-base">
            Forget password?{" "}
            <button onClick={handleResetPassword} className="text-purple-400">
              Reset password
            </button>
          </p>
          <p className="text-center mt-2 text-sm md:text-base">
            Don't have an account?{" "}
            <Link className="text-purple-400 font-medium" to="/register">
              Please Register
            </Link>
          </p>
          <p className="text-center mt-2 text-red-500 text-sm md:text-base">
            {error}
          </p>
          <input
            className="w-[300px] md:w-[400px] mx-auto mb-3 px-8 py-2 bg-[#38BDF8] text-gray-900 rounded font-bold hover:bg-[#38BDF8]/90 hover:text-black mt-3 focus:ring-4 focus:ring-offset-slate-800"
            type="submit"
            value="Login"
          />
          {/* <SocialLogin /> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
