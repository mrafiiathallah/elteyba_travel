import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaCalendarAlt, FaHotel, FaUtensils, FaPlane, FaBus, FaCheck } from 'react-icons/fa';

const packages = [
  {
    id: 1,
    name: 'Economy Umrah Package',
    description: 'A budget-friendly package for those seeking a simple and spiritual Umrah experience.',
    longDescription: 'Our Economy Umrah Package is designed for pilgrims who want to perform Umrah without spending too much. Despite being our most affordable option, we ensure that all essential services are provided to make your spiritual journey comfortable and fulfilling. This package includes economy class flights, accommodation in 3-star hotels, transportation between cities, guided Umrah, and daily breakfast.',
    price: 1200,
    duration: '10 days',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1604026290925-43e3eb1a4c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Economy class flights',
      '3-star hotel accommodation',
      'Transportation between cities',
      'Guided Umrah',
      'Daily breakfast'
    ],
    excludes: [
      'Lunch and dinner',
      'Personal expenses',
      'Optional tours',
      'Travel insurance',
      'Visa processing fees'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and transfer you to your hotel in Makkah. Rest and prepare for Umrah.'
      },
      {
        day: 2,
        title: 'Umrah',
        description: 'After Fajr prayer, our guide will accompany you to perform Umrah. The guide will explain the rituals and help you complete them correctly.'
      },
      {
        day: 3,
        title: 'Makkah Exploration',
        description: 'Free day to pray at Masjid al-Haram and explore the holy city of Makkah.'
      },
      {
        day: 4,
        title: 'Makkah Ziyarat',
        description: 'Optional visit to historical sites in Makkah, including Jabal al-Nour, Jabal Thawr, and Hudaybiyyah.'
      },
      {
        day: 5,
        title: 'Makkah to Madinah',
        description: 'After Fajr prayer, check out from your hotel and travel to Madinah by bus. Check in to your hotel in Madinah and rest.'
      },
      {
        day: 6,
        title: 'Masjid Nabawi',
        description: 'Visit Masjid Nabawi (Prophet\'s Mosque) and pray in Riyadh al-Jannah. Visit the Rawdah and send salutations to Prophet Muhammad (PBUH).'
      },
      {
        day: 7,
        title: 'Madinah Ziyarat',
        description: 'Visit historical sites in Madinah, including Quba Mosque, Qiblatain Mosque, and Mount Uhud.'
      },
      {
        day: 8,
        title: 'Free Day in Madinah',
        description: 'Free day to pray at Masjid Nabawi and explore the holy city of Madinah.'
      },
      {
        day: 9,
        title: 'Madinah to Jeddah',
        description: 'After Fajr prayer, check out from your hotel and travel back to Jeddah. Check in to your hotel in Jeddah and rest.'
      },
      {
        day: 10,
        title: 'Departure',
        description: 'Check out from your hotel and transfer to King Abdulaziz International Airport for your return flight.'
      }
    ],
    cities: ['Makkah (5 nights)', 'Madinah (4 nights)'],
    type: 'umrah',
    reviews: [
      {
        name: 'Fauzan Kamil',
        rating: 4,
        comment: 'Great package for the price. The hotels were clean and conveniently located. The guide was knowledgeable and helpful.',
        date: 'March 2023'
      },
      {
        name: 'M Rafi Athallah',
        rating: 5,
        comment: 'Excellent service from start to finish. The staff was very accommodating and made our Umrah journey smooth and comfortable.',
        date: 'January 2023'
      },
      {
        name: 'Wahyu Nata Mahendra',
        rating: 4,
        comment: 'Good value for money. The accommodation was decent, and the transportation was always on time. Would recommend for budget travelers.',
        date: 'December 2022'
      }
    ]
  },
  {
    id: 2,
    name: 'Premium Umrah Package',
    description: 'A premium package offering comfortable accommodations and comprehensive services for a fulfilling Umrah journey.',
    longDescription: 'Our Premium Umrah Package is designed for pilgrims who want a more comfortable and comprehensive Umrah experience. This package includes premium economy flights, accommodation in 4-star hotels close to the Haram, private transportation, guided Umrah, full board meals, and visits to historical sites in Makkah and Madinah. Our experienced guides will provide spiritual and practical support throughout your journey.',
    price: 2500,
    duration: '14 days',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Premium economy flights',
      '4-star hotel accommodation',
      'Private transportation',
      'Guided Umrah',
      'Full board meals',
      'Ziyarat (visits to historical sites)'
    ],
    excludes: [
      'Personal expenses',
      'Optional tours',
      'Travel insurance',
      'Visa processing fees'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and transfer you to your hotel in Makkah. Rest and prepare for Umrah.'
      },
      {
        day: 2,
        title: 'Umrah',
        description: 'After Fajr prayer, our guide will accompany you to perform Umrah. The guide will explain the rituals and help you complete them correctly.'
      },
      {
        day: 3,
        title: 'Makkah Exploration',
        description: 'Free day to pray at Masjid al-Haram and explore the holy city of Makkah.'
      },
      {
        day: 4,
        title: 'Makkah Ziyarat',
        description: 'Visit historical sites in Makkah, including Jabal al-Nour, Jabal Thawr, and Hudaybiyyah.'
      },
      {
        day: 5,
        title: 'Free Day in Makkah',
        description: 'Free day to pray at Masjid al-Haram and perform additional Umrah if desired.'
      },
      {
        day: 6,
        title: 'Makkah Exploration',
        description: 'Continue exploring Makkah and pray at Masjid al-Haram.'
      },
      {
        day: 7,
        title: 'Makkah to Madinah',
        description: 'After Fajr prayer, check out from your hotel and travel to Madinah by private vehicle. Check in to your hotel in Madinah and rest.'
      },
      {
        day: 8,
        title: 'Masjid Nabawi',
        description: 'Visit Masjid Nabawi (Prophet\'s Mosque) and pray in Riyadh al-Jannah. Visit the Rawdah and send salutations to Prophet Muhammad (PBUH).'
      },
      {
        day: 9,
        title: 'Madinah Ziyarat',
        description: 'Visit historical sites in Madinah, including Quba Mosque, Qiblatain Mosque, and Mount Uhud.'
      },
      {
        day: 10,
        title: 'Free Day in Madinah',
        description: 'Free day to pray at Masjid Nabawi and explore the holy city of Madinah.'
      },
      {
        day: 11,
        title: 'Madinah Exploration',
        description: 'Continue exploring Madinah and pray at Masjid Nabawi.'
      },
      {
        day: 12,
        title: 'Free Day in Madinah',
        description: 'Free day to pray at Masjid Nabawi and explore the holy city of Madinah.'
      },
      {
        day: 13,
        title: 'Madinah to Jeddah',
        description: 'After Fajr prayer, check out from your hotel and travel back to Jeddah. Check in to your hotel in Jeddah and rest.'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Check out from your hotel and transfer to King Abdulaziz International Airport for your return flight.'
      }
    ],
    cities: ['Makkah (7 nights)', 'Madinah (6 nights)'],
    type: 'umrah',
    reviews: [
      {
        name: 'Fauzan Kamil',
        rating: 5,
        comment: 'Excellent package! The 4-star hotels were very comfortable and close to the Haram. The private transportation made our journey smooth, and the guides were knowledgeable and helpful.',
        date: 'February 2023'
      },
      {
        name: 'M Rafi Athallah',
        rating: 4,
        comment: 'Great experience overall. The accommodation was comfortable, and the full board meals were good. The only improvement could be more variety in the food.',
        date: 'April 2023'
      },
      {
        name: 'Wahyu Nata Mahendra',
        rating: 5,
        comment: 'Highly recommend this package. The service was exceptional, and the guides provided valuable insights about the historical sites. The hotels were clean and well-located.',
        date: 'March 2023'
      }
    ]
  },
  {
    id: 3,
    name: 'Luxury Umrah Package',
    description: 'Experience Umrah in luxury with premium accommodations, personalized service, and exclusive amenities.',
    longDescription: 'Our Luxury Umrah Package offers the ultimate Umrah experience with top-tier accommodations and personalized service. This package includes business class flights, accommodation in 5-star hotels near the Haram, VIP transportation, private guided Umrah, full board gourmet meals, comprehensive Ziyarat, and a dedicated group leader. Every aspect of your journey is carefully planned to ensure a comfortable and spiritually enriching experience.',
    price: 4000,
    duration: '14 days',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Business class flights',
      '5-star hotel accommodation near Haram',
      'VIP transportation',
      'Private guided Umrah',
      'Full board gourmet meals',
      'Comprehensive Ziyarat',
      'Dedicated group leader'
    ],
    excludes: [
      'Personal expenses',
      'Optional tours',
      'Visa processing fees'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport in Jeddah. Our VIP representative will meet you and transfer you to your 5-star hotel in Makkah. Rest and prepare for Umrah.'
      },
      {
        day: 2,
        title: 'Umrah',
        description: 'After Fajr prayer, our private guide will accompany you to perform Umrah. The guide will explain the rituals and help you complete them correctly.'
      },
      {
        day: 3,
        title: 'Makkah Exploration',
        description: 'Free day to pray at Masjid al-Haram and explore the holy city of Makkah.'
      },
      {
        day: 4,
        title: 'Makkah Ziyarat',
        description: 'Private tour of historical sites in Makkah, including Jabal al-Nour, Jabal Thawr, and Hudaybiyyah.'
      },
      {
        day: 5,
        title: 'Free Day in Makkah',
        description: 'Free day to pray at Masjid al-Haram and perform additional Umrah if desired.'
      },
      {
        day: 6,
        title: 'Makkah Exploration',
        description: 'Continue exploring Makkah and pray at Masjid al-Haram.'
      },
      {
        day: 7,
        title: 'Free Day in Makkah',
        description: 'Free day to pray at Masjid al-Haram and reflect on your spiritual journey.'
      },
      {
        day: 8,
        title: 'Makkah to Madinah',
        description: 'After Fajr prayer, check out from your hotel and travel to Madinah by luxury vehicle. Check in to your 5-star hotel in Madinah and rest.'
      },
      {
        day: 9,
        title: 'Masjid Nabawi',
        description: 'Visit Masjid Nabawi (Prophet\'s Mosque) and pray in Riyadh al-Jannah. Visit the Rawdah and send salutations to Prophet Muhammad (PBUH).'
      },
      {
        day: 10,
        title: 'Madinah Ziyarat',
        description: 'Private tour of historical sites in Madinah, including Quba Mosque, Qiblatain Mosque, and Mount Uhud.'
      },
      {
        day: 11,
        title: 'Free Day in Madinah',
        description: 'Free day to pray at Masjid Nabawi and explore the holy city of Madinah.'
      },
      {
        day: 12,
        title: 'Madinah Exploration',
        description: 'Continue exploring Madinah and pray at Masjid Nabawi.'
      },
      {
        day: 13,
        title: 'Madinah to Jeddah',
        description: 'After Fajr prayer, check out from your hotel and travel back to Jeddah. Check in to your luxury hotel in Jeddah and rest.'
      },
      {
        day: 14,
        title: 'Departure',
        description: 'Check out from your hotel and transfer to King Abdulaziz International Airport for your return flight.'
      }
    ],
    cities: ['Makkah (8 nights)', 'Madinah (5 nights)'],
    type: 'umrah',
    reviews: [
      {
        name: 'Fauzan Kamil',
        rating: 5,
        comment: 'The luxury package was worth every penny. The 5-star hotels were exceptional, and the VIP transportation made our journey comfortable. The private guide was knowledgeable and attentive to our needs.',
        date: 'April 2023'
      },
      {
        name: 'M Rafi Athallah',
        rating: 5,
        comment: 'Exceptional service from start to finish. The business class flights, luxury accommodations, and gourmet meals made our Umrah journey truly special. Highly recommend for those seeking a premium experience.',
        date: 'March 2023'
      },
      {
        name: 'Wahyu Nata Mahendra',
        rating: 5,
        comment: 'I traveled with my elderly parents, and the staff was incredibly accommodating to their needs. The luxury accommodations and VIP transportation made the journey comfortable for them. The spiritual guidance provided by the scholars was enlightening.',
        date: 'February 2023'
      }
    ]
  },
  {
    id: 4,
    name: 'Standard Hajj Package',
    description: 'A comprehensive Hajj package covering all essential rituals and accommodations for a fulfilling pilgrimage.',
    longDescription: 'Our Standard Hajj Package is designed to provide a comprehensive Hajj experience at an affordable price. This package includes economy class flights, accommodation in 3-star hotels, tent accommodation in Mina, transportation during Hajj rituals, three meals daily, guided Hajj rituals, and Ihram clothing for men. Our experienced guides will ensure that you perform all Hajj rituals correctly and have a spiritually fulfilling experience.',
    price: 6500,
    duration: '21 days',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Economy class flights',
      '3-star hotel accommodation',
      'Tent accommodation in Mina',
      'Transportation during Hajj rituals',
      'Three meals daily',
      'Guided Hajj rituals',
      'Ihram clothing for men'
    ],
    excludes: [
      'Personal expenses',
      'Optional tours',
      'Travel insurance',
      'Visa processing fees',
      'Qurbani (sacrifice)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and transfer you to your hotel in Makkah. Rest and prepare for Hajj.'
      },
      {
        day: 2,
        title: 'Makkah Exploration',
        description: 'Free day to pray at Masjid al-Haram and explore the holy city of Makkah.'
      },
      {
        day: 3,
        title: 'Umrah',
        description: 'Perform Umrah with our guide who will explain the rituals and help you complete them correctly.'
      },
      {
        day: 4,
        title: 'Makkah Ziyarat',
        description: 'Visit historical sites in Makkah, including Jabal al-Nour, Jabal Thawr, and Hudaybiyyah.'
      },
      {
        day: 5,
        title: 'Free Day in Makkah',
        description: 'Free day to pray at Masjid al-Haram and prepare for Hajj.'
      },
      {
        day: 6,
        title: 'Hajj Preparation',
        description: 'Attend a seminar on Hajj rituals and prepare for the upcoming days.'
      },
      {
        day: 7,
        title: 'Free Day in Makkah',
        description: 'Free day to pray at Masjid al-Haram and make final preparations for Hajj.'
      },
      {
        day: 8,
        title: '8th Dhul Hijjah - Mina',
        description: 'Enter into Ihram and travel to Mina. Spend the day and night in Mina, performing prayers.'
      },
      {
        day: 9,
        title: '9th Dhul Hijjah - Arafat & Muzdalifah',
        description: 'Travel to Arafat for the day of standing. After sunset, travel to Muzdalifah and spend the night there.'
      },
      {
        day: 10,
        title: '10th Dhul Hijjah - Jamarat & Makkah',
        description: 'Return to Mina, perform Rami (stoning) at Jamarat, perform Qurbani (sacrifice), shave/trim hair, and return to Makkah for Tawaf al-Ifadah and Sa\'i.'
      },
      {
        day: 11,
        title: '11th Dhul Hijjah - Mina',
        description: 'Return to Mina and perform Rami at all three Jamarat. Spend the night in Mina.'
      },
      {
        day: 12,
        title: '12th Dhul Hijjah - Mina & Makkah',
        description: 'Perform Rami at all three Jamarat. Return to Makkah.'
      },
      {
        day: 13,
        title: '13th Dhul Hijjah - Makkah',
        description: 'Perform Tawaf al-Wida (Farewell Tawaf) and complete Hajj rituals.'
      },
      {
        day: 14,
        title: 'Makkah to Madinah',
        description: 'Travel to Madinah by bus. Check in to your hotel in Madinah and rest.'
      },
      {
        day: 15,
        title: 'Masjid Nabawi',
        description: 'Visit Masjid Nabawi (Prophet\'s Mosque) and pray in Riyadh al-Jannah. Visit the Rawdah and send salutations to Prophet Muhammad (PBUH).'
      },
      {
        day: 16,
        title: 'Madinah Ziyarat',
        description: 'Visit historical sites in Madinah, including Quba Mosque, Qiblatain Mosque, and Mount Uhud.'
      },
      {
        day: 17,
        title: 'Free Day in Madinah',
        description: 'Free day to pray at Masjid Nabawi and explore the holy city of Madinah.'
      },
      {
        day: 18,
        title: 'Madinah Exploration',
        description: 'Continue exploring Madinah and pray at Masjid Nabawi.'
      },
      {
        day: 19,
        title: 'Madinah to Jeddah',
        description: 'Travel back to Jeddah. Check in to your hotel in Jeddah and rest.'
      },
      {
        day: 20,
        title: 'Jeddah Exploration',
        description: 'Explore the city of Jeddah, including the historic Al-Balad district and the Corniche.'
      },
      {
        day: 21,
        title: 'Departure',
        description: 'Check out from your hotel and transfer to King Abdulaziz International Airport for your return flight.'
      }
    ],
    cities: ['Makkah (10 nights)', 'Madinah (5 nights)', 'Mina/Arafat/Muzdalifah (5 nights)'],
    type: 'hajj',
    reviews: [
      {
        name: 'Fauzan Kamil',
        rating: 4,
        comment: 'Good package for the price. The accommodation was decent, and the guides were knowledgeable. The transportation during Hajj rituals was well-organized.',
        date: 'August 2023'
      },
      {
        name: 'M Rafi Athallah',
        rating: 5,
        comment: 'Excellent service throughout the Hajj journey. The staff was very helpful, and the guides provided valuable insights about the rituals. The tent accommodation in Mina was basic but comfortable.',
        date: 'August 2023'
      },
      {
        name: 'Wahyu Nata Mahendra',
        rating: 4,
        comment: 'Overall, a good experience. The accommodation was as expected for a standard package. The meals were decent, and the transportation was reliable. The guides were knowledgeable and patient.',
        date: 'August 2022'
      }
    ]
  },
  {
    id: 5,
    name: 'Premium Hajj Package',
    description: 'A premium Hajj experience with upgraded accommodations and services for a comfortable and spiritual journey.',
    longDescription: 'Our Premium Hajj Package offers an enhanced Hajj experience with upgraded accommodations and services. This package includes premium economy flights, accommodation in 4-star hotels, upgraded tent accommodation in Mina, air-conditioned transportation, buffet meals, experienced guides, Ihram clothing and accessories, and Ziyarat tours. Our team ensures that your Hajj journey is comfortable, spiritually enriching, and hassle-free.',
    price: 9000,
    duration: '25 days',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565019011521-b0575cbb57c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Premium economy flights',
      '4-star hotel accommodation',
      'Upgraded tent accommodation in Mina',
      'Air-conditioned transportation',
      'Buffet meals',
      'Experienced guides',
      'Ihram clothing and accessories',
      'Ziyarat tours'
    ],
    excludes: [
      'Personal expenses',
      'Optional tours',
      'Travel insurance',
      'Visa processing fees',
      'Qurbani (sacrifice)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and transfer you to your 4-star hotel in Makkah. Rest and prepare for Hajj.'
      },
      // Days 2-25 would be similar to the Standard Hajj Package but with more days in Makkah and Madinah
    ],
    cities: ['Makkah (12 nights)', 'Madinah (7 nights)', 'Mina/Arafat/Muzdalifah (5 nights)'],
    type: 'hajj',
    reviews: [
      {
        name: 'Fauzan Kamil',
        rating: 5,
        comment: 'Excellent package! The 4-star hotels were very comfortable, and the upgraded tent accommodation in Mina was a significant improvement. The air-conditioned transportation made the journey much more comfortable in the hot weather.',
        date: 'August 2023'
      },
      {
        name: 'M Rafi Athallah',
        rating: 4,
        comment: 'Great experience overall. The accommodation was comfortable, and the buffet meals were good. The guides were knowledgeable and helpful. The only improvement could be more variety in the food.',
        date: 'August 2023'
      },
      {
        name: 'Wahyu Nata Mahendra',
        rating: 5,
        comment: 'Highly recommend this package. The service was exceptional, and the guides provided valuable insights about the rituals. The hotels were clean and well-located, and the tent accommodation in Mina was comfortable.',
        date: 'August 2022'
      }
    ]
  },
  {
    id: 6,
    name: 'VIP Hajj Package',
    description: 'The ultimate Hajj experience with luxury accommodations, personalized service, and exclusive amenities.',
    longDescription: 'Our VIP Hajj Package offers the ultimate Hajj experience with luxury accommodations, personalized service, and exclusive amenities. This package includes business class flights, accommodation in 5-star hotels near Haram, premium air-conditioned tents in Mina, private transportation, gourmet meals, VIP access during rituals, personal guide and assistant, comprehensive medical insurance, luxury Ihram package, and exclusive Ziyarat tours. Every aspect of your journey is carefully planned to ensure a comfortable, spiritually enriching, and exclusive experience.',
    price: 15000,
    duration: '28 days',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1604026290925-43e3eb1a4c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    includes: [
      'Business class flights',
      '5-star hotel accommodation near Haram',
      'Premium air-conditioned tents in Mina',
      'Private transportation',
      'Gourmet meals',
      'VIP access during rituals',
      'Personal guide and assistant',
      'Comprehensive medical insurance',
      'Luxury Ihram package',
      'Exclusive Ziyarat tours'
    ],
    excludes: [
      'Personal expenses',
      'Optional tours',
      'Visa processing fees',
      'Qurbani (sacrifice)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jeddah',
        description: 'Arrive at King Abdulaziz International Airport in Jeddah. Our VIP representative will meet you and transfer you to your 5-star hotel in Makkah. Rest and prepare for Hajj.'
      },
      // Days 2-28 would be similar to the Premium Hajj Package but with more days in Makkah and Madinah and VIP services
    ],
    cities: ['Makkah (15 nights)', 'Madinah (8 nights)', 'Mina/Arafat/Muzdalifah (5 nights)'],
    type: 'hajj',
    reviews: [
      {
        name: 'Fauzan Kamil',
        rating: 5,
        comment: 'The VIP package was worth every penny. The 5-star hotels were exceptional, and the premium tents in Mina were very comfortable. The private transportation and VIP access during rituals made the Hajj journey much smoother.',
        date: 'August 2023'
      },
      {
        name: 'M Rafi Athallah',
        rating: 5,
        comment: 'Exceptional service from start to finish. The business class flights, luxury accommodations, and gourmet meals made our Hajj journey truly special. The personal guide and assistant were always available to help with any needs.',
        date: 'August 2023'
      },
      {
        name: 'Wahyu Nata Mahendra',
        rating: 5,
        comment: 'I traveled with my elderly parents, and the staff was incredibly accommodating to their needs. The luxury accommodations and private transportation made the journey comfortable for them. The VIP access during rituals was particularly helpful for my parents.',
        date: 'August 2022'
      }
    ]
  }
];

const PackageDetails = () => {
  const { id } = useParams();
  const packageData = packages.find(pkg => pkg.id === parseInt(id));
  
  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Not Found</h2>
          <p className="text-gray-600 mb-6">The package you are looking for does not exist.</p>
          <Link 
            to="/packages"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition duration-300"
          >
            View All Packages
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      <div 
        className="relative h-[400px] flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${packageData.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {packageData.name}
          </motion.h1>
          <motion.div 
            className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(packageData.rating) ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <span>{packageData.rating} stars</span>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span>{packageData.duration}</span>
            </div>
            <div className="flex items-center">
              <FaHotel className="mr-2" />
              <span>{packageData.cities.join(' • ')}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">${packageData.price}</span>
              <span className="ml-1">per person</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              to={`/booking/${packageData.id}`}
              className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md text-lg font-medium transition duration-300"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
      
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-lg shadow-md p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
                <p className="text-gray-600 mb-6">{packageData.longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Package Includes</h3>
                    <ul className="space-y-2">
                      {packageData.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Package Excludes</h3>
                    <ul className="space-y-2">
                      {packageData.excludes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-500 font-bold mr-3">×</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-lg shadow-md p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Itinerary</h2>
                <div className="space-y-6">
                  {packageData.itinerary.slice(0, 10).map((day, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h3 className="text-lg font-semibold text-gray-800">Day {day.day}: {day.title}</h3>
                      <p className="text-gray-600 mt-1">{day.description}</p>
                    </div>
                  ))}
                  {packageData.itinerary.length > 10 && (
                    <div className="text-center">
                      <button className="text-primary hover:text-primary/80 font-medium">
                        View Full Itinerary
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-lg shadow-md p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
                <div className="space-y-6">
                  {packageData.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{review.name}</h4>
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-24"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book This Package</h3>
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price</span>
                    <span className="font-semibold">${packageData.price} per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{packageData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-semibold capitalize">{packageData.type}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/booking/${packageData.id}`}
                  className="block w-full bg-accent hover:bg-accent/90 text-white text-center py-3 rounded-md transition duration-300 mb-4"
                >
                  Book Now
                </Link>
                
                <div className="text-center text-gray-600 text-sm">
                  <p>Need help? Contact us at</p>
                  <a href="tel:+12345678901" className="text-primary hover:text-primary/80">+1 234 567 8901</a>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-primary text-white rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Need a Custom Package?</h3>
                <p className="mb-6">
                  We can create a customized package tailored to your specific requirements and preferences.
                </p>
                <Link 
                  to="/contact"
                  className="block w-full bg-white text-primary hover:bg-gray-100 text-center py-3 rounded-md transition duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
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
              Similar Packages
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore other {packageData.type} packages that might interest you
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages
              .filter(pkg => pkg.type === packageData.type && pkg.id !== packageData.id)
              .slice(0, 3)
              .map((pkg, index) => (
                <motion.div 
                  key={pkg.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{pkg.name}</h3>
                      <span className="bg-accent text-white px-2 py-1 rounded text-sm">
                        ${pkg.price}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < Math.floor(pkg.rating) ? "text-yellow-400" : "text-gray-300"} />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">{pkg.rating} stars</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    
                    <Link 
                      to={`/package/${pkg.id}`}
                      className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-2 rounded-md transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;