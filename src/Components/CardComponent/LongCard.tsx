import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the types for doctors and component props
interface Doctor {
  name: string;
  specialization: string;
}

interface LongCardProps {
  icon: React.ReactNode; // type for any valid React node (JSX)
  title: string;
  content: string;
  color: string;
  width: string;
  height: string;
  images?: string[];
  doctors?: Doctor[];
}

const LongCard: React.FC<LongCardProps> = ({ icon, title, content, color, width, height, images, doctors }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '10px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className={`relative p-4 rounded-lg shadow-lg ${color} ${width} ${height}`}>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="bg-white/30 p-4 md:p-5 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 text-gray-800">
          <p className="text-base md:text-lg font-semibold m-0">{title}</p>
          <h2 className="text-xl md:text-3xl font-semibold m-0">{content}</h2>
        </div>
      </div>
      <div className="relative">
        <Slider {...settings}>
          {images && images.map((image, index) => (
            <div key={index} className="slick-slide p-2 flex flex-col items-center">
              <img
                src={image}
                alt={`team-member-${index}`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-2"
                style={{ maxHeight: '150px', maxWidth: '150px' }}
              />
              {/* Display doctor’s name and specialization just below the image */}
              {doctors && doctors[index] && (
                <div className="text-center">
                  <p className="text-xs md:text-sm font-semibold">{doctors[index].name}</p>
                  <p className="text-xs">{doctors[index].specialization}</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LongCard;
