import React from 'react';
import 'aos/dist/aos.css';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-56 h-56 bg-purple-600 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5 animate-blob"></div>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
                <div className="text-center lg:text-left mb-8 lg:mb-0">
            
                    <h2 className="text-2xl font-bold mb-2" data-aos="fade-up">Stay Connected</h2>
                    <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="200">
                        Follow us on social media to keep up with the latest updates and news.
                    </p>
                </div>

                <div className="flex flex-col items-center lg:items-center mb-8 lg:mb-0 relative">
                    <div className="flex gap-6 mb-4">
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="600">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="800">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center lg:text-right">
                    <h3 className="text-xl font-bold mb-2" data-aos="fade-up" data-aos-delay="1000">Contact Us</h3>
                    <p className="text-sm mb-2" data-aos="fade-up" data-aos-delay="1200">
                        1234 Street Name, City, State, 56789
                    </p>
                    <p className="text-sm mb-2" data-aos="fade-up" data-aos-delay="1400">
                        Phone: (123) 456-7890
                    </p>
                    <p className="text-sm" data-aos="fade-up" data-aos-delay="1600">
                        Email: info@yourcompany.com
                    </p>
                </div>
            </div>

            <div className="absolute bottom-4 inset-x-1/2 transform -translate-x-1/2 flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="1800">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="2000">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="2200">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>

            <div className="text-center mt-6 text-sm">
                <p data-aos="fade-up" data-aos-delay="2400">
                    &copy; 2024 Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
