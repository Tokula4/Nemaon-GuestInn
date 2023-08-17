import React from 'react'

function Homepage() {
  return (
   


        <div className="container ">
            <div className="h-64 rounded-md " >
                <div className="bg-gray-900 bg-opacity-50 justify-center flex items-center h-full">
                    <div className="px-10">
                        <h2 className="text-2xl xl:text-5xl  font-bold text-white ">Best Guest & Hotel Service</h2>
                        <p className="mt-2 text-gray-400">We are the best guestin that offer both guestinn and hotel services</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-[#161615] text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Read More</span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
   
    </div>
   
   
  )
}

export default Homepage
