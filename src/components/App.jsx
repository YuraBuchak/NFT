import Hero from './hero-section/Hero';
import scss from './App.module.scss';
import About from './about-section/About';
import MindMap from './mind-map-section/MindMap';
import Faq from './faq-section/Faq';
import Arts from './arts-section/Arts';
import Mint from './mint-section/Mint';
import Footer from './footer/Footer';
import Header from './header/Header';

export const App = () => {
  return (
    <div className={scss.container}>
      <Header />
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <Mint />
      <Footer />
    </div>
  );
};
