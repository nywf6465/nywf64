/**
 * A-to-Z letter cards — labels match atoz-links-list mockup exactly.
 * No Q card (absent from source). Routes are uppercase letter stubs `/A`…`/W`.
 */
export type AtozCard = {
  letter: string;
  href: string;
  /** Full range label, e.g. "Aerial Tower Ride to Avis" */
  label: string;
  from: string;
  to: string;
};

export const ATOZ_CARDS: AtozCard[] = [
  {
    letter: "A",
    href: "/A",
    label: "Aerial Tower Ride to Avis",
    from: "Aerial Tower Ride",
    to: "Avis",
  },
  {
    letter: "B",
    href: "/B",
    label: "Bargreen Buffet to British Lion Pub",
    from: "Bargreen Buffet",
    to: "British Lion Pub",
  },
  {
    letter: "C",
    href: "/C",
    label: "Caribbean to Continental Park",
    from: "Caribbean",
    to: "Continental Park",
  },
  {
    letter: "D",
    href: "/D",
    label: "Dancing Waters to Dynamic Maturity",
    from: "Dancing Waters",
    to: "Dynamic Maturity",
  },
  {
    letter: "E",
    href: "/E",
    label: "Eastern Air Lines to Equitable Life",
    from: "Eastern Air Lines",
    to: "Equitable Life",
  },
  {
    letter: "F",
    href: "/F",
    label: "Festival of Gas to Funland",
    from: "Festival of Gas",
    to: "Funland",
  },
  {
    letter: "G",
    href: "/G",
    label: "Garden of Meditation to Guinea",
    from: "Garden of Meditation",
    to: "Guinea",
  },
  {
    letter: "H",
    href: "/H",
    label: "Hall of Education to House of Good Taste",
    from: "Hall of Education",
    to: "House of Good Taste",
  },
  {
    letter: "I",
    href: "/I",
    label: "Illinois to Ireland",
    from: "Illinois",
    to: "Ireland",
  },
  {
    letter: "J",
    href: "/J",
    label: "Japan to Julimar Farm",
    from: "Japan",
    to: "Julimar Farm",
  },
  {
    letter: "K",
    href: "/K",
    label: "Kiddyland to Korea, Republic of",
    from: "Kiddyland",
    to: "Korea, Republic of",
  },
  {
    letter: "L",
    href: "/L",
    label: "Lake Cruise to Lunar Fountain",
    from: "Lake Cruise",
    to: "Lunar Fountain",
  },
  {
    letter: "M",
    href: "/M",
    label: "Main Mall to Morocco",
    from: "Main Mall",
    to: "Morocco",
  },
  {
    letter: "N",
    href: "/N",
    label: "National Cash Register to New York State",
    from: "National Cash Register",
    to: "New York State",
  },
  {
    letter: "O",
    href: "/O",
    label: "Oklahoma to Oregon",
    from: "Oklahoma",
    to: "Oregon",
  },
  {
    letter: "P",
    href: "/P",
    label: "Pakistan to Protestant Center",
    from: "Pakistan",
    to: "Protestant Center",
  },
  {
    letter: "R",
    href: "/R",
    label: "RCA to Russian Orthodox Church",
    from: "RCA",
    to: "Russian Orthodox Church",
  },
  {
    letter: "S",
    href: "/S",
    label: "Santa Maria to Switzerland",
    from: "Santa Maria",
    to: "Switzerland",
  },
  {
    letter: "T",
    href: "/T",
    label: "Texas Pavilions to Two Thousand Tribes",
    from: "Texas Pavilions",
    to: "Two Thousand Tribes",
  },
  {
    letter: "U",
    href: "/U",
    label: "U.S. Post Office to United States",
    from: "U.S. Post Office",
    to: "United States",
  },
  {
    letter: "V",
    href: "/V",
    label: "Vatican to Venezuela",
    from: "Vatican",
    to: "Venezuela",
  },
  {
    letter: "W",
    href: "/W",
    label: "Walter's Wax Museum to World's Fair Pavilion",
    from: "Walter's Wax Museum",
    to: "World's Fair Pavilion",
  },
];
