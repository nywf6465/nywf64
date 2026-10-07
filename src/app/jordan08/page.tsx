import type { Metadata } from "next";
import Image from "next/image";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./jordan08.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Jordan News and Views — Jordan — nywf64.com",
  description:
    "Jordan News and Views Vol. 1 No. 1 — Jordan Pavilion coverage from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jordan — Jordan News and Views (italic title).
 * Body from legacy jordan08.html (custom newsletter reprint).
 * Preserve legacy wording/typos (They Holy Land, consumes, Untied States,
 * Untied Nations, A.B., World’sFair, Saudia Arabia, 17 per center, etc.).
 *
 * Stack: hero → JordanNavChrome → navy title → body → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Jordan08Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Jordan">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/jordanoverview/hero-banner.jpg"
            alt="Jordan pavilion at the 1964/1965 New York World’s Fair"
            width={1903}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <JordanNavChrome />

      <article className={styles.article} aria-labelledby="jordan08-title">
        <header className={styles.titleBar}>
          <h1 id="jordan08-title" className={styles.titleBarMain}>
            Jordan News and Views
          </h1>
        </header>

        <div className={styles.articleInner}>
          <Image
            src="/images/jordan08/jordan38.jpg"
            alt="Jordan News and Views"
            width={600}
            height={184}
            className={styles.masthead}
            unoptimized
          />

          <h2 className={styles.sectionHeading}>
            H. M. King Hussein Opens Jordan&apos;s Holy Land Pavilion at N. Y.
            Fair
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <p>
                His Majesty King Hussein opened today the &quot;Pavilion of
                Jordan, They Holy Land,&quot; in a ceremony attended by Mayor
                Wagner of New York, General Manager of the World&apos;s Fair
                Robert Moses, Jordanian Ambassador Abdel Moneim Rifai and many
                other dignitaries.
              </p>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/jordan08/jordan32.jpg"
                    alt="His Majesty King Hussein"
                    width={290}
                    height={373}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
                <figcaption className={styles.caption}>King Hussein</figcaption>
              </figure>
            </div>
            <div className={styles.col}>
              <p>
                King Hussein, who is on an official ten-day visit to the United
                States, said his country was proud to bring to the American
                people a part of Jordan&apos;s history and culture, and thanked
                the Fair authorities for the kind cooperation and help extended
                to the Jordan pavilion.
              </p>
              <p>
                The young Jordanian monarch added: &quot;My country will not be
                able to exhibit atomic power, or a special mechanical energy, or
                an advanced electrical device, But we will be quite able to
                exhibit that which shall remain when everything else shall
                vanish. We, who have within our heritage people like Jesus Christ
                and Mohammed the Prophet, must be represented by a scheme that
                reflects the ideals of our life and the simplicity of our nature.
                In our pavilion the Ten Commandments shall echo, the birth of
                Jesus Christ shall shine, and the ascendance of Mohammed shall be
                reflected. In our pavilion, the oldest Torah; the Church of the
                Nativity, and the Mosque of the Dome of the Rock, shall stand
                symbols of righteousness, tolerance, peace and brotherhood.&quot;
              </p>
              <p>
                The Dead Sea Scrolls, among the greatest treasures of the world,
                will be exhibited in the Jordan pavilion. As a salute to the city
                of New York, the Jordanian Government will offer a 2,000 year old
                Roman column, for permanent display in a New York public park.
                The column from the ancient city of Jerash, will be placed before
                the pavilion during the Fair.
              </p>
            </div>
          </div>

          <Image
            src="/images/jordan08/jordan33.jpg"
            alt="Artist's Rendering of Jordan Pavilion"
            width={600}
            height={188}
            className={styles.fullBleed}
            unoptimized
          />

          <h2 className={styles.sectionHeading}>
            Pavilion Captures Charm and Spirit
          </h2>

          <div className={styles.singleCol}>
            <p>
              Covering an area of 6,500 square feet, the Pavilion of Jordan is
              one of the most original and striking in the whole of the New York
              World&apos;sFair. commenting on its conception, the brilliant
              Jordanian architect Victor Bisharat said, &quot;On considering the
              area and budget allotted to build the pavilion, I felt I had two
              choices: either to erect a small building or mould a huge
              sculpture, I decided to mould a huge sculpture.&quot;
            </p>
            <p>
              The most dramatic feature of the Jordanian pavilion is the rolling
              roof made of reinforced concrete cast as one piece and covered with
              gold mosaic. Describing this spectacular design Bisharat said,
              &quot;I wanted to capture the image of the rolling domes of old
              Jerusalem, the spires of the magnificent cathedrals, the rounded
              roofs of the Byzantine churches, the rolling sand dunes of the
              Jordan desert, the beautiful mosques and biblical catacombs. I
              believe my sculpture achieves this to a great extent.
            </p>
            <p>
              Another major feature of this truly abstract symbolic edifice is a
              series of stained glass windows depicting in a colorful and
              awe-inspiring manner the Via Dolorosa or the 14 Stations of the
              Cross. The stained glass pictures, making up most of the outer
              walls of the pavilion, were done by the famous Spanish artist
              Antonio Soura.
            </p>
            <p>
              Inside the pavilion most of the illumination comes from tinted
              glass sky lights of different sizes which with the wave-like
              rolling roof give an aura of mystery and enchantment. The colors
              depict Jordan as a land of sun, sand and blue skies.
            </p>
          </div>

          <hr className={styles.sectionRule} />

          <h2 className={styles.sectionHeadingLg}>Pavilion Briefs</h2>

          <div className={`${styles.twoCol} ${styles.briefs}`}>
            <div className={styles.col}>
              <ul className={styles.briefsList}>
                <li>
                  The Jordan Pavilion is also known as the Pavilion of They Holy
                  Land because Jordan is the birthplace of Judaism and
                  Christianity and has the second holiest shrine in Islam.
                </li>
                <li>
                  The Dead Sea Scrolls on display in the Jordan pavilion were
                  insured for one million dollars.
                </li>
                <li>
                  More than 300 newsmen and television personalities attended a
                  preview opening of the Jordan pavilion.
                </li>
                <li>
                  The &quot;mother-of-pearl&quot; object d&apos;art at the Jordan
                  Pavilion is the product of Jordanian artisans who have
                  inherited this craft from their forefathers and their work is
                  considered one of the most outstanding of its kind.
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <ul className={styles.briefsList}>
                <li>
                  The New York Times described the building of the Jordan pavilion
                  as a &quot;truly modern symbolic abstract edifice that captures
                  the spirit and charm of Jordan&quot;
                </li>
                <li>
                  Food is fun at the Fair and while at the Jordan Pavilion do not
                  fail to visit the open buffet featuring delicious Jordanian
                  delicacies.
                </li>
                <li>
                  The exhibit area of the pavilion is divided into three sections
                  for the convenience of the visitor. In the first section are
                  exhibits of religious interest. Then follows an area of
                  archaeological exhibits; and the final section is devoted to
                  modern Jordan, including its industries, agricultural and water
                  development, health, education and welfare.
                </li>
              </ul>
            </div>
          </div>

          <h2 className={styles.sectionHeadingLg}>
            Jordan Girls Greet Visitors
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <figure className={styles.wideFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/jordan08/jordan34.jpg"
                    alt="Artist's Rendering - Interior"
                    width={450}
                    height={284}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
            </div>
            <div className={styles.col}>
              <p>
                On hand to serve you at the Jordan pavilion will be eleven girls
                serving as information officers - dressed in colorful national
                consumes and all experts on the historical and cultural
                traditions of their country. The eleven hostesses all came from
                Jordan especially for the Fair.
              </p>
              <p>
                In charge of the young ladies from Jordan is Mrs. Sami Awad, wife
                of the Tourist and Press Attache of Jordan. Mrs. Awad has been
                living in the Untied States for two years and will use this
                experience to acquaint the newly arrived girls with the American
                way of life. They are also expected to make the best of their two
                year stay in the United States by attending American colleges and
                universities in their spare time and during the winter months
                when the Fair will be closed.
              </p>
              <p>
                Of the ten girls who are assisting Mrs. Awad, two are from
                Jerusalem: the Misses Dyala Husseini and Doris Salah; five are
                from Jordan&apos;s capital, Amman: the Misses Leila Deeb, Sumaya
                Kuleini, Sumaya Bitar, Nuyassar Abu Dabbeli, and Renata Bushnaq.
                Miss Jane Kattan is from Bethlehem, Miss Hayam Dajani is from
                Irbid, and Mrs. Muna Doani is from Ramallah. All the girls speak
                excellent English as well as Arabic, and nearly all of them have
                a third language as well: French, German, Italian or Spanish.
              </p>
            </div>
          </div>

          <h2 className={styles.sectionHeadingLg}>
            Legacy of the
            <br />
            Dead Sea Scrolls
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <figure className={styles.figure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/jordan08/jordan35.jpg"
                    alt="Jordanian Ruins"
                    width={290}
                    height={325}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
              <p>
                The Dead Sea Scrolls, one of the greatest historical discoveries
                of the century, will be on public display for the first time in
                the United States at the Jordan pavilion.
              </p>
              <p>
                The discovery of these scrolls is an interesting story by itself.
                Khirbet Qumran the region which unlocked the mystery of the Dead
                Sea Scrolls is situated on an ancient site, on the Northwest Coast
                of the Dead Sea.
              </p>
              <p>
                The ruins are at the foot of a rough and rugged cliffs. In the
                background are the impressive mountains of Moab, craggy and silent
                and undergoing a continuous change of colors.
              </p>
            </div>
            <div className={styles.col}>
              <p>
                The discovery of the scrolls occurred by sheer coincidence in the
                spring of 1947. They were found by a Bedouin shepherd searching
                for one of his lost sheep.
              </p>
              <p>
                The scrolls belonged to the Essene Community, who parted from
                Orthodox Judaism in Jerusalem and came to the arid wilderness of
                Qumran in the second half of the second century. It appears their
                caves and tents were destroyed by an earthquake that shook Judaea
                in 31 B.C. and forced them to flee the region. They returned in 4
                B.C. and continued to live in Qumran until 68 A.B. when they fell
                victim to the Roman legions which were heading towards Jerusalem.
                The Romans completely destroyed the Essene tribe. The Community
                then sank beneath the surging tide of history for 19 centuries,
                leaving nothing but a dim tradition in the mists of time.
              </p>
              <p>
                The 2,000 year-old scrolls were the biblical manuscripts of the
                Essene Community. More than 600 manuscripts were found in eleven
                caves in Qumran. Other scrolls of a later date, were found south
                and west of this region.
              </p>
              <p>
                The scrolls demonstrated how these people &quot;spent their life
                studying the Holy Writ and praying for the coming of the
                Messiah.&quot; They also reflected the life of this desert
                settlement which paved the way for the teachings of Jesus.
              </p>
              <p>
                There is no doubt that the Dead Sea Scrolls contribute greatly to
                the understanding of the Old Testament and are of invaluable
                historical significance. The Scrolls are now kept in the Palestine
                Archaeological Museum in Arab Jerusalem.
              </p>
            </div>
          </div>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <h3 className={styles.colHeading}>
                Jordan Pipers, Band
                <br />
                At Fair Opening
              </h3>
              <p>
                One of the most spectacular military musical organization is the
                world, the Jordan Army Band and the Jordan Corps of Pipers, will
                be on hand when His Majesty, dedicates the Jordan Pavilion at the
                World&apos;s Fair. Recently arrived from Jordan, the band and the
                pipers will remain in the United States for approximately one
                month, and will give daily performances at the Fair when they are
                in New York. They are also contemplating a tour of American cities
                if their tour can be extended.
              </p>
              <p>
                The Corps of Pipers is the older of the two sections of the
                army&apos;s musical group, having been founded in 1921, whereas
                the Jordan Army Band was not organized until 1925. Both units
                total 46 in number, and their parade uniforms, featured by the
                famous Arab headdress, the <em>keffieh</em>, are as colorful as
                the Grenadier Guards.
              </p>
              <p>
                The Jordan Army Band and the Corps of Pipers have made many
                appearances outside Jordan. In 1954 they made a three month tour
                of Great Britain; in in 1959, they were a feature attraction at
                the Bari, Italy, military band festival. They have also appeared
                in the United Arab Republic, Lebanon and Syria; and have made
                concert tours in Iran and Turkey.
              </p>
              <p>
                Perhaps their most sensational appearance was at the Edinburgh
                Festival last year, when they scored a spectacular triumph in
                competition with many of the most famous musical organizations in
                the world.
              </p>
            </div>
            <div className={styles.col}>
              <h3 className={styles.colHeading}>
                Jordan Merchants to
                <br />
                Run Unique Bazaar
              </h3>
              <p>
                Six of the leading merchants of Jerusalem and Bethlehem have
                formed a consortium in order to provide the pavilion at the
                World&apos;s Fair with a wide variety of handicraft products from
                the Holy Land. The bazaar, <em>souk</em> as it is known in the
                Arab world, is located in the basement of the pavilion, and will
                feature such authentic souvenirs of the Holy Land as Bibles bound
                in olive wood or mother of pearl, and figures for creches made of
                olive wood.
              </p>
              <p>
                In addition to these beautiful hand-made objects, the different
                shops in the <em>souk</em> will have available Crusader jackets,
                embroidered objects of all kinds, Crusader crosses, and other
                religious objects.
              </p>
              <p>
                There will be a special section devoted to metal objects of all
                kinds particularly gold and silver jewelry, as well as trays,
                candlesticks, and crucifixes. Another booth in the bazaar will
                feature the famous ceramic tiles and pottery which are made in
                Jerusalem.
              </p>
              <Image
                src="/images/jordan08/jordan39.jpg"
                alt="Shield"
                width={100}
                height={105}
                className={styles.shield}
                unoptimized
              />
            </div>
          </div>

          <h2 className={styles.sectionHeadingLg}>
            Documentary Films in Jordan Theatre
          </h2>

          <div className={styles.singleCol}>
            <p>
              A series of outstanding films on Jordan will be on continuous
              schedule daytime and evening in the little theater in the basement
              of the Pavilion. One of them, &quot;Ahlan Wasahlem&quot; or
              &quot;Welcome to Jordan,&quot; was made especially for the Fair by
              United States Productions, and features His Majesty, King Hussein.
              The film was directed by the well know cameraman, Tom Hollyman and
              was produced by Alfred Butterfield, well know for his &quot;Secrets
              of the Reef.&quot;
            </p>
            <p>
              Another in the series rated by critics as &quot;outstanding among
              travel documentaries&quot; is &quot;This Is Jordan,&quot; a United
              Artists release. This has played to millions of movie-goers in
              England, and is being shown for the first time in the U.S. in the
              pavilion theater.
            </p>
            <p>
              A third film of unusual quality is &quot;Jordan Today,&quot; a film
              which covers old and new in the life of Jordan. It was made by
              Horizon Pictures at the same time that they were making the
              Oscar-winning picture, &quot;Lawrence of Arabia.&quot; Although a
              good deal of it was filmed in the spectacularly scenic desert area
              that was featured in the Lawrence film, &quot;Jordan Today&quot;
              covers fully the great cities and sites of the Holy Land.
            </p>
            <p>
              Three other films on the religious, archaeological and tourist
              aspects of Jordan complete the film program. Filmed in Jordan by an
              Italian company, all three films have had wide screenings in
              European theaters.
            </p>
          </div>

          <h2 className={styles.sectionHeadingLg}>
            King Hussein Meets U.S. President
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <figure className={styles.wideFigure}>
                <span className={styles.photoFrame}>
                  <Image
                    src="/images/jordan08/jordan36.jpg"
                    alt="King Hussein and President Johnson"
                    width={450}
                    height={374}
                    className={styles.photoImg}
                    unoptimized
                  />
                </span>
              </figure>
            </div>
            <div className={styles.col}>
              <p>
                Highlight of His Majesty, King Hussein&apos;s visit to the United
                States, which enabled him to be present a the opening of the
                Jordan Pavilion at the World&apos;s Fair was the series of visits
                he had with President Lyndon B. Johnson in Washington. The
                President first received Hussein on the White House lawn after his
                arrival there by helicopter. There followed a private meeting that
                morning, a state dinner that night, and the following day a
                meeting to issue a joint communique.
              </p>
              <p>
                During his two-week stay in the United States, King Hussein made
                several public appearances, including luncheon meeting with the
                Citizens Committee for the Commercial Club of Chicago. He was
                honored at several dinners, among them the Near East Foundation
                and the Foreign Policy Council in New York. Besides meeting with
                high government officials in Washington, King Hussein had private
                meetings also with Untied Nations Secretary General U Thant and
                U.S. Ambassador to the United Nations, Adlai Stevenson.
              </p>
              <p>
                Among other activities His Majesty engaged in were visits to Cape
                Kennedy in Florida, the ranch of oilman John Mecome outside
                Houston, and the State of Colorado as guest of the Governor.
              </p>
            </div>
          </div>

          <Image
            src="/images/jordan08/jordan37.jpg"
            alt="Montage of Jordanian Sites"
            width={600}
            height={164}
            className={`${styles.fullBleed} ${styles.fullBleedPlain}`}
            unoptimized
          />

          <p className={styles.source}>
            SOURCE: <em>Jordan News and Views, Vol. 1 - No. 1, April 1964</em> -
            Published by The Jordan Information Center, New York, N.Y.
          </p>

          <div className={styles.singleCol}>
            <p>
              The Hashemite Kingdom of Jordan, as it is presently constituted
              first came into existence in 1950. It comprises the former Kingdom
              of Transjordan (the land east of the Jordan River), which became a
              sovereign state on March 22, 1946, when by treaty the United Kingdom
              terminated its mandate, and that portion of Palestine and the Dead
              Sea which was under Jordanian control when hostilities with Israel
              ended in 1949.
            </p>
            <p>
              Jordan has an area of about 37,500 square miles with a population of
              approximately 1.7 million.
            </p>
            <p>
              Jordan is virtually landlocked except for its southern port of
              Aqaba, which opens into the Red Sea. On the north, it is bounded by
              the Syrian Arab Republic and on the west by Israel. On the east and
              south it shares common desert frontiers with Iraq and Saudia Arabia.
            </p>
            <p>
              Of its present population of 1.7 million, one-third are natives of
              Trans Jordan, one-third are original residents of the incorporated
              territory west of the Jordan River, and the remaining third - some
              630,000 - are Palestinian Arab refugees. With the exception of the
              two largest cities, Amman and Zarqa, which lie east of the Jordan
              river, the urban population - about 47 per cent of the total - lives
              primarily on the river&apos;s west bank.
            </p>
            <p>
              Arabic is the official language and Islam the official religion. The
              Constitution, however, guarantees religious freedom, and there is a
              long-established Christian minority of 180,000.
            </p>
            <p>
              The Constitution of 1952 provides for a parliamentary form of
              government with a hereditary monarchy.
            </p>
          </div>

          <h2 className={styles.sectionHeading}>Introducing Jordan</h2>

          <div className={styles.singleCol}>
            <p>
              The people are the source of all powers. King Hussein I, the present
              monarch, ascended the throne in May 1953, succeeding his father,
              Talal.
            </p>
            <p>
              The country is predominantly agricultural, with limited natural
              resources and a high rate of population growth. About 80 per cent of
              the arable land (4 million acres on 17 per center of the total area)
              is under cultivation, but productivity is dependent upon each
              year&apos;s uncertain rainfall. Principal crops are wheat, barley,
              millet, maize, sesame, beans, tobacco, figs, grapes, and olives.
              Fresh fruits, vegetables and olive oil are the most important export
              products. Livestock raising, particularly of sheep and goats, adds
              significantly to the country&apos;s economy.
            </p>
            <p>
              Mineral resources are unimportant, with the exception of phosphate
              mined near Amman and Hasa and potash extracted from the Dead Sea.
              Phosphate production increased in 1962 and accounted for 38 per cent
              of the total value of Jordan&apos;s exports.
            </p>
            <p>
              The Jordan River, together with its principal tributary stream, the
              Yarmuk River, constitutes the country&apos;s greatest natural asset.
              By effectively harnessing this important river system, Jordan can
              increase its agricultural productivity and develop its hydroelectric
              power and thus lay the foundation for economic and social progress.
            </p>
            <p>
              A seven-year plan adopted by Jordan&apos;s Development Board covering
              1963-70 is expected to expand production and income and cut
              unemployment. Investment will be primary in irrigated agriculture,
              water - resources development, tourism, and the exploitation of
              phosphate and potash. Meanwhile individual development projects have
              been making progress.
            </p>
            <p>
              In 1960 a Central Water Authority was established to coordinate the
              development of the water resources of the entire country.
            </p>
            <p>
              Jordan has developed a good transportation network. An all-weather
              road from Amman to the port city of Aqaba was completed more than
              two years ago, and other highways connecting the capital with
              Jordan&apos;s important urban centers and roads to Syria and Lebanon
              have also been completed. Facilities at the port of Aqaba have also
              been improved.
            </p>
            <p>
              One of the most important economic development projects undertaken
              by the government in 1958 was the East Ghor irrigation project,
              which will divert part of the water of the Yarmuk River on the
              Syrian-Jordan border through a system of diversionary and
              water-carrying canals to land along the east bank of the Jordan
              River. Stage I of this project which is being financed largely with
              U. S. assistance, will irrigate some 25,000 acres of land when fully
              completed. An impressively high productivity per acre is already
              apparent in the first section of stage I, which came under
              irrigation in the spring of 1962. It is believed that present
              production can be doubled with further experience and technical
              assistance in the proper use of water, fertilizer and good farming
              methods.
            </p>
          </div>

          <Image
            src="/images/jordan08/jordan39.jpg"
            alt="Shield"
            width={100}
            height={105}
            className={styles.shield}
            unoptimized
          />
        </div>
      </article>

      <Nav2Bar
        previousHref="/jordan07"
        explicitPrevious
        overviewHref="/jordanoverview"
        nextHref="/jordan09"
      />
    </>
  );
}
