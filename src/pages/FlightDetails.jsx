import {useParams, Link} from "react-router-dom";
import Banner from "../components/Banner";
import {motion} from "framer-motion";
import {
    FaPlane,
    FaClock,
    FaSuitcase,
    FaUtensils,
    FaWifi,
    FaTicketAlt,
} from "react-icons/fa";

const flights = [
    {
        id: 1,
        airline: "Saudi Airlines",
        flightNumber: "SV123",
        from: "Jakarta (CGK)",
        to: "Jeddah (JED)",
        departure: "10:00",
        arrival: "16:30",
        duration: "6h 30m",
        price: 850,
        type: "Direct Flight",
        aircraft: "Boeing 777-300ER",
        cabinClasses: ["Economy", "Business", "First"],
        amenities: ["Meals", "Entertainment", "WiFi", "Power Outlets"],
        baggage: "2 x 23kg",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3",
    },
];

const FlightDetails = () => {
    const {id} = useParams();
    const flight = flights.find((f) => f.id === parseInt(id));

    if (!flight) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Flight Not Found
                    </h2>
                    <p className="text-gray-600 mb-6">
                        The flight you are looking for does not exist.
                    </p>
                    <Link
                        to="/flights"
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300">
                        View All Flights
                    </Link>
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
            <div className="py-16 bg-light min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <motion.div
                                className="bg-white rounded-2xl shadow-md p-6 mb-8"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}>
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-800">
                                            {flight.airline}
                                        </h1>
                                        <p className="text-gray-600">
                                            Flight {flight.flightNumber}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-bold text-primary">
                                            ${flight.price}
                                        </p>
                                        <p className="text-gray-600">
                                            per person
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold">
                                            {flight.departure}
                                        </p>
                                        <p className="text-gray-600">
                                            {flight.from}
                                        </p>
                                    </div>
                                    <div className="flex-1 px-8">
                                        <div className="relative">
                                            <div className="h-1 bg-primary"></div>
                                            <div className="absolute top-1/2 left-0 -translate-y-1/2">
                                                <FaPlane className="text-primary transform -rotate-90" />
                                            </div>
                                            <div className="absolute top-1/2 right-0 -translate-y-1/2">
                                                <FaPlane className="text-primary transform rotate-90" />
                                            </div>
                                        </div>
                                        <p className="text-center text-gray-600 mt-2">
                                            {flight.duration}
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold">
                                            {flight.arrival}
                                        </p>
                                        <p className="text-gray-600">
                                            {flight.to}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <FaPlane className="text-primary mr-2" />
                                        <span>{flight.type}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaClock className="text-primary mr-2" />
                                        <span>{flight.duration}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaSuitcase className="text-primary mr-2" />
                                        <span>{flight.baggage}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaTicketAlt className="text-primary mr-2" />
                                        <span>{flight.aircraft}</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <h2 className="text-xl font-semibold mb-4">
                                        Amenities
                                    </h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {flight.amenities.map(
                                            (amenity, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center">
                                                    {amenity === "Meals" && (
                                                        <FaUtensils className="text-primary mr-2" />
                                                    )}
                                                    {amenity === "WiFi" && (
                                                        <FaWifi className="text-primary mr-2" />
                                                    )}
                                                    <span>{amenity}</span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="bg-white rounded-2xl shadow-md p-6"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.2}}>
                                <h2 className="text-xl font-semibold mb-4">
                                    Fare Conditions
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Cancellation
                                        </h3>
                                        <p className="text-gray-600">
                                            Cancellation charges apply. Free
                                            cancellation within 24 hours of
                                            booking.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Changes
                                        </h3>
                                        <p className="text-gray-600">
                                            Date changes allowed with fee. Route
                                            changes not permitted.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            Baggage
                                        </h3>
                                        <p className="text-gray-600">
                                            2 pieces of checked baggage (23kg
                                            each) included.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="lg:col-span-1"
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}>
                            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                                <h2 className="text-xl font-semibold mb-4">
                                    Price Summary
                                </h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span>Base Fare</span>
                                        <span>${flight.price}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Taxes & Fees</span>
                                        <span>$120</span>
                                    </div>
                                    <div className="flex justify-between font-semibold text-lg border-t pt-3">
                                        <span>Total</span>
                                        <span>${flight.price + 120}</span>
                                    </div>
                                </div>

                                <Link
                                    to={`/flight-booking/${flight.id}`}
                                    className="w-full border-transparent border-2 bg-accent hover:text-accent hover:border-accent text-white hover:bg-transparent font-semibold py-3 rounded-3xl transition duration-300 mb-4 block text-center">
                                    Book Now
                                </Link>

                                <div className="text-center text-sm text-gray-600">
                                    <p>Need help? Contact our support team</p>
                                    <a
                                        href="tel:+12345678901"
                                        className="text-primary hover:text-primary/80">
                                        +1 234 567 8901
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;
