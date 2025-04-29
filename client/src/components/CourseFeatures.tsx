import React from 'react';

const CourseFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What's Included in Your Training</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive course provides everything you need to succeed in medico-legal reporting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-book-medical"></i>
              </div>
              <h3 className="text-lg font-bold">MedCo Modules Training</h3>
            </div>
            <p className="text-gray-600">
              Complete training on all required MedCo modules to ensure compliance and certification.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-user-check"></i>
              </div>
              <h3 className="text-lg font-bold">Registration Support</h3>
            </div>
            <p className="text-gray-600">
              Step-by-step guidance through the registration process with relevant authorities.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-desktop"></i>
              </div>
              <h3 className="text-lg font-bold">Portal Access</h3>
            </div>
            <p className="text-gray-600">
              Full access to our proprietary portal for streamlined report generation and submission.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-file-medical-alt"></i>
              </div>
              <h3 className="text-lg font-bold">Report Generation Tools</h3>
            </div>
            <p className="text-gray-600">
              Professional templates and tools to create comprehensive and compliant medical reports.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="text-lg font-bold">Post-Course Support</h3>
            </div>
            <p className="text-gray-600">
              Ongoing mentorship and support to help you establish your practice and secure clients.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                <i className="fas fa-pound-sign"></i>
              </div>
              <h3 className="text-lg font-bold">Earnings Guidance</h3>
            </div>
            <p className="text-gray-600">
              Practical advice on maximizing your earning potential and managing your new income stream.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105">
            View Full Course Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
