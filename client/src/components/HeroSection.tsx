import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&h=600&q=80" 
          alt="Medical legal professional" 
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Medico-Legal Training for Doctors
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
            Earn £1000+ Per Day Writing Medical Reports
          </h2>
          <p className="text-lg mb-8">
            Comprehensive training to help doctors create professional reports for injury claims. Full support provided from A to Z to get you started in this lucrative field.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row md:items-center mb-4">
              <div className="text-xl line-through text-gray-300 mr-4">Regular Price: £900</div>
              <div className="text-2xl font-bold text-yellow-300">Discount Price: £750</div>
            </div>
            <p className="text-sm mb-4">Limited time offer for April 2025 bookings</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105 cursor-pointer !rounded-button whitespace-nowrap">
              Secure Your Training Spot
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <i className="fas fa-check-circle text-green-400 text-xl"></i>
            <p>MedCo Compliant Training Included</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
