import React from 'react'


function Event_and_design() {
  return (
     <section className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Event Development & Design Excellence
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Creating immersive digital experiences that bring your event to life across all platforms
          </p>

          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Comprehensive Event Solutions</h3>
                  <p className="text-gray-600">
                    From initial concept to final execution, we craft seamless digital experiences that 
                    engage attendees and amplify your event's impact across all touchpoints.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Responsive Web Design</h4>
                      <p className="text-gray-600 text-sm">Beautiful, functional websites that work perfectly on any device</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile Applications</h4>
                      <p className="text-gray-600 text-sm">Native and cross-platform apps for seamless event engagement</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Registration Systems</h4>
                      <p className="text-gray-600 text-sm">Streamlined ticketing and attendee management solutions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Live Streaming</h4>
                      <p className="text-gray-600 text-sm">High-quality broadcast capabilities for virtual attendees</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Slider */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <div className="relative h-80 md:h-96">
                    <img 
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Event website design"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h4 className="font-bold text-lg">Conference 2023 Website</h4>
                        <p className="text-sm">Fully responsive design with integrated registration</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slider Controls */}
               

                {/* Floating Stats */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">250+</div>
                    <div className="text-sm text-gray-600">Events Developed</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
  )
}

export default Event_and_design