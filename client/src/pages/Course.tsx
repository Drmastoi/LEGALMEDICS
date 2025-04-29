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
              src={require('@assets/course-hero.svg')} 
              alt="Course Hero Background" 
              className="w-full h-full object-cover"
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