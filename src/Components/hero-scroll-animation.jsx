// component.tsx
'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import Hero from '@/New/Hero'
import CombinedAbout from '@/New/About';
import CulturalNightsDemo from '@/New/Cultural';
import IdeaJamSection from '@/New/IdeaJam';
import Gallery from '@/Components/Gallery';
import Testimonials from '@/Components/Testimonials';
import Footer from './Footer';

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className=''>
      <Hero />
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen'>
      <CombinedAbout />
      <CulturalNightsDemo />
      <IdeaJamSection />
      <Gallery />
      <Testimonials />
      <Footer />
    </motion.section>
  );
};

const Component = forwardRef((props, ref) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative min-h-screen'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
});

Component.displayName = 'Component';

export default Component;