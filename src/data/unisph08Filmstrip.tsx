import type { ReactNode } from "react";
export type Unisph08Frame = {
  file: string;
  width: number;
  height: number;
  alt: string;
  caption?: ReactNode;
};

export type Unisph08Part = {
  slug: string;
  title: string;
  intro?: ReactNode;
  thanks?: ReactNode;
  filmBackHref?: string;
  filmContinueHref?: string;
  frames: Unisph08Frame[];
};

export const UNISPH08_PART: Unisph08Part = {
  slug: "unisph08",
  title: "Filmstrip: UNISPHERE Biggest World on Earth",
  filmContinueHref: "/unisph08-02",
  frames: [
    {
      file: "unisph101.jpg",
      width: 200,
      height: 150,
      alt: "Header Frame",
    },
    {
      file: "unisph102.jpg",
      width: 200,
      height: 150,
      alt: "Title Frame",
    },
    {
      file: "unisph103.jpg",
      width: 200,
      height: 150,
      alt: "Intro Frame",
      caption: "1939: The New York World's Fair. 1904: The St. Louis Fair. 1899: The Paris International Exposition. From earliest times Markets and Fairs have been a gathering place where men came, not only to trade, but to exchange ideas. As civilization grew, as communications improved between nations, peoples of the world looked for new ways to display their industrial and cultural accomplishments.",
    },
    {
      file: "unisph105.jpg",
      width: 200,
      height: 150,
      alt: "Crystal Palace Frame",
      caption: (
        <>
          With the coming of the Industrial Revolution, the Industrial Fair was born. London, 1851. Over this world of squatting stones and twisting streets arose a strange and unbelievable structure: 
          <em>The Crystal Palace</em>
          . It was built for and became the symbol of the London Exposition of 1851. The 
          <em>first</em>
           World's Fair.
        </>
      ),
    },
    {
      file: "unisph106.jpg",
      width: 200,
      height: 150,
      alt: "Crowds Comming to Fair Frame",
      caption: "With each succeeding Fair, people came from greater distances.",
    },
    {
      file: "unisph107.jpg",
      width: 200,
      height: 150,
      alt: "Fair Structure Frame",
      caption: "Fair buildings introduced new materials and daring engineering and architectural concepts; time-keepers of progress.",
    },
    {
      file: "unisph108.jpg",
      width: 200,
      height: 150,
      alt: "Eiffel Tower Construction Frame",
      caption: "In 1889 there arose over Paris the theme symbol of the Paris International Exposition, the Eiffel Tower ...",
    },
    {
      file: "unisph109.jpg",
      width: 200,
      height: 150,
      alt: "Gustave Eiffel",
      caption: (
        <>
          ... designed by the greatest engineer of his time, Gustave Eiffel. 
          <em>Magician in Iron</em>
           he was called.
        </>
      ),
    },
    {
      file: "unisph110.jpg",
      width: 200,
      height: 150,
      alt: "Eiffel Tower Frame",
      caption: "A masterpiece of structural engineering, it remained a celebrated landmark. A symbol of World's Fairs everywhere.",
    },
    {
      file: "unisph111.jpg",
      width: 200,
      height: 150,
      alt: "Narrator Frame",
      caption: "Then one day in March, 1963, notables of both France and the United States gathered at Flushing Meadows, New York, for the beginning of construction of UNISPHERE, theme symbol for a new World's Fair.",
    },
    {
      file: "unisph113.jpg",
      width: 200,
      height: 150,
      alt: "Moses Frame",
      caption: "Robert Moses, President of the New York World's Fair:",
    },
    {
      file: "unisph114.jpg",
      width: 200,
      height: 150,
      alt: "Moses Frame",
      caption: "\"It had to be the sign ashore for all visitors, dominating Flushing Meadow, and built to remain a permanent feature of the Park, reminding succeeding generations of a pageant of surpassing interest and significance.",
    },
    {
      file: "unisph112.jpg",
      width: 200,
      height: 150,
      alt: "Moses Frame",
      caption: "\"What stronger, more durable and more appropriate metal in the record of American constructive accomplishments could be thought of than stainless steel? And what builder more imaginative and competent than the United States Steel Corporation.\"",
    },
    {
      file: "unisph116.jpg",
      width: 200,
      height: 150,
      alt: "Eiffel Starts Construction Frame",
      caption: "In most uncooperative March weather, Rene' Lagrain Eiffel, grandson of the creator of the Eiffel Tower, signaled the start of construction of UNISPHERE.",
    },
    {
      file: "unisph117.jpg",
      width: 200,
      height: 150,
      alt: "Pedestal Frame",
      caption: "The first member to go in place ...",
    },
    {
      file: "unisph115.jpg",
      width: 200,
      height: 150,
      alt: "Pedestal Frame",
    },
    {
      file: "unisph118.jpg",
      width: 200,
      height: 150,
      alt: "Pedestal Frame",
      caption: (
        <>
          ... was one section of the USS 
          <em>Cor-Ten</em>
           Steel pedestal.
        </>
      ),
    }
  ],
};

export const UNISPH08_02_PART: Unisph08Part = {
  slug: "unisph08-02",
  title: "Filmstrip: UNISPHERE Biggest World on Earth (continued)",
  filmBackHref: "/unisph08",
  filmContinueHref: "/unisph08-03",
  frames: [
    {
      file: "unisph119.jpg",
      width: 200,
      height: 150,
      alt: "Narrator & Model Frame",
      caption: "UNISPHERE: the largest representation of our globe ever attempted. UNISPHERE: the largest stainless steel structure yet built. Stainless steel. Why? Because it is to become a permanent landmark, UNISPHERE must be virtually maintenance-free yet remain enduringly beautiful. Stainless steel alone could do the job.",
    },
    {
      file: "unisph120.jpg",
      width: 200,
      height: 150,
      alt: "Stainles Steel Clad Building Frame",
      caption: "Decoratively used for years by architect and designer ...",
    },
    {
      file: "unisph121.jpg",
      width: 200,
      height: 150,
      alt: "Unisphere Model Frame",
      caption: "... it was easy to suggest stainless steel's strength and beauty for a structure so large.",
    },
    {
      file: "unisph122.jpg",
      width: 200,
      height: 150,
      alt: "Narrator & Folio Frame",
      caption: "Here's what our engineers went to work on:",
    },
    {
      file: "unisph123.jpg",
      width: 200,
      height: 150,
      alt: "Narrator & Assignment Frame",
      caption: "Assignment:",
    },
    {
      file: "unisph124.jpg",
      width: 200,
      height: 150,
      alt: "Harmonious Frame",
      caption: "If UNISPHERE were to be harmonious when viewed from any angle ...",
    },
    {
      file: "unisph125.jpg",
      width: 200,
      height: 150,
      alt: "No Bracing Frame",
      caption: "... no diagonal bracing could be used between parallels and meridians.",
    },
    {
      file: "unisph126.jpg",
      width: 200,
      height: 150,
      alt: "Heavy & Bulky Frame",
      caption: "Take away such bracing and conventional structural members normally get heavier and bulky.",
    },
    {
      file: "unisph127.jpg",
      width: 200,
      height: 150,
      alt: "Light & Attractive Frame",
      caption: "But each structural member of UNISPHERE must appear light and attractive.",
    },
    {
      file: "unisph128.jpg",
      width: 200,
      height: 150,
      alt: "Perched on Pedestal Frame",
      caption: "Perched atop a sculptured base, which must suggest lightness and grace ...",
    },
    {
      file: "unisph129.jpg",
      width: 200,
      height: 150,
      alt: "Continents Like Sails Frame",
      caption: "... UNISPHERE would have to withstand the enormous and changing forces of the wind as well as its own weight. The continents and islands would act like sails and wind pressure could exert forces nearly equal to the weight of the entire structure.",
    },
    {
      file: "unisph130.jpg",
      width: 200,
      height: 150,
      alt: "Model Frame",
      caption: "Because UNISPHERE is open and its land areas irregular in size and position, the wind blows on either the outside or the inside; the front of a continent or its back.",
    },
    {
      file: "unisph131.jpg",
      width: 200,
      height: 150,
      alt: "Narrator Shrugs Frame",
      caption: "No past experience was available to calculate the wind forces because no one had ever built a UNISPHERE before or anything like it!",
    },
    {
      file: "unisph132.jpg",
      width: 200,
      height: 150,
      alt: "Wind Tunnel Researchers Frame",
      caption: "To meet this phase of the challenge, exhaustive wind tunnel tests were conducted at the University of Maryland.",
    },
    {
      file: "unisph133.jpg",
      width: 200,
      height: 150,
      alt: "Recording Statistics Frame",
      caption: "From these aerodynamic tests came the data that made design analysis possible.",
    },
    {
      file: "unisph134.jpg",
      width: 200,
      height: 150,
      alt: "Wind Tunnel Dials Frame",
    },
    {
      file: "unisph135.jpg",
      width: 200,
      height: 150,
      alt: "Wind Tunnel Model Frame",
      caption: "[wind tunnel model]",
    },
    {
      file: "unisph136.jpg",
      width: 200,
      height: 150,
      alt: "Computer Statistician Frame",
      caption: "The mathematics of analysis posed its own peculiar challenge.",
    },
    {
      file: "unisph137.jpg",
      width: 200,
      height: 150,
      alt: "Computer Circuits Frame",
      caption: "[UNISPHERE had to be completed by April, 1964. High-speed computers were used ...",
    },
    {
      file: "unisph138.jpg",
      width: 200,
      height: 150,
      alt: "Computer Storage Frame",
      caption: "... to solve the thousands of problems that would have taken years if attempted manually.",
    },
    {
      file: "unisph139.jpg",
      width: 200,
      height: 150,
      alt: "Bridge Frame",
      caption: "In the design of this bridge, for instance, it was necessary to solve only 35 simultaneous equations.",
    },
    {
      file: "unisph140.jpg",
      width: 200,
      height: 150,
      alt: "Narrator One Problem Frame",
      caption: "In UNISPHERE, one problem alone required a solution of 670 simultaneous equations.",
    }
  ],
};

export const UNISPH08_03_PART: Unisph08Part = {
  slug: "unisph08-03",
  title: "Filmstrip: UNISPHERE Biggest World on Earth (continued)",
  filmBackHref: "/unisph08-02",
  filmContinueHref: "/unisph08-04",
  frames: [
    {
      file: "unisph141.jpg",
      width: 200,
      height: 150,
      alt: "Meridians & Parallels Frame",
      caption: "Designed, analyzed and approved, fabrication and construction could begin. Thousands of different pieces had to be cut, formed, assembled and welded. Box girders. Tubes ...",
    },
    {
      file: "unisph142.jpg",
      width: 200,
      height: 150,
      alt: "Bending Steel Frame",
      caption: "... Beams. Channels. Angles.",
    },
    {
      file: "unisph143.jpg",
      width: 200,
      height: 150,
      alt: "Welding Frame",
      caption: "Special automatic and manual welding methods were employed. An upper meridian section is welded.",
    },
    {
      file: "unisph144.jpg",
      width: 200,
      height: 150,
      alt: "Creating South Pole Frame",
      caption: "The South Pole is assembled.",
    },
    {
      file: "unisph145.jpg",
      width: 200,
      height: 150,
      alt: "Laying Out Sections Frame",
      caption: "Land areas were fabricated and assembled on this turtle-shaped fitting table which duplicated the exact curvature of UNISPHERE.",
    },
    {
      file: "unisph146.jpg",
      width: 200,
      height: 150,
      alt: "Laying Out Sections Frame",
    },
    {
      file: "unisph147.jpg",
      width: 200,
      height: 150,
      alt: "Carrying Section Frame",
    },
    {
      file: "unisph148.jpg",
      width: 200,
      height: 150,
      alt: "Creating Landmass Frame",
      caption: "Conformed to United States Army Corps of Engineering contour maps, mountains and valleys are shown in exaggerated relief in order to achieve effective visualization of elevation.",
    },
    {
      file: "unisph149.jpg",
      width: 200,
      height: 150,
      alt: "Shipping Frame",
      caption: "Wrapped to protect the stainless beauty, sections were shipped by rail and highway ...",
    },
    {
      file: "unisph150.jpg",
      width: 200,
      height: 150,
      alt: "Arriving at Site Frame",
      caption: "... to UNISPHERE's site.",
    },
    {
      file: "unisph151.jpg",
      width: 200,
      height: 150,
      alt: "Anchor Bolts Frame",
      caption: (
        <>
          Just ahead of the construction of the pedestal, thirty USS 
          <em>T-1</em>
           steel anchor bolts are set ...
        </>
      ),
    },
    {
      file: "unisph152.jpg",
      width: 200,
      height: 150,
      alt: "Cementing Anchors Frame",
      caption: "... and a concrete base poured around them.",
    },
    {
      file: "unisph153.jpg",
      width: 200,
      height: 150,
      alt: "Pedestal Frame",
    },
    {
      file: "unisph154.jpg",
      width: 200,
      height: 150,
      alt: "Installing South Pole Frame",
      caption: "First structural member to go into place is the South Pole.",
    },
    {
      file: "unisph155.jpg",
      width: 200,
      height: 150,
      alt: "South Pole Frame",
    },
    {
      file: "unisph156.jpg",
      width: 200,
      height: 150,
      alt: "Lower Meridian Frame",
      caption: "Next, one of UNISPHERE's largest members, a lower meridian ...",
    },
    {
      file: "unisph157.jpg",
      width: 200,
      height: 150,
      alt: "Lower Meridian Frame",
    },
    {
      file: "unisph158.jpg",
      width: 200,
      height: 150,
      alt: "Installing Lower Meridian Frame",
      caption: "... is fitted into the South Pole and laid across the pedestal.",
    },
    {
      file: "unisph159.jpg",
      width: 200,
      height: 150,
      alt: "Welded Girders Frame",
      caption: "Actually welded girders, the lower meridians will support the entire structure.",
    },
    {
      file: "unisph160.jpg",
      width: 200,
      height: 150,
      alt: "Guiding Girders to Position Frame",
    },
    {
      file: "unisph161.jpg",
      width: 200,
      height: 150,
      alt: "Orange Peel Section Frame",
      caption: "Right at the site, many of the members are field-welded into sub-assemblies nick-named \"orange peel sections.\"",
    },
    {
      file: "unisph162.jpg",
      width: 200,
      height: 150,
      alt: "Installing Girders Frame",
    },
    {
      file: "unisph163.jpg",
      width: 200,
      height: 150,
      alt: "Construction Workers Frame",
    },
    {
      file: "unisph164.jpg",
      width: 200,
      height: 150,
      alt: "Construction Frame",
    },
    {
      file: "unisph165.jpg",
      width: 200,
      height: 150,
      alt: "Mast Frame",
      caption: "To provide support and access, a temporary mast is placed along UNISPHERE's Polar axis.",
    },
    {
      file: "unisph166.jpg",
      width: 200,
      height: 150,
      alt: "Full Mast Frame",
      caption: "When the structure is complete, UNISPHERE will be self-supporting and the mast removed.",
    },
    {
      file: "unisph167.jpg",
      width: 200,
      height: 150,
      alt: "Southern Hemisphere Frame",
      caption: "The Southern Hemisphere, like a giant bowl, is completed in 83 days.",
    },
    {
      file: "unisph168.jpg",
      width: 200,
      height: 150,
      alt: "Topping Off Unisphere Frame",
      caption: "The bowl becomes a world of stainless steel when the last, flag-topped section is set in place.",
    },
    {
      file: "unisph169.jpg",
      width: 200,
      height: 150,
      alt: "Top View Frame",
    },
    {
      file: "unisph170.jpg",
      width: 200,
      height: 150,
      alt: "Securing North Pole Frame",
    }
  ],
};

export const UNISPH08_04_PART: Unisph08Part = {
  slug: "unisph08-04",
  title: "Filmstrip: UNISPHERE Biggest World on Earth (continued)",
  thanks: "Special Thanks to Mr. Phil Ras for providing this film for nywf64.com",
  filmBackHref: "/unisph08-03",
  frames: [
    {
      file: "unisph171.jpg",
      width: 200,
      height: 150,
      alt: "Landmasses Arrive Frame",
      caption: "Now the addition of land areas can begin.",
    },
    {
      file: "unisph172.jpg",
      width: 200,
      height: 150,
      alt: "Like Kites Frame",
      caption: "Delicate work. No job for windy days though because the sections act like big kites if not securely held.",
    },
    {
      file: "unisph173.jpg",
      width: 200,
      height: 150,
      alt: "Nearing Installation Frame",
    },
    {
      file: "unisph174.jpg",
      width: 200,
      height: 150,
      alt: "Workman Installs Frame",
    },
    {
      file: "unisph175.jpg",
      width: 200,
      height: 150,
      alt: "Panel with Mountain Frame",
    },
    {
      file: "unisph176.jpg",
      width: 200,
      height: 150,
      alt: "Lowering in Place Frame",
    },
    {
      file: "unisph177.jpg",
      width: 200,
      height: 150,
      alt: "Interior Installation Frame",
    },
    {
      file: "unisph178.jpg",
      width: 200,
      height: 150,
      alt: "Ratcheting in Place Frame",
    },
    {
      file: "unisph179.jpg",
      width: 200,
      height: 150,
      alt: "Complete without Orbitals Frame",
      caption: "Continents and islands in place, it remains only to raise the three orbit rings.",
    },
    {
      file: "unisph180.jpg",
      width: 200,
      height: 150,
      alt: "Welding Orbitals Frame",
      caption: "Weighing three tons each, the orbit rings are field-welded into a continuous single piece, 450-feet around. Special care is taken to protect the polished surface.",
    },
    {
      file: "unisph181.jpg",
      width: 200,
      height: 150,
      alt: "Four Cranes Frame",
      caption: "To prevent bending, each orbit ring is lifted by four cranes, each attached at three points.",
    },
    {
      file: "unisph182.jpg",
      width: 200,
      height: 150,
      alt: "Communication Frame",
      caption: "An intricate communications plan and network links all hands.",
    },
    {
      file: "unisph183.jpg",
      width: 200,
      height: 150,
      alt: "Raising Orbits Frame",
      caption: "Precision teamwork means that the orbit rings rise slowly and evenly.",
    },
    {
      file: "unisph184.jpg",
      width: 200,
      height: 150,
      alt: "Orbitals Closeup Frame",
    },
    {
      file: "unisph185.jpg",
      width: 200,
      height: 150,
      alt: "Orbitals Closeup Frame",
    },
    {
      file: "unisph186.jpg",
      width: 200,
      height: 150,
      alt: "Orbitals Installation Frame",
    },
    {
      file: "unisph187.jpg",
      width: 200,
      height: 150,
      alt: "Guy Wire Installation Frame",
      caption: "About 50 stainless steel guy wires connect each ring to UNISPHERE ...",
    },
    {
      file: "unisph188.jpg",
      width: 200,
      height: 150,
      alt: "Closeup of Guy Wires Frame",
      caption: "... just as spokes tie a bicycle wheel rim to its axle.",
    },
    {
      file: "unisph189.jpg",
      width: 200,
      height: 150,
      alt: "Nearly Invisible Wires Frame",
      caption: "Strong and light they are so difficult to see ...",
    },
    {
      file: "unisph190.jpg",
      width: 200,
      height: 150,
      alt: "Nearly Invisible Wires Frame",
      caption: "... that the rings seem to float in space.",
    },
    {
      file: "unisph191.jpg",
      width: 200,
      height: 150,
      alt: "South Pole Frame",
      caption: "Only 162 days after construction was begun, UNISPHERE is complete.",
    },
    {
      file: "unisph192.jpg",
      width: 200,
      height: 150,
      alt: "Interior View Frame",
      caption: "Its challenge successfully met.",
    },
    {
      file: "unisph193.jpg",
      width: 200,
      height: 150,
      alt: "Crystal Palace Frame",
      caption: "Crystal Palace ...",
    },
    {
      file: "unisph194.jpg",
      width: 200,
      height: 150,
      alt: "Eiffel Tower Frame",
      caption: "Eiffel Tower ...",
    },
    {
      file: "unisph195.jpg",
      width: 200,
      height: 150,
      alt: "Trylon & Perisphere Frame",
      caption: "Trylon and Perisphere.",
    },
    {
      file: "unisph196.jpg",
      width: 200,
      height: 150,
      alt: "Unisphere Frame",
      caption: "UNISPHERE now joins these and the other memorable time-keepers of progress.",
    },
    {
      file: "unisph197.jpg",
      width: 200,
      height: 150,
      alt: "Aerial View Frame",
      caption: "A spectacular piece of open stainless steel sculpture ...",
    },
    {
      file: "unisph198.jpg",
      width: 200,
      height: 150,
      alt: "Closeup Aerial Frame",
      caption: "... UNISPHERE is dedicated to man's aspirations toward peace through mutual understanding and symbolizes his achievements in an expanding universe.",
    },
    {
      file: "unisph199.jpg",
      width: 200,
      height: 150,
      alt: "Credits Frame",
    },
    {
      file: "unisph200.jpg",
      width: 200,
      height: 150,
      alt: "USS Frame",
    }
  ],
};

