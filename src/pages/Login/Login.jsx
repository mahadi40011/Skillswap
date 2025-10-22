import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailFieldOnBlur = () => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(email)) {
      setEmailError("Email invalid");
      return;
    } else return setEmailError("");
  };

  const handlePasswordValidation = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") return setPasswordError("");
    const passwordValidation =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordValidation.test(password)) {
      setPasswordError(
        "Must include an Uppercase, a Lowercase, a Number, a special character and password at least 6 characters or long"
      );
      return;
    } else return setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Please Login
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          {/* google Login Buttons */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition">
            <FcGoogle className="text-xl" /> <span>Google</span>
          </button>
          {/* facebook Login Buttons */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition text-blue-600">
            <FaFacebook className="text-xl" /> <span>Facebook</span>
          </button>
          {/* github Login Buttons */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition text-gray-800">
            <FaGithub className="text-xl" /> <span>GitHub</span>
          </button>
        </div>

        <div className="text-center text-gray-500 text-md mb-4">
          — or login with email —
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={email}
            onBlur={handleEmailFieldOnBlur}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
          <span className="text-red-500">{emailError}</span>

          {/* Password */}
          <label className="block text-sm font-medium text-gray-600 mt-5 mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordValidation}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
          <span className="text-red-500">{passwordError}</span>

          {/* Forgot Password */}
          <div className="flex items-center justify-between text-sm mt-2 mb-5 text-gray-600">
            <a href="#" className="text-sky-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg custom-gradient font-medium transition"
          >
            Log In
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6 text-md">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-sky-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
