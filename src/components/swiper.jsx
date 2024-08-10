import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'; // Import your custom styles here
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bulb from '../assets/bulb.png'; // Import your images

export default function App() {
  const products = [
    { id: 1, src: bulb, alt: 'Product 1', name: 'Xtaart', description: 'Xtaart is a cutting-edge career guidance platform designed specifically for students who are uncertain about their career paths, interests, and skills.' },
    { id: 2, src: bulb, alt: 'Product 2', name: 'Xortlist', description: 'Xortlist is an innovative platform designed for students who have clear goals, dreams, and aspirations, but are struggling to find opportunities to achieve them.' },
    { id: 3, src: bulb, alt: 'Product 3', name: 'Doutya Recruit', description: 'Doutya Recruit is an innovative recruitment platform that bridges the gap between students and their dream companies.' },
    { id: 4, src: bulb, alt: 'Product 4', name: 'Doutya Engage', description: 'Doutya Engage is an innovative learning platform that empowers students to prepare for their dream company.' },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="relative group">
            <img
              src={product.src}
              alt={product.alt}
              className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
