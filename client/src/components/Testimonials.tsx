import React, { useState, useRef } from 'react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  initials: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "This course transformed my professional life. I now have a steady stream of report requests and am earning significantly more than in my NHS role. The ongoing support has been invaluable.",
      name: "Dr. James Davies",
      position: "GP, Manchester",
      initials: "JD",
      rating: 5
    },
    {
      id: 2,
      content: "The training was exceptional. Within two months of completion, I was writing reports confidently and earning a substantial additional income that has allowed me to reduce my clinical hours.",
      name: "Dr. Sarah Patel",
      position: "Consultant, London",
      initials: "SP",
      rating: 5
    },
    {
      id: 3,
      content: "I was skeptical at first, but the ROI has been incredible. The portal access alone has saved me countless hours, and the team's support in getting my first clients was exceptional.",
      name: "Dr. Robert Thompson",
      position: "Orthopedic Surgeon, Birmingham",
      initials: "RT",
      rating: 4.5
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollToSlide = (index: number) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollPrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    scrollToSlide(newIndex);
  };
  
  const scrollNext = () => {
    const newIndex = Math.min(activeIndex + 1, testimonials.length - 1);
    scrollToSlide(newIndex);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="star-half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories from Our Doctors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from medical professionals who have transformed their careers with our training
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="testimonial-carousel flex overflow-x-auto pb-8 space-x-6 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id}
                className="testimonial-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-500">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden md:block">
            <button 
              className="testimonial-prev bg-white rounded-full p-2 shadow-md text-blue-700 hover:bg-blue-50"
              onClick={scrollPrev}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden md:block">
            <button 
              className="testimonial-next bg-white rounded-full p-2 shadow-md text-blue-700 hover:bg-blue-50"
              onClick={scrollNext}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={`dot-${index}`}
                className={`testimonial-dot w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-blue-300'}`}
                onClick={() => scrollToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
