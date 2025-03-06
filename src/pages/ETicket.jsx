import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import ETicketComponent from '../components/ETicket';

const ETicket = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData;

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Booking Information</h2>
          <p className="text-gray-600 mb-6">No booking information was found. Please try booking again.</p>
          <a 
            href="/packages"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
          >
            View Packages
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Banner 
        image="https://images.unsplash.com/photo-1558261537-8fcffa3479c7?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your E-Ticket"
        subtitle="Your journey details and travel information"
      />
      
      <div className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <ETicketComponent bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
};

export default ETicket;