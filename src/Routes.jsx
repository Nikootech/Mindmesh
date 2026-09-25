import React, { Suspense, lazy } from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import AboutUniverse from './pages/about-universe';

// Code-split secondary routes so they don't bloat the critical landing page bundle
const SolutionsGallery = lazy(() => import('./pages/solutions-gallery'));
const ContactConsultation = lazy(() => import('./pages/contact-consultation'));
const ServicesOverview = lazy(() => import('./pages/services-overview'));
const ClientSuccessCenter = lazy(() => import('./pages/client-success-center'));
const Homepage = lazy(() => import('./pages/homepage'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={null}>
        <RouterRoutes>
          <Route path="/" element={<AboutUniverse />} />
          <Route path="/about-universe" element={<AboutUniverse />} />
          <Route path="/solutions-gallery" element={<SolutionsGallery />} />
          <Route path="/contact-consultation" element={<ContactConsultation />} />
          <Route path="/contact" element={<ContactConsultation />} />
          <Route path="/services-overview" element={<ServicesOverview />} />
          <Route path="/client-success-center" element={<ClientSuccessCenter />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/cookie-settings" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
