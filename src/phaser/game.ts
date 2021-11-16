import * as Phaser from 'phaser';
import GameScene from './scene/GameScene';

export default class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super({
      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
          debug: true,
        },
      },
      scene: [GameScene],
      backgroundColor: '#493a52',
      ...config,
    });
  }
}
