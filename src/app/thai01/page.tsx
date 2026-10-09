import type { Metadata } from "next";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Thailand — nywf64.com",
  description:
    "Thailand pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy thai01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Thai01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Thailand"
      titleId="thai01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/thaioverview/hero-banner.jpg",
        alt: "Thailand pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ThaiNavChrome />}
      previousHref="/thaioverview"
      nextHref="/thai02"
      guide1964={{
        cover: {
          src: "/images/thai01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/thai01/thailogo64.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "THAILAND",
        copy: (
          <>
            The main building, patterned after an ancient Buddhist shrine, has a
            gilded, tiered and spired roof rising nearly 80 feet. The building was
            inspired by a shrine north of Bangkok where a sacred footprint of the
            Buddha is preserved. The ornate roof was built in Thailand, shipped to
            the U.S. piece by piece and assembled on the fairgrounds. In this
            building and an adjoining wing, exhibits reflect the arts, crafts and
            traditions of ancient Siam and modern-day Thailand. In another wing
            are a gift shop and restaurant offering national products and dishes.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "RELICS OF THE PAST.",
            body: (
              <>
                Inside the shrine, traditional Thailand is represented by
                exquisite statuary, displays of classic costumes and models of
                such things as a wooden Thai house, a cart drawn by water buffalo,
                and ancient warriors wearing armor and bearing weapons of the
                past.
              </>
            ),
          },
          {
            label: "TODAY'S THAILAND.",
            body: (
              <>
                The exhibit wing shows aspects of the modern nation. Here are
                displays of Thai jewelry, silks, spoons with buffalo-horn handles,
                and samples of minerals, forest products and rice. Travel
                information is available at a tourist booth.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                In indoor and outdoor dining areas, an elaborate eight-course Thai
                buffet offers a wide assortment of hors d&apos;oeuvres, rice and
                such entrees as <em>meekrob</em> (sweet and sour crisp noodles
                with shrimp and chicken) and <em>musaman</em> (curried meat
                served with fresh pickles). The gift shop nearby sells a wide
                range of items, including handmade jewelry, dolls and custom-made
                silk apparel for adults and children. Also on sale is a cookbook
                with recipes for dishes served in the restaurant.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/thai01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/thai01/thailogo.gif",
          width: 144,
          height: 104,
          alt: "",
        },
        name: "THAILAND",
        summary: (
          <>
            Inspired by a Buddhist shrine, this ornate pavilion houses the ancient
            treasures and modern products of an exotic land.
          </>
        ),
        copy: (
          <>
            The main building&apos;s roof -- gilded, tiered and spired -- was
            fashioned in Thailand and shipped to the U.S. piece by piece.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "RELICS OF THE PAST.",
            body: (
              <>
                Exquisite statuary, classic costumes, theatrical masks, musical
                instruments and models of warriors in full panoply illustrate a
                rich heritage.
              </>
            ),
          },
          {
            label: "THAILAND TODAY.",
            body: (
              <>
                Many modern products -- jewelry, silks, minerals, forest products
                and rice -- are displayed in the exhibit wing.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                Among the Thai delicacies offered are <em>musaman</em> (curried
                meat with pickles) and <em>mee krob</em> (sweet and sour noodles
                with shrimp and chicken). A gift shop sells jewelry, dolls, silks
                and cookbooks.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/thai01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/thai01/intsmlmap.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/thaimap",
      }}
    />
  );
}
