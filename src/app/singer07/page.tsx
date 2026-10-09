import type { Metadata } from "next";
import Image from "next/image";
import { SingerNavChrome } from "@/components/SingerNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "@/styles/singerEssay.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Red Letter Days — Singer Bowl — nywf64.com",
  description:
    "Opening Day and other Red Letter Days at the Singer Bowl — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Singer Bowl — Red Letter Days.
 * Body from legacy singer07.html.
 */
export default function Singer07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Singer Bowl">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/singeroverview/hero-banner.jpg"
            alt="Singer Bowl at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <SingerNavChrome />

      <article className={styles.article} aria-labelledby="singer07-title">
        <header className={styles.titleBar}>
          <h1 id="singer07-title" className={styles.titleBarMain}>
            Red Letter Days
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure} style={{ maxWidth: 462 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer07/sinbow18.jpg"
                alt="Red Letter Days"
                width={462}
                height={344}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>Opening Day Ceremonies, Singer Bowl, April 22, 1964</p>
            <h2 className={styles.heading}>SPEECH OF THE HONORABLE ROBERT MOSES, PRESIDENT OF THE NEW YORK WORLD'S FAIR 1964-1965 CORPORATION, AT THE OPENING DAY CEREMONIES, APRIL 22, 1964</h2>
            <p>"Let me express first our sorrow that the Chief Executive who inaugurated this Fair is not here to give it his blessing. Let me offer also our testimony to the universal respect and affection in which his memory is held, and our prayer that the Almighty God may protect and strengthen his successor, who is our chief guest here today.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 462 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer07/sinbow19.jpg"
                alt="Singer Bowl"
                width={462}
                height={309}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>"The staff of the Fair expresses today deepest thanks to all who have come here to open the big show. We have done our best by ingenuity and hard work to implement ambitious slogans and colorful promises.</p>
            <p>"We particularly welcome those who have had faith in us through early trying days. We invite visitors from every state and land, solicit their friendship and devoutly hope that in presenting here this Olympics of Progress we shall draw them closer together on our shrinking globe, and thus in the end promote peace."</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 462 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer07/sinbow20.jpg"
                alt="Singer Bowl"
                width={462}
                height={264}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <h2 className={styles.heading}>EXCERPTS OF THE SPEECH OF THE HONORABLE NELSON ROCKEFELLER, GOVERNOR OF THE STATE OF NEW YORK, OPENING DAY CEREMONIES, APRIL 22, 1964</h2>
            <p>"I think we all share the feeling as we gather here despite the rain, despite all the problems that the fabulous Bob Moses has done it again. He has given our state another tremendous undertaking for which we can be proud. The culmination of a lifetime of service to the people of New York, to the people of this country, to the people of the world. Bob Moses, we salute you and are grateful to you.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 462 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer07/sinbow21.jpg"
                alt="Singer Bowl"
                width={462}
                height={255}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>"And I think the completion of this tremendous undertaking which is going to attract people not only from our own states, not only throughout the United States but throughout the world -- that this should have been completed on time; that it should be ready to receive the visitors who are waiting with bated breath all over the world to visit here -- is not only a tribute to Bob Moses and his staff, but is also a great tribute to the distinguished Mayor of the City of New York, whose cooperation was so essential in making possible the completion of this great undertaking. Bob Wagner, Mayor of New York -- and I should like to say to you ladies and gentlemen, that it has been a privilege indeed to have been governor of this state during the period of planning and construction of this great undertaking."</p>
            <h2 className={styles.heading}>EXCERPTS OF THE SPEECH OF THE HONORABLE LYNDON B. JOHNSON, PRESIDENT OF THE UNITED STATES OF AMERICA, OPENING DAY CEREMONIES, APRIL 22, 1964</h2>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 462 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer07/sinbow22.jpg"
                alt="Singer Bowl"
                width={462}
                height={283}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>"I understand that at the close of this Fair, a time capsule will be placed in the ground. Every possible precaution has been taken to make sure that it will be opened several thousand years from now. Special metals have been used. Records of its location will be stored around the world. They have only neglected one vital precaution: they do not have an advance commitment from Robert Moses that when the time finally comes, he will let them dig it up.</p>
            <p>"The Fair represents the most promising of our hopes. It gathers together from 80 countries the achievements of industry; the health of nations; the creations of man. This Fair shows us what man at his most creative and constructive is capable of doing. But unless we can achieve the theme of this Fair, 'Peace Through Understanding'; unless we can use our skill and our wisdom to conquer conflict, as we have conquered science -- then our hopes of today, these proud achievements, will go under in the devastation of tomorrow.</p>
          </div>
          <figure className={styles.figure} style={{ maxWidth: 462 }}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/singer07/sinbow23.jpg"
                alt="Singer Bowl"
                width={462}
                height={279}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <div className={styles.body}>
            <p>"And so I take my leave of what Ogden Nash has called the Promised Land of Mr. Moses, hoping and trusting that in the future it will not take anyone forty years to reach it."</p>
            <p>(Above) Abebe Bikila, Ethiopia's two-time winner of the Olympic Marathon, and teammate Mamo Wolde arriving in Singer Bowl after run from Central Park, with greetings from His Imperial Majesty, Emperor Haile Selassie, April 21, 1965</p>
            <p>(Below) Re-Opening Day Ceremonies, Singer Bowl, April 21, 1965</p>
            <h2 className={styles.heading}>EXCERPTS OF THE SPEECH OF THE HONORABLE WILLY BRANDT, GOVERNING MAYOR OF THE CITY OF BERLIN, RE-OPENING DAY CEREMONIES, APRIL 21, 1965</h2>
            <p>"This occasion, the re-opening of the New York World's Fair, is a colorful and impressive testimonial to the aspirations of the human spirit, the human will to achieve difficult goals that sometimes, and to some people, seem impossible. As a Berliner I feel particularly happy to be included in these re-opening ceremonies because my city knows something about what it means to accomplish the impossible. So we Berliners take our hats off to New York for bringing together once again such a vast variety of things and peoples and cultures, of sights and sounds and experiences. And our industries are proud to have contributed the Berlin Pavilion to the exciting World's Fair scene.</p>
            <p>"Each institution, each state, each nation represented here hopes that its participation will enlarge people's understanding of specific areas of human enterprise. And since understanding is usually accompanied by appreciation and acceptance, this hope is legitimately shared by commercial institutions as well as political ones. Indeed, there are times when understandings reached on a commercial level can be more productive of peace than negotiations on the political plane."</p>
            <p>"In closing, let me say that I deeply appreciate the honor that President Robert Moses and the World's Fair have accorded my city in inviting me to speak from this platform along with distinguished guests and personal friends gathered here. I am sure they share my earnest wish that the Fair this year will prove to be a tremendous success of which the great city of New York can be proud. Thank you all."</p>
            <h2 className={styles.heading}>EXCERPTS OF THE SPEECH OF THE HONORABLE HUBERT H. HUMPHREY, VICE PRESIDENT OF THE UNITED STATES, RE-OPENING DAY CEREMONIES, APRIL 21, 1965</h2>
            <p>"I come here today to represent our country on a most happy and meaningful occasion, and I bring you the greetings of the President of the United States.</p>
            <p>"A World's Fair in this day and age should above all underscore the importance of man and his achievements, the importance of human dignity and its protection. This great World's Fair, exemplifying progress, can serve as a beacon to remind us that man can, with God's help and through his own will and continuing work, build a better life for himself.</p>
            <p>"The promise of this nation, entered into many, many years ago, the promise of life and of liberty and of pursuit of happiness, is the hallmark of this occasion and it continues to inspire us now as it did at the time of its enunciation.</p>
            <p>"So, if you are a citizen of another country, we extend to you our hand of fellowship, our hospitality, and we say: 'Welcome.' If you are an American, we say: 'Travel' - travel in 1965 - and know better your America, know your neighbors, know the richness of this great nation in its culture and in its people."</p>
            <p>"On behalf of the President of the United States, my best wishes to all of you and to the success in 1965 of the New York World's Fair."</p>
            <p className={styles.source}>SOURCE: NY World's Fair Corporation Book "For Those Who Produced the Fair"</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/singer06"
        explicitPrevious
        overviewHref="/singeroverview"
        nextHref="/singer08"
      />
    </>
  );
}
