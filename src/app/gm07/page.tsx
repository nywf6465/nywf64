import type { Metadata } from "next";
import { GmNavChrome } from "@/components/GmNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — General Motors — nywf64.com",
  description:
    "General Motors Pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Motors Photograph Album — photographs standard.
 * Body from legacy gm07.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Gm07Page() {
  return (
    <PhotographsPage
      heroLabel="General Motors Pavilion"
      titleId="gm07-title"
      hero={{
        src: "/images/gmoverview/hero-banner.jpg",
        alt: "General Motors Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<GmNavChrome />}
      previousHref="/gm06"
      overviewHref="/gmoverview"
      nextHref="/gm08"
      sections={[
        {
          heading: "General Motors Pavilion & Exhibits",
          photos: [
            {
              image: {
                src: "/images/gm07/gm02.jpg",
                width: 350,
                height: 442,
                alt: "General Motors Futurama Building Canopy Soars 110 Feet",
              },
              title: (<>
                General Motors Futurama Building Canopy Soars 110 Feet
                <br />
                <br />
                BEHIND THE 10-story canopy of the General Motors Futurama at the New York World&apos;s Fair, the display plazas form an integral part of the exhibit. Designed by GM&apos;s Styling Staff, the 230,000 square foot pavilion houses a display of GM research in science and engineering along with a display automotive and household products made here and abroad by General Motors.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm04.jpg",
                width: 350,
                height: 271,
                alt: "Night view of illuminated GM Building",
              },
              title: "Night view of illuminated GM Building",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm03.jpg",
                width: 350,
                height: 319,
                alt: "Outdoor Product Plaza",
              },
              title: "Outdoor Product Plaza",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm05.jpg",
                width: 350,
                height: 219,
                alt: "On the Avenue of Progress",
              },
              title: (<>
                On the Avenue of Progress
                <br />
                <br />
                THE AVENUE OF PROGRESS in the General Motors Futurama at the New York World&apos;s Fair offers the visitor a view of the latest scientific and engineering developments in aerospace travel. Throughout the 18,500 square foot display area are animated depictions of the pure and applied research conducted by GM scientists today.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm93.jpg",
                width: 350,
                height: 452,
                alt: "Model of a Futuristic Containerized Freight Terminal",
              },
              title: "Model of a Futuristic Containerized Freight Terminal",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm07.jpg",
                width: 350,
                height: 278,
                alt: "Runabout Experimental Car",
              },
              title: "Runabout Experimental Car",
              source: "Source: GM Archival Photographs",
            },
          ],
        },
        {
          heading: "Futurama II",
          photos: [
            {
              image: {
                src: "/images/gm07/gm50.jpg",
                width: 350,
                height: 273,
                alt: "Lunar Rovers Float Magically Over Powdered Plains",
              },
              title: "Lunar Rovers Float Magically Over Powdered Plains",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm67.jpg",
                width: 350,
                height: 272,
                alt: "Antarctica is now a Land of Growing Communities",
              },
              title: (<>
                Antarctica is now a Land of Growing Communities
                <br />
                <br />
                AN ATOMIC-POWERED SUBMARINE surfaces within an all-weather port to supply scientists turning Antarctica into a world-wide weather eye. The port, kept free of ice the year-round, is cut through the ice shelf which extends from the shore into the ocean. Domed warehouses handling containerized freight shipments stand in the background of this scene from the General Motors Futurama ride at the New York World&apos;s Fair.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm66.jpg",
                width: 350,
                height: 271,
                alt: "Probe for the Earth's Secrets Through Countless Centuries of Ice",
              },
              title: (<>
                Probe for the Earth&apos;s Secrets Through Countless Centuries of Ice
                <br />
                <br />
                WORKMEN, clad in specially designed clothing to protect them from the shattering Antarctic cold, install an under-ice laboratory along the General Motors Futurama ride at the New York World&apos;s Fair. An excavating machine, powered by fuel cells, carves a passageway to the next installation after holing out the laboratory site. The Futurama attracted almost half of those who visited the Fair.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm58.jpg",
                width: 350,
                height: 279,
                alt: "In Mobile Laboratories Form Expeditions into the Vast White Wastelands of the Still Unknown",
              },
              title: "In Mobile Laboratories Form Expeditions into the Vast White Wastelands of the Still Unknown",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm51.jpg",
                width: 350,
                height: 345,
                alt: "In Aquacopters ...",
              },
              title: "In Aquacopters ...",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm53.jpg",
                width: 350,
                height: 449,
                alt: "... Search the Ocean Floor to Find, Miles Deep, Vast Fields of Precious Minerals and Ores",
              },
              title: (<>
                ... Search the Ocean Floor to Find, Miles Deep, Vast Fields of Precious Minerals and Ores
                <br />
                <br />
                AN AQUACOPTER, a two-man undersea personnel carrier fitted with claw-handed arms and capable of operating on the ocean floor, is one of the futuristic vehicles featured in the undersea set of the General Motors Futurama ride at the New York World&apos;s Fair. In an aquacopter geologists, according to GM designers, would be able to explore the bottom of the sea for minerals, chemicals, petroleum and other natural resources not attainable with the undersea craft available today. The &quot;fans&quot; at the top and bottom of the aquacopter are for vertical ascent and descent and the duct in the rear houses the power for forward motion.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm65.jpg",
                width: 350,
                height: 272,
                alt: "While Trains of Submarines Transport Materials and Goods Along the Waterways of the Undersea",
              },
              title: (<>
                While Trains of Submarines Transport Materials and Goods Along the Waterways of the Undersea
                <br />
                <br />
                THE LIMITLESS TREASURES of the sea are being extracted in this scene from the General Motors Futurama &quot;ride into tomorrow&quot; at the New York World&apos;s Fair. A drill (left) pierces the ocean floor near a number of previously capped-off oil wells while an atomic-powered submarine train passes in the background.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm59.jpg",
                width: 350,
                height: 462,
                alt: "A Weekend if you Wish at Hotel Atlantis in the Kingdom of the Seas",
              },
              title: (<>
                A Weekend if you Wish at <em>Hotel Atlantis</em> in the Kingdom of the Seas
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm62.jpg",
                width: 350,
                height: 272,
                alt: "A Holiday of Thrills and of Adventures; of Beauty and Enchantment",
              },
              title: "A Holiday of Thrills and of Adventures; of Beauty and Enchantment",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm68.jpg",
                width: 350,
                height: 272,
                alt: "A Jungle Road is Built in One Continuous Operation",
              },
              title: "A Jungle Road is Built in One Continuous Operation",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm61.jpg",
                width: 350,
                height: 453,
                alt: "First, a Searing Ray of Light, a Laser Beam, Cuts Through the Trees",
              },
              title: "First, a Searing Ray of Light, a Laser Beam, Cuts Through the Trees",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm63.jpg",
                width: 350,
                height: 268,
                alt: "Then a Giant Machine, a Factory on Wheels, Cuts Up the Stumps and Jungle Growth...",
              },
              title: "Then a Giant Machine, a Factory on Wheels, Cuts Up the Stumps and Jungle Growth...",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm60.jpg",
                width: 350,
                height: 273,
                alt: "These Forest Highways now are Bringing to the Innermost Depths of the Tropic World the Goods and Materials of Progress and Prosperity",
              },
              title: (<>
                These Forest Highways now are Bringing to the Innermost Depths of the Tropic World the Goods and Materials of Progress and Prosperity
                <br />
                <br />
                DEEP WITHIN THE JUNGLE a freight depot lies athwart an electronically controlled highway. Inside the depot are containerized shipments of lumber, chemicals, minerals and other raw materials which trucks will carry to processing centers and return with finished goods. In this scene from the General Motors Futurama &quot;ride into tomorrow&quot; at the New York World&apos;s Fair the highway takes the place of the river as the new jungle thoroughfare.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm69.jpg",
                width: 350,
                height: 271,
                alt: "And Offering to us All Enchanting Tours Through the Storybook Forests of Tropic Lands",
              },
              title: (<>
                And Offering to us All Enchanting Tours Through the Storybook Forests of Tropic Lands
                <br />
                <br />
                MOBILE, SELF-PROPELLED HOMES provide workers a haven from equatorial heat and humidity while a road-building machine creates a multi-lane super highway of concrete and steel in one continous operation throgh the heart of the jungle. These trailer homes of the future featrue expandable compartments which, when extended, enlarge the living area to 400 sq. ft. The units move with the progress of the road-builder providing living quarters for five persons. These and many other vehicles feature dramatic and exciting styling innovations by the General Motors styling staff in the GM Futurama &quot;ride into tomorrow&quot; at the New York World&apos;s Fair.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm57.jpg",
                width: 350,
                height: 270,
                alt: "And for our Deserts a New Technology: Waters from the Sea Made Fresh as Rain to Nourish Crops Planted in the Sand",
              },
              title: (<>
                And for our Deserts a New Technology: Waters from the Sea Made Fresh as Rain to Nourish Crops Planted in the Sand
                <br />
                <br />
                A FOOD PROCESSING PLANT stands amidst the once-barren sands of the desert which are made to bloom with desalted sea-water brought over the mountains by atomic-powered pumps within the General Motors Futurama ride at the New York World&apos;s Fair. Highly-sophisticated farming and processing techniques, coupled with rapid rail and roadway transportation, are expected to reduce drastically the time between farm field and dining room tables.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm70.jpg",
                width: 350,
                height: 268,
                alt: "Produce from Seed to Shipment, Programmed and Processed by a New Agriculture",
              },
              title: "Produce from Seed to Shipment, Programmed and Processed by a New Agriculture",
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm92.jpg",
                width: 350,
                height: 445,
                alt: "A Science of Plenty for an Ever Growing World",
              },
              title: (<>
                A Science of Plenty for an Ever Growing World
                <br />
                <br />
                THE DRAB EXPANSE of the barren desert is broken by the lush green of ripening crops and the sparkling machinery of an automated farm in this scene from the General Motors Futurama &quot;ride into tomorrow&quot; at the New York World&apos;s Fair. Transportation innovations such as the containerized trains at the tunnel mouth (upper right) promise overnight delivery of farm products to metropolitan markets. In foreground are solar units providing auxiliary electricl power and (above them) a rotating irrigation system utilizing desalted sea water.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm64.jpg",
                width: 350,
                height: 273,
                alt: "People Live Today Where they Will, Neither Terrain nor Distance a Deterrent to Where the Men of the City Build their Homes",
              },
              title: (<>
                People Live Today Where they Will, Neither Terrain nor Distance a Deterrent to Where the Men of the City Build their Homes
                <br />
                <br />
                A CIRCULAR SWIMMING POOL becomes an integral part of this futuristic home displayed in the General Motors Futurama ride at the New York World&apos;s Fair. The garage at right contains an electronic auto repair center; household service facilities are located in theater; moving walls enclose the open-air kitchen in inclement weather.
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm52.jpg",
                width: 350,
                height: 345,
                alt: "The Continental Highway Now Leads Us to the City of Tomorrow",
              },
              title: (<>
                The <em>Continental Highway</em> Now Leads Us to the City of Tomorrow
              </>),
              source: "Source: GM Archival Photographs",
            },
            {
              image: {
                src: "/images/gm07/gm55.jpg",
                width: 350,
                height: 265,
                alt: "Plazas of Urban Living Rise Over Freeways. Terminals Serve Sections of the City; Make Public Transportation More Convenient; Provide Ample Space for Private Cars",
              },
              title: "Plazas of Urban Living Rise Over Freeways. Terminals Serve Sections of the City; Make Public Transportation More Convenient; Provide Ample Space for Private Cars",
              source: "Source: GM Archival Photographs",
            },
          ],
        },
      ]}
    />
  );
}
