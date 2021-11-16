import React, { useEffect } from 'react';
import Game from '../phaser/game';

export default () => {
  useEffect(() => {
    const game = new Game({
      title: 'Garuda Jump',
      scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 360,
        height: 640,
      },
    });
  });
  return <div id="game" />;
};
