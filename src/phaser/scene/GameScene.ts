import { AssetConfig } from '../config/config';
import Collectible from '../object/Collectible';
import Header from '../object/Header';
import Platform from '../object/Platform';
import Player from '../object/Player';

export default class GameScene extends Phaser.Scene {
  public screenWidth = 0;

  public screenHeight = 0;
  
  private platforms: Platform[];

  private player: Player;

  private collectibles: Collectible[];

  private score = 0;

  private highScore = 0;

  private isTouching = false;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    Object.keys(AssetConfig).forEach((key) => {
      const config = AssetConfig[key];
      this.load.image(key, config.url);
    });
  }

  create() {

  }

  update() {

  }
}
