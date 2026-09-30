import type { Metadata } from "next";
import Image from "next/image";
import { RmHero } from "@/components/RmHero";
import { RmNavChrome } from "@/components/RmNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./rm02.module.css";

export const metadata: Metadata = {
  title: "The Promised Land of Mr. Moses — Ogden Nash — nywf64.com",
  description:
    "Ogden Nash’s poem “The Promised Land of Mr. Moses” about Robert Moses and the 1964/1965 New York World’s Fair — from nywf64.com.",
};

/**
 * Robert Moses page stack (modeled on rm01):
 * site header → hero → RM nav → poem body → nav2 → site footer
 *
 * Body imported from legacy rm03.html (“The Promised Land of Mr. Moses”),
 * remapped to /rm02.
 */
export default function Rm02Page() {
  return (
    <>
      <RmHero />

      <RmNavChrome />

      <article className={styles.article} aria-labelledby="rm02-title">
        <div className={styles.articleInner}>
          <header className={styles.titleBar}>
            <h1 id="rm02-title" className={styles.titleBarMain}>
              <em>The Promised Land of Mr. Moses</em>
            </h1>
            <p className={styles.titleBarByline}>... by Ogden Nash</p>
          </header>

          <figure className={styles.figure}>
            <Image
              src="/images/rm02/rm2.jpg"
              alt="Moses and Unisphere"
              width={200}
              height={265}
              className={styles.photo}
              unoptimized
            />
          </figure>

          <div className={styles.poem}>
            <p>
              <span className={styles.dropCap}>W</span>hence, oh whence did the
              Fair appear?
            </p>
            <p>Out of nowhere into the here.</p>
            <p>Did it just spring up in a flash when bidden?</p>
            <p>No, you can bet your life it didden.</p>
            <p>How was the marsh grass changed to roses?</p>
            <p>By a crusty magician, name of Moses.</p>
            <p>He&apos;ll make you, while turning a somersault,</p>
            <p>Good bricks without straw, good beer without malt,</p>
            <p>He&apos;ll build you a mansion out of knot holes,</p>
            <p>Or a garden out of a mess of pot holes.</p>
            <p>He looked at a waste of mud and sand,</p>
            <p>And Moses envisioned a Promised Land.</p>
            <p>Then Moses he called upon the Lord,</p>
            <p>And RCA and DuPont and Ford.</p>
            <p>GE, he had a word with them,</p>
            <p>As well as Chrysler and IBM,</p>
            <p>And he lured to his fantastic island</p>
            <p>Nations from Mexico to Thailand.</p>
            <p>That&apos;s why you can murmur Oh and Ah</p>
            <p>At Michelangelo&apos;s Pieta,</p>
            <p>Or even give out with reverent Oohs</p>
            <p>When Elsie the Cow in person moos.</p>
            <p>You&apos;ll find it a change from your daily chores</p>
            <p>To gaze at the monstrous dinosaurs</p>
            <p>From the era when Earth was embryonic;</p>
            <p>They are genuine Audio-anamatronic.</p>
            <p>Then of future modes you can be an adopter,</p>
            <p>You can skitter around in a aquacopter,</p>
            <p>Or ride up on a thing called the People Wall</p>
            <p>To a lofty ovoid cinema hall,</p>
            <p>And forget the traffic upon the highway</p>
            <p>When the Time Tunnel meets the Magic Skyway.</p>
            <p>If you&apos;re mad about Polynesian girls</p>
            <p>Entrancing divers will bring you pearls,</p>
            <p>Or should you prefer a mausoleum</p>
            <p>You can spend one hour in the Wax Museum.</p>
            <p>You can take your shoes, with the other scuffers,</p>
            <p>To be shined for free by powered buffers.</p>
            <p>You can gaze on the replica, fit for a houri,</p>
            <p>Of the marvelous Mondop of Saraburi,</p>
            <p>And while in an Oriental mood</p>
            <p>You can find the proper exotic food</p>
            <p>At the International Gourmet Snack Bar,</p>
            <p>Fit for the Mogul emperor Akbar.</p>
            <p>Next you can penetrate, happy tourist,</p>
            <p>Deep in the strange Enchanted Forest,</p>
            <p>Where clad in a dainty enchanted bodice,</p>
            <p>Mayhap you will meet the Enchanted Goddess.</p>
            <p>The Enchanted Goddess! Who can she be?</p>
            <p>If you&apos;re overpowered by her arts alchemic</p>
            <p>You can enter the Hospital Atodemic,</p>
            <p>And three thousand Pinkerton brave police</p>
            <p>Will keep an eye on your daughter or niece.</p>
            <p>Meanwhile, I shall be goggling at</p>
            <p>Washington&apos;s sword and Lincoln&apos;s hat.</p>
            <div className={styles.stanzaBreak} aria-hidden="true" />
            <p>So fret not, parents, or tear your hair</p>
            <p>And wonder why Johnnie&apos;s so long at the Fair.</p>
            <p>And Johnnie, do not fume and foam</p>
            <p>If your parents are late in getting home;</p>
            <p>Nobody departs, until it closes,</p>
            <p>From the Promised Land of Mr. Moses.</p>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/rm01" nextHref="/rm03" />
    </>
  );
}
