import Hero from './hero-section/Hero';
import scss from './App.module.scss';

export const App = () => {
  return (
    <div className={scss.container}>
      <Hero />
    </div>
  );
};
