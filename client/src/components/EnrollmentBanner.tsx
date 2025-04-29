import React from 'react';

const EnrollmentBanner: React.FC = () => {
  return (
    <div className="bg-blue-700 text-white py-3 sticky top-[72px] z-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="font-bold mr-2">Limited Time Offer:</span>
          <span className="text-yellow-300 font-medium">Only 4 out of 6 spots left!</span>
        </div>
        <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap inline-block text-center">
          Reserve Your Spot Now
        </a>
      </div>
    </div>
  );
};

export default EnrollmentBanner;
