import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img
              src="/images/jdake-logo.png"
              alt="JDake Intelligence"
              className="h-10"
            />
            <p className="text-gray-400 mt-4">
              JDake Intelligence is committed to providing leading natural language processing solutions to help businesses with digital transformation
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="/solutions/chatbot" className="text-gray-400 hover:text-jdake-blue transition-colors">Intelligent Customer Service</a></li>
              <li><a href="/solutions/sentiment" className="text-gray-400 hover:text-jdake-blue transition-colors">Sentiment Analysis</a></li>
              <li><a href="/solutions/classification" className="text-gray-400 hover:text-jdake-blue transition-colors">Text Classification</a></li>
              <li><a href="/solutions/knowledge-graph" className="text-gray-400 hover:text-jdake-blue transition-colors">Knowledge Graph</a></li>
              <li><a href="/solutions/search" className="text-gray-400 hover:text-jdake-blue transition-colors">Intelligent Search</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-jdake-blue transition-colors">About Us</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-jdake-blue transition-colors">Team</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-jdake-blue transition-colors">Careers</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-jdake-blue transition-colors">News</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-jdake-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-jdake-dark-blue my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} JDake Intelligence. All rights reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-jdake-blue text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-jdake-blue text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-500 hover:text-jdake-blue text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
