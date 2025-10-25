import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../../components/SkillCard/SkillCard";
import TopRatedProviders from "../../components/TopRatedProviders/TopRatedProviders";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import SlidingBanner from "../../components/SlidingBanner/SlidingBanner";
import Aos from "aos";

const Home = () => {
  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
      Aos.init();
    }, []);

  return (
    <div className="bg-slate-200 py-15">
      <title>SkillSwap - Home</title>
      <div className="my-container ">
        <SlidingBanner data={data} />
        <main className="mt-20">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="flex items-center justify-center my-8"
          >
            <hr className="grow border-t-3 border-gray-300" />
            <span className="px-4 text-5xl text-gray-800 font-bold">
              Popular Skills
            </span>
            <hr className="grow border-t-3 border-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 ">
            {data.map((skill) => (
              <SkillCard key={skill.skillId} skill={skill} />
            ))}
          </div>
        </main>
        <div className="mt-20 max-w-[1080px] mx-auto">
          <TopRatedProviders />
          <WhyChooseUs />
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default Home;
