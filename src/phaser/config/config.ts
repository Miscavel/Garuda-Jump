import { ASSET_KEY } from "../enum/enum";

export const AssetConfig: {
  [key: string]: {
    url: string;
    displaySize: {
      width: number;
      height: number;
    };
    origin: {
      x: number;
      y: number;
    };
    positionOffset: {
      x: number;
      y: number;
    };
    body: {
      width: number;
      height: number;
      offsetX: number;
      offsetY: number;
    };
  }
} = {
  [ASSET_KEY.GARUDA]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/garuda.png',
    displaySize: {
      width: 80,
      height: 80,
    },
    origin: {
      x: 0.5,
      y: 1,
    },
    positionOffset: {
      x: 0,
      y: 40,
    },
    body: {
      width: 50,
      height: 10,
      offsetX: -25,
      offsetY: 30,
    }
  }
}