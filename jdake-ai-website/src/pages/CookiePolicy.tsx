import type React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-jdake-dark-blue to-black min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="bg-jdake-dark-blue/50 rounded-xl p-8 shadow-lg border border-jdake-blue/20">
          <h1 className="text-3xl font-bold text-white mb-6">Cookie Policy</h1>

          <div className="prose prose-invert text-gray-300 max-w-none">
            <p>Last updated: April 15, 2025</p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your
              web browser and allows the Site or a third-party to recognize you and make your next visit easier and the Site more
              useful to you. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer
              or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">2. How We Use Cookies</h2>
            <p>
              When you use and access the Site, we may place a number of cookie files in your web browser. We use cookies for the
              following purposes:
            </p>

            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                <strong>Essential cookies:</strong> These are cookies that are required for the operation of our website. They include,
                for example, cookies that enable you to log into secure areas of our website or make use of e-billing services.
              </li>
              <li>
                <strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see
                how visitors move around our website when they are using it. This helps us to improve the way our website works, for
                example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li>
                <strong>Functionality cookies:</strong> These are used to recognize you when you return to our website. This enables us
                to personalize our content for you and remember your preferences.
              </li>
              <li>
                <strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the
                links you have followed. We will use this information to make our website and the advertising displayed on it more
                relevant to your interests.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">3. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Site,
              deliver advertisements on and through the Site, and so on. The third-party cookies may include:
            </p>

            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>Google Analytics cookies</li>
              <li>Social media cookies (like Facebook, Twitter, LinkedIn)</li>
              <li>Advertising cookies</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">4. What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages
              of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to
              use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">5. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page
              and updating the "Last updated" date at the top of this Cookie Policy.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
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

export default CookiePolicy;
