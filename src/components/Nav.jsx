import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, scroller } from 'react-scroll';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const sectionMap = {
      about: 'about-section',
      products: 'products-section',
      careers: 'careers-section',
      blog: 'blog-section',
    };

    const sectionId = sectionMap[searchQuery.toLowerCase()];
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
      });
    } else {
      alert(`No section found for: ${searchQuery}`);
    }
  };

  return (
    <nav className={`p-4 ${scrolling ? 'bg-gray-800' : 'bg-black'} transition-colors duration-300`}>
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 ml-2 sm:ml-4 lg:ml-8">
          <div className="relative group cursor-pointer">
            <img
              src="src/assets/images-removebg-preview.png"
              alt="Logo"
              className="h-12 w-12 sm:h-16 sm:w-16 lg:h-28 lg:w-28"
            />
            <span className="absolute left-16 sm:left-20 lg:left-28 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white text-sm sm:text-lg lg:text-xl font-bold transition-all duration-500">
              Doutya Technologies
            </span>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl sm:text-2xl" />
          </button>
        </div>

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕ {/* Close icon */}
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="products-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="careers-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="blog-section"
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white cursor-pointer font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
          </nav>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex space-x-4 lg:space-x-6 xl:space-x-8 p-2 rounded-full border-2 border-white">
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
          >
            About Us
          </Link>
          <Link
            to="products-section"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
          >
            Products
          </Link>
          <Link
            to="careers-section"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
          >
            Careers
          </Link>
          <Link
            to="blog-section"
            smooth={true}
            duration={500}
            className="text-gray-400 hover:text-white cursor-pointer font-bold px-3 py-1"
          >
            Blogs
          </Link>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex w-full sm:w-auto mt-4 lg:mt-0 lg:ml-4"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 w-full sm:w-auto lg:w-48 xl:w-64 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white"
          />
          <button type="submit" className="ml-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
