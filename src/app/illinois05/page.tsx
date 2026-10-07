import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title: 'Illinois "Land of Lincoln" — Illinois — nywf64.com',
  description:
    'Illinois "Land of Lincoln" pavilion essay — 1964/1965 New York World’s Fair on nywf64.com.',
};

/** Body from legacy illinois05.html (typos preserved). */
export default function Illinois05Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois05-title"
      title='Illinois "Land of Lincoln"'
      previousHref="/illinois04"
      nextHref="/illinois06"
      wide
    >
      <div className={styles.bodyMaroon}>
          <h2 className={styles.sectionHead}>Think of Illinois and what comes to mind?</h2>
          <p className={styles.bodyMaroon}>Chicago? Mississippi River vistas? Rolling farmland? Invariably it's "Land of Lincoln." Think of the State of Illinois' participation in the 1964/1965 New York World's Fair and you will invariably think of Walt Disney and "Great Moments with Mr. Lincoln." But just as the state has more to offer than Lincoln, so too did the pavilion have more to offer than the "Great Moments" show.</p>
          <p className={styles.bodyMaroon}>The Illinois pavilion was a gracefully designed, one-story building of red brick. It was the only pavilion of the four at the Fair featuring Walt Disney developed attractions that was not designed by Disney Enterprises. The softly curved walls formed two exterior courtyards. Visitors entered the pavilion through the first which served as a sculpture garden and introduction to the pavilion. Prominent in this area was a large photograph of Lincoln and two eloquent Lincoln quotes in metalic bas-relief. A large sculpture of Lincoln on horseback, "Abraham Lincoln: On the Prairie" by sculptress Anna Hyatt Huntington and a bronze replica of the Lincoln bust by Gutzon Borglum (sculptor of Mt. Rushmore fame) entitled "The Prairie Resident" were on display here as well. Stone benches provided visitors with a relaxed setting in which to wait.</p>
          <p className={styles.bodyMaroon}>Visitors exited the pavilion through the rear courtyard which contained a replica of the Hill-McNamar store in New Salem, Illinois where Lincoln once served as Postmaster, and changing displays highlighting the state's advantages.</p>
          <p className={styles.bodyMaroon}>It was determined early on by the state's World's Fair Commission that the pavilion would be devoted to Lincoln and that the state sponsored exhibits would compliment the Walt Disney production of "Great Moments With Mr. Lincoln" in which an Audio-Animatronic likeness of the 16th President would rise and address the audience with selections of his greatest speeches. Therefore, with the exception of a hall given over to presentations of the state's contributions to the arts, sciences, education and industry, the exhibits remained true to the "Land of Lincoln" theme.</p>
          <p className={styles.bodyMaroon}>A Lincoln exhibit area and Gettysburg Address presentation served as the prologue for the "Great Moments" show. The exhibit area featured a projection show with a series of large colored slides and commentary that told the story of Illinois and Lincoln along with artifacts of historical interest highlighting his life. It also contained the complete Lincoln photo collection. The Gettysburg Address area told the story of the writing of Lincoln's famed speech and displayed the Illinois-owned copy of the address. Visitors exited the "Great Moments" show through the state related displays and a research Library containing historic manuscripts.</p>
          <p className={styles.bodyMaroon}>Illinois Pavilion Floorplan</p>
          <p className={styles.bodyMaroon}>The centerpiece of the pavilion was, of course, Disney's Audio-Animatronic Abraham Lincoln who brought America's 16th President to life in the show called "Great Moments With Mr. Lincoln."</p>
          <p className={styles.bodyMaroon}>As early as 1956, Walt Disney had begun toying with the idea of creating an American history show for Disneyland.</p>
          <p className={styles.bodyMaroon}>By April, 1962, when New York World's Fair President Robert Moses visited the Disney studios for an update on the Ford and General Electric Disney presentations for the Fair, the development of the Lincoln figure for "One Nation Under God" had progressed to the point that an Audio-Animatronic Lincoln prototype could rise from his chair and shake Moses' hand. The World's Fair President was so impressed by this demonstration that he was adamant that "One Nation Under God" be presented at the Fair. He was soon given Disney's blessings to try to find a sponsor for the show, despite Disney's misgivings that the technology wasn't completely developed enough to have the show completed in time for the Fair's opening in 1964.</p>
          <p className={styles.bodyMaroon}>Moses turned his considerable persuasive power on the United States government to sponsor "One Nation Under God" as the main component of the Federal pavilion. The cost of the show would have amounted to only approximately 20% of the Federal budget for participation in the Fair. Although Moses spent the better part of 1962 and early 1963 trying to sell various Federal officials on the merits of the show, he was unsuccessful in getting the Department of Commerce World's Fair Commission to sponsor it as their main exhibit.</p>
          <p className={styles.bodyMaroon}>With time running out, Disney and Moses agreed to scale back the exhibit to a one-figure show, a President Lincoln show. The Coca-Cola company was given a demonstration of the Lincoln figure in hopes that they might sponsor him at the Fair. However Coca-Cola also declined.</p>
          <p className={styles.bodyMaroon}>The story of how "Great Moments With Mr. Lincoln" came to be the centerpiece of the Illinois Pavilion will be covered in-full later on in this Feature. But now, without further adieu,</p>
          <p className={styles.bodyMaroon}>invites you to visit Illinois, "Land of Lincoln" at the New York World's Fair...</p>
          <figure className={styles.figure}>
            <p className={styles.caption}>The Illinois "Land of Lincoln" Pavilion</p>
            <Image
              src="/images/illinois05/ill05.jpg"
              alt={'The Illinois "Land of Lincoln" Pavilion'}
              width={420}
              height={278}
              className={styles.photoImg}
              unoptimized
            />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois05/ill03.jpg" alt="(Above) Entrance Courtyard featured a sculpture garden and relaxing place to wait. (Below) A large photograph of Lincoln greeted visitors to the pavilion." width={420} height={282} className={styles.photoImg} unoptimized />
            <p className={styles.caption}>(Above) Entrance Courtyard featured a sculpture garden and relaxing place to wait. (Below) A large photograph of Lincoln greeted visitors to the pavilion.</p>
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois05/ill07.jpg" alt="ill07.jpg" width={420} height={410} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <p className={styles.caption}>A.</p>
            <Image src="/images/illinois05/ill06.jpg" alt="A." width={420} height={284} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois05/ill04.jpg" alt="ill04.jpg" width={300} height={294} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois05/ill47.jpg" alt="ill47.jpg" width={500} height={289} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <p className={styles.caption}>Occupying an enviable site in the State & Federal Area in close proximity to the Federal Pavilion, the Illinois building was an attractive, one-story red brick structure of continuous curved design. It was the only pavilion hosting a Disney presentation that was not designed by Disney Enterprises. This aerial view clearly shows the open courtyards and highlights the pavilion's graceful design.</p>
            <Image src="/images/illinois05/ill02.jpg" alt="Occupying an enviable site in the State & Federal Area in close proximity to the Federal Pavilion, the Illinois building was an attractive, one-story red brick structure of continuous curved design. It was the only pavilion hosting a Disney presentation that was not designed by Disney Enterprises. This aerial view clearly shows the open courtyards and highlights the pavilion's graceful design." width={481} height={382} className={styles.photoImg} unoptimized />
          </figure>
          <figure className={styles.figure}>
            <Image src="/images/illinois05/ill09.jpg" alt="ill09.jpg" width={250} height={345} className={styles.photoImg} unoptimized />
            <p className={styles.source}>Source: © The Walt Disney Company</p>
          </figure>
      </div>
    </IllinoisTopicPage>
  );
}
