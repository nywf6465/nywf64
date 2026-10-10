import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar05.module.css";

export const metadata: Metadata = {
  title: "Where Pagodas and Minarets . . . — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Where Pagodas and Minarets . . . — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

function Fn({ n }: { n: number }) {
  return (
    <Link href="/intpar08" className={styles.fn} aria-label={`Footnote ${n}`}>
      {n}
    </Link>
  );
}

/**
 * The Hunt for International Exhibitors — Where Pagodas and Minarets . . .
 * Body from legacy intpar05.html (Page 5).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar05Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar05-title">
        <header className={styles.titleBar}>
          <h1 id="intpar05-title" className={styles.titleBarMain}>
            Where Pagodas and Minarets . . .
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar05/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>
              &quot;Where Pagodas and Minarets of the Ancient East Stand Side
              by Side with the Towers of the Modern West&quot;
              <Fn n={71} />:
            </p>
            <p className={styles.chapterSubtitle}>
              The Physical Layout of the Fair
            </p>
          </header>
          <hr className={styles.rule} />

          <div className={styles.body}>
            <p>
              {"At the New York World's Fair 1939-1940, the United States and the Soviet Union found themselves involved in a space race. \"Having the tallest building at the fair is apparently important to the national egos of leading world powers,\" wrote the New York Times, and both nations vied for the title of biggest exhibitor at the Fair. The Soviet Union's pavilion originally beat out the United States and all other nations with the tallest structure at 188 feet. To recoup, two flagpoles with the Stars and Stripes were erected a little higher than the Soviet building. In response, the Soviets planned to erect a statue of Stalin atop their pavilion, but the Fair would not allow it. Instead, the Soviets put up a statue of a worker, whom many thought resembled Stalin, adding an additional 75 feet to the top of the pavilion and bringing it to a grand total of 267 feet. The United States then added an American flag to the top of the parachute jump, boosting America to 270 feet in the air, putting the Soviet Union in its place and winning the space race."}<Fn n={72} />{" The quest for architectural dominance at the 1964 Fair was not expected to proceed any differently than in 1939, especially with increased tension between the United States and the Soviet Union. In fact, many foreign exhibitors' pavilions and much of the Fair's landscape were affected by the political climate of the early sixties."}
            </p>
            <p>
              {"The Soviet Union's plan for a 78,000 square-foot pavilion, more than a third larger than the maximum limit for any pavilion at the Fair, was expected to be a major focal point of the 1964 Fair, so much so that it intimidated other Eastern bloc countries from participating. William A. Crawford, American Minister in Romania, wrote to the State Department regarding Romania's refusal of participation: \"The Soviet Union itself plans to put on a tremendous show at New York… and anything the other bloc states decided to undertake would presumably pale by comparison. In effect, the Soviets…have determined to monopolize the bloc show.\" Indeed, even Poland, which had been indicating for some time that it would participate in the Fair, dropped out for this reason."}<Fn n={73} />
            </p>
            <p>
              {"The prospect of another huge Soviet building inspired US planners. \"You can be very well assured that in 1964 Russia will not have the highest building at the fair,\" said one US Fair official."}<Fn n={74} />{" But with a delay in Congress on appropriations for a Federal Pavilion combined with a nationwide lack of support for the Fair, the hope of beating the Soviets in 1964 was in peril. Senator Jacob Javits used the Soviet aspirations to dominate the Fair as a way of pressing for Congressional action on the funds for a United States Pavilion. Javits spoke on the floor of Congress in 1962."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"By our own inability to get our own planning for a US pavilion off the ground, we are virtually giving the Soviet Union a head start in preparing its exhibit to be seen by millions of Fair visitors from all over the world. With only twenty months remaining for the opening of the Fair, it may be impossible to overcome such a lead if we do not act promptly….There may be some red faces if the World's Fair opens in April 1964 with a Soviet pavilion ready for visitors, and a US pavilion still under construction.…The responsibility will rest with us here in the Congress, and with the unfortunate and embarrassing differences now pending between these two bodies on appropriations. I believe this is just one example of the consequences caused by the current logjam - and probably one of the worst…"}<Fn n={75} />
            </blockquote>
            <p>
              {"Robert Moses was not pleased with the use of the Fair as a mechanism in Javits' political agenda. Javits took on the Fair as a personal crusade towards ironing out appropriations controversies in Congress, and as a New York senator he often adopted the Fair as his own example of working towards "}<em>{"Peace Through Understanding"}</em>{" and a lovable New York. Moses worked hard to keep the Fair out of internal US politics when those politics belonged to people or groups over which he had little power. The State Department was one group that he did not like to rely on for favors if possible, and politicians were another. Javits' help only hurt Moses's ego. Moses publicly argued with Javits' speech and even complimented Federal Pavilion planners on the progress they were making."}<Fn n={76} />{" Still Javits was able to make waves in Congress as an advocate of a Federal Pavilion. Although the Soviet Union dropped out of the Fair shortly afterward, the Federal Pavilion's funding had been secured and space reserved to make it the largest pavilion of the Fair."}
            </p>
            <p>
              {"Politics not only affected the size of pavilions; it also affected the actual placement of pavilions. The first Asian country to sign up for the Fair was Indonesia, responding only four days after receiving the invitation. According to the Announcement of the Information Minister, \"The participation of Indonesia…is in the course of the realization of the ideals of the Indonesian Revolution in the international field with the purpose for concluding good friendships between the Republic of Indonesia and all world nations….\""}<Fn n={77} />{" President Sukarno requested that his pavilion be \"dramatically placed\" between those of the United States and the Soviet Union, to represent Indonesia's neutrality in the Cold War."}<Fn n={78} />{" For six months, Indonesia rejected site offers for their failure to be equidistant enough to suit his neutral sentiments."}<Fn n={79} />{" Finally Sukarno, who came to the US to meet with President Kennedy on behalf of the Belgrade conference of non-aligned nations, visited the Fairgrounds to select the location of the pavilion. Sukarno chose a 40,000 square foot plot, and Indonesia became the first nation to formally conclude leasing arrangements with the Fair."}<Fn n={80} />
            </p>
            <figure className={`${styles.figure} ${styles.figure350}`}>
              <Image
                src="/images/intpar05/intpar06.jpg"
                alt="Architectural rendering of Indonesia Pavilion"
                width={350}
                height={184}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Architectural rendering of the Pavilion of Indonesia"}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Indonesia's Pavilion had a political focus, reflecting a \"desire for creating a synthesis between Western and Eastern ideologies.\" It sought to give one an \"impression of what Indonesia regards as its active and independent foreign policy.\""}<Fn n={81} />{" Sukarno hand-selected the female guides for the Indonesian Pavilion, advising them not to \"wiggle\" like French or American girls, but to \"be Indonesian girls in every one of [their] actions.\""}<Fn n={82} />{" For Sukarno, the Indonesia Pavilion's purpose was to function as an expression of post-colonial independence of nation, ideology and spirit."}
            </p>
            <p>
              {"Besides choosing the Indonesian girls for the Pavilion, Sukarno devoted considerable time to planning the Pavilion itself. He was a painter, an art enthusiast and a jewel collector, and he put together displays of his personal items for the Fair. Sukarno was also an engineer, and actually helped plan the design of the building. His aides recalled that many times they would approach him with a matter of importance \"and find him so intent on his blueprints for the Fair pavilion that they could scarcely get his attention.\""}<Fn n={83} />{" Unfortunately, Sukarno would never see the final product in person."}
            </p>
            <p>
              {"Outside of the Fair, the cordiality of relations between the United States and Indonesia began to deteriorate. The IAE designated May 16, 1964 as \"Indonesia Day.\" Sukarno had been invited to attend the festivities, but Washington advised him that American sentiments towards him were hostile after Indonesia had made attacks on American foreign policy. Sukarno announced he would not be attending the Fair, giving as his reason the \"Current Malaysia-Indonesia Dispute.\" He sent a deputy in his place."}<Fn n={84} />
            </p>
            <p>
              {"Although Indonesia withdrew from the United Nations in January of 1965, Sukarno indicated that Indonesia would continue to exhibit at the Fair for the second season. By February of that year, however, the prospect was looking slim. Several offenses to the United States in Indonesia, including attacks on US Information Agency libraries, the boycotting of American ships, and a slew of \"anti-American Communist outrages\" prompted the Johnson Administration to threaten action against Indonesia. One penalty Johnson considered was shutting down Indonesia's Fair pavilion, to demonstrate \"that the US won't be pushed around.\""}<Fn n={85} />
            </p>
            <p>
              {"On March 11, Sukarno made an official announcement of withdrawal from the Fair for the 1965 season. His action was a protest against American support of the \"neo-colonialist project of Malaysia.\" The United States had given a $4 million credit to Malaysia for weapons, an action that, Sukarno said, mocked the theme of the Fair."}<Fn n={86} />{" The Fair seized the Pavilion and barred any Indonesian officials from entering the Fairgrounds. The manager of the Indonesian exhibit, S. Haditirto, was disturbed by the sudden cold shoulder from the Fair Corporation. \"I do not understand,\" he said. \"It seems that an iron curtain has suddenly descended between us and the Fair Corporation.\""}<Fn n={87} />{" For the entire second season of the Fair, the Indonesia Pavilion stood barricaded and vacant."}
            </p>
            <figure className={`${styles.figure} ${styles.figure225}`}>
              <Image
                src="/images/intpar05/intpar11.jpg"
                alt="Indonesia Pavilion entrance"
                width={225}
                height={308}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"This photograph of the Indonesia Pavilion appeared in the 1965 Official Souvenir Book of the Fair. However, the pavilion remained closed; the entrance guarded and padlocked during the 1965 Season."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Exactly one year after Sukarno pulled his country out of the Fair, he lost his presidency to a US-backed anti-Communist military general. Sukarno spent the rest of his life in house arrest. Indonesia, the first country to join the Fair, descended into a thirty-year period marked by censorship, genocide and corruption under the new President Suharto."}<Fn n={88} />{" The neutrality that had been so important in the initial negotiations between Indonesia and the Fair was all but lost."}
            </p>
            <p>
              {"West Berlin also had a specific request for placement at the Fairgrounds. The Fair invited the City of West Berlin to participate in the Fair independent of the invitation to West Germany. West Berlin was the only city that was offered an invitation, and the Fair felt it deserved one \"because of its significance and special status…as an outpost of the free world.\""}<Fn n={89} />
            </p>
            <p>
              {"Germany did not have its own pavilion at the Fair because as a member of the BIE, the regulations against its participation proved to be too difficult for the nation to bypass. Industries and corporations in Germany did not have the motivation to come together behind a pavilion at the Fair."}<Fn n={90} />{" West Berlin, however, purchased a plot of 10,000 feet for a small pavilion. The site chosen by planners was on a traffic island next to the United States Pavilion, literally in the shadow of its protector. The island was initially designated for landscaping, but the Fair and West Berlin came to a compromise and assigned the pavilion to a small plot just across the street from the island and a stone's throw from the United States."}<Fn n={91} />
            </p>
            <p>
              {"West Berlin's Pavilion was designed to reflect the city's encirclement by Communist East Germany. The Pavilion was topped with a flexible plastic dome and the entrance was covered by a free-flowing awning. The building was then surrounded by a concrete wall. Inside, the exhibits, including contemporary artwork, films about technology and daily life in West Berlin, and showcases of products made there, represented the \"industry, cultural heritage and future of Germany's free world outpost.\""}<Fn n={92} />
            </p>
            <p>
              {"Other pavilions in the International Area of the Fair used their exhibits to express their solidarity with American capitalist ideals or their hope to foster closer ties with the United States. Sweden, for instance, used its pavilion to trumpet its commitment to industry and business. The "}<em>{"Swedish Pavilion News"}</em>{", a handout from the Fair, made this point."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"When you think of Sweden, think of one of the world's most expert and successful practitioners of free enterprise. That's one of the key messages sponsors of the Swedish Pavilion at the New York World's Fair hope to get across to the millions of visitors to Flushing Meadow in 1964 and 1965. They cite facts to correct the impressions of those who mistakenly picture Sweden as excessively oriented toward statism or \"welfare-ism.\""}
            </blockquote>
            <p>
              {"The ground floor of the pavilion was dominated by a miniature version of Sweden's most popular ode to free-enterprise, the profitable Nordiska Kompaniet department store. "}<Fn n={93} />
            </p>
            <p>
              {"Japan's Pavilion \"emphasizes the difference between the new Japan and the old.\" It had a historical exhibit about the changes in Japan since U.S. Commodore Matthew Perry \"opened the nation to trade with the West.\" Items on display included space rockets and a replica of the world's largest tanker. Items for sale included color televisions and motorcycles. To represent the \"old Japan,\" the pavilion offered demonstrations of floral arrangements, which, \"side by side with some of the world's most advanced microscopes, cameras, automobiles and industrial machines are charming evidences of the quiet, cultured but totally nonindustrial Japan of only 100 years ago.\""}<Fn n={94} />
            </p>
            <figure className={`${styles.figure} ${styles.figure295}`}>
              <Image
                src="/images/intpar05/intpar18.jpg"
                alt="Architectural Model Pavilion of Spain"
                width={295}
                height={132}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Architectural model of the Pavilion of Spain. The Spanish International Pavilion occupied the site formerly allotted to the USSR.."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Spain's Pavilion was one of the most successful at the Fair, \"the unquestioned hit,\" according to the "}<em>{"New York Times"}</em>{". It had an extensive contemporary art collection, and was officially sponsored by Generalissimo Franco's regime. Negotiations for displays in the pavilion had to be conducted with Franco himself, something that the US State Department was wary of. Under no circumstances was the Fair allowed to invite Franco to the US to visit his pavilion. Said a review in "}<em>{"Time"}</em>{", \"Spain, bidding for new status in the conversation of international trade, has spared no expense to shine at its national best.\""}<Fn n={95} />{" Bruce Nicholson, the IAE liaison to Spain, recollects in his memoir that \"among the reasons Franco had allowed the Spanish Pavilion to happen at all was the political one. He wanted closer ties to the United States.\""}<Fn n={96} />
            </p>
            <p>
              {"Another popular pavilion was that of the Nationalist China. The People's Republic of China was not invited to the Fair, but Taiwan purchased a large plot and used it to represent the arts and history of both Taiwan and mainland China, as well as the economic history of Taiwan in recent years. At China's groundbreaking, Poletti spoke. \"We know that your country is the bastion of freedom and liberty in a part of the world that is very precarious, and we feel that your presence in the International Area of the World's Fair in 1964 and 1965 will serve to cement and strengthen the friendship between the people of your country and the people of the United States.\""}<Fn n={97} />
            </p>
            <p>
              {"An interesting inclusion in the International Area of the Fair was the Hall of Free Enterprise. Sponsored by the American Economic Foundation, the Hall of Free Enterprise's purpose was to explain through its exhibits \"the simple economic facts of life to millions of people throughout the world, people who either have had no instruction in basic economic principles or are victims of false propaganda.\" On the day of the pavilion's groundbreaking, Poletti spoke to an audience of Fair officials and economists."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"We are delighted to have the Hall of Free Enterprise in the International Area, because we feel the message that this pavilion has to convey is a message that ought to be heralded throughout the world; it certainly shouldn't be restricted to our own nation. We know that we cannot foist our preferred system on other countries, nonetheless we want to do a lot of boasting and a lot of proclaiming of the advantages and benefits of our system of free enterprise."}
            </blockquote>
            <figure className={`${styles.figure} ${styles.figure350}`}>
              <Image
                src="/images/intpar05/intpar10.jpg"
                alt="Architectural rendering Hall of Free Enterprise"
                width={350}
                height={192}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Architectural rendering of the Hall of Free Enterprise"}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"The pavilion was a one-story steel and concrete structure, its front porch aligned by the ten pillars of economic wisdom, topped by the pavilion's slogan - \"The Greatest Good for the Greatest Number.\" Inside, a three-dimensional animated wall panel displayed money flowing through transparent tubes, while in the theater in the round a production dramatized \"bread and butter issues\" regarding production and consumption. The pavilion also offered two-week economics seminars for credit towards a Masters degree."}
            </p>
            <p>
              {"The pavilion that was most pivotal in representing the ideals of the Fair, which were not so far from American principles, was the United States Pavilion, a $17 million mammoth of a building 330 feet in length. At the groundbreaking for the United States Pavilion, President Kennedy spoke of the purpose of such an exhibit at the World's Fair."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"This is going to be a chance for us in 1964 to show 70 million visitors - not only our countrymen here in the United States, but people from all over the world - what kind of people we are….I want the people of the world to visit this Fair and all the various exhibits of our American industrial companies and the foreign companies, who are most welcome, and to come to the American exhibit - the exhibit of the United States - and see what we have accomplished through a system of freedom."}<Fn n={98} />
            </blockquote>
            <p>
              {"The theme of the glittering square-donut pavilion was America's \"Challenge to Greatness.\" Inside were two large exhibit halls, one devoted to the \"Challenge of Freedom,\" the other devoted to the \"Challenge of a Peaceful World.\" The first exhibit presented the advantages and the problems of technological progress for American society. The second hall depicted America's role in international affairs. On the second floor, a ride drove visitors past movie screens featuring moments from American history. \"The narration is straight from "}<em>{"This is Your Life"}</em>{", styled in the second person singular,\" went a review in "}<em>{"Time"}</em>{", \"telling each and every American that "}<em>{"you"}</em>{" tamed the wilderness, then "}<em>{"you"}</em>{" invented the electric light, and "}<em>{"you"}</em>{" are now assaulting the universe.\""}<Fn n={99} />
            </p>
            <figure className={`${styles.figure} ${styles.figure400}`}>
              <Image
                src="/images/intpar05/us35.jpg"
                alt="United States Pavilion"
                width={400}
                height={265}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Pavilion of the United States, New York World's Fair 1964/1965"}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"The United States pavilion had supreme dominance over all other pavilions at the Fair as far as size (it had a plot of more than 100,000 square feet larger than the next largest pavilion's site) and location (it was located at the end of the main road radiating from the Unisphere, symbol of the Fair's theme, "}<em>{"Peace Through Understanding"}</em>{")."}<Fn n={100} />{" Without the presence of the Soviet Union or any Communist nations at the Fair, nor any physical rival whatsoever, the United States had no need to worry about any symbolic challenge from another nation at the Fair."}
            </p>
          </div>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar04"
        explicitPrevious
        nextHref="/intpar06"
        hideOverview
      />
    </>
  );
}
