import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaWifi, FaParking, FaSwimmingPool, FaCoffee, FaConciergeBell } from 'react-icons/fa';

const hotels = [
  {
    id: 1,
    name: 'Le Meridien Makkah',
    location: 'Makkah, Saudi Arabia',
    rating: 5,
    price: 250,
    description: 'Luxury hotel located just steps away from the Holy Mosque, offering modern amenities and spectacular views.',
    amenities: ['Free WiFi', 'Parking', 'Swimming Pool', 'Restaurant', '24/7 Room Service'],
    roomTypes: [
      {
        name: 'Deluxe Room',
        price: 250,
        size: '32 sqm',
        beds: '1 King or 2 Twin',
        occupancy: '2 Adults + 1 Child'
      },
      {
        name: 'Premium Room',
        price: 350,
        size: '40 sqm',
        beds: '1 King',
        occupancy: '2 Adults + 2 Children'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3'
    ]
  }
];

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find(h => h.id === parseInt(id));

  const handleBooking = () => {
    navigate('/confirmation', {
      state: {
        bookingData: {
          type: 'hotel',
          ...hotel,
          bookingId: `HT${Math.floor(Math.random() * 1000000)}`,
          bookingDate: new Date().toISOString()
        }
      }
    });
  };

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hotel Not Found</h2>
          <p className="text-gray-600 mb-6">The hotel you are looking for does not exist.</p>
          <Link 
            to="/hotels"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
          >
            View All Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-96">
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{hotel.name}</h1>
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="text-primary mr-2" />
                      <span className="text-gray-600">{hotel.location}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">${hotel.price}</p>
                    <p className="text-gray-600">per night</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{hotel.description}</p>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        {amenity.includes('WiFi') && <FaWifi className="text-primary mr-2" />}
                        {amenity.includes('Parking') && <FaParking className="text-primary mr-2" />}
                        {amenity.includes('Pool') && <FaSwimmingPool className="text-primary mr-2" />}
                        {amenity.includes('Restaurant') && <FaCoffee className="text-primary mr-2" />}
                        {amenity.includes('Service') && <FaConciergeBell className="text-primary mr-2" />}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Room Types</h2>
              <div className="space-y-6">
                {hotel.roomTypes.map((room, index) => (
                  <div key={index} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{room.name}</h3>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">${room.price}</p>
                        <p className="text-gray-600">per night</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
                      <div>
                        <p className="font-semibold">Room Size</p>
                        <p>{room.size}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Bed Type</p>
                        <p>{room.beds}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Max Occupancy</p>
                        <p>{room.occupancy}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    {hotel.roomTypes.map((room, index) => (
                      <option key={index} value={room.name}>
                        {room.name} - ${room.price}/night
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Room Rate (per night)</span>
                  <span>${hotel.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes & Fees</span>
                  <span>$50</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${hotel.price + 50}</span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-md transition duration-300 mb-4"
              >
                Book Now
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>Need help? Contact our support team</p>
                <a href="tel:+12345678901" className="text-primary hover:text-primary/80">
                  +1 234 567 8901
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;