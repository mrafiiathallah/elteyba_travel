import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import PackageCard from '../components/PackageCard';

const popularPackages = [
  {
    id: 1,
    city: 'Makkah',
    packages: 5,
    image: 'https://s3-alpha-sig.figma.com/img/a892/fe3d/c9011f9d5d0a19e32e55dbb8bb902537?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYolX8bE69gQtwuqVmM1sDtfpMxGBwYF2NBk0zmEDXASxu0mlO5RJI2gNnWL-WR1PRCYE--OCh7626n2g1QxK~3DvbZQ8vEZNP4Kq-n1KQCCnLmOqs8zgets8zfwNaBRbzBwr0qSyHIjrGQzpRm4qcoRBtSow4wQcZ9ukqjm7o~LHRc1gHK3mXV1bzcJ3vGgSjYxbMGOpNgpVFoCjDHwZODFxVuT-mzYTSLqY16b78boJyiIJ6MM0C8mVYZTIHB5UzJk-7ZFvflp6JrLoZmTu9BrJ7R0-Cv1aBou75XGtAM~WkNsSqYeWpbRaoLwZ6-g9VXVUxMVCme9LmVQ3UrccA__'
  },
  {
    id: 2,
    city: 'Madinah',
    packages: 3,
    image: 'https://s3-alpha-sig.figma.com/img/c97b/7f45/d5d386a566ffac78c21d35fe1619e96b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JipO4fxpGTT8uOLH91QrAH9pv0GFq6m2IlUc7nVcdQ2l6YbxUO~YXTCZMIGIG5fzX34ldQh6Hf25YGrMejWHGbBRuy1XRXkdg2zEONs6sGHZXIYfWeHqTdC4JKQpr-3vEDqr2xB1yruZIHj5nBg9CT~ESpxd0DbCwQHNxolQJXhb0qQ9dsWjbJt1XsYGIHxRvz2Fis~IgSTgll5kvwQMxm4SDz2Elq6Mf76za5oYGNca8Dxe4KQaPZI97KSZQnU52pFDsWmpxIBBeyhgKCz2zBYpJKwQpRHvi54x2EAY2Ljb7aeSjisXTKBoNgIVfLXPTeR8Yna-VgambWI5g6wMtQ__'
  },
  {
    id: 3,
    city: 'Jeddah',
    packages: 2,
    image: 'https://s3-alpha-sig.figma.com/img/e2f3/e86b/7c11aa130dcbc7c154fbcedfda18b282?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=piNd4SbEwgr6RbFSYMKP3ME7waEt7eOn4TcHiuSSewDhZY~t-NfKHhZZuyP1ZWkOzgME83P7Uy0Adl6u15IIuc25U66v5lEeK9jbugNgc33wYE1bo2ORAvGu6QnBy~-~o9DMOFwQGDUIGWokwI~TwhuqB4QBqwrsIzH0VHMNGHoUZrnUtPI8hsDRdvGozahVU9OL~J3H33qdhL8pzc~TB3rKfWbiMA8oogkjsdAfVROQb0WAm7D4oE9kJjlh5rWbNto0oxKHWb8r1qz11ZY4qwgBnoiLT9gSFSiLK4s6a21iQsFXQFZS04cR7zaI1xQWaLiuYz2jSUInSHWEjvIJJw__'
  },
  {
    id: 4,
    city: 'Riyadh',
    packages: 4,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }
];

const features = [
  {
    title: 'Expert Guidance',
    description: 'Our experienced guides provide spiritual and practical support throughout your journey.',
    icon: '🧠'
  },
  {
    title: 'Comfortable Accommodation',
    description: 'Stay in high-quality hotels close to the holy sites for convenience and comfort.',
    icon: '🏨'
  },
  {
    title: 'All-Inclusive Packages',
    description: 'Our packages include flights, accommodation, meals, and transportation.',
    icon: '✈️'
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated team is available round the clock to assist you with any needs.',
    icon: '📞'
  }
];

const Home = () => {
  return (
    <div>
      <Banner 
        image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        title="Nikmati Tour Terbaik Bersama Kami"
        subtitle="Perjalanan ke Tanah Suci"
        description="Layanan Terbaik dan Pengalaman Tak Terlupakan"
      />
      
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Popular Destinations
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our most sought-after destinations for your spiritual journey
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard 
                  id={pkg.id}
                  image={pkg.image}
                  city={pkg.city}
                  packages={pkg.packages}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/packages"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide exceptional service to make your spiritual journey comfortable and memorable
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-light rounded-lg p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready for a Spiritual Journey?</h2>
              <p className="mb-8">
                Embark on a transformative journey to the holy lands with our expertly crafted Hajj and Umrah packages. Our team ensures a seamless and spiritually enriching experience.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/packages"
                  className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md transition duration-300"
                >
                  Explore Packages
                </Link>
                <Link 
                  to="/contact"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-80 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://s3-alpha-sig.figma.com/img/5afa/e533/9dec23d50df5f10581f16d6063c2e3c8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AEFqla~3uO5C85NQXB2336HxWQCOHYGW6jCo3C-ciLjutSfVak4h~gpku5fp9cc~BAiUk4bGWe8B13V1QqN01uJizzeEHWsnCFBvsTrcqAWqSjcZbW1scEgLZQ0TSxQW-7Hs9sjFdXuPqb~4OsY4dGKMejDZO8UfT1NP034Fpfaa93Tfms5HDWRLL2Oqulu-4hzFzv-isk1zu431iCgbkYnSgmkwnuP6u55EVdMBAQ1tEfuHCV5RA-vd3x~095qQwrBh1noC0E7bWvJ5r5c~0WIhprmdeW0Eu5pDyQKP6DfXIdfsmJx2GwsYwQOLN8NSGYxwDGOt2vx4h4Qv-8qyTQ__" 
                alt="Kaaba" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Testimonials
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What our pilgrims say about their experience with us
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Fauzan Kamil</h4>
                  <p className="text-gray-600 text-sm">Umrah Package</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The service was exceptional from start to finish. The accommodations were comfortable and conveniently located near the holy sites. The guides were knowledgeable and helpful."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">M Rafi Athallah</h4>
                  <p className="text-gray-600 text-sm">Hajj Package</p>
                </div>
              </div>
              <p className="text-gray-700">
                "My Hajj experience was truly life-changing, and HajjUmrah made it smooth and hassle-free. The attention to detail and spiritual guidance provided was invaluable."
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Wahyu Nata Mahendra</h4>
                  <p className="text-gray-600 text-sm">Family Umrah Package</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Traveling with my family for Umrah was made easy with HajjUmrah. The staff was accommodating to our needs, and the children were well taken care of. Highly recommended!"
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/testimonials"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;