import React from 'react';
import Header from '@/components/Header';
import EnrollmentBanner from '@/components/EnrollmentBanner';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import CourseFeatures from '@/components/CourseFeatures';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <EnrollmentBanner />
      <main>
        <HeroSection />
        <BenefitsSection />
        <CourseFeatures />
        <Testimonials />
        <FAQ />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
