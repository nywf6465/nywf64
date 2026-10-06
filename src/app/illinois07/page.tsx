import type { Metadata } from "next";
import Image from "next/image";
import { IllinoisTopicPage } from "@/components/IllinoisTopicPage";
import styles from "@/styles/illinoisTopic.module.css";

export const metadata: Metadata = {
  title: "Gettysburg Address Manuscript — Illinois — nywf64.com",
  description:
    "Gettysburg Address manuscript at the Illinois Pavilion — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Illinois07Page() {
  return (
    <IllinoisTopicPage
      titleId="illinois07-title"
      title="Gettysburg Address Manuscript"
      previousHref="/illinois06"
      nextHref="/illinois08"
    >
      <div className={styles.bodyMaroon}>
        <p>
          Lincoln experts less interested in the technical wizardry of Walt
          Disney&apos;s Imagineers might have found the area outside the
          &quot;Great Moments&quot; theater to be the most compelling. Tucked
          away in it&apos;s own special alcove was one of the most important
          items of Lincoln memorabilia. A manuscript of the Gettysburg Address,
          Lincoln&apos;s most famous speech, in his own handwriting.
        </p>
        <p>
          This particular manuscript was not unique, nor was it in fact the one
          that Lincoln had used on November 19, 1863 when he gave his immortal
          speech. To this day scholars believe that the one Lincoln used that
          day has been lost. What remains are five copies in Lincoln&apos;s
          writing, only one of which is known to have been written before the
          speech and is commonly called &quot;the first draft.&quot; This copy
          was given to one of Lincoln&apos;s private secretaries, John Nicolay,
          while another copy written just after the speech was given to his other
          private secretary, John Hay.
        </p>
        <p>
          The copy seen by Fair visitors was written three months after the
          speech at a time when it had begun to attract attention as a
          magnificent work of oratory. Lincoln wrote it as a gift for former
          Senator Edward Everett, the man who had preceded Lincoln on the
          platform at Gettysburg as the featured speaker and who had delivered an
          address that ultimately ran in excess of two hours. Not long afterwards
          Everett had realized how Lincoln&apos;s brevity had been more eloquent
          than his lengthy oration saying in a gracious letter, &quot;I should
          be glad, if I could flatter myself that I came as near to the central
          idea of the occasion, in two hours, as you did in two minutes.&quot;
          Everett ultimately used his copy of the Address to help raise funds
          for veterans&apos; widows.
        </p>
        <p>
          This &quot;Everett&quot; copy of the Address eventually was donated to
          the Illinois State Historical Library which furnished it for display at
          the Fair. The display also featured translations of the Address in
          French, Spanish, Greek, Hebrew, Russian, Latin and Japanese, which
          could be heard on multi-lingual listening devices.
        </p>
      </div>

      <figure className={styles.figure}>
        <p className={styles.caption}>The Everett copy of the Gettysburg Address</p>
        <Image
          src="/images/illinois07/ill23.jpg"
          alt="The Everett copy of the Gettysburg Address"
          width={481}
          height={760}
          className={styles.photoImg}
          unoptimized
        />
        <p className={styles.source}>
          SOURCE: LP Album &quot;Great Moments With Mr. Lincoln&quot; Jacket Cover
          © <em>The Walt Disney Company</em>
        </p>
      </figure>
    </IllinoisTopicPage>
  );
}
