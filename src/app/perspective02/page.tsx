import type { Metadata } from "next";
import Image from "next/image";
import { PerspectiveHero } from "@/components/PerspectiveHero";
import { PerspectiveNavChrome } from "@/components/PerspectiveNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../perspectiveEssay.module.css";

export const metadata: Metadata = {
  title:
    "Camelot at Flushing Meadows — Perisphere’s Perspective — nywf64.com",
  description:
    "David Oats’s essay Camelot at Flushing Meadows: The Kennedys and the Fair — on nywf64.com.",
};

/**
 * Perspective essay page 2 (legacy perspective03.html remapped to /perspective02).
 * Stack: hero → Perspective nav (Page 3) → navy title bar → essay → nav2
 * PREVIOUS → /perspective01; NEXT → /perspective03
 */
export default function Perspective02Page() {
  return (
    <>
      <PerspectiveHero />

      <PerspectiveNavChrome />

      <article className={styles.article} aria-labelledby="perspective02-title">
        <header className={styles.titleBar}>
          <h1 id="perspective02-title" className={styles.titleBarMain}>
            Camelot at Flushing Meadows
          </h1>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <figure className={styles.bannerFigure}>
              <Image
                src="/images/perspective02/doats01.gif"
                alt=""
                width={300}
                height={150}
                className={styles.bannerPhoto}
                unoptimized
              />
            </figure>

            <p className={styles.essayHeading}>Camelot at Flushing Meadows:</p>
            <p className={styles.essayHeading}>The Kennedys and the Fair</p>
            <p className={styles.essayByline}>
              by David Oats, September 23, 2003
            </p>
            <hr className={styles.essayRule} />

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/us24.jpg"
                alt="Groundbreaking Brochure Cover"
                width={480}
                height={332}
                className={styles.singlePhoto}
                unoptimized
              />
            </figure>

            <p className={styles.sectionHead}>NOVEMBER 22, 1963</p>

            <p>I didn&apos;t know where to go.</p>

            <p>
              It was as if the floor had disappeared and ... what? Everyone felt
              it that day. I was in a classroom at St. Michael&apos;s School in
              Flushing, Queens when a nun suddenly came into a 7th grade English
              class and told the students to double-up in another classroom down
              the hall. It had a TV. We all had done this before for air-raid
              drills during the Berlin Wall and Cuban Missile Crises, or to watch
              the launch of John Glenn and his three-hour orbit of the earth. It
              was always scary or exciting or a combination of both. But the
              faces on the teachers were different this time. Before turning on
              the TV the nun told the crowded classroom that she had some bad
              news. The President had been shot. And they thought we should now
              all just watch the TV.
            </p>

            <p>
              Everyone who was alive that day - Friday, November 22,1963 -
              remembers where they were when they heard the news. It was for our
              generation just like we used to hear our parents talk about how
              they remember exactly where they were and what they were doing on
              December 7, 1941, when the attack on Pearl Harbor was announced. I
              suppose it is like what all of us alive on September 11, 2001 will
              always feel.
            </p>

            <p>
              After agonizing minutes of waiting the students watched, like the
              rest of the nation, Walter Cronkite announce{" "}
              <em>officially</em> that President John Fitzgerald Kennedy had
              died. Wiping away his own tears, the newsman said that Lyndon
              Johnson would soon take the Oath of Office as the next President
              of the United States. Many in the class erupted in gasps and tears.
              The nun shut down the TV and told us to pray. They huddled with
              the other teachers and the principal and then announced that we
              should all go home to be with our parents and family.
            </p>

            <p>
              I remember walking the always bustling streets of downtown Flushing
              on my way home and watching people walking in a daze, like zombies,
              talking to strangers or standing in front of local appliance shops
              just watching black and white TV sets in the store windows. It was
              eerie. I got home to my housing project on Roosevelt Avenue in
              Flushing, but I was alone - both parents still at work in
              Manhattan. I couldn&apos;t call them because they were on their way
              back home also.
            </p>

            <p>
              I didn&apos;t know where to go. But then I did! I ran out of my
              apartment like a maniac. I ran across the Roosevelt Avenue bridge
              under the IRT No. 7 subway trestle and ran and ran until I reached
              the gate that led into Flushing Meadow Park. There was the
              Administration Building for the upcoming 1964-1965 New York
              World&apos;s Fair, a one-story, unimposing prefab looking structure
              that stood outside the main construction site where the great
              international exposition was rising in the background. I knew why
              I had to come here. It was the only place where I could truly think
              about this moment that had had just seemed to change everything.
              All I could think about was another day, just barely a year before
              . . .
            </p>

            <p className={styles.sectionHead}>DECEMBER 14, 1962</p>

            <p>
              When I had first seen that building in the late summer of 1962 it
              was a scary place where the Pinkerton Guards had unceremoniously
              dropped me off after stopping me from my sneaky excursions into the
              construction site of the Fair. Then, one day, the guard&apos;s
              &quot;boss&quot; spotted me and told his secretary to take my name
              and address down so they could send me stuff on the future Fair and
              I wouldn&apos;t get caught in that dangerous place until the Fair
              was ready in 1964. Shortly after that I started getting all kinds
              of neat stuff from the Fair: <em>Progress Reports</em>,{" "}
              <em>Fair News</em> newsletters, glossy photos of future Fair
              buildings, etc. It didn&apos;t take long to learn, pursuing these
              intriguing booklets, that the guard&apos;s &quot;boss&quot; was
              actually the FAIR&apos;S BOSS - this guy Robert Moses, who my
              father proudly told me was &quot;a great man -- he built Jones
              Beach!&quot; Then one day in late November, I got another mailing
              from the Fair - but this one looked different. It was a typed
              letter saying that I was cordially invited to the Official
              Groundbreaking Ceremony for the United States Pavilion on Friday,
              December 14, 1962.
            </p>

            <p>
              It sounded cool but that was a school day! I showed the letter to
              my teacher and she said it should be &quot;very educational&quot;
              and I could take off, but I had to write a little report on the
              event for the class. &quot;Great!&quot; But then I got a little
              scared. The building was still intimidating to me and when I called
              to RSVP, I asked if my parents could come. &quot;No,&quot; I was
              told. &quot;The invitation is only for one.&quot; My parents said
              I should wear a tie and jacket. For a 12 year old, former Pinkerton
              cop fugitive, this was frightening. I showed up at that dreaded
              Administration Building, invitation in hand and a tall Pinkerton
              guard was there to check it. He looked at me real hard, asked
              where my parents were and asked if I had any ID! I didn&apos;t. He
              went to the side and made a call on his walkie-talkie (I noticed he
              had a gun also). He then folded the letter, waved me on into that
              scary building and ... smiled.
            </p>

            <p>
              Inside the Administration Building, everything was abuzz.
              Photographers, ADULTS, guards, ADULTS, pretty secretaries, cops,
              ADULTS. Then a nice lady came up and asked if I was lost. I just
              knew this was some kind of mistake, this invitation, but she put me
              at ease and asked me if I was excited to see the President. I
              thought she meant Robert Moses and I said &quot;Yes.&quot; She
              laughed and said, &quot;No. The PRESIDENT OF THE UNITED STATES,
              PRESIDENT KENNEDY.&quot; It didn&apos;t say anything about{" "}
              <em>that</em> on the invitation! She said, &quot;He&apos;s on the
              way from La Guardia right now and he&apos;ll be here in a few
              minutes.&quot; Just then another flurry of activity took place and,
              in the lobby, I could see the old man, the guard&apos;s
              &quot;boss,&quot; right next to me in the very crowded lobby.
              Someone went to push me away but then the old man stopped and said,
              &quot;Oh, here&apos;s my friend from the neighborhood. Glad you
              could come. Show him the model.&quot; Then I was whisked away into
              this large room where there was the most amazing toy I had ever
              seen. A huge scale model of the entire future New York World&apos;s
              Fair ... with lights! Forget the President! <em>This</em> was cool
              beyond belief!
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/us27.jpg"
                alt="Kennedy views Fair Model"
                width={450}
                height={279}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                President Kennedy surveys the model of the Fair with Norman K.
                Winston, US Commissioner for the Federal Pavilion and Mayor
                Robert F. Wagner, both to his immediate right.
              </figcaption>
            </figure>

            <p>
              But my fascination with the model was soon interrupted by a huge
              herd of photographers and reporters scrambling into the model room,
              pushing me to the side with lots of &quot;outta the way kid&quot;
              shouts. Before I knew it there was Mayor Wagner - such a familiar
              face on nightly local TV (I think I thought &apos;Maya&apos; was
              his first name) and then the old man himself, Moses, and then
              President Kennedy. I couldn&apos;t believe my eyes. I noticed first
              his reddish hair (I only had seen him on black and white TV). His
              shoelace was untied. &quot;My God,&quot; I thought, &quot;He&apos;s
              human!&quot; I remember for a few seconds how that scared me -
              he&apos;s the President but he&apos;s a person! The crowded room
              seemed to get very small. A Fair engineer with a huge pointer
              described the whole fair to the President. I noticed JFK constantly
              looking at a tiny helicopter on top of the Heliport model which was
              was right by his fingertips. Then everyone was escorted out of the
              room, down the narrow hallway, back out the main entrance to
              waiting buses that took everyone on the short ride from the
              Administration Building to the circular site set aside for the
              future US Pavilion.
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/doats09.jpg"
                alt="Kennedy in the Model Room"
                width={450}
                height={305}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Kennedy exits the model room on his way to the Groundbreaking
                Ceremony. Fair President Robert Moses is to his right.
              </figcaption>
            </figure>

            <p className={styles.sectionHead}>THE CEREMONY</p>

            <p>
              At the site there was a tent and a large bulldozer and the crowd of
              about 100. I watched as the President and dignitaries gathered
              under the tent. It was bitter cold and windy and you could hear
              planes from LaGuardia and the clanging of the No. 7 train in the
              background. I remember the scene looked majestic, maybe because I
              had never seen a ceremony before. The wood podium had a big Seal of
              The President of the United States on it. Wow! Then Mayor Wagner,
              Norman K. Winston (Commissioner of the US Pavilion) and Mr. Moses
              spoke. I could not believe that this was the same man who was kind
              enough to take the time to send me all that Fair stuff and now,
              here he is! With the PRESIDENT OF THE UNITED STATES! In my
              backyard!
            </p>

            <p>
              &quot;We are delighted, Mr. President, that you have come
              personally to inaugurate the central exhibit of the World&apos;s
              Fair,&quot; Moses said. &quot;And thus again to demonstrate
              dramatically your wholehearted support of this{" "}
              <em>Olympics of Progress</em> and to help us celebrate the 300th
              anniversary of a great city which has so long been a haven of hope
              and a bastion of freedom to the adventurous and oppressed of every
              land.&quot;
            </p>

            <p>
              &quot;We are in the midst of giant preparations which, to a
              trained eye, represent much more than volcanic disturbance of the
              landscape and rude interference with travel. Grover Whalen found
              long ago that it takes a certain amount of chaos to make a Fair.
              Shills as well as shovels are needed, and I speak for the
              shovelers.&quot;
            </p>

            <p>
              Moses continued, &quot;The breaking of ground for this pavilion is
              no childish prank. It marks the rising crescendo of construction
              and the beginning of order and harmony.&quot; He concluded by
              saying, &quot;We want you to come again in 1964 to open this
              exposition, further emphasizing your leadership in world affairs
              and your confidence in peaceful assembly and healthy rivalry among
              the nations.&quot;
            </p>

            <p>
              Then Moses gave Kennedy the first gold medal of the World&apos;s
              Fair and Kennedy took off his overcoat (which seemed risky due to
              the very cold and windy temperature) and spoke:
            </p>

            <p>
              &quot;I want to express my great appreciation to all of you who
              have been connected with this Fair. Mr. Moses, who has been working
              so hard to make it a reality; Mr. Winston, who has been working on
              the American exhibit; the Mayor who has given it his close
              sponsorship since it began, and all of you, particularly those of
              you who are building it.&quot;
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/us17.jpg"
                alt="Kennedy addresses crowd"
                width={350}
                height={227}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                President Kennedy addressing the crowd at the Groundbreaking
                Ceremony for the US Pavilion, December 14, 1962
              </figcaption>
            </figure>

            <p>
              &quot;This is going to be a chance for us in 1964 to show 70
              million visitors - not only our countrymen here in the United
              States, but people from all over the world -- what kind of a people
              we are. What kind of a country we have. What our people are like
              and what we have done with our people. And what has been done in
              the past and what is coming in the future.&quot;
            </p>

            <p>
              &quot;This is what a World&apos;s Fair should be about and the
              theme of this World&apos;s Fair - Peace Through Understanding - is
              most appropriate in these years of the 60&apos;s.&quot; Kennedy
              continued, &quot;I want the people of the world to visit this fair
              and all of the various exhibits of our American industrial
              companies and the foreign companies, who are most welcome, and come
              to the American exhibit - the exhibit of the United States - and
              see what we have accomplished through a system of freedom.&quot;
            </p>

            <p>
              &quot;So we begin today,&quot; JFK concluded, &quot;with this
              ceremony. We&apos;ll begin again in April of 1964. And we&apos;ll
              show what we have done in the past and even more important - what
              America is going to be in the future. Thank you.&quot;
            </p>

            <p>
              With that the President jumped away from the tent and went straight
              to a group of construction workers who surrounded the large
              bulldozer that was nearby ready to begin the real excavation work
              after the hoopla and big shots left. Apparently, to the
              consternation of Fair planners who had the customary golden shovels
              ready for the dignitaries to break ground for the official
              photo-op, Kennedy instead went over to the earthmover where a
              driver was seated, reached up and shook the man&apos;s hand. The
              startled but delighted driver said &quot;You want to try it?&quot;
              Kennedy then immediately climbed up on the seat as the driver moved
              aside. With the aid of instructions, the President stirred up the
              ground for a short distance. The photographers loved it and Kennedy
              then got off the truck, walked and shook hands with the crowd
              (there were no barricades) and flashed the most winning smile
              I&apos;ve ever seen.
            </p>

            <p>
              When you hear stories today about that <em>Kennedy magic</em>, I
              can honestly say it was true. It was not just the fact that he was
              the President, but that clipped, cadenced voice in that crisp, cold
              air at Flushing Meadows that day struck me like nothing I had ever
              seen. Suddenly the Fair, which I had become enchanted with as an
              idea, took on a newer meaning. I didn&apos;t quite know what it
              was. The adults called it Kennedy&apos;s &quot;New Frontier,&quot;
              but it seemed Kennedy and the Fair were on a launching pad to
              something very bright and good.
            </p>

            <p>
              Mayor Wagner&apos;s remarks to the President echoed in my ears:
              &quot;We are proud indeed to have with us on this occasion the
              great President of the United States. He honors us and honors this
              Fair by joining with us on this occasion. We salute him today, as
              the World&apos;s Fair will salute him in 1964 . . .We hope you will
              bring us luck -- the luck of the Kennedys and of the United States
              of America.&quot;
            </p>

            <p>
              I got to shake Kennedy&apos;s hand. Then he waved and was gone. I
              think the whole thing didn&apos;t in total take more than about 45
              minutes. But those minutes changed something in me. I walked back
              home and trying the next week to describe the event to my
              classmates, like my teacher requested, seemed to escape me. My
              backyard, my world, had changed.
            </p>

            <p className={styles.sectionHead}>COUNTDOWN</p>

            <div className={styles.letter}>
              <p className={styles.letterPlace}>THE WHITE HOUSE</p>
              <p className={styles.letterPlace}>Washington, D.C.</p>
              <p className={styles.letterDate}>October 5, 1961</p>
              <p className={styles.letterBody}>Dear Mr. Moses:</p>
              <p className={styles.letterBody}>
                I have written the Mayor assuring him of my support of the
                World&apos;s Fair, which under your direction and leadership will
                be, I am sure most successful. You can be sure of my continued
                interest and the support of the Administration. I hope to be with
                you at the ribbon cutting.
              </p>
              <p className={styles.letterSign}>Sincerely,</p>
              <p className={styles.letterName}>JOHN F. KENNEDY</p>
            </div>

            <p>
              The Fair had been born in the last days of the Eisenhower
              Administration but it was the renewed vision and vigor of the
              Kennedy Administration that injected the enterprise with the spirit
              of <em>The Space Age</em>, the optimism and purpose of a new world
              being born. Kennedy sensed the importance of the Fair in promoting
              his New Frontier agenda and personally approved the theme for the
              US Pavilion to be &quot;Challenge to Greatness.&quot;
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/doats11.jpg"
                alt="Deegan, Moses and Kennedy confer"
                width={450}
                height={428}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                Thomas Deegan, Fair Executive Committee Chairman and Robert
                Moses, Fair President, confer with President Kennedy in the Oval
                Office. On the table is a presentation model of the Unisphere,
                presented to Kennedy as a gift from the Fair.
              </figcaption>
            </figure>

            <p>
              When Moses wanted a hearing at the White House over some problem
              with the Federal bureaucracy over the State Department&apos;s
              blockage of a Soviet Pavilion at the Fair (they didn&apos;t want
              it) or Congress&apos; reluctance for a big appropriation for the
              Federal Pavilion, he got it from Kennedy. The President kept the
              miniature Unisphere that Moses had given him on a shelf in the Oval
              Office .It was an odd alliance I always thought, between this old
              lion and this young prince. But I would discover only much later
              what drew these two seemingly opposite types close together.
            </p>

            <p>
              On April 22, 1963, one year before the opening day of the Fair,
              Moses held a meeting of the Board of Directors in the
              Administration Building, He had arranged to acquire an impressive
              looking &quot;Countdown Clock&quot; that had been used by the
              Seattle World&apos;s Fair in 1962. The{" "}
              <em>Century 21 Exposition</em>, as it was officially called, had
              used the machine to count down the months, days, minutes and
              seconds to opening day for that Fair. President Dwight Eisenhower
              had personally pressed the button in the center of the machine to
              activate it. Moses loved the clock and thought it would be a great
              incentive for all Fair workers to see it as they entered and left
              the Administration Building. So it was placed prominently in the
              entrance lobby. At that Board of Directors meeting, he arranged for
              it to be activated from the Oval Office by none other than the
              President of the United States using the first
              &quot;touch-tone&quot; push-button telephone.
            </p>

            <p>
              The President&apos;s remarks were piped-in directly to the meeting.
              &quot;Mr. Moses, Members of the Board, guests and builders of the
              World&apos;s Fair; In December I attended your Groundbreaking
              Ceremonies and, 366 days from today, I plan to attend your opening.
              We have a deadline to meet and by dialing &quot;1-9-6-4&quot; I
              launch the final phase of this great effort.&quot; With that, JFK
              pressed the four tones and, in true space-age fashion, the
              countdown clock began.
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/doats10.jpg"
                alt="Countdown Clock"
                width={457}
                height={428}
                className={styles.singlePhoto}
                unoptimized
              />
              <figcaption className={styles.caption}>
                The &quot;Countdown Clock&quot; in the Fair&apos;s Administration
                Building. Note both the New York and Seattle World&apos;s Fair
                logos appear on the front of the Clock. The clock was acquired
                from the 1962 Seattle World&apos;s Fair. The large button in the
                middle was used to start the clock for the Seattle Fair by
                President Eisenhower. President Kennedy started the clock for the
                1964 Fair&apos;s countdown by touch-tone phone.
              </figcaption>
            </figure>

            <p className={styles.copyright}>
              (Copyright 2003 David G. Oats and nywf64.com)
            </p>

            <p className={styles.sectionHead}>
              NOVEMBER 22, 1963 - APRIL 22, 1964
            </p>

            <p>
              It was those memories that drew me back to that Administration
              Building, that Park, on that fateful day in November, 1963. It was
              hard to look at that same place where I had seen President Kennedy,
              so alive, young and full of life and the future. I was not alone.
              Oscar Hengsltler, the old Scandinavian man who was the
              building&apos;s maintenance director, was lowering the three
              flagpoles to half-staff. The US, NY City and World&apos;s Fair
              flags went halfway down and I saw this proud man crying as he did
              it. I left him alone.
            </p>

            <p>
              Inside the Administration Building, the bustle was gone.
              Secretaries, guards, Fair executives, press people, everyone,
              seemed dazed. More than a dozen people I heard say &quot;I just saw
              him...he was right here&quot; about the day, almost a year before,
              when JFK walked those halls. I just observed. But I came to that
              place for the very same reason. It was a way to try to touch
              something lost. I went to the darkened and quiet model room and
              looked at that Heliport model that seemed to so fascinate a
              President. The toy had lost a little magic for me but at the same
              time it seemed oddly more special because the President who was
              gone - had been there.
            </p>

            <p>
              Then I spotted Marion Ritz, Moses&apos; longtime personal
              secretary, who was telling the staff that Moses was &quot;closing
              the Fair (meaning the offices) and everyone should go home.&quot;
              This surprised the staffers who knew Moses did not want to waste a
              minute&apos;s worth of work to meet the Fair&apos;s deadline. I
              then saw Ann Petaine, Moses&apos; phone secretary, tearfully
              getting into her husband&apos;s car. She said, &quot;You know I
              never saw the boss cry before.&quot; and then she said
              &quot;Mr.Moses said it was just a cold he had. Just go home and be
              with your family.&quot; I think she was as unnerved at Moses&apos;
              emotion as she was over her own.
            </p>

            <p>
              The Administration Building was soon empty and dark with only a
              Pinkerton Guard at the lobby entrance. I found it hard to leave
              that place, but the guard said &quot;you better go home now
              kid.&quot; As I left I noticed the only sound was the beeping
              seconds of that countdown clock. While the world seemed to stand
              still, it was still counting away the days, hours, minutes and
              seconds to an April day -exactly five months away- when the great
              Fair would open. But without the man who had started that clock.
            </p>

            <p>Now I knew where to go. I walked back home.</p>

            <p className={styles.closingQuote}>
              &quot;Don&apos;t let it be forgot that once there was a spot for
              one brief, shining moment that was known as Camelot.&quot;
            </p>

            <figure className={styles.singleFigure}>
              <Image
                src="/images/perspective02/us25.jpg"
                alt="That boyish Kennedy grin"
                width={450}
                height={310}
                className={styles.singlePhoto}
                unoptimized
              />
            </figure>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/perspective01"
        explicitPrevious
        nextHref="/perspective03"
      />
    </>
  );
}
