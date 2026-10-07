/** Auto-generated from legacy maps05.html — Transportation Area Map tiles + hotspots. */
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

export const MAPS05_WIDTH = 987;
export const MAPS05_HEIGHT = 1165;

export const MAPS05_INSTRUCTION = "Click on or tap any of the pavilions on the map to see what's inside.";

export const MAPS05_TILES: MapTile[] = [
  {
    "file": "TransportationR1C1.jpg",
    "row": 1,
    "col": 1,
    "width": 269,
    "height": 233,
    "x": 0,
    "y": 0,
    "mapName": "TransportationR1C17e2a5124"
  },
  {
    "file": "TransportationR1C2.jpg",
    "row": 1,
    "col": 2,
    "width": 269,
    "height": 233,
    "x": 269,
    "y": 0,
    "mapName": "TransportationR1C27e3b132e"
  },
  {
    "file": "TransportationR1C3.jpg",
    "row": 1,
    "col": 3,
    "width": 181,
    "height": 233,
    "x": 806,
    "y": 0,
    "mapName": "TransportationR1C323e5d1"
  },
  {
    "file": "TransportationR2C1.jpg",
    "row": 2,
    "col": 1,
    "width": 269,
    "height": 233,
    "x": 0,
    "y": 233,
    "mapName": "TransportationR2C17e3149fd"
  },
  {
    "file": "TransportationR2C2.jpg",
    "row": 2,
    "col": 2,
    "width": 269,
    "height": 233,
    "x": 269,
    "y": 233,
    "mapName": "TransportationR2C27e3845f4"
  },
  {
    "file": "TransportationR2C3.jpg",
    "row": 2,
    "col": 3,
    "width": 269,
    "height": 233,
    "x": 538,
    "y": 233,
    "mapName": "TransportationR2C37e433ce6"
  },
  {
    "file": "TransportationR3C1.jpg",
    "row": 3,
    "col": 1,
    "width": 269,
    "height": 231,
    "x": 0,
    "y": 466,
    "mapName": "TransportationR3C17e46d35b"
  },
  {
    "file": "TransportationR3C2.jpg",
    "row": 3,
    "col": 2,
    "width": 269,
    "height": 231,
    "x": 269,
    "y": 466,
    "mapName": "TransportationR3C27e4510eb"
  },
  {
    "file": "TransportationR3C3.jpg",
    "row": 3,
    "col": 3,
    "width": 269,
    "height": 231,
    "x": 538,
    "y": 466,
    "mapName": "TransportationR3C37e4fee3a"
  },
  {
    "file": "TransportationR4C1.jpg",
    "row": 4,
    "col": 1,
    "width": 269,
    "height": 235,
    "x": 0,
    "y": 697,
    "mapName": null
  },
  {
    "file": "TransportationR4C2.jpg",
    "row": 4,
    "col": 2,
    "width": 269,
    "height": 235,
    "x": 269,
    "y": 697,
    "mapName": "TransportationR4C27e597169"
  },
  {
    "file": "TransportationR4C3.jpg",
    "row": 4,
    "col": 3,
    "width": 269,
    "height": 235,
    "x": 538,
    "y": 697,
    "mapName": "TransportationR4C37e528b8a"
  },
  {
    "file": "TransportationR5C2.jpg",
    "row": 5,
    "col": 2,
    "width": 269,
    "height": 233,
    "x": 269,
    "y": 932,
    "mapName": "TransportationR5C27e5cbe61"
  },
  {
    "file": "TransportationR5C3.jpg",
    "row": 5,
    "col": 3,
    "width": 269,
    "height": 233,
    "x": 538,
    "y": 932,
    "mapName": "TransportationR5C37e60924d"
  }
];

export const MAPS05_MAPS: Record<string, MapArea[]> = {
  "TransportationR1C323e5d1": [
    {
      "shape": "rect",
      "coords": "6,6,174,229",
      "href": "/maps01",
      "title": "1964 Official Souvenir Map"
    }
  ],
  "TransportationR2C37e433ce6": [
    {
      "shape": "polygon",
      "coords": "8,203,41,216,7,226",
      "href": "/sinclairoverview",
      "title": "Sinclair"
    }
  ],
  "TransportationR3C17e46d35b": [
    {
      "shape": "polygon",
      "coords": "262,106,243,86,249,124,261,142",
      "href": "/porautoverview",
      "title": "Port Authority Heliport"
    },
    {
      "shape": "polygon",
      "coords": "209,7,228,28,261,16,259,6",
      "href": "/undrghomeoverview",
      "title": "Underground World Home"
    }
  ],
  "TransportationR2C17e3149fd": [
    {
      "shape": "polygon",
      "coords": "262,180,261,223,213,225,190,216",
      "href": "/undrghomeoverview",
      "title": "Underground World Home"
    },
    {
      "shape": "polygon",
      "coords": "118,7,67,69,99,100,171,8",
      "href": "/spacparkoverview",
      "title": "US Space Park"
    },
    {
      "shape": "polygon",
      "coords": "29,117,70,90,98,121",
      "href": "/towersoverview",
      "title": "Stuyvesant Gate Entrance Tower"
    },
    {
      "shape": "polygon",
      "coords": "182,6,261,114,262,140,159,198,103,106",
      "href": "/halscioverview",
      "title": "Hall of Science"
    },
    {
      "shape": "polygon",
      "coords": "43,6,17,10,65,58,90,9",
      "href": "/easternoverview",
      "title": "Eastern Air Lines"
    }
  ],
  "TransportationR3C27e4510eb": [
    {
      "shape": "polygon",
      "coords": "9,67,36,49,33,21,6,38",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "251,46,261,67,259,43",
      "href": "/usruboverview",
      "title": "US Rubber"
    },
    {
      "shape": "polygon",
      "coords": "241,114,217,81,247,50,261,86",
      "href": "/skfoverview",
      "title": "SKF Industries"
    },
    {
      "shape": "polygon",
      "coords": "181,10,261,9,261,37,214,60",
      "href": "/sinclairoverview",
      "title": "Sinclair"
    },
    {
      "shape": "polygon",
      "coords": "69,6,72,38,85,73,108,130,138,175,168,201,194,223,261,220,261,197,235,130,198,66,167,26,145,9",
      "href": "/chrysleroverview",
      "title": "Chrysler"
    },
    {
      "shape": "polygon",
      "coords": "78,145,96,137,106,183,78,196",
      "href": "/hertzoverview",
      "title": "Hertz Travel Center"
    },
    {
      "shape": "polygon",
      "coords": "8,82,54,51,79,76,92,107,96,127,71,140,73,203,63,212,40,221,6,165",
      "href": "/porautoverview",
      "title": "Port Authority Heliport"
    },
    {
      "shape": "polygon",
      "coords": "32,7,31,18,8,29,6,6",
      "href": "/arlhatoverview",
      "title": "Arlington Hat"
    }
  ],
  "TransportationR3C37e4fee3a": [
    {
      "shape": "polygon",
      "coords": "8,90,43,71,92,167,142,166,106,223,6,223",
      "href": "/trantravoverview",
      "title": "Transportation and Travel Pavilion"
    },
    {
      "shape": "polygon",
      "coords": "114,224,124,207,135,222",
      "href": "/gmoverview",
      "title": "General Motors"
    },
    {
      "shape": "polygon",
      "coords": "6,15,23,10,70,37,43,61,6,82",
      "href": "/usruboverview",
      "title": "US Rubber"
    }
  ],
  "TransportationR4C37e528b8a": [
    {
      "shape": "polygon",
      "coords": "134,7,158,6,215,81,236,202,235,226,124,228,114,207,93,201,35,93,71,11",
      "href": "/gmoverview",
      "title": "General Motors"
    },
    {
      "shape": "polygon",
      "coords": "86,203,80,226,114,227",
      "href": "/sprogfountoverview",
      "title": "Fountain of Progress South"
    },
    {
      "shape": "polygon",
      "coords": "8,195,26,181,34,194,55,186,74,208,67,226,9,226",
      "href": "/natmarparoverview",
      "title": "National Maritime Union Park"
    },
    {
      "shape": "polygon",
      "coords": "30,177,51,156,56,178,39,190",
      "href": "/arlhatoverview",
      "title": "Arlington Hat"
    },
    {
      "shape": "polygon",
      "coords": "7,98,42,158,8,186",
      "href": "/greyhoundoverview",
      "title": "Greyhound"
    },
    {
      "shape": "polygon",
      "coords": "7,75,26,90,6,90",
      "href": "/genfoooverview",
      "title": "General Foods Archway No. 10"
    }
  ],
  "TransportationR4C27e597169": [
    {
      "shape": "polygon",
      "coords": "159,75,203,41,182,28,136,31",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "106,228,146,197,162,226",
      "href": "/towersoverview",
      "title": "Henry Hudson Gate Entrance Tower"
    },
    {
      "shape": "polygon",
      "coords": "204,7,257,28,261,8",
      "href": "/chrysleroverview",
      "title": "Chrysler"
    },
    {
      "shape": "polygon",
      "coords": "260,200,214,227,259,227",
      "href": "/natmarparoverview",
      "title": "National Maritime Union Park"
    },
    {
      "shape": "polygon",
      "coords": "262,104,216,126,156,163,205,227,262,190",
      "href": "/greyhoundoverview",
      "title": "Greyhound"
    },
    {
      "shape": "polygon",
      "coords": "260,65,253,98,262,96",
      "href": "/genfoooverview",
      "title": "General Foods Archway No. 10"
    },
    {
      "shape": "polygon",
      "coords": "216,43,259,50,245,95,200,120,175,87,179,66",
      "href": "/socmobiloverview",
      "title": "Socony Mobil"
    },
    {
      "shape": "polygon",
      "coords": "153,7,126,31,185,25",
      "href": "/arlhatoverview",
      "title": "Arlington Hat"
    }
  ],
  "TransportationR5C27e5cbe61": [
    {
      "shape": "polygon",
      "coords": "262,44,233,59,178,37,142,61,195,142,259,167",
      "href": "/autthroverview",
      "title": "Auto Thrill Show"
    },
    {
      "shape": "polygon",
      "coords": "230,6,246,33,261,34,262,6",
      "href": "/natmarparoverview",
      "title": "National Maritime Union Park"
    },
    {
      "shape": "polygon",
      "coords": "168,8,158,31,127,34,135,8",
      "href": "/towersoverview",
      "title": "Henry Hudson Gate Entrance Tower"
    }
  ],
  "TransportationR5C37e60924d": [
    {
      "shape": "polygon",
      "coords": "55,33,79,69,100,57,78,20",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "80,7,112,6,94,18",
      "href": "/sprogfountoverview",
      "title": "Fountain of Progress South"
    },
    {
      "shape": "polygon",
      "coords": "236,8,195,100,130,158,80,77,107,57,94,28,132,7",
      "href": "/gmoverview",
      "title": "General Motors"
    },
    {
      "shape": "polygon",
      "coords": "9,48,27,30,42,31,119,158,111,193,6,167",
      "href": "/autthroverview",
      "title": "Auto Thrill Show"
    },
    {
      "shape": "polygon",
      "coords": "61,6,56,21,8,31,9,7",
      "href": "/natmarparoverview",
      "title": "National Maritime Union Park"
    }
  ],
  "TransportationR1C27e3b132e": [
    {
      "shape": "polygon",
      "coords": "7,83,116,226,7,224",
      "href": "/fordoverview",
      "title": "Ford"
    }
  ],
  "TransportationR2C27e3845f4": [
    {
      "shape": "polygon",
      "coords": "221,226,262,204,262,224",
      "href": "/sinclairoverview",
      "title": "Sinclair"
    },
    {
      "shape": "polygon",
      "coords": "126,200,219,148,258,152,259,199,187,225",
      "href": "/lowengaroverview",
      "title": "Lowenbrau Gardens"
    },
    {
      "shape": "polygon",
      "coords": "84,163,99,123,137,100,238,112,210,141,124,193",
      "href": "/avisoverview",
      "title": "Avis Antique Car Ride"
    },
    {
      "shape": "polygon",
      "coords": "66,224,70,171,144,221",
      "href": "/chrysleroverview",
      "title": "Chrysler"
    },
    {
      "shape": "polygon",
      "coords": "13,226,29,215,33,225",
      "href": "/arlhatoverview",
      "title": "Arlington Hat"
    },
    {
      "shape": "polygon",
      "coords": "6,175,21,162,27,208,7,224",
      "href": "/undrghomeoverview",
      "title": "Underground World Home"
    },
    {
      "shape": "polygon",
      "coords": "11,122,7,109,33,150,7,159",
      "href": "/genfoooverview",
      "title": "General Foods Archway No. 9"
    },
    {
      "shape": "polygon",
      "coords": "127,6,164,43,137,68,25,111,7,86,6,6",
      "href": "/fordoverview",
      "title": "Ford"
    }
  ],
  "TransportationR1C17e2a5124": [
    {
      "shape": "polygon",
      "coords": "75,196,106,219,78,225",
      "href": "/braraioverview",
      "title": ""
    },
    {
      "shape": "polygon",
      "coords": "53,225,61,210,74,224",
      "href": "/easternoverview",
      "title": "Eastern Air Lines"
    },
    {
      "shape": "polygon",
      "coords": "120,221,141,203,180,226",
      "href": "/spacparkoverview",
      "title": "US Space Park"
    },
    {
      "shape": "polygon",
      "coords": "172,156,193,199,160,196",
      "href": "/nprogfountoverview",
      "title": "Fountain of Progress North"
    },
    {
      "shape": "polygon",
      "coords": "105,119,83,168,129,197,148,154",
      "href": "/cengrioverview",
      "title": "Century Grill"
    },
    {
      "shape": "polygon",
      "coords": "226,30,173,66,155,106,212,224,262,225,262,70",
      "href": "/fordoverview",
      "title": "Ford"
    }
  ]
};
