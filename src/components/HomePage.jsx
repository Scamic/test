import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-blue-950 h-[60vh] sm:h-[80vh] flex flex-col items-center justify-center relative p-4">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-transparent to-black opacity-100 z-0"></div>
      <div className="text-center text-white z-10 mt-[-2vh] sm:-mt-22">
        <h1 className="bg-gradient-to-b from-white to-black-50 p-4 sm:p-8 md:p-12 font-bold bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl leading-tight">
          Solutions for <br /> the digital frontier
        </h1>
        <p className="mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl px-4 sm:px-8">
          Elevate your site's visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>
       
        <button className="mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:bg-gradient-to-l text-lg sm:text-xl md:text-2xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
