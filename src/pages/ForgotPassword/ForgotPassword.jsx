import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { passwordReset, loginEmail } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    passwordReset(email)
      .then(() => {
        toast.success("Please check your Gmail");
        setTimeout(() => {
          e.target.reset();
          window.open("https://mail.google.com/mail/u/0/#inbox");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <title>SkillSwap - ForgotPassword</title>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="sm:text-3xl text-2xl font-bold text-center text-slate-800 mb-8">
          Forgot Password?
        </h2>

        <form onSubmit={handleForgotPassword}>
          <label className="block text-sm font-medium text-gray-600 mt-5 mb-1">
            Email
          </label>
          <input
            defaultValue={loginEmail}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          <button
            type="submit"
            className="w-full py-2 mt-7 rounded-lg custom-gradient font-medium "
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
