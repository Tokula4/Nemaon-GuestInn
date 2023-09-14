import Link from 'next/link'
import React from 'react'

function ServicePage() {
  return (
    <div id="ServicePage" className="container px-6 py-3 mx-auto " >
            <div className="mx-auto mt-8 md:flex md:-mx-4">
                <div className="w-full  bg-[url('/img/banner.jpg')] h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                    <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                        <div className="max-w-xl px-10">
                            <h2 className="text-2xl font-semibold text-white">Accomodation</h2>
                            <p className="mt-2 text-white">Accomodation facilities/class are ; 
                            Royal,Executive & Standard Rooms.Rates between #4000 to #80000. Check out time is Noon.
</p>
                            <button  className="flex items-center mt-4 text-sm font-medium text-white uppercase rounded hover:underline focus:outline-none">
                                <span>More Info</span>
                                <svg className="w-5 h-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>

                              
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full  bg-[url('/img/dish-1.png')] h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                    <div className="flex items-center h-full bg-gray-900 bg-opacity-50">
                        <div className="max-w-xl px-10">
                            <h2 className="text-2xl font-semibold text-white">Catering Service </h2>
                            <p className="mt-2 text-white -400">Catering service are African Dishes Swallows likes of Pounded Yam ,Semovita garri etc.</p>
                            <button className="flex items-center mt-4 text-sm font-medium text-white uppercase rounded hover:underline focus:outline-none">
                                <span > More Info</span>  
                                <svg className="w-5 h-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
  )
}

export default ServicePage
