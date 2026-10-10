import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar02.module.css";

export const metadata: Metadata = {
  title: "Prologue — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Prologue to Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

function Fn({ n }: { n: number }) {
  return (
    <Link href="/intpar08" className={styles.fn} aria-label={`Footnote ${n}`}>
      {n}
    </Link>
  );
}

/**
 * The Hunt for International Exhibitors — Prologue.
 * Body from legacy intpar02.html (Page 2).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar02Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar02-title">
        <header className={styles.titleBar}>
          <h1 id="intpar02-title" className={styles.titleBarMain}>
            Prologue
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar02/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>Prologue</p>
          </header>
          <hr className={styles.rule} />

          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>
              The basic purpose of the Fair is to help achieve &apos;Peace
              Through Understanding,&apos; that is, to assist in educating the
              peoples of the world as to the interdependence of nations and the
              need for universal and lasting peace.
            </p>
            <p className={styles.quoteAttr}>
              -Invitation of Foreign Nations to the New York World&apos;s Fair
              1964-1965
              <Fn n={1} />
            </p>
          </blockquote>

          <div className={styles.body}>
            <p>
              What aspirations. This was not just the building of a park. This
              was not just convenient product placement. This was not just fun.
              This Fair took on meaning much greater than could be weighed in
              tons of steel and counted in sales of tickets. This was destined
              to be an &quot;Olympics of Progress,&quot; a playground on which
              the bullies played on the same team as the skinny nerds, and
              everybody won. The New York World&apos;s Fair of 1964-1965 was
              going to bring the world together, bridge cultural gaps and
              celebrate &quot;man&apos;s achievements on a shrinking globe in an
              expanding universe.&quot;
              <Fn n={2} /> The Fair Corporation was a private non-profit company
              independent of the United States government, but in true American
              fashion it absorbed contemporary American ideals and imposed them
              upon participants and visitors alike. Ideals, however, could only
              take the Fair so far in an age of Cold War marked by nuclear
              threats, social uprisings and third-world suffering. What resulted
              in 1964 and 1965 was a fantasyland in which cooperation and
              brotherhood were smudged with the thumbprint of Cold War politics,
              the very circumstance that prompted the idealism of the Fair and
              created the need for such an event in the first place.
            </p>

            <p>
              Visions of peace and progress have been part of world&apos;s fairs
              since the popularization of modern fairs in 1851. Kenneth
              Luckhurst, in <em>The Story of Exhibitions</em>, chronicles the
              rise of fairs from their roots as trade markets of the Middle Ages
              in which the exchange between exhibitor and visitor created
              long-lasting effects.
              <Fn n={3} /> Britain was the first nation to change the formula
              and hold an industrial exhibition, with France soon to follow. The
              two nations used exhibitions initially as a tool in their political
              rivalry during the eighteenth century. Both nations&apos;
              exhibitions boasted of their respective achievements in the world
              spotlight. By the mid-nineteenth century, the scope of these
              exhibitions expanded. They &quot;assumed an international
              character&quot; and were &quot;the means of ushering in an
              established and universal peace.&quot;
              <Fn n={4} />
            </p>

            <p>
              It was about this time that the modern state system was fully
              established in the Western world, and exhibitions became important
              within this context. Nations worked to create an individual image
              of military, commercial and cultural strength in a competitive
              system. London&apos;s Crystal Palace of 1851 brought the emergent
              form of cultural competition to the world stage-the world&apos;s
              fair.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/intpar02/unisph105.jpg"
                alt="London's Crystal Palace of 1851"
                width={200}
                height={150}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                London&apos;s Crystal Palace of 1851
                <Link href="/intpar09">*</Link>
              </figcaption>
            </figure>

            <p>
              The United States was quick to follow London with its own fair.
              The New York Crystal Palace of 1853 established the
              non-governmental approach to fair planning in the United States.
              The government only specified the building materials and the
              admission price. President Franklin Pierce, however, expressed his
              hope that the Fair would be useful in unifying the nation in a time
              of divisiveness. Instead, the Fair lost hundreds of thousands of
              dollars and was a pronounced failure. Five years later, the Crystal
              Palace burned to the ground, along with the motivation to bring the
              nation together with a fair for years to come.
              <Fn n={5} />
            </p>

            <p>
              Fairs in the United States after the Civil War had a largely
              international focus, with America&apos;s role in the world at the
              heart of them. According to Robert W. Rydell in{" "}
              <em>All the World&apos;s a Fair</em>, the American fairs of the
              Victorian Era dealt with the imperialistic urges of the reunited
              nation. The fairs in this time period were planned by city elites.
              They exhibited progress by emphasizing racial hierarchies alongside
              man&apos;s elevation from savagery to civilization. Chicago&apos;s
              World&apos;s Columbian Exposition of 1893, for example,
              commemorated the 400th anniversary of Columbus&apos;s landing in
              the Western Hemisphere. Notions of discovery and expansion as
              inherently American ideals pervaded this Fair, uniting middle class
              citizens behind white supremacist and imperialist ambitions. Such
              ideologies helped relieve the concerns of visitors about the
              problems and hard times that lay beyond the gates of the Fair. From
              this point forward, fairs in America had the purpose of easing the
              tensions of the world in the minds of visitors.
              <Fn n={6} />
            </p>

            <p>
              After the devastation of World War I and the Depression, fairs in
              the United States once again acted as tools for domestic
              reconstruction. Known as the Century-of-Progress exhibitions, these
              fairs were useful in restoring &quot;popular faith in national
              progress.&quot; These fairs focused significant attention on the
              ways of modernizing American society in order to cope with the
              future.
              <Fn n={7} />
            </p>

            <p>
              Fairs both in the United States and abroad became more
              international in spirit following World War II. They emphasized the
              idea of a common humanity, while subtly advancing a domain of
              corporate exploits and globalization.
              <Fn n={8} /> Hence the New York World&apos;s Fair 1964-1965, an
              exposition overwhelmingly dominated by commercial exhibits, was
              given the theme of <em>Peace Through Understanding</em>. The
              competitive international system of the 1960s, which was powerfully
              shaped by the Cold War between the US and the USSR, was the context
              in which the 1964 Fair acquired its ideals.
            </p>

            <p>
              The anthropologist Burton Benedict, discussing the symbolic nature
              of fairs, argues that rituals such as these are a &quot;stabilizing
              force acting to keep society in equilibrium.&quot;
              <Fn n={9} /> Such rituals include the universal human tendency
              toward competition--an &quot;Olympics of Progress&quot; for
              instance. Benedict discusses how &quot;fairs take people out of
              their ordinary routines and thus remove them temporarily from their
              usual positions in the social structure.&quot;
              <Fn n={10} /> In order for nations to be able to trade and act in
              such environments, &quot;traditional enemies must lay aside the
              inclination to fight.&quot;
              <Fn n={11} />
            </p>

            <p>
              As a site of healthy competition amongst nations, a site of
              romantic escape from international turmoil, and a site where arms
              were laid down and negotiations could take place between
              adversaries, it was anticipated that the 1964 Fair would be useful
              in the same ways as American fairs past. It could bring a divided
              nation together behind the ideals of democracy in contrast to
              pavilions of nations with alternative systems. It could exchange
              culture, art and ideas with competitors and cultivate new
              friendships from around the globe. It could enhance America&apos;s
              influence in and on the world. But the vision of the Fair was even
              more ambitious. <em>Peace Through Understanding</em> could actually
              save the world.
            </p>

            <p>
              &quot;An exhibition will simply foster whatever spirit pervades
              the people concerned with it,&quot; wrote Luckhurst.
              <Fn n={12} /> In the case of the 1964 Fair, the concerns of the
              organizers went beyond the walls of the administrative offices of
              the Fair Corporation. The Fair met the concerns of three
              presidential administrations, the Department of State and Bureau
              International des Expositions, the new nations of Africa, the
              Communist nations of the Europe and Asia, the warring nations of
              the Middle East and one very opinionated public servant in the role
              of Fair President. The abundance of concerns made it difficult for
              the International Affairs and Exhibits (IAE) department of the Fair
              to accomplish its grand dreams.
            </p>

            <figure className={styles.figure}>
              <Image
                src="/images/intpar02/rm2.jpg"
                alt="Robert Moses"
                width={200}
                height={265}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                1964/1965 New York World&apos;s Fair President Robert Moses
                <Link href="/intpar09">*</Link>
              </figcaption>
            </figure>

            <p>
              The 1964 Fair Corporation intended to keep the Fair as apolitical
              and nongovernmental as possible. During the earliest planning
              stages in 1959, the directors made a policy decision banning
              patronage of political cronies or business contacts. When Robert
              Moses came on board as Fair President, he repeatedly wrestled the
              Fair out from under the influence of city and state politicians
              (although he did not always abide by the ban against business
              patronage). &quot;Moses&apos; distaste for kowtowing to
              anybody&quot; and &quot;an unerring knack of rubbing Congressmen
              the wrong way&quot; are just a few in a long list of reasons why
              Moses was glad to keep the Fair away from politics.
              <Fn n={13} /> He was not entirely successful, though.
            </p>

            <p>
              The members of the IAE constantly had to work within the confines
              of protocol, deal with unstable governments and political
              uprisings, and dodge international crises in order to go about
              their business of arranging a world&apos;s fair that actually
              featured the nations of the world, all without the backing of an
              army or a powerful bureaucracy such as the State Department. The
              IAE had many failures, and gaping holes were left in the
              International Area by prominent nations. &quot;A fair is not, after
              all, a government,&quot; wrote the New Yorker. Acting as &quot;part
              diplomat and part salesman,&quot; the members of the IAE faced
              conditions that provided all the more prerogative for such a daring
              aspiration as <em>Peace Through Understanding</em>.
              <Fn n={14} />
            </p>

            <p>
              In his New York Times opening day essay, &quot;Why a Fair? And Why
              This Fair?&quot; Moses wrote, &quot;What distinguishes a
              world&apos;s exposition from a local fair obviously must be its
              universality and its inquiry into the common destiny of mankind.
              All the talents are engaged in a fair; the hope is that if they can
              together build a big show, they can eventually build a viable
              world.&quot;
              <Fn n={15} /> Such a statement speaks to the post-World War II
              search for a connection between American destiny and worldwide
              peace, and to the importance of the exchanges of cultures and
              abilities during the Cold War.
            </p>
          </div>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar01"
        explicitPrevious
        nextHref="/intpar03"
        hideOverview
      />
    </>
  );
}
