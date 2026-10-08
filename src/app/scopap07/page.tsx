import type { Metadata } from "next";
import Image from "next/image";
import { ScopapNavChrome } from "@/components/ScopapNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./scopap07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Scott Enchanted Forest at the World's Fair — Scott Paper — nywf64.com",
  description:
    "Press release on the design of Scott Paper’s Enchanted Forest pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Scott Paper — The Scott Enchanted Forest at the World's Fair.
 * Body from legacy scopap07.html.
 */
export default function Scopap07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Scott Paper">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/scopapoverview/hero-banner.jpg"
            alt="Scott Paper at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ScopapNavChrome />

      <article className={styles.article} aria-labelledby="scopap07-title">
        <header className={styles.titleBar}>
          <h1 id="scopap07-title" className={styles.titleBarMain}>
            The <em>Scott Enchanted Forest</em> at the World&apos;s Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.intro}>
            A lengthy and technical press release reveals details about the
            planners&apos; exhibit design philosophy.
          </p>

          <div className={styles.body}>
            <p>
              The Scott exhibit is located on the Pool of Industry -- the
              prestige &quot;dress circle&quot; of the industrial section of the
              Fair. Walking up the central mall from the Unisphere symbol, a
              visitor will see first the massive building of the Bell Telephone
              Company, located at the apex of the circle. To the right, the eye
              catches the General Electric Pavilion, and then, a little higher up
              and about half-way around, a fifty-foot tower, made of two
              intersecting cones of glistening gold cables supported by huge
              stained wooden beams, arrests the attention.
            </p>

            <div className={`${styles.split} ${styles.splitWide}`}>
              <p>
                This is Scott&apos;s entrance tower -- a provocative, geometric
                sculpture suggesting trees, growth and progress. Reaching up from
                a wooden platform base suspended over a running pool, the tower
                grows out of a beautifully landscaped site which features
                evergreen and deciduous trees of 10, 15, 20 feet in height. The
                atmosphere of the exhibit area is one of park-like tranquility; a
                cool place to rest and relax in uncommercial surroundings.
              </p>
              <Image
                src="/images/scopap07/scott01.jpg"
                alt="Artist's Pavilion Rendering"
                width={193}
                height={200}
                unoptimized
              />
            </div>

            <div className={styles.split}>
              <Image
                src="/images/scopap07/scott04.jpg"
                alt="Scott Pavilions"
                width={300}
                height={185}
                unoptimized
              />
              <p>
                Back from the tower, on the left, the visitor sees a low, wide,
                wooden structure of California &quot;mountain lodge&quot;
                styling, characterized by a low sloping roof which overhangs the
                stained-wood walls by several feet. This building houses the
                exhibit proper entitled &quot;The Scott Enchanted Forest&quot;.
              </p>
            </div>

            <div className={`${styles.split} ${styles.splitReverse}`}>
              <p>
                Looking straight ahead through the tower cables, the visitor sees
                a smaller structure of similar architectural style, but raised 14
                feet off the ground. This is the pavilion office, and its
                elevation permits the aspect of the visitor to continue towards
                the paths and landscaped areas beyond. To the rear of the exhibit
                area, a third building of the same design houses comfortable
                restroom facilities.
              </p>
              <Image
                src="/images/scopap07/scott05.jpg"
                alt="Scott Pavilion Aerial"
                width={200}
                height={175}
                unoptimized
              />
            </div>

            <p>
              The visitor to the main exhibit building enters a wooded setting of
              trees, plants, a flowing stream -- a forest within a forest. The
              surroundings are extended in breadth and dimension through the use
              of a perfectly blended color photo-transparency in the background.
            </p>
            <p>
              A voice invites visitors to explore two great mysteries in
              Scott&apos;s business -- first, the mystery of the enchanted
              forest, where a thousand magic ingredients are waiting for
              scientists to unlock them; and second, the mystery of the Goddess of
              the Market Place, the American housewife; whose whim is
              Scott&apos;s law, whose favor it courts. Then, a written message
              appears, unrolling between two trees on an invisible glass
              teleprompter screen. This message sets the theme for the exhibit,
              relates trees and women, and tells why Scott cares about both.
            </p>
            <p>
              Proceeding on, the visitor becomes aware of a tinted wall mural on
              the right, sweeping ahead and blending into another woods-color
              transparency which melts into foliage.
            </p>
            <p>
              One of the unusual effects created for the exhibit will first be
              seen in this entry area -- that of a metallic representation of
              leaves which serves as the ceiling throughout the exhibit building.
              These leaves will be vertically placed rectangles of metal annealed
              with white paint and arranged at slightly varying heights to create
              a somewhat irregular effect. They will be illuminated by hidden
              lights which will produce rich oranges and greens in the realistic
              forest section, and brighter, gayer colors in the more modern
              section beyond where bolder product display techniques are
              employed. All tree effects, realistic as well as abstract, will rise
              from the floor to the ceiling in columnar form.
            </p>

            <div className={`${styles.split} ${styles.splitReverse}`}>
              <Image
                src="/images/scopap07/scott06.jpg"
                alt="Running Stream inside Scott"
                width={300}
                height={200}
                unoptimized
              />
              <p>
                Further along the path, the visitor encounters a waterfall
                cascading out of a natural setting and running into a stream
                which cuts through the exhibit and out of the building. In this
                continuation of the forest and foliage, a wooden arched bridge
                carries the walkway across the stream and on into the exhibit.
              </p>
            </div>

            <p>
              Before crossing the bridge, the visitor is attracted by another
              message, on the right this time, briefly recounting the story of
              woodlands operations, their scope as the primary source of raw
              materials. The point will be made that the timber is a crop which
              Scott scientifically manages and harvests, not a resource that is
              cut and lost forever. The theme in this section emphasizes why and
              how natural resources are used, yet protected for future
              generations. The message also explains that along with making top
              quality products for consumers and jobs for thousands of people,
              by-products of good industrial forest management are wildlife,
              water and recreational opportunities.
            </p>
            <p>
              In photo-mural treatment, a kaleidoscope of such woodland
              activities as cutting, harvesting, tree growing and floating the wood
              to the mill by river will be dramatized in black and white action
              photographs set out from the tinted-forest setting behind.
            </p>
            <p>
              Thus lead on by the series of forestry pictures on the right, the
              visitor proceeds across the arched bridge still very much in the
              woodland setting but now attracted by a visual change of pace up
              ahead which leads her from the forest into a more man-made,
              structured world smacking of giant machines, forceful processes
              which transform raw materials into more usable forms.
            </p>
            <p>
              The trees, realistic &apos;till now, are transformed into a more
              stylized design, still retaining their cylindrical shapes, but
              taking on new colors and bark configuration. Man&apos;s magical
              hand is making itself felt on this raw product.
            </p>
            <p>
              Beyond the bridge another message appears telling the story of
              recreational by-products of forest management -- hunting, camping,
              fishing. This will be interwoven with the story of Scott&apos;s use
              of water. Water is the lifeblood of the paper industry&apos;s
              business and millions of dollars are spent to protect it, use it and
              return it to the nation&apos;s streams for re-use.
            </p>

            <div className={styles.split}>
              <p>
                This message then leads directly to the next major visual element
                -- apparently a stack of log ends pointed toward the visitor,
                but providing a series of circular picture frames showing a
                sequence of scenes including a log flow in a river, barking,
                chipping, pulping, bleaching.
              </p>
              <Image
                src="/images/scopap07/scott07.jpg"
                alt="Stack of Logs Picture Frames"
                width={300}
                height={200}
                unoptimized
              />
            </div>

            <p>
              The pictures flash on in series using colors, backlighting and
              projected word descriptions of the processes where appropriate.
            </p>
            <p>
              The visitor will then be diverted to the left, where a spectacular
              cylindrically-shaped exhibit device rotates 360 degrees describing
              pictorially, schematically and verbally the papermaking process
              from headbox to drier section in terms a ten-year-old child can
              understand.
            </p>
            <p>
              The papermaking story is continued into the converting process
              through a series of dramatic color photographs. After about ten feet
              of these photos -- three in number -- another cylindrical exhibit
              technique will picture and explain Scott&apos;s quality control
              concept -- the men who perform the job, testing stations, the
              relationship of this function to consumers.
            </p>
            <p>
              In the corner of the exhibit building, the visitor is next attracted
              by an exhibit location focused solely on women. This is midway in
              the exhibit and at this point Scott salutes the American housewife
              with an entertaining and provocative exhibit which shows her in her
              many roles -- doing dishes, laundry, ironing, harassed by kids,
              chief chef, clean-up detail -- the everyday world of a busy
              housewife. A graphic symbol representative of the Goddess of the
              Market Place is established, and will be utilized throughout the
              rest of the exhibit.
            </p>

            <div className={styles.split}>
              <Image
                src="/images/scopap07/scott08.jpg"
                alt="Scott's Corridor of Products"
                width={300}
                height={200}
                unoptimized
              />
              <p>
                Turning from Scott&apos;s salute to her, the visitor will be
                attracted toward a &quot;corridor of products,&quot; and array of
                exhibits displaying the bright, modern, colorful, convenience
                items which Scott makes especially for her. The mood is
                multi-colored with pinks and pastels, gay packages and products,
                all of which stretch out before her as though at her feet.
              </p>
            </div>

            <p>
              Each of five product exhibits will be unique in its technique and
              general appearance except for the continued use of the cylindrical
              or abstract tree trunk shape and the now familiar &quot;Goddess&quot;
              symbol. Each exhibit will have the similar net effect, however, of
              putting a Scott product or line of products in a service context
              rather than simply showcasing them.
            </p>
            <p>
              At the end of this corridor, on the left, the visitor will proceed
              to a single exhibit representing Scott&apos;s Industrial paper
              products. This exhibit will attempt to convey to male and female
              consumers alike the value and utility of Scott&apos;s products as
              they are found in settings away from the home -- hotels, motels,
              office buildings, schools, hospitals, service stations.
            </p>
            <p>
              As the visitor proceeds, she will be attracted to a spectacular,
              rotating enlargement of a single polyurethane foam cell, apparently
              suspended in space. The cell identifies an imaginative exhibit of
              the widespread utilizations of plastic foam made by Scott.
            </p>
            <p>
              The next attraction, somewhat back to the visitor&apos;s right, will
              be another motion device showing the dozens of end uses of
              Scott&apos;s printing and converting papers.
            </p>
            <p>
              The visitor approaches the end of the exhibit by way of a
              photographic presentation of Scott&apos;s research and development
              activities. This will be a &quot;blue sky&quot; area where the
              visitor&apos;s fancy will be taken in flight into the great future
              of Scott and Scott&apos;s easy-to-use light and airy products.
            </p>
            <p>
              Beyond is the final magic forest area, somewhat darkened. On the
              right, in a sort of phosphorescent glow, will appear a nearly
              full-sized image of the &quot;Goddess&quot; symbol surrounded by
              Scott products. This will glow for a few seconds, then fade away as
              another similar image appears about five feet to the left, again
              encircled by products, but this time, another group. Then still a
              third Goddess image will appear and fade in the enchanted
              forest-product setting. As this visual effect takes place, a voice
              will be heard in a final message of gratitude and an assurance that
              Scott&apos;s efforts will continue to be directed toward her
              convenience and comfort and that the bright future of Scott rests
              upon her faith, her confidence.
            </p>

            <figure className={styles.figureCenter}>
              <Image
                src="/images/scopap07/scott09.jpg"
                alt='The "Goddess" and her Products'
                width={300}
                height={200}
                unoptimized
              />
            </figure>

            <div className={styles.editorBox}>
              <figure className={styles.editorPhoto}>
                <Image
                  src="/images/scopap07/scott10.jpg"
                  alt='"Prestige Dress Circle"'
                  width={400}
                  height={126}
                  unoptimized
                />
                <p className={styles.source}>SOURCE: ROLOC Color Slides</p>
              </figure>
              <p>
                <strong>Editor&apos;s Note:</strong> The term &quot;prestige dress
                circle&quot; mentioned above was not wholly without merit. The
                inner ring around the Pool of Industry included some of the
                nation&apos;s best known companies: DuPont, IBM, The Travelers,
                Bell Telephone and General Electric. Bell is the white wing at the
                top, GE is the dome at 3 o&apos;clock, and just visible between
                them are Scott Paper (closest to GE) and Rheingold.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/scopap06"
        explicitPrevious
        overviewHref="/scopapoverview"
        nextHref="/scopap08"
      />
    </>
  );
}
