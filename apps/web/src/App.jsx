import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageLoader from '@/components/PageLoader.jsx';
const HomePage = lazy(() => import('@/pages/HomePage.jsx'));
const TrendingPage = lazy(() => import('@/pages/TrendingPage.jsx'));
const PriceComparison = lazy(() => import('@/pages/PriceComparison.jsx'));
const AboutPage = lazy(() => import('@/pages/AboutPage.jsx'));
const ContactPage = lazy(() => import('@/pages/ContactPage.jsx'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy.jsx'));
const AffiliateDisclosure = lazy(() => import('@/pages/AffiliateDisclosure.jsx'));
const TermsOfUse = lazy(() => import('@/pages/TermsOfUse.jsx'));
const FAQPage = lazy(() => import('@/pages/FAQPage.jsx'));
const LoginPage = lazy(() => import('@/pages/LoginPage.jsx'));
const SignupPage = lazy(() => import('@/pages/SignupPage.jsx'));
const PasswordResetPage = lazy(() => import('@/pages/PasswordResetPage.jsx'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage.jsx'));
const VisualSearchPage = lazy(() => import('@/pages/VisualSearchPage.jsx'));
const AdminProductsPage = lazy(() => import('@/pages/AdminProductsPage.jsx'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage.jsx'));
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
          <ScrollToTop />
          <Header />
        <main className="flex-grow">
  <Suspense
    fallback={<PageLoader />}
  >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trending" element={<TrendingPage />} />
      <Route path="/product/:id" element={<PriceComparison />} />
      <Route path="/visual-search" element={<VisualSearchPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route
  path="/admin/products"
  element={
    <ProtectedRoute requireAdmin>
      <AdminProductsPage />
    </ProtectedRoute>
  }
/>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/password-reset" element={<PasswordResetPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
</main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;