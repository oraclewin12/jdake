import type React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-jdake-dark-blue to-black min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-jdake-dark-blue/50 rounded-xl p-8 shadow-lg border border-jdake-blue/20">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

          <div className="prose prose-invert text-gray-300 max-w-none">
            <p>Last updated: April 15, 2025</p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">1. Introduction</h2>
            <p>
              JDake Intelligence ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">2. Information We Collect</h2>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">Personal Data</h3>
            <p>We may collect personal identification information, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Job title</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-4 mb-2">Usage Data</h3>
            <p>
              We may also collect information on how the website is accessed and used. This usage data may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about our products and services</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">4. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
