import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStats = [
    {
      id: "tech-speed",
      label: "Processing Speed",
      value: "10x",
      description: "10x faster than traditional NLP solutions",
    },
    {
      id: "tech-accuracy",
      label: "Accuracy",
      value: "98%",
      description: "Industry-leading text understanding accuracy",
    },
    {
      id: "tech-languages",
      label: "Languages Supported",
      value: "100+",
      description: "Global multilingual support capability",
    },
    {
      id: "tech-concurrency",
      label: "Concurrent Processing",
      value: "10k+",
      description: "Can process thousands of requests per second",
    },
  ];

  return (
    <section
      id="tech"
      className="py-24 bg-jdake-dark-blue relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000000_1px,transparent_1px),linear-gradient(to_bottom,#00000000_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-jdake-blue">Technology</span> Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            JDake Intelligence's AI models are at the forefront of the industry in terms of performance and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {techStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-br from-jdake-dark-blue to-jdake-blue/10 p-6 rounded-xl border border-jdake-blue/30 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-jdake-blue mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Advanced Model Architecture</h3>
            <p className="text-gray-300">
              JDake Intelligence
              uses a multi-layer Transformer architecture, combined with proprietary optimization algorithms, achieving a balance between semantic understanding accuracy and computational efficiency.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-jdake-blue" />
                <span className="text-gray-300">
                  Billions of parameters, trained on massive multilingual data
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-jdake-blue" />
                <span className="text-gray-300">
                  Proprietary knowledge graph enhancement technology, improving understanding capabilities in complex scenarios
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-jdake-blue" />
                <span className="text-gray-300">
                  Quantization optimization and model pruning technologies for lightweight deployment
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-xl overflow-hidden border border-jdake-blue/30 shadow-xl shadow-jdake-blue/5"
          >
            <div className="bg-black/80 p-4 border-b border-jdake-blue/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="bg-black/50 p-6 font-mono text-sm">
              <div className="text-jdake-blue">
                {"/* JDake NLP API Example */"}
              </div>
              <div className="text-green-400 mt-4">
                const <span className="text-purple-400">response</span> = await
                jdake.nlp.analyze({"{"}
              </div>
              <div className="text-white ml-4">
                text:{" "}
                <span className="text-yellow-300">
                  "Analyze the sentiment and key information in this text"
                </span>
                ,
              </div>
              <div className="text-white ml-4">options: {"{"}</div>
              <div className="text-white ml-8">
                extractEntities: <span className="text-orange-400">true</span>,
              </div>
              <div className="text-white ml-8">
                sentiment: <span className="text-orange-400">true</span>,
              </div>
              <div className="text-white ml-8">
                language: <span className="text-yellow-300">"auto"</span>
              </div>
              <div className="text-white ml-4">{"}"}</div>
              <div className="text-green-400">{"})"}</div>
              <div className="text-jdake-light-blue mt-4">
                {"/* Millisecond-level response, precise results */"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
