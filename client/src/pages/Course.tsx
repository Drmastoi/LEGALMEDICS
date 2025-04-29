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
        <div className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              MedCo Accredited Training Course
            </h1>
            <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-8">
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