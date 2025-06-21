import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Download, 
  ExternalLink, 
  Users, 
  Calendar,
  Award,
  Microscope,
  Brain,
  BarChart3,
  Lock,
  CheckCircle,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

export const ResearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showResearcherPortal, setShowResearcherPortal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Research', count: 24 },
    { id: 'methodology', name: 'Methodology', count: 8 },
    { id: 'clinical-trials', name: 'Clinical Trials', count: 6 },
    { id: 'case-studies', name: 'Case Studies', count: 10 }
  ];

  const featuredResearch = [
    {
      id: 1,
      title: 'Neural Pattern Recognition in Autism Spectrum Disorders: A Multi-Modal EEG/ERP Approach',
      authors: 'Dr. Sarah Chen, Dr. Michael Rodriguez, Dr. Aisha Patel',
      journal: 'Journal of Neural Engineering',
      date: '2024-12-15',
      category: 'methodology',
      abstract: 'This study presents a comprehensive analysis of neural biomarkers using advanced EEG/ERP techniques for early autism detection...',
      downloadUrl: '#',
      isOpenAccess: true,
      citations: 127
    },
    {
      id: 2,
      title: 'VR-Based Therapy Outcomes: 6-Month Longitudinal Study of 150 Children',
      authors: 'Dr. Jennifer Liu, Dr. Robert Kumar, Dr. Emily Watson',
      journal: 'Clinical Psychology Review',
      date: '2024-11-20',
      category: 'clinical-trials',
      abstract: 'Longitudinal analysis of VR therapy effectiveness combining cultural narratives with traditional intervention methods...',
      downloadUrl: '#',
      isOpenAccess: false,
      citations: 89
    },
    {
      id: 3,
      title: 'Cultural Integration in Autism Therapy: The Role of Mythological Narratives',
      authors: 'Dr. Priya Sharma, Dr. David Thompson, Dr. Maria Gonzalez',
      journal: 'Autism Research International',
      date: '2024-10-10',
      category: 'case-studies',
      abstract: 'Exploring how culturally-relevant storytelling enhances engagement and therapeutic outcomes in autism spectrum interventions...',
      downloadUrl: '#',
      isOpenAccess: true,
      citations: 56
    }
  ];

  const whitepapers = [
    {
      id: 1,
      title: 'Mindpal Methodology: A Comprehensive Guide to Neural-Based Autism Detection',
      description: 'Technical overview of our 5-stage detection and therapy methodology',
      pages: 45,
      downloadUrl: '#',
      category: 'methodology'
    },
    {
      id: 2,
      title: 'Clinical Implementation Guidelines for EEG-Based Diagnostic Systems',
      description: 'Best practices for integrating Mindpal into clinical workflows',
      pages: 32,
      downloadUrl: '#',
      category: 'clinical-trials'
    },
    {
      id: 3,
      title: 'VR Therapy Environment Design: Cultural Sensitivity and Therapeutic Efficacy',
      description: 'Research-backed approach to creating culturally-informed therapeutic VR experiences',
      pages: 28,
      downloadUrl: '#',
      category: 'case-studies'
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Case Study: Early Intervention Success with Alex, Age 6',
      outcome: 'Focus improvement: 40% in 8 weeks',
      therapist: 'Dr. Sarah Chen',
      duration: '8 weeks',
      image: 'https://images.pexels.com/photos/8923/pexels-photo-8923.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Case Study: Teenage Adaptation with Maya, Age 14',
      outcome: 'Social engagement: 60% improvement',
      therapist: 'Dr. Michael Rodriguez',
      duration: '12 weeks',
      image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Case Study: Family-Centered Approach with Jordan, Age 10',
      outcome: 'Family engagement: 75% increase',
      therapist: 'Dr. Jennifer Liu',
      duration: '16 weeks',
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const researchStats = [
    { label: 'Published Papers', value: '24+', icon: FileText },
    { label: 'Clinical Trials', value: '6', icon: Users },
    { label: 'Research Partners', value: '15', icon: Microscope },
    { label: 'Citations', value: '450+', icon: Award }
  ];

  const filteredResearch = featuredResearch.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Research Center
            </span>
          </h1>
          <p className="text-xl text-neural-400 max-w-3xl mx-auto">
            Advancing autism research through innovative neuroscience, 
            culturally-sensitive therapy approaches, and collaborative clinical studies.
          </p>
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {researchStats.map((stat, index) => (
            <div key={stat.label} className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700 text-center">
              <stat.icon className="h-8 w-8 text-teal-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-neural-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neural-400" />
              <input
                type="text"
                placeholder="Search research papers, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-neural-700 border border-neural-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-neural-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-neural-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-neural-700 border border-neural-600 rounded-lg px-4 py-3 text-white focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Research Papers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-teal-400" />
                <span>Published Research</span>
              </h2>
              
              <div className="space-y-6">
                {filteredResearch.map((paper) => (
                  <div key={paper.id} className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700 hover:border-teal-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-neural-400 mb-2">{paper.authors}</p>
                        <div className="flex items-center space-x-4 text-xs text-neural-500">
                          <span>{paper.journal}</span>
                          <span>•</span>
                          <span>{paper.date}</span>
                          <span>•</span>
                          <span>{paper.citations} citations</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {paper.isOpenAccess && (
                          <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                            Open Access
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          paper.category === 'methodology' ? 'bg-teal-500/20 text-teal-400' :
                          paper.category === 'clinical-trials' ? 'bg-primary-500/20 text-primary-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {paper.category.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-neural-300 mb-4 line-clamp-3">
                      {paper.abstract}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors">
                        <Download className="h-4 w-4" />
                        <span className="text-sm">Download PDF</span>
                      </button>
                      <button className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">View Full Paper</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Case Studies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Users className="h-6 w-6 text-teal-400" />
                <span>Clinical Case Studies</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                  <div key={study.id} className="bg-neural-800/50 rounded-2xl overflow-hidden border border-neural-700 hover:border-teal-400/50 transition-all duration-300">
                    <div className="aspect-video relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-semibold text-white mb-2">{study.title}</h3>
                        <p className="text-sm text-teal-400 font-medium">{study.outcome}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between text-sm text-neural-400">
                        <span>Therapist: {study.therapist}</span>
                        <span>Duration: {study.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Whitepapers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <FileText className="h-5 w-5 text-teal-400" />
                <span>Whitepapers</span>
              </h3>
              
              <div className="space-y-4">
                {whitepapers.map((paper) => (
                  <div key={paper.id} className="p-4 bg-neural-700/50 rounded-lg hover:bg-neural-700 transition-colors">
                    <h4 className="font-semibold text-sm mb-2 line-clamp-2">{paper.title}</h4>
                    <p className="text-xs text-neural-400 mb-3 line-clamp-2">{paper.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neural-500">{paper.pages} pages</span>
                      <button className="flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors">
                        <Download className="h-3 w-3" />
                        <span className="text-xs">Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Research Portal Access */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-teal-500/10 to-primary-500/10 rounded-2xl p-6 border border-teal-400/30"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Lock className="h-5 w-5 text-teal-400" />
                <span>Researcher Portal</span>
              </h3>
              
              <p className="text-sm text-neural-400 mb-4">
                Access exclusive datasets, collaborate with our research team, and contribute to advancing autism research.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Access to anonymized datasets</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Collaboration opportunities</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Early access to findings</span>
                </div>
              </div>
              
              <button
                onClick={() => setShowResearcherPortal(true)}
                className="w-full bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Request Access</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-teal-400" />
                <span>Research Updates</span>
              </h3>
              
              <p className="text-sm text-neural-400 mb-4">
                Stay informed about our latest research findings and publication releases.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-neural-700 border border-neural-600 rounded-lg px-4 py-2 text-white placeholder-neural-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                />
                <button className="w-full bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};