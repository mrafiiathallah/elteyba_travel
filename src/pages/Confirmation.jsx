import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import ETicket from '../components/ETicket';

const Confirmation = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData;
  
  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Booking Information</h2>
          <p className="text-gray-600 mb-6">No booking information was found. Please try booking again.</p>
          <Link 
            to="/packages"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
          >
            View Packages
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-16 bg-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <FaCheckCircle className="text-green-500 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for booking with us. Your {bookingData.packageName} has been confirmed.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ETicket bookingData={bookingData} />
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">What's Next?</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>A confirmation email has been sent to {bookingData.email} with your booking details.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Our team will contact you within 24-48 hours to confirm your booking and provide additional information.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Please keep your e-ticket handy for reference. You can download or print it for your records.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>If you have any questions or need to make changes to your booking, please contact our customer service team.</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300 mr-4"
          >
            Return to Home
          </Link>
          <Link 
            to="/contact"
            className="inline-block bg-white border border-primary text-primary hover:bg-gray-50 px-6 py-3 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Confirmation;