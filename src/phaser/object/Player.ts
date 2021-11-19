import { ASSET_KEY } from "../enum/enum";
import CustomContainer from "./CustomContainer";

export default class Player extends CustomContainer {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    
    this.setTexture(ASSET_KEY.GARUDA);
    this.body.setGravityY(1000);
    this.body.setDragX(250);
    this.body.setMaxVelocityX(1000);
  }

  private squishSprite() {
    this.scene.tweens.add({
      duration: 125,
      targets: this.image,
      scaleX: 0.9 * this.image.scaleX,
      scaleY: 0.9 * this.image.scaleY,
      yoyo: true,
    });
  }

  public jump(strength: number) {
    if (this.body.velocity.y >= 0) {
      this.squishSprite();
      this.body.setVelocityY(-600 * strength);
      return true;
    }
    return false;
  }

  public tiltLeft() {
    this.image.flipX = true;
    this.setAccelerationX(-1000);
  }

  public tiltRight() {
    this.image.flipX = false;
    this.setAccelerationX(1000);
  }

  public setAccelerationX(accelX: number) {
    this.body.setAccelerationX(accelX);
  }

  public resetAccelerationX() {
    this.body.setAccelerationX(0);
  }
}
