import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRegComments, FaSearch, FaChartBar, FaRegFileAlt, FaUserTie, FaRobot } from 'react-icons/fa';

interface UseCaseProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const UseCase = ({ id, icon: Icon, title, description, index }: UseCaseProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-8 mb-16`}
      id={id}
    >
      <div className="w-full md:w-1/2">
        <div className="p-6 bg-gradient-to-br from-jdake-dark-blue to-jdake-blue/10 rounded-xl border border-jdake-blue/20 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-jdake-blue bg-opacity-20 rounded-full">
              <Icon className="text-jdake-blue text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-jdake-blue/20 to-transparent rounded-full blur-xl" />
          <div className="relative z-10 h-64 w-64 flex items-center justify-center rounded-full bg-jdake-dark-blue border border-jdake-blue/30">
            <Icon className="text-jdake-blue text-6xl" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const useCases = [
    {
      id: "use-case-chatbot",
      icon: FaRegComments,
      title: "Intelligent Customer Service & Chatbots",
      description: "Build intelligent customer service systems based on JDake's NLP technology that understand complex questions and provide accurate answers, enhancing customer experience while reducing labor costs."
    },
    {
      id: "use-case-search",
      icon: FaSearch,
      title: "Smart Search & Information Extraction",
      description: "Optimize enterprise knowledge base search, accurately understand user intent, and quickly extract key information from massive unstructured data."
    },
    {
      id: "use-case-analytics",
      icon: FaChartBar,
      title: "Sentiment Analysis & Public Opinion Monitoring",
      description: "Real-time analysis of sentiment trends in social media, comments, and feedback, providing data support for brand reputation management and marketing strategies."
    },
    {
      id: "use-case-documents",
      icon: FaRegFileAlt,
      title: "Intelligent Document Processing",
      description: "Automatic document classification, key information extraction, content summarization—greatly improving document processing efficiency and enabling intelligent document management without human intervention."
    },
    {
      id: "use-case-assistant",
      icon: FaUserTie,
      title: "Intelligent Assistant",
      description: "AI assistants designed for professionals across industries, helping to handle daily work, provide decision-making advice, and improve work efficiency."
    },
    {
      id: "use-case-automation",
      icon: FaRobot,
      title: "Process Automation",
      description: "Automate workflow processes by understanding unstructured text, reducing human error, and accelerating business processes."
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-black to-jdake-dark-blue">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-jdake-blue">Industry</span> Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            JDake Intelligence's AI technology has been successfully implemented across multiple industries, creating value for various businesses.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-20">
          {useCases.map((useCase, index) => (
            <UseCase
              key={useCase.id}
              id={useCase.id}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
