#!/usr/bin/env python3
"""Generate House of Good Taste page.tsx files (hougt01–11, hougtmap)."""
from __future__ import annotations

import os
import textwrap

ROOT = os.path.join(os.path.dirname(__file__), "..")
APP = os.path.join(ROOT, "src", "app")

HERO = """{
        src: "/images/hougtoverview/hero-banner.jpg",
        alt: "House of Good Taste at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }"""


def w(path: str, content: str) -> None:
    full = os.path.join(APP, path, "page.tsx")
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print("wrote", path)


w(
    "hougt01",
    textwrap.dedent(
        f'''
        import type {{ Metadata }} from "next";
        import {{ HougtNavChrome }} from "@/components/HougtNavChrome";
        import {{ GuidebookSouvenirPage }} from "@/components/GuidebookSouvenirPage";

        export const metadata: Metadata = {{
          title:
            "1964 & 1965 Official Guidebook & Souvenir Map — House of Good Taste — nywf64.com",
          description:
            "House of Good Taste entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
        }};

        export default function Hougt01Page() {{
          return (
            <GuidebookSouvenirPage
              heroLabel="House of Good Taste"
              titleId="hougt01-title"
              hero={HERO}
              nav={{<HougtNavChrome />}}
              previousHref="/hougtoverview"
              nextHref="/hougt02"
              guide1964={{{{
                cover: {{ src: "/images/hougt01/guide1964.jpg", width: 136, height: 216 }},
                logo: {{
                  src: "/images/hougt01/hougotlogo64.gif",
                  width: 144,
                  height: 61,
                  alt: "",
                }},
                name: (
                  <>
                    HOUSE OF
                    <br />
                    GOOD TASTE
                  </>
                ),
                copy: (
                  <>
                    Three houses - traditional, contemporary and modern - fully furnished and provisioned down to liquors on the coffee table, are on exhibition in this homemakers&apos; center. The buildings are sponsored not by one exhibitor but by scores of building, decorator and housewares companies. Their aim is to provide visitors with a yardstick of home building and decorating standards. In addition, there is a stripped-down house that enables visitors to look into the walls and see secrets of construction that are ordinarily invisible.
                  </>
                ),
                admission: "Admission: 50 cents.",
                highlights: [
                  {{
                    label: "TRADITIONAL HOUSE.",
                    body: (
                      <>
                        This house of white plastic clapboard, with terrace and swimming pool, is an adaptation of a rambling New England farmhouse. It has three bedrooms and displays such features as a party room with indoor barbecue fireplace and a kitchen with a sewing nook.
                      </>
                    ),
                  }},
                  {{
                    label: "CONTEMPORARY HOUSE.",
                    body: (
                      <>
                        Sliding-glass walls and a living room skylight make this a house of light and space. Furnishings are both antique and contemporary, there is a separate family room, and in the garage are a Finnish steam bath and dressing room. Most of the rooms open onto sun decks, and the grounds have no fewer than three pools, as well as a summer house.
                      </>
                    ),
                  }},
                  {{
                    label: "MODERN HOUSE.",
                    body: (
                      <>
                        Edward Durell Stone&apos;s &quot;inward looking&quot; house was designed for the suburban lot, with the house enclosing the grounds to ensure privacy. A patio is in each corner, and a garden is in the center under a glass dome. The 36-foot-long living room is hung with modern American paintings on loan from museums, galleries and artists.
                      </>
                    ),
                  }},
                  {{
                    label: "HIDDEN ASSETS.",
                    body: (
                      <>
                        The innards of a house, such as wiring, plumbing and heating systems that normally stay out of sight, are on view in the open-wall structure.
                      </>
                    ),
                  }},
                ],
              }}}}
              guide1965={{{{
                cover: {{ src: "/images/hougt01/guide1965.jpg", width: 136, height: 216 }},
                logo: {{
                  src: "/images/hougt01/hougotlogo.gif",
                  width: 144,
                  height: 61,
                  alt: "",
                }},
                name: "HOUSE OF GOOD TASTE",
                nameFace: "arial",
                summary: (
                  <>
                    Three fully furnished houses -- traditional, contemporary and modern -- display the latest in comfortable living.
                  </>
                ),
                copy: (
                  <>
                    Sponsored by scores of building, decorating and housewares companies, the houses are designed to serve as a yardstick of construction and decorating standards. A separate exhibit reveals details of construction ordinarily unseen.
                  </>
                ),
                highlights: [
                  {{
                    label: "TRADITIONAL HOUSE.",
                    labelFace: "arial",
                    body: (
                      <>
                        This up-to-date version of a New England farmhouse is faced with white plastic clapboard and features a sewing nook, a fully equipped nursery, a pool and an indoor barbecue.
                      </>
                    ),
                  }},
                  {{
                    label: "CONTEMPORARY HOUSE.",
                    labelFace: "arial",
                    body: (
                      <>
                        Reflecting pools, sliding glass walls and a living-room skylight create a feeling of spaciousness. The decor is inspired by Asian designs.
                      </>
                    ),
                  }},
                  {{
                    label: "MODERN HOUSE.",
                    labelFace: "arial",
                    body: (
                      <>
                        Privacy is the theme of this &quot;inward looking&quot; house built around four enclosed patios. Its central core is an indoor garden under a big glass dome.
                      </>
                    ),
                  }},
                  {{
                    label: "RESTAURANT.",
                    labelFace: "arial",
                    body: (
                      <>
                        Steak is the specialty of Jim Downey&apos;s restaurant. A sidewalk cafe&apos; serves light foods and beverages.
                      </>
                    ),
                  }},
                ],
                admission: "Admission: adults, 50 cents; children under 12, free.",
              }}}}
              map={{{{
                cover: {{ src: "/images/hougt01/souvenir-map.jpg", width: 110, height: 216 }},
                areaMap: {{
                  src: "/images/hougt01/indsmlmap.gif",
                  width: 60,
                  height: 54,
                  alt: "Industrial area map",
                }},
                locateHref: "/hougtmap",
                subjectNoun: "exhibit",
              }}}}
            />
          );
        }}
        '''
    ).replace("HERO", HERO),
)

# hougt02, 03, 04, 05, map — written in separate invocations below
print("gen hougt01 done")
