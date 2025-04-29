import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseOutline from '@/components/CourseOutline';
import EnrollmentBanner from '@/components/EnrollmentBanner';
import CallToAction from '@/components/CallToAction';

const Course: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <EnrollmentBanner />
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
            <h1 className="text-4xl font-bold text-center text-white mb-8 text-shadow">
              MedCo Accredited Training Course
            </h1>
            <p className="text-xl text-center text-white text-shadow max-w-4xl mx-auto mb-8">
              Comprehensive training for medical professionals seeking to become qualified 
              medico-legal experts in soft tissue injury assessment
            </p>
          </div>
        </div>
        <CourseOutline />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Course;