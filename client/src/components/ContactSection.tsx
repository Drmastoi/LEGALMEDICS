import React, { useState } from 'react';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear the error for this field when the user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate the form data
      contactSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Submit form data to the server
      await apiRequest('POST', '/api/contact', formData);
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitSuccess(true);
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Transform Zod errors into a more usable format
        const formattedErrors: Partial<ContactFormData> = {};
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            const fieldName = err.path[0] as keyof ContactFormData;
            formattedErrors[fieldName] = err.message;
          }
        });
        setErrors(formattedErrors);
      } else {
        console.error('Form submission error:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions about our training program? Contact us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
              
              {submitSuccess && (
                <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-md">
                  Thank you for your message. We will get back to you shortly!
                </div>
              )}
              
              <form id="contactForm" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="training">Training Inquiry</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                    required
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md transition-all disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <p className="text-gray-600">
                      LegalMedics Training Centre<br />
                      111 Harley Street<br />
                      London, W1G 6AB
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@legalmedics.com" className="hover:text-blue-600">info@legalmedics.com</a><br />
                      <a href="mailto:support@legalmedics.com" className="hover:text-blue-600">support@legalmedics.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-600 mt-1 mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-600">
                      <a href="tel:+442071234567" className="hover:text-blue-600">+44 (0) 20 7123 4567</a><br />
                      Mon-Fri: 9:00 AM - 5:30 PM
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
