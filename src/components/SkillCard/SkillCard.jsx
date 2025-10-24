import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const SkillCard = ({ skill }) => {
  const navigate = useNavigate()

  useEffect(() => {
    Aos.init();
  }, []);

  const { image, skillName, rating, price, skillId } = skill;

  const handleViewDetails = () => {
    navigate(`/skill-details/${skillId}`);
  }

  return (
    <div className="mx-2 sm:mx-0">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="bg-white  shadow-md max-w-[400px] md:max-w-none mx-auto rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <img src={image} alt={skillName} className="w-full h-40 xl:h-60 " />

        <div className="p-4 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{skillName}</h2>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p className="text-xl font-semibold">⭐ {rating}</p>
            <p className=" text-green-600 text-xl font-semibold">${price}</p>
          </div>

          <button
            onClick={handleViewDetails}
            className="mt-3 w-full text-xl font-semibold cursor-pointer custom-gradient py-2 rounded-lg "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
