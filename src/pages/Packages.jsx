import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { FaStar, FaCalendarAlt, FaHotel, FaUtensils, FaPlane, FaBus } from 'react-icons/fa';

const packages = [
  {
    id: 1,
    name: 'Economy Umrah Package',
    description: 'A budget-friendly package for those seeking a simple and spiritual Umrah experience.',
    price: 1200,
    duration: '10 days',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1604026290925-43e3eb1a4c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Economy class flights',
      '3-star hotel accommodation',
      'Transportation between cities',
      'Guided Umrah',
      'Daily breakfast'
    ],
    cities: ['Makkah (5 nights)', 'Madinah (4 nights)'],
    type: 'umrah'
  },
  {
    id: 2,
    name: 'Premium Umrah Package',
    description: 'A premium package offering comfortable accommodations and comprehensive services for a fulfilling Umrah journey.',
    price: 2500,
    duration: '14 days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Premium economy flights',
      '4-star hotel accommodation',
      'Private transportation',
      'Guided Umrah',
      'Full board meals',
      'Ziyarat (visits to historical sites)'
    ],
    cities: ['Makkah (7 nights)', 'Madinah (6 nights)'],
    type: 'umrah'
  },
  {
    id: 3,
    name: 'Luxury Umrah Package',
    description: 'Experience Umrah in luxury with premium accommodations, personalized service, and exclusive amenities.',
    price: 4000,
    duration: '14 days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Business class flights',
      '5-star hotel accommodation near Haram',
      'VIP transportation',
      'Private guided Umrah',
      'Full board gourmet meals',
      'Comprehensive Ziyarat',
      'Dedicated group leader'
    ],
    cities: ['Makkah (8 nights)', 'Madinah (5 nights)'],
    type: 'umrah'
  },
  {
    id: 4,
    name: 'Standard Hajj Package',
    description: 'A comprehensive Hajj package covering all essential rituals and accommodations for a fulfilling pilgrimage.',
    price: 6500,
    duration: '21 days',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Economy class flights',
      '3-star hotel accommodation',
      'Tent accommodation in Mina',
      'Transportation during Hajj rituals',
      'Three meals daily',
      'Guided Hajj rituals',
      'Ihram clothing for men'
    ],
    cities: ['Makkah (10 nights)', 'Madinah (5 nights)', 'Mina/Arafat/Muzdalifah (5 nights)'],
    type: 'hajj'
  },
  {
    id: 5,
    name: 'Premium Hajj Package',
    description: 'A premium Hajj experience with upgraded accommodations and services for a comfortable and spiritual journey.',
    price: 9000,
    duration: '25 days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565019011521-b0575cbb57c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Premium economy flights',
      '4-star hotel accommodation',
      'Upgraded tent accommodation in Mina',
      'Air-conditioned transportation',
      'Buffet meals',
      'Experienced guides',
      'Ihram clothing and accessories',
      'Ziyarat tours'
    ],
    cities: ['Makkah (12 nights)', 'Madinah (7 nights)', 'Mina/Arafat/Muzdalifah (5 nights)'],
    type: 'hajj'
  },
  {
    id: 6,
    name: 'VIP Hajj Package',
    description: 'The ultimate Hajj experience with luxury accommodations, personalized service, and exclusive amenities.',
    price: 15000,
    duration: '28 days',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1604026290925-43e3eb1a4c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Business class flights',
      '5-star hotel accommodation near Haram',
      'Premium air-conditioned tents in Mina',
      'Private transportation',
      'Gourmet meals',
      'VIP access during rituals',
      'Personal guide and assistant',
      'Comprehensive medical insurance',
      'Luxury Ihram package',
      'Exclusive Ziyarat tours'
    ],
    cities: ['Makkah (15 nights)', 'Madinah (8 nights)', 'Mina/Arafat/Muzdalifah (5 nights)'],
    type: 'hajj'
  }
];

const Packages = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredPackages = filter === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.type === filter);
  
  return (
    <div>
      <Banner 
        image="https://images.unsplash.com/photo-1551041777-575d3855ca71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Perjalanan Ibadah yang Nyaman & Berkah"
        subtitle="Layanan Eksklusif untuk Ibadah yang Khusyuk"
        description="Kami menyediakan paket Haji & Umrah dengan fasilitas terbaik, bimbingan profesional, dan pengalaman spiritual yang mendalam."
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
              Our Packages
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer a range of packages to suit different preferences and budgets
            </motion.p>
            
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                All Packages
              </button>
              <button 
                onClick={() => setFilter('hajj')}
                className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'hajj' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Hajj Packages
              </button>
              <button 
                onClick={() => setFilter('umrah')}
                className={`px-6 py-2 rounded-md transition duration-300 ${filter === 'umrah' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                Umrah Packages
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div 
                key={pkg.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{pkg.name}</h3>
                    <span className="bg-accent text-white px-2 py-1 rounded text-sm">
                      ${pkg.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(pkg.rating) ? "text-yellow-400" : "text-gray-300"} />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">{pkg.rating} stars</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="text-primary mr-2" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaHotel className="text-primary mr-2" />
                      <span>{pkg.cities.join(' • ')}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.includes.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {item}
                        </li>
                      ))}
                      {pkg.includes.length > 3 && (
                        <li className="text-primary">+ {pkg.includes.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/package/${pkg.id}`}
                    className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-2 rounded-md transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Need a Custom Package?
                </motion.h2>
                <motion.p 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  We understand that every pilgrim has unique needs. Contact us to create a customized Hajj or Umrah package tailored to your specific requirements and preferences.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link 
                    to="/contact"
                    className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md transition duration-300"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;