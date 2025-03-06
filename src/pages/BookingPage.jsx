import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import PackageBookingForm from '../components/PackageBookingForm';

const packages = [
  {
    id: 1,
    name: 'Economy Umrah Package',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1604026290925-43e3eb1a4c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 2,
    name: 'Premium Umrah Package',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 3,
    name: 'Luxury Umrah Package',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 4,
    name: 'Standard Hajj Package',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 5,
    name: 'Premium Hajj Package',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1565019011521-b0575cbb57c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    id: 6,
    name: 'VIP Hajj Package',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1604026290925-43e3eb1a4c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }
];

const BookingPage = () => {
  const { id } = useParams();
  const packageData = packages.find(pkg => pkg.id === parseInt(id));
  
  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
          <p className="text-gray-600 mb-6">The package you are trying to book does not exist.</p>
          <a 
            href="/packages"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
          >
            View All Packages
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <Banner 
        image={packageData.image}
        title={`Book ${packageData.name}`}
        subtitle="Complete your booking details to secure your spiritual journey"
      />
      
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PackageBookingForm 
            packageId={packageData.id}
            packageName={packageData.name}
            price={packageData.price}
          />
        </div>
      </section>
    </div>
  );
};

export default BookingPage;