import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/cover.png";

const AboutSection = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
  };
  return (
    <div className="bg-gray-800 mt-52 mx-5 md:mx-14 rounded-2xl md:grid grid-cols-2 gap-2 py-8 md:py-12 xl:py-20 px-4 md:px-8 xl:px-32">
      <div>
        <img
          className="w-80 md:mt-12 mx-auto md:mx-0 xl:w-8/12"
          src={image}
          alt=""
        />
      </div>
      <div className="text-[#38BDF8] font-bold">
        <h6 className="md:text-2xl xl:text-4xl">
          <i>Private Group For</i>
        </h6>
        <h5 className="md:text-3xl xl:text-[43px]">
          <i>Problem Solving</i>
        </h5>
        <p className="text-xs md:text-sm xl:text-base mt-4 md:mt-6 text-justify text-gray-400">
          For all of our courses, we have created a private Facebook group where
          4-5 more web developers including course instructor Sumit Saha will
          answer your various questions directly. We promise to answer your
          questions within a maximum of 24 hours. But in most cases, you will
          get the answer in less time than that. In addition, there will be a
          live session on the module discussed every week where you can get
          answers directly by asking questions.
        </p>
        <button
          onClick={handleNavigate}
          className="px-2 py-1 md:px-8 md:py-2 text-xs md:text-base bg-[#38BDF8] text-gray-900 rounded font-bold mt-2  hover:bg-[#38BDF8]/50 hover:text-black focus:ring-4 focus:ring-offset-slate-800"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
