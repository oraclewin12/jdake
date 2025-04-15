import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaGlobe, FaRocket, FaCog, FaShieldAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay
}: {
  icon: React.ComponentType<{ className?: string }>,
  title: string,
  description: string,
  delay: number
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay }}
      className="bg-gradient-to-br from-jdake-dark-blue to-jdake-blue/10 rounded-xl p-6 border border-jdake-blue/20 shadow-lg hover:shadow-jdake-blue/10 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-jdake-blue bg-opacity-20 p-3 rounded-lg">
          <Icon className="text-jdake-blue text-2xl" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      id: "feature-semantic",
      icon: FaBrain,
      title: "Advanced Semantic Understanding",
      description: "Deep understanding of text meaning, context awareness, achieving human-level language comprehension",
    },
    {
      id: "feature-performance",
      icon: FaChartLine,
      title: "High Performance",
      description: "Ultra-low latency, high concurrency support, 10x faster than traditional NLP solutions",
    },
    {
      id: "feature-multilingual",
      icon: FaGlobe,
      title: "Multilingual Support",
      description: "Support for 100+ languages, professionally optimized for all language processing",
    },
    {
      id: "feature-integration",
      icon: FaRocket,
      title: "Easy Integration",
      description: "Simple API interface, multi-platform SDKs, rapid deployment to your systems",
    },
    {
      id: "feature-customization",
      icon: FaCog,
      title: "Customization Capabilities",
      description: "Customized models tailored to your business scenarios, improving domain-specific accuracy",
    },
    {
      id: "feature-security",
      icon: FaShieldAlt,
      title: "Data Security",
      description: "Private deployment options, military-grade data encryption, ensuring information security",
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-jdake-dark-blue to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-jdake-blue">Powerful Features</span> to Enhance Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            JDake Intelligence's natural language processing technology brings new possibilities to your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + features.findIndex(f => f.id === feature.id) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
