import Aos from "aos";
import React, { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const allData = [
    {
      icon: "🔍",
      title: "1. Browse Skills",
      desc: "Explore a variety of skills offered by professionals across different categories.",
    },
    {
      icon: "📅",
      title: "2. Book a Slot",
      desc: " Choose a suitable time and connect with your selected provider easily.",
    },
    {
      icon: "🧠",
      title: "3. Learn & Grow",
      desc: "Join the session, practice, and enhance your skills while interacting live!",
    },
  ];

  return (
    <section className="bg-slate-100 px-6 sm:p-15 py-5 rounded-2xl mt-15">
      <h2 className="text-2xl font-bold mb-8 text-center">⚙️ How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {allData.map((data, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-center transition-all"
          >
            <div className="text-4xl mb-3">{data.icon}</div>
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-gray-600 mt-2">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
