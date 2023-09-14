import React from 'react'


function AboutPage() {
  return (
    <div  className="" >
      <section id="About" className="px-4 pt-4 pb-20 bg-gray-50">
        <div className="container mx-auto">
      
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full px-4 mx-auto -mt-8 md:w-5/12">
              <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg">
                {/* <UsersIcon className="w-6 h-6 text-blue-gray-900" /> */}
              </div>
              <div
                
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </div>
              <div className="mb-8 font-normal text-blue-gray-500">
                Dont let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and youre good to
                go. Just make sure you enable them first via JavaScript.
              </div>
              <button   className="flex items-center mt-4 px-3 py-2 bg-[#1b8d50] text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Read More </span>
                            <svg className="w-5 h-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
            </div>
            <div className="flex justify-center w-full px-4 mx-auto mt-24 md:w-4/12 lg:mt-0">
              <div className="shadow-lg shadow-gray-500/10">
                <div className="relative h-56 bg-gray-900 bg-opacity-50 ">
                  <img
                    alt="Card Image"
                    src="/img/building-1.jpg"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <div
                   
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </div>
                  <div className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
