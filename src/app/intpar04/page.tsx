import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar04.module.css";

export const metadata: Metadata = {
  title: "The Soviet Union and the Fair — The Hunt for International Exhibitors — nywf64.com",
  description:
    "The Soviet Union and the Fair — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

function Fn({ n }: { n: number }) {
  return (
    <Link href="/intpar08" className={styles.fn} aria-label={`Footnote ${n}`}>
      {n}
    </Link>
  );
}

/**
 * The Hunt for International Exhibitors — The Soviet Union and the Fair.
 * Body from legacy intpar04.html (Page 4).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar04Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar04-title">
        <header className={styles.titleBar}>
          <h1 id="intpar04-title" className={styles.titleBarMain}>
            The Soviet Union and the Fair
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar04/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>The Soviet Union and the Fair</p>
          </header>
          <hr className={styles.rule} />

          <div className={styles.body}>
            <p>
              {"The Soviet Union was the first nation to receive an invitation to the New York World's Fair, and was one of the first nations to accept, leaving plenty of time for complications to arise before 1964. From the earliest planning stages of the Fair, the Soviet Union expressed eagerness to participate, and the Fair expressed eagerness to have them. Before New York was even officially selected by President Eisenhower as the 1964 Fair site, Mayor Wagner verbally invited the Soviet Union to participate."}<Fn n={40} />{" When Premier Nikita Khrushchev visited Washington in 1960, Fair officials attempted to arrange a meeting with him at the fairgrounds. Khrushchev's busy schedule wouldn't allow him time for a tour of the grounds, but his interest was peaked, and soon after, he sent a delegation to the Fair to discuss participation. In late August of 1960, the Soviet ambassador to the United States, Mikhail A. Menshikov, accepted the invitation for participation in the Fair and offered one in return to the 1967 Fair in Moscow \"on the basis of reciprocity.\""}<Fn n={41} />{" For the next two years, the issue of reciprocity would be a hurdle that a Soviet Pavilion and the New York World's Fair would struggle with, and eventually fail to surmount."}
            </p>
            <p>
              {"Soviet participation promised benefits for all sides. The Soviet Union would have a chance not only to propagandize to Americans but also to take advantage of the heaps of international attention the Fair was expected to receive. It could show off its advances in technology and culture on the soil of its greatest rival. The Fair stood to gain as well; it would benefit by the interest of the press and the public about a Soviet exhibit, as well as the revenue brought in by what would most likely be a large and expensive pavilion. The Soviet Union displaying itself in America alongside democratic capitalist nations of the world would act as a living demonstration of the Fair's theme, "}<em>{"Peace Through Understanding"}</em>{". Direct and healthy competition by the world's largest and most dangerous opponents would provide a dramatic backdrop for the pavilions of the small and unaligned nations expected at the Fair. And with the hope that a Soviet pavilion would pale next to a magnificent United States pavilion, democratic ideals and those who held them would have a chance to shine at this Fair of the Atomic Age."}
            </p>
            <p>
              {"The Soviet Union did not have an easy time of joining the fun. Because of multiple restrictions on trade and cultural exchange between the US and the USSR, a variety of technicalities needed to be ironed out before any agreements could be signed. Both countries relied on the principle of reciprocity to govern their interactions since the escalation of the Cold War in the 1950s. Additionally, massive tariffs on the import of Soviet items to the United States contributed to the problems the pavilion faced in getting off the ground. The Soviet Union planned on building one of the largest and most expensive pavilions of the Fair, and the planners' frequent requests to breach Fair construction standards were problematic enough. It became more complicated because everything had to go through the US State Department bureaucracy. And as a member of the BIE, the Soviet Union had to find a convenient way of participating without jeopardizing its own upcoming Fair."}
            </p>
            <figure className={`${styles.figure} ${styles.figure220}`}>
              <Image
                src="/images/intpar04/intpar12.jpg"
                alt="Site Map - USSR Pavilion"
                width={220}
                height={242}
                className={`${styles.photo} ${styles.photoNoBorder}`}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"The site would eventually be awarded to Spain."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Still, with all the challenges facing a Soviet Pavilion, the International Division clung to its dream of raking in the Rubles in 1964. Moses agreed to allow the Soviet Union to purchase nearly 30,000 square feet of land over the maximum limit for all other pavilions. To circumvent the BIE ruling, the USSR's All-Union Chamber of Commerce was the official sponsor of the pavilion, and M.V. Nesterov, the President of the Chamber of Commerce, would be managing the pavilion. The Fair frequently acted as host to Nesterov and Soviet architects, working closely with the State Department to arrange for their Visas to the United States. Even with the Fair's contacts in the State Department, however, all activity between the Fair and the Soviet Pavilion planners was scrutinized and highly regulated by the United States government."}
            </p>
            <p>
              {"On many occasions when foreign delegations or heads of state paid a visit to the Fairgrounds to discuss participation, Robert Moses would arrange a tour of one of his other projects - the Power Project at Niagara Falls. When Nesterov came to the Fair in February of 1962 to sign the Agreement of Participation, the International Division tried to send him to Niagara to butter him up, but the State Department refused Nesterov and his team permission to leave Queens. \"The whole matter, of course, is in reciprocation for Soviet limitations on the travel of Americans in the USSR,\" wrote Gates Davison of the IAE \"and is part of the 'Cold War' in which we got caught.\""}<Fn n={42} />
            </p>
            <p>
              {"Whether as a punishment or as a reward, reciprocity pervaded all of the dealings between the Soviet Union and the United States at this time. The invitation to the Moscow Fair in exchange for the invitation to the New York Fair came out of the cultural exchange regulations between the two countries in the early 1960s. What looked like a friendly offer was in actuality a necessary transaction. The Soviet Union needed the United States to participate in its upcoming fair in order to make back some of the $20 million it was projected to spend in New York, and the United States needed to participate in the Moscow Fair in order to have its chance to trumpet its ideals on enemy territory."}
            </p>
            <figure className={`${styles.figure} ${styles.figure250}`}>
              <Image
                src="/images/intpar04/intpar04.jpg"
                alt="Nesterov signs Fair Agreement"
                width={250}
                height={196}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"A delegation from the USSR, headed by President of the All-Union Chamber of Commerce completed negotiations for a large site on March 2, 1962, at the World's Fair Headquarters. The USSR exhibition would embrace exhibits of several of the USSR republics. (left to right) Robert Moses; M. V. Nesterov, President, All-Union Chamber of Commerce, USSR; V. A. Vladimirsky, Chief, Cultural Section Ministry of Foreign Trade, USSR"}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Soviet participation was contingent upon American acceptance of their invitation to Moscow. A provision in the Soviets' Agreement of Participation with the New York Fair, signed on March 2, 1962, stated that the Agreement would \"have no force and effect, unless, within sixty days after the signing of this Agreement, a letter…expressing United States intent to participate in the International Exhibition in Moscow in 1967 is received from the United States Department of State.\""}<Fn n={43} />{" In order for the State Department to make such a declaration, Congress would first have to receive a formal invitation and then make a decision on whether or not to appropriate money towards a pavilion in Moscow. The New York Fair could not get away with sweet-talking the Soviet delegation into buying a plot for a pavilion in New York; external governmental forces were involved. Robert Moses saw the danger in leaving the negotiations to bureaucrats other than himself, and pulled whatever strings he could with his contacts in the government. He wrote to Secretary of State Dean Rusk stressing the Catch-22 he felt the Fair had fallen into, arguing that until a study of appropriations for the 1967 Fair is done, \"we are unable to conclude arrangements with this nation and its satellites.\""}<Fn n={44} />
            </p>
            <p>
              {"Mention of Russia's satellites was one more problem that made the State Department uneasy. The State Department wanted control over exactly what would be shown in a Soviet Pavilion, and it notified Charles Poletti that the USSR Pavilion could not have special sections devoted to the Baltic States without being \"in contravention with Government policy.\""}<Fn n={45} />{" Such restrictions outwardly defied Moses's own judgment calls in the negotiations with the Soviet Union. His approval of the Pavilion's request for 78,000 square feet was in acknowledgment that it would provide space to represent each of its 15 republics. \"Governor Poletti… has been asked by Washington for information and assurances regarding the USSR exhibit which we do not have,\" Moses later wrote to the Secretary of State. \"We cannot dictate to the USSR what it shall do in its pavilion.\""}<Fn n={46} />{" Moses's power as the sole censor and his attempts to keep the Fair out of politics dwindled when up against the Federal Government's Cold War policies."}
            </p>
            <p>
              {"Negotiations for participation took a new turn in April of 1962, when the Soviet Union announced that it would be calling off the 1967 Moscow Fair. The April 14th issue of "}<em>{"Pravda"}</em>{" gave the reason for the cancellation as a conflict with the New York Fair \"which allegedly would face participants with a difficult choice\" and would cause both Fairs' exhibits to be \"generally similar.\" The American Embassy in Moscow attributed the cancellation, however, to the major investments the Soviet Union would have to make in construction of new facilities and fairgrounds that it simply could not afford."}<Fn n={47} />
            </p>
            <p>
              {"Now it was the United States' turn to demand reciprocity of participation. The State Department sent a note to the Soviet Embassy in Washington on April 27th proposing a US national exhibit be held in Leningrad and Moscow \"at a mutually agreeable time and for a period equivalent to that of the Soviet exhibit at the New York World's Fair.\""}<Fn n={48} />{" Nesterov, on the other hand, suggested merely removing the provision for reciprocity from the Agreement of Participation entirely. Such a move would have been unthinkable for the United States government, which had been trying since World War II to outdo the Soviet Union at World's Fairs. At the Brussels Universal Exposition of 1958, the first fair after the War, the Soviet Pavilion boasted of the nation's strides in science and technology, especially its space program and the success of Sputnik. The neighboring American Pavilion focused more on popular culture, advertising and mass consumption. Allegedly, the Eisenhower administration was unsatisfied with the American presence in Brussels, despite the fact that the pavilion was used as an intelligence-gathering outpost for information about the USSR and Iron Curtain nations."}<Fn n={49} />{" In 1959, the US and the USSR traded national expositions, and Seattle's Century 21 Exposition of 1962 was used as another chance for America to make up for Brussels and show the world its advances in science. Without a 1967 Fair in Moscow or another exhibition, the United States could not justifiably allow the Soviet Union to propagandize on American soil."}<Fn n={50} />
            </p>
            <p>
              {"While the State Department's note to the Soviet Embassy did not give pavilion planners an ultimatum, it \"strongly implied\" that the Soviets would be barred from exhibiting in New York in 1964 without such an agreement."}<Fn n={51} />{" Additionally, the Soviet Union was faced with \"discriminatory customs treatment\" regarding items they wished to import for construction purposes and to sell at the Fair. The IAE was working with the State Department to create legislation to protect the Soviet Pavilion from tariffs normally applied to its imports. For the Fair, the Soviet Union hoped to be boosted to \"Most Favored Nation\" status, but as time went on, the State Department let on that it would not concede to the wishes of the Soviet Pavilion."}<Fn n={52} />
            </p>
            <p>
              {"Still, the Soviet Union enjoyed the possibility of negotiation that other Communist nations were not afforded. President Kennedy forbade the Fair from inviting the People's Republic of China. Cuba, North Korea and East Germany were never even considered for an invitation. Allen Beach of the IAE explained that the Fair could \"only invite those nations of the world that have diplomatic relations with the United States or are members of the United Nations and we are bound by the policy of our US Department of State to follow this course.\""}<Fn n={53} />
            </p>
            <p>
              {"By this token, all negotiations were pretty much out of the hands of the Fair. The Soviet Embassy responded to the State Department's exhibition request on June 28th in a letter that was not shared with the Fair for several months."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"If the Department of State changes the previous conditions of inviting the Soviet Union to participate…, now making this participation conditional upon the United States being extended the opportunity of conducting a US National Exhibition…, then the Soviet Union will be forced to re-examine the question of its ability to participate in the New York Fair."}<Fn n={54} />
            </blockquote>
            <p>
              {"According to the "}<em>{"New York Times"}</em>{", the Soviet Union was allegedly \"reluctant\" to welcome another American exhibition after the one staged in 1959."}<Fn n={55} />
            </p>
            <p>
              {"The State Department did not respond to the Soviets' June 28th message, and the Fair proceeded over the next few months to work with pavilion planners as usual. Then on September 29th, Moses received a telegram from Nesterov:"}
            </p>
            <blockquote className={styles.pressQuote}>
              {"After getting acquainted with the note of the Department of State of April 28…and also on motives stated in the reply note… [the All-Union Chamber of Commerce] does not see possibility of taking part in the World Fair in New York…and considers that in the circumstances the agreement concluded on March 2…has lost its force."}<Fn n={56} />
            </blockquote>
            <p>
              {"Moses's attempts to keep his largest customer drove him into an angry dispute with the State Department. \"This is obviously a most serious matter involving considerations way beyond the Fair,\" Moses wrote to Secretary Rusk shortly after receiving Nesterov's cable. \"I gather that the USSR people have been increasingly irritated about diplomatic requirements.\""}<Fn n={57} />{" Moses wrote to Secretary Rusk again the next day, running through the timeline of letters and agreements amongst the Soviet Embassy, the State Department and the Fair. Moses emphasized the Fair's distance from the reciprocity negotiations and shared his opinion that the State Department's correspondence with the Soviet Embassy was \"ill-advised.\" \"We make no pretense of authoritative or even fully informed opinion on this critical subject. We simply present the issue as it is thrust upon us and urge an end to irritating bargaining about future suppositious and problematical fairs in Russia,\" wrote Moses."}<Fn n={58} />
            </p>
            <p>
              {"Assistant Secretary of State William Tyler responded to Moses on October 2, refraining from all responsibility for Soviet withdrawal from the Fair, considering it to be a \"contractual matter between the All-Union Chamber of Commerce and the New York World's Fair Corporation in which the Department of State is not directly involved.\" Tyler provided copies of all the notes exchanged between the two nations regarding the Fair, and held fast that the Department never set preconditions on Soviet participation. Moses clung to the possibility that it was all a misunderstanding that could be resolved, and even planned to send Poletti to Moscow in pursuit of a reconsideration. His trip was canceled, however, due to the Cuban Missile Crisis."}
            </p>
            <p>
              {"There were many theories about who was to blame for the Soviet Union's withdrawal from the Fair. Some agreed with Moses that the State Department was at fault. The "}<em>{"New York Mirror"}</em>{" wrote that the \"fourth floor\" of the State Department was the culprit, referring to the \"men who are always there and who ball everything up.\" \"Maybe while we insist that nobody can do business with Soviet Russia, the Russians will ask how anyone can do business with an American outfit if the State Department's 'fourth floor' is going to butt in all the time and get everything so mixed up that nobody can tell in advance if an agreement is an agreement.\""}<Fn n={59} />
            </p>
            <p>
              {"Some felt that the Soviet Union was actually dropping out to hide its financial difficulties. Assistant Secretary Tyler held this view. \"In reality, we believe that the Soviet authorities… are using this reference to alleged US insistence on reciprocity as a mere excuse to cover the Soviet breach of faith to the New York World's Fair Corporation.\""}<Fn n={60} />{" The "}<em>{"Daily News"}</em>{" wrote, \"Our own hunch is that Khrushchev is hard up and getting more so, what with his efforts to peddle Communism around the world, and just doesn't want to spend that $20 million on a New York Fair exhibit.\""}<Fn n={61} />
            </p>
            <p>
              {"James Hurd of the State Department's Bureau of Public Affairs informed the Fair that an unnamed Soviet official attributed the cancellation on the Soviet Government's seven-year and twenty-year plans, in which \"non-essentials must be removed and the decision to withdraw…was due to economics.\""}<Fn n={62} />{" According to this theory, a chance for a massive propaganda campaign in the United States over the course of two years was considered nonessential for the future of the Soviet Union."}
            </p>
            <p>
              {"Still others, like the "}<em>{"New York Post"}</em>{", blamed Robert Moses's \"stylized richness and texture of his language\" for driving the Soviets away from the Fair."}<Fn n={63} />{" The Journal American blamed the Soviet Union itself. \"It is a disappointment that after all these years in dealing with the Russians, any Americans should be innocent enough to accept an official Soviet version of anything.\""}<Fn n={64} />{" The most fascinating take on the debacle came from the "}<em>{"New Yorker"}</em>{"."}
            </p>
            <blockquote className={styles.pressQuote}>
              {"One thing, though, is perfectly clear: At the beginning, Russia was for reciprocity and the United States was dubious about it, and at the end the USSR was against reciprocity and the United States was strongly for it. No matter what their initial positions, the two sides inexorably moved, as if by natural law, to opposite poles relative to each other. The one condition their relationship apparently could not tolerate was, precisely, agreement."}<Fn n={65} />
            </blockquote>
            <p>
              {"Finally Poletti was granted permission to go to Moscow in December 1962. Over the course of eight days he met with several officials of the Soviet government to discuss the withdrawal of the Soviet Pavilion. \"The Government of the USSR came to the conclusion that the Department of State really did not desire Soviet participation,\" Poletti recapped. \"While the government appreciated that the World's Fair Corporation was desirous of Soviet participation, the government of the USSR, nonetheless, entertained considerable apprehension as to what might or might not occur if the Department of State is antagonistic to participation.\""}<Fn n={66} />{" Poletti held to this view upon reflection years later. For Robert Moses's book "}<em>{"Dangerous Trade"}</em>{", Poletti wrote, \"In my opinion, the State Department was never anxious to have a USSR pavilion at the Fair. Perhaps it was afraid of the propaganda value, which was so much nonsense….Result: Millions of Americans were deprived of the chance of learning more about the USSR. Is that Progress?\" The State Department never commented.\""}<Fn n={67} />
            </p>
            <p>
              {"Robert Moses admitted that he never knew the real reason for the withdrawal of the Soviet Pavilion. \"We are often asked why the USSR dropped out of the Fair after so much effort and apparent goodwill… Frankly, I don't know,\" wrote Moses in one of the Fair's official progress reports."}<Fn n={68} />{" Writing to a Queens College student, Moses reflected that \"it may be that they were angry at our State Department or that it was all part of the hemisphere Cuban business…In any event, the Fair can get along nicely without them.\""}<Fn n={69} />{" He expressed some regret at their absence, however, based on the principles which he infused into the Fair. In his opening day essay for the "}<em>{"New York Times"}</em>{", Moses wrote, \"It is too bad they and their Iron Curtain satellites will not participate because we welcome and do not fear competition and counted on the development of friendships based on sportsmanship in the Olympic tradition.\""}<Fn n={70} />{" Moses had hoped, whether innocently or arrogantly, to bring two Cold War adversaries to his fairgrounds in order to vindicate the theme of the Fair. But he had not accounted for the extensiveness of national security or the complications of the bureaucracy involved in such a venture."}
            </p>
            <p>
              {"All through 1963 and even into 1964, the Fair continued to make clear its commitment to Peace Through Understanding and its desire to have a Soviet presence, in any capacity, at the Fair. For the 1965 season, the Fair hoped to recover some of its losses and spark new interest for visitors by having Russia take up space in one of the abandoned pavilions near the lake in the amusement area. The reluctance of the Soviet Union to take part in the Fair continued, however, and by October of 1965, this Cold War Fair ended without the hoped-for representation and opportunity for propaganda and comparison."}
            </p>
          </div>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar03"
        explicitPrevious
        nextHref="/intpar05"
        hideOverview
      />
    </>
  );
}
