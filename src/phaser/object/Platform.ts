import { ASSET_KEY } from "../enum/enum";
import GameScene from "../scene/GameScene";
import { registerEventListener } from "../util/event";
import CustomContainer from "./CustomContainer";

export default class Platform extends CustomContainer {
  private randomTypePool = [
    ASSET_KEY.PLATFORM,
    ASSET_KEY.PLATFORM,
    ASSET_KEY.CLOUD_PLATFORM,
    ASSET_KEY.MOVING_PLATFORM,
  ];

  constructor(
    scene: GameScene,
    x: number,
    y: number,
  ) {
    super(scene, x, y);

    registerEventListener(scene, Phaser.Scenes.Events.UPDATE, this.onUpdate, this);
  }

  public randomize() {
    const key = this.randomTypePool[
      Math.floor(Math.random() * this.randomTypePool.length)
    ];
    this.setTexture(key);
   
    if (this.isMoving()) {
      this.body.setVelocityX(Math.random() > 0.5 ? 100 : -100);
    } else {
      this.body.setVelocityX(0);
    }
  }

  public isCloud() {
    return this.image.texture.key === ASSET_KEY.CLOUD_PLATFORM;
  }

  public isMoving() {
    return this.image.texture.key === ASSET_KEY.MOVING_PLATFORM;
  }

  private handleMovingPlatform() {
    if (this.isMoving()) {
      const { screenWidth } = this.scene;

      if (this.x > screenWidth * 0.9 && this.body.velocity.x > 0) {
        this.x = screenWidth * 0.9;
        this.body.velocity.x *= -1;
      } else if (this.x < screenWidth * 0.1 && this.body.velocity.x < 0) {
        this.x = screenWidth * 0.1;
        this.body.velocity.x *= -1;
      }
    }
  }

  private onUpdate() {
    this.handleMovingPlatform();
  }
}
