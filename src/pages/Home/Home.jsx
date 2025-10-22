import React from 'react';
import { useLoaderData } from 'react-router';
import SkillCard from '../../components/SkillCard/SkillCard';

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className="bg-slate-200 py-15">
      <div className="my-container ">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          {data.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;