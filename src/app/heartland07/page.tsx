import type { Metadata } from "next";
import Image from "next/image";
import { HeartlandNavChrome } from "@/components/HeartlandNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./heartland07.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Proposal:  Theme — Heartland States U.S.A. — nywf64.com",
  description:
    "Heartland States proposal — theme. — 1964/1965 New York World's Fair on nywf64.com.",
};

/**
 * Heartland States — Proposal:  Theme.
 * Body from legacy heartland07.html (IVEL proposal — custom page).
 *
 * Stack: hero → HeartlandNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Heartland07Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Heartland States U.S.A.">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/heartlandoverview/hero-banner.jpg"
            alt="Heartland States U.S.A. at the 1964/1965 New York World's Fair"
            width={1908}
            height={824}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <HeartlandNavChrome />

      <article className={styles.article} aria-labelledby="heartland07-title">
        <header className={styles.titleBar}>
          <h1 id="heartland07-title" className={styles.titleBarMain}>
            Proposal:  Theme
          </h1>
        </header>

        <div className={styles.articleInner}>

          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland07/9.jpg"
                alt="Panavision Auditorium"
                width={600}
                height={443}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>IV</u> <u>THEME</u>:
            </h2>
            <p className={styles.indent}>
              People visit a World&apos;s Fair in large numbers primarily to be amused and excited; secondarily to acquire knowledge. It is the chief function of every exhibit to tell a story, to convey a message, -- in other words, to <u>sell</u> either products or ideas. In order to attract and interest people in what the exhibitor has to sell, it is therefore essential that excitement and attraction be created, and that the attractive features be so located that traffic is automatically directed toward the &quot;selling&quot; areas. This is especially true of State exhibits, which can be dull and unexciting if they are permitted to be merely statistical.
            </p>
            <p className={styles.indent}>
              It is generally agreed that the major functions of a State exhibit are to draw favorable attention to the attractions of the State, whatever they may be. Heartland States are fortunate in that they are rich in history and traditions and their natural resources, industrial and cultural advantages, tourist attractions and facilities for gracious living, supply ample material for the &quot;hard sell&quot; required to make an exhibit return its cost many times over.
            </p>
            <p className={styles.indent}>
              With People, Power and Potential our theme, we see an exhibit story of a People that are
            </p>
            <p className={styles.indent}>
              friendly - hard-working - healthy - unaffected and hospitable.... honest - thrifty- resourceful - self-reliant and deeply devout... with mechanical aptitude - individual initiative.... and group drive..
            </p>
            <p className={styles.pageMark}>- Page 5 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              In education and culture, they bow to none . . . . their colleges, universities, art museums, symphony orchestras multiply in excellence . . . . they lead the way in modern building forms that blend in with prairie hills . . . . or sharply confront the plains and rip the skies . . . . the modern midland countryside sparkles with the sun reflections of sleek, aluminum-coned silos and corn cribs . . . . the flowing lines of water towers . . . . and the stark forms and shadows of giant cylindrical grain elevators.
            </p>
            <p className={styles.indent}>
              Power comes from deep dark humus soils fertile with the decay of prehistoric grasses that make it a giant food factory, pregnant with agricultural abundance of vast proportions . . . . the greatest in man&apos;s history, it is beyond physical comprehension . . . . and also beyond the capacities of communist lands where past and present create recurrent farm failures and famines . . . . &quot;bread basket&quot; of the world, this economic community of States gives the wheat, barley, corn, rye, beef, dairy cattle, hogs, sugar beets, oats and hay that make it the hub of America&apos;s largest industry, agriculture . . . . and a complete answer to the coming population explosion.
            </p>
            <p className={styles.pageMark}>- Page 6 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              Power and potential derive from waters deep down under the earth, and coursing heavily down the Mighty Missouri . . . now being harnessed by a mammoth program . . . . the Missouri Valley Development . . . for flood control, navigation, irrigation and hydroelectric forces . . . now, even-tempered water flows, a stable stress without limit for city and industry . . . free forever from river-swollen flood . . . throbbing diesel tugboats pull freight, the fruit of farm and factory . . . huge lakes build up, to nurture millions of acres for new crops, and more abundance . . . and now provide the water thrust for dynamo plants and new inland seas for family delight. The entire Heartland Community has fully flexible electric power, equal to any and all industrial demands.
            </p>
            <p className={styles.indent}>
              Potential comes from reserves of oil and gas, coal and lignite, yet to be tapped and used.
            </p>
            <p className={styles.indent}>
              Potential comes from healthy business climate . . . rapidly rising urban and rural real estate values, venture capital and credit, low taxes, no state debts, low-cost stable state government, little or no labor problems.
            </p>
            <p className={styles.indent}>
              Potential comes from infinite variety of climate and terrain, luxurious space without compare . . . that make the area a good place in which to breathe, live and raise a family.
            </p>
            <p className={styles.indent}>
              Potential comes from an excellent network of railroads, highways, airways and waterways, criss-crossing the states and linking them with every corner of the Union, and with our shipping ports.
            </p>
            <p className={styles.pageMark}>- Page 7 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              Potential comes from a vacationland paradise of natural wonders, landscapes, and a host of highway-side park and picnic sites. Perhaps no area in the country possesses such a wealth of tourist attractions . . . an obvious one-generation link to history . . . a recent pioneer past with Indian reservations, famous frontier forts, remnant towns of fabulous gold rush, lawless days, cowboy and Buffalo Bill showman traditions without par . . . in a bliss of scenic beauty is super-abundance of hunting game, from water fowl to deer, and fresh water fish in all forms.
            </p>
            <p className={styles.indent}>
              This is the Midland America we propose to show in a striking exhibit story to millions of visitors in our Heartland Exhibition Hall . . . pioneers on the frontier where the West begins . . . ready and able to handle the Atomic Age . . . a land of tradition, beauty, character, determination and tenaciousness, fun and frolic, brains and brawn, faith and foundation for a fortress role in past, present and future.
            </p>
            <p className={styles.indent}>
              This series of exhibits will monitor our visitors to the prime attraction feature, widely publicized as a &quot;must-see&quot; when at the Fair, to a breathtaking tour, state by state . . . to a thrilling &quot;Rocket Belt Flight Out Where the West Begins&quot; . . . presented in the 11,000 square foot &quot;Panascenium&quot; beyond the Exhibition Hall, through the medium of PANAVISION.
            </p>
            <p className={styles.pageMark}>- Page 8 -</p>
          </div>
          <figure className={styles.photoFigure}>
            <span className={styles.photoFrame}>
              <Image
                src="/images/heartland07/10.jpg"
                alt=""
                width={600}
                height={521}
                className={styles.photoImg}
                unoptimized
              />
            </span>
          </figure>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              Panavision is more than a movie. It is a projected vehicle in color enveloping the viewer with a sense of personal participation, and carrying him along in a compound-curve web of sound, movement and color . . . below, above and straight ahead, the arcs of the screen measuring 85 feet wide and over 48 feet high form a window looking out on an immense and immediate panorama . . . with an overwhelming illusion of reality . . . its physical effect is overpowering . . . our visitors will be strapped safely in retaining rocket belts, and will clutch hard at the supporting rails. In this manner, they will start, via Panavision, a realistic rocket belt tour of the Heartland States . . . ascending and diving . . . hitting air pockets . . . fighting head winds . . . landing from time to time for on-the-spot ground tours, our trip will be memorable for the whole family.
            </p>
            <p className={styles.indent}>
              In Kansas, we sail over a churning sea of wheat . . . giant combines sweeping in the harvest . . . cascades of wheat kernels pouring out of elevators . . . the big business of a Kansas wheat farm at work . . . leading the world at production and milling . . . we fly over the Santa Fe Trail to Kansas City, modern metropolis . . . and on to Wichita to the heart of the aviation industry in action . . . Beech . . . Cessna . . . and giant Boeing . . . where thousands work together making a host of private aircraft, jet bombers, missiles Saturn and Minuteman . . . and components of the Dyna-Soar platform for outer space . . . we see the
            </p>
            <p className={styles.pageMark}>- Page 9 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              old army forts . . . Riley, Hays, Scott, Larned and Leavenworth . . . and frontier towns of the old West . . . Dodge City . . . Abilene . . . a cattle town of yore where now on 13 acres rises the Eisenhower Presidential Library and Museum . . . host to thousands, and a modern monument to the leadership that has come from Heartland America . . . we fly over wooded lands in the eastern state . . . we see buildings, the campanile tower at Kansas University . . . and Emporia whence William Allen White sent out human yet astringent comments on democratic man and world newsfronts.
            </p>
            <p className={styles.indent}>
              Following the mighty Missouri River, we glide north to subtle enchantment of Nebraska landscape . . . over Lincoln with a superb Capitol building that has no peer . . . and then on to thriving Omaha, monumental elevators, world&apos;s largest stock yards, world-famous Joslyn Art Center, dramatic modern architecture . . . home of Ak-Sar-Ben, promoting civic pride, philanthropy, farm life fun and sometimes solemn pomp . . . we turn west and follow for a while the old Platte River tracing the route of pioneer Oregon Trail and Pony Express . . . Smithsonian Institution studies say that perhaps the first North American man lived and grew beans here milleniums ago . . . and today, as we swing east again, the Hope of Western Man is here housed, in a 24-hour-world-in-itself, the Strategic Air Command, nerve center of defense sunk deep beneath green prairie hills . . . and farther on, an atomic fission plant rises on a field of corn . . . 3500 lakes and streams abound about the state, a water wonderland
            </p>
            <p className={styles.pageMark}>- Page 10 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              for sports . . . flowing not far beneath them is an immeasurable reservoir of water resources enriching the God-given fertility of Midland America . . . a special tale told boldly by Cozad&apos;s Hydrorama . . . following the Mighty Mo north, we spy South Dakota on the horizon . . .
            </p>
            <p className={styles.indent}>
              And Gavins Point Dam, backing up a great lake bordering both States, and then on up to big Fort Randall Dam, past the construction site of Big Bend Dam to Oahe Dam . . . four dams which will have a capacity of 9 trillion gallons, and a power potential of 2 million Kilowatts . . . then we swing east a bit to glimpse the Mitchell Corn Palace, corn, grain and grass-decorated for gala harvest festival . . . here we turn west, we see Sioux Falls, biggest city in the State, grinding flour and packing beef . . . then we fly over the vast Indian reserves of the Sioux, the Creeks, the Crow and the Cheyennes . . . the land of Crazy Horse, Sitting Bull, Red Cloud . . . then we descend to the inimitable grandeur of the Black Hills . . . Harney Peak rising seven thousand feet, piercing heaven with volcanic rock . . . magnificent granite juttings that carry jewel box caves in their bowels . . . Sylvan Lake, nestled in the cradle of big rock formations, mirrors the fabulous rock shapes as they wrestle with reflections of cloud, sun and sky . . . nearby Mount Rushmore, its massive facade portraying the faces of Washington, Jefferson, Lincoln and Theodore Roosevelt, sculptor Gutzon Borglum&apos;s monument to civic grandeur . . . This is the home of the Gold Rush of 1874, of Indian Wars, of Central City and Deadwood Gulch, of Deadeye Dick, Wild Bill Hickok, Calamity Jane, Preacher Smith and modern darevevil rodeos.
            </p>
            <p className={styles.pageMark}>- Page 11 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              We fly east over the Badlands, broken terrain of weird, oddly hued spires, pinnacles, cliffs and buttes of eroded soil, sand and clay. . . desolate, empty in macabre beauty . . . from here we swing north over fields of oats and rye, over cattle and sheep . . . reiterating agrarian abundance of our fertile heartland . . . over lush gamelands, lakes and azure streams, heavy with healthy fish and meaty water fowl, another blessing bestowed upon our Midland States Community.
            </p>
            <p className={styles.indent}>
              Now North Dakota lies ahead . . . land of the prairie rose . . . of spring wheat . . . and Durum wheat that gives the old world pasta to new world markets, in unmatched abundance . . . of fields of flax, and beer barley, and sugar beets . . . of a modern skyscraper Capitol in Bismark, a tower shooting up high on the great grass plains . . . We fly over cattle ranches, catch sight of sleek marinas on river banks . . . we swoop down to the unique drama of stock-circle auctions, where tons of beef on the hoof find a market . . . over Fort Abraham Lincoln where Custer went forth for a sad last stand less than a century ago . . . over scenic state parks, Theodore Roosevelt, de Mores, Lake Matigoshe, Turle River and many more, reinforcing the resortland image of these central States, a place for family fun and enlightenment . . . part of the greatest duck population in the world flies by . . . we fly northwest to the oil derricks of Williston Basin . . . a new petroleum El Dorado just a few years old . . . then we see the lignite mines, whose deposits cover 28,000 square miles with tonnage in the billions that can supply America with light and power for hundreds of years.
            </p>
            <p className={styles.pageMark}>- Page 12 -</p>
          </div>
          <hr className={styles.rule} />
          <div className={styles.docSection}>
            <h2 className={styles.sectionLabel}>
              <u>THEME</u> (cont&apos;d)
            </h2>
            <p className={styles.indent}>
              On this note of inexhaustible power potential, we zoom through flashes of our tour highlights, and as our Panavision fantasy draws to a close, we find ourselves engulfed by <u>a vivid, bold spectrum of infinite variety in color and sound</u>, for, as our narrator tells us, this is the character of the Heartland States . . . alive, strong, versatile, harmonious . . . a magnificent balance of variety in unity, and unity in variety.
            </p>
            <p className={styles.indent}>
              PANAVISION will be an exclusive feature of the Heartland States Exhibit at NYWF, and as such, has built-in newsworthiness that will bring our exhibit maximum national and international press notice and visitor traffic. As our visitors leave the Panascenium they can review with sharpened interest, with fresh acquaintanceship and stimulated curiosity, exhibits of the Heartland States and their leading institutions which saturate the Exhibition Hall . . .
            </p>
            <p className={styles.indent}>
              And then leads them out into a homelike garden for foot-resting relaxation and respite . . . here they can sit and rest . . . and they can visit the individual state pavilions of North Dakota, South Dakota, Nebraska and Kansas, each a beautiful structure dominated within by its own distinctive focal exhibit, and important industrial, agricultural and tourism displays . . . all of them reemphasizing a new universal image of our Heartland States <u>as a unique economic and social community riding the crest of the future on wings of People, Power and Potential</u> . . . as a great place to invest, work, live and visit.
            </p>
            <p className={styles.pageMark}>- Page 13 -</p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/heartland06"
        explicitPrevious
        overviewHref="/heartlandoverview"
        nextHref="/heartland08"
      />
    </>
  );
}
