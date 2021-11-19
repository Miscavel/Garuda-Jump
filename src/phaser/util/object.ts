import { AssetConfig } from "../config/config";

/**
 * Adjusts the image and body size based on the given key
 * @param key 
 * @param image 
 * @param body 
 */
export function adjustImageAndBody(image: Phaser.GameObjects.Image, body: Phaser.Physics.Arcade.Body) {
  const imageConfig = AssetConfig[image.texture.key];
  if (imageConfig) {
    image
      .setDisplaySize(imageConfig.displaySize.width, imageConfig.displaySize.height)
      .setOrigin(imageConfig.origin.x, imageConfig.origin.y)
      .setPosition(imageConfig.positionOffset.x, imageConfig.positionOffset.y);

    body
      .setSize(imageConfig.body.width, imageConfig.body.height)
      .setOffset(imageConfig.body.offsetX, imageConfig.body.offsetY);
  }
}