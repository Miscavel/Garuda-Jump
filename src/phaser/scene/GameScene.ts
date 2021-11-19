import { AssetConfig } from '../config/config';
import { ASSET_KEY } from '../enum/enum';
import Collectible from '../object/Collectible';
import Header from '../object/Header';
import Platform from '../object/Platform';
import Player from '../object/Player';
import { registerEventListener, registerKeyboardListener } from '../util/event';

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
    this.spawnCollectibles();
    this.spawnBlocks();
    this.spawnPlayer();

    const header = new Header(this, this.screenWidth * 0.5, 24, this.highScore);

    this.physics.add.overlap(
      this.platforms,
      this.player,
      (platform: Platform, playerBody) => {
        const playerJumped = this.player.jump(1);
        if (playerJumped && platform.isCloud()) {
          this.recyclePlatform(platform);
        }
      }
    );

    this.physics.add.overlap(
      this.collectibles,
      this.player,
      (collectible: Collectible) => {
        if (collectible.isStar()) {
          const playerJumped = this.player.jump(2);
          if (playerJumped) {
            collectible.setPosition(-9999, -9999);
          }
        } else if (collectible.isAtom()) {
          this.score += 1;
          this.highScore = Math.max(this.score, this.highScore);
          header.setScore(this.score);
          header.setHighScore(this.highScore);
          collectible.setPosition(-9999, -9999);
        }
      }
    );

    this.setupControls();

    registerEventListener(this, Phaser.Scenes.Events.POST_UPDATE, this.postUpdate, this);
  }

  private setupControls() {
    registerKeyboardListener(this, 'ArrowLeft', 'keydown', () => {
      this.player.tiltLeft();
    });
    registerKeyboardListener(this, 'ArrowRight', 'keydown', () => {
      this.player.tiltRight();
    });

    registerKeyboardListener(this, 'ArrowLeft', 'keyup', () => {
      this.player.resetAccelerationX();
    });
    registerKeyboardListener(this, 'ArrowRight', 'keyup', () => {
      this.player.resetAccelerationX();
    });
  }

  private spawnPlayer() {
    this.player = new Player(this, this.screenWidth * 0.5, this.screenHeight - 40);
  }

  private spawnBlocks() {
    this.platforms = new Array<Platform>();

    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        const basePlatform = new Platform(
          this,
          this.screenWidth * 0.5,
          this.screenHeight,
        );
        basePlatform.setTexture(ASSET_KEY.GROUND);
        this.platforms.push(basePlatform);
      } else {
        const platform = new Platform(
          this,
          Phaser.Math.RND.between(36, this.screenWidth - 36),
          this.screenHeight - 75 * i
        );
        this.randomizePlatform(platform);
        this.platforms.push(platform);
      }
    }
  }

  private randomizePlatform(platform: Platform) {
    platform.randomize();
    if (Math.random() > 0.8) {
      const collectible = this.collectibles.shift();
      collectible.randomize();
      if (collectible.isAtom()) {
        collectible.parentContainer?.remove(collectible);
        this.add.existing(collectible);
        collectible.setPosition(
          Phaser.Math.RND.between(platform.x - 32, platform.x + 32),
          Phaser.Math.RND.between(platform.y - 16, platform.y - 56)
        );
      } else {
        collectible.parentContainer?.remove(collectible);
        platform.add(collectible);
        collectible.setPosition(0, -10);
      }

      this.collectibles.push(collectible);
    }
  }

  private spawnCollectibles() {
    this.collectibles = new Array<Collectible>();

    for (let i = 0; i < 10; i++) {
      const collectible = new Collectible(this, -9999, -9999);
      this.collectibles.push(collectible);
    }
  }

  private updateCameraCenter() {
    this.cameras.main.centerOn(
      this.cameras.main.midPoint.x,
      Math.min(this.cameras.main.midPoint.y, this.player.y)
    );
  }

  public keepPlayerWithinScreen() {
    if (this.player.x < -100) {
      this.player.x = this.screenWidth + 100;
    } else if (this.player.x > this.screenWidth + 100) {
      this.player.x = -100;
    }
  }

  private isTransformOutOfScreen(
    transform: Phaser.GameObjects.Components.Transform
  ) {
    return transform.y > this.cameras.main.midPoint.y + this.screenHeight * 0.55;
  }

  private recyclePlatform(platform: Platform) {
    const index = this.platforms.indexOf(platform);
    const highestPlatform = this.platforms[this.platforms.length - 1];

    platform.setPosition(
      Phaser.Math.RND.between(36, this.screenWidth - 36),
      highestPlatform.y - 75
    );
    this.randomizePlatform(platform);
    this.platforms.push(...this.platforms.splice(index, 1));
  }

  public recycleLowestPlatform() {
    const lowestPlatform = this.platforms[0];

    if (this.isTransformOutOfScreen(lowestPlatform)) {
      this.recyclePlatform(lowestPlatform);
    }
  }

  private checkGameOver() {
    if (this.isTransformOutOfScreen(this.player)) {
      this.game.events.emit('gameover', this.score, this.highScore);
      this.scene.start('GameScene');
    }
  }

  private checkForTouchInput() {
    const { isDown, x } = this.input.activePointer;
    if (isDown) {
      this.isTouching = true;

      if (x < this.screenWidth * 0.5) {
        this.player.tiltLeft();
      } else {
        this.player.tiltRight();
      }
    } else if (!isDown && this.isTouching) {
      this.isTouching = false;

      this.player.resetAccelerationX();
    }
  }

  update() {
    this.checkForTouchInput();
  }

  postUpdate() {
    this.updateCameraCenter();
    this.keepPlayerWithinScreen();
    this.recycleLowestPlatform();
    this.checkGameOver();
  }
}
