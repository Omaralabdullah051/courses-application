import React from "react";
import redux from "../assets/images/react-redux-category.png";
// import Project2 from "./Project2";
// import Project3 from "./Projects3";
// import Project4 from "./Projects4";
// import Project5 from "./Project5";
import { useNavigate } from "react-router-dom";

const CourseFour = () => {
  const navigate = useNavigate();
  const handleBookMartNavigate = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div id="projects" className="pt-12 px-4 m-5 md:m-10">
        <div
          className="mt-12 grid grid-cols-1 2xl:grid-cols-2 gap-8 bg-gray-800 p-4 rounded-lg 2xl:items-center"
          data-aos="fade-up-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div>
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
              className="rounded-lg mx-auto"
              src={redux}
              alt=""
            />
          </div>
          <div
            className="text-gray-400 font-bold space-y-1 mt-8 lg:pl-10 lg:pb-10 2xl:pl-0"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <h2 className="text-[#38BDF8] text-xl lg:text-3xl mb-3">
              Advance React-Redux Crash Course
            </h2>
            <p className="text-xs lg:text-base">
              It's a complete React-Redux Crash course where you will be able to
              learn advance topic of Redux.
            </p>
            <p className="text-xs lg:text-base">
              ● Regular Module with 12/13 lessons per day.
            </p>
            <p className="text-xs lg:text-base">
              ● Weekly assignment with proper judgement and share the solutions.
            </p>
            <p className="text-xs lg:text-base">
              ● Monthly live session to communicate with all of our comunity
              members.
            </p>
            <p className="text-[#38BDF8] mt-3">Key Topics:</p>
            <p className="text-xs lg:text-sm">
              Store, Action Identifiers, Action Creators, Dispatch, Reducers,
              Slice, Async Thunk, etc.
            </p>
            <div className="md:flex md:items-center">
              <div>
                <button
                  className="mr-2 uppercase py-1 px-2 md:px-4 mt-3 rounded bg-[#38BDF8] text-gray-900 font-bold text-xs md:text-base"
                  onClick={handleBookMartNavigate}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Project2 />
      <Project3 />
      <Project4 />
      <Project5 /> */}
    </>
  );
};

export default CourseFour;
