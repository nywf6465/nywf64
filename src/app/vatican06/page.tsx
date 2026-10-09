import type { Metadata } from "next";
import Image from "next/image";
import { VaticanNavChrome } from "@/components/VaticanNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./vatican06.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {
  title: "Groundbreaking & Construction — Vatican — nywf64.com",
  description:
    "Groundbreaking and construction of the Vatican Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Vatican06Page() {
  return (
    <>
      <section className={styles.hero} aria-label="Vatican Pavilion">
        <div
          className={`${overviewHeroStyles.frame} ${heroBottomBar.photoFrame}`}
        >
          <Image
            src="/images/vaticanoverview/hero-banner.jpg"
            alt="Vatican Pavilion at the 1964/1965 New York World’s Fair"
            width={1905}
            height={826}
            priority
            sizes="100vw"
            className={overviewHeroStyles.art}
            unoptimized
          />
        </div>
      </section>

      <VaticanNavChrome />

      <article className={styles.article} aria-labelledby="vatican06-title">
        <header className={styles.titleBar}>
          <h1 id="vatican06-title" className={styles.titleBarMain}>
            Groundbreaking &amp; Construction
          </h1>
        </header>

        <div className={styles.articleInner}>
          <figure className={styles.figure}>
            <Image
              src="/images/vatican06/vat05.jpg"
              alt="Cover"
              width={566}
              height={438}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionBlock}>
              <span className={styles.captionLabel}>Cover:</span>{" "}
              <span className={styles.captionItalic}>
                The Vatican Pavilion will rise on an oval-shaped plot of land
                in Flushing Meadow, to be crowned by a lantern and a cross at a
                total height of 100 feet. it will feature, in addition to the
                famed &quot;Pieta&quot; by Michelangelo, a Gallery of
                Michelangelo, containing a treatment of the works of the artist;
                a statue of the Good Shepherd, an early Christian sculpture
                from the catacombs; an exhibition of on-third life size color
                transparencies of the Sistine Chapel, and a collection of
                Vatican coins. Architectural firms collaborating on the Vatican
                Pavilion design are York &amp; Sawyer; Hurley &amp; Hughes;
                Luders and Associates. Contractor is Stewart M. Muller of White
                Plains.
              </span>
            </figcaption>
          </figure>

          <hr className={styles.rule} />

          <p className={styles.small}>
            THE FOLLOWING REMARKS ARE TAKEN FROM A TRANSCRIPT OF THE VATICAN
            RADIO BROADCAST DURING CEREMONIES IN ROME AND AT FLUSHING MEADOW
            PARK COMMEMORATING THE START OF CONSTRUCTION ON THE VATICAN
            PAVILION, NEW YORK WORLD&apos;S FAIR, WEDNESDAY, OCTOBER 31, 1962.
          </p>

          <hr className={styles.rule} />

          <div className={styles.small}>
            <p>
              ANNOUNCER: We are assembled for the occasion of the official
              groundbreaking ceremonies for the Vatican Pavilion at the New
              York World&apos;s fair in 1964 and 1965. His Holiness Pope John
              XXIII is about to enter his private study where he will deliver a
              commemorative address in Latin, after which he will push a button
              to signal across the Atlantic for the start of pile-driving
              operations at the construction site of the Vatican Pavilion.
            </p>
            <p>
              After the Holy Father&apos;s Address, you will hear an English
              translation by the Right Rev. Monsignor Cardinale.
            </p>
            <p>
              The Holy Father is about to enter - and everybody is ready - the
              television cameras are already rolling. His Holiness has now
              entered his private study and with him are His Eminence Amleto
              Giovanni Cardinal Cicognani, Vatican Secretary of State, and His
              Eminence Francis Cardinal Spellman, who are taking their places
              on either side of the Holy Father. And now you will hear His
              Holiness, Pope John XXIII. The Holy Father.
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                [Pope John XXIII&apos;s Latin address, which is then followed by
                transatlantic electronic
              </p>
              <p>signal to start construction.]</p>
            </blockquote>
            <p>
              ANNOUNCER: And now that you have heard the Holy Father&apos;s
              message, you will hear a full English translation by the Right
              Reverend Monsinor Cardinale.
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/vatican06/vat06.jpg"
              alt="Pope John XXIII Sends Signal"
              width={553}
              height={293}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionBlock}>
              <span className={styles.captionItalic}>
                Pope John XXIII presses switch in Vatican that sends signal
                starting pile-driving operations for Vatican Pavilion at New
                York World&apos;s Fair. At left is Amleto Giovanni Cardinal
                Cicognani, Vatican Secretary of State, and at right is Francis
                Cardinal Spellman of New York. In the background are Bishop
                Bryan J. McEntegart of Brooklyn and Thomas J. Deegan, Jr.,
                chairman of Fair&apos;s executive committee. The picture above
                was taken from the European television broadcast.
              </span>
            </figcaption>
          </figure>

          <div className={styles.small}>
            <p>
              MSGR. CARDINALE: Spiritually present at the official groundbreaking
              for the Vatican Pavilion of the New York World&apos;s Fair, we are
              happy, on this occasion, to extend our congratulations and our
              best wishes for its success. The World&apos;s Fair, while it will
              bear testimony to what the genius and labors of men have been able
              to accomplish for the progress of civilization, will also
              contribute without doubt to the solidarity of people and to their
              fruitful collaboration for the welfare of humanity.
            </p>
            <p>
              To this end, from our heart, we cherish the hope that this
              remarkable progress of science will serve for the spiritual
              progress of mankind, without which there can be neither true
              prosperity nor secure peace.
            </p>
            <p>
              This is the reason for the participation of the Holy See in this
              World&apos;s Fair and so that our wishes may become a consoling
              reality, we implore from Almighty God an abundance of divine
              favors.
            </p>
            <p>
              ANNOUNCER: That was the Right Reverend Monsignor Cardinale who has
              given you the full English translation of the Holy Father&apos;s
              speech.
            </p>
            <p>
              And now the Fair&apos;s official Gold medallion is being presented
              to His Holiness by Mr. Thomas J. Deegan, Jr., chairman of the New
              York World&apos;s Fair executive committee.
            </p>
          </div>

          <figure className={styles.figure}>
            <div className={styles.photoLeft}>
              <Image
                src="/images/vatican06/vat08.jpg"
                alt="Deegan presents Medallion"
                width={259}
                height={255}
                unoptimized
              />
            </div>
            <figcaption className={styles.captionBlock}>
              <span className={styles.captionItalic}>
                On the occasion of the start of construction on the Vatican
                Pavilion, Thomas J. Deegan, Jr. presented the Holy Father with
                World&apos;s Fair medallion.
              </span>
            </figcaption>
          </figure>

          <div className={styles.small}>
            <p>
              ANNOUNCER: The Holy Father is escorted to his desk now by Cardinal
              Cicognani and Cardinal Spellman, both of whom will return to
              deliver their own personal messages commemorating the start of
              construction on the Vatican Pavilion.
            </p>
            <p>
              His Eminence Francis Cardinal Spellman, Archbishop of New York is
              now ready to speak to you. His Eminence Cardinal Spellman.
            </p>
            <p>
              CARDINAL SPELLMAN: Holy Father, in behalf of the Bishop of
              Brooklyn and myself, I express deep gratitude to Your Holiness for
              all that you have done to help us in the World&apos;s Fair from
              the very beginning. Your encouraging words and your inspiration in
              the beginning have been a great help to the Bishops of the country
              in providing for this magnificent building. We are grateful to you
              this morning for pressing the button to start the activities in
              the building of this Vatican Pavilion.
            </p>
            <p>
              Your Holiness has been most gracious in allowing the
              &quot;Pieta&quot; to come to New York and - notwithstanding the
              fears of some directors of museums who themselves have had
              thousands of works of art brought over on the ocean - Your
              Holiness has desired that people who are unable to make the journey
              to Rome can see this masterpiece of Michelangelo..
            </p>
            <p>
              The purpose of the Fair is to achieve &quot;Peace through
              Understanding.&quot; And that corresponds very closely, I believe,
              to our own interpretation of our blessed and beloved country of
              peace through moral and mortal restraint. Lately we have had an
              example of the peace through the measures adopted by our country.
              The Church has the program and the policy of peace through prayer
              and likewise we are grateful because God has answered our prayers
              since last Sunday when in our Churches - the Catholic Church of
              the United States - we had prayers for peace. And almost
              miraculously peace has dawned. So once more, Beloved Holy Father,
              we thank you for the interest that you have shown in the
              World&apos;s Fair. Thank you very much.
            </p>
            <p>
              ANNOUNCER: That was His Eminence, Francis Cardinal Spellman. And
              now His Eminence Amleto Giovanni Cardinal Cicognani, The Holy
              Father&apos;s Secretary of State.
            </p>
            <p>
              CARDINAL CICOGNANI: I am so pleased with this contribution of the
              Vatican Pavilion to the New York World&apos;s Fair and I am sure
              that the American people will visit this pavilion with sincere
              affection. This is an occasion to rejoice with the good people of
              New York and Brooklyn and also to recall fond memories of friends
              throughout the length and breadth of the United States.
            </p>
            <p>
              His Holiness Pope John XXIII, with his great heart, is preparing
              with delight to allow this treasure of art to be transported to
              the Worlds&apos; Fair, fully confident of the inspiration which it
              will bring to the many millions who will visit this magnificent
              venture. My prayers and good wishes for a great success.
            </p>
            <p>
              ANNOUNCER: You are listening to the Vatican radio in this special
              broadcast on the occasion of the official groundbreaking for the
              Vatican Pavilion in the New York World&apos;s Fair. This broadcast
              has come from the private study of His Holiness Pope John XXIII.
              That is the end of this broadcast - Praise to Jesus Christ -
              Laudator Jesus Christus.
            </p>
            <blockquote className={styles.blockquote}>
              <p>
                [Sound of bells is heard from St. Peter&apos;s Basilica mingling
                with the pile driver at Flushing
              </p>
              <p>Meadow.]</p>
            </blockquote>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/vatican06/vat07.jpg"
              alt="Flushing Meadow Groundbreaking Officials"
              width={565}
              height={299}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionBlock}>
              <span className={styles.captionItalic}>
                Gathered at Flushing Meadow for the 3 a.m. World&apos;s Fair
                Vatican Pavilion groundbreaknig ceremonies are: Very Rev. Msgr.
                Francis M. Costello, Very Rev. Msgr. Timothy J. Flynn, Fair
                President Robert Moses, Most Rev. John J. Maguire, Hon. James
                J. Delaney, Rt. Rev. Msgr. James W. Asip, and Rev. Raymond
                Leonard.
              </span>
            </figcaption>
          </figure>

          <div className={styles.small}>
            <p className={styles.source}>
              Source: Ground Breaking Commemoration Brochure - NY World&apos;s
              Fair Corp.
            </p>
            <p>
              MSG. TIMOTHY J. FLYNN: Your Holiness, Your Eminences Cardinal
              Cicognani and Cardinal Spellman, Your Excellency Bishop
              McEntegart - this is Monsignor Flynn at the site of the Vatican
              Pavilion at the Fairgrounds in New York. You have just heard the
              start of construction. It is 3 a.m. and it has been raining here,
              but we are very cheerful.
            </p>
            <p>
              In the name of all those assembled here, Bishop Maguire, Msgr.
              Asip and Father Leonard of Brooklyn, Msg. Constello, the officials
              of the World&apos;s Fair, the construction men, the press,
              television personnel and all here gathered, we wish to express our
              thanks - thanks particularly to His Holiness - for we are grateful
              for the events of this night. What His Holiness has done in
              starting the construction of the Vatican Pavilion is not only a
              tribute to modern technological progress but it is also an act of
              faith in the Fair and in the future.
            </p>
            <p>
              May I now present the Honorable Robert Moses, president of the New
              York World&apos;s Fair.
            </p>
            <p>
              ROBERT MOSES: The theme of the New York World&apos;s Fair is peace
              through a mutual understanding on a shrinking globe in an expanding
              universe. We welcome the support of the Vatican at this crucial
              time, and its willingness to send us its greatest and most moving
              sculptural symbol. We regard the announcement of the beginning of
              construction of the Vatican Pavilion as an event of immense world
              significance. It is an inspiration to all of us.
            </p>
          </div>

          <hr className={styles.rule} />

          <figure className={styles.figure}>
            <Image
              src="/images/vatican06/vat09.jpg"
              alt="Artist's Rendering"
              width={460}
              height={284}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionBlock}>
              <p>Beautiful Artist&apos;s Rendering of the Vatican Pavilion</p>
              <p className={styles.source}>
                Source: NY World&apos;s Fair Progress Report No. 7, January 24,
                1963
              </p>
            </figcaption>
          </figure>

          <div className={styles.postcardBlock}>
            <p>
              View of facade and entrance to the Vatican Pavilion, New York
              World&apos;s Fair - 1964-1965. Kiff, Colean, Voss &amp; Souder,
              Raymond P. Hughes, Luders &amp; Associates, Associated Architects
            </p>
            <Image
              src="/images/vatican06/vat30.jpg"
              alt="Postcard"
              width={300}
              height={190}
              className={styles.photo}
              unoptimized
            />
            <p className={styles.source}>
              Source: Vatican Pavilion Post Card by Dexter Press
            </p>
          </div>

          <hr className={styles.rule} />

          <div className={styles.steelRow}>
            <figure>
              <Image
                src="/images/vatican06/vat10.jpg"
                alt="Structural Steel"
                width={312}
                height={149}
                className={styles.photo}
                unoptimized
              />
              <figcaption className={styles.captionBlock}>
                <span className={styles.captionItalic}>
                  Spring, 1963, steel structure of the Pavilion nears completion
                </span>
              </figcaption>
            </figure>
            <div>
              <p>
                <span className={styles.dropCap}>O</span>n an oval-shaped plot
                of land of some 50,000 square feet, during the eighteen month
                period, November 1962- April 1964, an elliptical-shaped
                building, 208 feet at its longest dimension and 135 feet at its
                greatest width, took shape.
              </p>
              <p>
                Crowned by a 42-foot, three-dimensional cross of golden-anodized
                aluminum which towered above the ground to a total height of 100
                feet, the building featured a glass enclosed mezzanine a graceful
                lantern-like circular chapel seating 350.
              </p>
              <p>
                By mid-April 1964, the web of steel, concrete, and glass, which
                was to capture the imagination of so many visitors to the Fair,
                had been spun, and the inspiring Pavilion exhibit installed.
              </p>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              The planning and construction of the pavilion exhibit was carried
              on simultaneously in Rome and in New York City.
            </p>
            <p>
              While the construction of the building which was to house the
              Pavilion exhibit proceeded, the principal accouterments of the area
              directly beneath the mezzanine Chapel of the Good Shepherd, having
              been agreed upon in design, were produced in a workshop in a
              suburb of Rome. At the same time, in Carmel, New York, some fifty
              miles north of New York City, following seemingly endless reviews
              and evaluations of small-scale renderings of tentative exhibit
              forms, life-size &quot;mock-ups&quot; of the interior of the
              Pavilion were developed to establish the final utilization of each
              area.
            </p>
            <p>
              Independently of the design and planning indicated above, the
              Pavilion setting for the Pieta was devised in a prominent New York
              City studio with the help of a full-sized replica loaned by New
              York City&apos;s Metropolitan Museum of Art.
            </p>
            <p className={styles.source}>
              Source: This section, Book Vati
              <em>can Pavilion New York World&apos;s Fair 1964-1965 A Chronicle</em>
            </p>
          </div>

          <div className={styles.modelGrid}>
            <div className={styles.modelPair}>
              <Image
                src="/images/vatican06/vat19.jpg"
                alt="Small-scale Model"
                width={154}
                height={112}
                unoptimized
              />
              <Image
                src="/images/vatican06/vat18.jpg"
                alt="Small-scale Model"
                width={153}
                height={112}
                unoptimized
              />
            </div>
            <figure>
              <Image
                src="/images/vatican06/vat17.jpg"
                alt="Full-sized Mock-Up"
                width={321}
                height={186}
                unoptimized
              />
            </figure>
            <p className={styles.modelCaption}>
              <strong>
                <em>TOP:</em>
              </strong>
              <em>
                {" "}
                Two of the numerous small-scale representations used to
                determine the eventual physical layout of the Pavilion Exhibit.{" "}
                <strong>BOTTOM: </strong>A View of the life-size
                &quot;mock-up&quot; of the Pavilion interior, constructed for
                the same purpose.
              </em>
            </p>
          </div>

          <figure className={styles.figure}>
            <Image
              src="/images/vatican06/vat13.jpg"
              alt="Aerial View of Vatican Pavilion"
              width={317}
              height={250}
              className={styles.photo}
              unoptimized
            />
            <figcaption className={styles.captionBlock}>
              <span className={styles.captionItalic}>
                Aerial view of the section of the International Area in which
                the Vatican Pavilion, center, was located.
              </span>
            </figcaption>
          </figure>
        </div>
      </article>

      <Nav2Bar
        previousHref="/vatican05"
        overviewHref="/vaticanoverview"
        nextHref="/vatican07"
      />
    </>
  );
}
