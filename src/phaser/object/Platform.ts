export enum PLATFORM_TYPE {
  GROUND = 'ground',
  BASIC = 'basic',
  FRAGILE = 'fragile',
}

export default class Platform extends Phaser.Physics.Arcade.Image {
  private randomTypePool = [
    PLATFORM_TYPE.BASIC,
    PLATFORM_TYPE.BASIC,
    PLATFORM_TYPE.FRAGILE,
  ];

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
        this.setTint(0xffffff);
        break;
      }

      case PLATFORM_TYPE.BASIC: {
        this.setDisplaySize(72, 16);
        this.setTint(0xffffff);
        break;
      }

      case PLATFORM_TYPE.FRAGILE: {
        this.setDisplaySize(72, 16);
        this.setTint(0x00ff00);
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

  public isFragile() {
    return this.platformType === PLATFORM_TYPE.FRAGILE;
  }
}
