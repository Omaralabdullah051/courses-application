import React, { useEffect, useState } from "react";
// import LoadingState from "../../Shared/LoadingState/LoadingState";

const ChooseUs = () => {
  const [advantages, setAdvantages] = useState([]);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          " https://hidden-eyrie-82910.herokuapp.com/advantages"
        );
        const data = await res.json();
        // setLoading(false);
        setAdvantages(data);
      } catch (err) {
        // console.error(err.message);
        // setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="text-[#38BDF8] font-bold mt-40">
      <h4 className="md:4xl text-center">Why Choose Us</h4>
      {/* {loading ? <LoadingState /> : ""} */}
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 xl:mt-12 p-4 md:p-8 px-5 md:px-16">
        {advantages.map((advantage) => (
          <div
            className="md:hover:bg-[#38BDF8]/80 md:first:bg-[#38BDF8]/80 md:first:text-black bg-gray-800 py-8 px-4 md:p-8 space-y-2 md:hover:text-black cursor-pointer mb-3 odd:bg-[#38BDF8]/80 odd:text-black even:text-gray-500"
            key={advantage._id}
          >
            <h6 className="xl:text-2xl">{advantage.name}</h6>
            <p className="text-justify text-xs xl:text-base">
              {advantage.discription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
