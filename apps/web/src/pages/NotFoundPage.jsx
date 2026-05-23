import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <Helmet>
        <title>404 - Page Not Found | Fashionable</title>

        <meta
          name="description"
          content="The page you are looking for does not exist on Fashionable."
        />

        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-10 text-center shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-[#FF006E]/10 p-5 rounded-full border border-[#FF006E]/30">
            <AlertTriangle className="w-14 h-14 text-[#FF006E]" />
          </div>
        </div>

        <h1
          className="text-6xl font-extrabold text-white mb-4"
          aria-label="404 Page Not Found"
        >
          404
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 leading-relaxed mb-8">
          The page you are trying to access does not exist, may have been moved,
          or the URL may be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-[#00D9FF] to-[#FF006E] text-white font-bold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="bg-[#2a2a2a] border border-[#3a3a3a] text-white font-bold px-6 py-3 rounded-lg hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}