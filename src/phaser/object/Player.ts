import { ASSET_KEY } from "../enum/enum";
import { adjustImageAndBody } from "../util/object";

export default class Player extends Phaser.GameObjects.Container {
  private bodySprite: Phaser.GameObjects.Sprite;

  body: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    
    scene.physics.add.existing(this);
    scene.add.existing(this);

    this.setupComponents();
  }

  private setupComponents() {
    this.bodySprite = new Phaser.GameObjects.Sprite(this.scene, 0, 0, ASSET_KEY.GARUDA);
    this.add(this.bodySprite);

    adjustImageAndBody(this.bodySprite, this.body);
    this.body.setGravityY(1000);
    this.body.setDragX(250);
    this.body.setMaxVelocityX(1000);
  }

  private squishSprite() {
    this.scene.tweens.add({
      duration: 125,
      targets: this.bodySprite,
      scaleX: 0.9 * this.bodySprite.scaleX,
      scaleY: 0.9 * this.bodySprite.scaleY,
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
    this.bodySprite.flipX = true;
    this.setAccelerationX(-1000);
  }

  public tiltRight() {
    this.bodySprite.flipX = false;
    this.setAccelerationX(1000);
  }

  public setAccelerationX(accelX: number) {
    this.body.setAccelerationX(accelX);
  }

  public resetAccelerationX() {
    this.body.setAccelerationX(0);
  }
}
