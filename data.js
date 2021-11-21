var APP_DATA = {
  "scenes": [
    {
      "id": "0-facade-1",
      "name": "Facade 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9634710501453192,
          "pitch": 0.25109291356414154,
          "rotation": 1.5707963267948966,
          "target": "1-facade-2"
        },
        {
          "yaw": -0.3600621630002525,
          "pitch": 0.39695487287518283,
          "rotation": 0,
          "target": "2-men"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-facade-2",
      "name": "Facade 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.15842997537997938,
        "pitch": -0.07905215427236634,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.10179364320565654,
          "pitch": 0.4270639055819423,
          "rotation": 0,
          "target": "9-women"
        },
        {
          "yaw": -0.7361186833740927,
          "pitch": 0.31795900530855725,
          "rotation": 4.71238898038469,
          "target": "0-facade-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-men",
      "name": "Men",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.010983349499692707,
        "pitch": 0,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.32464957827839314,
          "pitch": 0.16653817557508965,
          "rotation": 0,
          "target": "3-men-1"
        },
        {
          "yaw": 0.9335839427158739,
          "pitch": 0.31733300471831427,
          "rotation": 1.5707963267948966,
          "target": "6-basic"
        },
        {
          "yaw": -0.3815547891033564,
          "pitch": 0.6341228963080212,
          "rotation": 3.141592653589793,
          "target": "0-facade-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-men-1",
      "name": "Men 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2748652429192262,
          "pitch": 0.08103645049724406,
          "rotation": 0,
          "target": "4-men-and-fitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-men-and-fitting-room",
      "name": "Men and fitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6351989107857463,
          "pitch": 0.3031470892159973,
          "rotation": 4.71238898038469,
          "target": "5-men-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-men-3",
      "name": "Men 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.25546713699310786,
          "pitch": 0.1900797469279425,
          "rotation": 0,
          "target": "2-men"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-basic",
      "name": "Basic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.40034957774489577,
          "pitch": 0.3213397366317938,
          "rotation": 0,
          "target": "7-basic-1"
        },
        {
          "yaw": -0.945100207304499,
          "pitch": 0.33438974712393943,
          "rotation": 4.71238898038469,
          "target": "2-men"
        },
        {
          "yaw": 0.8056846283077839,
          "pitch": 0.2539092619893104,
          "rotation": 1.5707963267948966,
          "target": "9-women"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-basic-1",
      "name": "Basic 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.327659012535495,
          "pitch": 0.2102856440926928,
          "rotation": 0,
          "target": "8-basic-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-basic-2",
      "name": "Basic 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4795399906527145,
          "pitch": 0.39492659887914705,
          "rotation": 0,
          "target": "6-basic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-women",
      "name": "Women",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21193985619949451,
          "pitch": 0.17142841400429987,
          "rotation": 0,
          "target": "10-women-1"
        },
        {
          "yaw": 1.0256140257487587,
          "pitch": 0.3523984441224677,
          "rotation": 1.5707963267948966,
          "target": "12-women-3"
        },
        {
          "yaw": -0.9914866985224897,
          "pitch": 0.34718783912887474,
          "rotation": 4.71238898038469,
          "target": "6-basic"
        },
        {
          "yaw": 0.21233954107196595,
          "pitch": 0.6025318887340774,
          "rotation": 3.141592653589793,
          "target": "1-facade-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-women-1",
      "name": "Women 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3706421572174943,
          "pitch": 0.2934645930782569,
          "rotation": 0,
          "target": "11-women-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-women-2",
      "name": "Women 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39483541907027764,
          "pitch": 0.25365025612368797,
          "rotation": 0,
          "target": "12-women-3"
        },
        {
          "yaw": 0.4089857609705838,
          "pitch": 0.23357323299928723,
          "rotation": 0,
          "target": "9-women"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-women-3",
      "name": "Women 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0106137300654208,
          "pitch": 0.3651403376662472,
          "rotation": 4.71238898038469,
          "target": "9-women"
        },
        {
          "yaw": -0.05846285776338789,
          "pitch": 0.20337555953685715,
          "rotation": 0,
          "target": "11-women-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mamila Store",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
