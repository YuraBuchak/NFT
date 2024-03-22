import Hero from './hero-section/Hero';
import scss from './App.module.scss';
import About from './about-section/About';
import MindMap from './mind-map-section/MindMap';
import Faq from './faq-section/Faq';

export const App = () => {
  return (
    <div className={scss.container}>
      <Hero />
      <About />
      <MindMap />
      <Faq />
    </div>
  );
};
