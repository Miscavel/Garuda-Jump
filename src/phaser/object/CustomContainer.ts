import { adjustImageAndBody } from "../util/object";

export default class CustomContainer extends Phaser.GameObjects.Container {
  protected image: Phaser.GameObjects.Image;

  body: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    
    scene.physics.add.existing(this);
    scene.add.existing(this);

    this.setupComponents();
  }

  private setupComponents() {
    this.image = new Phaser.GameObjects.Sprite(this.scene, 0, 0, '');
    this.add(this.image);
  }

  protected setTexture(key: string) {
    adjustImageAndBody(key, this.image, this.body);
  }
}