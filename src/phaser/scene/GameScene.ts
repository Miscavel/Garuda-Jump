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

    this.add.existing(new Player(this, centerOfScreenX, bottomOfScreenY - 40));
    this.setupBlocks();
    // setInterval(() => {
    //   this.cameras.main.pan(
    //     this.cameras.main.midPoint.x,
    //     this.cameras.main.midPoint.y - 320,
    //     1000
    //   );
    // }, 2000);
  }

  private setupBlocks() {
    this.platformGroup = this.add.group();
    for (let i = 0; i < 100; i++) {
      const platform = this.add.image(0, 0, 'platform');
      platform.setDisplaySize(72, 16);
      platform.setActive(false);
      this.platformGroup.add(platform);
    }
    console.log(this.platformGroup);
    console.log(this.platformGroup.getFirstDead(false));
  }
}
