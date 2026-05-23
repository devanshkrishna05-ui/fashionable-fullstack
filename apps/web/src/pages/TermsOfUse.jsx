import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">
      <Helmet>
  <title>Terms of Use | Fashionable</title>

  <meta
    name="description"
    content="Read Fashionable's Terms of Use for using our fashion and beauty price comparison platform, affiliate links, third-party retailer links and shopping information."
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://your-domain.com/terms" />

  <meta property="og:title" content="Terms of Use | Fashionable" />
  <meta
    property="og:description"
    content="Review the terms for using Fashionable's price comparison platform and affiliate shopping links."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://your-domain.com/terms" />
  <meta property="og:image" content="https://your-domain.com/images/product-fallback.webp" />
</Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-[#00D9FF]" />
            <h1 className="text-4xl font-bold text-white" aria-label="Fashionable Terms of Use">
  Terms of Use
</h1>
          </div>
          
          <p className="text-gray-400 mb-8">Last Updated: February 15, 2026</p>

          <article className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 space-y-8">
            <section id="acceptance-of-terms">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing and using Fashionable ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Use, please do not use the Service.
              </p>
            </section>

            <section id="description-of-service">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-400 leading-relaxed">
                Fashionable is a price comparison platform that helps users discover trending fashion and beauty products and compare prices across multiple retailers. We provide information and links to third-party retailers but do not sell products directly.
              </p>
            </section>

            <section id="user-responsibilities">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <div className="space-y-3 text-gray-400">
                <p className="leading-relaxed">You agree to:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to any part of the Service</li>
                  <li>Not use automated systems or software to extract data from the Service</li>
                  <li>Not interfere with or disrupt the Service or servers</li>
                  <li>Provide accurate information when contacting us or subscribing to our newsletter</li>
                </ul>
              </div>
            </section>

            <section id="price-information-and-accuracy">
              <h2 className="text-2xl font-bold text-white mb-4">4. Price Information and Accuracy</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                While we strive to provide accurate and up-to-date price information:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                <li>Prices displayed on our website are obtained from third-party retailers and may not always be current</li>
                <li>We are not responsible for pricing errors or discrepancies</li>
                <li>The final price you pay will be determined by the retailer at the time of purchase</li>
                <li>We recommend verifying prices on the retailer's website before making a purchase</li>
              </ul>
            </section>

            <section id="third-party-links-and-purchases">
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Links and Purchases</h2>
              <p className="text-gray-400 leading-relaxed">
                Our Service contains affiliate links to third-party retailers. When you click these links, you will be redirected to external websites. We are not responsible for the content, privacy policies, or practices of these third-party sites. Any purchases you make are subject to the terms and conditions of the respective retailer.
              </p>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content on Fashionable, including but not limited to text, graphics, logos, images, and software, is the property of Fashionable or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section id="disclaimer-of-warranties">
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the Service will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of price information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
            </section>

            <section id="limitation-of-liability">
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FASHIONABLE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400 mt-3">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, or other harmful code</li>
                <li>Purchases made through third-party retailers</li>
              </ul>
            </section>

            <section id="indemnification">
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p className="text-gray-400 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Fashionable and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms of Use.
              </p>
            </section>

            <section id="terms-changes">
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. We will notify users of any material changes by posting the new Terms of Use on this page and updating the "Last Updated" date. Your continued use of the Service after such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right to terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms of Use.
              </p>
            </section>

            <section id="governing-law">
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
              </p>
            </section>

            <section id="contact-information">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-gray-400">
                  <strong className="text-white">Email:</strong> fashionableviashop@gmail.com<br />
                  <strong className="text-white">Address:</strong> Fashionable Legal Team,
                </p>
              </div>
            </section>
          </article>
        </motion.div>
      </div>
    </div>
  );
}