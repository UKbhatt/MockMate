import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaDownload, FaSearch, FaTimes,FaFilter,FaChevronDown } from 'react-icons/fa';

const studyMaterials = [
  {
    title: 'HR Interview Questions',
    category: 'HR',
    description: 'Top HR questions with best-fit answers.',
    fileUrl: '/pdfs/hr.pdf',
  },
  {
    title: 'Behavioral STAR Guide',
    category: 'Behavioral',
    description: 'Use STAR method for strong behavioral responses.',
    fileUrl: '/pdfs/behavioral.pdf',
  },
  {
    title: 'HTML, CSS & JS Guide',
    category: 'Frontend',
    description: 'Frontend basics to advanced React.',
    fileUrl: '/pdfs/frontend.pdf',
  },
  {
    title: 'Node.js + Express Prep',
    category: 'Backend',
    description: 'Backend interview questions with explanations.',
    fileUrl: '/pdfs/backend.pdf',
  },
  {
    title: 'System Design Basics',
    category: 'System Design',
    description: 'Learn architecture design for interviews.',
    fileUrl: '/pdfs/system-design.pdf',
  },
  {
    title: 'DSA Cheat Sheet',
    category: 'DSA',
    description: 'Sorting, searching, recursion, trees and graphs.',
    fileUrl: '/pdfs/dsa.pdf',
  },
  {
    title: 'AWS + Azure Overview',
    category: 'Cloud',
    description: 'Get started with Cloud Computing fundamentals.',
    fileUrl: '/pdfs/cloud.pdf',
  },
  {
    title: 'Cybersecurity Basics',
    category: 'Cybersecurity',
    description: 'Authentication, encryption, firewalls.',
    fileUrl: '/pdfs/cybersecurity.pdf',
  },
  {
    title: 'AI/ML for Interviews',
    category: 'AI/ML',
    description: 'ML concepts and common ML questions.',
    fileUrl: '/pdfs/ai-ml.pdf',
  },
  {
    title: 'Intro to Data Science',
    category: 'Data Science',
    description: 'Data cleaning, modeling and analysis tips.',
    fileUrl: '/pdfs/data-science.pdf',
  },
  {
    title: 'Blockchain Explained',
    category: 'Blockchain',
    description: 'Blocks, hashing, consensus algorithms.',
    fileUrl: '/pdfs/blockchain.pdf',
  },
  {
    title: 'Web3 Developer Kit',
    category: 'Web3',
    description: 'Solidity, smart contracts, dApps.',
    fileUrl: '/pdfs/web3.pdf',
  },
  {
    title: 'React Native Basics',
    category: 'Mobile Development',
    description: 'Cross-platform mobile app questions.',
    fileUrl: '/pdfs/mobile.pdf',
  },
  {
    title: 'Database Essentials',
    category: 'Database',
    description: 'SQL, NoSQL, indexing and transactions.',
    fileUrl: '/pdfs/database.pdf',
  },
  {
    title: 'OS Interview Questions',
    category: 'Operating Systems',
    description: 'Memory mgmt, scheduling, processes.',
    fileUrl: '/pdfs/os.pdf',
  },
  {
    title: 'Networking Interview',
    category: 'Networking',
    description: 'OSI model, TCP/IP, DNS, HTTP.',
    fileUrl: '/pdfs/networking.pdf',
  },
  {
    title: 'OOPs Concepts Guide',
    category: 'OOPs',
    description: 'Encapsulation, Inheritance, Polymorphism.',
    fileUrl: '/pdfs/oops.pdf',
  },
  {
    title: 'JavaScript Deep Dive',
    category: 'JavaScript',
    description: 'Closures, hoisting, async/await.',
    fileUrl: '/pdfs/javascript.pdf',
  },
  {
    title: 'Python for Interviews',
    category: 'Python',
    description: 'Common Python code snippets.',
    fileUrl: '/pdfs/python.pdf',
  },
  {
    title: 'Java Core Concepts',
    category: 'Java',
    description: 'OOPs, exception handling, collections.',
    fileUrl: '/pdfs/java.pdf',
  },
  {
    title: 'C++ Interview Prep',
    category: 'C++',
    description: 'Pointers, STL, memory management.',
    fileUrl: '/pdfs/cpp.pdf',
  },
  {
    title: 'React Interview Guide',
    category: 'React',
    description: 'Hooks, state mgmt, lifecycle methods.',
    fileUrl: '/pdfs/react.pdf',
  },
  {
    title: 'Express.js Q&A',
    category: 'Express',
    description: 'Middleware, routing, error handling.',
    fileUrl: '/pdfs/express.pdf',
  },
  {
    title: 'MongoDB Interview Sheet',
    category: 'MongoDB',
    description: 'CRUD, schema design, aggregation.',
    fileUrl: '/pdfs/mongodb.pdf',
  },
  {
    title: 'SQL Query Practice',
    category: 'SQL',
    description: 'Joins, subqueries, optimization.',
    fileUrl: '/pdfs/sql.pdf',
  },
  {
    title: 'REST API Guide',
    category: 'API Integration',
    description: 'REST, JSON, API tools and best practices.',
    fileUrl: '/pdfs/api.pdf',
  },
  {
    title: 'Git + GitHub Basics',
    category: 'Git/GitHub',
    description: 'Branching, pull requests, merge conflicts.',
    fileUrl: '/pdfs/git.pdf',
  },
  {
    title: 'Agile & Scrum Basics',
    category: 'Agile/Scrum',
    description: 'User stories, sprint planning, velocity.',
    fileUrl: '/pdfs/agile.pdf',
  },
];


const categories = [
  'HR', 'Behavioral', 'Frontend', 'Backend', 'System Design', 'DSA', 'DevOps',
  'Cloud', 'Cybersecurity', 'AI/ML', 'Data Science', 'Blockchain', 'Web3',
  'Mobile Development', 'Database', 'Operating Systems', 'Networking',
  'OOPs', 'JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'Express',
  'MongoDB', 'SQL', 'API Integration', 'Git/GitHub', 'Agile/Scrum'
];


const StudyMaterialDownload = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);


  const handleCategoryFilter = (cat) => {
    if (selectedCategory === cat) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(cat);
      setSearchTerm('');
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  const filteredMaterials = studyMaterials.filter((mat) => {
    const matchesSearch = `${mat.title} ${mat.category}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? mat.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
  <motion.div
    className="max-w-6xl mx-auto px-6 py-6"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold text-blue-600 text-center mb-10 flex justify-center items-center gap-2">
      <FaBookOpen /> Download Study Materials
    </h2>

    {/* Toggle Filters Button (only on small screens) */}
    <div className="md:hidden mb-6 flex justify-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
            >
              <FaFilter />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
              <FaChevronDown
                className={`transform transition-transform ${
                  showFilters ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>

    {/* Filters + Search: show always on md+, toggle on sm */}
    <div className={`md:block ${showFilters ? 'block' : 'hidden'}`}>
      {/* Category Filters */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full border transition font-semibold ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
            }`}
          >
            {cat}
          </button>
        ))}
        {(searchTerm || selectedCategory) && (
          <button
            onClick={clearFilters}
            className="ml-4 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-100 flex items-center gap-1 font-semibold"
          >
            <FaTimes /> Clear Filters
          </button>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-10 flex justify-center">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by title or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaSearch className="absolute top-4 left-4 text-gray-400" />
        </div>
      </div>
    </div>

    {/* Material Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {filteredMaterials.length > 0 ? (
        filteredMaterials.map((material, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl p-6 shadow-lg border cursor-pointer hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{material.title}</h3>
            <p className="text-blue-600 text-center font-medium">{material.category}</p>
            <p className="text-gray-600 mt-3 text-center text-sm">{material.description}</p>

            <a
              href={material.fileUrl}
              download
              className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              <FaDownload className="inline mr-2" />
              Download PDF
            </a>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-600 col-span-full">
          No materials found for "{searchTerm || selectedCategory}"
        </p>
      )}
    </div>
  </motion.div>
);

};

export default StudyMaterialDownload;
