import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PackageCard = ({ id, image, city, packages }) => {
  return (
    <motion.div 
      className="package-card bg-white rounded-2xl overflow-hidden shadow-md"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/package/${id}`}>
        <img 
          src={image} 
          alt={city} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
          <p className="text-gray-600 flex items-center gap-2"> <i className='bx bx-briefcase text-xl text-cyan-500'></i> {packages} Packages</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default PackageCard;