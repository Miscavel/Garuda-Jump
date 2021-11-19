import React, { useEffect } from 'react';
import Game from '../phaser/game';

interface PhaserWrapperProps {
  isGameplay: () => boolean;
  getHighscore: () => number;
  updateCurrentScore: (score: number) => void;
  updateHighScore: (score: number) => void;
  goToResult: () => void;
}

const PhaserWrapper: React.FC<PhaserWrapperProps> = ({ 
  isGameplay,
  getHighscore,
  updateCurrentScore, 
  updateHighScore, 
  goToResult 
}) => {
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
      game.registry.set('highscore', getHighscore());
      game.events.on('gameover', (score: number, highscore: number) => {
        game.destroy(true);
        goToResult();
        updateCurrentScore(score);
        updateHighScore(highscore);
      });
    }
  });
  return <div id="game" />;
};

export default PhaserWrapper;