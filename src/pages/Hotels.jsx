import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHotel, FaCalendarAlt, FaUser, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const Hotels = () => {
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0
  });
  const [rooms, setRooms] = useState(1);

  return (
    <div>
      <div className="relative min-h-[500px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl text-white/90">Book comfortable accommodations near holy sites</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="City or Hotel Name"
                    className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <FaHotel className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests & Rooms</label>
                <div className="relative">
                  <button
                    className="w-full pl-10 pr-4 py-2 border rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {guests.adults + guests.children} Guests, {rooms} Room(s)
                  </button>
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <button className="w-full border-transparent border-2 bg-accent hover:bg-transparent hover:text-accent hover:border-accent text-white font-semibold px-8 py-2 rounded-3xl transition duration-300">
              Search Hotels
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Hotels</h2>
            <p className="text-gray-600">Discover our selection of premium hotels near holy sites</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Le Meridien Makkah',
                location: 'Makkah, Saudi Arabia',
                rating: 5,
                price: 250,
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              },
              {
                name: 'Anwar Al Madinah Mövenpick',
                location: 'Madinah, Saudi Arabia',
                rating: 5,
                price: 200,
                image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              },
              {
                name: 'Hilton Suites Makkah',
                location: 'Makkah, Saudi Arabia',
                rating: 5,
                price: 280,
                image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
              }
            ].map((hotel, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="text-gray-400 mr-1" />
                    <span className="text-gray-600 text-sm">{hotel.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-primary">${hotel.price}</p>
                      <p className="text-sm text-gray-600">per night</p>
                    </div>
                    <button className="border-2 border-transparent bg-primary text-white hover:bg-white hover:text-primary hover:border-primary font-semibold px-4 py-2 rounded-3xl transition duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;