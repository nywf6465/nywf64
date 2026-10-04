import type { Metadata } from "next";
import Image from "next/image";
import { BilgraNavChrome } from "@/components/BilgraNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./bilgra07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title:
    "The Story of the Billy Graham Pavilion — Billy Graham — nywf64.com",
  description:
    "Eric Paddon’s essay on the Billy Graham Pavilion at the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Billy Graham — The Story of the Billy Graham Pavilion.
 * Body from legacy bilgra07.html (custom essay — no shared brochure standard).
 *
 * Stack: hero → BilgraNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 * HARD RULE — photo → caption → SOURCE.
 * Legacy wording (relationship t Christ, lowercase some/the) is preserved.
 */
export default function Bilgra07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Billy Graham">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/bilgraoverview/hero-banner.jpg"
            alt="Billy Graham Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <BilgraNavChrome />

      <article className={styles.article} aria-labelledby="bilgra07-title">
        <header className={styles.titleBar}>
          <h1 id="bilgra07-title" className={styles.titleBarMain}>
            <em>The Story of the Billy Graham Pavilion</em>
          </h1>
          <p className={styles.titleBarByline}>... an essay by Eric Paddon</p>
        </header>

        <div className={styles.articleInner}>
          <div className={styles.body}>
            <p>
              In 1939, the New York World&apos;s Fair opened in Flushing Meadow on the theme of &quot;Building The World Of Tomorrow&quot; offering to fairgoers a vision of what life would be like in the decades ahead. The General Motors &quot;Futurama&quot; attraction was the centerpiece of this philosophy taking riders on a moving tram past a detailed model of the city of tomorrow, circa 1960, offering such visions that eventually did come to pass as superhighways, and also fanciful ideas that did not come to pass (giant hangars for passenger dirigibles, whose days were already numbered in 1939). Everyone came away awed but there was one flurry of controversy surrounding Futurama. That was when someone noticed that amidst all the detailed models and maps of the cities and communities of tomorrow, one thing was missing. None of the cities and towns of tomorrow seemingly had any room for churches. Did this suggest that in the World of Tomorrow man&apos;s need for God would not be there any longer thanks to technology? Embarrassed, General Motors had Futurama&apos;s designer Norman Bel Geddes rectify this for the 1940 Fair season. The revised Futurama showed how determined GM was to show they had meant no harm to the devout as the models now sported more than 400 churches dotting the landscapes.
            </p>

            <p>
              A quarter century later, as Robert Moses made his preparations for the 1964 Fair on the same site, he would go out of his way to make this new version of the Fair as friendly to religious sensibilities as it possibly could. This fair would have none of the burlesque side-show attractions of the original&apos;s Amusement Area, where such figures as Gypsy Rose Lee had performed at various points. In the end, religion would be represented by no fewer than six distinct pavilions representing all of the major denominations of Christianity as well as an America-Israel pavilion to represent Judaism. In doing this Moses recognized the trends that had seen a rise in American churchgoing since the end of World War II and the onset of the Cold War. Throughout the 1950s, as America took on the perceived role of the defender of Western Civilization, many Americans found strength in the country&apos;s religious heritage which had expressed itself as early as the 17th century in John Winthrop&apos;s declaration of America as &quot;the shining city on a hill&quot; destined by God for greatness. This renewed burst of American religiosity had led to such symbolic steps as adding &quot;under God&quot; to the Pledge of Allegiance and also making &quot;In God We Trust&quot; the country&apos;s national motto, and required on all American coins and paper money. It was also a time when Hollywood reflected the trend through numerous productions of Biblical-based movies such as <em>Ben Hur</em>, <em>The Ten Commandments</em> and even the story of former U.S. Senate chaplain Peter Marshall in 1954&apos;s <em>A Man Called Peter</em>.
            </p>

            <p>
              No single individual better embodied these trends of the last two decades than the Reverend Billy Graham. After rocketing to fame in the late 1940s when the publisher William Randolph Hearst had been impressed by the young preacher&apos;s melding of traditional evangelical oratory with strong anti-communist rhetoric, Graham had, in the two decades since, carved out a reputation as America&apos;s unofficial national pastor. His crusading activities had taken him across America and around the world and his friendships with Dwight D. Eisenhower and Lyndon Johnson had even made him at times an unofficial presidential advisor. Through it all the evangelist managed to win across-the-board admiration and respect from all denominations, as well as Jewish organizations who approved of how Graham was able to accomplish something none of his predecessors of generations past had done. Which was advocate his simple message of conservative Christian theology while at the same time building bridges of friendship to liberal Protestant, Catholic and Jewish organizations, and avoiding any stigma of bigotry. With this track record it was no surprise that year after year polls always revealed Billy Graham to be among the most admired men in America. Given the temper of the times that led to the creation of the 1964 World&apos;s Fair, it was inevitable that if religion were to play a prominent role in the Fair, the Billy Graham Evangelical Association (BGEA) would find a place at the table. (In 1962, the BGEA recognized the value of association with a World&apos;s Fair when it sponsored a Crusade in the Seattle area during the height of the Century 21 Fair culminating in a one night rally at the Fair itself for which all amusement areas were shut down in order to accommodate the rally.) The only question though was how would they make their presence felt?
            </p>

            <p>
              On February 17, 1962, the BGEA received its first feeler about participating in the 1964 Fair when Marshall Miller, president of Books International, wrote to BGEA Secretary-Treasurer George Wilson about the plans of the Protestant Council of New York to sponsor a &quot;Protestant Center&quot; pavilion, in which numerous denominations from the Protestant and Orthodox churches would rent individual exhibition space. Owing to the BGEA&apos;s prestige within American Protestantism, he said he could &quot; well envision considerable participation by your group in the programs which the Center will sponsor,&quot; and added, &quot;Perhaps you may desire to rent space in the exhibition area.&quot; When Wilson passed this along to BGEA Teams Leader, Bob Ferm though, he seemed to interpret Miller&apos;s latter remark as an indicator that the BGEA might want to rent space outside the Protestant Center altogether which indicated that, from the start, there was some trepidation about having the BGEA presence at the Fair be just part of one group among many in the same building.
            </p>

            <p>
              By the summer of 1962, after more direct pitches had been made from the Protestant Council about taking part, the BGEA had come to the conclusion that a separate pavilion was more in their best interest. Participation in the Protestant Center would have limited the BGEA to showing a film at designated times in rotation with other denominations that would be offering their films as well. Of more concern to Ferm though was that &quot;our overall conception of evangelistic outreach would be considerably limited or even definitely injured&quot; if the BGEA found itself in the same building surrounded by exhibitions from other Protestant denominations and organizations. &quot;In their striving to be ecumenical,&quot; he wrote, &quot;I fear it will be difficult to convey a clear and concise message.&quot; He also wondered if part of the reason why the Protestant Center was anxious to have the BGEA&apos;s presence in their pavilion stemmed from the realization that Billy Graham&apos;s name could be a powerful advertising tool to boost attendance for a presentation that, from the BGEA&apos;s standpoint, would not serve their own interests well of trying to use the Fair as a showcase for their evangelical message.
            </p>

            <p>
              The decision to go for an independent pavilion was reached at a BGEA Board of Directors meeting in June which Graham attended. On August 10, 1962, George Wilson met with Robert Moses and other Fair executives in New York to discuss the guidelines for an independent pavilion. Wilson found Moses quite receptive to the idea of the BGEA having its own building, in part because the scope of Graham&apos;s ministry on a global scale entitled him to it. Moses also felt that the Protestant Council had done a poor job with their &quot;Protestant Witness&quot; pavilion at the Century 21 Fair in Seattle and questioned whether they&apos;d be able to raise the money needed for their ambitious plans for New York, which made it more to the BGEA&apos;s advantage to go it alone with their own project. The guidelines were laid out as to what the BGEA would have to do, what their pavilion could be like in terms of overall design, and from that point on, there was no turning back as far as their plans for 1964 were concerned.
            </p>

            <p>
              It took a bit longer though, for the Protestant Council to realize that the BGEA was now irrevocably out of the picture as far as the Protestant Center was concerned and this led to some divided reaction. On September 27, 1962, Marshall Miller, now program director for the Protestant Center, wrote to Wilson and urged the BGEA to reconsider its plans for a separate pavilion. He pointed out that while the BGEA had established itself as an organization that had learned to cultivate friendly ties with Catholic and Jewish organizations, it was still nonetheless an integral part of the American Protestant movement and that to have a separate pavilion might confuse the uninitiated, non-churchgoing visitor into thinking that the BGEA itself constituted a separate faith from Protestantism, Catholicism and Judaism in general. He spoke of a conversation with one Fair official who was &quot;surprised to know that the Billy Graham Association was on speaking terms with the Protestant Council&quot; because &quot;he thought your doctrines were quite different from that of Protestantism.&quot; Even if the BGEA felt the need to have its own building for more showings of their own movie, he still urged the balance of their participation in the Fair to take place within the Protestant Center.
            </p>

            <p>
              Another letter from former Protestant Council president Emilio Knechtle was sent to Bob Ferm that same week and seemed resigned to the idea that the BGEA intended to go it alone. &quot;I certainly can understand this reason and I have no intention of trying to persuade you to participate in the exhibit of the Protestant Council.&quot; Wilson&apos;s reply to Miller is not known, but Ferm&apos;s reply to Knechtle assured him that the BGEA &quot;would not stand in opposition&quot; to whatever the Protestant Council ultimately did at the Fair and that cooperation on areas of common concern would be possible. From that point on the Protestant Council made no further effort to dissuade the BGEA (eventually, two other Protestant organizations, Wycliffe Bible Translators and Moody Bible Institute, would also go ahead with plans for separate Fair pavilions.)
            </p>

            <p>
              With plans now finalized for their own pavilion, attention now turned toward getting it designed and built. At the August meeting with Robert Moses it was suggested that an architect be commissioned who would be willing to do the work for nothing or for just out-of-pocket expense and that it would be better to not apply a litmus test of individual belief in finding an architect. In the end, the job of designing the pavilion would go to Edward Durrell Stone, a New York architect who had designed the U.S. Pavilion at the 1958 Brussels World&apos;s Fair, and would show his own brand of ecumenicalism by designing the Christian Science Pavilion for the Fair in addition to the Billy Graham Pavilion.
            </p>

            <p>
              Groundbreaking for the Graham Pavilion began on March 1, 1963, but due to illness, Graham was not able to attend. So the ceremonies marking the groundbreaking were pushed back to April 17. All of the Fair&apos;s leading officials were present in addition to Graham and the key members of the BGEA. In his remarks, Graham stressed the uniqueness of the pavilion, saying, &quot;We do not intend to duplicate the effort of others.&quot; While stressing that the Pavilion would be devoted to its goal of preaching its specific Christian evangelical message, in a nod to broader ecumenicalism he also said, &quot;This pavilion will also be a call to renew our faith in God, whether we be of the Jewish, Catholic or Protestant faith, or whatever religious affiliation.&quot; These remarks were vintage Graham, showing how in his powerful, charismatic style he could simultaneously declare his unflagging devotion to the spread of Christian doctrine while at the same time avoid any appearances of being critical of other denominations. In closing remarks, Robert Moses said, &quot;I doubt whether anywhere there is anybody who hasn&apos;t heard about Billy Graham, and we are delighted to have him here.&quot;
            </p>

            <figure className={styles.figure} style={{ maxWidth: 350 }}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bilgra07/bilgra13.jpg"
                  alt="Proposed Pavilion sketch"
                  width={350}
                  height={106}
                  className={styles.photoImg}
                  unoptimized
                />
              </span>
              <figcaption className={styles.caption}>
                THIS SKETCH BY HOWARD SANDEN SHOWS THE PROPOSED BILLY GRAHAM PAVILION AT THE 1964-1965 NEW YORK WORLD&apos;S FAIR. IT WILL CONTAIN AN AIR-CONDITIONED &quot;THEATRE-IN-THE-ROUND&quot; SEATING APPROXIMATELY SIX HUNDRED PERSONS. GROUND BREAKING CEREMONIES WERE HELD FEBRUARY 6. IT IS EXPECTED THAT FIVE MILLION PERSONS WILL VISIT THE PAVILION EACH SEASON OF THE FAIR.
              </figcaption>
              <p className={styles.source}>
                Source: <em>DECISION</em> Magazine, March 1963
              </p>
            </figure>

            <p>
              The Fair president had also in his remarks noted that the Graham pavilion had a good location to attract crowds, situated on 50,000 square feet near the main entrance on New York Avenue with exits also leading to the Avenue of Europe. The pavilion itself was an octagonal design and eventually went through several modifications. Original seating plans for the theater, estimated as high as 500, were ultimately scaled back to 400. Early plans for a 150 seat chapel were also dropped with counseling rooms located at the back of the theater deemed sufficient for ministry purposes. A later addition was a 100 foot tower next to the pavilion which would prominently display the name &quot;Billy Graham Pavilion&quot; and be topped by a golden sunburst. (This proved to be the one feature that presented problems in construction. The sunburst ended up being damaged in transit on its way to New York and had 15 to 20 of its rods removed before it could be installed. After it was put in place, several more rods fell out prompting a complaint from the BGEA to the contractors that they did not want to be held responsible for any accidents that might arise from more rods falling out, or if the sunburst collapsed altogether, since they had urged it not be installed under these conditions. Eventually, the problem was rectified.)
            </p>

            <div className={styles.clipping}>
              <h2 className={styles.clippingTitle}>World&apos;s Fair Ministry</h2>
              <p>
                <span className={styles.dropcap}>B</span>y the time the New York World&apos;s Fair closes its first
                season on October 18, half a million persons are expected to
                have seen the wide-screen Todd-AO color film <em>Man in the 5th
                Dimension</em> at the Billy Graham Pavilion, according to Dan
                Piatt, Pavilion director.
              </p>
              <p>
                By mid-August the number of
                viewers had passed 397,000 and some 1,850 persons had registered
                commitments to Christ in the Pavilion&apos;s counseling room. The
                regular counseling staff was augmented this summer by 12 young
                Inter-Varsity students; 4,000 persons per day have entered the
                circular air-conditioned theater.
              </p>
              <p>
                Paul Leonard, director of
                counseling, reports that students predominate among those who
                are making commitments and decisions in the counseling rooms,
                but that people from all walks of life and from many nations
                have also been inquirers. Among them have been:
              </p>
              <figure className={styles.clippingFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/bilgra07/bilgra14.jpg"
                    alt="Counseling Room"
                    width={188}
                    height={101}
                    className={styles.photoImgPlain}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.captionCounsel}>
                  WHO WOULD HAVE THOUGHT THAT A PERSON COULD FIND JESUS CHRIST AT THE WORLD&apos;S FAIR! YET THAT IS WHAT IS HAPPENING TO THESE PEOPLE WHO STAYED FOR COUNSELING AFTER SEEING THE FILM &apos;MAN IN THE 5TH DIMENSION&apos; AT THE GRAHAM PAVILION.
                </figcaption>
              </figure>
              <p>A 29-year-old graduate psychologist from Detroit.</p>
              <p>
                A 35-year-old divorcee who
                had been teaching Sunday School but, by her own statement, &quot;did
                not know the Lord.&quot;
              </p>
              <p>A Hungarian woman who heard about the Pavilion ministry from an uncle in Hungary.</p>
              <p>A dentist from Columbus, Ohio, who was counseled by another dentist.</p>
              <p>The Pavilion will reopen next April with a set of freshly trained counselors.</p>
            </div>
            <p className={styles.source}>
              Source: <em>DECISION</em> Magazine, October 1964
            </p>

            <p>
              The 50 foot high movie screen would present daily showings of a film produced by the BGEA&apos;s film company, World Wide Pictures, entitled &quot;Man In The 5th Dimension.&quot; The theme of the 28-minute movie, shot in the expensive 70mm widescreen Todd-AO process, was clearly designed to harmonize Graham&apos;s evangelical message of individual conversion to Christ within the framework of the historic and scientific messages to be found in the other pavilions of the Fair. What emerged was a film that presented traditional Graham, preaching through the techniques of storytelling that could also be found in such other Fair presentations as Kodak&apos;s &quot;The Searching Eye&quot;, Johnson Wax&apos; &quot;To Be Alive&quot;, the U.S. Pavilion&apos;s &quot;American Journey&quot; and the Travelers Insurance, &quot;Triumph Of Man.&quot; Billy Graham was shown at Mount Palomar observatory and in a science lab expressing admiration for what science had been able to tell us about the universe (which in itself demonstrated how far Evangelical preaching had come from the turn of the century when the typical reaction of conservative Christians to scientific discoveries that seemingly conflicted with the Bible was to take the approach that ultimately led to William Jennings Bryan&apos;s humiliation in the Scopes Trial). Like &quot;The Searching Eye,&quot; viewers were given sights of the wonders of the natural world and the distant universe. Like &quot;American Journey,&quot; there was a celebration of the nation&apos;s past when Billy Graham quoted George Washington, Benjamin Franklin and Abraham Lincoln to stress the religious principles America had been founded on as the key to her greatness. Like &quot;The Triumph Of Man,&quot; Graham highlighted those moments in history that had made a critical difference in man&apos;s existence (in this case, the Fall of Adam, and the life, death and Resurrection of Christ). And it could be said that by wrapping the meaning of life up in the need for Christian conversion, &quot;Man In The 5th Dimension&quot; built on the message of &quot;To Be Alive&quot; (which simply celebrated life itself), by noting how much better it feels to be alive once one has converted. Whatever the merits of the film&apos;s final content, there could be no disputing that the Graham Association had managed to grasp the underlying pulse of the Fair&apos;s broader themes when it came time to putting their stamp on the experience and in so doing succeeded in making the Graham Pavilion a natural part of the Fair&apos;s surroundings.
            </p>

            <p>
              When the Fair closed in October 1965, the Billy Graham Pavilion claimed an attendance of over five million, which placed it third overall in terms of attendance for a religious pavilion. (The Vatican Pavilion, with its display of Michelangelo&apos;s Pieta, was the overwhelming winner with 27 million attending, second highest of any Fair pavilion, while the Mormon Pavilion drew slightly more than the Graham Pavilion at 5.8 million.) As one of four religious pavilions that required donations rather than admission charges to break even, the Graham Pavilion was the only one that succeeded in doing so. By contrast, the Protestant-Orthodox Center that had tried unsuccessfully to woo Graham for their efforts, only drew half the number of visitors that went to the Graham Pavilion, while their own film &quot;Parable,&quot; which required a fifty cent ticket in contrast to &quot;Man In The 5th Dimension&apos;s&quot; free admission, only drew half as many visitors as the 1.25 million who saw the Graham movie. The Protestant Center ultimately reported the highest debt of any religious pavilion at the Fair at over $250,000.
            </p>

            <div className={styles.statsBox}>
              <span className={styles.photoFrame}>
                <Image
                  src="/images/bilgra07/bilgra15.jpg"
                  alt="Pavilion in grey"
                  width={230}
                  height={71}
                  className={styles.photoImgPlain}
                  unoptimized
                />
              </span>
              <p>
                Some 2,360,000
                persons visited the Billy Graham Pavilion at the New York World&apos;s
                Fair during the 1964 season, it was announced by Dan Piatt, director,
                after closing day on October 18.
              </p>
              <p>
                Over half a million,
                or 590,654, viewed the Pavilion film &apos;Man in the 5th Dimension.&apos;
                some 2,670 persons remained behind for counseling regarding their
                relationship t Christ. the total seasonal attendance at the Fair
                was given as 33,374,000
              </p>
              <p>The Pavilion will reopen for the 1965 season on April 21.</p>
            </div>
            <p className={styles.source} style={{ maxWidth: 230, marginLeft: "auto", marginRight: "auto" }}>
              Source: <em>DECISION</em> Magazine, December 1964
            </p>

            <p>
              In terms of actual conversion figures, Dan Piatt, director of the Graham Pavilion, stated that five percent of those who had seen the film, or approximately 5,000, had received counseling from BGEA staff members at the Pavilion, with people from over 55 nations taking part. The Christian Science and Mormon pavilions claimed slightly higher figures for their efforts but Protestantism in general also received a boost in the several thousand claimed each by both the Protestant Center and Moody Bible Institute&apos;s &quot;Sermons From Science.&quot; Ultimately, Protestant Center Director Dan Potter conceded that the diverse number of pavilions, even among Protestant groups, was &quot;the only way it could have been done here.&quot;
            </p>

            <p>
              Assessing the long-term impact the Graham ministry had in its efforts in New York is an impossible task given how the organization through the years has never been able to gauge the measure of how many of those who may have taken a first step toward conversion at a Graham crusade or rally were able to follow-up with a subsequently strong Christian commitment. What can be seen from the perspective of 40 years later though, is how the Graham Ministry&apos;s involvement at the Fair blended in perfectly with the temper of the times, where the early Cold War period had only heightened the desire for more public acknowledgments of the importance of religion in everyday American life, which had seemingly been ignored at first glance by the organizers of the 1939 Fair. Even as the Fair was ending though, the domestic turbulence associated with America in the 1960s was already beginning to make its presence felt and would ultimately shatter much of that earlier consensus about American society that had existed in the 1950s and early 1960s. While today&apos;s polls show that the overwhelming majority of Americans do profess some belief in God, there is seemingly less recognition in a more permissive society today of the importance of religion as an integral part of everyday American life with even many believers stressing more religion&apos;s role as a private matter that should not intrude too much upon the broader public world (a mindset that even a strict Fundamentalist or Evangelical in the Graham tradition might advocate today on the grounds that Christianity is better off avoiding the corrupting instincts to be found in today&apos;s world through too much interaction).
            </p>

            <p>
              Given that mindset, it is perhaps unlikely that, were an endeavor like the New York World&apos;s Fair ever mounted again, one would see the prominence that religion was given at Flushing Meadow in 1964. And if religion were to seem absent from the pictures of everyday life and the prognostications of the future, it is even less likely that there would be any kind of backlash aimed at rectifying it as took place with the Futurama exhibit in 1939. Through that lens then, the presence of the Billy Graham Pavilion at the New York World&apos;s Fair, truly represents a window into a vanished part of American life from the middle period of the 20th century.
            </p>

            <p className={styles.divider}>* * *</p>
          </div>

          <div className={styles.authorBox}>
            <p>
              <span className={styles.authorName}>Eric Paddon</span> taught
              History at Wheaton (IL) College where the papers of Dr. Billy
              Graham are kept. His dissertation on Dr. Graham&apos;s friendships
              with U.S. presidents will soon be published as a book. He grew
              up in Chatham, NJ and remembers his first view of the World&apos;s
              Fair site in the mid-1980s en route to a Mets game and being
              drawn to the sight of the eternally stopped Sky-Streak elevator
              in the New York State Pavilion. You can contact Eric by e-mail
              at{" "}
              <a
                href="mailto:epaddon@aol.com?subject=Billy Graham Pavilion at nywf64.com"
              >
                epaddon@aol.com
              </a>
            </p>
          </div>
          <p className={styles.copyright}>
            © Copyright 2002, Eric Paddon -- reprints of this essay without
            permission of the author are not allowed.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/bilgra06"
        explicitPrevious
        overviewHref="/bilgraoverview"
        nextHref="/bilgra08"
      />
    </>
  );
}
