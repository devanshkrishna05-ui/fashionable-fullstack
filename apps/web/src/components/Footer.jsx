import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Affiliate Disclosure', path: '/affiliate-disclosure' },
    { name: 'Terms of Use', path: '/terms' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
         <div>
         <motion.h2
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-[#00D9FF] via-[#FF006E] to-[#00D9FF] bg-clip-text text-transparent mb-4"
          style={{ fontFamily: "Orbitron, sans-serif" }}
         >
          Fashionable
         </motion.h2>
         </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-white font-semibold text-lg mb-4 block">Quick Links</span>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
          <span className="text-white font-semibold text-lg mb-4 block">
           Company
          </span>

          <div className="grid grid-cols-1 gap-2">
          <Link
           to="/affiliate-disclosure"
           className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors duration-300"
          >

         <div>
         <span className="text-white font-semibold text-lg mb-4 block">
          About Fashionable
         </span>

         <p className="text-gray-400 text-sm leading-relaxed">
          Discover trending fashion and beauty products at the
          best prices. Compare prices across multiple retailers
          and never overpay again.
         </p>
         </div>

      Affiliate Disclosure
    </Link>

    <Link
      to="/about"
      className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors duration-300"
    >
      About
    </Link>

    <Link
      to="/faq"
      className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors duration-300"
    >
      FAQ
    </Link>
  </div>
</div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Fashionable. All rights reserved.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com/"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors"
                aria-label="Instagram"
              >
              <motion.a
               
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D9FF] transition-colors"
              aria-label="Facebook"
              >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.017 3.657 9.173 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.9h-2.33V22c4.78-.757 8.437-4.913 8.437-9.93z"/>
              </svg>
              </motion.a>

                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}