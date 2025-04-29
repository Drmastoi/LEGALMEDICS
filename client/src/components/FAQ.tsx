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
