export default class IdleScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'IdleScene',
    });
  }

  create() {
    this.scene.start('GameScene');
  }
}
