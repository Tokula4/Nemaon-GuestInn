import React from 'react'

function ServicePage() {
  return (
    <div id="ServicePage" className="container mx-auto px-6 py-3 " >
            <div className="md:flex mx-auto  mt-8 md:-mx-4">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Accomodation</h2>
                            <p className="mt-2 text-gray-400">Accomodation facilities/class are ; 
                            Royal,Executive & Standard Rooms.Rates between #4000 to #80000. Check out time is Noon.
</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>More Info</span>
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Catering Service </h2>
                            <p className="mt-2 text-gray-400">Catering service are African Dishes Swallows likes of Pounded Yam ,Semovita garri etc.</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span > More Info</span>  
                                <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
  )
}

export default ServicePage
