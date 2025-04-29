import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <div className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=400&q=80"
              alt="Medical legal professional" 
              className="w-full h-60 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-center text-white mb-4 text-shadow">
              Contact Us
            </h1>
            <p className="text-xl text-center text-white text-shadow max-w-3xl mx-auto">
              Get in touch with our team for more information about our MedCo accredited training programs
            </p>
          </div>
        </div>
        
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
                <div className="w-full h-96 rounded-lg mb-6 overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.7016503263846!2d-2.105553884078761!3d53.54071497225145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb90dcde8580b%3A0xca55c47bd80ed4fb!2s167%20Union%20St%2C%20Oldham%20OL1%201TD%2C%20UK!5e0!3m2!1sen!2sus!4v1682777793463!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LegalMedics Office Location"
                  />
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