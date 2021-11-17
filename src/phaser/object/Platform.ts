export enum PLATFORM_TYPE {
  GROUND = 'ground',
  BASIC = 'basic',
  CLOUD = 'fragile',
  MOVING = 'moving',
}

export default class Platform extends Phaser.Physics.Arcade.Image {
  private randomTypePool = [
    PLATFORM_TYPE.BASIC,
    PLATFORM_TYPE.BASIC,
    PLATFORM_TYPE.CLOUD,
    PLATFORM_TYPE.MOVING,
  ];

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    private platformType = PLATFORM_TYPE.BASIC
  ) {
    super(scene, x, y, 'platform');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.adjustBasedOnType();

    scene.events.on(Phaser.Scenes.Events.UPDATE, this.onUpdate, this);
    scene.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
      scene.events.off(Phaser.Scenes.Events.UPDATE, this.onUpdate, this);
    });
  }

  private adjustBasedOnType() {
    const { width: screenWidth } = this.scene.cameras.main;

    const { platformType } = this;
    switch (platformType) {
      case PLATFORM_TYPE.GROUND: {
        this.setTexture('platform');
        this.setDisplaySize(screenWidth * 2, 16);
        this.setVelocityX(0);
        break;
      }

      case PLATFORM_TYPE.BASIC: {
        this.setTexture('platform');
        this.setDisplaySize(72, 16);
        this.setVelocityX(0);
        break;
      }

      case PLATFORM_TYPE.CLOUD: {
        this.setTexture('cloud_platform');
        this.setDisplaySize(72, 16);
        this.setVelocityX(0);
        break;
      }

      case PLATFORM_TYPE.MOVING: {
        this.setTexture('moving_platform');
        this.setDisplaySize(72, 16);
        this.setVelocityX(Math.random() > 0.5 ? 100 : -100);
        break;
      }
    }
  }

  public randomize() {
    this.platformType =
      this.randomTypePool[
        Math.floor(Math.random() * this.randomTypePool.length)
      ];
    this.adjustBasedOnType();
  }

  public isCloud() {
    return this.platformType === PLATFORM_TYPE.CLOUD;
  }

  public isMoving() {
    return this.platformType === PLATFORM_TYPE.MOVING;
  }

  private handleMovingPlatform() {
    if (this.isMoving()) {
      const { width: screenWidth } = this.scene.cameras.main;

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
