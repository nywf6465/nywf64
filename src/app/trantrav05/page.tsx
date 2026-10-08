import type { Metadata } from "next";
import Link from "next/link";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";
import photoStyles from "@/styles/photographsPage.module.css";

export const metadata: Metadata = {
  title: "Photograph Album II — Transportation & Travel — nywf64.com",
  description:
    "Transportation & Travel Pavilion photograph album II — Bill Cotter collection views from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const cotter = <>SOURCE: © Copyright Bill Cotter Collection</>;

/**
 * Transportation & Travel photograph album II — “photographs” standard.
 * Body from legacy trantrav05.html (Photograph Scrap Book banner omitted).
 */
export default function Trantrav05Page() {
  return (
    <PhotographsPage
      heroLabel="Transportation & Travel"
      titleId="trantrav05-title"
      title="Photograph Album II"
      hero={{
        src: "/images/trantravoverview/hero-banner.jpg",
        alt: "Transportation & Travel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TrantravNavChrome />}
      previousHref="/trantrav04"
      overviewHref="/trantravoverview"
      nextHref="/trantrav06"
      sections={[
        {
          intro: (
            <p>
              <span className={photoStyles.trayIntroName}>Bill Cotter</span>
              , World&apos;s Fair enthusiast, has been collecting images of the
              1964/1965 New York World&apos;s Fair for many years. He shares with
              us here some views of{" "}
              <span className={photoStyles.trayIntroEm}>T&amp;T</span>. If you
              would like to see more photos from Bill&apos;s fabulous collection
              of World&apos;s Fair images, visit his website at{" "}
              <Link href="http://www.worldsfairphotos.com/" target="_blank">
                WorldsFairPhotos.com
              </Link>
              .
            </p>
          ),
          photos: [
            {
              image: {
                src: "/images/trantrav05/tratra65.jpg",
                width: 400,
                height: 269,
                alt: "Building T&T",
              },
              title: <strong>Building T&amp;T</strong>,
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra64.jpg",
                width: 400,
                height: 274,
                alt: "Building T&T - work continues on the Moon Dome",
              },
              title: (
                <strong>
                  Building T&amp;T - work continues on the Moon Dome
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra63.jpg",
                width: 400,
                height: 274,
                alt: "T&T - United Air Lines exhibit behind the facade",
              },
              title: (
                <strong>
                  T&amp;T - note the United Air Lines exhibit behind the facade
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra89.jpg",
                width: 270,
                height: 400,
                alt: "Interior view of the T&T Pavilion",
              },
              title: (
                <strong>
                  Interior view of the T&amp;T Pavilion - United Air Lines
                  Jetarama theater is on the right. Sea Hunt attraction is
                  ahead.
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra90.jpg",
                width: 275,
                height: 400,
                alt: "Leslie Special from The Great Race",
              },
              title: (
                <strong>
                  Leslie Special - auto featured in the film{" "}
                  <em>The Great Race</em>.
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra66.jpg",
                width: 400,
                height: 278,
                alt: "Nighttime view of the Transportation & Travel Pavilion",
              },
              title: (
                <strong>
                  Beautiful nighttime view of the Transportation &amp; Travel
                  Pavilion
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra67.jpg",
                width: 400,
                height: 264,
                alt: "Colorful illuminations at T&T",
              },
              title: (
                <strong>
                  Colorful illuminations - TWA exhibit can be seen behind the
                  facade
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra68.jpg",
                width: 400,
                height: 270,
                alt: "Demise of T&T in spring 1966",
              },
              title: (
                <strong>
                  Demise of T&amp;T. Sprint of 1966 and the T&amp;T Pavilion is
                  one of the few pavilions still standing on the Flushing Meadows
                  site. Like other multi-exhibitor pavilions, such as the Better
                  Living Center and the Pavilion of American Interiors, the
                  T&amp;T Pavilion was bankrupt and the World&apos;s Fair
                  Corporation would have to foot the bill for its demolition.
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra69.jpg",
                width: 400,
                height: 270,
                alt: "T&T site vacant lot June 1967",
              },
              title: (
                <strong>
                  By June of 1967 the T&amp;T site is a vacant lot.
                </strong>
              ),
              source: cotter,
            },
            {
              image: {
                src: "/images/trantrav05/tratra91.jpg",
                width: 400,
                height: 259,
                alt: "Demolition of Transportation and Travel Pavilion June 1966",
              },
              title: (
                <strong>
                  &quot;Silhouetted against the lunar horizon, men get a closeup
                  look at the surface of the moon under a warm sun. Befoe long,
                  they will know the mountains and craters of our nearest
                  celestial neighbor as well as any World&apos;s Fair exhibit
                  they have demolished. After all, they&apos;re tearing down the
                  Transportation and Travel Pavilion, where moon model, one of the
                  last to go, has stood for two years.&quot; A sub caption reads,
                  &quot;One of the last of the World&apos;s Fair exhibits presents
                  a queer picture as workmen start to demolish the building known
                  to Fairgoers as &apos;To the Moon and Beyond.&apos;&quot; The
                  photo is dated June 22, 1966.
                </strong>
              ),
              source: (
                <>SOURCE: Presented courtesy Bill Cotter Collection</>
              ),
            },
          ],
        },
      ]}
    />
  );
}
