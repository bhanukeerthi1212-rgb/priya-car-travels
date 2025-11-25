
import { motion } from "framer-motion";
import { FaRoute, FaStar, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800">
      
      {/* MAIN CARD */}
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl p-10 md:p-14 mt-4 mb-10 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        
        {/* HEADING */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 text-center tracking-wide drop-shadow-sm">
          About Priya Travels
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg leading-relaxed mb-6 text-gray-700 text-justify">
          <strong>Priya Travels</strong> is one of India’s most trusted travel service providers,
          delivering comfort, convenience, and reliability across every journey.
          With a diverse fleet of vehicles, we ensure that our customers experience
          stress-free and safe travel anywhere, anytime.
        </p>

        {/* HIGHLIGHTS SECTION */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          
          {/* Card 1 */}
          <motion.div 
            className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.04 }}
          >
            <FaRoute size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
            <p className="text-sm text-gray-600">
              To offer seamless and memorable travel experiences with comfort and affordability.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.04 }}
          >
            <FaHandshake size={40} className="mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Promise</h3>
            <p className="text-sm text-gray-600">
              We promise safe journeys, quality vehicles, and top-tier customer satisfaction.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-white shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.04 }}
          >
            <FaStar size={40} className="mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
            <p className="text-sm text-gray-600">
              To redefine Indian travel with innovation and customer-centric solutions.
            </p>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
};

export default About;
