import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name, image, rating, testimonial, date }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;