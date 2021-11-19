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
  },
  [ASSET_KEY.ATOM]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/atom.png',
    displaySize: {
      width: 16,
      height: 16,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    positionOffset: {
      x: 0,
      y: 0,
    },
    body: {
      width: 80,
      height: 80,
      offsetX: -40,
      offsetY: -10,
    }
  },
  [ASSET_KEY.TRAMPOLINE]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/trampoline.png',
    displaySize: {
      width: 48,
      height: 27,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    positionOffset: {
      x: 0,
      y: 0,
    },
    body: {
      width: 40,
      height: 20,
      offsetX: -20,
      offsetY: -10,
    }
  },
  [ASSET_KEY.GROUND]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/platform.png',
    displaySize: {
      width: 822,
      height: 16,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    positionOffset: {
      x: 0,
      y: 0,
    },
    body: {
      width: 822,
      height: 16,
      offsetX: -411,
      offsetY: -8,
    }
  },
  [ASSET_KEY.PLATFORM]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/platform.png',
    displaySize: {
      width: 72,
      height: 16,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    positionOffset: {
      x: 0,
      y: 0,
    },
    body: {
      width: 72,
      height: 16,
      offsetX: -36,
      offsetY: -8,
    }
  },
  [ASSET_KEY.CLOUD_PLATFORM]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/cloud_platform.png',
    displaySize: {
      width: 72,
      height: 16,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    positionOffset: {
      x: 0,
      y: 0,
    },
    body: {
      width: 72,
      height: 16,
      offsetX: -36,
      offsetY: -8,
    }
  },
  [ASSET_KEY.MOVING_PLATFORM]: {
    url: 'https://cdn.jsdelivr.net/gh/Miscavel/Garuda-Jump@master/public/assets/moving_platform.png',
    displaySize: {
      width: 72,
      height: 16,
    },
    origin: {
      x: 0.5,
      y: 0.5,
    },
    positionOffset: {
      x: 0,
      y: 0,
    },
    body: {
      width: 72,
      height: 16,
      offsetX: -36,
      offsetY: -8,
    }
  },
}