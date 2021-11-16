enum PLAYER_STATE {
  FALLING = 'falling',
  JUMPING = 'jumping',
}

export default class Player extends Phaser.GameObjects.Container {
  private bodySprite: Phaser.GameObjects.Sprite;

  body: Phaser.Physics.Arcade.Body;

  state = PLAYER_STATE.FALLING;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    this.setupComponents();
    this.setupBody();
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

  private setupBody() {
    this.scene.physics.add.existing(this);

    this.body.setSize(80, 10);
    this.body.setOffset(-40, 30);

    this.body.setAccelerationY(1000);
  }

  public jump() {
    if (this.body.velocity.y >= 0) {
      this.body.setVelocityY(-600);
    }
  }
}
