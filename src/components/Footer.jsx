import React from 'react';
import 'aos/dist/aos.css';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-56 h-56 bg-blue-600 rounded-full mix-blend-screen filter blur-2xl opacity-60 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/5 animate-blob"></div>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start relative z-10">
                {/* Stay Connected Section */}
                <div className="text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-3" data-aos="fade-up">Stay Connected</h2>
                    <p className="text-lg mb-4" data-aos="fade-up" data-aos-delay="200">
                        Follow us on social media to keep up with the latest updates and news.
                    </p>
                    <div className="flex gap-6 justify-center lg:justify-start">
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="600">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="800">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors text-3xl" data-aos="fade-up" data-aos-delay="1000">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="text-center lg:text-left mb-8 lg:mb-0">
                    <h3 className="text-xl font-bold mb-3" data-aos="fade-up" data-aos-delay="1200">Join Our Newsletter</h3>
                    <p className="text-sm mb-4" data-aos="fade-up" data-aos-delay="1400">
                        Subscribe to our newsletter and stay updated on the latest news and offers.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="1600">
                        <input type="email" placeholder="Your Email" className="bg-gray-800 text-gray-400 py-2 px-4 mb-2 sm:mb-0 sm:mr-2 rounded-md outline-none focus:ring-2 focus:ring-purple-600 transition-all"/>
                        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md transition-all">Subscribe</button>
                    </form>
                </div>

                {/* Contact Us Section */}
                <div className="text-center lg:text-right">
                    <h3 className="text-xl font-bold mb-3" data-aos="fade-up" data-aos-delay="1800">Contact Us</h3>
                    <p className="text-sm mb-2" data-aos="fade-up" data-aos-delay="2000">
                        1234 Street Name, City, State, 56789
                    </p>
                    <p className="text-sm mb-2" data-aos="fade-up" data-aos-delay="2200">
                        Phone: (123) 456-7890
                    </p>
                    <p className="text-sm mb-2" data-aos="fade-up" data-aos-delay="2400">
                        Email: info@yourcompany.com
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 text-sm relative z-10">
                <p data-aos="fade-up" data-aos-delay="2600">
                    &copy; 2024 Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
