import type { Metadata } from "next";
import Image from "next/image";
import { OdysseyHero } from "@/components/OdysseyHero";
import { OdysseyNavChrome } from "@/components/OdysseyNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../odysseyEssay.module.css";

export const metadata: Metadata = {
  title:
    "A World’s Fair Odyssey & An Afternoon of Delight (Page 3) — nywf64.com",
  description:
    "Craig Bavaro’s essay concludes — exploring the abandoned Federal Pavilion in 1976, on nywf64.com.",
};

/**
 * Odyssey essay page 3 (legacy odyssey04.html remapped to /odyssey03).
 * Stack: hero → Odyssey nav (Page 4) → navy title bar → essay → nav2
 * PREVIOUS → /odyssey02; no NEXT (end of essay).
 */
export default function Odyssey03Page() {
  return (
    <>
      <OdysseyHero />

      <OdysseyNavChrome />

      <article className={styles.article} aria-labelledby="odyssey03-title">
        <header className={styles.titleBar}>
          <h1 id="odyssey03-title" className={styles.titleBarMain}>
            Essay:{" "}
            <em>A World&apos;s Fair Odyssey &amp; An Afternoon of Delight</em>
          </h1>
          <p className={styles.titleBarByline}>
            ... by Craig Bavaro (Page 3)
          </p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <figure className={styles.pairFigure}>
              <div className={styles.pairRow}>
                <Image
                  src="/images/odyssey/odys02.jpg"
                  alt="Court of the States"
                  width={240}
                  height={240}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys17.jpg"
                  alt="Unisphere and armillary sphere"
                  width={240}
                  height={236}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                left: Craig captures Unisphere, &quot;Freedom of the Human
                Spirit&quot; and the now full-grown, unkept bushes that were
                merely shrubs at the time of the Fair. | right: One armillary
                sphere towers over another.
              </figcaption>
            </figure>

            <p>
              Since the New York City building is not open we decide to head up
              the Avenue of the Americas towards the Main Gate. The Main Gate
              itself, while very big, is not much to see. When we do poke around
              a bit we notice a few Parks Department workers hanging around which
              discourages us from further investigation.         So, now we&apos;re off
              to the Singer Bowl which is now called{" "}
              <em>Louis Armstrong Stadium</em>. My friend and I tell my
              grandfather we will walk down New York Avenue and he can follow us
              with the car. Once again another big structure with no way in.
            </p>

            <p>
              We only have one last chance to get inside an actual World&apos;s
              Fair structure and things aren&apos;t looking that good at this
              point. But it is getting late in the day and I promised my
              grandmother I wouldn&apos;t push my grandfather too much, bearing
              in mind his condition. I tell my grandfather that the big structure
              straight ahead is our last stop if that&apos;s OK with him. He says
              that&apos;s fine and continues to follow us with the car while my
              friend and I walk to the side that faces up the Court of States
              towards Unisphere. On this side, just a few short steps up where
              the lower courtyard begins is a large concrete wall about seven or
              eight feet high and four or five feet across. On the wall&apos;s
              face you can still see the faint outline of where a large eagle
              once was mounted. Above the wall on the building itself you can
              still make out &quot;United States.&quot;
            </p>

            <figure className={styles.pairFigure}>
              <div className={styles.pairRow}>
                <Image
                  src="/images/odyssey/odys11.jpg"
                  alt="Federal Pavilion"
                  width={240}
                  height={244}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys12.jpg"
                  alt="Federal pavilion at corner"
                  width={240}
                  height={236}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                The condition of the Federal Pavilion in 1976
              </figcaption>
            </figure>

            <p>
              As my grandfather parks the car out front my friend and I venture
              up to the building hoping to get in. We are in luck! I see a hole
              big enough to fit through inside the fence that surrounds the lower
              courtyard. I run over to my grandfather and practically beg him if
              we can go inside and poke around a bit. At first he is hesitant to
              let us out of his sight but, I think after seeing my friends&apos;
              and my enthusiasm, he gives in. As we dash through the hole and up
              the courtyard steps I hear my grandfather warning us to be careful.
            </p>

            <p>
              Once inside the fence I notice that the surrounding reflecting
              pools are mostly empty except for some debris. The lower courtyard
              ceiling seems to be mostly intact although most if not all of the
              light bulbs are either broken or gone. Once we reach the top of the
              stairs it is very quiet except for the sounds of pigeons flapping
              around inside. There are two large planters at the top of the
              stairs on opposite ends of the courtyard. They still have trees
              inside of them which are obviously getting water through the roof
              opening when it rains. As we approach the glass doors I hear
              footsteps behind us coming up the courtyard stairs. My friend and I
              both freeze figuring either the police or the Parks Department
              personnel saw us come into the building and have come in after us.
              Much to my surprise, as the person nears the top of the stairs, it
              turns out to be my grandfather! As he gets to the top of the stairs
              I can see he is really out of breath. I ask him why did he come in
              after us and he looks up and smiles and says &quot;Why should you
              two have all the fun.&quot; After allowing him to rest a few
              minutes and catch his breath we are begging to venture inside
              having fully covered the upper courtyard.
            </p>

            <p>
              We notice that all of the glass doors that lead into the building
              are smashed. We carefully pick our way through one of them into
              what seems like a reception area. It is very dark inside with the
              only light coming from the door we just entered through. We can
              make out some smashed display cases and over on one wall is what
              appeared to once have been plaster letters glued to the wall
              forming an expression. The floor is covered with massive amounts of
              debris and broken glass but my friend and I are able to retrieve a
              few of those letters as souvenirs which we stick into our pockets.
              As we exit out into the courtyard again I wish I had thought to
              bring a flashlight with me today.
            </p>

            <p>
              We then decide to try another entrance to see what we can find
              next. This space is in total shambles as we make our way up a large
              escalator to the second level. As we get to the top we enter a huge
              and empty space. The concrete floor is barren of anything. This
              area is better lit since there appears to be holes in the outer
              walls that are letting light inside here and there. The ceiling is
              very high and black but it appears as if some kind of large
              lighting or machinery of some type was mounted up there at one
              time. I can make out a white movie screen on one of the far walls,
              a dome is hanging in mid-air in one place, a long continuous arch
              over another. My friend and I walk around these structures trying
              to figure out their original purpose.
            </p>

            <p>
              My friend and I run over to some of the holes where the light is
              coming in to further investigate with my grandfather not far
              behind. Some of them are big enough to fit our heads through. What
              we see is the outer curtain of multicolored panels that line the
              entire outside of the building. These panels appear to be three or
              four feet wide by about four or five feet tall. Each one is
              fastened to the outer wall of the building by a number of special
              brackets that allows each panel to butt up against each other to
              create a continuous glasslike curtain around the building. Even
              though they appear to be made of glass, each panel is actually
              about a half-inch thick and made of translucent molded plastic.
            </p>

            <p>
              In the space between the outside wall of the building and the
              panels themselves are the remnants of the lighting fixtures that
              once lit the outside of the building. My grandfather explains to us
              that at the time these new type of quartz lamps had the ability to
              either focus light in a very tight beam or to bathe a structure
              such as this in light for a lot lower cost per unit to install,
              maintain and run. I can see that he is disappointed that they have
              been ruined beyond salvage at this point. As we pull our heads back
              inside my friend and I pick up a few chipped-off pieces of the
              multicolored panels to add to our souvenirs.
            </p>

            <p>
              As we climb through another set of shattered doors onto the upper
              balcony we decide to try one more entrance. Climbing through the
              last set of shattered doors we enter another group of general
              reception and display areas. Once again everything we see is in
              ruins. Lighting fixtures are hanging from the ceiling and
              plasterboard has been pulled from the walls or bashed in right
              where it hung on the studs. The floor is littered with a huge
              amount of interior decor debris and junk brought in by the vandals.
              Once again we have to move around real carefully since there
              isn&apos;t much light apart from what is coming in though the
              broken glass doors to the courtyard.
            </p>

            <p>
              On the far side of one room we find a staircase that leads up to
              the roof. This is a real treat since the view around the Park is
              spectacular once we climb them. Even though I&apos;m afraid of
              heights I force myself to walk around and look over the edges and
              take some pictures.
            </p>

            <figure className={styles.gridFigure}>
              <div className={styles.gridRow}>
                <Image
                  src="/images/odyssey/odys08.jpg"
                  alt="View toward Singer Bowl"
                  width={240}
                  height={240}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys07.jpg"
                  alt="View toward Park interior and Pool of Industry"
                  width={240}
                  height={242}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys10.jpg"
                  alt="View toward Unisphere and NY State"
                  width={240}
                  height={239}
                  className={styles.pairPhoto}
                  unoptimized
                />
                <Image
                  src="/images/odyssey/odys09.jpg"
                  alt="View toward Transportation Area"
                  width={240}
                  height={244}
                  className={styles.pairPhoto}
                  unoptimized
                />
              </div>
              <figcaption className={styles.caption}>
                The view from the roof of the Federal Pavilion
              </figcaption>
            </figure>

            <p>
              As we are doing this we hear what appears to be a bullhorn in the
              distance. Once again my friend and I both freeze in our tracks.
              Feeling guilty about being where we know we shouldn&apos;t be with
              our car parked out front and my sick old grandfather lost somewhere
              between the upper courtyard and the roof, we carefully check each
              side of the building for police. Seeing nothing we both break down
              laughing hysterically. Hearing this my grandfather, who is one
              level below the roof, is yelling for us to tell him what is going
              on. Moving closer to his voice we find him on the level below the
              roof inspecting the air conditioning units which, he comments, are
              in surprisingly good condition. After we tell him that we thought
              the police had called out the swat team to surround the building,
              he figures we have taken enough chances for today and that we
              should leave now while we still can. Even though we wanted to
              explore more we know he is right since we have seen more than we
              ever imagined we would that day.
            </p>

            <p>
              So, after carefully picking our way back down through all the
              rubble and taking time for my poor old grandfather to catch his
              breath, we finally found our way to the courtyard and the sweeping
              stairs down. As we get ready to make the final descent my friend
              notices some large gold plastic letters that look like they were
              attached at one time to the outside wall of the courtyard. One of
              them reminds me of the big &quot;M&quot; that Mary Tyler Moore has
              hanging on the wall in her apartment on her TV show. These are a
              real find and we each find one or two intact ones to take home with
              us.
            </p>

            <p>
              Now, with our pockets full of real pieces of the World&apos;s Fair
              and our minds full of dreams of what once was here, we all jump
              into the car and are off; back home the same way we came in. As we
              get onto the LIE, once again windows down, radio blaring, my friend
              and I are overwhelmed by all we have seen and learned about the New
              York World&apos;s Fair today. About an hour later we arrive back
              home on Long Island after dropping my friend at his house. The
              first words out of my mother and grandmother&apos;s mouths is
              &quot;what have you two been up to all this time?&quot; As my
              grandfather goes to take a nap I get ready to tell them about the
              wonderful things they missed 11 years ago while they were busy
              drinking Seven-Up and eating cheap sandwiches!
            </p>

            <p>
              What a special day this would turn out to be for me. In a little
              less than a year from my visit to the Park the U.S. Pavilion would
              be gone forever having finally been put out of its misery after too
              many years of neglect and abuse. Five years later my grandfather
              would be gone too. Though it&apos;s been almost 25 years since that
              day, if I close my eyes for a brief moment I can again smell the
              wild flowers doting the Park, hear the crack of bats, smell the hot
              dogs grilling on small barbecues and hear children laughing at
              play. But most importantly I hear my grandfather&apos;s rich voice
              telling me about a time when the world beat a path to that very
              spot to pause and rejoice in all the wonder that the world had to
              offer in 1964 and 1965.
            </p>

            <p>
              To many, the Fair would provide a brief respite to a world so
              recently and tragically stunned by the loss of a young president.
              The Fair beckoned an innocent public that did not yet know that it
              was entering a war that would cause it to question its very core
              values and to a new generation who would later believe it could
              make a difference. It was a brief last time when we could still be
              awed by pure showmanship and hand-made razzle-dazzle. Sure the Fair
              was commercialism. But what was commercialism at the Fair? It was
              the best of American industry, its states and many new countries in
              the world saying &quot;look where we have come from, look what we
              have accomplished and look where we&apos;re going. We&apos;re proud
              of this and we&apos;re excited about the future so come and join us
              for some fun at the World&apos;s Fair.&quot;
            </p>

            <p>
              Many have said the Fair wasn&apos;t successful, but they&apos;re
              wrong. Let us remember that on a massive scale the Fair required a
              monumental amount of coordination, planning, financing,
              constructing, promoting and running to bring it all off. It may
              have stumbled along the way as is the case with any undertaking of
              this scope; but one thing it never seemed to do was disappoint its
              target audience. Other than my family and the critics, who Robert
              Moses once said &quot;never build anything,&quot; I have never met
              anyone in 35 plus years since the Fair closed who said that they
              didn&apos;t have a great time going there. I guess that&apos;s why
              I can never spend too much time at the Fair myself -- even if
              it&apos;s only in my dreams.
            </p>

            <footer className={styles.authorFooter}>
              <p className={styles.authorBio}>
                Craig remains an avid collector of the 1964/1965 New York
                World&apos;s Fair with a focus on collecting the many items
                published by and for the Fair Corporation. He resides today in
                sunny California and works as an executive in the Mortgage
                Finance Industry.
              </p>
              <p className={styles.authorCopyright}>
                Story and Photographs © Copyright 2001Craig Bavaro, All Rights
                Reserved
              </p>
            </footer>
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/odyssey02" explicitPrevious hideNext />
    </>
  );
}
