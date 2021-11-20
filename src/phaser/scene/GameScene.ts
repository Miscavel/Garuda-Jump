import { AssetConfig } from '../config/config';
import { ASSET_KEY } from '../enum/enum';
import Collectible from '../object/Collectible';
import Header from '../object/Header';
import Platform from '../object/Platform';
import Player from '../object/Player';
import { registerEventListener, registerKeyboardListener } from '../util/event';
import { isTransformBelowScreen } from '../util/transform';

export default class GameScene extends Phaser.Scene {
  public screenWidth = 0;

  public screenHeight = 0;
  
  private platforms: Platform[];

  private player: Player;

  private collectibles: Collectible[];

  private score = 0;

  private highScore = 0;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.screenWidth = this.cameras.main.width;
    this.screenHeight = this.cameras.main.height;

    this.score = 0;
    this.highScore = this.registry.get('highscore') ?? 0;

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
