import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Mail, ArrowLeft, KeyRound, CheckCircle, ShieldAlert } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

export default function PasswordResetPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  
  const { toast } = useToast();

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (loading) return;

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${pb.baseUrl}/api/custom/otp-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cleanEmail })
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'This email address is not registered.');
      }

      setOtpRequested(true);
      toast({ 
        title: "OTP Dispatched 📧", 
        description: "A 6-digit verification code has been sent to your email." 
      });
    } catch (error) {
      console.error("OTP Request error:", error);
      toast({ 
        title: "OTP Request Failed", 
        description: error.message || "Failed to send OTP code. Please check your email.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (loading) return;

    const cleanEmail = email.trim().toLowerCase();
    const cleanCode = otpCode.trim();

    if (!cleanCode || cleanCode.length < 6) {
      toast({
        title: "Error",
        description: "Please enter the complete 6-digit OTP code.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${pb.baseUrl}/api/custom/otp-verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cleanEmail, code: cleanCode })
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Invalid or expired OTP code.');
      }

      // Log the user in programmatically by saving state to pocketbase authStore
      pb.authStore.save(resData.token, resData.record);
      
      toast({
        title: "Logged In Successfully! 🎉",
        description: "Welcome back! Redirecting you to the dashboard.",
      });

      navigate('/dashboard');
    } catch (error) {
      console.error("OTP Verification error:", error);
      toast({
        title: "Login Failed",
        description: error.message || "Invalid or expired OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>OTP Passwordless Login | Fashionable</title>
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] shadow-2xl"
      >
        {!otpRequested ? (
          // STATE A: Enter email to request OTP
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Passwordless Login</h2>
              <p className="text-gray-400">Forgot your password? Enter your email to log in directly via OTP.</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleRequestOTP}>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Registered email address"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gradient-to-r from-[#00D9FF] to-[#FF006E] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending OTP...' : 'Send Verification OTP'}
              </button>
            </form>
          </>
        ) : (
          // STATE B: Enter 6-digit OTP to log in
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Verify OTP</h2>
              <p className="text-gray-400">Enter the 6-digit verification code sent to <br /><span className="text-[#00D9FF] font-semibold">{email}</span></p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleVerifyOTP}>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="otp"
                  maxLength={6}
                  required
                  autoFocus
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 tracking-[0.5em] text-center font-bold text-lg focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="------"
                />
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gradient-to-r from-[#00D9FF] to-[#FF006E] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Verifying...' : 'Verify OTP & Log In'}
                </button>

                <button
                  type="button"
                  onClick={handleRequestOTP}
                  disabled={loading}
                  className="w-full text-center text-xs text-gray-400 hover:text-white transition-colors py-2"
                >
                  Didn't get code? Resend OTP
                </button>
              </div>
            </form>
          </>
        )}

        <div className="text-center mt-4">
          <Link 
            to="/login" 
            onClick={() => setOtpRequested(false)}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}