import React from 'react';

const CourseOutline: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">MedCo Accredited Course Outline</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive training follows the MedCo curriculum and provides you with all the knowledge required for medico-legal reporting
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Module 1: Introduction to Medico-Legal Work</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>The role of a medical expert witness</li>
                <li>Understanding the legal framework</li>
                <li>Ethical considerations and professional responsibilities</li>
                <li>MedCo registration process and requirements</li>
                <li>Types of medico-legal reports and their purposes</li>
              </ul>
            </div>
            
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Module 2: Clinical Knowledge for Report Writing</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Whiplash and associated disorders</li>
                <li>Assessment and diagnosis of soft tissue injuries</li>
                <li>Evidence-based prognosis and recovery timeframes</li>
                <li>Psychological impacts of injury</li>
                <li>Distinguishing pre-existing conditions from accident-related injuries</li>
              </ul>
            </div>
            
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Module 3: Medical Report Writing</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Structure and content of different report types</li>
                <li>Using appropriate medical terminology</li>
                <li>Writing clear, objective, and concise reports</li>
                <li>Avoiding common pitfalls in medico-legal reporting</li>
                <li>Report templates and standardization</li>
              </ul>
            </div>
            
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Module 4: Legal Proceedings</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Understanding the personal injury claims process</li>
                <li>Civil Procedure Rules and Protocol for Low Value Personal Injury Claims</li>
                <li>Medical expert's responsibilities in court proceedings</li>
                <li>Giving evidence and handling cross-examination</li>
                <li>Joint statement preparation with other experts</li>
              </ul>
            </div>
            
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Module 5: Practical Assessment Skills</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Efficient and thorough clinical examination techniques</li>
                <li>Documentation of findings in a legally robust format</li>
                <li>Special tests relevant to trauma assessment</li>
                <li>Functional assessment and disability evaluation</li>
                <li>Practical workshops with standardized patients</li>
              </ul>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Module 6: Business & Practice Management</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Setting up a medico-legal practice</li>
                <li>Fee structures and financial management</li>
                <li>Marketing your services to solicitors and agencies</li>
                <li>Managing client relationships and expectations</li>
                <li>Time management and efficiency strategies</li>
                <li>Record keeping and data protection compliance</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 mt-8 rounded-lg">
            <h3 className="text-xl font-bold text-blue-800 mb-4">MedCo Certification Process</h3>
            <p className="text-gray-700 mb-4">
              Upon completion of the course, participants will:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Complete a comprehensive assessment of knowledge</li>
              <li>Submit sample reports for evaluation by MedCo standards</li>
              <li>Receive personalized feedback from experienced MedCo practitioners</li>
              <li>Gain MedCo accreditation certification (DME status)</li>
              <li>Receive ongoing support for initial report submissions</li>
              <li>Be ready to register on the MedCo portal as a medical expert</li>
            </ul>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">About MedCo</h3>
              <p className="text-gray-600 mb-4">
                MedCo is the official body that manages the accreditation and regulation of medical experts providing initial medical reports in soft tissue injury claims brought under the Ministry of Justice's Pre-Action Protocol for Low Value Personal Injury Claims in Road Traffic Accidents.
              </p>
              <p className="text-gray-600">
                Our course is fully compliant with MedCo's training requirements for medical professionals seeking to become accredited medical experts (DMEs - Direct Medical Experts) in the preparation of medico-legal reports for whiplash-associated disorders (WAD) and soft tissue injuries.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">MedCo Registration Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Access to a steady stream of medico-legal instructions through the MedCo portal</li>
                <li>Recognition as an accredited expert in soft tissue injury assessment</li>
                <li>Enhanced professional credibility in the medico-legal sector</li>
                <li>Opportunity to develop a lucrative complementary practice to clinical work</li>
                <li>Clear framework for conducting assessments and writing reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOutline;