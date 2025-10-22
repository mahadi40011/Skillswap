import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="custom-gradient pt-10 pb-5">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-sky-400 mb-3">
            Contact Us
          </h3>
          <p>Email: mahadi40011@gmail.com</p>
          <p>Phone: +8801300701950</p>
          <p>Address: Sylhet, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-sky-400 mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-sky-400 mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-sky-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-sky-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-sky-400">SkillSwap</span>. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
