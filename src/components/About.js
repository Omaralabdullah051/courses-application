import React, { useEffect, useState } from "react";
import LoadingState from "./LoadingState";

const About = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          " https://hidden-eyrie-82910.herokuapp.com/members"
        );
        const data = await res.json();
        setMembers(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="text-[#38BDF8] font-bold">
      {loading ? <LoadingState /> : ""}
      <h4 className="md:text-4xl text-center mt-10 md:mt-20">About US</h4>
      <p className="text-xs md:text-sm xl:text-2xl text-justify py-4 px-4 md:py-8 md:px-20 text-gray-500">
        We manage all of this courses with efficiency. The authority, community,
        etc are very helpful and we hope you can learn a lot of things and
        explore enough technologies to become a successful programmer. The
        system is well managed and we follow the project approach for better
        understanding. So, let's keep learning and enjoy new technologies and
        keep going to explore.
      </p>
      <h4 className="mt-10 text-center">The Team</h4>
      <div className="md:grid grid-cols-5 gap-4 mt-10 px-24 text-gray-500">
        {members.map((member) => (
          <div key={member._id} className="flex flex-col items-center">
            <h6 className="text-xs xl:text-xl">{member.name}</h6>
            <img className="w-52" src={member.img} alt="" />
          </div>
        ))}
      </div>
      <h6 className="md:text-2xl mt-20 text-center">Thanks for visiting</h6>
      <p className="md:text-xl mt-3 text-center">Wish you all the best</p>
      <p className="md:text-xl mt-3 text-center">Stay with us</p>
    </div>
  );
};

export default About;
