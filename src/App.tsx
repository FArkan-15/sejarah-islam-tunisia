import { useEffect } from 'react';
import Hero from './components/Hero';
import MasukkanyaIslam from './components/MasukkanyaIslam';
import Timeline from './components/Timeline';
import PenyebaranIslam from './components/PenyebaranIslam';
import Peninggalan from './components/Peninggalan';
import Tokoh from './components/Tokoh';
import Budaya from './components/Budaya';
import Penutup from './components/Penutup';

declare global {
  interface Window {
    AOS: {
      init: (options?: object) => void;
      refresh: () => void;
    };
  }
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MasukkanyaIslam />
      <Timeline />
      <PenyebaranIslam />
      <Peninggalan />
      <Tokoh />
      <Budaya />
      <Penutup />
    </div>
  );
}

export default App;
