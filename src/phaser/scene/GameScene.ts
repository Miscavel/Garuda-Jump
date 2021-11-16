import Player from '../object/Player';

export default class GameScene extends Phaser.Scene {
  private platformGroup: Phaser.GameObjects.Group;

  private player: Player;

  constructor() {
    super({
      key: 'GameScene',
    });
  }

  preload() {
    this.load.image(
      'garuda',
      'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/garuda.png'
    );
    this.load.image(
      'atom',
      'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/atom.png'
    );
    this.load.image(
      'platform',
      'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/platform.png'
    );
  }

  create() {
    const { width: screenWidth, height: screenHeight } = this.cameras.main;
    const centerOfScreenX = screenWidth * 0.5;
    const bottomOfScreenY = screenHeight;

    this.setupBlocks();

    this.player = new Player(this, centerOfScreenX, bottomOfScreenY - 40);
    this.add.existing(this.player);

    this.physics.add.overlap(
      this.platformGroup.getChildren(),
      this.player,
      (platformBody, playerBody) => {
        this.player.jump();
      }
    );

    this.input.keyboard.off(
      Phaser.Input.Keyboard.Events.ANY_KEY_DOWN,
      this.onKeyDown,
      this
    );
    this.input.keyboard.on(
      Phaser.Input.Keyboard.Events.ANY_KEY_DOWN,
      this.onKeyDown,
      this
    );

    this.input.keyboard.off(
      Phaser.Input.Keyboard.Events.ANY_KEY_UP,
      this.onKeyUp,
      this
    );
    this.input.keyboard.on(
      Phaser.Input.Keyboard.Events.ANY_KEY_UP,
      this.onKeyUp,
      this
    );
  }

  private onKeyDown(event: KeyboardEvent) {
    const { code } = event;
    switch (code) {
      case 'ArrowLeft': {
        this.player.setAccelerationX(-1000);
        break;
      }

      case 'ArrowRight': {
        this.player.setAccelerationX(1000);
        break;
      }
    }
  }

  private onKeyUp(event: KeyboardEvent) {
    const { code } = event;
    switch (code) {
      case 'ArrowLeft': {
        this.player.resetAccelerationX();
        break;
      }

      case 'ArrowRight': {
        this.player.resetAccelerationX();
        break;
      }
    }
  }

  private setupBlocks() {
    const { width: screenWidth, height: screenHeight } = this.cameras.main;
    const centerOfScreenX = screenWidth * 0.5;
    const bottomOfScreenY = screenHeight;

    this.platformGroup = this.add.group();

    const bottomPlatform = this.physics.add
      .image(centerOfScreenX, bottomOfScreenY, 'platform')
      .setDisplaySize(screenWidth * 2, 16);

    this.platformGroup.add(bottomPlatform);

    for (let i = 0; i < 100; i++) {
      const platform = this.physics.add.image(
        centerOfScreenX,
        bottomOfScreenY - 100 * i,
        'platform'
      );
      platform.setDisplaySize(72, 16);
      platform.setActive(false);
      this.platformGroup.add(platform);
    }
    console.log(this.platformGroup);
    console.log(this.platformGroup.getFirstDead(false));
  }

  private updateCameraCenter() {
    this.cameras.main.centerOn(
      this.cameras.main.midPoint.x,
      Math.min(this.cameras.main.midPoint.y, this.player.y)
    );
  }

  update() {
    this.updateCameraCenter();
    this.player.keepPlayerWithinScreen();
  }
}
