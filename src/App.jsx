import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Packages from './pages/Packages';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BookingPage from './pages/BookingPage';
import PackageDetails from './pages/PackageDetails';
import FlightDetails from './pages/FlightDetails';
import HotelDetails from './pages/HotelDetails';
import Confirmation from './pages/Confirmation';
import FlightBookingPage from './pages/FlightBookingPage';
import ETicket from './pages/ETicket';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/elteyba_travel" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
          <Route path="/flight-booking/:id" element={<FlightBookingPage />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/e-ticket" element={<ETicket />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;