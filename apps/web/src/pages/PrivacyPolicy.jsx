import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12">
    <Helmet>
  <title>Privacy Policy | Fashionable</title>

  <meta
    name="description"
    content="Read Fashionable's Privacy Policy to understand how we collect, use, protect and manage your personal information and affiliate tracking data."
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://your-domain.com/privacy" />

  <meta property="og:title" content="Privacy Policy | Fashionable" />

  <meta
    property="og:description"
    content="Learn how Fashionable handles personal data, cookies, affiliate tracking and user privacy."
  />

  <meta property="og:type" content="website" />

  <meta
    property="og:url"
    content="https://your-domain.com/privacy"
  />

  <meta
    property="og:image"
    content="https://your-domain.com/images/product-fallback.webp"
  />
</Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-[#00D9FF]" />
            <h1
  className="text-4xl font-bold text-white"
  aria-label="Fashionable Privacy Policy"
>Privacy Policy</h1>
          </div>
          
          <p className="text-gray-400 mb-8">Last Updated: February 15, 2026</p>

          <article className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 space-y-8">
            <section id="information-we-collect">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                Fashionable ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. This policy complies with the General Data Protection Regulation (GDPR) and India's Digital Personal Data Protection Act (DPDP).
              </p>
            </section>

            <section id="information-we-collect">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h3 className="text-white font-semibold mb-2">2.1 Personal Information</h3>
                  <p className="leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Name and email address (when you contact us or subscribe to our newsletter)</li>
                    <li>Contact information submitted through our contact form</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">2.2 Automatically Collected Information</h3>
                  <p className="leading-relaxed">
                    When you visit our website, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="how-we-use-your-information">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                <li>To provide and maintain our price comparison services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To analyze website usage and improve our services</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section id="cookies-and-tracking-technologies">
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </section>

            <section id="third-party-services">
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services and Affiliate Links</h2>
              <p className="text-gray-400 leading-relaxed">
                Our website contains affiliate links to third-party retailers. When you click on these links, you may be redirected to external websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section id="data-retention">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section id="your-rights">
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR & DPDP)</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Under GDPR and India's DPDP Act, you have the following rights:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-400">
                <li><strong className="text-white">Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong className="text-white">Right to Restrict Processing:</strong> Request limitation of data processing</li>
                <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong className="text-white">Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </section>

            <section id="data-security">
              <h2 className="text-2xl font-bold text-white mb-4">8. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section id="childrens-privacy">
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section id="international-data-transfers">
              <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
              <p className="text-gray-400 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your country. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section id="information-we-collect">
              <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-gray-400">
                  <strong className="text-white">Email:</strong> privacy@fashionable.com<br />
                  <strong className="text-white">Address:</strong> Fashionable Privacy Team,<strong className="text-white">Email:</strong> fashionableviashop@gmail.com
                </p>
              </div>
            </section>
          </article>
        </motion.div>
      </div>
    </div>
  );
}