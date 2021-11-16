export enum PLATFORM_TYPE {
  GROUND = 'ground',
  BASIC = 'basic',
}

export default class Platform extends Phaser.Physics.Arcade.Image {
  private randomTypePool = [PLATFORM_TYPE.GROUND, PLATFORM_TYPE.BASIC];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    private platformType = PLATFORM_TYPE.BASIC
  ) {
    super(scene, x, y, 'platform');

    this.adjustDisplayBasedOnType();

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  private adjustDisplayBasedOnType() {
    const { width: screenWidth } = this.scene.cameras.main;

    const { platformType } = this;
    switch (platformType) {
      case PLATFORM_TYPE.GROUND: {
        this.setDisplaySize(screenWidth * 2, 16);
        break;
      }

      case PLATFORM_TYPE.BASIC: {
        this.setDisplaySize(72, 16);
        break;
      }
    }
  }

  public randomize() {
    this.platformType =
      this.randomTypePool[
        Math.floor(Math.random() * this.randomTypePool.length)
      ];
    this.adjustDisplayBasedOnType();
  }
}
