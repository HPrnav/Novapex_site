import React, { useState } from 'react';
import { Coffee, Laptop, Heart, Trophy, Upload, Phone, Mail } from 'lucide-react';

const Careers = () => {
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const [isHRContactOpen, setIsHRContactOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, and vision coverage for you and your family.',
    },
    {
      icon: Laptop,
      title: 'Remote Work',
      description: 'Flexible work arrangements with the option to work remotely or in our modern offices.',
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO, flexible hours, and a culture that respects your personal time.',
    },
    {
      icon: Trophy,
      title: 'Growth Opportunities',
      description: 'Professional development budget, conference attendance, and clear career progression paths.',
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmitResume = (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      alert('Please select a resume file first.');
      return;
    }

    // Opens mail client with HR email pre-filled
    const mailtoLink = `mailto:Contact@novapexhub.com?subject=Resume%20Submission&body=Hello%20HR%20Team,%0D%0A%0D%0APlease%20find%20my%20resume%20attached.%0D%0A%0D%0ARegards,`;
    window.location.href = mailtoLink;

    setResumeFile(null);
    setIsResumeDialogOpen(false);
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our <span style={{ color: '#00C08B' }}>Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#00C08B]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00C08B] transition-colors duration-300">
                    <Icon className="h-8 w-8 text-[#00C08B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#00C08B] to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Submit your resume directly to our HR team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsResumeDialogOpen(true)}
                className="group bg-white text-[#00C08B] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Upload className="h-5 w-5 group-hover:animate-bounce" />
                <span>Upload Resume</span>
              </button>
              <button 
                onClick={() => setIsHRContactOpen(true)}
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#00C08B] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Contact HR</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Upload Modal */}
      {isResumeDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Submit Your Resume</h3>
              <button 
                onClick={() => {
                  setIsResumeDialogOpen(false);
                  setResumeFile(null);
                }} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmitResume}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <label
                        htmlFor="resume-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#00C08B] hover:text-[#00976E]"
                      >
                        <span>Select a file</span>
                        <input
                          id="resume-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="sr-only"
                        />
                      </label>
                      <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 5MB</p>
                    </div>
                  </div>
                  {resumeFile && (
                    <p className="mt-2 text-sm text-gray-600">Selected: {resumeFile.name}</p>
                  )}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <button
                    type="submit"
                    disabled={!resumeFile}
                    className="flex-1 bg-[#00C08B] text-white py-2 px-4 rounded-md hover:bg-[#00976E] disabled:opacity-50"
                  >
                    Send to HR
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsResumeDialogOpen(false);
                      setResumeFile(null);
                    }}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HR Contact Modal */}
      {isHRContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Contact HR Team</h3>
              <button 
                onClick={() => setIsHRContactOpen(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md">
                <Phone className="h-5 w-5 text-[#00C08B]" />
                <div>
                  <p className="font-medium">HR Team</p>
                  <p className="text-sm text-gray-600">+912269718996</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md">
                <Mail className="h-5 w-5 text-[#00C08B]" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">Contact@novapexhub.com</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsHRContactOpen(false)}
                className="w-full bg-[#00C08B] text-white py-2 px-4 rounded-md hover:bg-[#00976E] mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Careers;
