import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../assets/logo.jpeg'; // Adjust path if needed

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neural-900 border-t border-neural-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Mindpal Logo"
                className="h-8 w-8 rounded-full object-cover"
                draggable={false}
              />
              <span className="font-bold text-lg text-white">Mindpal</span>
            </div>
            <p className="text-neural-400 mb-4 max-w-md">
              Mapping Neural Signatures. Empowering Attention. Healing Through Technology.
              Advanced neurological diagnostics and VR therapy for autism spectrum disorders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neural-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neural-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neural-400 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/diagnostic" className="text-neural-400 hover:text-teal-400 transition-colors">EEG Analysis</Link></li>
              <li><Link to="/therapy" className="text-neural-400 hover:text-teal-400 transition-colors">VR Therapy</Link></li>
              <li><Link to="/attention-lab" className="text-neural-400 hover:text-teal-400 transition-colors">Attention Lab</Link></li>
              <li><Link to="/dashboard" className="text-neural-400 hover:text-teal-400 transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-neural-400">
                <Mail className="h-4 w-4" />
                <span>contact@mindpal.ai</span>
              </li>
              <li className="flex items-center space-x-2 text-neural-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-neural-400">
                <MapPin className="h-4 w-4" />
                <span>Boston, MA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neural-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neural-400 text-sm">
            © 2025 Mindpal. All rights reserved. HIPAA & GDPR Compliant.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-neural-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-neural-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-neural-400 hover:text-teal-400 text-sm transition-colors">Clinical Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};