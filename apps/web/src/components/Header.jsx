import React, { useCallback, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, User, LogOut, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentUser, logout, isAuthenticated } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trending', path: '/trending' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

 const handleDarkModeToggle = useCallback(() => {
  toast({
    title: '🌙 Dark Mode Active',
    description: 'Dark mode is already enabled! Light mode coming soon.',
  });
}, [toast]);

const handleLogout = useCallback(() => {
  logout();
  navigate('/');
  toast({
    title: 'Logged Out',
    description: 'You have been successfully logged out.',
  });
}, [logout, navigate, toast]);

const handleMobileMenuToggle = useCallback(() => {
  setMobileMenuOpen((open) => !open);
}, []);

const closeMobileMenu = useCallback(() => {
  setMobileMenuOpen(false);
}, []);

const handleMobileLogout = useCallback(() => {
  handleLogout();
  setMobileMenuOpen(false);
}, [handleLogout]);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#2a2a2a] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] via-[#FF006E] to-[#00D9FF] bg-clip-text text-transparent"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Fashionable
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActivePath(link.path)
                    ? 'text-[#00D9FF]'
                    : 'text-gray-300 hover:text-[#00D9FF]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] transform origin-left transition-transform duration-300 ${
                  isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActivePath('/dashboard')
                    ? 'text-[#00D9FF]'
                    : 'text-gray-300 hover:text-[#00D9FF]'
                }`}
              >
                Dashboard
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00D9FF] to-[#FF006E] transform origin-left transition-transform duration-300 ${
                  isActivePath('/dashboard') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Visual Search Link */}
            <Link to="/visual-search" title="Visual Search">
              <button className={`p-2 rounded-lg border transition-all duration-300 ${
                isActivePath('/visual-search')
                  ? 'bg-[#FF006E]/20 border-[#FF006E] text-[#FF006E]'
                  : 'bg-[#1a1a1a] border-[#2a2a2a] text-gray-400 hover:text-[#FF006E] hover:border-[#FF006E]'
              }`}>
                <Camera className="w-5 h-5" />
              </button>
            </Link>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{currentUser.email}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-gray-300 hover:text-[#FF006E] transition-colors flex items-center gap-1"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="text-sm font-bold bg-[#1a1a1a] border border-[#00D9FF] text-[#00D9FF] px-4 py-2 rounded-lg hover:bg-[#00D9FF] hover:text-black transition-all duration-300">
                    Login
                  </button>
                </Link>
              )}
            </div>

            <button
              onClick={handleDarkModeToggle}
              className="p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#00D9FF] transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,217,255,0.3)]"
              aria-label="Toggle dark mode"
            >
             <Moon className="w-5 h-5 text-[#00D9FF]" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#00D9FF] transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#00D9FF]" />
              ) : (
                <Menu className="w-6 h-6 text-[#00D9FF]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
              style={{ top: '64px' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-16 bottom-0 w-64 bg-[#0a0a0a] border-l border-[#2a2a2a] shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActivePath(link.path)
                        ? 'bg-gradient-to-r from-[#00D9FF]/20 to-[#FF006E]/20 text-[#00D9FF] border border-[#00D9FF]'
                        : 'text-gray-300 hover:text-[#00D9FF] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <Link
                  to="/visual-search"
                 onClick={closeMobileMenu}
                  className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                    isActivePath('/visual-search')
                      ? 'bg-gradient-to-r from-[#00D9FF]/20 to-[#FF006E]/20 text-[#00D9FF] border border-[#00D9FF]'
                      : 'text-gray-300 hover:text-[#00D9FF] hover:bg-[#1a1a1a]'
                  }`}
                >
                  Visual Search
                </Link>

                {isAuthenticated && (
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActivePath('/dashboard')
                        ? 'bg-gradient-to-r from-[#00D9FF]/20 to-[#FF006E]/20 text-[#00D9FF] border border-[#00D9FF]'
                        : 'text-gray-300 hover:text-[#00D9FF] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    Dashboard
                  </Link>
                )}

                <div className="pt-4 border-t border-[#2a2a2a]">
                  {isAuthenticated ? (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-400 px-4">{currentUser.email}</p>
                      <button
                       onClick={handleMobileLogout}
                        className="w-full text-left text-lg font-medium py-2 px-4 rounded-lg text-[#FF006E] hover:bg-[#1a1a1a] transition-all"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block w-full text-center bg-[#00D9FF] text-black font-bold py-2 rounded-lg hover:bg-[#00b8d9] transition-colors"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}