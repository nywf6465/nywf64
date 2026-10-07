import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title: "Lincoln Returns to Illinois — Illinois — nywf64.com",
  description:
    "Lincoln Returns to Illinois — Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Illinois08Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois08-title"
      title="Lincoln Returns to Illinois"
      previousHref="/illinois07"
      nextHref="/illinois09"
      wide
    >
      <div className={styles.bodyMaroon}>
          <p className={styles.bodyMaroon}>Lincoln Returns to Illinois</p>
          <p className={styles.bodyMaroon}><em>(Excerpted from "Disney and the 1964 New York World's Fair" Persistence of Vision Issue #6/#7)</em></p>
          <p className={styles.bodyMaroon}>The paring of the Illinois Pavilion with the Audio-Animatronics of Mr. Lincoln was the proverbial "match made in heaven." It started when the Illinois legislature passed early in 1963, a bill that established the Illinois Commission on the New York World's Fair. The Commission was given the broad directive of how to illustrate and dramatize Illinois' "attractions in the midst of the most sophisticated competition expected at the World's Fair." At the very first meeting of the Commission it was decided that the theme would be "Land of Lincoln." Acting as temporary Chairman of the Commission was Fairfax Cone. Moses had General Joe Potter, the Fair's Executive Vice President, and Martin Stone contact Cone regarding the Lincoln figure. Cone later confessed that when presented with the idea he was skeptical, yet he was willing to entertain the concept.</p>
          <p className={styles.bodyMaroon}>On April 5, 1963, Cone arrived at the [Disney] studio for a presentation of the Lincoln figure. He was suitably impressed. Upon returning to Illinois, he immediately dispatched a letter to Walt that read, "I am sure you know that I was overwhelmed by the realism of the Lincoln figure that you showed Mrs. Cone and me last Friday. The possibility of our using the Lincoln figure and the effect of this upon visitors to the New York World's Fair have not left my mind during any of my waking hours since I saw it. I am going to New York tomorrow to discuss the Illinois participation with the Fair people, and I expect to be in touch with Jack Sayers shortly to further explore this project."</p>
          <p className={styles.bodyMaroon}>In the Spring of 1963, the Governor of Illinois, Otto Kerner, appointed renowned Lincoln scholar, Ralph Newman, to the permanent position of Chairman of the Illinois Fair Commission. "I was working in the Lincoln field for several years -- and so I knew of Disney's interest in Lincoln," remembers Newman. "I also knew that he had been toying with the idea of Audio-Animatronic figures, and that Lincoln was probably going to be his first experiment. As soon as I was appointed, I called him to tell him that I was the Chairman of the Illinois Commission and that our Pavilion was going to be devoted to Lincoln which appealed to him very much. From that moment on we started conversations on the feasibility -- when this project would be done, what we could do, what it would cost, what input I could have as an authority on Lincoln -- and we went to work." In a short time, Newman would become the driving force (and Disney's biggest supporter) for the use of the Lincoln figure at the Illinois Pavilion.</p>
          <p className={styles.bodyMaroon}>"I went to California and met with Mr. Disney, and discussed the Lincoln figure and the facilities that would be necessary for him," recalled Newman. The Lincoln authority was impressed not only with Walt, but with the dignity and reverence of the Lincoln figure, as well as the many ideas from the Imagineers for the show. When Newman returned to Illinois, he gave a very positive report on the Lincoln figure to his good friend, Governor Kerner.</p>
          <p className={styles.bodyMaroon}>The Governor made plans to visit the Disney studio to see the Lincoln figure. "Walt came in one day to show Lincoln," remembered Neil Gallagher. "He had with him the Governor of Illinois. I was running the figure manually, so I made Lincoln stand up and make a few gestures. We had a speech on tape at the time, and Walt played him the speech. After the speech, Walt told him all about the project. Well, by the time Walt was through talking, I was ready to put money into this thing."</p>
          <p className={styles.bodyMaroon}>Apparently the Governor was as impressed as Gallagher, because from that point on the Illinois Commission was very adamant that the figure become a part of the Illinois Pavilion. Over the next five months the negotiations dragged on. The biggest stumbling block was the cost to do the show. "The Illinois Legislature had voted a million dollars for us to participate in the Fair, without any investigation as to what it might cost. They didn't know if it would be too much or too little -- it turned out to be too little," explained Newman.</p>
          <p className={styles.bodyMaroon}>WED, Enterprises offered two small concessions in an attempt to alleviate the costs. First, they agreed to include all maintenance and operation costs in the rental fee, previously established at $600,000. Second they divided the rental fee up into two years, $350,000 for the first year and $250,000 for the second year. The Illinois Commission had the exclusive option on renewing the contract with Disney for 1965 at the $250,000 fee. WED had stripped their terms down to the bare minimum, but Disney and Newman knew that it wasn't enough. If Moses wanted Lincoln at the Fair, he would have to give in some too.</p>
          <p className={styles.bodyMaroon}>"We started working on Mr. Moses," recalled Newman. "He had some very tough conditions, including our having to use his expensive security, high rentals, high fees for utilities, and more. We couldn't afford that and Lincoln too. Mr. Disney and I went to see Moses, and I told him that the Legislature only voted us a fixed amount of money, and that we needed his help if we were going to use Lincoln. As we were leaving, I told Moses that I was going to see Adlai Stevenson, the American Ambassador to the United Nations, and to call me there if he wanted to reach me. I did that deliberately figuring that it would make some impression on him. I told Mr. Disney that if Moses didn't agree to our terms, we would have to participated without the Disney figure. He said, 'He'll call you.' He was right, because Moses called us at Stevenson's office and agreed to our terms."</p>
          <p className={styles.bodyMaroon}><em>Newman reported the good news to the Commission in a meeting on August 28, 1963. Three concessions were made to the Illinois exhibit. First, the working drawing approval fee and the connection fees for utilities were set at a $5,000 maximum. Second, the fees for the demolition of the building and restoration of the site to a finished park were waived. Finally, the most significant concession was a $250,000 unsecured subsidy "in order that the Disney-Lincoln production could be included in the World's Fair." It was a significant offer on Moses' part that truly showed his convictions for the Lincoln figure. It was the first (and only) instance of financial support to any exhibitor at the World's Fair. The net result was that only $100,000 out of the Illinois' budget went to Disney for the first year rental on Lincoln, the World's Fair Corporation paid the remaining $250,000 to cover the balance.</em></p>
          <p className={styles.bodyMaroon}>It took almost a year and a half, and the opening of the Fair was right around the corner, but with a little bit of help from Moses, Disney's Lincoln now had a sponsor in the State of Illinois.</p>
          <figure className={styles.figure}>
            <p className={styles.caption}>Lincoln Returns to Illinois</p>
            <p className={styles.caption}>(Excerpted from "Disney and the 1964 New York World's Fair" Persistence of Vision Issue #6/#7)</p>
            <Image src="/images/illinois08/ill08.jpg" alt="Lincoln Returns to Illinois" width={300} height={321} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois08/ill38.jpg" alt="ill38.jpg" width={320} height={240} className={styles.photoImg} unoptimized />
            <p className={styles.source}>Source: © The Walt Disney Company</p>
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois08/ill48.jpg" alt="ill48.jpg" width={285} height={173} className={styles.photoImg} unoptimized />
            <p className={styles.source}>SOURCE: Illinois Pavilion Press Kit</p>
          </figure>
      </div>
    </IllinoisTopicPage>
  );
}
