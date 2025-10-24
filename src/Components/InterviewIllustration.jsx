import React from 'react';
import { motion } from 'framer-motion';

const typingDotVariants = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: [0.3, 1, 0.3],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 1.2,
      ease: 'easeInOut',
    },
  },
};

const InterviewIllustration = () => {
  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="bg-gray-100 rounded-3xl shadow-lg w-full h-64 sm:h-72 overflow-hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <div className="bg-white rounded-t-3xl h-40 sm:h-48 p-4 sm:p-6 flex flex-col justify-between border border-gray-300">
          <div className="flex space-x-2 mb-3 sm:mb-4">
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-300 rounded-full"></span>
            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"></span>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 relative text-sm sm:text-base">
            <motion.div
              className="self-start bg-purple-200 text-purple-900 px-3 py-2 rounded-lg max-w-xs sm:max-w-sm shadow-md relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hi! Ready for your mock interview?
              <div className="flex space-x-1 absolute bottom-1 right-3">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 bg-purple-600 rounded-full"
                    variants={typingDotVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="self-end bg-gray-200 text-gray-800 px-3 py-2 rounded-lg max-w-xs sm:max-w-sm shadow-sm"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Yes! Let's get started.
            </motion.div>

            <motion.div
              className="self-start bg-purple-200 text-purple-900 px-3 py-2 rounded-lg max-w-xs sm:max-w-sm shadow-md flex items-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              Great! First question coming up
              <span className="ml-1 w-1.5 h-6 bg-purple-600 animate-blink"></span>
            </motion.div>
          </div>
        </div>

        <div className="bg-gray-200 rounded-b-3xl h-20 sm:h-24 flex items-center justify-center space-x-1 sm:space-x-3 px-2 sm:px-6 border-t border-gray-300">
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-gray-300 rounded w-4 h-4 sm:w-6 sm:h-5 cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: '#7366ff' }}
              transition={{ type: 'spring', stiffness: 250 }}
            />
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
          border-radius: 1px;
        }
      `}</style>
    </motion.div>
  );
};

export default InterviewIllustration;
