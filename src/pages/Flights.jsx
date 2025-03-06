import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaCalendarAlt, FaUser, FaStar, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Flights = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [cabinClass, setCabinClass] = useState('economy');
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  return (
    <div>
      <Banner 
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3"
        title="Find Your Flight"
        subtitle="Book flights for your spiritual journey"
      />
      
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Popular Flight Routes
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find the best deals on flights to holy destinations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                from: 'Jakarta (CGK)',
                to: 'Jeddah (JED)',
                price: 850,
                airline: 'Saudi Airlines'
              },
              {
                id: 2,
                from: 'Kuala Lumpur (KUL)',
                to: 'Madinah (MED)',
                price: 780,
                airline: 'Emirates'
              },
              {
                id: 3,
                from: 'Dubai (DXB)',
                to: 'Jeddah (JED)',
                price: 420,
                airline: 'Etihad Airways'
              }
            ].map((route, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-semibold">{route.from}</div>
                  <FaExchangeAlt className="text-gray-400" />
                  <div className="text-lg font-semibold">{route.to}</div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-600">{route.airline}</p>
                    <p className="text-2xl font-bold text-primary">${route.price}</p>
                  </div>
                  <Link 
                    to={`/flight/${route.id}`}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flights;