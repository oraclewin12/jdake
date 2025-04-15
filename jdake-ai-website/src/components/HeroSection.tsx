import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 bg-jdake-dark-blue text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-jdake-blue">Natural Language Processing</span>
              <br />
              <span className="text-white">Faster, More Accurate, Better</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              JDake Intelligence
              provides leading AI natural language processing solutions to help businesses unlock the value of data
            </p>
            <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#features"
                className="bg-jdake-blue hover:bg-jdake-light-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300 text-center"
              >
                Features
              </a>
              <a
                href="#contact"
                className="border-2 border-jdake-blue text-jdake-blue hover:bg-jdake-blue hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-jdake-blue/30 to-transparent rounded-full blur-xl" />
              <img
                src="/images/jdake-logo.png"
                alt="JDake AI"
                className="relative z-10 max-w-full h-auto md:max-w-md"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-jdake-dark-blue to-jdake-blue/20 p-6 rounded-xl border border-jdake-blue/30">
            <h3 className="text-xl font-semibold text-jdake-blue mb-3">Faster</h3>
            <p className="text-gray-300">
              10x faster than traditional solutions, second-level responses, supports high concurrency
            </p>
          </div>
          <div className="bg-gradient-to-br from-jdake-dark-blue to-jdake-blue/20 p-6 rounded-xl border border-jdake-blue/30">
            <h3 className="text-xl font-semibold text-jdake-blue mb-3">More Accurate</h3>
            <p className="text-gray-300">
              Industry-leading accuracy, multi-language support, contextual understanding
            </p>
          </div>
          <div className="bg-gradient-to-br from-jdake-dark-blue to-jdake-blue/20 p-6 rounded-xl border border-jdake-blue/30">
            <h3 className="text-xl font-semibold text-jdake-blue mb-3">Better</h3>
            <p className="text-gray-300">Comprehensive solutions, easy integration, complete ecosystem</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
