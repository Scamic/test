import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-slate-950 text-white py-10 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-56 h-56 bg-violet-400 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-0 left-1/2 transform -translate-x-1/2 animate-horizontal-blob mt-22"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between relative">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-8 text-center lg:text-left ml-8" data-aos="fade-up">
          <h2 className="text-violet-800 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 underline-animation">
            About Us
          </h2>
          <div className='bg-gray-800 focus:outline-none rounded-lg border border-gray-600 pl-2 pr-2 pt-2 pb-2' data-aos="fade-up" data-aos-delay="200">  
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-4">
              At Doutya Tech, we are committed to revolutionizing the tech landscape with innovative solutions and exceptional service. Our team of experts works tirelessly to provide top-notch software solutions that meet the needs of modern businesses. We believe in pushing boundaries and embracing new challenges to drive success and growth.
            </p>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
              Our mission is to simplify technology, making it accessible and effective for all. Whether you're a startup or an established enterprise, we have the expertise and tools to help you thrive in today’s fast-paced digital world.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end h-78 w-76 mr-6" data-aos="fade-right" data-aos-delay="400">
          <img
            src="src/assets/pic3.jpg"
            alt="About Us"
            className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;