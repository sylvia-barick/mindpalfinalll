import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Eye, 
  Headphones, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Users,
  Award,
  Microscope
} from 'lucide-react';
import logo from '../assets/logo.jpeg'; // Adjust the path if needed

export const HomePage: React.FC = () => {
  const stages = [
    {
      number: '01',
      title: 'Neural Signal Acquisition',
      description: 'Advanced EEG/ERP recording with clinical-grade precision',
      icon: Brain,
    },
    {
      number: '02',
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms detect neural patterns and asymmetries',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Risk Classification',
      description: 'Three-stage classification system for autism spectrum assessment',
      icon: Eye,
    },
    {
      number: '04',
      title: 'Personalized Therapy',
      description: 'VR environments with curated audio therapy and cultural narratives',
      icon: Headphones,
    },
    {
      number: '05',
      title: 'Progress Monitoring',
      description: 'Continuous tracking and clinical reporting for optimal outcomes',
      icon: BarChart3,
    },
  ];

  const features = [
    {
      icon: Brain,
      title: 'Neural Diagnostics',
      description: 'Advanced EEG analysis with frontal alpha asymmetry detection',
    },
    {
      icon: Eye,
      title: 'VR Therapy Arena',
      description: 'Immersive environments with cultural narratives and audio therapy',
    },
    {
      icon: Zap,
      title: 'Gamified Training',
      description: 'Attention enhancement through engaging cognitive exercises',
    },
    {
      icon: Shield,
      title: 'Clinical Grade',
      description: 'HIPAA compliant with validated research methodologies',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neural-950 via-neural-900 to-primary-950">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Animated Logo Icon */}
            <div className="relative mx-auto w-64 h-64 mb-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-teal-400/30 border-dashed"
              />
              <div className="absolute inset-10 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Mindpal Logo"
                  className="h-44 w-44 rounded-full object-cover shadow-lg"
                  draggable={false}
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-primary-400 to-teal-300 bg-clip-text text-transparent">
                Mindpal
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neural-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Mapping Neural Signatures. Empowering Attention. Healing Through Technology.
            </p>
            
            <p className="text-lg text-neural-400 mb-8 max-w-2xl mx-auto">
              Revolutionary EEG-based autism detection and VR therapy platform combining 
              cutting-edge neuroscience with cultural healing narratives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/diagnostic"
              className="group bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/25 flex items-center space-x-2"
            >
              <span>Explore Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-neural-600 hover:border-teal-400 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-teal-400/10"
            >
              Book Clinical Trial
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-neural-400"
          >
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Trusted by clinicians</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Validated by researchers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Microscope className="h-4 w-4" />
              <span>Inspired by neuroscience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5-Stage Process */}
      <section className="py-20 bg-neural-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-primary-400 bg-clip-text text-transparent">
                Our 5-Stage Methodology
              </span>
            </h2>
            <p className="text-xl text-neural-400 max-w-3xl mx-auto">
              From neural signal acquisition to therapeutic intervention, 
              our comprehensive approach ensures accurate diagnosis and effective treatment.
            </p>
          </motion.div>

          <div className="space-y-16">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                    <span className="text-6xl font-bold text-teal-400/30">{stage.number}</span>
                    <stage.icon className="h-12 w-12 text-teal-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">{stage.title}</h3>
                  <p className="text-lg text-neural-400 leading-relaxed">{stage.description}</p>
                </div>
                
                <div className="flex-1 flex justify-center">
                  <div className="w-80 h-64 bg-gradient-to-br from-neural-800 to-neural-700 rounded-2xl p-8 flex items-center justify-center border border-neural-600">
                    <stage.icon className="h-24 w-24 text-teal-400/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-primary-400 bg-clip-text text-transparent">
                Platform Features
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-neural-800/50 rounded-2xl border border-neural-700 hover:border-teal-400/50 transition-all duration-300 hover:bg-neural-800/80"
              >
                <div className="bg-gradient-to-r from-teal-500/20 to-primary-500/20 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-neural-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500/10 to-primary-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Neural Care?
            </h2>
            <p className="text-xl text-neural-400 mb-8 max-w-2xl mx-auto">
              Join leading clinicians and researchers in advancing autism diagnosis and therapy 
              through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/25"
              >
                Schedule Demo
              </Link>
              <Link
                to="/research"
                className="px-8 py-4 border-2 border-neural-600 hover:border-teal-400 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-teal-400/10"
              >
                View Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};