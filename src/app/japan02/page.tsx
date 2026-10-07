import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";
import manualStyles from "@/styles/informationManualPage.module.css";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Japan — nywf64.com",
  description:
    "Japan pavilion entries from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Body from legacy japan02.html — JETRO + House of Japan manual sections. */
export default function Japan02Page() {
  return (
    <InformationManualPage
      heroLabel="Japan"
      titleId="japan02-title"
      hero={{
        src: "/images/japanoverview/hero-banner.jpg",
        alt: "Japan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JapanNavChrome />}
      previousHref="/japan01"
      overviewHref="/japanoverview"
      nextHref="/japan03"
      factsLeft={[
        { label: "EXHIBIT", lines: ["Japan External Trade Organization"] },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Kimitaka Murakami, Director",
            "Japan External Trade Organization",
            "KoKusai Kanko building",
            "No. 1 Marunouchi, 1-chome",
            "Chiyoda-ku, Tokyo, Japan",
            "and",
            "Mr. Takeshi Maruo, Executive Director",
            "and",
            "Mr. Jiro Tokuyama, Director of Public",
            " Affairs",
            "393 Fifth Avenue",
            "New York 16, New York",
            "LE 2-7191",
            "and",
            "Mr. Yasushi Murazumi, Vice Consul",
            "Consulate General of Japan",
            "235 East 42nd Street",
            "New York 17, New York",
            "YU 6-1600",
          ],
        },
        { label: "CONTRACT SIGNED", lines: ["August 29, 1962"] },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 23; Lot 13", "International Area"],
        },
        { label: "AREA", lines: ["49,983 sq. ft."] },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Kunio Maekawa",
            "No. 8, Honshiocho Shinjiku-ku",
            "Tokyo, Japan",
            "and",
            "Mr. John Brady",
            "Oppenheimer, Brady and",
            " Lehrecke Assocs.",
            "55 West 42nd Street",
            "New York 36, New York",
            "LO 3-1540",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Robert Mayall",
            "Ruder & Finn, Inc.",
            "130 East 59th Street",
            "New York 22, New York",
            "PL 9-1800",
          ],
        },
        { label: "ADMISSION", lines: ["Free"] },
        { label: "CONTRACTOR", lines: ["Wm. L. Crow Construction Co."] },
      ]}
      primaryFigure={{
        src: "/images/japan02/japan03.jpg",
        width: 600,
        height: 264,
        alt: "Japan pavilion",
        source: "SOURCE: World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              Japan is represented at the Fair in three spectacular buildings
              sponsored by the Japanese government and private enterprise. These
              building occupy an area of more than 87,000 square feet.
            </>
          ),
        },
        {
          body: (
            <>
              (A) <span className={manualStyles.u}>THE FIRST BUILDING</span>: is
              operated by the Japan Trade Organization (JETRO) the official
              representative of the Japanese government. It is a square structure
              with stone walls surrounded by a moat filled with water. The walls
              are of lava rock from Japan delicately carved and joined into a
              unified design of textural beauty, the work of the noted Japanese
              sculptor Masayuki Nagare.
            </>
          ),
        },
        {
          body: (
            <>
              The traditional art of stone sculpture is little known outside
              Japan, and it is hoped that this building will create interest in
              the use of stones for modern architecture in the United States.
            </>
          ),
        },
        {
          body: (
            <>
              Selected products of modern Japanese industries, which exemplify
              the country&apos;s highly advanced technology, are displayed in
              this building. In contrast to such industrial products there will
              also be some old instruments or utensils which were being used by
              Japanese people at the time Commodore Perry visited Japan 110 years
              ago, thus drawing attention of the visitors to the remarkable
              progress Japan has made over the past century.
            </>
          ),
        },
        {
          body: (
            <>
              (B) <span className={manualStyles.u}>SECOND BUILDING</span>: From
              the ramp inside the first building there is an exit leading
              visitors into the second floor of Building No. 2. This building, in
              contrast to the &quot;closed square&quot; plan of the No. 1
              building, has been designed as an &quot;open square&quot; with
              three rectangular wings. The closed and open square themes are
              symbols of the positive and negative or masculine and feminine
              elements in Oriental philosophy, the &quot;yo&quot; and the
              &quot;in&quot;. It is believed that in order to achieve true
              harmony, these opposing elements must be used in combination, the
              one balancing the other.
            </>
          ),
        },
        {
          body: (
            <>
              <span className={manualStyles.u}>Display in the Second Building</span>
              : This two-story building is sponsored by the Japanese
              Exhibitors&apos; Association (JEA) representing more than 20
              leading Japanese industrial firms. A wide variety of Japan&apos;s
              industrial products are shown such as : new type Japanese motor
              cars, watches, motorcycles, sewing machines, electronic products,
              optical equipment, Micro-TV sets, TV and movie cameras, many other
              types of cameras and photographic supplies, textiles, steel
              products, glass products and canned foods.
            </>
          ),
        },
        {
          body: (
            <>
              Of special interest to the public is the concession area on the
              first floor of the second building where some of the products on
              display are on sale along with other attractive Japanese
              commodities.
            </>
          ),
        },
        {
          body: (
            <>
              Another attraction is a special booth sponsored by the renowned
              Ikenobo School of flower arrangement in Kyoto.
            </>
          ),
        },
      ]}
      afterFeatures={
        <>
          <hr className={manualStyles.rule} />
          <div className={manualStyles.facts}>
            <div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>EXHIBIT</p>
                <ul className={manualStyles.factLines}>
                  <li>The House of Japan</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>
                  AUTHORIZED REPRESENTATIVE
                </p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Yoshiji Kanatomi</li>
                  <li>Chairman of the Board</li>
                  <li>Japanese Exhibitors&apos; Association</li>
                  <li>of New York</li>
                  <li>Fuji-TV Building</li>
                  <li>7 Kawada-cho, Shinjiku-ku</li>
                  <li>Tokyo, Japan</li>
                  <li>and</li>
                  <li>Mr. Kiyoshi Makita, Vice President</li>
                  <li>Japanese Exhibitors&apos; Association of</li>
                  <li>New York, Inc.</li>
                  <li>11 West 42 Street, Suite 1142</li>
                  <li>New York 36, New York</li>
                  <li>OX 5-0446</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>FAIR CONTACT</p>
                <ul className={manualStyles.factLines}>
                  <li>Dr. George Bennett</li>
                </ul>
              </div>
            </div>
            <div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>LOCATION</p>
                <ul className={manualStyles.factLines}>
                  <li>Block 23; Lot 33</li>
                  <li>International Area</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>AREA</p>
                <ul className={manualStyles.factLines}>
                  <li>37,103 sq. ft.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ARCHITECTS</p>
                <ul className={manualStyles.factLines}>
                  <li>Professor Kiyoshi Seike</li>
                  <li>Tokyo University of Technology</li>
                  <li>Tokyo, Japan</li>
                  <li>and</li>
                  <li>Mr. Kyoichi Itoh</li>
                  <li>Japanese Exhibitors Association</li>
                  <li>of New York</li>
                  <li>11 West 42 Street, Suite 1142</li>
                  <li>New York 36, New York</li>
                  <li>OX 5-0446</li>
                  <li>and</li>
                  <li>Mr. Randolph Evans</li>
                  <li>Chapman, Evans & Delehanty</li>
                  <li>161 East 42 Street</li>
                  <li>New York 17, New York</li>
                  <li>TN 7-6300</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>CONTRACTOR</p>
                <ul className={manualStyles.factLines}>
                  <li>Mr. Hugh McLaren</li>
                  <li>Vermilya-Brown Company, Inc.</li>
                </ul>
              </div>
              <div className={manualStyles.factBlock}>
                <p className={manualStyles.factLabel}>ADMISSION</p>
                <ul className={manualStyles.factLines}>
                  <li>Free</li>
                </ul>
              </div>
            </div>
          </div>
          <figure className={manualStyles.figure}>
            <Image
              src="/images/japan02/japan04.jpg"
              alt="House of Japan"
              width={600}
              height={218}
              className={manualStyles.figureArt}
              unoptimized
            />
            <figcaption className={manualStyles.figureCaption}>
              <p className={manualStyles.figureSource}>
                SOURCE: World&apos;s Fair Information Manual
              </p>
            </figcaption>
          </figure>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              &quot;The House of Japan&quot;, a three story building with open
              balconies and varying roof lines, has an exciting concept. It
              combines two styles of typical Japanese restaurants with an
              interior stage for colorful native floor shows and also features a
              Japanese bee garden on the roof and an American-type snack bar on
              one of the balconies. Additional outdoor dining facilities are
              offered at tables in the Japanese garden in front of the entrance.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              <span className={manualStyles.u}>Restaurant Facilities</span>: The
              restaurant menus include favorite Japanese dishes such as sukiyaki
              and tempura, as well as many unusual delicacies. The cooks for the
              restaurants have been carefully selected from Japan&apos;s most
              renowned chefs. The restaurant on the first floor level can
              accommodate 300. Moderately priced Japanese meals, both table d&apos;
              hote and a la carte, are served at chairs and tables. There are
              also attractive bar facilities.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              This restaurant is open for Lunch 11:30 to 5:00 p.m. and for Dinner
              5:00 p.m. to 1:30 a.m.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The second floor restaurant facilities are in authentic Japanese
              style where guests sit on straw mats and are served at low tables.
              Rooms may be partitioned off by means of sliding doors to
              accommodate parties of varying sizes. The second floor has a
              capacity of 200, in addition to de luxe bar facilities.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              This restaurant is open for Lunch 12 noon to 5:00 p.m. and for
              Dinner 5:00 p.m. to 1:30 a.m.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              <span className={manualStyles.u}>Imperial Dining Room</span>: A
              private &quot;Imperial Dining Room&quot; with specially designed
              wood work and decoration is another attractive feature of the House
              of Japan. This is reserved for special guests, diplomatic visitors
              to the Fair, special ceremonies and private parties.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Beer Garden: Well known brands of Japanese beer are served on the
              roof garden along with all types of Japanese appetizers.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The beer garden is open from 3:00 p.m. to 9:30 p.m.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              American Type Snack Bar: American type snacks such as hamburgers
              and hot dogs with a Japanese accent, as well as seafood sandwiches,
              are served from a balcony snack bar. Each menu item is priced under
              $1.00.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              The snack bar is open from 9:30 a.m. to 10:00 p.m.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              Outdoor Garden Restaurant: Approximately 40 people can be
              accommodated at the tables in the Japanese garden where outdoor
              barbecue specialties are served in the Genghis Khan style.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              More than 120 ladies have come from Japan to act as hostesses and
              waitresses for the House of Japan. These girls wear kimonos and add
              much to the charm of the picturesque Japanese atmosphere prevailing
              throughout the House of Japan.
            </span>
          </p>
          <p className={manualStyles.feature}>
            <span className={manualStyles.featureBody}>
              In addition to its restaurant and stage show facilities, the House
              of Japan is sponsoring a number of special programs and
              demonstrations such as the art of the tea ceremony, flower
              arrangement, and the making of woodblock prints. Japanese festival
              days are highlighted with special observances. The Olympic Games
              opening in Japan will be will be marked by news flashes and athletic
              competitions and numerous Japanese-American friendship programs will
              be scheduled on specific days.
            </span>
          </p>
        </>
      }
      secondaryFigure={{
        src: "/images/japan02/japan07.jpg",
        width: 600,
        height: 347,
        alt: "Japan",
        bordered: true,
        title: <strong>Japan</strong>,
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>For Those Who Produced the New York World&apos;s Fair 1964-1965</em>
          </>
        ),
      }}
    />
  );
}
