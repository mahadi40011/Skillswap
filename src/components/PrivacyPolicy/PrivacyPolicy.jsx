import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>

      <p className="mb-4 text-gray-700">
        At <span className="font-semibold text-sky-600">SkillSwap</span>, your
        privacy is important to us. This Privacy Policy explains how we collect,
        use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        1. Information We Collect
      </h2>
      <p className="mb-4 text-gray-700">
        We may collect personal information like your name, email address, and
        skill preferences when you sign up or interact with our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-gray-700">
        Your information is used to improve our service, personalize your
        experience, communicate updates, and facilitate skill exchanges.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Data Security</h2>
      <p className="mb-4 text-gray-700">
        We implement reasonable security measures to protect your data from
        unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        4. Third-Party Services
      </h2>
      <p className="mb-4 text-gray-700">
        We may use third-party services for analytics, email, or hosting. These
        providers follow their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Changes to This Policy
      </h2>
      <p className="mb-4 text-gray-700">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with the updated date.
      </p>

      <p className="text-gray-600 mt-6 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-sky-600 font-semibold">SkillSwap</span>. All
        rights reserved.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
