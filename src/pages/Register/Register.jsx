import React, { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  //email validation
  const handleEmailFieldOnBlur = (e) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (e.target.value === "") return setEmailError("");
    if (!emailValidation.test(email)) {
      setEmailError("Email invalid");
      return;
    } else return setEmailError("");
  };

  // Password validation
  const handlePasswordValidation = (e) => {
    setPassword(e.target.value);
    const passwordValidation =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (e.target.value === "") return setPasswordError("");
    if (!passwordValidation.test(password)) {
      setPasswordError(
        "Must include an Uppercase, a Lowercase, a Number, a special character and password at least 6 characters or long"
      );
      return;
    } else return setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="block text-sm font-medium text-gray-600 mt-5 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          {/* Photo URL */}
          <label className="block text-sm font-medium text-gray-600 mt-5 mb-1">
            Photo URL
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />

          {/* Email */}
          <label className="block text-sm font-medium text-gray-600 mt-5 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailFieldOnBlur}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
          />
          <span className="text-red-500">{emailError}</span>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mt-5 mb-1">
              Password
            </label>
            <input
              name="password"
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              onChange={handlePasswordValidation}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-900"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <MdRemoveRedEye />}
            </span>
            <span className="text-red-500">{passwordError}</span>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-7 rounded-lg custom-gradient font-medium "
          >
            Sign Up
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6 text-md">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-sky-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
