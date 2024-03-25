import scss from './Copyright.module.scss';

const Copyright = () => {
  return (
    <>
      <p className={scss.description}>
        &copy; Yacht ape 2024 all rights <br className={scss.hiden} /> reserved
      </p>
    </>
  );
};

export default Copyright;
