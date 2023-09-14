import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

function RoomPage2() {
  return (
    <div className="bg-black" >
        <div className="md:flex" >
            <div>
            <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/img/room-1.jpg" />
          
        </div>
        <div>
          <img loading="lazy" src="/img/meeting-1.jpg" />
        </div>
        <div>
          <img loading="lazy" src="/img/outside-1.jpg" />
        </div>
      </Carousel>
            </div>

     <div className="w-full md:w-6/12 text-white px-3 p-20 lg:px-6 mb-6 md:mb-0 basis-auto grow-0 shrink-0 ">
          <h2 className="text-3xl p-5  font-bold ">Contact us</h2>
          <div  className=" font-bold p-5 " >
            <p>we are the best in town</p>
            <p>we are the best in town</p>
            <p>we are the best in town</p>
          </div>
          <div> 
           <p className=" text-[20px] p-5 font-bold items-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
          </p>
        </div>
        <div className="p-5" >
          <p className="font-bold text-[40px] text-yellow-400 "  >$100.00</p>
        </div>
        
     </div>
        </div>
      
    </div>
  )
}

export default RoomPage2


