import React, { useEffect } from 'react';
import Game from '../phaser/game';

interface PhaserWrapperProps {
  goToResult: () => void;
}

const PhaserWrapper: React.FC<PhaserWrapperProps> = ({ goToResult }) => {
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
    game.events.on('gameover', () => {
      game.destroy(true);
      goToResult();
    });
  });
  return <div id="game" />;
};

export default PhaserWrapper;