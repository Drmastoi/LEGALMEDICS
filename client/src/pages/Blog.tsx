import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog: React.FC = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the MedCo Registration Process",
      excerpt: "A step-by-step guide to successfully completing your MedCo registration as a Direct Medical Expert.",
      date: "April 25, 2025",
      author: "Dr. Sarah Johnson",
      category: "MedCo Registration"
    },
    {
      id: 2,
      title: "Best Practices for Medico-Legal Report Writing",
      excerpt: "Essential tips for writing clear, concise, and legally sound medical reports for personal injury claims.",
      date: "April 18, 2025",
      author: "Dr. Michael Clark",
      category: "Report Writing"
    },
    {
      id: 3,
      title: "Recent Changes to the Whiplash Claims Process",
      excerpt: "How the Civil Liability Act has transformed the landscape for soft tissue injury claims in road traffic accidents.",
      date: "April 10, 2025",
      author: "Dr. Emma Roberts",
      category: "Legal Updates"
    },
    {
      id: 4,
      title: "How to Assess Psychological Impact in Personal Injury Cases",
      excerpt: "Techniques for accurately evaluating and documenting psychological effects following physical trauma.",
      date: "April 3, 2025",
      author: "Dr. James Wilson",
      category: "Clinical Assessment"
    },
    {
      id: 5,
      title: "Building a Successful Medico-Legal Practice",
      excerpt: "Business strategies for physicians looking to develop a thriving medico-legal consulting practice.",
      date: "March 27, 2025",
      author: "Dr. Lisa Thompson",
      category: "Business Development"
    },
    {
      id: 6,
      title: "CPD Requirements for MedCo Experts: Staying Compliant",
      excerpt: "Understanding and fulfilling your continuing professional development obligations as a MedCo expert.",
      date: "March 20, 2025",
      author: "Dr. Robert Turner",
      category: "Professional Development"
    }
  ];

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
              Medico-Legal Insights
            </h1>
            <p className="text-xl text-center text-white text-shadow max-w-3xl mx-auto">
              Expert articles, news, and resources for medical professionals in the medico-legal field
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 h-3"></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2 flex justify-between">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;