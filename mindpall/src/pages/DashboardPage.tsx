import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Calendar,
  Download,
  Eye,
  Brain,
  Shield,
  Clock,
  Target,
  Zap,
  Award,
  FileText,
  Activity,
  HeadphonesIcon,
  CheckCircle,
  AlertTriangle,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [userType, setUserType] = useState<'therapist' | 'family'>('therapist');
  const [selectedPatient, setSelectedPatient] = useState('patient-1');
  const [dateRange, setDateRange] = useState('last-30-days');

  const patients = [
    { id: 'patient-1', name: 'Alex M.', age: 8, stage: 2, lastSession: '2025-01-15' },
    { id: 'patient-2', name: 'Sarah K.', age: 12, stage: 1, lastSession: '2025-01-14' },
    { id: 'patient-3', name: 'Jordan P.', age: 6, stage: 3, lastSession: '2025-01-13' },
    { id: 'patient-4', name: 'Maya C.', age: 10, stage: 2, lastSession: '2025-01-12' }
  ];

  const sessionData = [
    { date: '2025-01-01', focusScore: 65, engagement: 70, alphaWaves: 7.8 },
    { date: '2025-01-05', focusScore: 72, engagement: 75, alphaWaves: 8.1 },
    { date: '2025-01-10', focusScore: 78, engagement: 82, alphaWaves: 8.4 },
    { date: '2025-01-15', focusScore: 85, engagement: 88, alphaWaves: 8.7 }
  ];

  const recentSessions = [
    { id: 1, date: '2025-01-15', duration: '25 min', scene: 'Ocean Waves', focusScore: 85, completed: true },
    { id: 2, date: '2025-01-13', duration: '20 min', scene: 'Forest Sanctuary', focusScore: 78, completed: true },
    { id: 3, date: '2025-01-11', duration: '15 min', scene: 'Mountain Peak', focusScore: 72, completed: false },
    { id: 4, date: '2025-01-09', duration: '30 min', scene: 'Sky Garden', focusScore: 80, completed: true }
  ];

  const therapyMetrics = [
    { label: 'Focus Stability', value: '+25%', trend: 'up', color: 'text-green-400' },
    { label: 'Distraction Drops', value: '-40%', trend: 'down', color: 'text-green-400' },
    { label: 'Session Completion', value: '92%', trend: 'up', color: 'text-teal-400' },
    { label: 'Engagement Score', value: '88%', trend: 'up', color: 'text-primary-400' }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-primary-400 bg-clip-text text-transparent">
                Progress Dashboard
              </span>
            </h1>
            <p className="text-xl text-neural-400">
              Comprehensive neural development tracking and therapy insights
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* User Type Toggle */}
            <div className="bg-neural-800 rounded-lg p-1 flex">
              <button
                onClick={() => setUserType('therapist')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  userType === 'therapist'
                    ? 'bg-teal-500 text-white'
                    : 'text-neural-400 hover:text-white'
                }`}
              >
                Therapist View
              </button>
              <button
                onClick={() => setUserType('family')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  userType === 'family'
                    ? 'bg-teal-500 text-white'
                    : 'text-neural-400 hover:text-white'
                }`}
              >
                Family View
              </button>
            </div>

            <button className="bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </motion.div>

        {userType === 'therapist' ? (
          // Therapist View
          <div className="space-y-8">
            {/* Patient Selector & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-4 gap-6"
            >
              {/* Patient Selector */}
              <div className="lg:col-span-1 bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Users className="h-5 w-5 text-teal-400" />
                  <span>Patients</span>
                </h3>
                <div className="space-y-3">
                  {patients.map((patient) => (
                    <div
                      key={patient.id}
                      onClick={() => setSelectedPatient(patient.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedPatient === patient.id
                          ? 'bg-teal-500/20 border border-teal-400/50'
                          : 'bg-neural-700/50 hover:bg-neural-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">{patient.name}</h4>
                          <p className="text-xs text-neural-400">Age {patient.age}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          patient.stage === 1 ? 'bg-green-500/20 text-green-400' :
                          patient.stage === 2 ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          Stage {patient.stage}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                  <div className="flex items-center justify-between mb-4">
                    <Brain className="h-8 w-8 text-teal-400" />
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-teal-400 mb-1">4</h3>
                  <p className="text-sm text-neural-400">Active Patients</p>
                </div>

                <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="h-8 w-8 text-primary-400" />
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-400 mb-1">24</h3>
                  <p className="text-sm text-neural-400">Sessions This Week</p>
                </div>

                <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                  <div className="flex items-center justify-between mb-4">
                    <Target className="h-8 w-8 text-yellow-400" />
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-1">87%</h3>
                  <p className="text-sm text-neural-400">Avg Focus Score</p>
                </div>
              </div>
            </motion.div>

            {/* Progress Charts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* EEG Progress Chart */}
              <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-teal-400" />
                  <span>EEG Progress Tracking</span>
                </h3>
                
                <div className="space-y-4">
                  {sessionData.map((session, index) => (
                    <div key={session.date} className="flex items-center space-x-4">
                      <div className="text-sm text-neural-400 w-20">{session.date.slice(5)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Focus Score</span>
                          <span className="text-sm font-bold text-teal-400">{session.focusScore}%</span>
                        </div>
                        <div className="bg-neural-700 rounded-full h-2">
                          <div 
                            className="bg-teal-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${session.focusScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Session Analysis */}
              <div className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-teal-400" />
                  <span>Recent VR Sessions</span>
                </h3>
                
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="flex items-center space-x-4 p-3 bg-neural-700/30 rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        session.completed ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{session.scene}</span>
                          <span className="text-sm text-teal-400 font-bold">{session.focusScore}%</span>
                        </div>
                        <div className="text-xs text-neural-400">
                          {session.date} • {session.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Detailed Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-teal-400" />
                <span>Clinical Analysis</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-400 mb-1">8.7Hz</div>
                  <div className="text-sm text-neural-400">Alpha Waves</div>
                  <div className="text-xs text-green-400 mt-1">↑ Improving</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400 mb-1">142ms</div>
                  <div className="text-sm text-neural-400">ERP Latency</div>
                  <div className="text-xs text-yellow-400 mt-1">→ Stable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">0.23</div>
                  <div className="text-sm text-neural-400">Asymmetry Index</div>
                  <div className="text-xs text-green-400 mt-1">↓ Better</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">0.87</div>
                  <div className="text-sm text-neural-400">Stability Score</div>
                  <div className="text-xs text-green-400 mt-1">↑ Excellent</div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Family View
          <div className="space-y-8">
            {/* Family Quick Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {therapyMetrics.map((metric, index) => (
                <div key={metric.label} className="bg-neural-800/50 rounded-2xl p-6 border border-neural-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${metric.color} text-2xl font-bold`}>
                      {metric.value}
                    </div>
                    {metric.trend === 'up' ? (
                      <ArrowUp className="h-5 w-5 text-green-400" />
                    ) : (
                      <ArrowDown className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                  <p className="text-sm text-neural-400">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Simple Progress Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-neural-800/50 rounded-2xl p-8 border border-neural-700"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Alex's Journey This Month
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-full"></div>
                    <div className="absolute inset-4 bg-teal-500/40 rounded-full"></div>
                    <div className="absolute inset-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Focus Improved</h4>
                  <p className="text-sm text-neural-400">25% better concentration during activities</p>
                </div>

                <div>
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-primary-500/20 rounded-full"></div>
                    <div className="absolute inset-4 bg-primary-500/40 rounded-full"></div>
                    <div className="absolute inset-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <HeadphonesIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Loves VR Sessions</h4>
                  <p className="text-sm text-neural-400">92% session completion rate</p>
                </div>

                <div>
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full"></div>
                    <div className="absolute inset-4 bg-yellow-500/40 rounded-full"></div>
                    <div className="absolute inset-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Achieved Goals</h4>
                  <p className="text-sm text-neural-400">Unlocked 3 new therapy environments</p>
                </div>
              </div>
            </motion.div>

            {/* Therapy Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-teal-500/10 to-primary-500/10 rounded-2xl p-8 border border-teal-400/30"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                <Brain className="h-5 w-5 text-teal-400" />
                <span>Recommended Activities</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-neural-800/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Morning VR Session</h4>
                  <p className="text-sm text-neural-400 mb-3">Ocean Waves environment with Raga Yaman</p>
                  <div className="text-xs text-teal-400">15-20 minutes recommended</div>
                </div>
                
                <div className="bg-neural-800/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2">Attention Games</h4>
                  <p className="text-sm text-neural-400 mb-3">Memory Flip challenges to boost focus</p>
                  <div className="text-xs text-primary-400">2-3 rounds after school</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Compliance Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-neural-800/30 rounded-2xl p-6 border border-neural-700 text-center"
        >
          <Shield className="h-8 w-8 text-teal-400 mx-auto mb-3" />
          <p className="text-sm text-neural-400 mb-2">
            All data is encrypted and HIPAA/GDPR compliant. Only authorized therapists can access detailed medical information.
          </p>
          <div className="flex justify-center space-x-6 text-xs text-neural-500">
            <span>🔒 Encrypted Storage</span>
            <span>🏥 Clinical Grade</span>
            <span>👨‍⚕️ Therapist Verified</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};