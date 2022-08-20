import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import image from "../assets/images/cover.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 mt-80">
      <div className="md:flex justify-around items-center text-center md:text-justify">
        <div>
          <img
            className="w-40 md:w-52 pt-5 md:pt-0 mx-auto md:mx-0 xl:w-full mt-20"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-3 font-bold mt-8 md:mt-20">
          <h6 className="text-[#38BDF8]">Contact Info</h6>
          <p className="text-sm md:text-base text-gray-400">
            <FontAwesomeIcon className="mr-3" icon={faPhone} />
            +1 (396)-292-2391
          </p>
          <p className="text-sm md:text-base text-gray-400">
            <FontAwesomeIcon className="mr-3" icon={faEnvelope} />
            omaralabdullah051@gmail.com
          </p>
          <p className="text-sm  md:text-base text-gray-400">
            <FontAwesomeIcon className="mr-3" icon={faLocationDot} />
            455 7th Ave, NY 99937, UAE
          </p>
          <div className="md:flex justify-center items-center px-20 md:px-0">
            <a
              href="https://www.instagram.com/ab_omar.7/   "
              target="blank"
              className="flex justify-center items-center bg-[#38BDF8] text-black mb-3 mr-2 px-1 rounded cursor-pointer hover:bg-green-900 hover:text-gray-400 focus:ring-4 focus:ring-offset-slate-800"
            >
              <img
                className="w-12"
                src="https://i.postimg.cc/q7NnDHYn/instagram.png"
                alt=""
              />
              <h6>Instagram</h6>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100048860175423"
              target="blank"
              className="flex justify-center items-center bg-[#38BDF8] text-black mb-3 mr-2 px-1 py-[2px] rounded cursor-pointer hover:bg-green-900 hover:text-gray-400 focus:ring-4 focus:ring-offset-slate-800"
            >
              <img
                className="w-11"
                src="https://i.postimg.cc/DwcyrDQ2/facebook.png"
                alt=""
              />
              <h6>Facebook</h6>
            </a>
            <a
              href="https://github.com/Omaralabdullah051"
              target="blank"
              className="flex justify-center items-center bg-[#38BDF8] text-black mb-3 p-1 px-3 rounded cursor-pointer hover:bg-green-900 hover:text-gray-400 focus:ring-4 focus:ring-offset-slate-800 mr-2 md:mr-0"
            >
              <img
                className="w-10 mr-1"
                src="https://i.postimg.cc/XJBbzD5B/github-2.png"
                alt=""
              />
              <h6>Github</h6>
            </a>
          </div>
        </div>
      </div>
      <p className="text-[#38BDF8] font-bold text-center pt-2 pb-8">
        <small>
          <FontAwesomeIcon className="mr-1" icon={faCopyright} />
          {year}. All Right Reserved
        </small>
      </p>
    </footer>
  );
};

export default Footer;
