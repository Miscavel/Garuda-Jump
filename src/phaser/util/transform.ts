import GameScene from "../scene/GameScene";

export function isTransformBelowScreen(
  scene: GameScene,
  transform: Phaser.GameObjects.Components.Transform
) {
  return transform.y > scene.cameras.main.midPoint.y + scene.screenHeight * 0.55;
}