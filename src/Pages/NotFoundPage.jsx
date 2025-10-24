import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeftCircle } from "react-icons/fi";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-6"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* SVG Illustration */}
        <div className="w-full">
          <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <circle cx="150" cy="100" r="80" fill="#EEF2FF" />
            <text
              x="150"
              y="110"
              textAnchor="middle"
              fontSize="64"
              fontWeight="bold"
              fill="#7366ff"
              fontFamily="sans-serif"
            >
              404
            </text>
            <text
              x="150"
              y="140"
              textAnchor="middle"
              fontSize="16"
              fill="#4F46E5"
              fontFamily="sans-serif"
            >
              Page Not Found
            </text>
          </svg>
        </div>

        {/* Text + Navigation */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-4">
            Oops! Page not found
          </h1>
          <p className="text-gray-600 text-base mb-6">
            The page you're looking for doesn't exist or was moved. Let's get you back on track.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-medium transition duration-300"
          >
            <FiArrowLeftCircle className="text-xl" />
            Go to Dashboard
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
