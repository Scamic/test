import React, { useState } from 'react';
import pic5 from '../assets/pic5.jpg'; 
import Swiper from "./swiper"; // Import your Swiper component

// Sample product data
const products = [
    { id: 1, src: pic5, alt: 'Product 1', name: 'Xtaart', description: 'Xtaart is a cutting-edge career guidance platform designed specifically for students who are uncertain about their career paths, interests, and skills.' },
    { id: 2, src: pic5, alt: 'Product 2', name: 'Xortlist', description: 'Xortlist is an innovative platform designed for students who have clear goals, dreams, and aspirations, but are struggling to find opportunities to achieve them.' },
    { id: 3, src: pic5, alt: 'Product 3', name: 'Doutya Recruit', description: 'Doutya Recruit is an innovative recruitment platform that bridges the gap between students and their dream companies.' },
    { id: 4, src: pic5, alt: 'Product 4', name: 'Doutya Engage', description: 'Doutya Engage is an innovative learning platform that empowers students to prepare for their dream company.' },
    // Duplicate products to create 8 cards
    { id: 5, src: pic5, alt: 'Product 5', name: 'Xtaart', description: 'Xtaart is a cutting-edge career guidance platform designed specifically for students who are uncertain about their career paths, interests, and skills.' },
    { id: 6, src: pic5, alt: 'Product 6', name: 'Xortlist', description: 'Xortlist is an innovative platform designed for students who have clear goals, dreams, and aspirations, but are struggling to find opportunities to achieve them.' },
    { id: 7, src: pic5, alt: 'Product 7', name: 'Doutya Recruit', description: 'Doutya Recruit is an innovative recruitment platform that bridges the gap between students and their dream companies.' },
    { id: 8, src: pic5, alt: 'Product 8', name: 'Doutya Engage', description: 'Doutya Engage is an innovative learning platform that empowers students to prepare for their dream company.' },
];

const ProductSection = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="relative bg-blue-950 min-h-55 flex flex-col">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-transparent to-black opacity-80 z-0"></div>
            
            <div className='ml-12 mt-20' data-aos="fade-up">
                <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 underline-animation">
                    Our Products
                </h2>
            </div>

            {/* Swiper for Mobile View */}
            <div className="m-5 block md:hidden relative z-10  min-h-[300px] h-34 "> {/* Ensure proper height for Swiper */}
                <Swiper />
            </div>

            
          
            

            {/* Product Cards Grid for Larger Screens */}
            <div className="hidden md:grid flex-1 grid-cols-1 md:grid-cols-4 gap-10 p-16 overflow-hidden relative z-10">
                {products.map((product) => (
                    
                    <div
                        key={product.id}
                        className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-300 shadow-lg transition-transform transform hover:scale-105 w-full max-w-xs h-[400px]"
                        data-aos="fade-up"
                    >
                        <img
                            src={product.src}
                            alt={product.alt}
                            className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                            onClick={() => handleImageClick(product)}
                        />
                       
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-center opacity-0 group-hover:opacity-100">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p className="mt-2 text-sm">{product.description}</p>
                                <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition">
                                    <span>More Info</span>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                ))}

                
            </div>

            {/* Product Details Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 overflow-y-auto z-20">
                    <div className="bg-white text-black p-8 rounded-lg w-full max-w-lg relative">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl mb-4">{selectedProduct.name}</h2>
                        <img
                            src={selectedProduct.src}
                            alt={selectedProduct.alt}
                            className="w-full h-[400px] object-cover mb-4"
                        />
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default ProductSection;
