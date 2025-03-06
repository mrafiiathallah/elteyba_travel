import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import FlightBookingForm from '../components/FlightBookingForm';

const flights = [
  {
    id: 1,
    name: 'Economy Flight to Jeddah',
    price: 850,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3',
    airline: 'Saudi Airlines',
    flightNumber: 'SV123',
    from: 'Jakarta (CGK)',
    to: 'Jeddah (JED)',
    departure: '10:00',
    arrival: '16:30',
    duration: '6h 30m',
    type: 'Direct Flight',
    aircraft: 'Boeing 777-300ER',
    cabinClasses: ['Economy', 'Business', 'First'],
    amenities: ['Meals', 'Entertainment', 'WiFi', 'Power Outlets'],
    baggage: '2 x 23kg'
  }
];

const FlightBookingPage = () => {
  const { id } = useParams();
  const flightData = flights.find(flight => flight.id === parseInt(id));
  
  if (!flightData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Flight Not Found</h2>
          <p className="text-gray-600 mb-6">The flight you are trying to book does not exist.</p>
          <a 
            href="/flights"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
          >
            View All Flights
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <Banner 
        image={flightData.image}
        title={`Book ${flightData.name}`}
        subtitle="Complete your booking details to secure your flight"
      />
      
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FlightBookingForm 
            flightId={flightData.id}
            flightName={flightData.name}
            price={flightData.price}
            from={flightData.from}
            to={flightData.to}
            airline={flightData.airline}
            flightNumber={flightData.flightNumber}
          />
        </div>
      </section>
    </div>
  );
};

export default FlightBookingPage;