import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  Briefcase,
  Send,
  CheckCircle,
  Clock,
  Award,
  Globe,
  Heart,
  Brain,
  Shield,
  Zap,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    inquiryType: 'clinical-demo',
    message: '',
    agreedToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { id: 'clinical-demo', label: 'Schedule Clinical Demo', icon: Calendar },
    { id: 'research-partner', label: 'Research Partnership', icon: Users },
    { id: 'vr-kit', label: 'Purchase VR Kit', icon: Briefcase },
    { id: 'general', label: 'General Inquiry', icon: Mail }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mindpal2025@gmail.com',
      href: 'mailto:contact@mindpal.ai'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 62902 77345',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Institute of Engineering and Management, Salt Lake, Kolkata',
      href: '#'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Science Officer',
      specialty: 'Neuroscience & EEG Research',
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Clinical Director',
      specialty: 'Autism Spectrum Disorders',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Cultural Integration Lead',
      specialty: 'Therapeutic Narratives',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const partnerLogos = [
    { name: 'Harvard Medical School', logo: 'HMS' },
    { name: 'Boston Children\'s Hospital', logo: 'BCH' },
    { name: 'MIT CSAIL', logo: 'MIT' },
    { name: 'Stanford Medicine', logo: 'SMD' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-primary-400 bg-clip-text text-transparent">
              Connect With Us
            </span>
          </h1>
          <p className="text-xl text-neural-400 max-w-3xl mx-auto">
            Partner with us to advance autism research, schedule clinical demonstrations, 
            or explore how Mindpal can transform your practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-neural-800/50 rounded-2xl p-8 border border-neural-700">
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Send className="h-6 w-6 text-teal-400" />
                <span>Get in Touch</span>
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                  <p className="text-neural-400">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neural-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-neural-700 border border-neural-600 rounded-lg px-4 py-3 text-white placeholder-neural-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neural-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-neural-700 border border-neural-600 rounded-lg px-4 py-3 text-white placeholder-neural-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                        placeholder="jane.smith@hospital.edu"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neural-300 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full bg-neural-700 border border-neural-600 rounded-lg px-4 py-3 text-white placeholder-neural-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                        placeholder="Children's Hospital"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neural-300 mb-2">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full bg-neural-700 border border-neural-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                      >
                        <option value="">Select your role</option>
                        <option value="clinician">Clinician</option>
                        <option value="researcher">Researcher</option>
                        <option value="therapist">Therapist</option>
                        <option value="administrator">Administrator</option>
                        <option value="parent">Parent/Guardian</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neural-300 mb-3">
                      Inquiry Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.id}
                          className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                            formData.inquiryType === type.id
                              ? 'border-teal-400 bg-teal-500/10'
                              : 'border-neural-600 hover:border-neural-500'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.id}
                            checked={formData.inquiryType === type.id}
                            onChange={handleInputChange}
                            className="text-teal-400"
                          />
                          <type.icon className="h-5 w-5 text-teal-400" />
                          <span className="text-sm">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neural-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-neural-700 border border-neural-600 rounded-lg px-4 py-3 text-white placeholder-neural-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none"
                      placeholder="Tell us about your needs, current challenges, or how you'd like to collaborate..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreedToTerms"
                      checked={formData.agreedToTerms}
                      onChange={handleInputChange}
                      className="mt-1 text-teal-400"
                      required
                    />
                    <label className="text-sm text-neural-400">
                      I agree to the{' '}
                      <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                        Terms of Service
                      </a>
                      , and consent to being contacted about Mindpal services. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.agreedToTerms}
                    className="w-full bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 disabled:from-neutral-600 disabled:to-neutral-700 disabled:cursor-not-allowed px-6 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neural-700/50 transition-colors group"
                  >
                    <info.icon className="h-5 w-5 text-teal-400" />
                    <div>
                      <div className="text-sm text-neural-400">{info.label}</div>
                      <div className="font-medium group-hover:text-teal-400 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-teal-500/10 to-primary-500/10 rounded-2xl p-6 border border-teal-400/30">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5 text-teal-400" />
                <span>Response Time</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Clinical demos: Same day</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">General inquiries: 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">Research partnerships: 48 hours</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-teal-600 hover:bg-teal-700 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Demo Call</span>
                </button>
                <button className="w-full bg-primary-600 hover:bg-primary-700 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Join Research Network</span>
                </button>
                <button className="w-full border border-neural-600 hover:border-teal-400 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-teal-500/20 to-primary-500/20 rounded-2xl p-12 border border-teal-400/30 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Neural Care?</h2>
          <p className="text-xl text-neural-400 mb-8 max-w-2xl mx-auto">
            Join us in advancing autism research and therapy through innovative technology 
            and culturally-sensitive approaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-6 text-sm text-neural-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-teal-400" />
                <span>Research Validated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-teal-400" />
                <span>Culturally Sensitive</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};