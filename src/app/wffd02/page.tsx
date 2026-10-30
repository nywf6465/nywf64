import type { Metadata } from "next";
import Image from "next/image";
import { WffdHero } from "@/components/WffdHero";
import { WffdNavChrome } from "@/components/WffdNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../wffdPage.module.css";

export const metadata: Metadata = {
  title: "World’s Fair Fire Department — nywf64.com",
  description:
    "The World’s Fair Fire Department from Gary Urbanowicz’s Badges of the Bravest — badges, helmets, patches, and apparatus, on nywf64.com.",
};

/**
 * WFFD feature page 2 (legacy wffd03.html remapped to /wffd02).
 * Stack: hero → Wffd nav (Page 3) → navy title bar → article → nav2
 * PREVIOUS → /wffd01; NEXT → /wffd03
 */
export default function Wffd02Page() {
  return (
    <>
      <WffdHero />

      <WffdNavChrome />

      <article className={styles.article} aria-labelledby="wffd02-title">
        <header className={styles.titleBar}>
          <h1 id="wffd02-title" className={styles.titleBarMain}>
            Page 3
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.essayLead}>World&apos;s Fair Fire Department</p>
          <p className={styles.essayFrom}>
            from <strong><em>Badges of the Bravest</em></strong>
            <br />
            by <strong>Gary Urbanowicz</strong>
          </p>

          <div className={styles.essayBody}>
            <p>
              How do you provide fire protection for 646 acres of 200
              &quot;temporary&quot; structures with 30,000 full-time employees
              and an expected 250,000 visitors during each 14-hour day? The 1964
              World&apos;s Fair Corporation engaged Pinkerton&apos;s International
              Detective Agency to provide a number of essential services at the
              Fair, including fire protection. To raise a cadre of qualified and
              experienced fire fighters for this temporary engagement,
              Pinkerton&apos;s turned to the retirees of the Fire Department of
              the City of New York (FDNY). In all, 100 seasoned men were hired
              and a full-fledged World&apos;s Fair Fire Department was formed.
            </p>

            <figure className={styles.inlineFigure}>
              <Image
                src="/images/wffd02/wffd06.jpg"
                alt="Fire company members"
                width={300}
                height={290}
                className={styles.inlinePhoto}
                unoptimized
              />
              <figcaption className={styles.inlineCaption}>
                Members of one of the Fair&apos;s three Fire Companies
              </figcaption>
            </figure>

            <p>
              The fire department was commanded by former FDNY Assistant Chief
              Thomas P. O&apos;Brien. Chief O&apos;Brien also had one Assistant
              Chief, retired FDNY Battalion Chief James E. Gowdy. A Manual was
              written for the department that resembled that of any other
              organized fire department and was clearly modeled after that of
              the FDNY, though much abbreviated.
            </p>

            <figure className={styles.inlineFigure}>
              <Image
                src="/images/wffd02/wffd04.jpg"
                alt="Specially designed pumper"
                width={300}
                height={270}
                className={styles.inlinePhoto}
                unoptimized
              />
              <figcaption className={styles.inlineCaption}>
                One of three specially manufactured pumpers. Designed to be a
                slim 17 feet to maneuver down the Fair&apos;s narrow streets.
              </figcaption>
            </figure>

            <p>
              Three pumpers and one rescue truck, specially designed by Chief
              O&apos;Brien, were each manned by one Captain, three Lieutenants,
              and twenty firemen on a platoon system. The pumpers were
              manufactured by H&amp;H Apparatus of Jersey City, New Jersey. They
              were built on 1962 Willy&apos;s chassis (original makers of the
              world famous &quot;Jeeps&quot;) and were equipped with a 500
              gallon-per-minute pump, nearly 2,000 feet of hose, ladders and an
              assortment of fire fighting and rescue tools. The trucks had to be
              a slim 17 feet wide so that they could be driven down any of the
              Fair&apos;s streets; the smallest of which was 20 feet wide. Not
              traditional &quot;fire engine red,&quot; these trucks were painted
              in the Fair&apos;s blue and orange colors. They were deployed in
              three fire stations situated around the perimeter of the
              Fairgrounds; one on the northwest area at the Security Building,
              one on the northeast side and one near the aquacade on the south
              side of the Long Island Expressway.
            </p>

            <figure className={styles.inlineFigure}>
              <Image
                src="/images/wffd02/wffd05.jpg"
                alt="Unit WFFD 3"
                width={300}
                height={308}
                className={styles.inlinePhoto}
                unoptimized
              />
              <figcaption className={styles.inlineCaption}>
                Front view of unit WFFD 3. The units were built on chassis
                manufactured by Willey -- makers of the original Jeep
              </figcaption>
            </figure>

            <p>
              In addition, the WFFD provided a chauffeur for each of the four
              ambulances of the World&apos;s Fair Medical Department. A far cry
              from today&apos;s modern ambulances, these were little more than
              station wagon cars equipped with a stretcher, red light and siren.
              Built by Oldsmobile, they were donated to the Fair by General
              Motors.
            </p>

            <p>
              Few of the Fair&apos;s visitors were aware that they were protected
              by this unique professional group. The fire department was
              disbanded at the Fair&apos;s conclusion in 1965 and its equipment
              was sold.
            </p>
          </div>

          <div className={styles.sourceBlock}>
            <p>
              SOURCE: from <strong><em>Badges of the Bravest</em></strong>, by
              Gary Urbanowicz, Turner Publishing, Publisher
            </p>
            <p>SOURCE: Photos courtesy of Greg Gottlieb</p>
          </div>

          <section
            className={styles.gallerySection}
            aria-labelledby="wffd02-badges"
          >
            <h2 id="wffd02-badges" className={styles.galleryHeading}>
              Badges of the World&apos;s Fair Fire Department
            </h2>
            <p className={styles.galleryCaption}>
              Badges of the Bravest of the Fair -- top l to r: Assistant Chief
              Badge, Lieutenant Badge bottom: Fireman&apos;s Badge (courtesy of
              Gary Urbanowicz)
            </p>
            <div className={styles.galleryRow}>
              <Image
                src="/images/wffd02/wffd11.jpg"
                alt="Assistant Chief Badge"
                width={235}
                height={178}
                className={styles.galleryPhoto}
                unoptimized
              />
              <Image
                src="/images/wffd02/wffd13.jpg"
                alt="Lieutenant Badge"
                width={235}
                height={178}
                className={styles.galleryPhoto}
                unoptimized
              />
            </div>
            <div className={styles.galleryRow}>
              <Image
                src="/images/wffd02/wffd12.jpg"
                alt="Fireman's Badge"
                width={235}
                height={178}
                className={styles.galleryPhoto}
                unoptimized
              />
            </div>
          </section>

          <section
            className={styles.gallerySection}
            aria-labelledby="wffd02-helmets"
          >
            <h2 id="wffd02-helmets" className={styles.galleryHeading}>
              Helmets of the World&apos;s Fair Fire Department
            </h2>
            <p className={styles.galleryCaption}>
              Helmets of Fire Chief Thomas O&apos;Brien (left) and Firefighter
              Number 31 of Engine Company Number 2 (courtesy of Greg Gottlieb)
            </p>
            <div className={styles.galleryRow}>
              <Image
                src="/images/wffd02/wffd07.jpg"
                alt="Chief's Helmet"
                width={235}
                height={176}
                className={styles.galleryPhoto}
                unoptimized
              />
              <Image
                src="/images/wffd02/wffd09.jpg"
                alt="Firefighter's Helmet"
                width={235}
                height={176}
                className={styles.galleryPhoto}
                unoptimized
              />
            </div>
          </section>

          <section
            className={styles.gallerySection}
            aria-labelledby="wffd02-patches"
          >
            <h2 id="wffd02-patches" className={styles.galleryHeading}>
              Patches of the World&apos;s Fair Protective Services
            </h2>
            <p className={styles.galleryCaption}>
              Police shoulder patch (left) (courtesy of Greg Gottlieb) and
              Firefighter shoulder patch (courtesy of Gary Urbanowicz)
            </p>
            <div className={styles.galleryRow}>
              <Image
                src="/images/wffd02/wffd10.jpg"
                alt="Police Patch"
                width={235}
                height={236}
                className={styles.galleryPhoto}
                unoptimized
              />
              <Image
                src="/images/wffd02/wffd14.jpg"
                alt="Fireman's Patch"
                width={235}
                height={254}
                className={styles.galleryPhoto}
                unoptimized
              />
            </div>
          </section>

          <section
            className={styles.gallerySection}
            aria-labelledby="wffd02-queens"
          >
            <h2 id="wffd02-queens" className={styles.galleryHeading}>
              Queens Fire Communications
            </h2>
            <p className={styles.galleryCaption}>
              Today&apos;s Queens Fire Communication patch bears the symbol of
              Queens - the Fair&apos;s Unisphere! (courtesy of Greg Gottlieb)
            </p>
            <div className={styles.galleryRow}>
              <Image
                src="/images/wffd02/wffd08.jpg"
                alt="Queens Fire & Comm Patch"
                width={211}
                height={216}
                className={styles.galleryPhoto}
                unoptimized
              />
            </div>
          </section>

          <div className={styles.contributors}>
            <p className={styles.contributorsTitle}>About the contributors...</p>
            <p>
              <strong>Gary Urbanowicz</strong> is the son of a New York City
              Firefighter who has been collecting fire memorabilia since he was
              young. Four years ago he embarked on his first venture to write a
              book on one aspect of fire memorabilia: badges. This
              &quot;germ&quot; of an idea sprouted into an extensive history of
              all fire fighting units that have existed in New York City since
              1731 and, true to his original intent, the story is told through
              the badges. During his research he uncovered badges and other
              documentation on the fire departments of the 1939 and 1964 New York
              World&apos;s Fairs. His book,{" "}
              <strong>
                <em>Badges of the Bravest</em>
              </strong>
              , is due out for the 2001 Holiday Season. It is being published by
              Turner Publishing of Paducha, Kentucky. It will contain over 900
              photographs of badges divided into 23 chapters of text as well as
              200 other illustrations, appendices, etc. For questions about the
              book, fire memorabilia or New York City fire history, contact Gary
              at{" "}
              <a href="mailto:garyurban@aol.com">garyurban@aol.com</a>.
            </p>
            <p>
              <strong>Greg Gottlieb</strong> is a self-described 43 year-old
              confirmed bachelor residing in Hauppauge, Long Island, New York.
              Greg is a career Fire Marshal for the Hauppauge Fire District.
              Hobbies include very active volunteer firefighter and learning
              about the 1964-65 World&apos;s Fair. His Interest in the Fair dates
              back to when he attended as a six and seven year old on numerous
              occasions. You can contact Greg via e-mail through either{" "}
              <a href="mailto:dstoff@vdot.net">dstoff@vdot.net</a> or{" "}
              <a
                href="http://www.Hauppaugefire.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.Hauppaugefire.org
              </a>
              .
            </p>
          </div>

          <p className={styles.note}>
            <strong>webmaster&apos;s note:</strong> Special thanks to Gary and
            Greg for contributing this story. Were it not for these two gentlemen
            (who, coincidentally contacted me with their WFFD stories only a few
            weeks apart) the World&apos;s Fair Fire Department would have gone
            largely unnoticed. Thanks to their research and memorabilia the
            members of the battalions can receive our proper tribute.
          </p>

          <div className={styles.rights}>
            <p>
              NOTE: <em>Badges of the Bravest</em> is © Copyright 2001, Gary
              Urbanowicz - All Rights Reserved
            </p>
            <p>
              Photographs are © Copyright 2001, Gary Urbanowicz &amp; Greg
              Gottlieb - All Rights Reserved
            </p>
            <p>
              No portion of this story or photographs may be copied or reprinted
              without the owner&apos;s permission
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/wffd01"
        explicitPrevious
        nextHref="/wffd03"
      />
    </>
  );
}
