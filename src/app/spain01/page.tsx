import type { Metadata } from "next";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Spain — nywf64.com",
  description:
    "Spain Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy spain01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Spain01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Spain Pavilion"
      titleId="spain01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/spainoverview/hero-banner.jpg",
        alt: "Spain Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<SpainNavChrome />}
      previousHref="/spainoverview"
      nextHref="/spain02"
      guide1964={{
        cover: {
          src: "/images/spain01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/spain01/logo1964.gif",
          width: 144,
          height: 102,
          alt: "",
        },
        name: "SPAIN",
        copy: (
          <>
            The country today and its role in the discovery, colonization and
            independence of the Americas are portrayed in three attached
            buildings which enclose a rich collection of exhibition halls,
            restaurants and dinner patios. Featured are masterpieces of Spanish
            art, old and new; historical objects and documents; products of
            great Spanish designers and craftsmen; triumphs of the Spanish
            kitchen, and a theater with a constantly changing program of
            concerts, dance groups, film festivals and fashion shows.
          </>
        ),
        admission:
          "Admission: 25 cents to pavilion; art gallery, $1.00; theater prices vary.",
        highlights: [
          {
            label: "THE WELCOME FIGURE.",
            body: (
              <>
                A six-foot statue of Isabel la Catolica, first Queen of a united
                Spain and patron of Columbus, stands in front of the pavilion.
                It was cast in bronze by sculptor Jose Luis Sanchez.
              </>
            ),
          },
          {
            label: "THE GREAT IRON GATE.",
            body: (
              <>
                A sliding gate, 27 feet long and 5 feet high, guarding the
                entrance to the pavilion, provides a dramatic, abstract example
                by sculptor Amadeo Gabino of Spain&apos;s celebrated wrought-iron
                work.
              </>
            ),
          },
          {
            label: "HISTORICAL HALL.",
            body: (
              <>
                Giant, semi-abstract murals by Joaquin Vaquero Turcios,
                depicting Spanish faith, culture and the evangelization of the
                Americas, decorate the walls of this room in the pavilion.
                Documents and objects relating to Columbus&apos; voyages to the
                New World are on exhibit.
              </>
            ),
          },
          {
            label: "THE THEATER.",
            body: (
              <>
                A Fair-long program of folk dancing, ballet, films, flamenco
                dancers and singers has been arranged.
              </>
            ),
          },
          {
            label: "THE SPAIN OF LEGEND.",
            body: (
              <>
                Outside Historical Hall hangs <em>la Tizona</em>, the battle
                sword of Rodrigo Diaz de Vivar, the 11th Century Christian
                warrior known as <em>El Cid</em>.
              </>
            ),
          },
          {
            label: "A NATION'S ART TREASURES.",
            body: (
              <>
                Priceless works of art, many never before shown outside of
                Spain, are on exhibit in three sections of the pavilion.
              </>
            ),
          },
          {
            label: "Museum of Masterpieces",
            body: (
              <>
                Paintings by four immortal artists are on display: El Greco
                (represented by <em>Knight with Hand on Christ</em>); Goya (
                <em>La Maja Vestida, La Maja Desnuda</em>); Velazques (
                <em>Pablo de Valladolid</em>); Zurbaran (<em>Santa Dorotea</em>
                ).
              </>
            ),
          },
          {
            label: "Gallery of Contemporary Art.",
            body: (
              <>
                Each month a new exhibit of outstanding contemporary Spanish art
                is held in the gallery. Painting by such great figures as
                Picasso, Miro, Dali and Gris are on permanent display.
              </>
            ),
          },
          {
            label: "Hall of Sacred Art",
            body: (
              <>
                Modern and traditional religious art and objects show the
                unbroken course of Spain&apos;s Catholic heritage. One wall is a
                stained-glass window, 45 feet wide by 6 feet high, created by
                Manuel Molezun.
              </>
            ),
          },
          {
            label: "SPAIN IN CLOSEUP.",
            body: (
              <>
                Upstairs in the pavilion is a detailed look at the nation today.
                Displays cover a variety of products both handcrafted and
                manufactured, including women&apos;s high fashions, hunting and
                fishing gear, children&apos;s toys and a model home. Seven
                kiosks behind the pavilion sell delicacies and souvenirs.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            body: (
              <>
                There are three. One is a <em>marisqueria</em>, or outdoor
                seafood bar. The Granada serves traditional Spanish food in an
                informal setting. The Toledo is a de luxe restaurant featuring
                international cuisine; Both the Toledo and the Granada are under
                the direction of the renowned Cortes of Madrid&apos;s Jockey and
                Club 31 restaurants.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/spain01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/spain01/logo1965.gif",
          width: 144,
          height: 102,
          alt: "",
        },
        name: "SPAIN",
        nameFace: "arial",
        summary: (
          <>
            In a striking modern pavilion, the atmosphere of old Spain forms a
            setting for great art, fine dining and entertainment.
          </>
        ),
        copy: (
          <>
            Spain&apos;s role in the early history of the Americas and its
            continuing influence on art and design are reflected in a building
            designed by architect Javier Carvajal. Exhibit halls are
            interspersed with patios and restaurants. Fashion shows, concerts
            and Spanish cuisine add to the Iberian atmosphere.
          </>
        ),
        admission:
          "Admission: 25 cents to the pavilion; 50 cents to the art gallery; theater prices vary depending on programs.",
        highlights: [
          {
            label: "WELCOMING QUEEN.",
            labelFace: "arial",
            body: (
              <>
                A statue of Isabel la Catolica, first Queen of a united Spain
                and patron of Columbus, stands in front of the pavilion. The
                six-foot bronze figure is by sculptor Jose&apos; Luis Sanchez.
              </>
            ),
          },
          {
            label: "IRON WORK.",
            labelFace: "arial",
            body: (
              <>
                At the entrance an immense wrought-iron sliding gate by Amadeo
                Gabino dramatizes in abstract form an ancient Spanish art.
              </>
            ),
          },
          {
            label: "HISTORIC HALL.",
            labelFace: "arial",
            body: (
              <>
                Giant murals by Joaquin Vaquero Turcious depict Spanish faith,
                culture and the evangelization of the Americas. Documents
                relating to Columbus&apos; voyages are displayed.
              </>
            ),
          },
          {
            label: "THEATER.",
            labelFace: "arial",
            body: (
              <>
                Changing shows include flamenco dancing, ballet, guitar recitals
                and documentary films.
              </>
            ),
          },
          {
            label: "ART TREASURES.",
            labelFace: "arial",
            body: (
              <>
                Among the items some of which have never before been shown
                abroad, are priceless Romanesque treasurers and works by the
                great contemporary Spanish artists Picasso, Miro&apos; and Dali,
                as well as paintings by young Spaniards. Sacred works of art
                include a 45-foot-long stained-glass window by Manuel Molezun.
              </>
            ),
          },
          {
            label: "SPAIN AT WORK.",
            labelFace: "arial",
            body: (
              <>
                Clothes, home furnishings, toys and fishing gear are among the
                displays of contemporary Spanish products.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            labelFace: "arial",
            body: (
              <>
                A walled garden cafe and bar offers seafood and light
                refreshment. The larger Granada restaurant serves traditional
                Spanish food. The de luxe Toledo features continental cuisine.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/spain01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/spain01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International Area map",
        },
        locateHref: "/spainmap",
      }}
    />
  );
}
