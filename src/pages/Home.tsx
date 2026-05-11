import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { BackToTop } from '../components/BackToTop';
import { SkeletonLoader } from '../components/SkeletonLoader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const skeletonTimer = setTimeout(() => setShowSkeleton(true), 200);
    const loadTimer = setTimeout(() => setLoading(false), 800);
    return () => {
      clearTimeout(skeletonTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading && showSkeleton) return <SkeletonLoader />;
  if (loading) return <div className="min-h-screen bg-stone-50 dark:bg-stone-900" />;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Footer />
      <BackToTop />
    </div>
  );
}
