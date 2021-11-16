export default class Player extends Phaser.GameObjects.Container {
  private bodySprite: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    this.setupComponents();
  }

  private setupComponents() {
    this.bodySprite = new Phaser.GameObjects.Sprite(
      this.scene,
      0,
      0,
      'garuda'
    ).setDisplaySize(80, 80);

    this.add(this.bodySprite);
  }
}
