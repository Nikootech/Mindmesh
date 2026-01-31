import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import SolutionsGallery from './pages/solutions-gallery';
import AboutUniverse from './pages/about-universe';
import ContactConsultation from './pages/contact-consultation';
import ServicesOverview from './pages/services-overview';
import ClientSuccessCenter from './pages/client-success-center';
import Homepage from './pages/homepage';

const Routes =() => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<AboutUniverse />} />
        <Route path="/solutions-gallery" element={<SolutionsGallery />} />
        <Route path="/about-universe" element={<AboutUniverse />} />
        <Route path="/contact-consultation" element={<ContactConsultation />} />
        <Route path="/contact" element={<ContactConsultation />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/client-success-center" element={<ClientSuccessCenter />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </ErrorBoundary>
  );
};

export default Routes;
