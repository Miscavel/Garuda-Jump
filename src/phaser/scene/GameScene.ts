import Player from '../object/Player';

export default class GameScene extends Phaser.Scene {
  private platformGroup: Phaser.GameObjects.Group;

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
    const centerOfScreenX = this.cameras.main.width * 0.5;
    const bottomOfScreenY = this.cameras.main.height;

    const player = new Player(this, centerOfScreenX, bottomOfScreenY - 40);
    this.add.existing(player);
    this.setupBlocks();
    // setInterval(() => {
    //   this.cameras.main.pan(
    //     this.cameras.main.midPoint.x,
    //     this.cameras.main.midPoint.y - 320,
    //     1000
    //   );
    // }, 2000);

    this.physics.add.overlap(
      this.platformGroup.getChildren(),
      player,
      (platformBody, playerBody) => {
        player.jump();
      }
    );
  }

  private setupBlocks() {
    const { width: screenWidth, height: screenHeight } = this.cameras.main;
    const centerOfScreenX = screenWidth * 0.5;
    const bottomOfScreenY = screenHeight;

    this.platformGroup = this.add.group();

    const bottomPlatform = this.physics.add
      .image(centerOfScreenX, bottomOfScreenY, 'platform')
      .setDisplaySize(screenWidth, 16);

    this.platformGroup.add(bottomPlatform);

    for (let i = 0; i < 100; i++) {
      const platform = this.physics.add.image(centerOfScreenX, bottomOfScreenY - 100 * i, 'platform');
      platform.setDisplaySize(72, 16);
      platform.setActive(false);
      this.platformGroup.add(platform);
    }
    console.log(this.platformGroup);
    console.log(this.platformGroup.getFirstDead(false));
  }
}
