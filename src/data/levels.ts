import { LevelData } from '../types/game';

export const GAME_LEVELS: LevelData[] = [
  {
    "id": 1,
    "name": "First Crossing",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 16,
    "tutorialTip": "Her yılanı kendi rengindeki deliğe ulaştır ve yıldızları topla!",
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 5,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_2",
        "x": 1,
        "y": 0,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 4,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 8,
        "color": "green",
        "collected": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Ocean Currents",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 16,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 6,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_purple_2",
        "x": 2,
        "y": 9,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 1,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Verdant Meadow",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 17,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 0,
        "y": 1,
        "color": "yellow"
      },
      {
        "id": "p_orange_2",
        "x": 5,
        "y": 9,
        "color": "orange"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "orange",
        "collected": false
      }
    ]
  },
  {
    "id": 4,
    "name": "Crimson Path",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 17,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 1,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_pink_2",
        "x": 6,
        "y": 9,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 10,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Solar Drift",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 21,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ]
      },
      {
        "id": "c_green_3",
        "color": "green",
        "body": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 4,
        "y": 10,
        "color": "orange"
      },
      {
        "id": "p_cyan_2",
        "x": 0,
        "y": 0,
        "color": "cyan"
      },
      {
        "id": "p_green_3",
        "x": 3,
        "y": 10,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 10,
        "color": "orange",
        "collected": false
      }
    ]
  },
  {
    "id": 6,
    "name": "Violet Labyrinth",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 18,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 5,
        "y": 1,
        "color": "pink"
      },
      {
        "id": "p_blue_2",
        "x": 1,
        "y": 9,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 7,
    "name": "Amber Valley",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 22,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          }
        ]
      },
      {
        "id": "c_yellow_3",
        "color": "yellow",
        "body": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 6,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_2",
        "x": 2,
        "y": 9,
        "color": "green"
      },
      {
        "id": "p_yellow_3",
        "x": 0,
        "y": 1,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 7,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "green",
        "collected": false
      }
    ]
  },
  {
    "id": 8,
    "name": "Frosty Glade",
    "chapter": 1,
    "width": 8,
    "height": 12,
    "parMoves": 18,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 0,
        "y": 10,
        "color": "blue"
      },
      {
        "id": "p_red_2",
        "x": 5,
        "y": 0,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 9,
    "name": "Twin Streams",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 23,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          }
        ]
      },
      {
        "id": "c_orange_3",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 1,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_2",
        "x": 6,
        "y": 9,
        "color": "yellow"
      },
      {
        "id": "p_orange_3",
        "x": 2,
        "y": 10,
        "color": "orange"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 4,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 10,
    "name": "Starry Night",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 19,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 4,
        "y": 1,
        "color": "red"
      },
      {
        "id": "p_purple_2",
        "x": 0,
        "y": 9,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 11,
    "name": "Emerald Maze",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 19,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 5,
        "y": 10,
        "color": "yellow"
      },
      {
        "id": "p_orange_2",
        "x": 1,
        "y": 9,
        "color": "orange"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 2,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 4,
        "color": "orange",
        "collected": false
      }
    ]
  },
  {
    "id": 12,
    "name": "Coral Reef",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 24,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 6,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_pink_2",
        "x": 2,
        "y": 0,
        "color": "pink"
      },
      {
        "id": "p_blue_3",
        "x": 0,
        "y": 10,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 13,
    "name": "Mountain Pass",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 28,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ]
      },
      {
        "id": "c_green_3",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          }
        ]
      },
      {
        "id": "c_yellow_4",
        "color": "yellow",
        "body": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 0,
        "y": 1,
        "color": "orange"
      },
      {
        "id": "p_cyan_2",
        "x": 5,
        "y": 9,
        "color": "cyan"
      },
      {
        "id": "p_green_3",
        "x": 1,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_4",
        "x": 5,
        "y": 9,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 4,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 14,
    "name": "Crystal Caverns",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 20,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 1,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_blue_2",
        "x": 6,
        "y": 9,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 1,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 15,
    "name": "Rainbow Crossing",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 25,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ]
      },
      {
        "id": "c_yellow_3",
        "color": "yellow",
        "body": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 4,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_2",
        "x": 0,
        "y": 0,
        "color": "green"
      },
      {
        "id": "p_yellow_3",
        "x": 3,
        "y": 10,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 16,
    "name": "Echoing Canyon",
    "chapter": 2,
    "width": 8,
    "height": 12,
    "parMoves": 29,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          }
        ]
      },
      {
        "id": "c_pink_4",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 5,
        "y": 10,
        "color": "blue"
      },
      {
        "id": "p_red_2",
        "x": 1,
        "y": 9,
        "color": "red"
      },
      {
        "id": "p_purple_3",
        "x": 6,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_pink_4",
        "x": 2,
        "y": 0,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 17,
    "name": "Whispering Pines",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 21,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 6,
        "y": 1,
        "color": "green"
      },
      {
        "id": "p_yellow_2",
        "x": 2,
        "y": 9,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 10,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 18,
    "name": "Twilight Grove",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 26,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 0,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_purple_2",
        "x": 5,
        "y": 9,
        "color": "purple"
      },
      {
        "id": "p_pink_3",
        "x": 1,
        "y": 10,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 19,
    "name": "Sunstone Dunes",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 30,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_4",
        "color": "green",
        "body": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 1,
        "y": 10,
        "color": "yellow"
      },
      {
        "id": "p_orange_2",
        "x": 6,
        "y": 0,
        "color": "orange"
      },
      {
        "id": "p_cyan_3",
        "x": 2,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_4",
        "x": 0,
        "y": 0,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_3",
        "x": 3,
        "y": 2,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 20,
    "name": "Abyssal Trench",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 22,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 4,
        "y": 1,
        "color": "purple"
      },
      {
        "id": "p_pink_2",
        "x": 0,
        "y": 9,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 2,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 7,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 21,
    "name": "Prismatic Gate",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 27,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_3",
        "color": "green",
        "body": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 5,
        "y": 10,
        "color": "orange"
      },
      {
        "id": "p_cyan_2",
        "x": 1,
        "y": 9,
        "color": "cyan"
      },
      {
        "id": "p_green_3",
        "x": 6,
        "y": 1,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 4,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 22,
    "name": "Glacial Ridge",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 31,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_purple_4",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 6,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_blue_2",
        "x": 2,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_red_3",
        "x": 0,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_purple_4",
        "x": 3,
        "y": 9,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 8,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 23,
    "name": "Ancient Ruins",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 23,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 0,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_2",
        "x": 5,
        "y": 9,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 0,
        "y": 11,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 4,
        "color": "green",
        "collected": false
      }
    ]
  },
  {
    "id": 24,
    "name": "Celestial Spire",
    "chapter": 3,
    "width": 8,
    "height": 12,
    "parMoves": 28,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 1,
        "y": 1,
        "color": "blue"
      },
      {
        "id": "p_red_2",
        "x": 6,
        "y": 9,
        "color": "red"
      },
      {
        "id": "p_purple_3",
        "x": 2,
        "y": 1,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 6,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 25,
    "name": "Shadow Hollow",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 32,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          }
        ]
      },
      {
        "id": "c_orange_3",
        "color": "orange",
        "body": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          }
        ]
      },
      {
        "id": "c_cyan_4",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 4,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_2",
        "x": 0,
        "y": 9,
        "color": "yellow"
      },
      {
        "id": "p_orange_3",
        "x": 3,
        "y": 10,
        "color": "orange"
      },
      {
        "id": "p_cyan_4",
        "x": 1,
        "y": 9,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 9,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 8,
        "color": "orange",
        "collected": false
      }
    ]
  },
  {
    "id": 26,
    "name": "Radiant Oasis",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 28,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 5,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_purple_2",
        "x": 1,
        "y": 0,
        "color": "purple"
      },
      {
        "id": "p_pink_3",
        "x": 6,
        "y": 10,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 4,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 1,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 27,
    "name": "Stormy Peaks",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 33,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          }
        ]
      },
      {
        "id": "c_green_4",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 6,
        "y": 1,
        "color": "yellow"
      },
      {
        "id": "p_orange_2",
        "x": 2,
        "y": 9,
        "color": "orange"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_4",
        "x": 4,
        "y": 9,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 0,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 3,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "orange",
        "collected": false
      }
    ]
  },
  {
    "id": 28,
    "name": "Enchanted Forest",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 29,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 0,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_pink_2",
        "x": 5,
        "y": 9,
        "color": "pink"
      },
      {
        "id": "p_blue_3",
        "x": 1,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 6,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 29,
    "name": "Dragon Spine",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 33,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          }
        ]
      },
      {
        "id": "c_green_3",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          }
        ]
      },
      {
        "id": "c_yellow_4",
        "color": "yellow",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 1,
        "y": 10,
        "color": "orange"
      },
      {
        "id": "p_cyan_2",
        "x": 6,
        "y": 0,
        "color": "cyan"
      },
      {
        "id": "p_green_3",
        "x": 2,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_4",
        "x": 0,
        "y": 9,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 4,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 8,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 10,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 30,
    "name": "Aurora Borealis",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 30,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 4,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_blue_2",
        "x": 0,
        "y": 9,
        "color": "blue"
      },
      {
        "id": "p_red_3",
        "x": 3,
        "y": 10,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 4,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 31,
    "name": "Deep Cavern",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 34,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ]
      },
      {
        "id": "c_yellow_3",
        "color": "yellow",
        "body": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          }
        ]
      },
      {
        "id": "c_orange_4",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 5,
        "y": 1,
        "color": "cyan"
      },
      {
        "id": "p_green_2",
        "x": 1,
        "y": 9,
        "color": "green"
      },
      {
        "id": "p_yellow_3",
        "x": 6,
        "y": 1,
        "color": "yellow"
      },
      {
        "id": "p_orange_4",
        "x": 3,
        "y": 9,
        "color": "orange"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 0,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 7,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 2,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 32,
    "name": "Labyrinth of Light",
    "chapter": 4,
    "width": 8,
    "height": 12,
    "parMoves": 30,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 6,
        "y": 10,
        "color": "blue"
      },
      {
        "id": "p_red_2",
        "x": 2,
        "y": 9,
        "color": "red"
      },
      {
        "id": "p_purple_3",
        "x": 0,
        "y": 10,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 7,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 33,
    "name": "Starlight Bridge",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 35,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          }
        ]
      },
      {
        "id": "c_orange_3",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      },
      {
        "id": "c_cyan_4",
        "color": "cyan",
        "body": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 0,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_2",
        "x": 5,
        "y": 0,
        "color": "yellow"
      },
      {
        "id": "p_orange_3",
        "x": 1,
        "y": 10,
        "color": "orange"
      },
      {
        "id": "p_cyan_4",
        "x": 4,
        "y": 0,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 5,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 4,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 34,
    "name": "Mystic Sanctuary",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 31,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 1,
        "y": 1,
        "color": "red"
      },
      {
        "id": "p_purple_2",
        "x": 6,
        "y": 9,
        "color": "purple"
      },
      {
        "id": "p_pink_3",
        "x": 2,
        "y": 10,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 35,
    "name": "Obsidian Vault",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 35,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ]
      },
      {
        "id": "c_green_4",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 4,
        "y": 10,
        "color": "yellow"
      },
      {
        "id": "p_orange_2",
        "x": 0,
        "y": 9,
        "color": "orange"
      },
      {
        "id": "p_cyan_3",
        "x": 3,
        "y": 1,
        "color": "cyan"
      },
      {
        "id": "p_green_4",
        "x": 1,
        "y": 9,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 0,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 11,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 2,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 36,
    "name": "Phoenix Rise",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 32,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 5,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_pink_2",
        "x": 1,
        "y": 0,
        "color": "pink"
      },
      {
        "id": "p_blue_3",
        "x": 6,
        "y": 10,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 37,
    "name": "Astral Planes",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 36,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          }
        ]
      },
      {
        "id": "c_green_3",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ]
      },
      {
        "id": "c_yellow_4",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 6,
        "y": 10,
        "color": "orange"
      },
      {
        "id": "p_cyan_2",
        "x": 1,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_3",
        "x": 0,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_4",
        "x": 3,
        "y": 0,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 4,
        "y": 5,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 9,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 5,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 4,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 6,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 38,
    "name": "Titan Grove",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 32,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 0,
        "y": 1,
        "color": "pink"
      },
      {
        "id": "p_blue_2",
        "x": 5,
        "y": 9,
        "color": "blue"
      },
      {
        "id": "p_red_3",
        "x": 1,
        "y": 1,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 8,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 0,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 4,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 11,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 1,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 39,
    "name": "Cosmic Convergence",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 37,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_yellow_3",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          }
        ]
      },
      {
        "id": "c_orange_4",
        "color": "orange",
        "body": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 1,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_green_2",
        "x": 6,
        "y": 9,
        "color": "green"
      },
      {
        "id": "p_yellow_3",
        "x": 2,
        "y": 10,
        "color": "yellow"
      },
      {
        "id": "p_orange_4",
        "x": 0,
        "y": 9,
        "color": "orange"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 1,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 11,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 7,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 11,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "green",
        "collected": false
      }
    ]
  },
  {
    "id": 40,
    "name": "Master Crawl",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 33,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 4,
        "y": 10,
        "color": "blue"
      },
      {
        "id": "p_red_2",
        "x": 0,
        "y": 0,
        "color": "red"
      },
      {
        "id": "p_purple_3",
        "x": 3,
        "y": 10,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 6,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 10,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 4,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 1,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 5,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 41,
    "name": "Crystal Crossing",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 26,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 0,
        "y": 6,
        "color": "red"
      },
      {
        "id": "p_cyan_2",
        "x": 6,
        "y": 1,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 5,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 10,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 1,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 0,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 3,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 42,
    "name": "Emerald Spiral",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 26,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 1,
        "y": 1,
        "color": "orange"
      },
      {
        "id": "p_red_2",
        "x": 6,
        "y": 10,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 2,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 4,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 43,
    "name": "Sunstone Corridor",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 27,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 1,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_pink_2",
        "x": 4,
        "y": 11,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 6,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 9,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 8,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 4,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 44,
    "name": "Crimson Ribbons",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 27,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 3,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_yellow_2",
        "x": 7,
        "y": 6,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 10,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 0,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 45,
    "name": "Oceanic Flow",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 27,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 0,
        "y": 5,
        "color": "pink"
      },
      {
        "id": "p_purple_2",
        "x": 5,
        "y": 11,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 4,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 2,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 5,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 4,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 7,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 46,
    "name": "Violet Nexus",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 28,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 2,
        "y": 0,
        "color": "yellow"
      },
      {
        "id": "p_green_2",
        "x": 7,
        "y": 5,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 6,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 8,
        "color": "green",
        "collected": false
      }
    ]
  },
  {
    "id": 47,
    "name": "Amber Passage",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 28,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 0,
        "y": 6,
        "color": "purple"
      },
      {
        "id": "p_blue_2",
        "x": 6,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 10,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 0,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 8,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 48,
    "name": "Rose Petal Drift",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 32,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_orange_3",
        "color": "orange",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 1,
        "y": 1,
        "color": "cyan"
      },
      {
        "id": "p_pink_2",
        "x": 6,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_orange_3",
        "x": 0,
        "y": 5,
        "color": "orange"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 4,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 6,
        "color": "orange",
        "collected": false
      }
    ]
  },
  {
    "id": 49,
    "name": "Frostfire Gate",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 33,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 1,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_blue_2",
        "x": 4,
        "y": 11,
        "color": "blue"
      },
      {
        "id": "p_purple_3",
        "x": 2,
        "y": 0,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 6,
        "y": 11,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 9,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 4,
        "y": 3,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 1,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 50,
    "name": "Prismatic Junction",
    "chapter": 5,
    "width": 8,
    "height": 12,
    "parMoves": 33,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 3,
        "y": 0,
        "color": "orange"
      },
      {
        "id": "p_pink_2",
        "x": 7,
        "y": 6,
        "color": "pink"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 6,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 0,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 2,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 51,
    "name": "Frozen Chasm",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 33,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 0,
        "y": 5,
        "color": "green"
      },
      {
        "id": "p_red_2",
        "x": 5,
        "y": 11,
        "color": "red"
      },
      {
        "id": "p_purple_3",
        "x": 1,
        "y": 1,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 2,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 5,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 5,
        "y": 9,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 4,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 0,
        "y": 11,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 9,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 52,
    "name": "Glacier Serpents",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 34,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 2,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_orange_2",
        "x": 7,
        "y": 5,
        "color": "orange"
      },
      {
        "id": "p_cyan_3",
        "x": 1,
        "y": 10,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 4,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 1,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 10,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 53,
    "name": "Arctic Crossing",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 34,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 0,
        "y": 6,
        "color": "pink"
      },
      {
        "id": "p_green_2",
        "x": 6,
        "y": 1,
        "color": "green"
      },
      {
        "id": "p_blue_3",
        "x": 3,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 10,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 1,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 0,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 3,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 54,
    "name": "Crystal Iceway",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 34,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 1,
        "y": 1,
        "color": "yellow"
      },
      {
        "id": "p_purple_2",
        "x": 6,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 5,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 2,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 4,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 11,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 55,
    "name": "Polar Crossroads",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 35,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 1,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_cyan_2",
        "x": 4,
        "y": 11,
        "color": "cyan"
      },
      {
        "id": "p_red_3",
        "x": 2,
        "y": 0,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 6,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 8,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 4,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 10,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 1,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 56,
    "name": "Deep Freeze Labyrinth",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 35,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 3,
        "y": 0,
        "color": "cyan"
      },
      {
        "id": "p_red_2",
        "x": 7,
        "y": 6,
        "color": "red"
      },
      {
        "id": "p_pink_3",
        "x": 0,
        "y": 6,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 4,
        "y": 0,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 2,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 57,
    "name": "Subzero Slide",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 35,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 0,
        "y": 5,
        "color": "red"
      },
      {
        "id": "p_pink_2",
        "x": 5,
        "y": 11,
        "color": "pink"
      },
      {
        "id": "p_blue_3",
        "x": 1,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 5,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 2,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 5,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 4,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 6,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 9,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 58,
    "name": "Diamond Crest",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 36,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 2,
        "y": 0,
        "color": "orange"
      },
      {
        "id": "p_yellow_2",
        "x": 7,
        "y": 5,
        "color": "yellow"
      },
      {
        "id": "p_cyan_3",
        "x": 1,
        "y": 10,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 6,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 8,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 3,
        "y": 10,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 59,
    "name": "Aurora Trails",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 36,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 0,
        "y": 6,
        "color": "green"
      },
      {
        "id": "p_orange_2",
        "x": 6,
        "y": 1,
        "color": "orange"
      },
      {
        "id": "p_blue_3",
        "x": 3,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 0,
        "y": 11,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 10,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 1,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 2,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 8,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 60,
    "name": "Icebound Citadel",
    "chapter": 6,
    "width": 8,
    "height": 12,
    "parMoves": 37,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 1,
        "y": 1,
        "color": "blue"
      },
      {
        "id": "p_green_2",
        "x": 6,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 5,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 5,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 4,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 7,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 6,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 9,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 61,
    "name": "Magma Trench",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 37,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 1,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_blue_2",
        "x": 4,
        "y": 11,
        "color": "blue"
      },
      {
        "id": "p_red_3",
        "x": 2,
        "y": 0,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 6,
        "y": 11,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 9,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 1,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 62,
    "name": "Cinder Trail",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 37,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 3,
        "y": 0,
        "color": "yellow"
      },
      {
        "id": "p_cyan_2",
        "x": 7,
        "y": 6,
        "color": "cyan"
      },
      {
        "id": "p_pink_3",
        "x": 0,
        "y": 6,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 1,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 0,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 3,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 2,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 0,
        "y": 10,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 63,
    "name": "Obsidian Forge",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 38,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 0,
        "y": 5,
        "color": "purple"
      },
      {
        "id": "p_red_2",
        "x": 5,
        "y": 11,
        "color": "red"
      },
      {
        "id": "p_blue_3",
        "x": 1,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 2,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 5,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 5,
        "y": 9,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 4,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 9,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 64,
    "name": "Lava Loop",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 38,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 2,
        "y": 0,
        "color": "cyan"
      },
      {
        "id": "p_orange_2",
        "x": 7,
        "y": 5,
        "color": "orange"
      },
      {
        "id": "p_pink_3",
        "x": 1,
        "y": 10,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 4,
        "y": 11,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 9,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 1,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 11,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 10,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 1,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 65,
    "name": "Molten Spire",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 38,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 0,
        "y": 6,
        "color": "red"
      },
      {
        "id": "p_yellow_2",
        "x": 6,
        "y": 1,
        "color": "yellow"
      },
      {
        "id": "p_purple_3",
        "x": 3,
        "y": 0,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 10,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 1,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 0,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 3,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 2,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 5,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 66,
    "name": "Inferno Labyrinth",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 39,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 1,
        "y": 1,
        "color": "orange"
      },
      {
        "id": "p_purple_2",
        "x": 6,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 5,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 2,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 5,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 4,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 7,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 6,
        "y": 11,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 5,
        "y": 9,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 67,
    "name": "Ember Junction",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 39,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 1,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_yellow_2",
        "x": 4,
        "y": 11,
        "color": "yellow"
      },
      {
        "id": "p_purple_3",
        "x": 2,
        "y": 0,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 0,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 6,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 9,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 8,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 4,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 10,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 1,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 68,
    "name": "Basalt Corridor",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 39,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 3,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_purple_2",
        "x": 7,
        "y": 6,
        "color": "purple"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 6,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 10,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 1,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 0,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 3,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 5,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 69,
    "name": "Blazing Pathway",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 40,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 0,
        "y": 5,
        "color": "pink"
      },
      {
        "id": "p_cyan_2",
        "x": 5,
        "y": 11,
        "color": "cyan"
      },
      {
        "id": "p_red_3",
        "x": 1,
        "y": 1,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 4,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 2,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 5,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 4,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 7,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 6,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 9,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 70,
    "name": "Volcanic Core",
    "chapter": 7,
    "width": 8,
    "height": 12,
    "parMoves": 40,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 2,
        "y": 0,
        "color": "yellow"
      },
      {
        "id": "p_blue_2",
        "x": 7,
        "y": 5,
        "color": "blue"
      },
      {
        "id": "p_cyan_3",
        "x": 1,
        "y": 10,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 6,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 9,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 5,
        "y": 1,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 71,
    "name": "Abyssal Descent",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 40,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 0,
        "y": 6,
        "color": "purple"
      },
      {
        "id": "p_pink_2",
        "x": 6,
        "y": 1,
        "color": "pink"
      },
      {
        "id": "p_red_3",
        "x": 3,
        "y": 0,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 10,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 0,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 8,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 2,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 5,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 72,
    "name": "Coral Maze",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 41,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 1,
        "y": 1,
        "color": "cyan"
      },
      {
        "id": "p_yellow_2",
        "x": 6,
        "y": 10,
        "color": "yellow"
      },
      {
        "id": "p_pink_3",
        "x": 0,
        "y": 5,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 5,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 4,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 7,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 6,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 9,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 73,
    "name": "Tidal Serpent",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 41,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 1,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_orange_2",
        "x": 4,
        "y": 11,
        "color": "orange"
      },
      {
        "id": "p_blue_3",
        "x": 2,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 6,
        "y": 11,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 9,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 8,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 11,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 4,
        "y": 3,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 1,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 74,
    "name": "Sunken Pillars",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 41,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 3,
        "y": 0,
        "color": "orange"
      },
      {
        "id": "p_green_2",
        "x": 7,
        "y": 6,
        "color": "green"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 6,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 10,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 1,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 0,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 3,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 0,
        "y": 10,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 75,
    "name": "Bioluminescent Reef",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 42,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 0,
        "y": 5,
        "color": "green"
      },
      {
        "id": "p_purple_2",
        "x": 5,
        "y": 11,
        "color": "purple"
      },
      {
        "id": "p_blue_3",
        "x": 1,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 4,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 2,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 5,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 5,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 4,
        "y": 7,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 9,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 76,
    "name": "Whirlpool Gate",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 42,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 2,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_cyan_2",
        "x": 7,
        "y": 5,
        "color": "cyan"
      },
      {
        "id": "p_pink_3",
        "x": 1,
        "y": 10,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 4,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 9,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 1,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 11,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 10,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 1,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 77,
    "name": "Neptune Sanctum",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 42,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 0,
        "y": 6,
        "color": "pink"
      },
      {
        "id": "p_red_2",
        "x": 6,
        "y": 1,
        "color": "red"
      },
      {
        "id": "p_blue_3",
        "x": 3,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 10,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 1,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 0,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 78,
    "name": "Deep Trench Spiral",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 47,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_4",
        "color": "blue",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 1,
        "y": 1,
        "color": "yellow"
      },
      {
        "id": "p_pink_2",
        "x": 6,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 5,
        "color": "cyan"
      },
      {
        "id": "p_blue_4",
        "x": 5,
        "y": 11,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 2,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 5,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 4,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 6,
        "y": 11,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 5,
        "y": 9,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 6,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 79,
    "name": "Azure Labyrinth",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 43,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 1,
        "y": 10,
        "color": "purple"
      },
      {
        "id": "p_yellow_2",
        "x": 4,
        "y": 11,
        "color": "yellow"
      },
      {
        "id": "p_blue_3",
        "x": 2,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 5,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 6,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 9,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 8,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 4,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 10,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 1,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 80,
    "name": "Ocean Trench King",
    "chapter": 8,
    "width": 8,
    "height": 12,
    "parMoves": 48,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_4",
        "color": "blue",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 3,
        "y": 0,
        "color": "cyan"
      },
      {
        "id": "p_purple_2",
        "x": 7,
        "y": 6,
        "color": "purple"
      },
      {
        "id": "p_pink_3",
        "x": 0,
        "y": 6,
        "color": "pink"
      },
      {
        "id": "p_blue_4",
        "x": 6,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 1,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 0,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 3,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 2,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 5,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 2,
        "y": 4,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 7,
        "y": 0,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 81,
    "name": "Astral Ribbon",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 44,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 0,
        "y": 5,
        "color": "red"
      },
      {
        "id": "p_green_2",
        "x": 5,
        "y": 11,
        "color": "green"
      },
      {
        "id": "p_purple_3",
        "x": 1,
        "y": 1,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 2,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 5,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 4,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 7,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 6,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 9,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 82,
    "name": "Nebula Nexus",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 48,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_4",
        "color": "pink",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 2,
        "y": 0,
        "color": "orange"
      },
      {
        "id": "p_blue_2",
        "x": 7,
        "y": 5,
        "color": "blue"
      },
      {
        "id": "p_cyan_3",
        "x": 1,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_pink_4",
        "x": 4,
        "y": 11,
        "color": "pink"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 6,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 9,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 5,
        "y": 1,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 6,
        "y": 0,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 0,
        "y": 3,
        "color": "pink",
        "collected": false
      }
    ]
  },
  {
    "id": 83,
    "name": "Nova Crossroad",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 45,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 0,
        "y": 6,
        "color": "green"
      },
      {
        "id": "p_cyan_2",
        "x": 6,
        "y": 1,
        "color": "cyan"
      },
      {
        "id": "p_blue_3",
        "x": 3,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 0,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 2,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 10,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 1,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 0,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 8,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 84,
    "name": "Stardust Matrix",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 49,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_green_4",
        "color": "green",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 1,
        "y": 1,
        "color": "blue"
      },
      {
        "id": "p_red_2",
        "x": 6,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 5,
        "color": "cyan"
      },
      {
        "id": "p_green_4",
        "x": 5,
        "y": 11,
        "color": "green"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 5,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 4,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 7,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 6,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 9,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 2,
        "y": 8,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 4,
        "y": 11,
        "color": "green",
        "collected": false
      }
    ]
  },
  {
    "id": 85,
    "name": "Cosmic Convergence",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 45,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 1,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_orange_2",
        "x": 4,
        "y": 11,
        "color": "orange"
      },
      {
        "id": "p_red_3",
        "x": 2,
        "y": 0,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 6,
        "y": 11,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 9,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 8,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 11,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 4,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 1,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 86,
    "name": "Solar Flare Maze",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 50,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_4",
        "color": "blue",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 3,
        "y": 0,
        "color": "yellow"
      },
      {
        "id": "p_red_2",
        "x": 7,
        "y": 6,
        "color": "red"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 6,
        "color": "cyan"
      },
      {
        "id": "p_blue_4",
        "x": 6,
        "y": 1,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 1,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 0,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 0,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 6,
        "y": 4,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 0,
        "y": 7,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 87,
    "name": "Eclipse Gate",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 46,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_red_3",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 0,
        "y": 5,
        "color": "purple"
      },
      {
        "id": "p_orange_2",
        "x": 5,
        "y": 11,
        "color": "orange"
      },
      {
        "id": "p_red_3",
        "x": 1,
        "y": 1,
        "color": "red"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 2,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 5,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 5,
        "y": 9,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 4,
        "y": 7,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 0,
        "y": 11,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 9,
        "color": "red",
        "collected": false
      }
    ]
  },
  {
    "id": 88,
    "name": "Pulsar Pathway",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 50,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_4",
        "color": "blue",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 2,
        "y": 0,
        "color": "cyan"
      },
      {
        "id": "p_green_2",
        "x": 7,
        "y": 5,
        "color": "green"
      },
      {
        "id": "p_pink_3",
        "x": 1,
        "y": 10,
        "color": "pink"
      },
      {
        "id": "p_blue_4",
        "x": 4,
        "y": 11,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 4,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 9,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 1,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 11,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 10,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 1,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 0,
        "y": 10,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 4,
        "y": 3,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 89,
    "name": "Galaxy Spiral",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 47,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_2",
        "color": "purple",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 0,
        "y": 6,
        "color": "red"
      },
      {
        "id": "p_purple_2",
        "x": 6,
        "y": 1,
        "color": "purple"
      },
      {
        "id": "p_blue_3",
        "x": 3,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 0,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 10,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 1,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 0,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 3,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 90,
    "name": "Starlight Citadel",
    "chapter": 9,
    "width": 8,
    "height": 12,
    "parMoves": 51,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_4",
        "color": "blue",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 1,
        "y": 1,
        "color": "orange"
      },
      {
        "id": "p_cyan_2",
        "x": 6,
        "y": 10,
        "color": "cyan"
      },
      {
        "id": "p_pink_3",
        "x": 0,
        "y": 5,
        "color": "pink"
      },
      {
        "id": "p_blue_4",
        "x": 5,
        "y": 11,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 2,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 5,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 4,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 7,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 6,
        "y": 11,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 5,
        "y": 9,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 6,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 91,
    "name": "Apex Crossroads",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 47,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_purple_3",
        "color": "purple",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 1,
        "y": 10,
        "color": "green"
      },
      {
        "id": "p_blue_2",
        "x": 4,
        "y": 11,
        "color": "blue"
      },
      {
        "id": "p_purple_3",
        "x": 2,
        "y": 0,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 0,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 5,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 6,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 9,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 8,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 4,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 10,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 1,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 92,
    "name": "Chrono Labyrinth",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 48,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 3,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_pink_2",
        "x": 7,
        "y": 6,
        "color": "pink"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 6,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 10,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 1,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 0,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 3,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 5,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 93,
    "name": "Infinity Matrix",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 52,
    "creatures": [
      {
        "id": "c_pink_1",
        "color": "pink",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      },
      {
        "id": "c_purple_4",
        "color": "purple",
        "body": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_pink_1",
        "x": 0,
        "y": 5,
        "color": "pink"
      },
      {
        "id": "p_yellow_2",
        "x": 5,
        "y": 11,
        "color": "yellow"
      },
      {
        "id": "p_blue_3",
        "x": 1,
        "y": 1,
        "color": "blue"
      },
      {
        "id": "p_purple_4",
        "x": 6,
        "y": 10,
        "color": "purple"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 4,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 3,
        "y": 2,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 0,
        "y": 10,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 4,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 7,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 1,
        "y": 6,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 9,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 4,
        "y": 8,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 6,
        "y": 11,
        "color": "purple",
        "collected": false
      }
    ]
  },
  {
    "id": 94,
    "name": "Eternal Nexus",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 48,
    "creatures": [
      {
        "id": "c_yellow_1",
        "color": "yellow",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_orange_2",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_yellow_1",
        "x": 2,
        "y": 0,
        "color": "yellow"
      },
      {
        "id": "p_orange_2",
        "x": 7,
        "y": 5,
        "color": "orange"
      },
      {
        "id": "p_cyan_3",
        "x": 1,
        "y": 10,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 6,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      },
      {
        "x": 6,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 2,
        "type": "rock"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 6,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 9,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 8,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 11,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 5,
        "y": 1,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 95,
    "name": "Serpent King Trial",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 49,
    "creatures": [
      {
        "id": "c_purple_1",
        "color": "purple",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ]
      },
      {
        "id": "c_green_2",
        "color": "green",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_purple_1",
        "x": 0,
        "y": 6,
        "color": "purple"
      },
      {
        "id": "p_green_2",
        "x": 6,
        "y": 1,
        "color": "green"
      },
      {
        "id": "p_blue_3",
        "x": 3,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 4,
        "type": "log"
      },
      {
        "x": 4,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 10,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 1,
        "color": "purple",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 2,
        "y": 0,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 7,
        "y": 8,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 5,
        "y": 2,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 5,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 96,
    "name": "Omni Conduit",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 53,
    "creatures": [
      {
        "id": "c_cyan_1",
        "color": "cyan",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      },
      {
        "id": "c_blue_2",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_pink_3",
        "color": "pink",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_4",
        "color": "yellow",
        "body": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_cyan_1",
        "x": 1,
        "y": 1,
        "color": "cyan"
      },
      {
        "id": "p_blue_2",
        "x": 6,
        "y": 10,
        "color": "blue"
      },
      {
        "id": "p_pink_3",
        "x": 0,
        "y": 5,
        "color": "pink"
      },
      {
        "id": "p_yellow_4",
        "x": 5,
        "y": 11,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 10,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 1,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 5,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 4,
        "y": 4,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 7,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 6,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 9,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 2,
        "y": 8,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 4,
        "y": 11,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 97,
    "name": "Masterwork Spire",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 49,
    "creatures": [
      {
        "id": "c_red_1",
        "color": "red",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_2",
        "color": "cyan",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_red_1",
        "x": 1,
        "y": 10,
        "color": "red"
      },
      {
        "id": "p_cyan_2",
        "x": 4,
        "y": 11,
        "color": "cyan"
      },
      {
        "id": "p_blue_3",
        "x": 2,
        "y": 0,
        "color": "blue"
      }
    ],
    "obstacles": [
      {
        "x": 7,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 8,
        "type": "log"
      },
      {
        "x": 0,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 6,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 4,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 6,
        "y": 11,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 5,
        "y": 9,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 6,
        "y": 8,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 0,
        "y": 11,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 4,
        "y": 3,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 3,
        "y": 1,
        "color": "blue",
        "collected": false
      }
    ]
  },
  {
    "id": 98,
    "name": "Supreme Convergence",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 50,
    "creatures": [
      {
        "id": "c_orange_1",
        "color": "orange",
        "body": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_red_2",
        "color": "red",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_orange_1",
        "x": 3,
        "y": 0,
        "color": "orange"
      },
      {
        "id": "p_red_2",
        "x": 7,
        "y": 6,
        "color": "red"
      },
      {
        "id": "p_cyan_3",
        "x": 0,
        "y": 6,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 4,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 4,
        "type": "log"
      },
      {
        "x": 2,
        "y": 11,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 6,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 8,
        "type": "log"
      },
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 1,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 7,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 5,
        "y": 10,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 7,
        "y": 1,
        "color": "orange",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 0,
        "y": 0,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 2,
        "y": 3,
        "color": "red",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 3,
        "y": 2,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 0,
        "y": 10,
        "color": "cyan",
        "collected": false
      }
    ]
  },
  {
    "id": 99,
    "name": "Grandmaster Zenith",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 54,
    "creatures": [
      {
        "id": "c_green_1",
        "color": "green",
        "body": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ]
      },
      {
        "id": "c_pink_2",
        "color": "pink",
        "body": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      },
      {
        "id": "c_blue_3",
        "color": "blue",
        "body": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ]
      },
      {
        "id": "c_yellow_4",
        "color": "yellow",
        "body": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_green_1",
        "x": 0,
        "y": 5,
        "color": "green"
      },
      {
        "id": "p_pink_2",
        "x": 5,
        "y": 11,
        "color": "pink"
      },
      {
        "id": "p_blue_3",
        "x": 1,
        "y": 1,
        "color": "blue"
      },
      {
        "id": "p_yellow_4",
        "x": 6,
        "y": 10,
        "color": "yellow"
      }
    ],
    "obstacles": [
      {
        "x": 1,
        "y": 0,
        "type": "log"
      },
      {
        "x": 2,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 5,
        "y": 4,
        "type": "log"
      },
      {
        "x": 6,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 1,
        "y": 8,
        "type": "log"
      },
      {
        "x": 4,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 7,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 5,
        "y": 0,
        "type": "log"
      },
      {
        "x": 0,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 3,
        "y": 2,
        "type": "rock"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 7,
        "y": 2,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 1,
        "y": 5,
        "color": "green",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 5,
        "y": 9,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 4,
        "y": 7,
        "color": "pink",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 0,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 7,
        "y": 9,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_7",
        "x": 0,
        "y": 8,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_8",
        "x": 2,
        "y": 11,
        "color": "yellow",
        "collected": false
      }
    ]
  },
  {
    "id": 100,
    "name": "Ascension Apex",
    "chapter": 10,
    "width": 8,
    "height": 12,
    "parMoves": 51,
    "creatures": [
      {
        "id": "c_blue_1",
        "color": "blue",
        "body": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ]
      },
      {
        "id": "c_yellow_2",
        "color": "yellow",
        "body": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ]
      },
      {
        "id": "c_cyan_3",
        "color": "cyan",
        "body": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ]
      }
    ],
    "portals": [
      {
        "id": "p_blue_1",
        "x": 2,
        "y": 0,
        "color": "blue"
      },
      {
        "id": "p_yellow_2",
        "x": 7,
        "y": 5,
        "color": "yellow"
      },
      {
        "id": "p_cyan_3",
        "x": 1,
        "y": 10,
        "color": "cyan"
      }
    ],
    "obstacles": [
      {
        "x": 6,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 2,
        "y": 7,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 9,
        "type": "crystal"
      },
      {
        "x": 4,
        "y": 1,
        "type": "crystal"
      },
      {
        "x": 7,
        "y": 8,
        "type": "log"
      },
      {
        "x": 2,
        "y": 3,
        "type": "wall"
      },
      {
        "x": 5,
        "y": 10,
        "type": "rock"
      },
      {
        "x": 0,
        "y": 5,
        "type": "crystal"
      },
      {
        "x": 3,
        "y": 0,
        "type": "log"
      }
    ],
    "specialTiles": [
      {
        "x": 2,
        "y": 5,
        "type": "ice"
      },
      {
        "x": 5,
        "y": 5,
        "type": "ice"
      }
    ],
    "energyObjects": [
      {
        "id": "star_1",
        "x": 4,
        "y": 11,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_2",
        "x": 3,
        "y": 9,
        "color": "blue",
        "collected": false
      },
      {
        "id": "star_3",
        "x": 7,
        "y": 1,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_4",
        "x": 6,
        "y": 11,
        "color": "yellow",
        "collected": false
      },
      {
        "id": "star_5",
        "x": 7,
        "y": 10,
        "color": "cyan",
        "collected": false
      },
      {
        "id": "star_6",
        "x": 1,
        "y": 1,
        "color": "cyan",
        "collected": false
      }
    ]
  }
];
