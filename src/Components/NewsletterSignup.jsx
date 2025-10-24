import React from "react";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  return (
    <section className=" py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Stay Ahead with Interview Insights
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Subscribe to our newsletter and get latest AI tools, career tips, and updates delivered to your inbox.
        </motion.p>

        <motion.form
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7366ff] transition"
          />
          <button
            type="submit"
            className="bg-[#7366ff] hover:bg-[#5e54d9] text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
