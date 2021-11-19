import React, { useEffect } from 'react';
import Game from '../phaser/game';

interface PhaserWrapperProps {
  updateCurrentScore: (score: number) => void;
  updateHighScore: (score: number) => void;
  goToResult: () => void;
}

const PhaserWrapper: React.FC<PhaserWrapperProps> = ({ updateCurrentScore, updateHighScore, goToResult }) => {
  useEffect(() => {
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
      console.log(score);      
      updateCurrentScore(score);
      updateHighScore(score);
      goToResult();
    });
  });
  return <div id="game" />;
};

export default PhaserWrapper;