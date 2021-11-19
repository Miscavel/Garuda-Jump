import { ASSET_KEY } from "../enum/enum";
import CustomContainer from "./CustomContainer";

export default class Collectible extends CustomContainer {
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

    this.setTexture(ASSET_KEY.ATOM);
  }

  public randomize() {
    this.setTexture(
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
