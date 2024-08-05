import React from 'react';

const CareerSection = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center px-8 py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-56 h-56 bg-violet-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-1/5 left-1/3 transform -translate-x-1/2 animate-horizontal-blob"></div>
        <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-1/2 right-1/4 transform translate-x-1/2 animate-horizontal-blob"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center ml-6 mb-12 p-4 z-10 relative">
        <h1 className="text-5xl font-bold text-violet-800 md:mb-0 custom-underline">Career</h1>
        <p className="text-xl text-gray-400 md:max-w-xl">
          We are always looking for talented individuals to join our team. If you are passionate about technology and innovation, we would love to hear from you.
        </p>
      </div>
      <div className="bg-slate-700 text-center py-8 px-4 rounded-lg shadow-lg w-full max-w-2xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl z-10 relative">
        <img src='src/assets/pic4.jpeg' alt="Join Us" className="w-full object-cover h-64 mb-8 rounded-t-lg" />
        <h2 className="text-4xl font-semibold mb-5 text-gray-100">Join Us</h2>
        <p className="text-lg text-gray-300 mb-8">
          Discover the opportunities available to you. Work with the best minds in the industry and take your career to the next level.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 text-lg rounded-full shadow-md transition-transform transform hover:bg-blue-700 hover:-translate-y-1">
          Apply Now
        </button>
      </div>
      <style jsx>{`
        .custom-underline {
          position: relative;
        }

        .custom-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #00FF00;
          transition: width 0.3s ease;
          -webkit-transition: width 0.3s ease;
        }

        .custom-underline:hover::after {
          width: 100%;
          left: 0;
          background: #00FF00;
        }

        @keyframes horizontal-blob {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(50px);
          }
        }

        .animate-horizontal-blob {
          animation: horizontal-blob 10s infinite;
        }
      `}</style>
    </div>
  );
};

export default CareerSection;
