import Hero from './hero-section/Hero';
import scss from './App.module.scss';
import About from './about-section/About';

export const App = () => {
  return (
    <div className={scss.container}>
      <Hero />
      <About />
    </div>
  );
};
