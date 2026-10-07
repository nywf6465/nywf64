import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title: "Building Mr. Lincoln — Illinois — nywf64.com",
  description:
    "Building Mr. Lincoln — Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Illinois10Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois10-title"
      title="Building Mr. Lincoln"
      previousHref="/illinois09"
      nextHref="/illinois11"
      wide
    >
      <div className={styles.bodyMaroon}>
          <p className={styles.bodyMaroon}>"....There will be a plastic Abraham Lincoln programmed by tape in a central control room, like a missile. Lincoln sits, stands, moves his tongue, moves his lips, clears his throat, frowns, smiles, looks skeptical, sad, happy, raises either or both eyebrows, registers a total of 15 facial expressions, makes a speech of six minutes and steps back to his chair, whereupon his motors are turned off and choirs burst into song."</p>
          <p className={styles.bodyMaroon}><em>-David Brinkley, Huntley-Brinkley report on the World's Fair (Time-Life magazine supplement)</em></p>
          <p className={styles.bodyMaroon}><em>Marc Davis was one of the legendary "Imagineers" of the Walt Disney studios who, after a long career in animation, shifted his focus in the 1950s to designing attractions for Disneyland. In 1989, the Disneyland history magazine, The E-Ticket, interviewed Davis and he recalled the work that went into bringing Mr. Lincoln to life at the Fair.</em></p>
          <p className={styles.bodyMaroon}>...Robert Moses, the head of the World's Fair, flew out to see Walt at what we called WED at that time. He insisted that Walt had to give him this Abraham Lincoln. Well, we didn't have the technology for it....and this was when Walt put me on it. I have a notebook in there that I did, "How To Build A Mechanical Man"....and all of this was wrong. We weren't building a mechanical man....we were building an illusion. An illusion of man. That took a while to soak into me and into everyone else.</p>
          <p className={styles.bodyMaroon}>I want to show you something I think you'll be interested in. Walt told me that he wanted to build Abraham Lincoln. He knew I knew a lot about anatomy and things, so I went ahead and put these drawings together. This sequence shows Mister Lincoln standing up. Here are the different movements that Lincoln went through in his performance. You know, they say somebody else animated that....that's a lot of crap. This is Mister Lincoln, and these are the things he had to do. Here, he leans forward....and he rises, watching the center of gravity. Then, see where he has to move this one leg? This is what I mean by the illusion.</p>
          <p className={styles.bodyMaroon}>THE "E" TICKET:</p>
          <p className={styles.bodyMaroon}>Well, when we got him built, Mister Lincoln would go through his performance...everything would be fine, and then, all of a sudden, there'd be some kind of glitch and he'd become a "spastic" suddenly. The poor sound men would have to come back night after night and redo the tapes that would control the figure. And after two weeks ... I guess the Fair was open ... Robert Moses decided he wanted to see this Mister Lincoln, since he'd talked the State of Illinois into buying it. He came into the Mister Lincoln show with all of the New York "ward healers" and their wives ... and we had to run it for them. This was maybe 11:00 in the morning. I sat next to Dick Irvine, and he sat next to Walt. There was General Potter, the one time head of the Panama Canal, and he was Bob Moses' assistant. General Potter sat on my right, as I recall, and then there was Moses and all the other officials and their wives.</p>
          <p className={styles.bodyMaroon}>Mister Lincoln went through his performance ... and God ... not one glitch! We wanted to hug him! The only thing was, you couldn't go up and hug a big pile of machinery like that because it could kill you. This thing had 500 pounds of hydraulic pressure ... it could kill you. Sometimes you worked on it and you forgot that it wasn't a human being. If somebody fooled around, this thing could floor you!</p>
          <p className={styles.bodyMaroon}>You know, on Mister Lincoln I didn't turn the knobs that controlled him myself, but someplace you'll find my "dialogue sheets" all marked out just like you do for animation ... every move Lincoln was to make ... and whether it was a larger move, to turn his hand at this point, and so on.</p>
          <p className={styles.bodyMaroon}>THE "E" TICKET:</p>
          <p className={styles.bodyMaroon}><em>Well, they didn't call it anything. It was just the "animation pattern" so that the guys that turned the knobs could follow and watch along with it, to animate the figure. I see an awful lot of this stuff done now, and it's so meager and so poorly thought out ... and it doesn't come to life. Mister Lincoln did come to life, to a point. When the attraction was opened to the public, the New York Times, in their Sunday section, reviewed it full-page and said, "At this point Mister Lincoln stands up and walks forward on the stage, and delivers his address." The illusion was that good, that this reviewer thought that Lincoln literally walked forward. I think that was a hell of a compliment.</em></p>
          <p className={styles.bodyMaroon}>The "E" TICKET:</p>
          <p className={styles.bodyMaroon}>Well it was the one where we "sweated blood." You know, Walt was about ready to cut his own throat and we were ready to jump off the bridge with him. You know it was horrible! You can't believe ... here we were, stuck with something and Walt didn't have the technology to have accepted that assignment at that time.</p>
          <p className={styles.bodyMaroon}>THE "E" TICKET:</p>
          <p className={styles.bodyMaroon}>Oh absolutely! It was like working on the first automobile or the first airplane or whatever and you didn't know whether it was going to fly or not.</p>
          <figure className={styles.figure}>
            <p className={styles.caption}>This photo (c. August 2006) shows the Fair's Illinois Pavilion Abraham Lincoln Audio-Animatronic figure with the body mechanics exposed. Lincoln was on display at the Oakland Museum, Oakland, California. Interestingly, the lid of the crate that Lincoln traveld in to the Fair was also on display to the right of the glass case!</p>
            <Image src="/images/illinois10/ill57.jpg" alt="This photo (c. August 2006) shows the Fair's Illinois Pavilion Abraham Lincoln Audio-Animatronic figure with the body mechanics exposed. Lincoln was on display at the Oakland Museum, Oakland, California. Interestingly, the lid of the crate that Lincoln traveld in to the Fair was also on display to the right of the glass case!" width={400} height={226} className={styles.photoImg} unoptimized />
            <p className={styles.source}>Source: Photo courtesy Warren Crandall. © 2011 Warren Crandall. All Rights Reserved.</p>
          </figure>
          <figure className={styles.figure}>
            <p className={styles.caption}>Walt Disney explains characteristics of the Lincoln audioanimatronic figure.</p>
            <Image src="/images/illinois10/ill59.jpg" alt="Walt Disney explains characteristics of the Lincoln audioanimatronic figure." width={400} height={220} className={styles.photoImg} unoptimized />
            <p className={styles.source}>Source: Unknown</p>
          </figure>
          <figure className={styles.figure}>
            <p className={styles.caption}>A close-up of the Lincoln head.</p>
            <Image src="/images/illinois10/ill58.jpg" alt="A close-up of the Lincoln head." width={400} height={219} className={styles.photoImg} unoptimized />
            <p className={styles.source}>Source: Unknown</p>
          </figure>
      </div>
    </IllinoisTopicPage>
  );
}
