import React from 'react';

const CareerSection = () => {
  return (
    <div className="bg-blue-950 p-4 relative flex justify-center items-center min-h-screen">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-100 z-0"></div> */}

      <div className="bg-gradient-to-r min-h-[80vh] w-full sm:w-[90vw] from-indigo-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center px-6 sm:px-8 py-10 sm:py-12 relative overflow-hidden text-white rounded-2xl shadow-2xl transform translate-y-[-20px] z-20">
        
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute w-40 sm:w-64 h-40 sm:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-50 top-1/5 left-1/4 animate-pulse"></div>
          <div className="absolute w-52 sm:w-80 h-52 sm:h-80 bg-pink-500 rounded-full filter blur-3xl opacity-50 top-1/2 right-1/4 animate-pulse"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-16 p-4 sm:p-6 z-10 relative">
        <h2 className="text-blue-100 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 underline-animation p-4" data-aos="fade-up">
                              Career Opportunities
                            </h2>
          <div className="mt-4 md:mt-0">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 md:max-w-3xl border border-gray-400 p-4 rounded-lg font-roboto">
              Join our dynamic team and contribute to groundbreaking innovations in the tech industry. We’re seeking passionate professionals who thrive on challenges and are eager to make an impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-8 sm:mt-12 z-10 relative space-y-6 md:space-y-0 md:space-x-6 sm:space-x-12">
          <div className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">Why Work With Us</h2>
            <p className="text-sm sm:text-lg text-gray-300">
              We offer a collaborative environment where your ideas matter. Enjoy flexible work arrangements, professional growth opportunities, and a supportive community.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">Our Culture</h2>
            <p className="text-sm sm:text-lg text-gray-300">
              Innovation, integrity, and inclusion are at the heart of everything we do. Be part of a team that values diverse perspectives and creative problem-solving.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-gray-800 bg-opacity-50 p-6 sm:p-8 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">Career Growth</h2>
            <p className="text-sm sm:text-lg text-gray-300">
              Your career growth is our priority. We provide continuous learning opportunities and clear paths to advancement within the company.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 hover:to-purple-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Join Us
          </button>
        </div>
      </div>
    </div>  
  );
};

export default CareerSection;
