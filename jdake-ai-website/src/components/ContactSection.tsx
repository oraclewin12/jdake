import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-jdake-dark-blue to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-jdake-blue">Contact</span> Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about how JDake Intelligence AI models can create value for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-jdake-dark-blue bg-opacity-60 p-8 rounded-xl border border-jdake-blue/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-jdake-blue bg-opacity-20 p-3 rounded-lg mt-1">
                  <FaEnvelope className="text-jdake-blue" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-jdake-light-blue">company@jdake.me</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-jdake-blue bg-opacity-20 p-3 rounded-lg mt-1">
                  <FaPhoneAlt className="text-jdake-blue" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">+1 817-637-5771</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-jdake-blue bg-opacity-20 p-3 rounded-lg mt-1">
                  <FaMapMarkerAlt className="text-jdake-blue" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-gray-300">8529 Kirby St, Manassas, VA 20110</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-white mb-4">Our Service Hours</h4>
              <p className="text-gray-300 mb-2">Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Weekends: Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {formSubmitted ? (
              <div className="bg-jdake-dark-blue bg-opacity-60 p-8 rounded-xl border border-jdake-blue/20 shadow-lg text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-jdake-blue/20 mb-6">
                  <FaPaperPlane className="text-jdake-blue text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for your inquiry. Our team will contact you soon!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-jdake-blue text-white px-6 py-3 rounded-md hover:bg-jdake-light-blue transition-colors"
                >
                  Send New Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-jdake-dark-blue bg-opacity-60 p-8 rounded-xl border border-jdake-blue/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/30 border border-jdake-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-jdake-blue/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/30 border border-jdake-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-jdake-blue/50"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleInputChange}
                      className="w-full bg-black/30 border border-jdake-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-jdake-blue/50"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-black/30 border border-jdake-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-jdake-blue/50"
                      placeholder="Please enter what you'd like to know..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-jdake-blue hover:bg-jdake-light-blue text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
