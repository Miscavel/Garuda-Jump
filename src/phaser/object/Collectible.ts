import { ASSET_KEY } from "../enum/enum";
import GameScene from "../scene/GameScene";
import { getWeightedRandom } from "../util/random";
import CustomContainer from "./CustomContainer";

export default class Collectible extends CustomContainer {
  private randomPool = {
    [ASSET_KEY.ATOM]: 3,
    [ASSET_KEY.TRAMPOLINE]: 1
  };

  constructor(
    scene: GameScene,
    x: number,
    y: number,
  ) {
    super(scene, x, y);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setTexture(ASSET_KEY.ATOM);
  }

  public randomize() {
    const key = getWeightedRandom(this.randomPool);
    this.setTexture(key);
  }

  public isAtom() {
    return this.image.texture.key === ASSET_KEY.ATOM;
  }

  public isStar() {
    return this.image.texture.key === ASSET_KEY.TRAMPOLINE;
  }
}
