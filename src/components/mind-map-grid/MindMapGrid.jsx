import MindMapCard from 'components/mind-map-card/MindMapCard';
import MindMapCardLimk from 'components/mind-map-card/MindMapCardLink';

import scss from './MindMapGrid.module.scss';

const MindMapGrid = () => {
  return (
    <ul className={scss.gridContainer}>
      <li className={scss.grid1}>
        <MindMapCard
          title={'YAPE DROP'}
          description={
            'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own'
          }
        />
      </li>
      <li className={scss.grid2}>
        <MindMapCard
          title={'New Collection'}
          description={
            'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game'
          }
        />
      </li>
      <li className={scss.grid3}>
        <MindMapCard
          title={'Token'}
          description={
            'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it'
          }
        />
      </li>
      <li className={scss.grid4}>
        <MindMapCardLimk />
      </li>
    </ul>
  );
};

export default MindMapGrid;
