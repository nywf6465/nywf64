#!/usr/bin/env python3
"""Generate src/app/ibm05/page.tsx from legacy ibm05.html metadata."""

IBM_SITE = "SOURCE: www.ibm.com websiite"
PHOTO_LAB = "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc."
BLACKHAWK = "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines"
YOUTUBE = "SOURCE: YouTube Video Screen Shot"
NYWF = "SOURCE: © Copyright nywf64.com Collection"
BERKS = "SOURCE: © Copyright Berksboy Collection"
AUCTION = "SOURCE: Online auction"

commercial = [
    ("5459Large.jpg", 400, 279, "Architectural model of the IBM Pavilion", "Architectural model of the IBM Pavilion", PHOTO_LAB),
    ("ibm104.jpg", 400, 385, "IBM Executives Examine a Model of the Pavilion", "IBM Executives Examine a Model of the Pavilion", IBM_SITE),
    ("ibm113.jpg", 400, 229, "Construction of the IBM Pavilion", "Construction of the IBM Pavilion", YOUTUBE),
    ("ibm112.jpg", 400, 233, "Construction of the IBM Pavilion", "Construction of the IBM Pavilion", YOUTUBE),
    ("5485.jpg", 400, 267, "IBM Pavilion - Night", "IBM Pavilion - Night", PHOTO_LAB),
    ("555-24.jpg", 400, 274, "IBM Pavilion", "IBM Pavilion", BLACKHAWK),
    ("633-77.jpg", 267, 400, "IBM Pavilion", "IBM Pavilion", BLACKHAWK),
    ("ibm108.jpg", 400, 278, "Inside the Information Machine atop the IBM Pavilion", "inside_im", IBM_SITE),
    ("ibm111.jpg", 400, 312, "IBM Hostess Explains the Probability Machine", "IBM Hostess Explains the Probability Machine", IBM_SITE),
    ("ibm109.jpg", 400, 293, "Dice Cages Illustriate Probability", "Dice Cages Illustriate Probability", IBM_SITE),
    ("ibm110.jpg", 259, 400, "Little Theater Puppet Shows Help Explain Logic", "Little Theater Puppet Shows Help Explain Logic", IBM_SITE),
    ("ibm105.jpg", 400, 284, "IBM Hostess Explains how Automatic Character Recognition Works", "IBM Hostess Explains how Automatic Character Recognition Works", IBM_SITE),
    ("ibm106.jpg", 400, 287, "Digital Displays Shows Results of Automatic Character Recognition", "Digital Displays Shows Results of Automatic Character Recognition", IBM_SITE),
    ("ibm107.jpg", 266, 400, "Fairgoers type on IBM's New Selectric Typewriters", "selectric", IBM_SITE),
]

fairgoer = [
    ("ibm32.jpg", 400, 270, "IBM Pavilion", "IBM Pavilion", NYWF),
    ("ibm38.jpg", 400, 267, "IBM Pavilion", "IBM Pavilion", NYWF),
    ("ibm124.jpg", 400, 272, "IBM Pavilion", "IBM Pavilion", AUCTION),
    ("ibm94.jpg", 400, 270, "IBM Pavilion", "IBM Pavilion", BERKS),
    ("ibm103.jpg", 400, 280, "IBM Pavilion", "IBM Pavilion", AUCTION),
    ("ibm99.jpg", 400, 400, "IBM Pavilion", "IBM Pavilion", AUCTION),
    ("ibm101.jpg", 265, 400, "Probability Machine", "Probability Machine", AUCTION),
    ("ibm98.jpg", 400, 499, "Puppet Theaters Entrance", "Puppet Theaters Entrance", AUCTION),
    ("ibm102.jpg", 400, 275, "Puppet Theater", "Puppet Theater", AUCTION),
    ("ibm100.jpg", 270, 400, "The People Wall - IBM Pavilion", "The People Wall - IBM Pavilion", AUCTION),
    ("ibm97.jpg", 400, 268, "The People Wall - IBM Pavilion", "The People Wall - IBM Pavilion", AUCTION),
    ("ibm95.jpg", 400, 266, "IBM Pavilion", "IBM Pavilion", AUCTION),
    ("ibm96.jpg", 400, 306, "IBM Pavilion - two views of the Information Machine illuninated at night", "IBM Pavilion - two views of the Information Machine illuninated at night", BERKS),
]


def title_js(key: str) -> str:
    if key == "inside_im":
        return (
            "<>\n"
            "                Inside the <em>Information Machine</em> atop the IBM Pavilion\n"
            "              </>"
        )
    if key == "selectric":
        return (
            "<>\n"
            "                Fairgoers type on IBM&apos;s New <em>Selectric</em> Typewriters\n"
            "              </>"
        )
    return f'"{key.replace(chr(34), chr(92)+chr(34))}"'


def photo_entry(file: str, w: int, h: int, alt: str, title_key: str, source: str) -> str:
    return f"""            {{
              image: {{
                src: "/images/ibm05/{file}",
                width: {w},
                height: {h},
                alt: "{alt.replace('"', '\\"')}",
              }},
              title: {title_js(title_key)},
              source: "{source.replace('"', '\\"')}",
            }}"""


def section(heading: str, items: list) -> str:
    entries = ",\n".join(photo_entry(*row) for row in items)
    return f"""        {{
          heading: "{heading}",
          photos: [
{entries}
          ],
        }}"""

sections = ",\n".join([
    section("Commercial Photographs", commercial),
    section("Fairgoer Photographs", fairgoer),
])

header = '''import type { Metadata } from "next";
import { IbmNavChrome } from "@/components/IbmNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — IBM Pavilion — nywf64.com",
  description:
    "IBM Pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * IBM photograph album — body from legacy ibm05.html (scrapbook banner omitted).
 * Publication Photographs section omitted per pavilion scope.
 * Legacy typos (Illustriate, illuninated, websiite) preserved.
 */
export default function Ibm05Page() {
  return (
    <PhotographsPage
      heroLabel="IBM Pavilion"
      titleId="ibm05-title"
      title="Photograph Album"
      hero={{
        src: "/images/ibmoverview/hero-banner.jpg",
        alt: "IBM Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IbmNavChrome />}
      previousHref="/ibm04"
      overviewHref="/ibmoverview"
      nextHref="/ibm06"
      sections={[
'''

footer = '''      ]}
    />
  );
}
'''

path = "/tmp/ibm-work/src/app/ibm05/page.tsx"
with open(path, "w", encoding="utf-8") as f:
    f.write(header + sections + footer)
print("Wrote", path)
