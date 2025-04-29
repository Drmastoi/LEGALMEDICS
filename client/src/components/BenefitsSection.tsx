import React from 'react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="course" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Support Package</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to start your journey as a medico-legal expert with ongoing support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">MedCo Compliance</h3>
            <p className="text-gray-600">
              Full MedCo compliant training with certification to ensure you meet all industry standards.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-laptop-medical"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Portal Access</h3>
            <p className="text-gray-600">
              Exclusive access to our report generation portal with templates and guidance.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="text-blue-600 text-4xl mb-4">
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Ongoing Support</h3>
            <p className="text-gray-600">
              Continuous post-course support to help you establish yourself in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
