import Aos from "aos";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const UpdateProfileForm = ({ setUpdateProfile }) => {
  const { user, setUser, updateUserProfile } = useContext(AuthContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const existingPhotoUrl = user.photoURL;

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    if (!displayName && !photoURL)
      return toast.error("Please Provide something");
    if (displayName.length <= 3 || !/^[A-Z]/.test(displayName))
      return toast.error(
        "Please Provide Valid Name. First letter is uppercase"
      );

    const updatedPhotoUrl =
      photoURL.trim() !== "" ? photoURL : existingPhotoUrl;

    updateUserProfile(displayName, updatedPhotoUrl)
      .then(() => {
        setUser(() => ({
          ...user,
          displayName,
          photoURL: updatedPhotoUrl,
        }));
        e.target.reset();
        setUpdateProfile(false);
        toast.success("Profile Update Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
          Update Your Profile
        </h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full mb-4 border rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-sky-900"
        />

        <label className="block mb-2 font-medium">PhotoURL</label>
        <input
          type="text"
          name="photo"
          placeholder="PhotoURL"
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

export default UpdateProfileForm;
