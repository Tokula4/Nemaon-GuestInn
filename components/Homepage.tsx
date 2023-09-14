import React from 'react'

function Homepage() {
  return (
   

        <div className="container ">
            <div className="h-screen rounded-md " >
                <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
                    <div className="px-10">
                        <h2 className="text-5xl font-bold text-white xl:text-7xl ">Best Guest & Hotel Service</h2>
                        <p className="mt-2 text-2xl font-thin text-white">We are the best guestin that offer <br></br>both guestinn and hotel services</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-[#1b8d50] text-white text-sm uppercase font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">
                            <span>Read More</span>
                            <svg className="w-5 h-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
   
    </div>
   
   
  )
}

export default Homepage
