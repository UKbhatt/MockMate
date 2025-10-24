
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUserTie,
  FaWhatsapp,
  FaSearch,
  FaTimes,
  FaFilter,
  FaChevronDown,
} from 'react-icons/fa';

const experts = [
  {
    name: 'Rohan Mehta',
    role: 'React Developer',
    bio: '3+ years experience in frontend interviews & MERN stack mentoring.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    whatsapp: '8369660858',
    message: 'Hi Rohan, I would like to book a mock interview session with you.',
  },
  {
    name: 'Sneha Sharma',
    role: 'DSA Coach',
    bio: 'Ex-FAANG engineer specializing in Data Structures & Algorithms.',
    avatar: 'https://i.pravatar.cc/150?img=47',
    whatsapp: '919999999999',
    message: 'Hi Sneha, I want to practice DSA mock interviews with you.',
  },
  {
    name: 'Aditya Desai',
    role: 'System Design Mentor',
    bio: 'System design expert helping students crack senior roles.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    whatsapp: '8169908399',
    message: 'Hi Aditya, I want to book a system design mock interview.',
  },
  {
    name: 'Priya Verma',
    role: 'Fullstack Developer',
    bio: 'Helps freshers prepare for fullstack technical rounds.',
    avatar: 'https://i.pravatar.cc/150?img=33',
    whatsapp: '916666666666',
    message: 'Hi Priya, I’d like to prepare for fullstack interviews with you.',
  },
  {
    name: 'Ankit Singh',
    role: 'Backend Developer',
    bio: '5+ years in Node.js and database design for scalable applications.',
    avatar: 'https://i.pravatar.cc/150?img=11',
    whatsapp: '919988877766',
    message: 'Hi Ankit, I am interested in booking a backend development session.',
  },
  {
    name: 'Neha Gupta',
    role: 'Frontend Developer',
    bio: 'Expert in React, Vue, and UI/UX design principles.',
    avatar: 'https://i.pravatar.cc/150?img=15',
    whatsapp: '919977665544',
    message: 'Hi Neha, I would like help with frontend interview preparation.',
  },
  {
    name: 'Vikram Patel',
    role: 'Cloud Engineer',
    bio: 'Specializes in AWS and GCP with 7 years of experience.',
    avatar: 'https://i.pravatar.cc/150?img=20',
    whatsapp: '919955443322',
    message: 'Hi Vikram, can we schedule a cloud architecture discussion?',
  },
  {
    name: 'Meera Joshi',
    role: 'Data Scientist',
    bio: 'Passionate about machine learning and data analysis.',
    avatar: 'https://i.pravatar.cc/150?img=25',
    whatsapp: '919944332211',
    message: 'Hi Meera, I want to learn about data science interviews.',
  },
  {
    name: 'Saurabh Kumar',
    role: 'DevOps Engineer',
    bio: 'Automates deployments and CI/CD pipelines efficiently.',
    avatar: 'https://i.pravatar.cc/150?img=30',
    whatsapp: '919933221100',
    message: 'Hi Saurabh, I am looking for DevOps interview guidance.',
  },
  {
    name: 'Divya Nair',
    role: 'Mobile App Developer',
    bio: 'Expert in React Native and Flutter for cross-platform apps.',
    avatar: 'https://i.pravatar.cc/150?img=35',
    whatsapp: '919922110099',
    message: 'Hi Divya, can we discuss mobile app development interviews?',
  },
  {
    name: 'Karan Malhotra',
    role: 'Security Specialist',
    bio: 'Focus on application security and penetration testing.',
    avatar: 'https://i.pravatar.cc/150?img=40',
    whatsapp: '919911009988',
    message: 'Hi Karan, interested in security interview preparation.',
  },
  {
    name: 'Alka Singh',
    role: 'Product Manager',
    bio: 'Guides startups on agile and product development strategies.',
    avatar: 'https://i.pravatar.cc/150?img=42',
    whatsapp: '919900998877',
    message: 'Hi Alka, I want to improve my product management skills.',
  },
  {
    name: 'Ravi Shankar',
    role: 'AI Researcher',
    bio: 'Works on cutting-edge AI and NLP projects.',
    avatar: 'https://i.pravatar.cc/150?img=45',
    whatsapp: '919889887766',
    message: 'Hi Ravi, I want to prepare for AI research roles.',
  },
  {
    name: 'Pooja Mehta',
    role: 'QA Engineer',
    bio: 'Experienced in automation testing and quality assurance.',
    avatar: 'https://i.pravatar.cc/150?img=48',
    whatsapp: '919877665544',
    message: 'Hi Pooja, can you help me with QA interview prep?',
  },
  {
    name: 'Siddharth Joshi',
    role: 'Software Architect',
    bio: 'Designs scalable software systems and mentors developers.',
    avatar: 'https://i.pravatar.cc/150?img=50',
    whatsapp: '919866554433',
    message: 'Hi Siddharth, interested in software architecture guidance.',
  },
  {
    name: 'Sonal Kapoor',
    role: 'HR Interviewer',
    bio: 'Experienced HR professional with 8+ years conducting interviews in tech and non-tech roles.',
    avatar: 'https://i.pravatar.cc/150?img=52',
    whatsapp: '919900112233',
    message: 'Hi Sonal, I would like to schedule an HR interview preparation session.',
  },
  {
    name: 'Ravi Kumar',
    role: 'Behavioral Coach',
    bio: 'Helps candidates master behavioral interviews and soft skills for job success.',
    avatar: 'https://i.pravatar.cc/150?img=53',
    whatsapp: '919911223344',
    message: 'Hi Ravi, I want coaching for behavioral interviews and soft skills.',
  },
  {
    name: 'Nisha Patel',
    role: 'Technical Interviewer',
    bio: 'Senior developer with deep experience conducting technical interviews for startups.',
    avatar: 'https://i.pravatar.cc/150?img=54',
    whatsapp: '919922334455',
    message: 'Hi Nisha, I want to practice technical interview questions.',
  },
  {
    name: 'Kiran Desai',
    role: 'Communication Coach',
    bio: 'Improves interview communication and presentation skills for tech professionals.',
    avatar: 'https://i.pravatar.cc/150?img=55',
    whatsapp: '919933445566',
    message: 'Hi Kiran, I would like help improving my communication for interviews.',
  },
];

const roles = [
  'React Developer',
  'DSA Coach',
  'System Design Mentor',
  'Fullstack Developer',
  'Backend Developer',
  'Frontend Developer',
  'Cloud Engineer',
  'Data Scientist',
  'DevOps Engineer',
  'Mobile App Developer',
  'Security Specialist',
  'Product Manager',
  'AI Researcher',
  'QA Engineer',
  'Software Architect',
  'HR Interviewer',
  'Behavioral Coach',
  'Technical Interviewer',
  'Communication Coach',
];

const ExpertBooking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const openWhatsApp = (number, message) => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${number}?text=${encodedMsg}`, '_blank');
  };

  const handleRoleFilter = (role) => {
    setSelectedRole(selectedRole === role ? '' : role);
    setSearchTerm('');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRole('');
  };

  const filteredExperts = experts.filter((expert) => {
    const combinedText = `${expert.name} ${expert.role}`.toLowerCase();
    const matchesSearch = combinedText.includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole ? expert.role === selectedRole : true;
    return matchesSearch && matchesRole;
  });

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-10 flex justify-center items-center gap-2">
        <FaUserTie /> Book a Session with Experts
      </h2>

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

      {(showFilters || window.innerWidth >= 768) && (
        <div className="mb-6 flex flex-wrap justify-center gap-3 transition-all duration-300 ease-in-out">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleFilter(role)}
              className={`px-4 py-2 rounded-full border transition font-semibold ${
                selectedRole === role
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-100'
              }`}
            >
              {role}
            </button>
          ))}

          {(searchTerm || selectedRole) && (
            <button
              onClick={clearFilters}
              className="ml-2 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-100 flex items-center gap-1 font-semibold"
            >
              <FaTimes /> Clear Filters
            </button>
          )}
        </div>
      )}

      <div className="mb-10 flex justify-center">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by name or role (e.g., React, DSA)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-4 left-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredExperts.length > 0 ? (
          filteredExperts.map((expert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border cursor-pointer hover:shadow-xl transition-shadow"
              tabIndex={0}
              aria-label={`Expert ${expert.name}, role ${expert.role}`}
            >
              <img
                src={expert.avatar}
                alt={expert.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {expert.name}
              </h3>
              <p className="text-blue-600 text-center font-medium">{expert.role}</p>
              <p className="text-gray-600 mt-3 text-center text-sm">{expert.bio}</p>
              <button
                onClick={() => openWhatsApp(expert.whatsapp, expert.message)}
                className="mt-6 w-full flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                <FaWhatsapp /> Book Now on WhatsApp
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No experts found for "{searchTerm || selectedRole}"
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ExpertBooking;


