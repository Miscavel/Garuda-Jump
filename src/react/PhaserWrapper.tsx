import * as Phaser from 'phaser';
import React, { useEffect } from 'react';
import GameScene from '../phaser/scene/GameScene';

interface PhaserWrapperProps {
  getHighscore: () => number;
  updateCurrentScore: (score: number) => void;
  updateHighScore: (score: number) => void;
  goToResult: () => void;
}

const PhaserWrapper: React.FC<PhaserWrapperProps> = ({
  getHighscore,
  updateCurrentScore,
  updateHighScore,
  goToResult,
}) => {
  useEffect(() => {
    const game = new Phaser.Game({
      title: 'Garuda Jump',
      scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 411,
        height: 731,
      },
      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
      scene: [GameScene],
      backgroundColor: '#0B1728',
    });
    game.registry.set('highscore', getHighscore());
    game.events.on('gameover', (score: number, highscore: number) => {
      game.destroy(true);
      goToResult();
      updateCurrentScore(score);
      updateHighScore(highscore);
    });
  });
  return <div id="game" />;
};

export default PhaserWrapper;
