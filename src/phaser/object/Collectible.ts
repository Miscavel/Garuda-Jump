export enum COLLECTIBLE_TYPE {
  ATOM = 'atom',
  STAR = 'star',
}

export default class Collectible extends Phaser.Physics.Arcade.Image {
  private randomTypePool = [
    COLLECTIBLE_TYPE.ATOM,
    COLLECTIBLE_TYPE.ATOM,
    COLLECTIBLE_TYPE.STAR,
  ];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    private collectibleType = COLLECTIBLE_TYPE.ATOM
  ) {
    super(scene, x, y, 'atom');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.adjustBasedOnType();
  }

  private adjustBasedOnType() {
    const { collectibleType } = this;
    switch (collectibleType) {
      case COLLECTIBLE_TYPE.ATOM: {
        this.setDisplaySize(16, 16);
        this.setTexture('atom');
        break;
      }

      case COLLECTIBLE_TYPE.STAR: {
        this.setDisplaySize(56, 56);
        this.setTexture('star');
        break;
      }
    }
  }

  public randomize() {
    this.collectibleType =
      this.randomTypePool[
        Math.floor(Math.random() * this.randomTypePool.length)
      ];
    this.adjustBasedOnType();
  }
}
