import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import WaveDivider from "./components/WaveDivider.jsx";
import BackToTop from "./components/BackToTop.jsx"; // ✅ Scroll-up button

// Home sections
import Hero from "./components/Hero.jsx";
import Pricing from "./components/Pricing.jsx";
import ChannelsMarquee from "./components/ChannelsMarquee.jsx";
import LogosSwipeBar from "./components/LogosSwipeBar.jsx";
import SmoothLogosBar from "./components/SmoothLogosBar.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import PromoHero from "./components/PromoHero.jsx";
import ProgramsGrid from "./components/ProgramsGrid.jsx";
import StatsCounter from "./components/StatsCounter.jsx";
import TestimonialsSwipe from "./components/TestimonialsSwipe.jsx";

// Lazy-loaded pages
const Contact = lazy(() => import("./pages/Contact.jsx"));
const ContactInfoCards = lazy(() => import("./pages/ContactInfoCards.jsx"));
const Packages = lazy(() => import("./pages/Packages.jsx"));
const Terms = lazy(() => import("./pages/Terms.jsx"));
const Refund = lazy(() => import("./pages/Refund.jsx"));
const Privacy = lazy(() => import("./pages/Privacy.jsx"));
const FAQPage = lazy(() => import("./pages/FAQPage.jsx"));

// ✅ Simple inline 404
function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <a className="btn" href="/">Go Home</a>
      </div>
    </section>
  );
}

// 🏠 Home composition
function Home() {
  return (
    <>
      <Hero />
      <div className="band" />
      <ChannelsMarquee />
      <LogosSwipeBar />
      <PromoHero />
      <StatsCounter />
      <Pricing />
      <SmoothLogosBar
        height={140}
        gap={22}
        speed={0.12}
        direction="rtl"
        pauseOnHover={false}
        pauseOnFocus={false}
        respectReducedMotion={false}
        pauseWhenNotVisible={false}
        logos={[
          "/leagues/liga.png",
          "/leagues/Premier_League.png",
          "/leagues/champions.png",
          "/leagues/bundesliga.png",
          "/leagues/formula.png",
          "/leagues/EFL.png",
          "/leagues/enfusion.png",
          "/leagues/ksw.png",
          "/leagues/ucl.png",
          "/leagues/2026_FIFA_World_Cup.png",
          "/leagues/ufc.png",
          "/leagues/uefa.png",
          "/leagues/europe.png",
        ]}
      />
      <HowItWorks />
      <ProgramsGrid />
      <TestimonialsSwipe
        images={[
          "/client1.png",
          "/client5.png",
          "/client4.png",
          "/client3.png",
          "/client2.png",
          "/client1.png",
          "/client4.png",
          "/client5.png",
        ]}
      />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<div style={{ height: "100vh" }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <div className="relative">
                <WaveDivider />
                <div className="relative z-10">
                  <Contact />
                  <ContactInfoCards />
                </div>
              </div>
            }
          />
          <Route path="/packages" element={<Packages />} />
          <Route path="/policies/terms" element={<Terms />} />
          <Route path="/policies/refund" element={<Refund />} />
          <Route path="/policies/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <SiteFooter />
      <BackToTop /> {/* ✅ The scroll-up button */}
    </>
  );
}
