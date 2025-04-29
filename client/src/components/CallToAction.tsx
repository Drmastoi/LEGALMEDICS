import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Medical Career?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Secure your spot in our next training cohort and start your journey toward a lucrative medico-legal career.
        </p>
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
          <div className="flex flex-col md:flex-row md:items-center mb-4 justify-center">
            <div className="text-xl line-through text-gray-300 mr-4">Regular Price: £900</div>
            <div className="text-2xl font-bold text-yellow-300">Discount Price: £750</div>
          </div>
          <p className="text-sm mb-6">Only 4 spots remaining in our April 2025 cohort</p>
          <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap inline-block text-center">
            Reserve Your Training Spot Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
