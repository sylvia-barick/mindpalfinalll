import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { signInWithEmail, signUpWithEmail, signInWithGoogle } from '../authService';

// Animation keyframes
const float = keyframes`0%, 100% { transform: translateY(0px); opacity: 0.5; } 50% { transform: translateY(-20px); opacity: 1; }`;
const slideDown = keyframes`from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; }`;
const pulse = keyframes`0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); }`;
const spin = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const glow = keyframes`0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); }`;

// Styled components
interface ParticleProps { delay: number; duration: number; }

const Particle = styled.div<ParticleProps>`
  position: absolute;
  width: 0.5px;
  height: 0.5px;
  background-color: #22d3ee;
  border-radius: 50%;
  animation: ${float} ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const AnimatedContainer = styled.div` animation: ${slideDown} 0.3s ease-out; `;
const FloatingElement = styled.div<{ delay?: string }>` animation: ${pulse} 4s ease-in-out infinite; animation-delay: ${({ delay }) => delay || '0s'}; `;
const GlowEffect = styled.div<{ delay?: string }>` animation: ${glow} 4s ease-in-out infinite; animation-delay: ${({ delay }) => delay || '0s'}; `;
const SpinSlow = styled.div` animation: ${spin} 10s linear infinite; `;

interface LandingPageProps { onContinue: () => void; }

const LandingPage: React.FC<LandingPageProps> = ({ onContinue }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const particlesArray: ParticleProps[] = Array.from({ length: 50 }).map((_, i) => ({
      delay: Math.random() * 6,
      duration: Math.random() * 3 + 3
    }));
    setParticles(particlesArray);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '', confirmPassword: '' };

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email required';
      valid = false;
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }
    if (!isLoginForm && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const user = isLoginForm
        ? await signInWithEmail(formData.email, formData.password)
        : await signUpWithEmail(formData.email, formData.password);

      console.log(`${isLoginForm ? 'Signed in' : 'Signed up'}:`, user);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        onContinue();
      }, 1000);

    } catch (error: any) {
      console.error(`${isLoginForm ? 'Sign-in' : 'Sign-up'} error:`, error);
      if (isLoginForm && error.code === 'auth/invalid-credential') {
        alert('No account found. Please register first.');
        setIsLoginForm(false);
      } else {
        alert(error.message || 'Authentication failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setFormData({ email: '', password: '', confirmPassword: '' });
    setErrors({ email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((p, i) => (
          <Particle key={i} delay={p.delay} duration={p.duration} style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }} />
        ))}
      </div>

      {/* Floating glow elements */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <FloatingElement className="absolute top-1/4 left-10 w-16 h-16 bg-cyan-400 bg-opacity-10 rounded-full" />
        <FloatingElement delay="1s" className="absolute top-3/5 right-20 w-16 h-16 bg-cyan-400 bg-opacity-10 rounded-full" />
        <GlowEffect className="absolute top-10 right-10 w-72 h-72 bg-gradient-radial from-purple-500/10 to-transparent rounded-full" />
      </div>

      {/* Auth Card */}
      <div className="relative z-30 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="bg-white bg-opacity-5 border border-cyan-400 border-opacity-10 rounded-3xl p-8 backdrop-blur-xl relative">
              <SpinSlow className="absolute inset-0 bg-gradient-conic from-purple-500/20 via-cyan-400/20 to-purple-500/20 opacity-20" />
              <div className="relative z-10">

                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {isLoginForm ? 'Welcome to Mindpal' : 'Create Account'}
                  </h2>
                  <p className="text-gray-300 text-sm">
                    {isLoginForm ? 'Log in to continue your session' : 'Join us and explore Mindpal'}
                  </p>
                </div>

                {showSuccess && (
                  <AnimatedContainer className="bg-green-600 text-white p-3 rounded-lg text-center mb-4">
                    {isLoginForm ? 'Signed in successfully!' : 'Account created successfully!'}
                  </AnimatedContainer>
                )}

                {/* Input Fields */}
                <div className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="text-sm text-white">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className={`w-full px-4 py-3 bg-white bg-opacity-10 border ${
                        errors.email ? 'border-red-500' : 'border-cyan-400/20'
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="text-sm text-white">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter password"
                      className={`w-full px-4 py-3 bg-white bg-opacity-10 border ${
                        errors.password ? 'border-red-500' : 'border-cyan-400/20'
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                    />
                  </div>

                  {/* Confirm Password */}
                  {!isLoginForm && (
                    <div>
                      <label className="text-sm text-white">Confirm Password</label>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm password"
                        className={`w-full px-4 py-3 bg-white bg-opacity-10 border ${
                          errors.confirmPassword ? 'border-red-500' : 'border-cyan-400/20'
                        } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400`}
                      />
                      {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-xl text-lg font-semibold transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-60"
                >
                  {isLoading ? (isLoginForm ? 'Signing In...' : 'Creating...') : isLoginForm ? 'Sign In' : 'Sign Up'}
                </button>

                {/* Google login */}
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const user = await signInWithGoogle();
                      alert(`Welcome, ${user.displayName}`);
                      onContinue();
                    } catch {
                      alert('Google sign-in failed.');
                    }
                  }}
                  className="mt-4 w-full bg-white bg-opacity-5 border border-cyan-400 border-opacity-20 text-white py-3 rounded-xl hover:bg-opacity-10"
                >
                  Sign in with Google
                </button>

                {/* Toggle form */}
                <p className="text-sm text-center text-gray-300 mt-4">
                  {isLoginForm ? "Don't have an account?" : "Already have an account?"}
                  <span
                    onClick={toggleForm}
                    className="ml-1 text-cyan-400 cursor-pointer hover:underline"
                  >
                    {isLoginForm ? 'Register' : 'Login'}
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
