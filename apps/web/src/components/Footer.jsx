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
            <div className="grid grid-cols-1 gap-2">
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
          

          <div>
          <span className="text-white font-semibold text-lg mb-4 block">
           Company
          </span>

          <div className="grid grid-cols-1 gap-2">
          <Link
           to="/affiliate-disclosure"
           className="text-gray-400 hover:text-[#00D9FF] text-sm transition-colors duration-300"
          >
 
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
           <div className="flex gap-6">

  {/* Instagram */}
  <motion.a
    whileHover={{ scale: 1.1, y: -2 }}
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-pink-500 transition-colors"
    aria-label="Instagram"
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm6-1a1 1 0 110 2 1 1 0 010-2zm-6 2.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5z" />
    </svg>
  </motion.a>

  {/* Facebook */}
  <motion.a
    whileHover={{ scale: 1.1, y: -2 }}
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[#00D9FF] transition-colors"
    aria-label="Facebook"
  >
    <svg
      className="w-8 h-8"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.018 3.657 9.183 8.438 9.93v-7.03H7.898v-2.9h2.54V9.845c0-2.52 1.492-3.91 3.777-3.91 1.094 0 2.238.195 2.238.195v2.474h-1.26c-1.242 0-1.63.774-1.63 1.567v1.88h2.773l-.443 2.9h-2.33V22c4.78-.747 8.437-4.912 8.437-9.93z"/>
    </svg>
  </motion.a>

</div>
            </div>
          </div>
        </div>
        </div>
    </footer>
  
  );
}
