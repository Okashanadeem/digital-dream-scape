// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import googleAdsImage from '../assets/images/Google&facebookAd.png';
// import WebDev from '../assets/images/WebDev.avif';
// import Graphicdesign from '../assets/images/Graphicdesign.png';
// import SocialMediaMarketing from '../assets/images/SocialMediaMarketing.jpeg';
// import VideoEditing from '../assets/images/VideoEditing.png';
// import UiUxPortfolio from '../assets/images/UiUxPortfolio.avif';

// const services = [
//   { name: "Google Ads & Facebook Ads", image: googleAdsImage },
//   { name: "Web Development", image: WebDev },
//   { name: "Graphic Designing", image: Graphicdesign },
//   { name: "Social Media Marketing", image: SocialMediaMarketing },
//   { name: "Video Editing", image: VideoEditing },
//   { name: "UI/UX Designing", image: UiUxPortfolio},
// ];

// const Services = () => {
//   const navigate = useNavigate();

//   const handleServiceClick = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="services"
//       className="p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mt-0 border-t-4 border-gray-700"
//     >
//       <div className="container mx-auto text-center">

//         <h2 className="text-5xl font-bold mb-12 text-blue-400 animate__animated animate__fadeInDown tracking-wider">
//           Services We Offer
//         </h2>


//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-white hover:bg-opacity-10 cursor-pointer mb-12"
//                 onClick={handleServiceClick}
//               >

//                 <div className="mb-6">
//                   <img
//                     src={service.image}
//                     alt={service.name}
//                     className="w-full h-40 object-cover rounded-lg mb-4"
//                   />
//                 </div>

//                 <h3 className="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
//                   {service.name}
//                 </h3>

//                 <div className="absolute inset-0 bg-white opacity-0  rounded-lg transition-opacity duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleAdsImage from '../assets/images/Google&facebookAd.png';
import WebDev from '../assets/images/WebDev.avif';
import Graphicdesign from '../assets/images/Graphicdesign.png';
import SocialMediaMarketing from '../assets/images/SocialMediaMarketing.jpeg';
import VideoEditing from '../assets/images/VideoEditing.png';
import UiUxPortfolio from '../assets/images/UiUxPortfolio.avif';

const services = [
  { name: "Google Ads & Facebook Ads", image: googleAdsImage },
  { name: "Web Development", image: WebDev },
  { name: "Graphic Designing", image: Graphicdesign },
  { name: "Social Media Marketing", image: SocialMediaMarketing },
  { name: "Video Editing", image: VideoEditing },
  { name: "UI/UX Designing", image: UiUxPortfolio},
];

const Services = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleServiceClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      id="services"
      className="p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white mt-0 border-t-4 border-gray-700"
    >
      <div className="container mx-auto text-center">

        <h2 className="text-5xl font-bold mb-12 text-blue-400 animate__animated animate__fadeInDown tracking-wider">
          Services We Offer
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Show all services on large screens, but limit to 3 on small screens */}
            {services.slice(0, showMore || window.innerWidth >= 1024 ? services.length : 3).map((service, index) => (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:bg-white hover:bg-opacity-10 cursor-pointer mb-12"
                onClick={handleServiceClick}
              >
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.name}
                </h3>

                <div className="absolute inset-0 bg-white opacity-0 rounded-lg transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Show "Show More" button only on small screens */}
        {!showMore && window.innerWidth < 1024 && (
          <div className="mt-8">
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 focus:outline-none sm:block lg:hidden"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}

        {/* Show "Show Less" button only after expanding, and only on small screens */}
        {showMore && window.innerWidth < 1024 && (
          <div className="mt-8">
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-600 transition-all duration-300 focus:outline-none sm:block lg:hidden"
              onClick={handleShowMore}
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
