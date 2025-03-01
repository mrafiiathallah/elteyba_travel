import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elteyba</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for Hajj and Umrah journeys. We provide exceptional travel experiences to the holy lands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition duration-300">Destinations</Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-white transition duration-300">Hajj & Umrah Packages</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition duration-300">Pricing</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition duration-300">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-accent" />
                <span className="text-gray-300">123 Travel Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-accent" />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-accent" />
                <span className="text-gray-300">info@elteyba.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 rounded-md focus:outline-none text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} HajjUmrah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;