import type { Metadata } from "next";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Vatican — nywf64.com",
  description:
    "Vatican Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Vatican guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy vatican01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Vatican01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Vatican Pavilion"
      titleId="vatican01-title"
      hero={{
        src: "/images/vaticanoverview/hero-banner.jpg",
        alt: "Vatican Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<VaticanNavChrome />}
      previousHref="/vaticanoverview"
      nextHref="/vatican02"
      guide1964={{
        cover: {
          src: "/images/vatican01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/vatican01/vatlogo64.gif",
          width: 144,
          height: 74,
          alt: "",
        },
        name: "THE VATICAN",
        copy: (
          <>
            The most important work of art at the Fair is on display here.
            Michelangelo&apos;s 465-year-old masterpiece in carved Carrara marble,
            the <em>Pieta</em>, generally held to be one of the finest examples
            of Christian art in any medium. Installed in Old St. Peter&apos;s
            Basilica in 1499, it had never been taken from the Vatican until the
            late Pope John XXIII granted permission for it to be brought to the
            Fair. The pavilion in which it is exhibited is an oval-shaped
            building topped by a cross, with a curving wall extending from the
            entrance. The pavilion and its contents have as their theme,
            &quot;The Church is Christ Living in the World.&quot;
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE MASTERWORK.",
            body: (
              <>
                The <em>Pieta</em> represents the body of Christ in the arms of
                His mother just after He was taken down from the cross. The work,
                six feet long by five feet nine inches high, is shown in a
                setting created by stage designer Jo Mielziner. Spectators are
                carried past it on three moving platforms at different heights.
                There is a walkway for those who wish to view it at their own
                pace.
              </>
            ),
          },
          {
            label: "THE CHURCH'S WORK.",
            body: (
              <>
                Elsewhere in the pavilion slides dealing with religious themes are
                projected on a 10-screen curved wall, each screen contributing its
                own separate images to the theme.
              </>
            ),
          },
          {
            label: "ST. PETER'S CRYPT.",
            body: (
              <>
                In the center of the pavilion is an exact replica of the
                excavation made under St. Peter&apos;s Basilica by archeologists
                in the 1940s and identified as the site venerated since the
                First Century as the Apostle Peter&apos;s burial place.
              </>
            ),
          },
          {
            label: "THE GREAT CEILING.",
            body: (
              <>
                In the final ground floor room are the celebrated LIFE magazine
                transparencies of Michelangelo&apos;s Sistine Chapel ceiling and
                a photo exhibition on Catholic sacramental life. In separate
                kiosks are displays of coins and stamps having a religious
                significance, including the private collection of Francis
                Cardinal Spellman of New York.
              </>
            ),
          },
          {
            label: "THE CHAPEL.",
            body: (
              <>
                The mezzanine floor is a Catholic chapel seating 300 persons.
                Mass is said each morning, and the chapel is open through the
                day. Near the front is a statue of the Good Shepherd that comes
                from the Catacomb Era of the Third Century. It is among the
                earliest existing sculptural representations of Christ.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/vatican01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/vatican01/vatlogo.gif",
          width: 144,
          height: 74,
          alt: "",
        },
        name: "VATICAN",
        summary: (
          <>
            The main exhibit is the Fair&apos;s most important work of art: the
            &quot;Pieta,&quot; Michelangelo&apos;s 466-year-old masterpiece in
            Carrara marble.
          </>
        ),
        copy: (
          <>
            One of Christianity&apos;s best-known sculptures, the Pieta was
            installed in the Vatican in 1499, where it remained until being lent
            to the Fair. The statue is shown in an oval-shaped pavilion topped
            by a cross.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "THE MASTERWORK.",
            body: (
              <>
                The <em>Pieta</em> represents the body of Christ in His
                mother&apos;s arms, just after He was taken from the cross. The
                statue is displayed in a setting by stage designer Jo Mielziner.
                Guest may view it from moving platforms.
              </>
            ),
          },
          {
            label: "TIARA.",
            body: (
              <>
                Also on view is the triple-crowned headdress of Pope Paul VI,
                presented to the United States through Cardinal Spellman.
              </>
            ),
          },
          {
            label: "ST. PETER'S CRYPT.",
            body: (
              <>
                An exact replica of the Apostle Peter&apos;s tomb under St.
                Peter&apos;s Basilica stands in the center of the pavilion.
              </>
            ),
          },
          {
            label: "GREAT CEILING.",
            body: (
              <>
                The LIFE Magazine transparencies of Michelangelo&apos;s Sistine
                Chapel ceiling are shown.
              </>
            ),
          },
          {
            label: "THE CHAPEL.",
            body: (
              <>
                The 350-seat chapel is open all day; occasional Masses are
                offered. The statue of the Good Shepherd displayed there is
                among the earliest sculptures of Christ.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/vatican01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/vatican01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/vaticanmap",
      }}
    />
  );
}
