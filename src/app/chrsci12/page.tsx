import type { Metadata } from "next";
import Image from "next/image";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./chrsci12.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Article: Christian Scientists swap one landmark for another — Christian Science — nywf64.com",
  description:
    "News article on relocating the Christian Science Pavilion to Poway — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science — Article: Christian Scientists swap one landmark for another.
 * Body from legacy chrsci12.html (custom newsclipping page).
 * Legacy wording (ben, anouncement, ediface, etc.) preserved.
 */
export default function Chrsci12Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Christian Science">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/chrscioverview/hero-banner.jpg"
            alt="Christian Science at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <ChrsciNavChrome />

      <article className={styles.article} aria-labelledby="chrsci12-title">
        <header className={styles.titleBar}>
          <h1 id="chrsci12-title" className={styles.titleBarMain}>
            Article:{" "}
            <em>Christian Scientists swap one landmark for another</em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.leadFigure}>
            <Image
              src="/images/chrsci12/poway-church.jpg"
              alt="South view of the relocated Christian Science Church showing Sunday school annex"
              width={600}
              height={329}
              className={styles.leadImg}
              unoptimized
            />
            <figcaption className={styles.leadCaption}>
              FIRST SERVICES in new Christian Science Church are scheduled for
              Sunday, Aug. 7. This is south view of building showing Sunday
              school annex. Structure was dismantled in New York, transported to
              Poway via the Panama Canal, and reassembled by contractor Ralph
              Nelson. --Chieftain Photo.
            </figcaption>
          </figure>

          <h2 className={styles.storyTitle}>
            Christian Scientists swap one landmark for another
          </h2>
          <p className={styles.byline}>BY: Mary Shepardson</p>

          <div className={styles.body}>
            <p>
              When members of Poway&apos;s First Church of Christ Scientist hold
              their services in their magnificent building in Valle Verde they
              will mark the end of an era in their church&apos;s history..
            </p>
            <p>
              The first service in the new structure has tentatively ben
              scheduled for Sunday, Aug. 7. Only the power hookup delays official
              anouncement of the date.
            </p>
            <p>
              Leaving behind their old church, a Poway landmark, they are moving
              into the structure which until last summer served as the Christian
              Science Pavilion at the 1964-65 World&apos;s Fair in New York.
              Through the efforts of Ralph Nelson, local contractor, the
              structure was secured for the Poway church and is now nestled in a
              valley off Pomerado Road on a parcel purchased by the Scientists
              two years ago.
            </p>
            <p>
              Dismantled in New York, the building was shipped to Poway via the
              Panama Canal by Sea-Land Service in four large truck trailers. The
              50-ton load was made up of thousands of pieces. The dome of
              translucent glass, focal point of the ediface, was made up of 1000
              pieces.
            </p>
            <p>
              Nelson presided over the complicated task of reassembling the
              structure -- a feat roughly comparable to the reconstruction of the
              ancient stone temple above the Aswan Dam in Egypt.
            </p>
            <p className={styles.separator}>* * *</p>
            <p>
              COMPLETED right on schedule, the new Church is an impressive sight
              The floorplan of the main structure is in the form of a 7-pointed
              star. The number seven thus represented has a special significance
              to Christian Scientists as it represents the seven synonyms for
              God: Principle, Mind, Soul, Spirit, Life, Truth and Love.
            </p>
            <p>
              Perhaps more striking from within than from without, the building
              has white interior walls and a carpet of brilliant blue which gives
              no hint of the fact it was trod on by millions of feet during its
              2-year stint at the fair. Carpeting in the Sunday school wing is
              deep red.
            </p>
            <p>
              Seating for 144 is provided beneath the domed ceiling with capacity
              for expansion to 250 in the points of the star. Space has also been
              set aside for a board room, reader&apos;s rooms and a music room as
              well as for Sunday school and child care.
            </p>
            <p>The 6000-square foot structure will be totally air-conditioned.</p>
            <p className={styles.separator}>* * *</p>
            <p>
              The building the church has occupied up to this point is one that
              has been steeped in Poway history. Constructed during the 1880s,
              the white frame building stood a short distance from its present
              Midland Road location until 30 years ago.
            </p>
            <p>
              It was purchased for the church in 1936, a few years after the
              establishment of the Christian Science Society in Poway. Before its
              conversion the building had served as a lodge hall and informatl
              town hall for Powegians.
            </p>
            <p>
              Last summer when the decision to move had been made and the plans
              completed to move the pavilion to Poway, the old church was sold to
              Poway Properties, developers of Old Poway. The new owners plan to
              maintain the church as part of the western setting of their
              development across the street.
            </p>
            <p>
              Church members feel their new building will be as memorable a
              landmark as the old. Plans for the future include floodlighting the
              buiding at night and possibly construction of a moat in front as
              was done at the New York location.
            </p>
          </div>

          <p className={styles.source}>
            SOURCE: Newsclipping, Newspaper Unknown (probably Poway News
            Chieftan). Date unknown (probably late July 1966)
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/chrsci11"
        explicitPrevious
        overviewHref="/chrscioverview"
        nextHref="/chrsci13"
      />
    </>
  );
}
