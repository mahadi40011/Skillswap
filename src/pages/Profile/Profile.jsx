import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner />;

  const { photoURL, displayName, email } = user;

  return (
    <div className="bg-slate-200 min-h-[85vh] flex justify-center items-start">
      <div className="flex flex-col md:flex-row text-center md:text-start justify-center items-center gap-6 md:gap-10 p-8 w-fit mt-5 md:mt-10  ">
        <img
          src={photoURL}
          alt="User Avatar"
          className="w-40 h-40 mx-auto rounded-3xl border-3 border-sky-900 shadow-sm"
        />
        <div >
          <div className="space-y-2 mb-6">
            <p className="md:text-3xl text-2xl">
              <span className="font-semibold">Name:</span> {displayName}
            </p>
            <p className="md:text-xl text-lg">
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>

          <button
            // onClick={handleUpdateProfile}
            className="btn text-lg custom-gradient py-2 px-6 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
