import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BackToTop } from './components/layout/BackToTop';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { SkipLink } from './components/layout/SkipLink';
import { Hero } from './components/sections/Hero';
import { StatsStrip } from './components/sections/StatsStrip';
import { useTheme } from './hooks/useTheme';

// Below-the-fold sections load in their own chunks.
const Features = lazy(() => import('./components/sections/Features'));
const HowItWorks = lazy(() => import('./components/sections/HowItWorks'));
const QuizDemo = lazy(() => import('./components/sections/QuizDemo'));
const Topics = lazy(() => import('./components/sections/Topics'));
const Levels = lazy(() => import('./components/sections/Levels'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const Faq = lazy(() => import('./components/sections/Faq'));
const FinalCta = lazy(() => import('./components/sections/FinalCta'));

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <SkipLink />
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero />
          <StatsStrip />
          {/* Reserve height so late-loading sections do not shift the footer. */}
          <Suspense fallback={<div aria-hidden="true" className="min-h-[200vh]" />}>
            <Features />
            <HowItWorks />
            <QuizDemo />
            <Topics />
            <Levels />
            <Testimonials />
            <Pricing />
            <Faq />
            <FinalCta />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </LazyMotion>
    </MotionConfig>
  );
}
