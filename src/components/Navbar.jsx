import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-gray-400 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Elteyba</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/elteyba_travel" 
              className={`nav-link text-white ${isActive('/elteyba_travel') ? 'active-nav-link font-medium' : ''}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/destinations" 
              className={`nav-link text-white ${isActive('/destinations') ? 'active-nav-link font-medium' : ''}`}
            >
              Destinations
            </NavLink>
            <NavLink 
              to="/packages" 
              className={`nav-link text-white ${isActive('/packages') ? 'active-nav-link font-medium' : ''}`}
            >
              Hajj & Umrah Packages
            </NavLink>
            {/* <NavLink 
              to="/pricing" 
              className={`nav-link text-white ${isActive('/pricing') ? 'active-nav-link font-medium' : ''}`}
            >
              Pricing
            </NavLink> */}
            <NavLink 
              to="/testimonials" 
              className={`nav-link text-white ${isActive('/testimonials') ? 'active-nav-link font-medium' : ''}`}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={`nav-link text-white ${isActive('/contact') ? 'active-nav-link font-medium' : ''}`}
            >
              Contact Us
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="text-white font-semibold hover:text-accent transform duration-300">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="border-transparent border-2 bg-accent hover:bg-transparent hover:text-accent hover:border-accent text-white font-semibold px-8 py-2 rounded-3xl transition duration-500"
            >
              Sign Up
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <NavLink 
              to="/elteyba_travel" 
              className={`block px-3 py-2 rounded-md ${isActive('/elteyba_travel') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/destinations" 
              className={`block px-3 py-2 rounded-md ${isActive('/destinations') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Destinations
            </NavLink>
            <NavLink 
              to="/packages" 
              className={`block px-3 py-2 rounded-md ${isActive('/packages') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Hajj & Umrah Packages
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={`block px-3 py-2 rounded-md ${isActive('/pricing') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/testimonials" 
              className={`block px-3 py-2 rounded-md ${isActive('/testimonials') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
            <NavLink 
              to="/contact" 
              className={`block px-3 py-2 rounded-md ${isActive('/contact') ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
            <div className="flex space-x-4 mt-4 px-3">
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-primary"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition duration-300"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;