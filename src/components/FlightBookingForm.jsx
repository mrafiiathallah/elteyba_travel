import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlane, FaUser, FaPassport, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FlightBookingForm = ({ flightId, flightName, price, from, to, airline, flightNumber }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Booking Data
    bookingType: 'flight',
    travelDate: '',
    adults: 1,
    children: 0,
    infants: 0,
    cabinClass: 'economy',
    
    // Contact Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    
    // Traveler Details (will be populated based on number of travelers)
    travelers: [{
      title: 'Mr',
      firstName: '',
      lastName: '',
      nationality: '',
      passportNumber: '',
      dateOfBirth: '',
      type: 'adult'
    }],
    
    // Payment
    paymentMethod: 'credit-card'
  });
  
  const [step, setStep] = useState(1);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'adults' || name === 'children' || name === 'infants') {
      const newValue = parseInt(value) || 0;
      const newFormData = { ...formData, [name]: newValue };
      
      // Calculate total travelers
      const totalTravelers = 
        (name === 'adults' ? newValue : formData.adults) +
        (name === 'children' ? newValue : formData.children) +
        (name === 'infants' ? newValue : formData.infants);
      
      // Create new travelers array with correct types
      const newTravelers = Array.from({ length: totalTravelers }, (_, index) => {
        let type = 'adult';
        if (index >= newFormData.adults) {
          if (index >= newFormData.adults + newFormData.children) {
            type = 'infant';
          } else {
            type = 'child';
          }
        }
        
        // Preserve existing traveler data if available
        return formData.travelers[index] || {
          title: 'Mr',
          firstName: '',
          lastName: '',
          nationality: '',
          passportNumber: '',
          dateOfBirth: '',
          type
        };
      });
      
      setFormData({ ...newFormData, travelers: newTravelers });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleTravelerChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      travelers: prev.travelers.map((traveler, i) => 
        i === index ? { ...traveler, [field]: value } : traveler
      )
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
          flightId,
          flightName,
          price,
          from,
          to,
          airline,
          flightNumber,
          bookingDate: new Date().toISOString(),
          bookingId: `FL${Math.floor(Math.random() * 1000000)}`,
          type: 'flight'
        } 
      } 
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Book Your Flight</h2>
      
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
          <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 4 ? 'bg-primary' : 'bg-gray-300'} text-white font-bold`}>
            4
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span>Booking Data</span>
          <span>Flight Details</span>
          <span>Traveler Details</span>
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
            
            <div className="relative">
              <label className="block text-gray-700 mb-1">Passengers</label>
              <button
                type="button"
                onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                className="w-full pl-10 pr-4 py-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                {formData.adults + formData.children + formData.infants} Passenger(s)
              </button>
              <FaUser className="absolute left-3 top-[40px] text-gray-400" />
              
              {showPassengerDropdown && (
                <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Dewasa</p>
                        <p className="text-sm text-gray-500">12 thn atau lebih</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleChange({ target: { name: 'adults', value: Math.max(1, formData.adults - 1) } })}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{formData.adults}</span>
                        <button
                          type="button"
                          onClick={() => handleChange({ target: { name: 'adults', value: formData.adults + 1 } })}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Anak</p>
                        <p className="text-sm text-gray-500">2 - 11 thn</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleChange({ target: { name: 'children', value: Math.max(0, formData.children - 1) } })}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{formData.children}</span>
                        <button
                          type="button"
                          onClick={() => handleChange({ target: { name: 'children', value: formData.children + 1 } })}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Bayi</p>
                        <p className="text-sm text-gray-500">Di bawah 2 tahun</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleChange({ target: { name: 'infants', value: Math.max(0, formData.infants - 1) } })}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{formData.infants}</span>
                        <button
                          type="button"
                          onClick={() => handleChange({ target: { name: 'infants', value: formData.infants + 1 } })}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setShowPassengerDropdown(false)}
                      className="w-full bg-primary text-white py-2 rounded-md mt-4"
                    >
                      Selesai
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Cabin Class</label>
              <select
                name="cabinClass"
                value={formData.cabinClass}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="economy">Economy</option>
                <option value="premium">Premium Economy</option>
                <option value="business">Business</option>
                <option value="first">First Class</option>
              </select>
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
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Traveler Details</h3>
            {formData.travelers.map((traveler, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-4">
                <h4 className="font-medium text-gray-700">
                  Traveler {index + 1} ({traveler.type.charAt(0).toUpperCase() + traveler.type.slice(1)})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Title</label>
                    <select
                      value={traveler.title}
                      onChange={(e) => handleTravelerChange(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      value={traveler.firstName}
                      onChange={(e) => handleTravelerChange(index, 'firstName', e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={traveler.lastName}
                      onChange={(e) => handleTravelerChange(index, 'lastName', e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Nationality</label>
                    <input
                      type="text"
                      value={traveler.nationality}
                      onChange={(e) => handleTravelerChange(index, 'nationality', e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Passport Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={traveler.passportNumber}
                        onChange={(e) => handleTravelerChange(index, 'passportNumber', e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <FaPassport className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      value={traveler.dateOfBirth}
                      onChange={(e) => handleTravelerChange(index, 'dateOfBirth', e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            
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
        
        {step === 4 && (
          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Flight:</span>
                  <span className="font-medium">{flightName}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Travelers:</span>
                  <span className="font-medium">
                    {formData.adults} Adults, {formData.children} Children, {formData.infants} Infants
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Travel Date:</span>
                  <span className="font-medium">{formData.travelDate}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Cabin Class:</span>
                  <span className="font-medium">{formData.cabinClass}</span>
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

export default FlightBookingForm;