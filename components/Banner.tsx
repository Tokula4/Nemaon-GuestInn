import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 z-20 h-32 bg-gradient-to-t from-green-800 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/img/banner.jpg" />
          jdheqifqeojeofjq
        </div>
        <div>
          <img loading="lazy" src="/img/banner-1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/img/banner-3.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
