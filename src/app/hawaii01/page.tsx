import type { Metadata } from "next";
import { HawaiiNavChrome } from "@/components/HawaiiNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Hawaii — nywf64.com",
  description:
    "Hawaii pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hawaii guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy hawaii01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Legacy wording (e.g. canoe rides “adults $100”) preserved.
 * Locate It → /hawaiimap (Amusement / Lake Area).
 */
export default function Hawaii01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Hawaii"
      titleId="hawaii01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/hawaiioverview/hero-banner.jpg",
        alt: "Hawaii at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HawaiiNavChrome />}
      previousHref="/hawaiioverview"
      nextHref="/hawaii02"
      guide1964={{
        cover: {
          src: "/images/hawaii01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/hawaii01/hawaiilogo64.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: "HAWAII",
        copy: (
          <>
            Drum, guitar and ukulele music sets hula skirts swishing in the
            &quot;Spirit of Aloha&quot; exhibit. The Aumakua Tower, 80 feet high,
            with a ring of flaming torches at the 55-foot level, forms the
            gateway to a complex of structures: the Aloha Theme Pavilion, a
            Tourism and Industrial Exhibits building, the Five Volcanos
            Restaurant, an arcade of shops, an ancient village and the enclosed
            Aloha Theater. The area is landscaped with coconut and hala trees,
            orchids and other tropical plants.
          </>
        ),
        admission: [
          "Admission: to the exhibit area, 25 cents.  To the Aloha Theater shows:  adults $2.00; children 50 cents; reserved seats $2.50.  Canoe rides:  adults $100; children 50 cents.",
          "Hours:  10 a.m. to 2 a.m.",
        ],
        highlights: [
          {
            label: "CULTURE OF THE ISLANDS.",
            body: (
              <>
                The exhibition hall in the hexagonal Aloha Theme Pavilion has
                numerous displays of the islands&apos; history and culture,
                including carved reproductions of the old Polynesian gods,
                thrones of the monarchy and views of the state today. One
                exhibit depicts the influx over the centuries of peoples from
                many Pacific lands.
              </>
            ),
          },
          {
            label: "HALL OF DREAMS.",
            body: (
              <>
                In the tourism and Industrial Exhibits, motion pictures focus on
                the wonders of Hawaii. Elsewhere, wall maps depict travel routes
                to the islands, and a tourist office stands ready to plan the
                trip.
              </>
            ),
          },
          {
            label: "THE CHARM OF OLD HAWAII.",
            body: (
              <>
                In the Ancient Hawaiian Village, craftsmen demonstrate native
                skills: how to construct a grass hut, shape stones into tools,
                and weave blossoms, seeds and strands into leis without thread
                or needles. Beach boys offer rides in outrigger canoes.
              </>
            ),
          },
          {
            label: "HAWAIIAN EXTRAVAGANZA.",
            body: (
              <>
                A one-hour show featuring entertainers from the islands is
                presented six times daily in the Aloha Theater, built on a
                man-made peninsula jutting into Meadow Lake.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                The Five Volcanoes Restaurant, symbolizing the volcanic origin
                of the Hawaiian Islands, has an indoor dining room, a Lava Pit
                Bar and an outdoor area seating 500, where there are daily
                buffet luncheons. Nightly, a three-hour, 12-course <em>luau</em>{" "}
                is held outdoors, complete with traditional dishes, rituals and
                dances. For snacks, the Sandwich Isle Bar offers fruits, nuts
                and other dishes from the islands.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/hawaii01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/hawaii01/hawaiilogo.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: "HAWAII",
        summary: (
          <>
            The island state comes to life in song and dance, movies, outrigger
            canoe rides, bright flowers and exotic foods.
          </>
        ),
        copy: (
          <>
            Costumed Hawaiian girls greet Fairgoers with leis and introduce them
            to displays of the history and culture of this melting pot of the
            Pacific. Hawaiian artisans work on handicrafts in a reproduction of
            an old-fashioned island village. The state&apos;s tourist
            attractions and industries are on exhibit, and its products are sold
            in shops.
          </>
        ),
        highlights: [
          {
            label: "ALOHA THEATER.",
            body: (
              <>
                Color movies of the islands are shown daily between 10 a.m. and
                2 p.m., and a 20-minute state show of Hawaiian songs and dances
                is presented twice an hour between 2 p.m. and 10 p.m.
              </>
            ),
          },
          {
            label: "CANOE RIDES.",
            body: (
              <>
                Beach boys take fairgoers for trips on Meadow Lake in replicas
                of ancient outrigger canoes.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                The Five Volcanoes Restaurant has buffet luncheons; at night, a
                three-hour, 12-course <em>luau</em> is held outdoors, complete
                with traditional dishes, rituals and dances. The Lava Pit Bar
                serves exotic island drinks.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/hawaii01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/hawaii01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/hawaiimap",
      }}
    />
  );
}
