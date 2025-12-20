import React from 'react'

export default function HeroSection({ isMobile }) {
  return (
    <section className="bg-gray-100 px-4 lg:px-24 py-8 lg:py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight">
            FIND CLOTHES<br />
            THAT MATCHES<br />
            YOUR STYLE
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-md">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black text-white px-12 lg:px-16 py-3 lg:py-4 rounded-full font-medium w-full lg:w-auto hover:bg-gray-800 transition-colors">
            Shop Now
          </button>

          {!isMobile && (
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="border-r border-gray-300">
                <div className="text-2xl lg:text-4xl font-bold">200+</div>
                <div className="text-xs lg:text-sm text-gray-600">International Brands</div>
              </div>
              <div className="border-r border-gray-300">
                <div className="text-2xl lg:text-4xl font-bold">2,000+</div>
                <div className="text-xs lg:text-sm text-gray-600">High-Quality Products</div>
              </div>
              <div>
                <div className="text-2xl lg:text-4xl font-bold">30,000+</div>
                <div className="text-xs lg:text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="relative h-64 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 right-8 w-16 h-16 bg-black rounded-full opacity-20"></div>
          <div className="absolute bottom-8 left-8 w-12 h-12 bg-black rounded-full opacity-20"></div>
        </div>
      </div>

      {/* Mobile Stats */}
      {isMobile && (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 mt-8 text-center">
          <div>
            <div className="text-xl font-bold">200+</div>
            <div className="text-xs text-gray-600">International Brands</div>
          </div>
          <div className="border-x border-gray-300">
            <div className="text-xl font-bold">2,000+</div>
            <div className="text-xs text-gray-600">High-Quality Products</div>
          </div>
          <div>
            <div className="text-xl font-bold">30,000+</div>
            <div className="text-xs text-gray-600">Happy Customers</div>
          </div>
        </div>
      )}
    </section>
  )
}
