import Banner from '../components/Banner';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 1,
    name: 'Makkah',
    description: 'The holiest city in Islam and the birthplace of Prophet Muhammad (PBUH). Home to the Kaaba, the most sacred site in Islam.',
    image: 'https://s3-alpha-sig.figma.com/img/a892/fe3d/c9011f9d5d0a19e32e55dbb8bb902537?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aYolX8bE69gQtwuqVmM1sDtfpMxGBwYF2NBk0zmEDXASxu0mlO5RJI2gNnWL-WR1PRCYE--OCh7626n2g1QxK~3DvbZQ8vEZNP4Kq-n1KQCCnLmOqs8zgets8zfwNaBRbzBwr0qSyHIjrGQzpRm4qcoRBtSow4wQcZ9ukqjm7o~LHRc1gHK3mXV1bzcJ3vGgSjYxbMGOpNgpVFoCjDHwZODFxVuT-mzYTSLqY16b78boJyiIJ6MM0C8mVYZTIHB5UzJk-7ZFvflp6JrLoZmTu9BrJ7R0-Cv1aBou75XGtAM~WkNsSqYeWpbRaoLwZ6-g9VXVUxMVCme9LmVQ3UrccA__',
    highlights: [
      'The Grand Mosque (Masjid al-Haram)',
      'The Kaaba',
      'Mount Arafat',
      'Mina',
      'Muzdalifah',
      'Jabal al-Nour (Mountain of Light)'
    ]
  },
  {
    id: 2,
    name: 'Madinah',
    description: 'The second holiest city in Islam, where Prophet Muhammad (PBUH) established the first Islamic community and is buried.',
    image: 'https://s3-alpha-sig.figma.com/img/c97b/7f45/d5d386a566ffac78c21d35fe1619e96b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JipO4fxpGTT8uOLH91QrAH9pv0GFq6m2IlUc7nVcdQ2l6YbxUO~YXTCZMIGIG5fzX34ldQh6Hf25YGrMejWHGbBRuy1XRXkdg2zEONs6sGHZXIYfWeHqTdC4JKQpr-3vEDqr2xB1yruZIHj5nBg9CT~ESpxd0DbCwQHNxolQJXhb0qQ9dsWjbJt1XsYGIHxRvz2Fis~IgSTgll5kvwQMxm4SDz2Elq6Mf76za5oYGNca8Dxe4KQaPZI97KSZQnU52pFDsWmpxIBBeyhgKCz2zBYpJKwQpRHvi54x2EAY2Ljb7aeSjisXTKBoNgIVfLXPTeR8Yna-VgambWI5g6wMtQ__',
    highlights: [
      'The Prophet\'s Mosque (Masjid an-Nabawi)',
      'Quba Mosque',
      'Jannat al-Baqi Cemetery',
      'Mount Uhud',
      'Qiblatain Mosque',
      'The Seven Mosques'
    ]
  },
  {
    id: 3,
    name: 'Jeddah',
    description: 'A major port city and commercial hub on the Red Sea, often the gateway for pilgrims arriving for Hajj and Umrah.',
    image: 'https://s3-alpha-sig.figma.com/img/e2f3/e86b/7c11aa130dcbc7c154fbcedfda18b282?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=piNd4SbEwgr6RbFSYMKP3ME7waEt7eOn4TcHiuSSewDhZY~t-NfKHhZZuyP1ZWkOzgME83P7Uy0Adl6u15IIuc25U66v5lEeK9jbugNgc33wYE1bo2ORAvGu6QnBy~-~o9DMOFwQGDUIGWokwI~TwhuqB4QBqwrsIzH0VHMNGHoUZrnUtPI8hsDRdvGozahVU9OL~J3H33qdhL8pzc~TB3rKfWbiMA8oogkjsdAfVROQb0WAm7D4oE9kJjlh5rWbNto0oxKHWb8r1qz11ZY4qwgBnoiLT9gSFSiLK4s6a21iQsFXQFZS04cR7zaI1xQWaLiuYz2jSUInSHWEjvIJJw__',
    highlights: [
      'King Fahd Fountain',
      'Al-Balad (Historic District)',
      'Jeddah Corniche',
      'Floating Mosque',
      'Red Sea Mall',
      'King Abdulaziz International Airport'
    ]
  },
  {
    id: 4,
    name: 'Riyadh',
    description: 'The capital and largest city of Saudi Arabia, blending modern architecture with historical sites.',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    highlights: [
      'Kingdom Centre Tower',
      'Masmak Fortress',
      'National Museum of Saudi Arabia',
      'Diriyah',
      'Al Rajhi Grand Mosque',
      'Edge of the World'
    ]
  }
];

const Destinations = () => {
  return (
    <div>
      <Banner 
        image="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Jelajahi Destinasi Impian Anda"
        subtitle="Temukan Keindahan di Setiap Langkah"
        description=" Dari tempat-tempat suci hingga lokasi eksotis, kami menghadirkan pengalaman perjalanan yang tak terlupakan dengan layanan terbaik untuk kenyamanan Anda."
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
              Our Destinations
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore the sacred cities and historical sites that are part of our Hajj and Umrah packages
            </motion.p>
          </div>
          
          <div className="space-y-16">
            {destinations.map((destination, index) => (
              <motion.div 
                key={destination.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-80 object-cover rounded-3xl shadow-md"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{destination.name}</h3>
                  <p className="text-gray-600 mb-6">{destination.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-accent mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Begin Your Spiritual Journey?
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our Hajj and Umrah packages and start planning your pilgrimage today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/packages" 
                className="inline-block font-semibold rounded-2xl border-2 border-transparent bg-white text-primary hover:bg-primary hover:text-white hover:border-white px-8 py-3 transition duration-300"
              >
                View Packages
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;