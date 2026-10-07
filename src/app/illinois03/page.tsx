import type { Metadata } from "next";
import { IllinoisNavChrome } from "@/components/IllinoisNavChrome";
import { PostcardPage } from "@/components/PostcardPage";
export const metadata: Metadata = {
  title: "Postcards — Illinois — nywf64.com",
  description:
    "Illinois Pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const exhibitorSet = (
  <span style={{ color: "#1e90ff" }}>Exhibitor Postcard Set</span>
);

const dexterUnknown = [
  "Source: Postcard Made by Dexter Color Illinois, Inc.",
  "Source: Postcard Published by Unknown",
];

/**
 * Illinois postcards — canonical PostcardPage layout.
 * Body from legacy illinois03.html (Adobe references omitted).
 */
export default function Illinois03Page() {
  return (
    <PostcardPage
      heroLabel="Illinois Pavilion"
      titleId="illinois03-title"
      hero={{
        src: "/images/illinoisoverview/hero-banner.jpg",
        alt: "Illinois Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IllinoisNavChrome />}
      previousHref="/illinois02"
      overviewHref="/illinoisoverview"
      nextHref="/illinois04"
      entries={[
        {
          front: {
            src: "/images/illinois03/80864-B.jpg",
            width: 282,
            height: 450,
            alt: "Illinois Land of Lincoln Pavilion postcard 80864-B",
          },
          reverse: {
            src: "/images/illinois03/80864-Breverse.jpg",
            width: 300,
            height: 123,
            alt: "Reverse of postcard 80864-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion (1 of 6)',
            "A. Lincoln on the Prairie",
            exhibitorSet,
            "No. 80864-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/illinois03/80865-B.jpg",
            width: 450,
            height: 281,
            alt: "Illinois Land of Lincoln Pavilion postcard 80865-B",
          },
          reverse: {
            src: "/images/illinois03/80865-Breverse.jpg",
            width: 300,
            height: 133,
            alt: "Reverse of postcard 80865-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion (2 of 6)',
            "Hill-McNamar (McNeill) Store, Replica",
            exhibitorSet,
            "No. 80865-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/illinois03/80866-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois Land of Lincoln Pavilion postcard 80866-B",
          },
          reverse: {
            src: "/images/illinois03/80866-Breverse.jpg",
            width: 300,
            height: 132,
            alt: "Reverse of postcard 80866-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion (3 of 6)',
            "Entrance Courtyard",
            exhibitorSet,
            "No. 80866-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/illinois03/80867-B.jpg",
            width: 450,
            height: 281,
            alt: "Illinois Land of Lincoln Pavilion postcard 80867-B",
          },
          reverse: {
            src: "/images/illinois03/80867-Breverse.jpg",
            width: 300,
            height: 131,
            alt: "Reverse of postcard 80867-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion (4 of 6)',
            "Lincoln on Man's Duty for Mankind",
            exhibitorSet,
            "No. 80867-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/illinois03/80868-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois Land of Lincoln Pavilion postcard 80868-B",
          },
          reverse: {
            src: "/images/illinois03/80868-Breverse.jpg",
            width: 300,
            height: 132,
            alt: "Reverse of postcard 80868-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion (5 of 6)',
            'House of the "House Divided"',
            exhibitorSet,
            "No. 80868-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/illinois03/80869-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois Land of Lincoln Pavilion postcard 80869-B",
          },
          reverse: {
            src: "/images/illinois03/80869-Breverse.jpg",
            width: 300,
            height: 132,
            alt: "Reverse of postcard 80869-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion (6 of 6)',
            'Gutzon Borglum\'s "The Prairie Pres."',
            exhibitorSet,
            "No. 80869-B",
          ],
          sources: dexterUnknown,
        },
        {
          front: {
            src: "/images/illinois03/90618-B.jpg",
            width: 450,
            height: 282,
            alt: "Illinois Land of Lincoln Pavilion postcard 90618-B",
          },
          reverse: {
            src: "/images/illinois03/90618-Breverse.jpg",
            width: 300,
            height: 132,
            alt: "Reverse of postcard 90618-B",
          },
          meta: [
            'Illinois "Land of Lincoln" Pavilion',
            "Exhibitor Postcard",
            "No. 90618-B",
          ],
          sources: dexterUnknown,
        },
      ]}
    />
  );
}
