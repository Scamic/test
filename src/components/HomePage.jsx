import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-slate-950 min-h-100vh ">
      <div className="container mx-auto flex flex-wrap justify-between py-20">
        {/* Left Section with Heading */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-violet-800 text-3xl lg:text-7xl font-bold ml-4 lg:ml-12">
            Innovating the Future,<br />One Byte at a Time.
          </h1>
          <p className="text-gray-400 mt-4 ml-4 lg:ml-14 text-sm lg:text-base">
            Simplify Your Operations and Amplify Your Results. Our user-friendly solutions are built to streamline your<br />processes and boost productivity.
          </p>
          <div className="ml-4 lg:ml-14 mt-6 lg:mt-12">
            <button
              type="button"
              className="py-2 px-4 lg:py-2.5 lg:px-5 text-xs lg:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-3/4 sm:w-2/3 md:w-1/2 lg:w-auto"
            >
              Join Us
            </button>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="w-full lg:w-2/5">


        <div className='absolute inset-0 pointer-events-none z-0'>
        <div className="absolute w-56 h-56 bg-blue-800 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-1/4 left-1/3 transform -translate-x-1/2 animate-horizontal-blob"></div>
        </div>


          <img src="src/assets/pic2.jpg" alt="Sample" className="rounded-md w-60 h-70 pl-10 lg:h-98 lg:w-92 object-cover z-10" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;