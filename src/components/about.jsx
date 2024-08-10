import React from 'react';
import pic3 from "../assets/pic3.jpg";

const AboutUs = () => {
  return (
    <section className="bg-blue-950 text-white py-10 lg:py-20 relative overflow-hidden p-6">
      <div className="bg-black p-6 sm:p-10 container mx-auto mb-10 px-4 flex flex-col lg:flex-row items-center lg:justify-between relative -mt-10 lg:-mt-20 rounded-5xl z-10">
        <div className="w-97 lg:w-1/2 mb-10 lg:mb-0 lg:pr-8 text-center lg:text-left ml-4 lg:ml-8">
          <h2 className="text-white text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10 underline-animation -ml-2 sm:-ml-6 lg:ml-16">
            About Us <br />
          </h2>
          <div className='bg-gray-800 focus:outline-none rounded-lg text-left border border-gray-600 p-2 sm:p-4 lg:p-6  lg:mr-20 w-full lg:w-[50vw] ml-0 sm:ml-4 lg:ml-8'>
            <p className="text-gray-300 text-sm sm:text-base lg:text-xl mb-2 sm:mb-4">
              At Doutya Tech, we are committed to revolutionizing the tech landscape with innovative solutions and exceptional service. Our team of experts works tirelessly to provide top-notch software solutions that meet the needs of modern businesses.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-xl">
              Our mission is to simplify technology, making it accessible and effective for all. Whether you're a startup or an established enterprise, we have the expertise and tools to help you thrive in today’s fast-paced digital world.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end h-64 sm:h-78 w-64 sm:w-76 sm:mr-20 sm:mt-10">
          <img
            src={pic3}
            alt="About Us"
            className="rounded-xl w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-80 z-0"></div>
    </section>
  );
};

export default AboutUs;
