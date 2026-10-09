import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title: "Great Moments with Mr. Lincoln — Illinois — nywf64.com",
  description:
    "Great Moments with Mr. Lincoln show script — Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Illinois09Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois09-title"
      titleNode={<em>Great Moments with Mr. Lincoln</em>}
      previousHref="/illinois08"
      nextHref="/illinois10"
      wide
    >
      <div className={styles.bodyMaroon}>
          <h2 className={styles.sectionHead}>Great Moments With Mr. Lincoln</h2>
          <h2 className={styles.sectionHead}>Part One: The Preshow</h2>
          <h3 className={styles.sectionHeadLeft}>Part One: The Preshow</h3>
          <h3 className={styles.sectionHeadLeft}>Part Two: The Main Show</h3>
          <ul className={styles.song}>
            <li>By thy rivers gently flowing, Illinois, Illinois. For thy prairies verdant growing, Illinois, Illinois Comes an echo on the breeze Rustling through the leafy trees And its mellow tones are these, Illinois, Illinois And its mellow tones are these, Illinois. But without thy wond'rous story, Illinois, Illinois. Can be writ the nation's glory, Illinois, Illinois. On the record of thy years Abr'am Lincoln's name appears Grant and Douglas and our tears, Illinois, Illinois Grant and Douglas and our tears, Illinois.</li>
          </ul>
          <ul className={styles.song}>
            <li>Mine eyes have seen the glory of the coming of the Lord.</li>
            <li>He is trampling out the vintage where the grapes of wrath are stored.</li>
            <li>He hath loosed the fateful lightning of his terrible swift sword.</li>
            <li>His truth is marching on.</li>
            <li>Glory, glory hallelujah!</li>
            <li>Glory, glory hallelujah!</li>
            <li>Glory, glory hallelujah!</li>
            <li>His truth is marching on!</li>
            <li>Glory, glory hallelujah!</li>
            <li>Glory, glory hallelujah!</li>
            <li>Glory, glory hallelujah!</li>
            <li>His truth is marching on!</li>
          </ul>
          <p className={styles.scriptBlock}><strong>Narrator:</strong> (Paul Frees) : Ladies and gentlemen. On behalf of the governor and the people of the state of Illinois, welcome. You are about to spend a few dramatic moments with Abraham Lincoln. But first, may we present as a prologue, the Illinois story.</p>
          <p className={styles.scriptBlock}><strong>First Child:</strong> Illinois, the 21st state.</p>
          <p className={styles.scriptBlock}><strong>Second Child:</strong> Statehood, 1818.</p>
          <p className={styles.scriptBlock}><strong>Third Child:</strong> Land area, 55,000 square miles.</p>
          <p className={styles.scriptBlock}><strong>Fourth Child:</strong> Bounded by great rivers, the Mississippi, the Ohio, the Wabash.</p>
          <p className={styles.scriptBlock}><strong>Fifth Child:</strong> And in part by that great inland sea, Lake Michigan.</p>
          <p className={styles.scriptBlock}><strong>Sixth Child:</strong> Population, about nine million.</p>
          <p className={styles.scriptBlock}><strong>Seventh Child:</strong> Largest city, Chicago. Crossroads of the continent.</p>
          <p className={styles.scriptBlock}><strong>Children:</strong> (unison) : Rich in natural and human resources. Leader in education, research and industry. The land rich in opportunity, rich in history. For Illinois is the land of Lincoln!</p>
          <p className={styles.scriptBlock}><strong>Narrator:</strong> Right! It was here in New Salem that the young Lincoln worked as a clerk and postmaster. It was here in Springfield that he practiced law. It was here in Freeport, in Galesburg, Quincy, Alton, Jonesboro, Charleston and Ottawa that he engaged Stephen A. Douglas in a series of debates on the slavery question. And from that moment, sprang into national prominence. In the election of 1860, there were those who felt Lincoln merited consideration as a candidate for the Presidency. One of these was Adlai Stevenson's great-grandfather, Jesse Fell, who asked Lincoln to write out his autobiography. Here in part is what he had to say about himself.</p>
          <p className={styles.scriptBlock}><strong>Abraham Lincoln:</strong> (performed by Royal Dano) : I was born February 12, 1809 in Hardin County, Kentucky. My father removed from Kentucky to what is now Spencer County, Indiana in my eighth year. There, I grew up. My mother, who died in my tenth year, was of a family of the name of Hanks. I went to A-B-C schools by littles. I think that the aggregate of all my schooling did not amount to one year. What I have in the way of education, I have picked up. At twenty-one, I came to Illinois. At New Salem, I studied what I should do. Thought of learning a blacksmith trade. Thought of trying to study law. I borrowed law books, took them home, and went at it in good earnest. In the autumn of 1836 I obtained a law license, removed to Springfield, and commenced practice. In 1854, the law profession had almost superseded the thought of politics in my mind, when the repeal of the Missouri Compromise aroused me as I have never been before. What I have done since then is pretty well known. A. Lincoln.</p>
          <p className={styles.scriptBlock}><strong>People:</strong> We the people of the United States. In order to form a more perfect union. Establish justice, insure domestic tranquility. Provide for the common defense. Promote the general welfare. And secure the blessings of liberty to ourselves and our posterity, do ordain and establish this Constitution for the United States of America.</p>
          <p className={styles.scriptBlock}>(The preamble of the Constitution just recited appears on the screen)</p>
          <p className={styles.scriptBlock}><strong>Narrator:</strong> These immortal words, when first they were written, proclaimed to the world an idea new among men. This was the American dream. The prayer for the future. But that golden goal was not to be had without cost. The American way was not gained in a day. It was born in adversity, forged out of conflict, perfected and proven only after long experience and trial. Our nation's greatest crisis occurred when Abraham Lincoln was our President and our Protector. For Abraham Lincoln gave all to save the Union.</p>
          <p className={styles.scriptBlock}>(The screen now disappears and is replaced by the Audio-Animatronic figure of Lincoln seated in front of a red-curtained backdrop)</p>
          <p className={styles.scriptBlock}><strong>Narrator:</strong> We pay tribute here not to a man who lived a century ago, but to an individual who lives today in the hearts of all freedom-loving people. His prophetic words are as valid for our time as they were for his. And now the skills of the sculptor and the talents of the artist will let us relive great moments with Mr. Lincoln.</p>
          <p className={styles.scriptBlock}>(A choral crescendo builds as the Lincoln figure rises from his chair, faces the audience and begins to speak)</p>
          <p className={styles.scriptBlock}><strong>Lincoln:</strong> The world has never had a good definition of the word liberty, and the American people, just now, are much in want of one. We all declare for liberty; but in using the same word we do not all mean the same thing .</p>
          <p className={styles.scriptBlock}>What constitutes the bulwark of our liberty and our independence?</p>
          <p className={styles.scriptBlock}>It is not our frowning battlements, our bristling sea coasts. These are not our reliance against tyranny. Our reliance is in the love of liberty which God has planted in our bosoms.</p>
          <p className={styles.scriptBlock}>Our defense is in the preservation of the spirit which prizes liberty as the heritage of all men, in all lands, everywhere. Destroy this spirit, and you have planted the seeds of despotism around your own doors.</p>
          <p className={styles.scriptBlock}>At what point shall we expect the approach of danger? By what means shall we fortify against it? Shall we expect some trans-Atlantic military giant, to step the ocean, and crush us at a blow?</p>
          <p className={styles.scriptBlock}>All the armies of Europe, Asia and Africa combined could not by force, take a drink from the Ohio, or make a track on the Blue Ridge, in a trial of a thousand years.</p>
          <p className={styles.scriptBlock}>At what point then is the approach of danger to be expected?</p>
          <p className={styles.scriptBlock}>I answer: that if it ever reach us, it must spring from amongst us; it cannot come from abroad. If destruction be our lot, we, ourselves, must be its authors and finishers. As a nation of free men, we must live through all times, or die by suicide.</p>
          <p className={styles.scriptBlock}>Let reverence for the law be breathed by every American mother, to the lisping babe that prattles on her lap. Let it be taught in the schools, in the seminaries, and in the colleges. Let it be written in primers, in spelling books and almanacs. Let it be preached from the pulpit, proclaimed in legislative halls, and enforced in courts of justice. And in short, let it become the political religion of the nation. And let the old and the young, the rich and the poor, the grave and the gay, of all sexes, and tongues and colors and conditions, sacrifice unceasingly at its altars</p>
          <p className={styles.scriptBlock}>And let us strive to deserve, as far as mortals may, the continued care of Divine Providence. Trusting that, in future national emergencies, He will not fail to provide us the instruments of safety and security. Neither let us be slandered from our duty by false accusations against us, nor frightened from it by the menaces of destruction to the Government nor of dungeons to ourselves!</p>
          <p className={styles.scriptBlock}>Let us have faith that right makes might, and in that faith, let us, to the end, dare to do our duty as we understand it.</p>
          <p className={styles.scriptBlock}>(The curtains open to reveal the U.S. Capitol building in the early morning dawn. As the choral rendition of Battle Hymn Of The Republic fills the theater, the lighting slowly changes so that the pattern of the American flag surrounds the Capitol)</p>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill30.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill34.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill32.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill33.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill35.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill36.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill37.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois09/ill31.jpg" alt="&quot;Great Moments&quot; scene" width={240} height={180} className={styles.photoImg} unoptimized />
          </figure>
          <p className={styles.source}>SOURCE: &quot;Great Moments With Mr. Lincoln&quot; Script © <em>The Walt Disney Company</em></p>
          <p className={styles.source}>PHOTOS SOURCE: (All photographs this page) Screen capture shots from the filmed version of &quot;Great Moments With Mr. Lincoln&quot; © <em>The Walt Disney Company</em></p>
      </div>
    </IllinoisTopicPage>
  );
}
