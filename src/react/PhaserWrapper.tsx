import React, { useEffect } from 'react';
import Game from '../phaser/game';

interface PhaserWrapperProps {
  isGameplay: () => boolean;
  updateCurrentScore: (score: number) => void;
  updateHighScore: (score: number) => void;
  goToResult: () => void;
}

const PhaserWrapper: React.FC<PhaserWrapperProps> = ({ isGameplay, updateCurrentScore, updateHighScore, goToResult }) => {
  useEffect(() => {
    if (isGameplay()) {
      const game = new Game({
        title: 'Garuda Jump',
        scale: {
          parent: 'game',
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 411,
          height: 731,
        },
      });
      game.events.on('gameover', (score: number) => {
        game.destroy(true);
        goToResult();
        updateCurrentScore(score);
        updateHighScore(score);
      });
    }
  });
  return <div id="game" />;
};

export default PhaserWrapper;