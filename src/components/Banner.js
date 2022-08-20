import React from "react";
import { useNavigate } from "react-router-dom";
import coverImage from "../assets/images/cover.png";

const Banner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/info");
  };

  return (
    <div className="bg-gray-800 m-5 md:m-10 rounded-2xl md:grid md:grid-cols-2 md:gap-2 xl:gap-4 pb-20">
      <div className="text-[#38BDF8] font-bold pl-4 pt-5 md:pt-20 md:pl-6 lg:pl-12 lg:pt-32 xl:pl-32 xl:pt-48">
        <h5 className="md:text-3xl xl:text-4xl">
          <i>Buy Courses Right Now</i>
        </h5>
        <h4 className="xl:text-[45px]">
          <i>10% Discount</i>
        </h4>
        <p className="text-xs pr-4 md:text-sm xl:text-base mt-4 xl:mt-8 text-justify text-gray-400">
          Here you will find all of your necessary courses that are related with
          programming. There are many courses for begginer, intermidate and
          advanced. You can buy any of them. Our system is well managed. It is a
          guided environment and you can get enough support to complete the
          course. The video size and duration have been optimized considering
          the time and bandwidth cost. There will be quizzes with explanations
          and answers at the end of each video so that you can check your
          progress as you learn. At the end of each module, there will be big
          assignments that you will do yourself. The solution of each assignment
          will be given in a live session.
        </p>
        <button
          onClick={handleNavigate}
          className="px-4  py-1 md:px-8 text-sm md:text-base md:py-2 bg-[#38BDF8] text-[#ffffff] rounded font-bold mt-2  hover:bg-gray-400 hover:text-black focus:ring-4 focus:ring-offset-slate-800 md:mb-8 xl:mb-0"
        >
          Info
        </button>
      </div>
      <div>
        <img
          className="w-52 mx-auto md:mx-0 md:w-full md:mt-12"
          src={coverImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
