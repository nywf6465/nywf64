import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar03.module.css";

export const metadata: Metadata = {
  title: "A Slight Diplomatic Problem — The Hunt for International Exhibitors — nywf64.com",
  description:
    "A Slight Diplomatic Problem — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

function Fn({ n }: { n: number }) {
  return (
    <Link href="/intpar08" className={styles.fn} aria-label={`Footnote ${n}`}>
      {n}
    </Link>
  );
}

/**
 * The Hunt for International Exhibitors — A Slight Diplomatic Problem.
 * Body from legacy intpar03.html (Page 3).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar03Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar03-title">
        <header className={styles.titleBar}>
          <h1 id="intpar03-title" className={styles.titleBarMain}>
            A Slight Diplomatic Problem
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar03/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>
              A &quot;Slight Diplomatic Problem&quot;:
            </p>
            <p className={styles.chapterSubtitle}>Looking for Federal and</p>
            <p className={styles.chapterSubtitle}>International Support</p>
            <p className={styles.chapterSubtitle}>for the</p>
            <p className={styles.chapterSubtitle}>New York World&apos;s Fair</p>
          </header>
          <hr className={styles.rule} />

          <div className={styles.body}>
            <p>
              {"The World's Fair of 1964-1965 was not an official fair. The International Exhibitions Bureau (BIE), an organization governing worldwide fair scheduling and participation rules, did not approve New York's bid for several reasons. First, it was not directly organized by the government, but was rather a private non-profit corporation that was established with government approval and without government funding. Second, it planned to charge rent for foreign governments' pavilions in violation of BIE guidelines. Third, its run was planned to last longer than six months, which was the maximum time allowed by BIE rules. Finally, it would be occurring within two years of the last American World's Fair (Seattle, 1962), again running afoul of guidelines that required ten year intervals between fairs in a particular country."}
            </p>
            <p>
              {"These guidelines were put together at a diplomatic convention of thirty-two nations held in 1928 in Paris. Since the 1851 Crystal Palace Exhibition in London, Western nations tried to emulate the accomplishment with fairs of their own. As each successive fair strove to outdo its predecessors, the Western world was inundated with creative attempts at exhibiting industrial and artistic progress in each nation. The initiative by fair organizers in Western Europe to regulate the frequency of the fairs and the rights of exhibitors led to the Paris Convention of 1928, which established the Bureau International des Expositions."}
            </p>
            <p>
              {"The United States was not involved in the 1928 Convention nor did it become a member of the BIE. Joining would involve a Senate resolution and the signing of a treaty by the President. Without popular interest, these measures would be quite difficult to obtain, and since World War I, the US was wary of international treaties. Besides, fairs in the United States had historically been produced by private, government-appointed commissions. The first American fair, New York's Crystal Palace of 1853, was modeled after the 1851 London Fair. London's Crystal Palace had been a government venture, as were most subsequent European fairs. The plans for the New York Fair, on the other hand, were initiated by an auctioneer from Massachusetts and a group of New Yorkers, including New York Tribune editor Horace Greeley. The group managed to get a lease from the city for the space that is today Bryant Park, but that was the extent of government support for the Crystal Palace. Due to the divisive national political climate in the 1850s, there was Southern opposition to funding the New York event. The Fair was a financial and inspirational failure, although it did establish the procedure for the private organization of American fairs."}<Fn n={16} />
            </p>
            <p>
              {"Government antipathy towards fairs still lingered in 1959, when New York was chosen by President Eisenhower as the next American fair site. By August of that year, New York Fair officials were foreshadowing the possibility of a conflict with the BIE. Thomas J. Deegan, the chairman of the World's Fair Corporation, regarded the opposition to New York's rule-breaking a \"slight diplomatic problem.\""}<Fn n={17} />{" He flew to Paris in October, shortly after the announcement that New York would be the site of the next American fair, but considered his visit to the BIE merely a \"courtesy gesture.\""}<Fn n={18} />
            </p>
            <figure className={`${styles.figure} ${styles.figure150}`}>
              <Image
                src="/images/intpar03/prebui08.jpg"
                alt="Thomas J. Deegan, Jr."
                width={150}
                height={163}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Thomas J. Deegan, Jr., chairman of the Fair's executive committee."}
              </figcaption>
            </figure>
            <p>
              {"Seattle's 1962 Century 21 Exposition was also organized by a government-commissioned private enterprise, and both Seattle and New York organizers were well aware of the advantages BIE recognition had to offer, even to non-member states, such as the automatic endorsement of thirty mostly Western European nations. Seattle's planners, though, chose to follow the rules laid out by the BIE closely. The Fair was scheduled to run for just six months, and it provided rent-free pavilions to foreign nations. Organizers of the New York Fair felt, on the other hand, that abiding by the BIE's rules would be impossible. \"The Fair must continue two years to justify the huge investments amounting to $700 million, to accommodate the numbers anticipated, and to provide sound financing.\" Nor could the Fair afford to give away \"a huge amount of free space.\" According to Deegan, BIE approval was \"desirable but not necessary.\" The New York World's Fair was determined to run its own show."}<Fn n={19} />
            </p>
            <p>
              {"On November 8, 1960 both the Seattle and New York proposals were considered by the BIE in Paris. Twenty-seven of the thirty member nations were present and the President, Leon Barety, presided over the meeting. The Classification Committee of the BIE approved the Century 21 Exposition, and then discussed the New York World's Fair at length. The issue was brought to a vote. Twenty-three countries' delegations voted against endorsement of the New York World's Fair and four abstained, including the USSR. The BIE's subsequent press release stated:"}
            </p>
            <blockquote className={styles.pressQuote}>
              {"After examining several projects of international fairs currently contemplated in various countries, the Council has decided to give the members of the Bureau a favorable advice for their participation at the International Exposition of second category in Seattle 1962. This decision excludes all possibility of participation by a country member of the Bureau in another exposition in the American zone during the period of time described by Article 4 of the Convention of 1928."}<Fn n={20} />
            </blockquote>
            <p>
              {"Seattle was the victor, and New York was left to its own devices."}
            </p>
            <figure className={`${styles.figure} ${styles.figure350}`}>
              <Image
                src="/images/intpar03/intpar16.jpg"
                alt="Advertisement, 1962 Seattle World's Fair"
                width={350}
                height={351}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Seattle was the victor, receiving the official blessings of the BIE to host the American World's Fair of the 1960s."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Genevieve Marechal, the Director of the BIE, said afterward that the plans submitted to the BIE about the New York Fair were \"exceedingly skimpy,\" while Seattle's plans were detailed and met all BIE conditions. The ruling, said Marechal, was irreversible despite whatever pressure she expected Washington might place upon the BIE. Seattle's organizers, however, were \"jubilant,\" because with BIE approval, they did not need to worry about New York's Fair overshadowing their own.\""}<Fn n={21} />
            </p>
            <p>
              {"Without the support of the BIE, member nations were barred from participating in the New York Fair. This meant that New York organizers had to mobilize to find private sponsors who could gain government approval within these nations. Pitched as a marketing tool and a chance to capitalize on an event of an international scale for organizations and industries, the Fair did appeal to some groups in countries such as France, Sweden and Switzerland. But representation from some nations was glaringly missing, including Great Britain, Canada, and Italy."}
            </p>
            <p>
              {"American public opinion was divided on the issue. Some called for the United States to consider membership in the Bureau in hopes of amending Bureau protocol either for this Fair or at least for future US fairs. Others suggested adjusting the goals of the Fair so that it would act as an international university, which they felt would surely receive endorsement by the Bureau. Newspapers reported that Fair officials had appealed to President Kennedy to use his influence to persuade first the BIE and then BIE member nations into participating in the Fair."}<Fn n={22} />
            </p>
            <p>
              {"Officially, the World's Fair Corporation presented itself as unconcerned with the matter of the Bureau's ruling. However, it worked hard to ignore what was obviously an embarrassment, or was completely antagonistic towards the BIE. In training materials for the visiting teams of the IAE, the spokesmen were instructed not to bring up the current BIE resolution with foreign governments, but that if the matter did come up, to refer to the undeterred success of the 1939 Fair \"with many foreign nations participating without the bureau's approval.\""}<Fn n={23} />{" The Fair also wanted to dispel any possibility of having the US join the BIE. In a press release ten days after the vote, the Fair stated, \"Aside from the absurdity of operating a Fair here under control and direction from a Bureau in Paris, there is no sentiment here at this time for joining treaty organizations of this sort, and a debate on this subject would surely do nothing to promote peace and harmony.\" "}<Fn n={24} />
            </p>
            <p>
              {"While the Fair with Moses at its head was content to turn its nose up at the BIE, what the public did not know was that the Fair had been involved in quiet negotiations with the BIE for US membership since the beginning of Fair planning mid-1959. On Deegan's first trip to Paris to meet with the BIE, he was accompanied by the Ad-hoc Inter-Departmental Committee to Review the Subject of US Accession to the 1928 Convention. The Committee consisted of members of the Department of Commerce, Department of State, and the US Information Agency. The BIE had been trying to get the US to join the Convention since 1939 when New York held its last Fair. The BIE threatened to have its members boycott that Fair, which broke the same rules, but Fair President Grover Whalen bargained with the BIE, offering the membership of the US after the end of the Fair in exchange for approval. The BIE complied, and Whalen naturally did not see his promise through, as he had no control over US accession. The Interdepartmental Committee was created to finally begin working towards giving the BIE the coveted participation of the United States. Leon Barety had been President of the BIE since its creation, and it was speculated that he wanted the US to join \"as a crowning achievement of his career and then retire.\""}<Fn n={25} />
            </p>
            <p>
              {"At first, the BIE was willing to revise its charter to appease the United States. The BIE, in fact, was very interested in having the US become a voting member of the group by the time the Soviet Union requested its proposed 1967 Moscow fair be approved. The French leaders of the BIE favored a fair in Canada that year, and needed the US's Cold War influenced vote to keep the Fair in the free world."}<Fn n={26} />{" Canada, on the other hand, knew that if the US joined the BIE, the 1964 Fair in New York would be promised to the US, thus competing with Canada's own fair only three years later. (The 1967 Fair was eventually granted to the Soviet Union.) The demands of the US and particularly of New York once Moses came on board, coupled with the diplomatic controversies regarding the US from inside the BIE, became too much for the BIE leaders to work with, and negotiations fell apart."}<Fn n={27} />
            </p>
            <figure className={`${styles.figure} ${styles.figure200}`}>
              <Image
                src="/images/intpar03/intpar17.jpg"
                alt="expo67 Logo"
                width={200}
                height={63}
                className={`${styles.photo} ${styles.photoNoBorder}`}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"When the Soviet Union withdrew their application to host the Universal and International Exposition of 1967, the BIE awarded the Fair ("}<strong>{"expo67"}</strong>{") to Montreal, Canada. This forced the New York World's Fair to compete for funding, exhibits and visitors with two "}<u>{"officially"}</u>{" sanctioned World's Fairs in North American within the span of five short years."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"While the 1928 Convention convened in order to regulate the proliferation of international expositions \"as a means of promoting international goodwill,\" the 1964 Fair was determined to bring international goodwill to Flushing Meadows without the help of such a governing body."}<Fn n={28} />{" According to Robert Moses, the President of the World's Fair Corporation, the BIE was made up of \"three people living obscurely in a dumpy apartment\" in Paris. Their rejection of the New York Fair, he said, came from bitterness over Grover Whalen's unfulfilled promises in 1939. \"The Fair will go on without them,\" said Moses."}<Fn n={29} />
            </p>
            <p>
              {"Moses had a reputation of antagonizing his critics and detractors. The BIE controversy was one of the first issues that led to major criticism of the New York World's Fair in the American press, something that would continue until the end of the Fair. Most of the controversies surrounding the Fair had to do with Moses, who regularly lashed out at critics and rejected advice. During the course of Fair planning, Moses charged that anyone who opposed the Fair was helping to \"encourage the evil forces which divide our country.\" While Moses's regular comments such as these were fuel for the press, they were also incendiary words that provoked negative feelings amongst the Fair, the BIE, and its member governments. Because of Moses's comments, \"instead of passive non-endorsement, the Bureau of International Expositions became actively \"hostile\" towards the Fair, said the "}<em>{"New York Times"}</em>{"."}<Fn n={30} />
            </p>
            <p>
              {"Inside the Fair, though, efforts to make some semblance out of the BIE conflict was ongoing, and vital to the health of the International Area. The World's Fair Directors worked closely with the State Department. James Hurd of the Bureau of Public Affairs was the first to break the news of the BIE vote to the IAE. And even into 1961, the Fair was working hard to keep foreign nations interested in participation. Allen Beach of the IAE met with Hurd on May 9 at which time \"all American embassies in BIE countries received [a] dispatch…requesting ambassadors inform BIE delegates further action against New York [is] unnecessary.\""}<Fn n={31} />{" Charles Poletti, the Vice President of the Fair in charge of the IAE, advised Moses, who was to meet with President Kennedy, \"to request the State Department to see in Washington the Ambassadors of some of the principal countries which are members of the BIE, and to put some pressure on them.\""}<Fn n={32} />{" The Fair still sought all the participation they could get from the BIE countries."}
            </p>
            <p>
              {"Because of the BIE fiasco, the International Area of the Fair was defined by a strong presence of newly independent developing nations and \"get rich quick entrepreneurs\" from the absent nations who privately sponsored pavilions to represent them. Since few of these pavilion sponsors had much experience with putting together an exhibit of such a large scale, the Fair's International Division had its work cut out for it. Allen Beach of the IAE expressed his concern for the \"myriad of problems that will arise\" in the International Area of the Fair. \"Many of the expected participating nations, especially the newly independent ones, are going to have to be led by the hand, step by step.\""}<Fn n={33} />
            </p>
            <figure className={`${styles.figure} ${styles.figure250}`}>
              <Image
                src="/images/intpar03/intpar03.jpg"
                alt="Members of the IAE Staff"
                width={250}
                height={238}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"International Affairs and Exhibits Staff: (left to right) Mr. Allen Beach, Director of Exhibits; Governor Charles Poletti, Vice-President; Mr. Lionel Harris, Mr. Douglas Beaton, Mr. Gates Davison."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Beach's observation laid the groundwork for the organization of the International Division to consist of several directors, each responsible for a group of exhibitors with whom they would work closely from the time of the invitation to the Fair until the pavilion was demolished. Beach was the Administrative Director of the IAE, and he was the only professional career fair man on the staff. The rest of the staff divvied up the regions of the world, and each man reported to Charles Poletti, a former lieutenant governor of New York who served as governor for twenty-nine days when Herbert Lehman resigned early from the position in 1942 to work for the Department of State. Poletti was a long-time colleague of Robert Moses as a Trustee of the Power Authority of the State of New York for which Moses had been Commissioner."}
            </p>
            <p>
              {"As a friend and close colleague of Moses, Poletti was in an envious position. He was often recommended for pay raises and exotic extended business trips, and he generally acted according to Moses's personal theory of speaking one's mind. Incendiary comments of his own lost the Fair participation of at least one foreign country, and his threatening behavior intimidated some of the members of his staff. Poletti's strong personality both facilitated and endangered international participation in the New York World's Fair."}<Fn n={34} />
            </p>
            <p>
              {"In addition to the difficulties of securing foreign participation, the Fair also struggled to hold on to government support. In September of 1961, Democratic Senator Frank J. Lausche of Ohio announced he would block any Senate resolutions to fund a Federal pavilion at the Fair. He then threatened to kill a bill in the Senate which, if passed, would provide $300,000 for a study into Federal participation. Backers of the Fair estimated a $30 million expenditure for the Federal building they had in mind. Lausche referred to the 1959 agreement that if New York were chosen as the site of the Fair, the Federal government would not be required to fund the event. The terms of this agreement were put forth by New York Senator Jacob K. Javits, when lobbying for New York to become the home of the Fair."}
            </p>
            <p>
              {"Lausche gained some support for his case, and the bill was killed. The matter then became extremely frantic for the Fair planners. Moses feared that if Congress did not get a Federal pavilion off the ground during the current session, there would not be adequate time to build a pavilion later. \"It seems to us unthinkable that there would be no Federal exhibit at the New York World's Fair,\" said Moses, which would be \"a subject of reproach throughout the United States and the entire world.\""}<Fn n={35} />
            </p>
            <p>
              {"Using New York politicians at its disposal, the Fair began a campaign to obtain Federal money. Moses and Javits attempted to persuade Lausche to reconsider his position, pointing out that New York was not asking for government funding but for a Federal pavilion to act as a focal point \"to emphasize the achievements of our country and the major objectives and purposes of our democracy\" to the other participating nations of the world. New York Senator Kenneth B. Keating suggested asking President Kennedy to subsidize the study from his own emergency funds. Mayor of New York Robert F. Wagner wrote an open letter to the President appealing for \"the assurance of Federal interest and support which will guarantee the standing of the fair as an event to which all Americans - in fact, all of the peoples of the world - will look forward to…\" Wagner's letter helped. Kennedy prepared a statement expressing US interest in the Fair, and then agreed to set up the study committee himself."}<Fn n={36} />
            </p>
            <figure className={`${styles.figure} ${styles.figure350}`}>
              <Image
                src="/images/intpar03/us08.jpg"
                alt="Kennedy, Moses and Deegan confer"
                width={350}
                height={220}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"President John F. Kennedy confers with Robert Moses and Thomas J. Deegan, Jr. regarding Government participation in the Fair. The President signed an appropriations bill of $17,000,000 for the Federal Pavilion in July, 1962."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
            <p>
              {"Even with this temporary resolution, the dispute did not fade away. Instead it became a hot point of debate. Javits wrote a lengthy article for the New York Times arguing that the attempts to keep the US out of the Fair were the result of an anti-New York attitude in Washington. Javits said that no other Fair had such trouble obtaining a US pavilion, including Seattle. \"I do not think it is too much to expect our Federal legislators to temper with more responsibility and national pride their treatment of New York.\""}<Fn n={37} />
            </p>
            <p>
              {"Javits, a Republican, also criticized the timing of Kennedy's support as a ploy to aid Democrat Wagner in his re-election campaign. Moses agreed with Senator Javits. Following a half-hour meeting with President Kennedy on the same day that Wagner's letter to Kennedy was published, Moses wrote to Deegan that \"the Fair cannot be run from city hall in the midst of a municipal campaign and on the basis of politics. Our Washington relations with the administration must be direct and wholly non-partisan.\""}<Fn n={38} />{" However, the fact that Moses would meet with Kennedy himself about Fair funding or BIE issues did not phase Moses in the least."}
            </p>
            <p>
              {"While it seems that those who involved themselves in the dispute had various agendas in speaking out for different sides, in April 1962 the Senate approved $15 million for a Federal pavilion. A short-term \"space race\" with the USSR for the largest pavilion, an encore from the 1939-1940 Fair, expanded the plans of the pavilion until the cost doubled to $30 million by the time it was completed."}<Fn n={39} />
            </p>
            <figure className={`${styles.figure} ${styles.figure400}`}>
              <Image
                src="/images/intpar03/us10.jpg"
                alt="Architectural model view of the US Pavilion"
                width={400}
                height={458}
                className={`${styles.photo} ${styles.photoNoBorder}`}
                unoptimized
              />
              <figcaption className={styles.caption}>
                {"Architectural model of the Federal Pavilion for the 1964/1965 New York World's Fair."}<Link href="/intpar09">*</Link>
              </figcaption>
            </figure>
          </div>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar02"
        explicitPrevious
        nextHref="/intpar04"
        hideOverview
      />
    </>
  );
}
