import React, { useEffect } from "react";
import { BsFillClockFill } from "react-icons/bs";
import { FaAward, FaUsers } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Aos from "aos";

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const features = [
    {
      icon: <IoShieldCheckmarkSharp className="w-10 h-10 text-blue-500" />,
      title: "Secure & Reliable",
      desc: "Your data and transactions are protected with top-level security.",
    },
    {
      icon: <BsFillClockFill className="w-10 h-10 text-green-500" />,
      title: "Fast & Efficient",
      desc: "Quick response times and smooth performance across all devices.",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-orange-500" />,
      title: "Trusted Community",
      desc: "Join thousands of satisfied users and skilled professionals.",
    },
    {
      icon: <FaAward className="w-10 h-10 text-purple-500" />,
      title: "Quality Assured",
      desc: "Every service and provider is verified for the best experience.",
    },
  ];

  return (
    <section className="bg-slate-100 sm:py-15 py-5 sm:px-10 rounded-2xl mt-15">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Why Choose <span className="text-blue-600">Us</span>?
        </h2>
        <p className="text-gray-600 mb-12">
          We’re committed to delivering quality, trust, and efficiency for every
          user.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
