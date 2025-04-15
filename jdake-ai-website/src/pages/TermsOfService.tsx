import type React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-jdake-dark-blue to-black min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-jdake-dark-blue/50 rounded-xl p-8 shadow-lg border border-jdake-blue/20">
          <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>

          <div className="prose prose-invert text-gray-300 max-w-none">
            <p>Last updated: April 15, 2025</p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and JDake Intelligence ("we," "us," or "our"),
              concerning your access to and use of our website as well as any other media form, media channel, mobile website, or
              mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by
              accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service.
            </p>
            <p className="mt-2">
              If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must
              discontinue use immediately.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software,
              website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks,
              service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected
              by copyright and trademark laws and various other intellectual property rights.
            </p>
            <p className="mt-2">
              The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly
              provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated,
              republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or
              otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">3. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
              <li>You are not under the age of 13</li>
              <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise</li>
              <li>You will not use the Site for any illegal or unauthorized purpose</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available.
              The Site may not be used in connection with any commercial endeavors except those that are specifically
              endorsed or approved by us.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct,
              indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue,
              loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility
              of such damages.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> company@jdake.me<br />
              <strong>Address:</strong> 8529 Kirby St, Manassas, VA 20110<br />
              <strong>Phone:</strong> +1 817-637-5771
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
