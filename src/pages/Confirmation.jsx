import {useLocation, Link} from "react-router-dom";
import Banner from "../components/Banner";
import {motion} from "framer-motion";
import {
    FaCheckCircle,
    FaPlane,
    FaHotel,
    FaCalendarAlt,
    FaUser,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPassport,
} from "react-icons/fa";

const Confirmation = () => {
    const location = useLocation();
    const bookingData = location.state?.bookingData;

    if (!bookingData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        No Booking Information
                    </h2>
                    <p className="text-gray-600 mb-6">
                        No booking information was found. Please try booking
                        again.
                    </p>
                    <Link
                        to="/packages"
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300">
                        View Packages
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div>
            <Banner
                image="https://images.unsplash.com/photo-1558261537-8fcffa3479c7?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Booking Confirmation"
                subtitle="Thank you for choosing us for your spiritual journey"
            />
            <div className="py-8 bg-gray-50 min-h-screen">
                <div className="max-w-3xl mx-auto px-4">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <div className="flex items-center justify-between border-b pb-4 mb-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {bookingData.type === "flight"
                                        ? `${bookingData.from} → ${bookingData.to}`
                                        : bookingData.packageName}
                                </h1>
                                <p className="text-gray-600">
                                    No. Pesanan {bookingData.bookingId}
                                </p>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center text-green-500 mb-2">
                                    <FaCheckCircle className="mr-2" />
                                    <span className="font-semibold">
                                        Pembelian Berhasil
                                    </span>
                                </div>
                                <p className="text-xl font-bold">
                                    ${" "}
                                    {(
                                        bookingData.price *
                                        (parseInt(bookingData.adults) +
                                            parseInt(bookingData.children) *
                                                0.7)
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-600">DIBELI</p>
                                <p className="font-medium">
                                    {formatDate(bookingData.bookingDate)}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-600">
                                    METODE PEMBAYARAN
                                </p>
                                <p className="font-medium">
                                    Kartu Kredit/Debit
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Detail Product */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">
                            Detail Produk
                        </h2>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                {bookingData.type === "flight" ? (
                                    <FaPlane className="text-4xl text-primary" />
                                ) : (
                                    <FaHotel className="text-4xl text-primary" />
                                )}
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-semibold text-lg">
                                    {bookingData.type === "flight"
                                        ? `${bookingData.from} → ${bookingData.to}`
                                        : bookingData.packageName}
                                </h3>
                                <div className="text-gray-600">
                                    {bookingData.type === "flight" && (
                                        <>
                                            <p>
                                                {bookingData.airline} •{" "}
                                                {bookingData.flightNumber}
                                            </p>
                                            <div className="mt-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                                E-tiket Telah Terbit
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <Link
                                    to="/e-ticket"
                                    state={{bookingData}}
                                    className="text-primary hover:text-primary/80">
                                    Lihat E-Ticket
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Support */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center space-x-3 text-gray-700">
                            <FaPhone className="text-xl" />
                            <div>
                                <h3 className="font-semibold">Hubungi kami</h3>
                                <p className="text-sm text-gray-600">
                                    Untuk bantuan, hubungi customer service
                                    kami. Informasikan no. pesanan{" "}
                                    {bookingData.bookingId} saat menghubungi
                                    kami.
                                </p>
                                <Link
                                    to="/contact"
                                    className="text-primary hover:text-primary/80 text-sm font-medium">
                                    Hubungi kami
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            to="/"
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300">
                            Return to Home
                        </Link>
                        <button
                            onClick={() => window.print()}
                            className="bg-white border border-primary text-primary hover:bg-gray-50 px-6 py-3 rounded-md transition duration-300">
                            Print Confirmation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
