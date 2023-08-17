import React from 'react'


function AboutPage() {
  return (
    <div  className="" >
      <section id="About" className=" bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
      
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                {/* <UsersIcon className="h-6 w-6 text-blue-gray-900" /> */}
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
              <button className="flex items-center mt-4 px-3 py-2 bg-[#161615] text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Read More </span>
                            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
            </div>
            <div className="mx-auto mt-24 flex w-full  justify-center px-4 md:w-4/12 lg:mt-0">
              <div className="shadow-lg shadow-gray-500/10">
                <div className=" bg-gray-900 bg-opacity-50 relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/building-1.jpg"
                    className="h-full w-full"
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
