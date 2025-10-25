import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";

const Profile = () => {
  const [formShow, setFormShow] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);

  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <LoadingSpinner />;

  const { photoURL, displayName, email } = user;

  const handleClicked = () => {
    setFormShow(true);
    setUpdateProfile(true);
  };

  return (
    <div className="bg-slate-200 min-h-[85vh] flex flex-col justify-start items-center">
      <title>SkillSwap - Profile</title>
      <div className={` ${updateProfile && "hidden"}`}>
        <div className="flex flex-col md:flex-row text-center md:text-start justify-center items-center gap-6 md:gap-10 p-8 w-fit mt-5 md:mt-10  ">
          <img
            src={photoURL}
            alt="User Avatar"
            className="w-40 h-40 mx-auto rounded-3xl border-3 border-sky-900 shadow-sm"
          />
          <div>
            <div className="space-y-2 mb-6">
              <p className="md:text-3xl text-2xl">
                <span className="font-semibold">Name:</span> {displayName}
              </p>
              <p className="md:text-xl text-lg">
                <span className="font-semibold">Email:</span> {email}
              </p>

              <button
                onClick={handleClicked}
                className=" btn px-4 py-2 mt-6 custom-gradient rounded-md"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={` ${updateProfile || "hidden"}`}>
        {formShow && (
          <section className="form">
            <UpdateProfileForm setUpdateProfile={setUpdateProfile} />
          </section>
        )}
      </div>
    </div>
  );
};

export default Profile;
