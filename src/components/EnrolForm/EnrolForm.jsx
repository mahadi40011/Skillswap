import Aos from "aos";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const EnrolForm = () => {
 useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    toast.success("Session Selected");
  }
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      className="flex justify-center mt-8"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-2xl w-80"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Book a Session
        </h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full mb-4 border rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-sky-900"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full mb-4 border rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-sky-900"
        />

        <button
          type="submit"
          className="w-full custom-gradient font-semibold py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnrolForm;
