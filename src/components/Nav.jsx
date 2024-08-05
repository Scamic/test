import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, scroller } from 'react-scroll';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
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
      blog: 'blog-section'
    };

    const sectionId = sectionMap[searchQuery.toLowerCase()];
    if (sectionId) {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true
      });
    } else {
      alert(`No section found for: ${searchQuery}`);
    }
  };

  return (
    <nav className={`p-4 ${scrolling ? 'bg-gray-800' : 'bg-slate-950'} transition-colors duration-300`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="src/assets/images-removebg-preview.png" alt="Logo" className="h-14 w-14" />
          <span className="text-white text-xl font-bold">Doutya Tech</span>
        </div>

        {/* Navigation Links */}
        <div className="w-full lg:w-auto flex justify-center lg:space-x-8">
          <Link 
            to="about-section" 
            smooth={true} 
            duration={500} 
            className="text-gray-300 hover:text-white mx-2 lg:mx-4 cursor-pointer"
          >
            Option 1
          </Link>
          <Link 
            to="products-section" 
            smooth={true} 
            duration={500} 
            className="text-gray-300 hover:text-white mx-2 lg:mx-4 cursor-pointer"
          >
            Option 2
          </Link>
          <Link 
            to="careers-section" 
            smooth={true} 
            duration={500} 
            className="text-gray-300 hover:text-white mx-2 lg:mx-4 cursor-pointer"
          >
            Option 3
          </Link>
          <Link 
            to="blog-section" 
            smooth={true} 
            duration={500} 
            className="text-gray-300 hover:text-white mx-2 lg:mx-4 cursor-pointer"
          >
            Option 4
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full lg:w-auto flex items-center mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-white w-full lg:w-auto"
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
