import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaPassport, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const PackageBookingForm = ({ packageId, packageName, price }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Contact Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    
    // Package Details
    travelDate: '',
    adults: 1,
    children: 0,
    passportNumber: '',
    
    // Payment
    paymentMethod: 'credit-card'
  });
  
  const [step, setStep] = useState(1);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { 
      state: { 
        bookingData: {
          ...formData,
          packageId,
          packageName,
          price,
          bookingDate: new Date().toISOString(),
          bookingId: `BK${Math.floor(Math.random() * 1000000)}`,
          type: 'package'
        } 
      } 
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Package</h2>
      
      <div className="mb-8">
        <div className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-gray-300'} text-white font-bold`}>
            1
          </div>
          <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-gray-300'} text-white font-bold`}>
            2
          </div>
          <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-gray-300'} text-white font-bold`}>
            3
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>Personal Details</span>
          <span>Travel Information</span>
          <span>Payment</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Travel Date</label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Adults</label>
                <input
                  type="number"
                  name="adults"
                  min="1"
                  value={formData.adults}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Children</label>
                <input
                  type="number"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Passport Number</label>
              <div className="relative">
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <FaPassport className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md transition duration-300"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Package:</span>
                  <span className="font-medium">{packageName}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Travelers:</span>
                  <span className="font-medium">{formData.adults} Adults, {formData.children} Children</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Travel Date:</span>
                  <span className="font-medium">{formData.travelDate}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span>${price * (parseInt(formData.adults) + parseInt(formData.children) * 0.7)}</span>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={formData.paymentMethod === 'credit-card'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  PayPal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Bank Transfer
                </label>
              </div>
            </div>
            
            {formData.paymentMethod === 'credit-card' && (
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md transition duration-300"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-md transition duration-300"
              >
                Complete Booking
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PackageBookingForm;