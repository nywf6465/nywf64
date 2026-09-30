import type { Metadata } from "next";
import Image from "next/image";
import { FisherHero } from "@/components/FisherHero";
import { FisherNavChrome } from "@/components/FisherNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "../fisherEssay.module.css";

export const metadata: Metadata = {
  title: "New York World's Fair Memories (Page 2) — Albert Fisher — nywf64.com",
  description:
    "Albert Fisher's New York World's Fair memories, page 2 — from nywf64.com.",
};

/**
 * Albert Fisher essay page 2 (modeled on rm01):
 * Body from legacy fisher03.html, remapped to /fisher02.
 */
export default function Fisher02Page() {
  return (
    <>
      <FisherHero />

      <FisherNavChrome />

      <article className={styles.article} aria-labelledby="fisher02-title">
        <div className={styles.articleInner}>
          <header className={styles.titleBar}>
            <h1 id="fisher02-title" className={styles.titleBarMain}>
              <em>New York World&apos;s Fair Memories</em>
            </h1>
            <p className={styles.titleBarByline}>
              ... an essay by Albert Fisher (Page 2)
            </p>
          </header>

          <div className={styles.body}>
            <p>
              When I interviewed the famous conductor and composer Leonard Bernstein for my World&apos;s Fair radio series, I learned a hard lesson about preparedness. We met at the Top Of The Fair restaurant where he had just landed via helicopter from Manhattan. I made the awful mistake of beginning the interview by asking: &quot;Is it Leonard BernSTEEN ... or BernSTINE&quot;? He responded with a coldness that would freeze hot coffee on the spot: &quot;Bernstein&quot; he replied. From that moment on, the only responses I could get out of him were a short and curt &quot;yes&quot; and &quot;no.&quot; He was not happy with me and I was not prepared. I learned my lesson.
            </p>

            <p>
              Louis Armstrong was another thing altogether. We had lunch together at the Danish Pavilion where they had a great smorgasbord ... an assortment of dishes from all over Denmark. When &quot;Satchmo&quot; found out I was from New Orleans (his home town too), he treated me like a long lost relative. The fact that we had downed a considerable amount of the Danish liqueur Aquavit, did not hurt too. He regaled me with one great story after another about life in The Crescent City ... some of which made it onto my radio show, but most of which were far too ribald to ever repeat in mixed company. Added to this was his frequent trips out to the limousine where, I eventually learned, he kept a stash of marijuana. Our lunch went on for hours and we all consumed vast quantities of everything in sight!
            </p>

            <p>
              <em>Lucy Day at the Fair</em> was another major event in the first year of the New York World&apos;s Fair. A massive promotional tie-in had been done by the Fair Corporation and Bill Berns and John O&apos;Keefe in particular. Macy&apos;s and CBS were involved and about 100 press from all over the country were flown in for the day-long event. We had a big parade through the Fairgrounds which included the St. Lucy Band (there actually is such a group) from the St. Lucy High School in New Jersey. Every band member wore a bright red wig. Lucille Ball rode in the Fair&apos;s official white Cadillac convertible touring pre-arranged destinations throughout the grounds. Somehow, the notorious newspaper columnist Hedda Hopper, who was at one time one of the most powerful columnists in the world, managed to get into the convertible with Lucy. Hopper was known for wearing large outlandish wide-brimmed hats. Her hat not only kept poking Lucy in the eye, more important, Hedda Hopper was upstaging the star attraction. Lucy became angrier by the minute at Hopper&apos;s antics. After about a half-hour of this, the beloved TV star turned to me and startled me with a string of four-letter words that would truly make a sailor blush. She made it clear to me that if Hedda Hopper were not out of the car at the next stop, Lucy was prepared to call it quits and leave the Fair! We certainly were not going to let that happen, but at the same time, we did not want to anger Hopper to the point that she would write something negative in her column which was still read by millions. We arranged a &quot;special VIP private tour&quot; just for Hedda with her own guide. She felt that she was being singled out for her fame, popularity and power and being given a tour that not even Lucy was able to have. Problem solved. The evening ended with a grand dinner at the Spanish Pavilion restaurant and a stage show with the famous Spanish Flamenco Dancer Antonio Gades and his troupe. At the end of the night, Lucy got up on stage with Gades and did an impromptu Flamenco dance that was straight out of her classic wine stomping routine from the &quot;I Love Lucy&quot; series. Lucy Day at the Fair was probably one of the biggest success stories from a Public Relations and promotional standpoint in the first year of the Fair.
            </p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(26.2500rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher05.jpg"
                alt="Elsie the Cow Photograph"
                width={420}
                height={278}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>(l to r) Elsie, Albert Fisher</span>
                <span className={styles.capBody}>Taken outside the Kodak Pavilion in February, 1964 before the Fair opened. Note that the large panels on the Kodak Pavilion which held photographs are still blank.</span>
              </figcaption>
            </figure>

            <p>
              When the Fair came to a close for the first season in October of 1964, the Fair Corporation, and the Fair&apos;s President, Robert Moses, were under scrutiny and attack by the press. The Fair seemed a huge success, but attendance had not met expectations and there were financial problems. During the winter of &apos;64, with the Fair closed, it was almost impossible to get anybody excited about doing any positive TV shows on the Fair. But one person was willing ... and eager ... to do so. That was the great comic Jonathan Winters. He was doing a series of specials for NBC. Winters decided to do one of the specials from the Fair in December, 1964. The concept was that the BBC network in England was sending a reporter to cover the Fair, not knowing that the Fair was closed for the winter months. The reporter was played by Michael Bentyne, a member of the infamous &quot;Goon Gang&quot; which Peter Sellers had begun. In the tradition of &quot;the show must go on,&quot; the BBC reporter would still originate from the Fair, interviewing the few people who were still around in the snow-covered wilderness in Flushing Meadow. Every person Bentyne interviewed was a character created by and performed by Johnathan Winters. There was the oriental caretaker at the Hong Kong pavilion who dry cleaned your shirt while you went through the pavilion ... the guy who kept the Sinclair Dinosaurs warm with electric blankets ... and the richest man in the world. This was one of Winter&apos;s favorite characters. He portrayed this current day man who was so wealthy that he had his own pavilion called: &quot;The ME Pavilion.&quot; We used the courtyard and exterior of the Federal Pavilion for this purpose. The show was to be taped on a Thursday, edited on Friday and aired on the entire NBC network on Saturday. That Thursday morning, all of the NBC camera trucks, technicians, cast and, of course, Johnathan Winters descended on the Fairgrounds to begin shooting. Before even one shot was taken, we were informed that Robert Moses did not like Mr. Winters&apos; type of humor and did not find him at all funny. Further, Mr. Moses did not want Winters mocking &quot;his&quot; Fair. We were told to escort Winters and the NBC crew off the grounds. Our hands were tied. No amount of explaining what the ramifications of kicking a star of Winters&apos; stature and a network television crew off the grounds would do had any effect on Moses.
            </p>

            <p>
              Winters left. NBC left. And I was &quot;invited&quot; to leave. My stint with The New York World&apos;s Fair came to an abrupt end. That Saturday night on the entire NBC Television Network, the Johnathan Winters &quot;Special&quot; aired. Instead of a fun and lighthearted look at the Fair in the winter snows, Winters opened by telling his national audience what had taken place and then launching into a 5 minute tirade against the Fair and Robert Moses. What could have been a shot of positive publicity (when the Fair needed it most) turned out to be a disaster of negative proportions.
            </p>

            <p>
              For me, my friend Merv Griffin was waiting in the wings and I went right to work for his new TV series. But just before I went to work for Merv, my good friend Gil Cates asked me to co-produce the <em>&quot;Re-Opening Day Television Special&quot;</em> for ABC. That show starred Gordon and Sheila Mac Rae, trumpeter Al Hirt and The New Christy Minstrels. But to this day, my experiences with The New York World&apos;s Fair remain one of the great times of my life and has resulted in a collection of memorabilia from both New York Fairs which is ever growing. One of my prized items is the gold World&apos;s Fair official medallion, mounted on a wooden base with a gold plaque which reads: &quot;Robert Moses, President, The New York World&apos;s Fair.&quot; This medallion is from Mr. Moses&apos; desk. It is a constant reminder of the great times ... the sad times ... and the lifetime of memories granted me by my association with this amazing event in Flushing Meadow.
            </p>

            <p className={styles.divider}>* * *</p>

            <figure
              className={styles.figure}
              style={{ maxWidth: "min(15.0000rem, 100%)" }}
            >
              <Image
                src="/images/fisher/fisher08.jpg"
                alt="Albert Fisher & Emmy"
                width={240}
                height={288}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                <span className={styles.capTitle}>About Albert Fisher...</span>
              </figcaption>
            </figure>

            <p>
              Albert Fisher is an Emmy-winning seasoned television executive with creative credits from all four networks, most major syndicators, cable networks, as well as station groups. Fisher/Merlis Television, Inc. (which Fisher co-owns with George Merlis) has been responsible for creating and producing hundreds of half-hour shows as well as scores of one-hour &quot;specials&quot; for Discovery, Home and Garden Television, TLC, Travel, History, Animal Planet, The Science Channel and other networks. Their current hit series &quot;Flea Market Finds with the Kovels&quot; is one of the most popular programs on HGTV. They are currently in production on shows for Travel, Fine Living and Animal Planet. Fisher&apos;s latest special: &quot;Mars Rocks: The Geology Of The Red Planet&quot; will air beginning December 28th (2003) on Discovery&apos;s Science Channel. Fisher and Merlis were also executive producers, writers and producers for the nationally syndicated weekly series: &quot;Better Homes and Gardens Television&quot;. For their work on this series there were twice nominated and once awarded the national EMMY for &quot;Outstanding Service Show&quot; in a tie with &quot;Martha Stewart&apos;s Living&quot;. Some of FMTV&apos;s other recent programs include: &quot;Secrets of San Simeon with Patricia Hearst&quot; for Discovery&apos;s Travel Channel (holds the record as highest-rated program in the history of the network), &quot;The Harlem Hellfighters&quot;, for The History Channel, &quot;The Real Me&quot; series and a special: &quot;Willard Scott&apos;s Taste of Puerto Rico&quot; for The Good Life Network. With George Merlis, he has created and produced hundreds of programs and specials for The Home and Garden Network including &quot;Willard Scott&apos;s Home and Garden Almanac&quot;, &quot;Flea Market Finds with The Kovels&quot;, &quot;Kitty Bartholomew: You&apos;re Home&quot;, &quot;The Urban Gardener with Meshach Taylor&quot; and &quot;Ask Kitty&quot;. He has served as a Producer for the NBC-TV Network series: &quot;I Witness Video&quot; and the Fox Television Network news magazine series: &quot;Front Page&quot;. Previously, he has been associated with broadcast programs such as King World&apos;s &quot;Inside Edition&quot;, ABC&apos;s &quot;Home&quot;, Group W&apos;s &quot;The Merv Griffin Show&quot; and PBS&apos;s &quot;Lumina-Magazine For The Arts&quot;. He created the pilot for &quot;ABC&apos;s Wide World Of Entertainment&quot; and has functioned in various senior positions with broadcasters world-wide.
            </p>

            <p>
              His talent as a Producer/Director/Writer associated with films, television and multi-media events has garnered many international awards including film festivals in Cannes, New York, London, Chicago, Barcelona and Edinburgh as well as multiple EMMY awards and nominations. Mr. Fisher has also received awards from The American Bar Association, The International Film and Television Festival and the coveted Columbia School of Journalism&apos;s Alfred I. DuPont Award for the documentary: &quot;Whispering Hope: Unmasking The Mystery Of Alzheimers&quot;.
            </p>

            <p>
              As an Executive Producer with the NBC O&amp;O Division, Albert Fisher created, produced and directed numerous award-winning documentaries and public-affairs programs and specials. In this capacity, and his current role as a hands-on executive producer, he has spent time as an undercover inmate in The Ohio State Penitentiary, has flown in supersonic fighter aircraft, sailed international &quot;Tall Ships&quot; and has lived on the bottom of the Atlantic Ocean in a NASA underwater habitat. Just last month, Fisher became the 104th person to ever step foot on the youngest land formation on Earth, the island of Surtsey near the Arctic Circle off the coast of Iceland. This was part of a major television special about sites on Earth that are similar to the terrain of the planet Mars.
            </p>

            <p>
              Earlier, Mr. Fisher was Director of Television and Motion Pictures for the International World&apos;s Fairs in New York, Seattle and Montreal. He has been responsible for commercials, corporate videos and multi-media presentations for Fortune 500 giants such as Westinghouse, General Electric, E.R. Squibb &amp; Sons, American Airlines, Cartier Jewelers, etc. Albert Fisher lives in Los Angeles with his wife Ricka Fisher who is a producer of motion pictures for television and their daughter Hannah who will graduate from high school this coming June.
            </p>

            <p>
              Mr. Fisher would love to hear from anyone who has a comment about the article or the Fair. You can eMail him at <a href="mailto:AFisher423@aol.com?subject=www.nywf64.com Television Essay">AFisher423@aol.com</a>.
            </p>

            <p className={styles.webmaster}>
              Webmaster&apos;s note... I am <em>thrilled</em> to welcome Mr. Fisher to nywf64.com! The shows he produced for the Fair are legendary. It is such an honor to have him share his recollections of the time he spent with the Fair, for this website. Thank you, Mr. Fisher, for allowing us to see a part of the Fair we would never have otherwise known.
            </p>

            <p className={styles.signoff}>Bill Young</p>

            <p className={styles.signoff}>December, 2003</p>
          </div>

          <div className={styles.logoWrap}>
            <Image
              src="/images/about/nywf64-logo.gif"
              alt="nywf64.com"
              width={300}
              height={100}
              className={styles.logo}
              unoptimized
            />
          </div>
        </div>
      </article>

      <Nav2Bar previousHref="/fisher01" nextHref="/fisher02" hideOverview />
    </>
  );
}
