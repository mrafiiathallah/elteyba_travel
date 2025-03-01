import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Fauzan Kamil',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    testimonial: 'The service was exceptional from start to finish. The accommodations were comfortable and conveniently located near the holy sites. The guides were knowledgeable and helpful throughout our journey.',
    date: 'March 2023',
    package: 'Premium Umrah Package'
  },
  {
    id: 2,
    name: 'M Rafi Athallah',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 5,
    testimonial: 'My Hajj experience was truly life-changing, and HajjUmrah made it smooth and hassle-free. The attention to detail and spiritual guidance provided was invaluable. I highly recommend their services to anyone planning their pilgrimage.',
    date: 'August 2023',
    package: 'Premium Hajj Package'
  },
  {
    id: 3,
    name: 'Wahyu Nata Mahendra',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4,
    testimonial: 'Traveling with my family for Umrah was made easy with HajjUmrah. The staff was accommodating to our needs, and the children were well taken care of. The hotels were clean and comfortable, and the transportation was always on time.',
    date: 'December 2023',
    package: 'Economy Umrah Package'
  },
  {
    id: 4,
    name: 'Ramhaidar',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    rating: 5,
    testimonial: 'The VIP Hajj package exceeded my expectations. The proximity of our accommodation to the Haram made the experience so much more convenient. The guides were knowledgeable and patient, making sure we understood the significance of each ritual.',
    date: 'July 2023',
    package: 'VIP Hajj Package'
  },
  {
    id: 5,
    name: 'Yusuf Ahmed',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    rating: 4,
    testimonial: 'As a first-time visitor to the holy cities, I was nervous about the journey. The team at HajjUmrah made me feel comfortable and guided me through every step. The package was well-organized and worth every penny.',
    date: 'February 2023',
    package: 'Economy Umrah Package'
  },
  {
    id: 6,
    name: 'Zainab Hussein',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    rating: 5,
    testimonial: 'The luxury Umrah package was a wonderful experience. The 5-star accommodations, private transportation, and personalized service made our spiritual journey comfortable and memorable. I will definitely use HajjUmrah for my future travels.',
    date: 'April 2023',
    package: 'Luxury Umrah Package'
  },
  {
    id: 7,
    name: 'Ibrahim Khan',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    rating: 4,
    testimonial: 'The standard Hajj package provided excellent value for money. All the essentials were covered, and the guides were very knowledgeable. The only improvement could be in the meal variety, but overall, it was a great experience.',
    date: 'August 2023',
    package: 'Standard Hajj Package'
  },
  {
    id: 8,
    name: 'Layla Mohammed',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    rating: 5,
    testimonial: 'I traveled with my elderly parents, and the staff was incredibly accommodating to their needs. The wheelchair assistance and special arrangements made the journey comfortable for them. The spiritual guidance provided by the scholars was enlightening.',
    date: 'November 2023',
    package: 'Premium Umrah Package'
  },
  {
    id: 9,
    name: 'Omar Siddiqui',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
    rating: 5,
    testimonial: 'The attention to detail in the VIP package was impressive. From the moment we landed until our departure, everything was meticulously planned. The private transportation and premium accommodations made the experience truly special.',
    date: 'June 2023',
    package: 'VIP Hajj Package'
  }
];

const Testimonials = () => {
  return (
    <div>
      <Banner 
        image="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        title="Pilgrim Testimonials"
        subtitle="Hear from those who have journeyed with us"
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
              What Our Pilgrims Say
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Read about the experiences of those who have traveled with us for Hajj and Umrah
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  date={testimonial.date}
                />
                <p className="mt-2 text-center text-sm text-gray-500">
                  {testimonial.package}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Share Your Experience
                </motion.h2>
                <motion.p 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Have you traveled with us? We'd love to hear about your experience. Share your testimonial and help future pilgrims make informed decisions about their spiritual journey.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a 
                    href="#"
                    className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md transition duration-300"
                  >
                    Submit Your Testimonial
                  </a>
                </motion.div>
              </div>
              <div className="md:w-1/2 bg-cover bg-center h-64 md:h-auto" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/5afa/e533/9dec23d50df5f10581f16d6063c2e3c8?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AEFqla~3uO5C85NQXB2336HxWQCOHYGW6jCo3C-ciLjutSfVak4h~gpku5fp9cc~BAiUk4bGWe8B13V1QqN01uJizzeEHWsnCFBvsTrcqAWqSjcZbW1scEgLZQ0TSxQW-7Hs9sjFdXuPqb~4OsY4dGKMejDZO8UfT1NP034Fpfaa93Tfms5HDWRLL2Oqulu-4hzFzv-isk1zu431iCgbkYnSgmkwnuP6u55EVdMBAQ1tEfuHCV5RA-vd3x~095qQwrBh1noC0E7bWvJ5r5c~0WIhprmdeW0Eu5pDyQKP6DfXIdfsmJx2GwsYwQOLN8NSGYxwDGOt2vx4h4Qv-8qyTQ__')" }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;