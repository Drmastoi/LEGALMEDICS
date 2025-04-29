import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for more information about our MedCo accredited training programs
            </p>
          </div>
        </div>
        
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
                <div className="bg-gray-200 w-full h-96 rounded-lg mb-6">
                  {/* This would be replaced with an actual map component */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center">
                      Interactive map would be displayed here<br />
                      167 Union Street, Oldham, OL1 1TD
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Office Address</h3>
                  <p className="text-gray-600">
                    LegalMedics Training Academy<br />
                    167 Union Street<br />
                    Oldham<br />
                    OL1 1TD<br />
                    United Kingdom
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Information</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Phone:</strong> +44 (0) 333 339 5773
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Email:</strong> info@legalmedics.com
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
              
              <div>
                <ContactSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;