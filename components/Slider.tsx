import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel 

function Slider() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="block absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img loading="lazy" src="/img/banner-1.jpg" alt="Slide 1" />
          </div>

          
          
          {/* Add more slide items similarly */}
        </div>
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            
        <div className="block absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img loading="lazy" src="/img/dish-1.png" alt="Slide 1" />
          </div>
          

          
          
          {/* Add more slide items similarly */}
        </div>



      </Carousel>

      {/* Slider indicators */}
      <div className="absolute flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 z-30">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-white dark:bg-gray-800' : 'bg-white/30 dark:bg-gray-800/30'
            }`}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          />
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        {/* Add your previous icon */}
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        {/* Add your next icon */}
      </button>
    </div>
  );
}

export default Slider;
