import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar07.module.css";

export const metadata: Metadata = {
  title: "Conclusion — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Conclusion — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

function Fn({ n }: { n: number }) {
  return (
    <Link href="/intpar08" className={styles.fn} aria-label={`Footnote ${n}`}>
      {n}
    </Link>
  );
}

/**
 * The Hunt for International Exhibitors — Conclusion.
 * Body from legacy intpar07.html (Page 7).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar07Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar07-title">
        <header className={styles.titleBar}>
          <h1 id="intpar07-title" className={styles.titleBarMain}>
            Conclusion
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar07/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>Conclusion</p>
          </header>
          <hr className={styles.rule} />

          <div className={styles.body}>
            <blockquote className={styles.pressQuote}>
              <em>{"\"Minister of External Affairs, Dr. John Karefa-Smart, has informed us that Sierra Leone, the newest nation, will participate.\""}</em>
            </blockquote>
            <blockquote className={styles.pressQuote}>
              <em>{"- Charles Poletti"}</em><Fn n={144} />
            </blockquote>
            <figure className={`${styles.figure} ${styles.figure350}`}>
              <Image
                src="/images/intpar07/intpar05.jpg"
                alt="Architectural model of the Sierra Leone Pavilion"
                width={350}
                height={155}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Architectural model of the Pavilion of Sierra Leone"}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Ancient wars, modern conflicts and American foreign policy all surfaced during the course of the New York World's Fair 1964-1965 and left their marks upon the make-up of the International Area. But there were still pavilions that did their part to bring "}<em>{"Peace Through Understanding"}</em>{" to the Fair. Perhaps the most impressive attendees in the International Area were a large number of new nations, recently liberated from colonialism in Africa, South Asia and the Middle East. The 1964 Fair was the first time many of these nations had a chance to exhibit themselves as a participant of the world of nations and not as a sideshow exhibit, as they had often been portrayed in fairs since the Victorian era. Without a major showing of Western European nations at this Fair because of the BIE regulations, developing nations captured the attention of the visitors to the International Area. For these nations, Peace Through Understanding was an ideal of the utmost importance - their very future depended upon it."}
            </p>
            <p>
              {"Nearly thirty African nations had exhibits at the Fair, twenty-three of which combined forces to create the African Village. Sierra Leone, Guinea, Sudan and Egypt managed to finance individual pavilions that became popular attractions, although Sierra Leone could not afford to return to the Fair in 1965. At the communal African Pavilion, according to the Fair's "}<em>{"Official Guide"}</em>{", were \"caged wild animals, an entertainment area where tribal groups demonstrate their skills and - a less primitive touch - a movie theater.\" Huts representing each nation were \"ancient in design but fashioned out of plastics and wood to suggest African's modern outlook.\""}<Fn n={145} />
            </p>
            <p>
              {"Amongst the Asian nations with colonial pasts were the Philippines, Malaysia and India. The future prime minister of India, Indira Gandhi, led a special committee for the India Pavilion. She gave a speech on the opening day of the Fair outlining her country's interests in the theme of the Fair."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"Our participation confirms our faith in the theme of this fair....Historically your theme is linked with its location, for we are in New York City, the home of the United Nations, the economic capital of a country which has through its programs…displayed a living and tangible belief in the human bonds which link its people with the people of the world. No country is entirely self-sufficient. No single economy can survive in isolation, or keep its dollars without taking and giving. It is therefore only with mutual help that we can preserve what we have and use it for the betterment of our lives. And it is only through interdependence that we can tread the path of peace, peace not in the passive sense - not the mere absence of war - but a dynamic, meaningful, and living peace that brings liberty, justice, and prosperity to all."}<Fn n={146} />
            </blockquote>
            <p>
              {"The India Pavilion's own theme was \"Progress in Democracy - Ancient Land, Young Nation.\" An advertisement for the pavilion described its exhibits in terms of a nation that, post-Independence, reveled in its national identity. Inside were \"glimpses of colour and pageantry that give Indian life a highly individual texture--the emerging new patterns as modern ideas take root--a peaceful economic revolution taking place in a democratic framework.\""}<Fn n={147} />{" The Fair gave India the opportunity to show the world the strides it had made since 1947 and the pride it had in its ancient culture."}
            </p>
            <p>
              {"The Philippines Pavilion was shaped like a salakot, a peaked sun hat. Filipino dancers performed traditional dances in an open-air theater, a far cry from an earlier presence of the Philippines at an American World's Fair in 1904. The St. Louis Louisiana Purchase Exposition of 1904 celebrated American expansionist dreams. The Philippines was a newly acquired American colonial property, and was represented in the amusement area with a giant Philippine reservation consisting of villages of four tribes of Filipinos going about their daily lives. Fair visitors could watch the Filipinos in their so-called natural environment and feel proud about the achievements of American imperialism. In addition, American schooling was provided to the tribesmen at the reservation."}<Fn n={148} />{" At the 1964 Fair, however, the Philippines was no longer an amusement; it was a participant nation in the \"Olympics of Progress.\""}
            </p>
            <p>
              {"It was the African pavilions that most impressed Fair planners because of the rapid increase of independent nations in a short amount of time leading to a rapid increase in potential participants in the Fair. \"You can walk through the African pavilion,\" said "}<em>{"Time"}</em>{", \"see Watusi dancers and royal Burundi drummers and have your eyes opened to dozens of nations you never knew existed, and a year or so ago you were right.\""}<Fn n={149} />{" The world held its breath as African states escaped from colonialism and became entangled in the Cold War during their first exercises in independent foreign policy. Their participation in an American fair was a positive sign for the United States and both Fair and pavilion planners recognized that. At Guinea's groundbreaking, Ambassador to the US Adarim Bangoura addressed the audience."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"Our wish, through our pavilion, is to set forth evidence of the national unity of Guinea in creative work, under the constant impulse of the initiative and imagination of our people. It will be our modest contribution to this great human endeavor to offer to the many visitors the results of the various activities of our country, produced in an atmosphere of total independence, thanks to our refound liberty. I am sure the Pavilion of Guinea will be, in view of this collaboration, attractive, lively and interesting; it will also contribute to strengthening the bonds of friendship and of cooperation between the Republic of Guinea and the United States."}
            </blockquote>
            <p>
              {"Replied Roberto DeMendoza, the Fair's Deputy Chief of Protocol, \"This Fair will serve not only to increase the understanding between the peoples of Guinea and of the United States, but also between all the peoples of Africa and of the United States.\""}<Fn n={150} />{" The very act of participating in the Fair brought these new unaligned nations one step closer to the US."}
            </p>
            <p>
              {"Robert Moses was glad for the business. At a press conference on African participation at the Fair, Moses said of the participants, \"Just what they will demonstrate, I don't know, but surely they will be able to show that their objectives are right, that their ambitions are correct, that they are willing to make tremendous sacrifices in the name of progress.\""}<Fn n={151} />{" One such sacrifice Moses referred to was the high cost of participation in the Fair. Still, Moses saw a greater value in their presence than revenue, and promised to help them make the most of their time at the Fair. In a Fair Progress Report, Moses wrote,"}
            </p>
            <blockquote className={styles.pressQuote}>
              {"We are giving much time and sympathetic consideration to the problems of the new nations, particularly those in Africa and the East, which are enormously proud and ambitious, but have slender resources, are hard pressed to establish permanent governments and have comparatively small sums to spend on a remote Fair. We point out to them that they cannot hope to rival the exhibits of General Motors, Ford and other great corporations, but that small, exquisite shows of native agriculture, arts and industries and natural resources quickly attract the attention of intelligent people. The inventor of the proverbial best mouse trap is not obscure for long. Word gets around fast and the world beats a path to his door."}<Fn n={152} />
            </blockquote>
            <p>
              {"Moses as a developer and a visionary recognized the potential of these nations beyond their participation in this Fair. Years later, he would offer Africa his services in the planning of possible fairs, and would write articles on the needs of post-colonial nations. Like his interest in urban planning in Jordan, his interest in Africa arose out of connections he made at the Fair. During the negotiation and planning periods of the Fair, and even during the Fair itself, the hopes for Africa were high, from the perspective of Moses and the Fair, the United States and the world. For African nations, Peace Through Understanding was invoked with the most vigor, although sadly, nation-making proved to be more difficult in the world at large. In an article he wrote for "}<em>{"Newsday"}</em>{" in 1966, Moses reflected on a problem during the Fair that summoned the painful reality of Africa's post-colonial situation. \"The magnificent tall Watusi dancers we expected at the fair were a year late in arriving, in the course of which thousands were massacred by their newly emancipated neighbors. We were lucky to get 28 of the survivors.\""}<Fn n={153} />
            </p>
            <p>
              {"Surprisingly, or maybe not surprisingly at all, the Fair's theme best surfaced in areas of the Fair that were unrelated to world politics and foreign policy. Parker Pen's exhibit aimed for \"the launching of a million international friendships\" by generating computerized pen pal matches from around the world for visitors to the Pavilion."}<Fn n={154} />{" One of the most popular attractions at the Fair was a ride in the Pepsi-Cola Pavilion in the Industrial Area called \"It's a Small World - A Salute to UNICEF.\" Pepsi's boat ride brought visitors around the world, while they watched 350 animatronic dolls designed by Walt Disney \"sing an original tune about the cohesion of the peoples of the world that,\" according to "}<em>{"Time"}</em>{", \"might have been composed by Wendell Willkie.\""}<Fn n={155} />{" \"There's so much that we share, it is time we're aware, it's a small world after all,\" went the unforgettable song. The ride's success was so popular that it was immortalized by its move to Disney's amusement park a few years later, where the song still plays today."}
            </p>
            <p>
              {"Another major success was the Johnson's Wax Pavilion's film, "}<em>{"To Be Alive"}</em>{". Johnson's Wax told the filmmakers, Francis Thompson and Alexander Hammid, to make a film having to do with Peace Through Understanding. Thompson reflected, \"Should a film devoted to "}<em>{"Peace Through Understanding"}</em>{" try to approach head-on such obvious and painful stumbling-blocks as war, overpopulation and the rise of nationalism?\""}<Fn n={156} />{" He decided against it, and instead chose to make a film celebrating the joy of living that went on to win the 1965 Academy Award for Best Short Documentary. The film featured images of people around the world engaging in activities of their daily lives. \"They grow up, fall in love, work, play and grow old, demonstrating that 'men everywhere share at the deepest level the same drives, dreams, foibles.'\""}<Fn n={157} />{" It was a film \"of surpassing excellence about the universalities of human experience,\" wrote "}<em>{"Time"}</em>{"."}<Fn n={158} />{" According to the "}<em>{"New York Times"}</em>{", \"The film had an euphoric quality that sent its viewers back onto the fairgrounds happier people.\""}<Fn n={159} />
            </p>
            <figure className={`${styles.figure} ${styles.figure200}`}>
              <Image
                src="/images/intpar07/unisph198.jpg"
                alt="Unisphere under construction"
                width={200}
                height={150}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Unisphere: The Fair's symbol of Peace Through Understanding, under construction in 1963."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"In some exhibits, the Fair succeeded in putting forward the idea that war and strife were unwelcome features of the world when such a fantastic world of peace and brotherhood was possible. Such exhibits, however, were rarely those in the International Area. They were mostly exhibits of American corporations, suggesting that consumerism, more than cultural exchange, was the path to peace. What led to the failure of the International Area to bring about "}<em>{"Peace Through Understanding"}</em>{"? The Fair began with apolitical intentions, which, it was thought, would advance the theme. It was a non-governmental venture, and it remained that way as far as funding and leadership were concerned. But it was not immune to the influence of the American government, especially the International Area. At times it was instructed to act on behalf of the government. At times it was affected by the diplomatic actions of the government. Other times the Fair actually assumed the role of the government in its own dealings with foreign nations. Over the course of planning and negotiations, the Fair actually shared the intentions of American foreign policy. The IAE conducted its business with the agenda of the American way - the belief in democracy, free-enterprise and freedom. It was, inevitably, a political fair. Moses and his staff, tried as they might, had little power over the International Area. They could not control the events that took place, the exhibits that were built, the fights that ensued and the knowledge of the world that visitors took away with them when they left. Fair planners naively thought that a slogan could overcome the politics, the power and the economic problems of the world, but at the New York World's Fair of 1964-1965, there were limits on "}<em>{"Peace Through Understanding"}</em>{"."}
            </p>
          </div>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar06"
        explicitPrevious
        nextHref="/intpar08"
        hideOverview
      />
    </>
  );
}
