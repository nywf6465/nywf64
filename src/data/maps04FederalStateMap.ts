/** Auto-generated from legacy maps04.html — Federal & State Area Map tiles + hotspots. */
/** Hotspot hrefs target attraction overview pages. */

export type MapArea = {
  shape: string;
  coords: string;
  href: string;
  title: string;
};

export type MapTile = {
  file: string;
  row: number;
  col: number;
  width: number;
  height: number;
  x: number;
  y: number;
  mapName: string | null;
};

export const MAPS04_WIDTH = 1080;
export const MAPS04_HEIGHT = 1233;

export const MAPS04_INSTRUCTION = "Click on or tap any of the pavilions on the map to see what's inside.";

export const MAPS04_TILES: MapTile[] = [
  {
    "file": "StateFederalR1C1.jpg",
    "row": 1,
    "col": 1,
    "width": 269,
    "height": 246,
    "x": 0,
    "y": 0,
    "mapName": "StateFederalR1C18d068b67"
  },
  {
    "file": "StateFederalR1C2.jpg",
    "row": 1,
    "col": 2,
    "width": 269,
    "height": 246,
    "x": 269,
    "y": 0,
    "mapName": "StateFederalR1C28d10b219"
  },
  {
    "file": "StateFederalR1C3.jpg",
    "row": 1,
    "col": 3,
    "width": 269,
    "height": 246,
    "x": 538,
    "y": 0,
    "mapName": "StateFederalR1C38d1b6d79"
  },
  {
    "file": "StateFederalR1C4.jpg",
    "row": 1,
    "col": 4,
    "width": 180,
    "height": 233,
    "x": 900,
    "y": 0,
    "mapName": "StateFederalR1C425949b"
  },
  {
    "file": "StateFederalR2C1.jpg",
    "row": 2,
    "col": 1,
    "width": 269,
    "height": 246,
    "x": 0,
    "y": 246,
    "mapName": "StateFederalR2C18d089d4f"
  },
  {
    "file": "StateFederalR2C2.jpg",
    "row": 2,
    "col": 2,
    "width": 269,
    "height": 246,
    "x": 269,
    "y": 246,
    "mapName": "StateFederalR2C28d217c50"
  },
  {
    "file": "StateFederalR2C3.jpg",
    "row": 2,
    "col": 3,
    "width": 269,
    "height": 246,
    "x": 538,
    "y": 246,
    "mapName": "StateFederalR2C38d1c285c"
  },
  {
    "file": "StateFederalR3C2.jpg",
    "row": 3,
    "col": 2,
    "width": 269,
    "height": 246,
    "x": 269,
    "y": 492,
    "mapName": "StateFederalR3C28d278089"
  },
  {
    "file": "StateFederalR3C3.jpg",
    "row": 3,
    "col": 3,
    "width": 269,
    "height": 246,
    "x": 538,
    "y": 492,
    "mapName": "StateFederalR3C38d2aec16"
  },
  {
    "file": "StateFederalR3C4.jpg",
    "row": 3,
    "col": 4,
    "width": 269,
    "height": 246,
    "x": 807,
    "y": 492,
    "mapName": null
  },
  {
    "file": "StateFederalR4C2.jpg",
    "row": 4,
    "col": 2,
    "width": 269,
    "height": 246,
    "x": 269,
    "y": 738,
    "mapName": "StateFederalR4C28d38e21f"
  },
  {
    "file": "StateFederalR4C3.jpg",
    "row": 4,
    "col": 3,
    "width": 269,
    "height": 246,
    "x": 538,
    "y": 738,
    "mapName": "StateFederalR4C38d39cf0f"
  },
  {
    "file": "StateFederalR4C4.jpg",
    "row": 4,
    "col": 4,
    "width": 269,
    "height": 246,
    "x": 807,
    "y": 738,
    "mapName": "StateFederalR4C48d3e2f3d"
  },
  {
    "file": "StateFederalR5C3.jpg",
    "row": 5,
    "col": 3,
    "width": 269,
    "height": 249,
    "x": 538,
    "y": 984,
    "mapName": "StateFederalR5C38d41eaed"
  },
  {
    "file": "StateFederalR5C4.jpg",
    "row": 5,
    "col": 4,
    "width": 269,
    "height": 249,
    "x": 807,
    "y": 984,
    "mapName": "StateFederalR5C48d3ef5b9"
  }
];

export const MAPS04_MAPS: Record<string, MapArea[]> = {
  "StateFederalR1C425949b": [
    {
      "shape": "rect",
      "coords": "6,6,172,226",
      "href": "/maps01",
      "title": "1964 Official Souvenir Map"
    }
  ],
  "StateFederalR3C38d2aec16": [
    {
      "shape": "polygon",
      "coords": "6,150,44,196,73,236,8,235",
      "href": "/newyorcitoverview",
      "title": "New York City Pavilion and Ice Theater"
    },
    {
      "shape": "polygon",
      "coords": "145,90,165,80,201,93,209,115,225,148,223,173,221,201,194,207,169,211,135,197,123,172,122,139",
      "href": "/unisphoverview",
      "title": "Unisphere"
    },
    {
      "shape": "polygon",
      "coords": "42,8,122,101,101,155,79,161,6,51,7,9",
      "href": "/newengoverview",
      "title": "New England States"
    }
  ],
  "StateFederalR4C28d38e21f": [
    {
      "shape": "polygon",
      "coords": "233,9,261,51,260,10",
      "href": "/newyorcitoverview",
      "title": "New York City Pavilion and Ice Theater"
    }
  ],
  "StateFederalR4C38d39cf0f": [
    {
      "shape": "polygon",
      "coords": "162,237,188,219,201,238",
      "href": "/missourioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "161,132,211,96,214,151,184,169",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "184,205,204,239,204,245",
      "href": "/missourioverview",
      "title": "Missouri"
    },
    {
      "shape": "polygon",
      "coords": "224,238,199,216,223,203,217,75,228,63,244,72,255,105,259,144,260,235",
      "href": "/newyoroverview",
      "title": "New York State"
    },
    {
      "shape": "polygon",
      "coords": "188,13,145,9,126,36,152,117,207,93,204,71,213,62",
      "href": "/newjeroverview",
      "title": "New Jersey"
    },
    {
      "shape": "polygon",
      "coords": "63,163,112,133,139,143,182,185,113,229",
      "href": "/wisconsinoverview",
      "title": "Wisconsin"
    },
    {
      "shape": "polygon",
      "coords": "8,55,21,84,104,39,107,7,6,6",
      "href": "/newyorcitoverview",
      "title": "New York City Pavilion and Ice Theater"
    }
  ],
  "StateFederalR4C48d3e2f3d": [
    {
      "shape": "polygon",
      "coords": "8,139,26,117,68,161,94,236,7,236",
      "href": "/newyoroverview",
      "title": "New York State"
    }
  ],
  "StateFederalR5C48d3ef5b9": [
    {
      "shape": "polygon",
      "coords": "84,7,90,34,70,71,39,89,16,77,7,7",
      "href": "/newyoroverview",
      "title": "New York State"
    },
    {
      "shape": "polygon",
      "coords": "7,79,32,97,8,113",
      "href": "/weshouoverview",
      "title": "Westinghouse"
    },
    {
      "shape": "polygon",
      "coords": "183,146,216,203,183,220,155,230,128,233,90,227,56,219,30,206,8,196,7,124,14,114,49,137,81,155,110,164,142,158",
      "href": "/louisiaoverview",
      "title": "Louisiana"
    },
    {
      "shape": "polygon",
      "coords": "47,121,65,91,108,96,143,112,177,136,133,154,73,146",
      "href": "/minnesotaoverview",
      "title": "Minnesota"
    },
    {
      "shape": "polygon",
      "coords": "123,9,100,19,110,46,133,64,151,63,163,37,150,20,147,9",
      "href": "/astfountoverview",
      "title": "Astral Fountain"
    }
  ],
  "StateFederalR5C38d41eaed": [
    {
      "shape": "polygon",
      "coords": "230,9,260,9,260,49",
      "href": "/newyoroverview",
      "title": "New York State"
    },
    {
      "shape": "polygon",
      "coords": "135,6,124,32,141,68,213,34,215,17,209,6",
      "href": "/missourioverview",
      "title": "Missouri"
    },
    {
      "shape": "polygon",
      "coords": "174,111,149,81,225,37,236,45,230,75",
      "href": "/alaskaoverview",
      "title": "Alaska"
    },
    {
      "shape": "polygon",
      "coords": "184,124,236,89,245,39,261,87,262,120,217,145",
      "href": "/weshouoverview",
      "title": "Westinghouse"
    },
    {
      "shape": "polygon",
      "coords": "261,132,213,152,261,187",
      "href": "/louisiaoverview",
      "title": "Louisiana"
    }
  ],
  "StateFederalR1C28d10b219": [
    {
      "shape": "polygon",
      "coords": "160,238,143,208,236,151,259,187,259,237",
      "href": "/unistaoverview",
      "title": "United States Pavilion"
    },
    {
      "shape": "polygon",
      "coords": "234,78,261,135,258,165,239,138,209,156,178,119",
      "href": "/marylandoverview",
      "title": "Maryland"
    },
    {
      "shape": "polygon",
      "coords": "112,159,140,129,170,129,196,158,122,203",
      "href": "/wesviroverview",
      "title": "West Virginia"
    },
    {
      "shape": "polygon",
      "coords": "19,235,109,239,123,219,92,171,56,196",
      "href": "/illinoisoverview",
      "title": "Illinois"
    },
    {
      "shape": "polygon",
      "coords": "255,35,257,52,82,154,63,130",
      "href": "/montanaoverview",
      "title": "Montana"
    },
    {
      "shape": "polygon",
      "coords": "78,166,9,225,6,170,59,131",
      "href": "/lonislrroverview",
      "title": "Long Island Railroad"
    }
  ],
  "StateFederalR1C38d1b6d79": [
    {
      "shape": "polygon",
      "coords": "9,154,29,233,6,239",
      "href": "/unistaoverview",
      "title": "United States Pavilion"
    }
  ],
  "StateFederalR2C38d1c285c": [
    {
      "shape": "polygon",
      "coords": "42,10,53,57,46,93,22,127,7,140,8,8",
      "href": "/unistaoverview",
      "title": "United States Pavilion"
    }
  ],
  "StateFederalR2C28d217c50": [
    {
      "shape": "polygon",
      "coords": "61,135,65,107,7,103,7,130",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "7,45,68,67,66,103,8,95",
      "href": "/newmexoverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "123,190,182,149,212,166,232,165,259,194,262,236,201,236",
      "href": "/oklahomaoverview",
      "title": "Oklahoma"
    },
    {
      "shape": "polygon",
      "coords": "55,238,164,237,115,209,82,173,60,186",
      "href": "/hollywoodoverview",
      "title": "Hollywood USA"
    },
    {
      "shape": "polygon",
      "coords": "95,60,72,59,82,21",
      "href": "/genfoooverview",
      "title": "General Foods Archway No. 6"
    },
    {
      "shape": "polygon",
      "coords": "14,9,68,30,80,11,90,24,103,7",
      "href": "/illinoisoverview",
      "title": "Illinois"
    },
    {
      "shape": "polygon",
      "coords": "142,7,119,32,121,62,126,90,139,116,153,128,168,121,190,132,217,138,245,134,262,123,262,8",
      "href": "/unistaoverview",
      "title": "United States Pavilion"
    }
  ],
  "StateFederalR3C28d278089": [
    {
      "shape": "polygon",
      "coords": "155,94,171,70,199,107,171,122",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "235,236,205,189,230,157,259,145,261,239",
      "href": "/newyorcitoverview",
      "title": "New York City Pavilion and Ice Theater"
    },
    {
      "shape": "polygon",
      "coords": "188,60,207,44,223,61",
      "href": "/arlhatoverview",
      "title": "Arlington Hat"
    },
    {
      "shape": "polygon",
      "coords": "198,6,217,20,236,9",
      "href": "/oklahomaoverview",
      "title": "Oklahoma"
    },
    {
      "shape": "polygon",
      "coords": "58,6,110,83,190,31,166,7",
      "href": "/hollywoodoverview",
      "title": "Hollywood USA"
    }
  ],
  "StateFederalR2C18d089d4f": [
    {
      "shape": "polygon",
      "coords": "262,33,249,36,262,125",
      "href": "/newmexoverview",
      "title": "New Mexico"
    },
    {
      "shape": "polygon",
      "coords": "234,14,197,33,228,142,252,135,249,51",
      "href": "/prebuioverview",
      "title": "Press Building"
    },
    {
      "shape": "polygon",
      "coords": "241,6,251,13,259,7",
      "href": "/lonislrroverview",
      "title": "Long Island Railroad"
    }
  ],
  "StateFederalR1C18d068b67": [
    {
      "shape": "polygon",
      "coords": "262,176,201,220,229,238,261,234",
      "href": "/lonislrroverview",
      "title": "Long Island Railroad"
    },
    {
      "shape": "polygon",
      "coords": "139,196,161,152,183,184,174,210",
      "href": "/towersoverview",
      "title": "New Amsterdam Gate Entrance Tower"
    }
  ]
};
