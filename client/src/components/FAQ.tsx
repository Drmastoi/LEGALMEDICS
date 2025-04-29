import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Do I need previous experience in medical reporting?",
      answer: "No previous experience is required. Our comprehensive training covers everything from the basics to advanced reporting techniques. The program is designed for doctors with no prior experience in medico-legal work."
    },
    {
      id: 2,
      question: "How long does it take to complete the training?",
      answer: "The core training program can be completed in 4-6 weeks, depending on your availability. After completing the main modules, you'll have ongoing access to our portal and support team while you establish your practice."
    },
    {
      id: 3,
      question: "How soon can I expect to get my first clients?",
      answer: "Most of our graduates receive their first clients within 1-2 months of completing the training. Our team will help you with the registration process and provide guidance on marketing your services to solicitors and insurance companies."
    },
    {
      id: 4,
      question: "Is the £1000+ per day earning claim realistic?",
      answer: "Yes, this is achievable with experience. While earnings will start lower, many of our established doctors regularly earn £1000+ per day once they are fully comfortable with the process and have built up a client base. Most reports pay £350-750 each, and experienced doctors can complete multiple reports in a day."
    },
    {
      id: 5,
      question: "What qualifications do I need to take this course?",
      answer: "You must be a qualified medical doctor with a current GMC registration and license to practice. Specialties particularly well-suited include GPs, Orthopedic surgeons, Emergency Medicine, Rehabilitation Medicine, and Occupational Health physicians, but doctors from all specialties are welcome."
    },
    {
      id: 6,
      question: "What is MedCo and why is it important?",
      answer: "MedCo is the organization that oversees the accreditation of medical experts who provide initial medical reports for soft tissue injury claims following road traffic accidents. Our training is fully compliant with MedCo requirements, and we provide support for the MedCo accreditation process, which is essential for accepting certain types of medico-legal cases."
    },
    {
      id: 7,
      question: "Do I need to leave my current job to start working in medico-legal reporting?",
      answer: "Not at all. Many of our doctors start writing reports on a part-time basis alongside their existing clinical roles. The flexible nature of report writing allows you to schedule examinations and report writing around your current commitments, making it an excellent supplementary income source."
    },
    {
      id: 8,
      question: "What are the equipment or office requirements for starting this work?",
      answer: "The basic requirements are quite minimal: a professional clinical space for examinations (which can be rented hourly in many locations), a computer, and internet access. Our portal provides all the necessary software tools for report generation, so there's no need for expensive specialized equipment."
    },
    {
      id: 9,
      question: "How many hours per week do I need to commit to build a successful practice?",
      answer: "This depends on your income goals, but many doctors start with just 4-8 hours per week and scale up as they become more efficient. Writing reports for 1-2 days per week can generate a substantial supplementary income once you're established."
    },
    {
      id: 10,
      question: "What ongoing costs are involved after taking the course?",
      answer: "The main ongoing costs include professional indemnity insurance for medico-legal work (which is separate from NHS or standard clinical indemnity), MedCo annual registration fees if applicable, and potentially room rental costs for examinations if you don't have your own clinical space. Our portal access is included in your training fee for the first year, with a modest subscription thereafter."
    }
  ];
  
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our medico-legal training program
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map(faq => (
            <div key={faq.id} className="mb-6">
              <button 
                className="faq-toggle w-full flex justify-between items-center bg-gray-50 hover:bg-gray-100 p-5 rounded-lg font-semibold text-left"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItemId === faq.id}
              >
                <span>{faq.question}</span>
                <i className={`fas ${openItemId === faq.id ? 'fa-minus rotate-45' : 'fa-plus'} transition-transform`}></i>
              </button>
              <div className={`bg-white p-5 border border-gray-100 rounded-b-lg ${openItemId === faq.id ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;