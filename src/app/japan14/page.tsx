import type { Metadata } from "next";
import Image from "next/image";
import { JapanNavChrome } from "@/components/JapanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./japan14.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "Stone Crazy: A World's Fair Legacy / A World's Fair Mystery — Japan — nywf64.com",
  description:
    "Stone Crazy — Masayuki Nagare's Japan Pavilion stone wall legacy and mystery — nywf64.com.",
};

/**
 * Stone Crazy essay — body from legacy japan14.html.
 * Legacy wording and typos preserved (quary, antognism, demoliton, iin, outdside, pavillion).
 */
export default function Japan14Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Japan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/japanoverview/hero-banner.jpg"
            alt="Japan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JapanNavChrome />

      <article className={styles.article} aria-labelledby="japan14-title">
        <header className={styles.titleBar}>
          <h1 id="japan14-title" className={styles.titleBarMain}>
            <em>
              Stone Crazy: A World&apos;s Fair Legacy / A World&apos;s Fair
              Mystery
            </em>
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.sectionHead}>
            <em>Stone Crazy</em>
          </h2>
          <p className={styles.source}>
            Source: Official Website, Masayuki Nagare
          </p>
          <figure className={`${styles.figure} ${styles.figureNarrow}`}>
            <Image
              src="/images/japan14/japan05.jpg"
              alt="Masayuki Nagare timeline"
              width={159}
              height={261}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <div className={styles.timelineRow}>
            <p className={styles.year}>1959</p>
            <p className={styles.body}>Nagare visits Shikoku Island for the first time and learns about the Aji stone quary.</p>
          </div>
          <div className={styles.timelineRow}>
            <p className={styles.year}>1962</p>
            <p className={styles.body}>In the effort of changing the hopeless living condition of Aji&apos;s young stoneworkers, he establishes &quot;Sekisho Juku&quot;, a stoneworkers&apos; group, and helps them improve their social condition. He receives a commission to do a wall sculpture for the Japanese Pavilion at the 1964 New York World&apos;s Fair.</p>
          </div>
          <div className={styles.timelineRow}>
            <p className={styles.year}>1963</p>
            <p className={styles.body}>He and &quot;Sekisho Juku&quot; members arrive in New York with 2500 stones weighing 600 tons and begins to create Stone Crazy for the Japanese Pavilion. The work is constantly disrupted by local labor unions who protest the importation of Japanese workers. Only after the New York Times writes about their traumatic situation do they receive full cooperation from the American workers and gradually their antognism turns into friendship.</p>
          </div>
          <div className={styles.timelineRow}>
            <p className={styles.year}>1964</p>
            <p className={styles.body}>In March, he completes Stone Crazy. This castle wall-like structure is singled out as the best at the Fair and he receives international recognition as one of the world&apos;s leading sculptors. The triumph of Nagare and &quot;Sekisho Juku&quot; members brings fame and honor to Aji quary.</p>
          </div>

          <p className={styles.source}>
            Source: Wikipedia, the free encyclopedia
          </p>
          <div className={styles.wikiPanel}>
          <p className={styles.wikiBody}>
            Nagare&apos;s art is strongly influenced by Shintoism, Zen Buddhism, and traditional Japanese martial arts. His principal stone-carving techniques include warehada (&quot;cracked skin&quot; or &quot;broken texture&quot;), in which the surface is left rough, with visible chisel marks, and shinogi awase (&quot;ridges joined together&quot;), which describes the meeting of two highly polished surfaces. Some of his works exhibit the contrast between the two techniques. His sculptures&apos; clean lines often follow the subtle curvature of Japanese swords.
          </p>
          </div>

          <p className={styles.source}>
            Source: View Master, International Area Packet A 673, Reel Two
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan08.jpg"
              alt="Geisha dance in front of Stone Crazy wall"
              width={600}
              height={519}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Geisha Dance and Music in front of <em>Stone Crazy</em> sculptured
              wall of the Pavilion of Japan
            </figcaption>
          </figure>

          <p className={styles.source}>
            Source: New York Times, October 13, 1965
          </p>
          <h3 className={styles.subHead}>
            Japan Giving Fair Pavilion to Manhattanville College
          </h3>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan09.jpg"
              alt="Section of the sculptured wall donated to Manhattanville College"
              width={600}
              height={412}
              className={styles.figureArt}
              unoptimized
            />
            <figcaption className={styles.caption}>
              Section of the sculptured wall surrounding the Japan Pavilion at
              the fair that has been donated to Manhattanville College. Stone
              abstraction was designed by Masayuki Nagare.
            </figcaption>
          </figure>
          <p className={styles.body}>
            The Japan Pavilion at the World&apos;s Fair is to be donated to Manhattanville College of the Sacred Heart in Purchase, N.Y.
          </p>
          <p className={styles.body}>
            The building is considered to be an outstanding example of Japanese architecture. It will be presented formally to the college by officials of the Japan Trade Center, organizer of the pavilion, on behalf of the Japanese Government at a ceremony next Tuesday.
          </p>
          <p className={styles.body}>
            Mother E. M. O&apos;Byrne, president of the college, said Japan&apos;s gift to Manhattanville could not have been announced at a more significant moment.
          </p>
          <p className={styles.body}>
            She explained that through a grant from the United States Government, the college expanded its program of Asian studies this fall by offering instruction in the Japanese language.
          </p>
          <p className={styles.body}>
            The pavilion will serve as a language and Asian studies center at Manhattanville. Young people from the United States and many other nations will study there, Mother O&apos;Byrne observed and added: &quot;This, in itself, will establish a basis of understanding and friendship which will enrich the lives of all of these.&quot;
          </p>
          <p className={styles.body}>
            The stone wall of the Japan Pavilion is said to be the first stone-sculpture wall ever erected in this country. To introduce this traditional architectural art to Japan and to create interest in the use of stones for modern architecture in this country, Masayuki Nagare, Japanese sculptor, designed the entire wall of lava rock, brought specially from Japan. Seven skilled Japanese artisans underwent special training in Mr. Nagare&apos;s studio for the job of constructing the wall, which weighs 600 tons and is composed of 6,000 sculptured stones. The artisans were brought to the fair specifically for the construction work.
          </p>
          <p className={styles.source}>
            Source: nywf64.com, Submission by Mr. John Brennan, May 8, 2002
          </p>
          <p className={styles.body}>
            Mr. John Brennan was involved with the demoliton of the Japanese Pavilion and prepared the stones of the beautiful Japanese Wall to be transported to Manhattanville College in Purchase, NY. Mr. Brennan writes:
          </p>          <p className={styles.body}>
            The Japanese Pavilion at the Fair was a square in its outline. The exterior walls were made of concrete. These walls sloped inward and were about 20 feet high. It was as if it were to become a pyramid, but it was a pyramid that was cut off when it reached some 20 feet in height. When these concrete walls were done, the plans called for a facade, made of lava stones, to be laid up on the outside faces of these sloping walls.These stones were dark in color, almost a black. They varied in size but had a varying thickness of about eight inches, as I remember them. They each could be carried by one man.They were to be set about one inch from the outside faces of the walls. The one inch space between the walls and the stones was to be filled with mortar. This method of building the facing material onto an existing wall was a technique well known in Japan but not so in the United States. It required, after the stones were set in place, that the joints between them be stuffed with rags to prevent leakage of the mortar. The high strength mortar (5000 P.S.I., I believe) was then mixed and carefully ladled into the space behind the stones. The rags were left iin place until the mortar had become solid. This procedure was carried out by workmen who had been brought in from Japan for the purpose. In order for them to work, it was necessary to get the approval of the Bricklayers&apos; union in New York, which had jurisdiction of the work there. A deal was struck and the Japanese workers were approved. I do not know the details of that deal. When the rags were removed from between the joints, the visible parts of the lava stones were not stained and the mortar itself was at least one inch inwards of the surface of the stones. There were also carvings made in the lava stones. These carvings extended over many stones and each one had a special meaning. I am not sure what those meanings were, but they would have been significant to a knowledgeable person I think, but am not sure, that these carvings were made after the stones had been set. For example, there was a carving of the sun in its course through the sky. This carving was 20 or more feet in length. It would, I think, have been impossible to make this meaningful carving before the stones were laid up.
          </p>
          <p className={styles.body}>
            Another part of the gift to Manhattanville College was the stones and the sculpture that the designers of the pavillion had used in the decorative gardens outside the building itself. The placement of these garden stones and sculptures was a consideration of great importance. The sculptures in this portion of the gift were made by a very well-known Japanese sculptor by the name of Noguchi.
          </p>
          <p className={styles.body}>
            When the time came for me to deliver on my promise to transport both the lava stones and the garden stones and sculptures, we had to think of the best way we could preserve the stones without damaging them too much in the process. The garden stones and sculptures did not present a problem since they were not fixed in place and could be readily gotten at. The lava stones, however, were another matter. They were affixed to the building with 5000 P.S.I. mortar. I probably do not remember, nor will I try to tell, all the alternative ways we considered, but I do remember what we did. First we painted on each stone a serial number which would identify where it had been set in the wall. Then we hired a photographer who was to take pictures of each outdside face of the wall. These photographs were to show the numbers on each stone and would preserve a record of the carving in the stones. We then hired a crane with a wrecking ball. The crane would swing the ball and hit the inside of the wall and thereby &quot;pop&quot; the lava stones off the outside face. This worked well enough and the stones along with the photographs were delivered to the college. Where exactly the stones were located on the campus I do not know. The photographs, no doubt, were given to the administration up there.
          </p>
          <p className={styles.source}>
            Source: The World&apos;s Fair Community Bulletin Board, Submission by
            Mr. Gary Holmes, October 13, 2003
          </p>
          <p className={styles.body}>
            In October of 2003, World&apos;s Fair Historian Gary Holmes travelled to Manhattanville College in search of the Stone Crazy stones. He wrote:
          </p>          <p className={styles.body}>
            I recently visited Manhattanville College in Purchase, NY. As many of you know, not only was there an article in the NY times in 1965 about Japan donating their Pavilion to Manhattanville, but we had a recent post on PTU from one of the fellows who helped take down and number the rocks from the pavilion so they could be reassembled at the college. After literally years of saying I was going to search this mystery out, I actually did it.
          </p>
          <p className={styles.body}>
            My quest started one weekend this past summer, when I happened to have business near the college and went over during a break. The campus is heavily secured and they weren&apos;t letting anyone in. Luckily, I had my NY Times article with me and the guards let me go into the main security office. They couldn&apos;t help me, it being a weekend, but I took this as an opportunity to take a total auto tour of the place. Alas, nothing jumped out that even remotely suggested the Japan Pavilion. I left hoping that on a subsequent visit, I would find that perhaps the rocks formed, if not a building, at least a wall inside one of the buildings.
          </p>
          <p className={styles.body}>
            Jump cut to last week. I finally called the library at Manhattanville and asked them if I could come do some research about the building and its present whereabouts. I was pleasantly surprised to find a research librarian who was glad to do all the research for me and find out as much as she could and then give me a call.
          </p>
          <p className={styles.body}>
            This past Tuesday, the call came! The news was good and bad. First, the building was never reconstructed but many of the stones, she believed, were put in the garden surrounding the house of the president of the college. The building, according to the records she found, was just too complex for what the college wanted and they gave up on the idea, but only after the structure had been delivered. All the stones from the building were put in what she called &quot;South Field&quot;, now a soccer/sports field. Other than the stones placed around the garden, she could not find out whether the rest of the stones were taken away, or now rest under the soccer field. Nothing is known of the steel/space frame structure that formed the interior of the building.
          </p>
          <p className={styles.body}>
            Two days ago, I went to Manhattanville and the librarian graciously took me to the garden and also pointed out where the &quot;South Field&quot; was.
          </p>
          <p className={styles.body}>
            I took pictures of the rocks. Two are ornamental and look like they may have come from the entranceway. There are several that are quite large and thick. I don&apos;t know if these were part of the wall or whether they were large stone bases for sculptures or something.
          </p>
          <p className={styles.source}>
            Source: Above photos presented courtesy Gary Holmes Collection and
            are © Copyright 2017 Gary Holmes, All Rights Reserved
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan11.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={600}
              height={412}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan10.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={600}
              height={396}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan12.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={600}
              height={389}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan13.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={600}
              height={406}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan14.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={600}
              height={393}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan15.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={400}
              height={270}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan16.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={400}
              height={279}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan18.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={400}
              height={268}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan19.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={400}
              height={274}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan17.jpg"
              alt="Manhattanville College stones from the Japan Pavilion"
              width={400}
              height={273}
              className={styles.figureArt}
              unoptimized
            />
          </figure>

          <p className={styles.source}>
            Source: Calendar of Spring 2017 Events brochure, Manhattanville
            College, PDF from Internet. Photo, Google Maps Aerial View of
            Manhattanville College.
          </p>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan42.jpg"
              alt="Manhattanville College walking map"
              width={600}
              height={259}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={`${styles.figure} ${styles.figureNarrow}`}>
            <Image
              src="/images/japan14/japan40.jpg"
              alt="Japan Pavilion Sculpture Garden listing"
              width={300}
              height={495}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <p className={styles.body}>
            9. Japan Pavilion Sculpture Garden
          </p>
          <p className={styles.body}>
            Now a part of a sculpture garden in front of the Barbara Knowles Debs house, the pavilion is made up of specially designed lava stones from the Japan Pavilion at the 1964 New York World&apos;s Fair. The pavilion, originally a gift from Japan to the College, was supposed to be an enclosure for an academic building, but it could not be rebuilt without destroying the fragile stones. Instead, as many stones as possible were salvaged and used in a decorative manner.
          </p>
          <p className={styles.caption}>
            (Right) Japan Pavilion Stone, Sculpture Garden, Manhattanville
            College (Wikipedia Photo). (Below) Aerial view from Google Maps
            showing the circled area from the Walking Map, the location of the
            Japan Pavilion Sculpture Garden
          </p>
          <figure className={`${styles.figure} ${styles.figureNarrow}`}>
            <Image
              src="/images/japan14/japan43.jpg"
              alt="Japan Pavilion stone at Manhattanville College"
              width={300}
              height={225}
              className={styles.figureArt}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image
              src="/images/japan14/japan41.jpg"
              alt="Aerial view of Manhattanville College sculpture garden area"
              width={600}
              height={444}
              className={styles.figureArt}
              unoptimized
            />
          </figure>

          <h2 className={styles.sectionHead}>
            <em>Stone Crazy</em>
          </h2>
          <h3 className={styles.mysteryHead}>A WORLD&apos;S FAIR MYSTERY</h3>
          <p className={styles.body}>
            It&apos;s a World&apos;s Fair Legacy and a World&apos;s Fair mystery ... do a majority of the stones from Masayuki Nagare&apos;s Stone Crazy Japanese Wall lie buried beneath the playing fields of Manhattanville College? What condition might those buried stones be in if one could uncover them today? What might they be worth considering they are a part of famed stone sculptor Nagare&apos;s major work for the 1964/1965 World&apos;s Fair? Mr. Brennan reported in 2002 that the stones were &quot;popped&quot; off of the mortar holding them in place on the pavilion, carefully numbered and then transported to the college for re-assembly. Manhattanville College states in their brochure that the stones were unable to be reassembled without damage and &quot;as many as possible&quot; were salvaged and used in the decorative garden outside the College President&apos;s home.
          </p>
          <p className={styles.body}>
            The New York Times reported in 1965 that the stones numbered 6,000 while Nagare&apos;s website numbers the stones at 2,500. Regardless the count, from the Google aerial photograph it appears as though thousands of stones do not grace the Manhattanville College grounds and Gary Holmes photographs show only a few stones in place. Were more stones added subsequent to 2003 when Mr. Holmes shot the photographs? Or are thousands of stones still resting beneath the ground somewhere at Manhattanville College?
          </p>
          <p className={styles.body}>
            And another mystery to ponder ... Mr. Brennan thought the stones on the wall were about 8 inches thick yet most of the stones pictured in Mr. Holmes&apos; photos appear much thicker than 8 inches. Are the stones in the garden actually from the wall or are they from other stones salvaged from the pavilion that would be more appropriate to a garden setting than the thinner stones of the wall?
          </p>
          <p className={styles.body}>
            It has been speculated that the Underground World Home exhibit might still lie buried beneath Flushing Meadows Park awaiting its discovery as buried World&apos;s Fair treasure. Perhaps the surest buried World&apos;s Fair treasure lies beneath the soccer grounds of Manhattanville&apos;s &quot;South Field.&quot;
          </p>
          <p className={styles.signoff}>nywf64.com</p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/japan13"
        explicitPrevious
        overviewHref="/japanoverview"
        nextHref="/japanoverview"
      />
    </>
  );
}
