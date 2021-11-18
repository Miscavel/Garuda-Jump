import * as Phaser from 'phaser';
import IdleScene from './scene/IdleScene';
import GameScene from './scene/GameScene';

export default class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super({
      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
      scene: [IdleScene, GameScene],
      backgroundColor: '#0B1728',
      ...config,
    });
  }
}
