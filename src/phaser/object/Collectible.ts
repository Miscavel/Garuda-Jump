import { ASSET_KEY } from "../enum/enum";
import { adjustImageAndBody } from "../util/object";

export default class Collectible extends Phaser.GameObjects.Container {
  private image: Phaser.GameObjects.Image;

  body: Phaser.Physics.Arcade.Body;
  
  private randomTypePool = [
    ASSET_KEY.ATOM,
    ASSET_KEY.ATOM,
    ASSET_KEY.ATOM,
    ASSET_KEY.TRAMPOLINE,
  ];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
  ) {
    super(scene, x, y);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setupComponents();
    this.adjustBasedOnType(ASSET_KEY.ATOM);
  }

  private setupComponents() {
    this.image = new Phaser.GameObjects.Image(this.scene, 0, 0, '');
    this.add(this.image);
  }

  private adjustBasedOnType(key: string) {
    adjustImageAndBody(key, this.image, this.body);
  }

  public randomize() {
    this.adjustBasedOnType(
      this.randomTypePool[
        Math.floor(Math.random() * this.randomTypePool.length)
      ]
    );
  }

  public isAtom() {
    return this.image.texture.key === ASSET_KEY.ATOM;
  }

  public isStar() {
    return this.image.texture.key === ASSET_KEY.TRAMPOLINE;
  }
}
