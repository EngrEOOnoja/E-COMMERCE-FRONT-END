export default function BrowseByStyle() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-100 rounded-3xl mt-12">
      <h2 className="text-3xl lg:text-4xl font-black text-center mb-12">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Casual */}
        <div className="lg:col-span-1 rounded-2xl overflow-hidden relative h-56 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <span className="absolute top-4 left-4 text-3xl font-bold">
            Casual
          </span>
        </div>

        {/* Formal */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden relative h-56 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <span className="absolute top-4 left-4 text-3xl font-bold">
            Formal
          </span>
        </div>

        {/* Party */}
        <div className="lg:col-span-2 rounded-2xl overflow-hidden relative h-56 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1566206091558-7f218b696731?w=800"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <span className="absolute top-4 left-4 text-3xl font-bold">
            Party
          </span>
        </div>

        {/* Gym */}
        <div className="lg:col-span-1 rounded-2xl overflow-hidden relative h-56 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400"
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
          <span className="absolute top-4 left-4 text-3xl font-bold">
            Gym
          </span>
        </div>
      </div>
    </section>
  )
}
