import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import EnrolForm from "../../components/EnrolForm/EnrolForm";

const SkillDetails = () => {
  const [formShow, setFormShow]= useState(false)
  const data = useLoaderData();
  const { id } = useParams();

   useEffect(()=>{
      window.scrollTo(0,0)
    },[])

  const skill = data.find((s) => s.skillId == id);
  
  const {
    category,
    image,
    description,
    slotsAvailable,
    rating,
    price,
    providerEmail,
    providerName,
    skillName,
  } = skill;

  return (
    <div className="bg-slate-200 min-h-screen py-5 md:py-15">
      <title>SkillSwap - SkillDetails</title>
      <div className="max-w-3xl mx-auto p-6  bg-slate-100 shadow-lg rounded-lg">
        <div className="mb-4">
          <img
            src={image}
            alt={skillName}
            className="w-full h-64  rounded-lg"
          />
        </div>
        <h2 className=" text-2xl md:text-3xl font-bold mb-2">{skillName}</h2>

        <div className="flex justify-between my-3">
          <p className="md:text-xl text-lg font-bold">Price: ${price}</p>
          <p className="text-yellow-500 md:text-xl text-lg font-semibold">Rating: {rating} ★</p>
        </div>

        <p className="text-gray-600 md:text-lg font-medium mb-1">Provider: {providerName}</p>
        <p className="text-gray-600 md:text-lg font-medium mb-1">contact: {providerEmail}</p>
        <p className="text-gray-600 md:text-lg font-medium mb-1">Category: {category}</p>
        <p className="text-gray-600 md:text-lg font-medium mb-4">Slots Available: {slotsAvailable}</p>
        <p className="text-gray-600 md:text-lg font-medium">{description}</p>

        {formShow ? (
          <section className="form">
            <EnrolForm />
          </section>
        ) : (
          <button
            onClick={() => setFormShow(true)}
            className=" btn px-4 py-2 mt-6 custom-gradient rounded-md"
          >
            Enroll Now
          </button>
        )}
      </div>
    </div>
  );
};

export default SkillDetails;
