import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Mail, ArrowLeft, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

export default function PasswordResetPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const handleRequestReset = async (e) => {
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
      await resetPassword(cleanEmail);
      setSubmitted(true);
      toast({ 
        title: "Email Sent", 
        description: "Reset instructions have been sent to your email." 
      });
    } catch (error) {
      console.error("Reset error:", error);
      toast({ 
        title: "Error", 
        description: "Failed to send reset email. Please verify the email address.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmReset = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!password || !passwordConfirm) {
      toast({
        title: "Error",
        description: "Please fill in all password fields.",
        variant: "destructive",
      });
      return;
    }

    if (password !== passwordConfirm) {
      toast({
        title: "Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 8) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await pb.collection('users').confirmPasswordReset(token, password, passwordConfirm);
      toast({
        title: "Success! 🎉",
        description: "Your password has been updated. You can now log in.",
      });
      navigate('/login');
    } catch (error) {
      console.error("Confirm reset error:", error);
      toast({
        title: "Link Expired",
        description: "The password reset link is invalid or has expired. Please request a new one.",
        variant: "destructive",
      });
      navigate('/password-reset', { replace: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{token ? 'Set New Password | Fashionable' : 'Reset Password | Fashionable'}</title>
      </Helmet>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] shadow-2xl"
      >
        {token ? (
          // STATE 1: Enter New Password (If reset token is present in URL)
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">New Password</h2>
              <p className="text-gray-400">Set a secure password for your account</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleConfirmReset}>
              <div className="space-y-4">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                    placeholder="New Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#00D9FF] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    name="passwordConfirm"
                    required
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gradient-to-r from-[#00D9FF] to-[#FF006E] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Updating...' : 'Update Password & Login'}
              </button>
            </form>
          </>
        ) : (
          // STATE 2: Request Reset Link (Normal flow)
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
              <p className="text-gray-400">Enter your email to receive reset instructions</p>
            </div>

            {!submitted ? (
              <form className="mt-8 space-y-6" onSubmit={handleRequestReset}>
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
                    placeholder="Email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-gradient-to-r from-[#00D9FF] to-[#FF006E] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            ) : (
              <div className="mt-8 text-center space-y-4">
                <div className="flex flex-col items-center gap-3 bg-green-500/10 text-green-400 p-6 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-8 h-8 text-green-500 animate-bounce" />
                  <p className="font-semibold text-white">Reset Email Dispatched</p>
                  <p className="text-sm text-gray-400">
                    If this email is registered, you will receive a reset link shortly. Please check your inbox.
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        <div className="text-center mt-4">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}