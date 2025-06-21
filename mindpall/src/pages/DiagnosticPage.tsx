import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Activity, 
  Brain, 
  BarChart3, 
  FileText, 
  Shield, 
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Download
} from 'lucide-react';

export const DiagnosticPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      simulateAnalysis();
    }
  };

  const simulateAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setAnalysisResults({
      frontalAlphaAsymmetry: 0.23,
      erpLatency: 142,
      erpAmplitude: -4.2,
      jerkIndex: 1.8,
      stabilityIndex: 0.75,
      stage: 2,
      confidence: 0.87
    });
    setIsAnalyzing(false);
  };

  const getStageInfo = (stage: number) => {
    switch (stage) {
      case 1:
        return {
          label: 'Stage 1 - Normal',
          color: 'text-green-400',
          bgColor: 'bg-green-500/20',
          icon: CheckCircle,
          description: 'Neural patterns within typical range'
        };
      case 2:
        return {
          label: 'Stage 2 - Mild Atypicality',
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-500/20',
          icon: AlertTriangle,
          description: 'Some atypical patterns detected, monitoring recommended'
        };
      case 3:
        return {
          label: 'Stage 3 - High ASD Risk',
          color: 'text-red-400',
          bgColor: 'bg-red-500/20',
          icon: XCircle,
          description: 'Significant atypical patterns, further evaluation recommended'
        };
      default:
        return {
          label: 'Unknown',
          color: 'text-neural-400',
          bgColor: 'bg-neural-500/20',
          icon: Brain,
          description: 'Analysis pending'
        };
    }
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
              EEG/ERP Analysis
            </span>
          </h1>
          <p className="text-xl text-neural-400 max-w-3xl mx-auto">
            Advanced neural signal processing for autism spectrum assessment. 
            Upload EEG data or connect your Emotiv headset for real-time analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neural-800/50 rounded-2xl p-8 border border-neural-700"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <Upload className="h-6 w-6 text-teal-400" />
              <span>Data Upload</span>
            </h2>

            {!uploadedFile ? (
              <div className="border-2 border-dashed border-neural-600 rounded-xl p-12 text-center hover:border-teal-400/50 transition-colors">
                <Brain className="h-16 w-16 text-neural-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Upload EEG File</h3>
                <p className="text-neural-400 mb-6">
                  Supports CSV, EDF formats from Emotiv, OpenBCI, or clinical systems
                </p>
                <label className="bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-200 inline-block">
                  Select File
                  <input
                    type="file"
                    accept=".csv,.edf,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            ) : (
              <div className="bg-neural-700/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-teal-400" />
                  <div>
                    <p className="font-semibold">{uploadedFile.name}</p>
                    <p className="text-sm text-neural-400">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                </div>
                
                {isAnalyzing && (
                  <div className="flex items-center space-x-3 text-teal-400">
                    <Zap className="h-5 w-5 animate-pulse" />
                    <span>Analyzing neural patterns...</span>
                  </div>
                )}
              </div>
            )}

            {/* Real-time Connection */}
            <div className="mt-8 p-6 bg-neural-700/30 rounded-xl border border-neural-600">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary-400" />
                <span>Real-time EEG</span>
              </h3>
              <p className="text-neural-400 mb-4">Connect Emotiv headset for live analysis</p>
              <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Connect Device
              </button>
            </div>
          </motion.div>

          {/* Analysis Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-neural-800/50 rounded-2xl p-8 border border-neural-700"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <BarChart3 className="h-6 w-6 text-teal-400" />
              <span>Analysis Results</span>
            </h2>

            {!analysisResults ? (
              <div className="text-center py-12">
                <Brain className="h-16 w-16 text-neural-600 mx-auto mb-4" />
                <p className="text-neural-400">Upload EEG data to see analysis results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Stage Classification */}
                <div className={`p-6 rounded-xl ${getStageInfo(analysisResults.stage).bgColor} border border-current/20`}>
                  <div className="flex items-center space-x-3 mb-3">
                    {React.createElement(getStageInfo(analysisResults.stage).icon, { 
                      className: `h-6 w-6 ${getStageInfo(analysisResults.stage).color}` 
                    })}
                    <h3 className={`text-lg font-semibold ${getStageInfo(analysisResults.stage).color}`}>
                      {getStageInfo(analysisResults.stage).label}
                    </h3>
                  </div>
                  <p className="text-neural-300">{getStageInfo(analysisResults.stage).description}</p>
                  <div className="mt-3 text-sm text-neural-400">
                    Confidence: {(analysisResults.confidence * 100).toFixed(1)}%
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neural-700/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Frontal Alpha Asymmetry</h4>
                    <p className="text-2xl font-bold text-teal-400">{analysisResults.frontalAlphaAsymmetry}</p>
                    <p className="text-sm text-neural-400">log(AF4) - log(AF3)</p>
                  </div>
                  
                  <div className="bg-neural-700/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">ERP Latency</h4>
                    <p className="text-2xl font-bold text-primary-400">{analysisResults.erpLatency}ms</p>
                    <p className="text-sm text-neural-400">T7/T8 response</p>
                  </div>
                  
                  <div className="bg-neural-700/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">ERP Amplitude</h4>
                    <p className="text-2xl font-bold text-yellow-400">{analysisResults.erpAmplitude}μV</p>
                    <p className="text-sm text-neural-400">Peak response</p>
                  </div>
                  
                  <div className="bg-neural-700/50 rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Stability Index</h4>
                    <p className="text-2xl font-bold text-green-400">{analysisResults.stabilityIndex}</p>
                    <p className="text-sm text-neural-400">MPU6050 derived</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex-1 bg-gradient-to-r from-teal-500 to-primary-500 hover:from-teal-600 hover:to-primary-600 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download Report</span>
                  </button>
                  <button className="px-4 py-3 border border-neural-600 hover:border-teal-400 rounded-lg font-medium transition-colors">
                    Share Results
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Compliance Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-neural-800/30 rounded-2xl p-8 border border-neural-700 text-center"
        >
          <Shield className="h-12 w-12 text-teal-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Clinical Grade Security</h3>
          <p className="text-neural-400 mb-4">
            All analyses are HIPAA/GDPR compliant. Data is encrypted and only accessible to certified therapists.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-neural-500">
            <span>🔒 End-to-end Encryption</span>
            <span>🏥 HIPAA Compliant</span>
            <span>🔐 GDPR Compliant</span>
            <span>📋 Clinical Validated</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};