import Player from '../object/Player';

export default class GameScene extends Phaser.Scene {
  private blockGroup: Phaser.GameObjects.Group;

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
    this.load.image('platform', 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/platform.png');
  }

  create() {
    const centerOfScreenX = this.cameras.main.width * 0.5;
    const bottomOfScreenY = this.cameras.main.height;

    this.add.existing(new Player(this, centerOfScreenX, bottomOfScreenY - 32));
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
    this.blockGroup = this.add.group();
    for (let i = 0; i < 100; i++) {
      const rectangle = this.add.rectangle(0, -100 * i, 100, 20, 0xffffff);
      rectangle.setActive(false);
      this.blockGroup.add(rectangle);
    }
    console.log(this.blockGroup);
    console.log(this.blockGroup.getFirstDead(false));
  }
}
