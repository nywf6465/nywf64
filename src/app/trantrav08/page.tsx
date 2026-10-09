import type { Metadata } from "next";
import Image from "next/image";
import { TrantravNavChrome } from "@/components/TrantravNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./trantrav08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Transportation & Travel — nywf64.com",
  description:
    "Groundbreaking pamphlet for the Transportation & Travel Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

const REMARKS: string[] = [
  "REMARKS BY TRANSPORTATION & TRAVEL PAVILION AND WORLD'S FAIR OFFICIALS AT THE PAVILION'S GROUNDBREAKING CEREMONIES, NEW YORK WORLD'S FAIR, THURSDAY, OCTOBER 11, 1962.",
  "ROBERT O. THATCHER [President of T. & T., Inc.]: Ladies and gentlemen, as president of Transportation & Travel Pavilion, I welcome and appreciate your being with us on this important day. I will skip over all the hard work that has brought us to this date. Not to be overlooked, however, is the faith and financial backing of many of you without which this Pavilion would not have been possible.",
  "With tongue in cheek, I can say we are fortunate to have as our general contractor one of the finest in New York, the Thatcher Construction Company. We can also announce with pride the following key subcontractors, and acknowledge their cooperation and interest in this great project: Courter & Company, which will do the air-conditioning work, is represented here by its president, Mr. Joseph Courter; Ingalls Iron Works, which will do the structural and cable supports is represented by Mr. Boykin; Lorson Electric Company, for electrical work and lighting, is represented by Mr. Al Cooke; and Cayuga Contracting Company for excavation, piling and foundations is represented by Mr. Daniel Lazard, Stevens-Adamson will do the moving ramps.",
  "With this team we expect a speedy completion of the project. In bringing the Pavilion to this groundbreaking stage, I gratefully acknowledge the help given us by Mr. Guy Tozzoli, director of the World Trade Department for the Port of New York Authority and Francis Miller, director of the Transportation section of the World's Fair. The Port of New York Authority acts as agent for the Fair in the Transportation area.",
  "All the other representatives of the World's Fair, headed by Mr. Moses, have been most cooperative in helping us to solve the many problems which arise in undertaking such a project of this nature. Foremost among these many people has been a man on whose able shoulders rests the full responsibility for communications and public relations -- such an important part of a world's fair. To many of you he needs no introduction -- Mr. William Berns.",
  "WILLIAM BERNS: Thank you Mr. Thatcher. We are particularly proud today to witness the groundbreaking of this outstanding Pavilion which will be in one of the busiest neighborhoods of the New York World's Fair during 1964 and 1965. I think as we stand out here today, we are particularly aware of the part that transportation and travel plays in our lives. We witness the planes flying overhead and realize that we are right in the geographical center and near the population center of this great city -- very close to LaGuardia airport, and just down the line from Idlewild Airport, insuring that our anticipated 70 million visitors during the years of the Fair will find their way here with great ease through every means of transportation and travel.",
  "For your information, it has recently been estimated by a careful study that each hour some 83,000 will be able to arrive by the various means of travel to the New York World's Fair. We expect that many of them -- in fact, most of them -- will be right here where we are now located, to see the glorious building which will rise at this site.",
  "On behalf of the president of the New York World's Fair, Mr. Robert Moses, I am here to make a presentation to Mr. Thatcher. The only reason that Mr. Moses could not personally be here today is because he is at the scene of other activities with which he has been identified over his years of public service. He is up at the great Niagara Power Project which, combined with the St. Lawrence Power Project, makes the State Power Authority the leading power producer in the country.",
  "Mr. Moses is up there for the ribbon cutting of the South Grand Island bridge, and for the dedication and groundbreaking of the new North Grand Island bridge. He has asked us today to present to Mr. Thatcher the official medallion of the New York World's Fair commemorating its basic purpose of PEACE THROUGH UNDERSTANDING. It is with great pride and pleasure that we now present Mr. Thatcher with this medallion.",
  "MR. THATCHER: Thank you, Mr. Berns. By coincidence, this beginning of what we expect to be one of the most brightly spotlighted stages in this great show occurs on the eve of the anniversary of the discovery of America. Tomorrow is Columbus Day -- a living memorial to the greatest of travelers. Today we want to honor ourselves by enrolling Christopher Columbus as the first and highest name in in the Transportation Hall of Fame which will be a featured exhibit in the Pavilion.",
  "Columbus, pressing forward into the unknown -- on a ship such as you see here on my left -- launched the first great age of exploration. Viewing now the whole sweep of progress since then, it is no disparagement of the intervening centuries to point out that time has waited for the present -- our own day -- to bring you the world's second great age of exploration, and the instrument of this is transportation.",
  "Our Hall of Fame, an integral part of this building, will give recognition to the men who have made possible this new age in man's restless history. We invite the transportation industry to help select the pioneers and heroes most deserving of this honor. We hope every agency, corporation, institution and publication connected with transportation and travel will contribute nominations for this honor role. After this, we plan to have an industrywide poll of selection presided over by an eminent committee.",
  "The Pavilion is designed to collect into a comprehensive sequence the varied means by which man today takes himself and the works of this hands wherever he cares to go. Here will be the vehicles and safeguards by which he speeds himself and sends his products around the earth, and into its most secret hiding places -- over Mt. Everest and under the North Pole, with suburban outings ticketed for the moon and Venus. Into this building will go the scientific implements which the services of American private enterprise have so lavishly created.",
  "And here on these walls will be honored the men who have led the way, who have gone farther, fastest, first and most courageously -- those whose organizing genius has created the means for going. You and I -- average men and women -- now can follow them to the ends of the earth in convenience and comfort.",
  "A most startling upsurge in transportation, as statistics seem to show, has taken place in the interval between the two New York World's Fairs from 1940 to the present. Looking at United States government figures on personal consumption and expenditures, I find that we Americans were spending at the time of the first Fair, in round numbers, 7 billion dollars a year on transportation, and twenty years later -- 40 billion dollars.",
  "This vast and growing industry, this dream come true of advancing mobility, is the subject of this Pavilion. Here also will be exhibited the alluring possibilities of travel for pleasure as well as for profit and understanding. Here will be shown the leap from a slow wagon train through Arkansas to transportation at any speed, anywhere you desire to go.",
  "We are proud to be able to tell this story at the Fair. It is fitting that at this point I ask one whose name will be foremost in our Hall of Fame, to put the first shovel in the ground -- Major Alexander P. de Seversky.",
  "MAJOR DE SEVERSKY: I am highly honored to be chosen on this historic occasion to participate in the groundbreaking ceremony of the Transportation & Travel Pavilion of this great Fair. I feel humble to find myself among the great men who have been selected to be enshrined in this Hall of Fame. Personally, in all humility, I must confess the primary justification I find to use this shovel is my longevity.",
  "I have had the good fortune to experience as an active participant, all forms of transportation up to but, unfortunately, not including the orbital flights. As a boy, I drove to school in a horse and buggy. Later, when I was a cadet in Naval Academy, I ran a railroad locomotive as a part of my military training. Then came the automobile and I became a goggle and duster man. As a naval officer, I got a taste of sea when I skippered a destroyer.",
  "In 1915 I received my wings and became an aviator. I have been designing, building and flying planes ever since. Incidentally, I still hold a commercial pilot's license, flying jets, so you can see jet aircraft already have become an old man's airplane. In the meantime, rocket propulsion came into being and now man is finally able to overcome the pull of gravity and invade space.",
  "For every technological advancement in transportation, travel time has been compressed, and our planet proportionately shrunk. I must admit the pioneering of my generation, romantic and exciting as it was, pales in comparison to what is in store for us in the next decade. The marvels of modern transportation today are only the beginning. Not only will technology give us new forms of transportation, but it will revolutionize those already existing.",
  "In the not-too-distant future, new and strange vehicles will rise a few feet above ground, or the surface of the ocean, and will travel at great speeds on a cushion of air. The same principle will revolutionize rail transportation. A monorail utilizing aerodynamically compressed air underneath its car will provide us with surface transportation approaching the speed of sound.",
  "Unique contraptions, no bigger and no more complicated than a motorcycle, will propel a person through the air with the greatest of ease. Eventually, all transport aircraft will rise vertically and will travel at supersonic speeds.",
  "Guided ballistic missiles, which now poise ominously for thermonuclear destruction, will become the most reliable means of mail and parcel post delivery in a few minutes, to any part of the world. During past centuries, lack of transportation and communication was responsible for the creation of artificial barriers among the peoples of the world which led to friction, hostilities and war. With the progress of modern transportation, men are able to exchange more freely their ideologies and the products of their toil.",
  "Thus the artificial barriers that have created suspicion and distrust are crumbling. Technological advances in transportation will force the world to become a single neighborhood. What is a neighborhood? It is a community of people who live virtually within sound of each other, sight of each other, and walking distance of each other. Through radio we are already in hearing distance of each other wherever we are. Through the marvels of Telstar and other satellites to follow, television will put us within the sight of each other wherever we are.",
  "And measuring the distance in flying time of jet airliners, and supersonic craft, we are within walking distance of each other. Once the ideological impasse which plagues the world today has been resolved, the exploration of the universe -- the spaces endless beyond the gravitation of the earth -- will become the concerted effort of all the peoples of the earth. Interplanetary transportation will become a reality.",
  "Thus the world is destined to become a single neighborhood and the scourge of war will be a thing of the past. This is why I feel that this Pavilion and what it represents are of such great importance. Thank you very much.",
  "MR. THATCHER: I think it's fitting, now that the ground has been broken, that we have a few words from Charles Luckman Associates, our architectural consultants, represented by Mr. Serge Petroff.",
  "MR. SERGE PETROFF: Ladies and gentlemen, first I'd like to extend greetings, and also my regrets that Mr. Luckman could not be here today.",
  "As a partner in charge of the project in the office I will say a few things about its origin and about its design in Mr. Luckman's absence. Basically, we tried to design a building which would represent transportation. obviously, we couldn't have a moving building -- these things to have to stand still. We feel, however, that we have created a building which will have a sense of movement -- a building which will be suspended in air and give the effect of not being securely fastened to the ground except for the interior.",
  "The whole principle of suspension will be used so that the total mass of this building will really seem free of the ground. This is our objective and, as our design has been developed, I think we will achieve it.",
  "Internally, the building has been organized to permit entrance through moving ramps onto a bridge which will feed a moving staircase up to the top floor. The visitors will then filter down through the building, like a fountain over the exhibits, back to the first floor and out. Basically, the designs are pretty well completed and the excavation contract is almost completely written and let. We were writing specifications this morning. This is how fast we have to work to catch up to the work of Robert Thatcher and Robert Moses.",
];

export default function Trantrav08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Transportation & Travel">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/trantravoverview/hero-banner.jpg"
            alt="Transportation & Travel at the 1964/1965 New York World’s Fair"
            width={1902}
            height={827}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <TrantravNavChrome />

      <article className={styles.article} aria-labelledby="trantrav08-title">
        <header className={styles.titleBar}>
          <h1 id="trantrav08-title" className={styles.titleBarMain}>
            Pamphlet:  Groundbreaking
          </h1>
        </header>

        <div className={styles.articleInner}>
          <h2 className={styles.leadHeading}>GROUNDBREAKING AT THE</h2>
          <h2 className={styles.leadHeading}>NEW YORK WORLD&apos;S FAIR 1964-1965</h2>

          <Image
            src="/images/trantrav08/tratra17.jpg"
            alt="Cover Image"
            width={600}
            height={260}
            className={styles.borderlessImg}
            unoptimized
          />

          <p className={styles.captionItalic}>
            <em>
              The Transportation &amp; Travel Pavilion, as shown above, will cover an area 378 1/2 feet long and 183
              1/2 feet wide. Entirely supported by eight steel pylons, each 120 feet tall, the steel and glass structure will glow as a huge
              beacon in the night.
            </em>
          </p>

          <p className={styles.source}>
            SOURCE: Groundbreaking Brochure, The Transportation &amp; Travel Pavilion
          </p>

          <div className={styles.bodyTimes}>
            {REMARKS.slice(0, 9).map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>

          <figure className={styles.figureBlock}>
            <Image
              src="/images/trantrav08/tratra18.jpg"
              alt="Thatcher and Berns"
              width={300}
              height={256}
              className={styles.framedImg}
              unoptimized
            />
            <figcaption className={styles.captionItalic}>
              <em>
                William Berns (right), Fair vice president for Communications and Public Relations, presents official Fair
                medallion to Robert O. Thatcher, president of the Transportation &amp; Travel Pavilion, Inc., during groundbreaking ceremonies.
              </em>
            </figcaption>
          </figure>

          <div className={styles.bodyTimes}>
            {REMARKS.slice(9, 21).map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>

          <div className={styles.splitRow}>
            <div className={styles.bodyTimes}>
              {REMARKS.slice(21, 24).map((text) => (
                <p key={text.slice(0, 40)}>{text}</p>
              ))}
            </div>
            <figure className={styles.figureSide}>
              <Image
                src="/images/trantrav08/tratra19.jpg"
                alt="Groundbreaking"
                width={300}
                height={243}
                className={styles.framedImg}
                unoptimized
              />
              <figcaption className={styles.captionItalic}>
                <em>
                  Breaking ground for the Transportation &amp; Travel Pavilion are, left to right, Charles Stanton, William
                  Berns, Robert Thatcher, and Major Alexander P. de Seversky. Model ship in background was present in honor of Christopher Columbus,
                  who will be listed in T. &amp; T.&apos;s Hall of Fame.
                </em>
              </figcaption>
            </figure>
          </div>

          <div className={styles.bodyTimes}>
            {REMARKS.slice(24).map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/trantrav07"
        overviewHref="/trantravoverview"
        nextHref="/trantrav09"
        explicitPrevious
      />
    </>
  );
}
