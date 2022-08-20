import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";
// import LoadingState from "../../Shared/LoadingState/LoadingState";
// import SocialLogin from "../SocialLogin/SocialLogin";
import image from "../assets/images/cover.png";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [updateProfile] = useUpdateProfile(auth);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = user?.user?.email;

  let from = location.state?.from?.pathname || "/";

  const nameRef = useRef("");

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    imgUrl: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleNameInput = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleEmailInput = (e) => {
    const validEmail = /^\S+@\S+\.\S+$/.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, emailError: "Please Provide a valid Email" });
    }
  };

  const handlePasswordInput = (e) => {
    const strongPassword =
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(e.target.value);
    if (strongPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setErrors({
        ...errors,
        passwordError:
          "Your password must contain at least one digit, lowercase, special character and min 8 characters and max 20 characters",
      });
    }
  };

  const handleConfirmPasswordInput = (e) => {
    if (userInfo.password === e.target.value) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmPasswordError: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      setErrors({
        ...errors,
        confirmPasswordError: "Your two passwords doesn't matched",
      });
    }
  };

  const handleImgUrl = (e) => {
    setUserInfo({ ...userInfo, imgUrl: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.confirmPassword) {
      await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      await updateProfile({
        displayName: userInfo.name,
        photoURL: userInfo.imgUrl,
      });
    }
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast.error("Invalid email provided, please provide a valid email");
          setError("Invalid email provided, please provide a valid email");
          setAgree(!agree);
          break;

        case "auth/email-already-in-use":
          toast.error("This email is already in used");
          setError("This email is already in used");
          setAgree(!agree);
          break;

        case "auth/email-already-exists":
          toast.error("Email already exists");
          setError("Email already exists");
          setAgree(!agree);
          break;

        case "auth/invalid-credential":
          toast.error(
            "Doesn't allow creation of multiple account with the same email"
          );
          setError(
            "Doesn't allow creation of multiple account with the same email"
          );
          setAgree(!agree);
          break;

        default:
          toast.error(hookError?.message);
          setError(hookError?.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hookError]); //here I changed agree state inside useEffect hook on every render. I don't use agreee dependency because every time when the agree state changed it will call the useEffect again and again.

  useEffect(() => {
    if (user) {
      if (!user?.user?.emailVerified) {
        toast.success(
          "Your authentication process is almost done. You need to verify your email. You can verify your email at any time if neccessary"
        );
      } else {
        toast.success("User created successfully");
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  //   if (loading) {
  //     return <LoadingState />;
  //   }

  return (
    <div className="text-[#38BDF8] font-bold mb-52">
      <div className="w-[320px] md:w-[500px] mx-auto">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col border-2 border-gray-700 mx-auto mt-12 rounded-lg"
        >
          <div className=" mx-auto mt-8 flex justify-center items-center">
            <img className="w-10" src={image} alt="" />
            <p className="text-[#38BDF8] font-bold">
              <i>courseMart</i>
            </p>
          </div>
          <h4 className="md:text-4xl text-center mt-3 font-bold text-[#38BDF8]">
            Please Register
          </h4>
          <input
            onChange={handleNameInput}
            ref={nameRef}
            className="w-[270px] md:w-[400px] px-4 py-2 mx-auto mb-6 bg-gray-700 text-gray-400 font-bold rounded mt-8 required:border-red-500"
            type="text"
            name="userName"
            id="userName"
            placeholder="Your Name"
            autoComplete="off"
            required
          />
          <input
            onChange={handleEmailInput}
            className="w-[270px] md:w-[400px] px-4 py-2 mx-auto mb-3 bg-gray-700 text-gray-400 font-bold rounded required:border-red-500"
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <p className="text-sm md:text-base text-center text-red-500 mb-3">
            {errors?.emailError}
          </p>
          <input
            onChange={handlePasswordInput}
            className="w-[270px] md:w-[400px] px-4 py-2 mx-auto mb-3 bg-gray-700 text-gray-400 font-bold rounded required:border-red-500"
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            autoComplete="off"
            required
          />
          <p className="text-sm md:text-base px-24 text-red-500 mb-3 text-justify">
            {errors?.passwordError}
          </p>
          <input
            onChange={handleConfirmPasswordInput}
            className="w-[270px] md:w-[400px] px-4 py-2 mx-auto mb-3 bg-gray-700 text-gray-400 font-bold rounded required:border-red-500"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            autoComplete="off"
            required
          />
          <p className="text-sm md:text-base text-center text-red-500 mb-3">
            {errors?.confirmPasswordError}
          </p>
          <input
            onChange={handleImgUrl}
            className="w-[270px] md:w-[400px] px-4 py-2 mx-auto mb-3 bg-gray-700 text-gray-400 font-bold rounded"
            type="text"
            name="imgUrl"
            id="imgUrl"
            placeholder="Your image url (optional)"
            autoComplete="off"
          />
          <p className="text-sm md:text-base text-center mt-2">
            Already have an account?{" "}
            <Link className="text-purple-300 font-medium" to="/login">
              Please Login
            </Link>
          </p>
          <div className="flex justify-center items-center mt-2">
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="checkbox"
              id="terms"
              className="bg-gray-700 mr-2"
            />
            <label
              className={`text-xs md:text-base ${
                agree ? "text-green-600" : "text-red-500"
              }`}
              htmlFor="terms"
            >
              Accept courseMart all terms and conditions
            </label>
          </div>
          <p className="text-sm md:text-base text-center mt-2 text-red-500">
            {error}
          </p>
          <input
            disabled={!agree}
            title={!agree ? "Accept courseMart all terms and conditions" : ""}
            className={`w-[270px] md:w-[400px] mx-auto mb-3 px-8 py-2 rounded font-bold mt-3 ${
              agree
                ? "bg-[#38BDF8] text-gray-900 hover:bg-[#38BDF8]/90 hover:text-gray-900 focus:ring-4 focus:ring-offset-slate-800"
                : "bg-[#38BDF8]/50 text-gray-500"
            } `}
            type="submit"
            value="Register"
          />

          {/* <SocialLogin /> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
