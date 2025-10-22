import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Terms & Conditions
      </h1>

      <p className="mb-4 text-gray-700">
        Welcome to <span className="font-semibold text-sky-600">SkillSwap</span>
        . By using our platform, you agree to comply with and be bound by the
        following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4 text-gray-700">
        By accessing SkillSwap, you agree to these terms, our Privacy Policy,
        and any applicable laws and regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. User Conduct</h2>
      <p className="mb-4 text-gray-700">
        Users must provide accurate information, respect other members, and not
        engage in any illegal or harmful activities on the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. Account Responsibility
      </h2>
      <p className="mb-4 text-gray-700">
        You are responsible for maintaining the confidentiality of your account
        credentials and any activity under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        4. Intellectual Property
      </h2>
      <p className="mb-4 text-gray-700">
        All content, logos, and materials on SkillSwap are owned by the platform
        or its licensors. Unauthorized use is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Limitation of Liability
      </h2>
      <p className="mb-4 text-gray-700">
        SkillSwap is not responsible for any direct, indirect, or consequential
        damages arising from the use of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Changes to Terms</h2>
      <p className="mb-4 text-gray-700">
        We may update these terms periodically. Continued use of the platform
        after changes constitutes acceptance of the updated terms.
      </p>

      <p className="text-gray-600 mt-6 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-sky-600 font-semibold">SkillSwap</span>. All
        rights reserved.
      </p>
    </div>
  );
};

export default TermsConditions;
