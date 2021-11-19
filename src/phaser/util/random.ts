/**
 * Returns a random element from a weighted pool
 * @param pool 
 * @returns 
 */
export function getWeightedRandom(pool: {[key: string]: number}) {
  const total = Object.keys(pool).reduce((res, key) => {
    return res + pool[key];
  }, 0);

  const random = Phaser.Math.RND.between(0, total - 1);

  let subtotal = 0;
  return Object.keys(pool).reduce((res, key) => {
    if (!res) {
      subtotal += pool[key];
      if (random < subtotal) {
        return key;
      }
    }
    return res;
  }, undefined as string);
}