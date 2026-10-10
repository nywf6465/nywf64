import type { Metadata } from "next";
import Image from "next/image";
import { IntparHero } from "@/components/IntparHero";
import { IntparNavChrome } from "@/components/IntparNavChrome";
import { Nav2Bar } from "@/components/Nav2Bar";
import styles from "./intpar08.module.css";

export const metadata: Metadata = {
  title: "Footnotes — The Hunt for International Exhibitors — nywf64.com",
  description:
    "Footnotes — Sharyn Elise Jackson’s thesis on International Participation in the New York World’s Fair 1964-1965, from The Information Booth on nywf64.com.",
};

/**
 * The Hunt for International Exhibitors — Footnotes.
 * Body from legacy intpar08.html (Page 8).
 *
 * Stack: intparhero → IntparNavChrome → navy title → article → Nav2Bar.
 * HARD RULE — navy title banner beneath the nav.
 */
export default function Intpar08Page() {
  return (
    <>
      <IntparHero />

      <IntparNavChrome />

      <article className={styles.article} aria-labelledby="intpar08-title">
        <header className={styles.titleBar}>
          <h1 id="intpar08-title" className={styles.titleBarMain}>
            Footnotes
          </h1>
        </header>

        <div className={styles.articleInner}>
          <p className={styles.seriesHeading}>
            International Participation in the New York World&apos;s Fair
            1964-1965
          </p>

          <header className={styles.chapterHead}>
            <Image
              src="/images/intpar08/intpar01.gif"
              alt=""
              width={150}
              height={116}
              className={styles.chapterLogo}
              unoptimized
            />
            <p className={styles.chapterTitle}>Footnotes</p>
          </header>
          <hr className={styles.rule} />

          <section className={styles.section} aria-labelledby="sec-1">
            <h2 id="sec-1" className={styles.sectionHeading}>
              {"Prologue"}
            </h2>
            <ol className={styles.noteList} start={1}>
              <li id="fn-1" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  1
                </span>
                <span className={styles.noteText}>
                  {"\"Invitation to the New York World's Fair 1964-1965\", World's Fair Corporation Archives, Box 414, Folder PR1.0 Travel Information #2."}
                </span>
              </li>
              <li id="fn-2" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  2
                </span>
                <span className={styles.noteText}>
                  {"\"Man's achievements on a shrinking globe in an expanding universe\" was one of the Fair's official themes. \"Olympics of Progress\" was another theme."}
                </span>
              </li>
              <li id="fn-3" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  3
                </span>
                <span className={styles.noteText}>
                  {"Kenneth W. Luckhurst. "}<em>{"The Story of Exhibitions"}</em>{" (London: Studio Publications, 1951) 9."}
                </span>
              </li>
              <li id="fn-4" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  4
                </span>
                <span className={styles.noteText}>
                  {"Luckhurst, 74."}
                </span>
              </li>
              <li id="fn-5" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  5
                </span>
                <span className={styles.noteText}>
                  {"Robert Rydell, John E. Findling and Kimberly Pelle, "}<em>{"Fair America"}</em>{" (Washington: Smithsonian Institution Press, 2000), 17."}
                </span>
              </li>
              <li id="fn-6" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  6
                </span>
                <span className={styles.noteText}>
                  {"Robert Rydell, "}<em>{"All the World's a Fair: Visions of Empire at American International Expositions, 1876-1916"}</em>{" (Chicago: The University of Chicago Press, 1984), 72."}
                </span>
              </li>
              <li id="fn-7" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  7
                </span>
                <span className={styles.noteText}>
                  {"Robert Rydell, "}<em>{"World of Fairs: The Century of Progress Expositions"}</em>{" (Chicago: University of Chicago Press, 1993), 37."}
                </span>
              </li>
              <li id="fn-8" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  8
                </span>
                <span className={styles.noteText}>
                  {"Rydell, "}<em>{"Fair America"}</em>{", 13."}
                </span>
              </li>
              <li id="fn-9" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  9
                </span>
                <span className={styles.noteText}>
                  {"Burton Benedict. \"The Anthropology of World's Fairs.\" In "}<em>{"The Anthropology of World's Fairs"}</em>{", ed. Burton Benedcit (Berkeley, California: Scholar Press, 1983), 6."}
                </span>
              </li>
              <li id="fn-10" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  10
                </span>
                <span className={styles.noteText}>
                  {"Benedict, 6."}
                </span>
              </li>
              <li id="fn-11" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  11
                </span>
                <span className={styles.noteText}>
                  {"Benedict, 3."}
                </span>
              </li>
              <li id="fn-12" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  12
                </span>
                <span className={styles.noteText}>
                  {"Luckhurst, 216."}
                </span>
              </li>
              <li id="fn-13" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  13
                </span>
                <span className={styles.noteText}>
                  {"Joe McCarthy. \"Moses (Robert) and the Promised Land,\" "}<em>{"Reader's Digest"}</em>{", September 1964."}
                </span>
              </li>
              <li id="fn-14" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  14
                </span>
                <span className={styles.noteText}>
                  {"John Brooks, \"Diplomacy at Flushing Meadow,\" "}<em>{"New Yorker"}</em>{", 1 June 1963."}
                </span>
              </li>
              <li id="fn-15" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  15
                </span>
                <span className={styles.noteText}>
                  {"Robert Moses. \"Why a Fair? And Why This Fair?\" "}<em>{"New York Times"}</em>{", 22 April 1964."}
                </span>
              </li>
            </ol>
          </section>
          <section className={styles.section} aria-labelledby="sec-16">
            <h2 id="sec-16" className={styles.sectionHeading}>
              {"A \"Slight Diplomatic Problem\""}
            </h2>
            <ol className={styles.noteList} start={16}>
              <li id="fn-16" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  16
                </span>
                <span className={styles.noteText}>
                  {"Max Tamir. \"Regulating Expositions,\" "}<em>{"New York Times"}</em>{", 24 February 1961; Rydell, Fair America,16-17."}
                </span>
              </li>
              <li id="fn-17" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  17
                </span>
                <span className={styles.noteText}>
                  {"\"2-Year Run is Aim of 1964 Fair Here,\" "}<em>{"New York Times"}</em>{", 18 February 1960."}
                </span>
              </li>
              <li id="fn-18" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  18
                </span>
                <span className={styles.noteText}>
                  {"Richard E. Mooney. \"World Fair Here in 1964 Approved; Eisenhower Acts,\" "}<em>{"New York Times"}</em>{", 30 October 1959."}
                </span>
              </li>
              <li id="fn-19" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  19
                </span>
                <span className={styles.noteText}>
                  {"Press Release, 18 November 1960, Poletti Papers, Folder S227; \"1964 World's Fair May Extend Into '65,\" "}<em>{"New York Times"}</em>{", 2 March 1960."}
                </span>
              </li>
              <li id="fn-20" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  20
                </span>
                <span className={styles.noteText}>
                  {"\"Press Communique,\" translated by American Embassy in Paris, 9 November 1960, World's Fair Corporation Archives, Box 267, Folder PO.3."}
                </span>
              </li>
              <li id="fn-21" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  21
                </span>
                <span className={styles.noteText}>
                  {"Granger Blair. \"Official in Paris Adamant on Fair,\" "}<em>{"New York Times"}</em>{", 17 February 1960; A.M. Rosenthal. \"'64 Fair Opposed by World Group,\" "}<em>{"New York Times"}</em>{", 18 November 1960."}
                </span>
              </li>
              <li id="fn-22" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  22
                </span>
                <span className={styles.noteText}>
                  {"The United States did finally accede to the 1928 Convention and become a member of the BIE in 1968. Today there are 91 member states; Raymond S. Rubinow \"Concept of a World's Fair,\" "}<em>{"New York Times"}</em>{", 6 December 1960; Granger Blair. \"Official In Paris Adamant on Fair,\" "}<em>{"New York Times"}</em>{", 17 March 1961."}
                </span>
              </li>
              <li id="fn-23" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  23
                </span>
                <span className={styles.noteText}>
                  {"\"Unless questioned it is unnecessary to discuss the International Bureau of Expositions… If asked, explain that US has never been a member of BIE and that 1939 World's Fair similarly held.\" #6 in \"Points to Be Covered By Visiting Team Spokesman,\" 15 December 1960, Poletti Papers, Folder S227; A.M. Rosenthal. \"'64 Fair Opposed by World Group,\" "}<em>{"New York Times"}</em>{", 18 November 1960."}
                </span>
              </li>
              <li id="fn-24" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  24
                </span>
                <span className={styles.noteText}>
                  {"Press Release, 18 November 1960, Poletti Papers, Folder S227."}
                </span>
              </li>
              <li id="fn-25" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  25
                </span>
                <span className={styles.noteText}>
                  {"Transcript of Phone Conversation between James Hurd and Robert Kopple, 24 February 1960, World's Fair Corporation Archives, Box 267, Folder PO.3."}
                </span>
              </li>
              <li id="fn-26" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  26
                </span>
                <span className={styles.noteText}>
                  {"World's Fair Corporation Archives, Box 267, Folder PO.3."}
                </span>
              </li>
              <li id="fn-27" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  27
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to David Rockefeller, 30 March 1960, World's Fair Corporation Archives, Box 267, Folder PO.3."}
                </span>
              </li>
              <li id="fn-28" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  28
                </span>
                <span className={styles.noteText}>
                  {"\"What is the BIE?\" http://www.bie-paris.org ."}
                </span>
              </li>
              <li id="fn-29" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  29
                </span>
                <span className={styles.noteText}>
                  {"\"Moses Dismisses Criticism of Fair,\" "}<em>{"New York Times"}</em>{", 11 September 1963."}
                </span>
              </li>
              <li id="fn-30" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  30
                </span>
                <span className={styles.noteText}>
                  {"Robert Alden. \"Despite Controversies, Attendance Passes All Other Expositions,\" "}<em>{"New York Times"}</em>{", 17 October, 1965."}
                </span>
              </li>
              <li id="fn-31" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  31
                </span>
                <span className={styles.noteText}>
                  {"Letter from Hurd to Beaton, 15 November 1960, Poletti Papers, Folder S227; Copy of Cable from Beach to Poletti, 13 May 1961, World's Fair Corporation Archive, Box 60, Folder A1.153."}
                </span>
              </li>
              <li id="fn-32" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  32
                </span>
                <span className={styles.noteText}>
                  {"Memo from Poletti to Moses, 29 December 1960, World's Fair Corporation Archive, Box 267, Folder PO.3."}
                </span>
              </li>
              <li id="fn-33" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  33
                </span>
                <span className={styles.noteText}>
                  {"Letter from Beach to General Potter, 20 January 1961, World's Fair Corporation Archive, Box 60, Folder A1.153."}
                </span>
              </li>
              <li id="fn-34" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  34
                </span>
                <span className={styles.noteText}>
                  {"Gay Talese. \"Chilean Disputes Poletti On Fair,\" "}<em>{"New York Times"}</em>{", 18 July 1963; \"Fair Comment,\" "}<em>{"New York Times"}</em>{", 22 July 1963; Poletti Papers, Folder G176; Nicholson, Bruce. "}<em>{"Hi, Ho, Come to the Fair"}</em>{". (Huntington Beach, Ca: Pelagian Press, 1989)."}
                </span>
              </li>
              <li id="fn-35" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  35
                </span>
                <span className={styles.noteText}>
                  {"\"Moses Urges US to Join the Fair,\" "}<em>{"New York Times"}</em>{", 13 September 1961."}
                </span>
              </li>
              <li id="fn-36" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  36
                </span>
                <span className={styles.noteText}>
                  {"Robert F. Wagner, Letter in Richard P. Hunt. \"Kennedy to Back '64 World's Fair,\" "}<em>{"New York Times"}</em>{", 2 October, 1961."}
                </span>
              </li>
              <li id="fn-37" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  37
                </span>
                <span className={styles.noteText}>
                  {"Jacob K. Javits. \"'New York, Thy Name's Delirium',\" "}<em>{"New York Times"}</em>{", 24 December 1961."}
                </span>
              </li>
              <li id="fn-38" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  38
                </span>
                <span className={styles.noteText}>
                  {"Copy of Telegram from Deegan to Moses, 1 October 1961; Copy of Telegram from Moses to Deegan, 2 October 1961, World's Fair Corporation 1964-1965 Archive, Box 60, Folder A1.153; Richard P. Hunt. \"Kennedy to Back '64 World's Fair,\" "}<em>{"New York Times"}</em>{", 2 October 1961."}
                </span>
              </li>
              <li id="fn-39" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  39
                </span>
                <span className={styles.noteText}>
                  {"Gay Talese. \"Soviet-US 'Race' At Fair Expected,\" "}<em>{"New York Times"}</em>{", 22 July 1962."}
                </span>
              </li>
            </ol>
          </section>
          <section className={styles.section} aria-labelledby="sec-40">
            <h2 id="sec-40" className={styles.sectionHeading}>
              {"The Soviet Union & The Fair"}
            </h2>
            <ol className={styles.noteList} start={40}>
              <li id="fn-40" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  40
                </span>
                <span className={styles.noteText}>
                  {"\"Premier Tentatively Accepts Bid for Soviet Exhibit at Fair,\" "}<em>{"New York Times"}</em>{", 18 September 1959."}
                </span>
              </li>
              <li id="fn-41" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  41
                </span>
                <span className={styles.noteText}>
                  {"Letter from Menshikov to Mayor Wagner, 27 August 1960, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-42" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  42
                </span>
                <span className={styles.noteText}>
                  {"Letter from Gates Davison to Colonel William S. Chapin, 26 February 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-43" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  43
                </span>
                <span className={styles.noteText}>
                  {"Agreement of Participation, March 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-44" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  44
                </span>
                <span className={styles.noteText}>
                  {"Telegram from RM to Dean Rusk, 21 February 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-45" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  45
                </span>
                <span className={styles.noteText}>
                  {"Letter from Poletti to Beach, 20 September 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-46" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  46
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to Rusk, 29 September 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-47" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  47
                </span>
                <span className={styles.noteText}>
                  {"Letter from Ambassador Thompson to State Department, with translated summary of "}<em>{"Pravda"}</em>{", April 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-48" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  48
                </span>
                <span className={styles.noteText}>
                  {"Letter from State Department to Soviet Embassy, 27 April 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-49" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  49
                </span>
                <span className={styles.noteText}>
                  {"Rydell, "}<em>{"Fair America"}</em>{", 100. For more information on the American Pavilion in Brussels' role in intelligencegathering, see: Rydell, "}<em>{"World of Fairs"}</em>{", 206-211 and Robert H. Haddow, "}<em>{"Pavilions of Plenty: Exhibiting American Culture Abroad in the 1950s"}</em>{" (Washington: Smithsonian Institution Press, 1997)."}
                </span>
              </li>
              <li id="fn-50" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  50
                </span>
                <span className={styles.noteText}>
                  {"Max Frankel. \"U.S. Insists Soviet Reciprocate on Fair,\" "}<em>{"New York Times"}</em>{", 3 May 1962; Rydell, "}<em>{"Fair America"}</em>{"."}
                </span>
              </li>
              <li id="fn-51" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  51
                </span>
                <span className={styles.noteText}>
                  {"Max Frankel. \"U.S. Insists Soviet Reciprocate on Fair,\" "}<em>{"New York Times"}</em>{", 2 May 1962."}
                </span>
              </li>
              <li id="fn-52" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  52
                </span>
                <span className={styles.noteText}>
                  {"Letter from John Thornton to Poletti, 9 July 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-53" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  53
                </span>
                <span className={styles.noteText}>
                  {"Emanuel Perlmutter. \"World's Fair Bid to Peiping Barred,\" "}<em>{"New York Times"}</em>{", 3 June 1962; Letter from Beach to Sylvia Berger, 11 October 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-54" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  54
                </span>
                <span className={styles.noteText}>
                  {"Letter from Soviet Embassy to Department of State, 28 June 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-55" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  55
                </span>
                <span className={styles.noteText}>
                  {"Max Frankel. \"U.S. Insists Soviet Reciprocate on Fair,\" "}<em>{"New York Times"}</em>{", 2 May 1962."}
                </span>
              </li>
              <li id="fn-56" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  56
                </span>
                <span className={styles.noteText}>
                  {"Telegram from Nesterov to Moses, 29 September 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-57" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  57
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to Rusk, 29 September 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-58" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  58
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to Rusk, 30 September 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-59" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  59
                </span>
                <span className={styles.noteText}>
                  <em>{"New York Mirror"}</em>{", 4 October 1962."}
                </span>
              </li>
              <li id="fn-60" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  60
                </span>
                <span className={styles.noteText}>
                  {"Letter from William Tyler to Moses, 2 October 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-61" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  61
                </span>
                <span className={styles.noteText}>
                  <em>{"Daily News"}</em>{", 4 October 1962."}
                </span>
              </li>
              <li id="fn-62" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  62
                </span>
                <span className={styles.noteText}>
                  {"From a summary of a conversation with James Hurd, in memo from Poletti to Beach, 23 October 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-63" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  63
                </span>
                <span className={styles.noteText}>
                  <em>{"New York Post"}</em>{", 5 October 1962."}
                </span>
              </li>
              <li id="fn-64" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  64
                </span>
                <span className={styles.noteText}>
                  <em>{"Journal American"}</em>{", 8 October 1962."}
                </span>
              </li>
              <li id="fn-65" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  65
                </span>
                <span className={styles.noteText}>
                  {"John Brooks, \"Diplomacy at Flushing Meadow,\" "}<em>{"New Yorker"}</em>{", 1 June 1963."}
                </span>
              </li>
              <li id="fn-66" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  66
                </span>
                <span className={styles.noteText}>
                  {"Note from Poletti on meeting with Soviet Foreign Minister Nikolai Patolichev, December 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-67" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  67
                </span>
                <span className={styles.noteText}>
                  {"Poletti in Robert Moses, "}<em>{"Public Works: A Dangerous Trade"}</em>{" (New York: McGraw Hill, 1970), 594-596."}
                </span>
              </li>
              <li id="fn-68" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  68
                </span>
                <span className={styles.noteText}>
                  {"Progress Report #7, 24 January 1963, World's Fair Corporation Archives, Box 69."}
                </span>
              </li>
              <li id="fn-69" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  69
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to a Queens College Student, 9 November 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-70" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  70
                </span>
                <span className={styles.noteText}>
                  {"Robert Moses. \"Why a Fair? And Why This Fair?\" "}<em>{"New York Times"}</em>{", 23 April 1964."}
                </span>
              </li>
            </ol>
          </section>
          <section className={styles.section} aria-labelledby="sec-71">
            <h2 id="sec-71" className={styles.sectionHeading}>
              {"\"Where Pagodas & Minarets...\""}
            </h2>
            <ol className={styles.noteList} start={71}>
              <li id="fn-71" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  71
                </span>
                <span className={styles.noteText}>
                  {"\"Here is How Things Might Look Someday,\" "}<em>{"Life"}</em>{", 1 May 1964."}
                </span>
              </li>
              <li id="fn-72" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  72
                </span>
                <span className={styles.noteText}>
                  {"Gay Talese. \"Soviet-U.S. 'Race' at Fair Expected,\" "}<em>{"New York Times"}</em>{", 22 July 1962."}
                </span>
              </li>
              <li id="fn-73" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  73
                </span>
                <span className={styles.noteText}>
                  {"Letter from William Crawford to State Department, 29 May 1962, World's Fair Corporation Archives, Box 281, Romania Folder"}
                </span>
              </li>
              <li id="fn-74" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  74
                </span>
                <span className={styles.noteText}>
                  {"Gay Talese, \"Soviet-US 'Race' At Fair Expected\", "}<em>{"New York Times"}</em>{", 22 July 1962"}
                </span>
              </li>
              <li id="fn-75" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  75
                </span>
                <span className={styles.noteText}>
                  {"Transcript of Senator Javits, 10 July 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-76" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  76
                </span>
                <span className={styles.noteText}>
                  {"Public Statement by Robert Moses in regards to Javits's speech, 12 July 1962, World's Fair Corporation Archives, Box 281."}
                </span>
              </li>
              <li id="fn-77" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  77
                </span>
                <span className={styles.noteText}>
                  {"Announcement of the Information Minister, 29 January 1961, World's Fair Corporation Archives, Box 273."}
                </span>
              </li>
              <li id="fn-78" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  78
                </span>
                <span className={styles.noteText}>
                  {"Letter from Ambassador Howard P. Jones to Charles Poletti, 7 March 1961, World's Fair Corporation Archives, Box 273."}
                </span>
              </li>
              <li id="fn-79" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  79
                </span>
                <span className={styles.noteText}>
                  {"Letter from Jones to Poletti, 23 June 1961; Memo from Allan Beach to Poletti, 4 August 1961; Memo from Gates Davison to Poletti, 18 August 1961,World's Fair Corporation Archives, Box 273, Indonesia folder."}
                </span>
              </li>
              <li id="fn-80" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  80
                </span>
                <span className={styles.noteText}>
                  {"\"Indonesia Offered Fair Role,\" "}<em>{"New York Times"}</em>{", 25 January 1961; Bernard Kalb. \"Sukarno Chooses Site at 1964 Fair,\" "}<em>{"New York Times"}</em>{", 16 September 1961."}
                </span>
              </li>
              <li id="fn-81" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  81
                </span>
                <span className={styles.noteText}>
                  {"Sie Pek Ho. \"Indonesia Plans for NY Fair Exhibit,\" "}<em>{"Christian Science Monitor"}</em>{", 10 January 1963."}
                </span>
              </li>
              <li id="fn-82" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  82
                </span>
                <span className={styles.noteText}>
                  {"\"Sukarno: Advice to Girls At Fair: 'Don't Wiggle,'\" "}<em>{"New York Times"}</em>{", 24 June 1964."}
                </span>
              </li>
              <li id="fn-83" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  83
                </span>
                <span className={styles.noteText}>
                  {"Gates Davison, in John Brooks, \"Diplomacy at Flushing Meadow,\" "}<em>{"New Yorker"}</em>{", 1 June 1963."}
                </span>
              </li>
              <li id="fn-84" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  84
                </span>
                <span className={styles.noteText}>
                  {"\"Sukarno Drops Plan to Visit His Pavilion,\" "}<em>{"New York Times"}</em>{", 3 May 1964; Memo, World's Fair Corporation Archives, Box 273."}
                </span>
              </li>
              <li id="fn-85" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  85
                </span>
                <span className={styles.noteText}>
                  {"Marianne Means, Article, "}<em>{"New York Sunday Journal American"}</em>{", 21 February 1965."}
                </span>
              </li>
              <li id="fn-86" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  86
                </span>
                <span className={styles.noteText}>
                  {"\"Indonesia Halts Plans for Pavilion at Fair,\" "}<em>{"New York Times"}</em>{", 12 March 1965; "}<em>{"Reuters"}</em>{", 11 March 1965; "}<em>{"UPI"}</em>{", 12 March 1965."}
                </span>
              </li>
              <li id="fn-87" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  87
                </span>
                <span className={styles.noteText}>
                  {"Robert Alden. \"World's Fair Seizes Indonesian Pavilion,\" "}<em>{"New York Times"}</em>{", 1 April 1965."}
                </span>
              </li>
              <li id="fn-88" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  88
                </span>
                <span className={styles.noteText}>
                  {"\"Sukarno,\" http://encyclopedia.thefreedictionary.com/sukarno ."}
                </span>
              </li>
              <li id="fn-89" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  89
                </span>
                <span className={styles.noteText}>
                  {"Louis P. Lochner, \"Report of Committee's Visit to Berlin (12/1-14/60),\" 16 December 1960, World's Fair Corporation Archives, Box 272."}
                </span>
              </li>
              <li id="fn-90" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  90
                </span>
                <span className={styles.noteText}>
                  {"World's Fair Corporation Archives, Box 272."}
                </span>
              </li>
              <li id="fn-91" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  91
                </span>
                <span className={styles.noteText}>
                  {"Caro, 1093; John Brooks, \"Diplomacy at Flushing Meadow,\" "}<em>{"New Yorker"}</em>{", 1 June 1963."}
                </span>
              </li>
              <li id="fn-92" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  92
                </span>
                <span className={styles.noteText}>
                  {"Time-Life Books, "}<em>{"Official Guide New York World's Fair 1964/1965"}</em>{" (New York: Time Incorporated, 1964) 126-7."}
                </span>
              </li>
              <li id="fn-93" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  93
                </span>
                <span className={styles.noteText}>
                  {"Swedish Pavilion News, World's Fair Corporation Archives, Box 282; "}<em>{"Official Guide"}</em>{", 148-150."}
                </span>
              </li>
              <li id="fn-94" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  94
                </span>
                <span className={styles.noteText}>
                  <em>{"Official Guide"}</em>{", 140-2."}
                </span>
              </li>
              <li id="fn-95" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  95
                </span>
                <span className={styles.noteText}>
                  {"\"The World of Already,\" "}<em>{"Time"}</em>{", 5 June 1964, 51."}
                </span>
              </li>
              <li id="fn-96" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  96
                </span>
                <span className={styles.noteText}>
                  {"Nicholson, 200."}
                </span>
              </li>
              <li id="fn-97" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  97
                </span>
                <span className={styles.noteText}>
                  {"Pamphlet commemorating China's groundbreaking, Poletti Papers, Folder S233"}
                </span>
              </li>
              <li id="fn-98" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  98
                </span>
                <span className={styles.noteText}>
                  {"Transcript from 14 December 1962, in Moses, "}<em>{"Dangerous Trade"}</em>{", 560."}
                </span>
              </li>
              <li id="fn-99" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  99
                </span>
                <span className={styles.noteText}>
                  {"\"The World of Already,\" "}<em>{"Time"}</em>{", 5 June 1964, 52."}
                </span>
              </li>
              <li id="fn-100" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  100
                </span>
                <span className={styles.noteText}>
                  <em>{"Official Guide"}</em>{", 180-2; Rydell, "}<em>{"Fair America"}</em>{", 109."}
                </span>
              </li>
            </ol>
          </section>
          <section className={styles.section} aria-labelledby="sec-101">
            <h2 id="sec-101" className={styles.sectionHeading}>
              {"\"War through Misunderstanding\""}
            </h2>
            <ol className={styles.noteList} start={101}>
              <li id="fn-101" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  101
                </span>
                <span className={styles.noteText}>
                  {"Robert Moses. \"Why a Fair and Why This Fair?\" "}<em>{"New York Times"}</em>{", 22 April 1964."}
                </span>
              </li>
              <li id="fn-102" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  102
                </span>
                <span className={styles.noteText}>
                  {"Walter Carlson. \"Alex Rose Resigns At Fair Over Mural.\" "}<em>{"New York Times"}</em>{", 24 June 1964."}
                </span>
              </li>
              <li id="fn-103" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  103
                </span>
                <span className={styles.noteText}>
                  {"Martin Tolchin. \"Jordan's Exhibit Assailed By Jews.\" "}<em>{"New York Times"}</em>{", 25 April 1954."}
                </span>
              </li>
              <li id="fn-104" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  104
                </span>
                <span className={styles.noteText}>
                  {"PR Newswire, 21 May 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-105" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  105
                </span>
                <span className={styles.noteText}>
                  {"Telegram from Moses to American-Israel Pavilion, 25 April 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-106" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  106
                </span>
                <span className={styles.noteText}>
                  {"Telegram from O'Dwyer to Deegan, 29 April 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-107" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  107
                </span>
                <span className={styles.noteText}>
                  {"Martin Tolchin. \"Jordan Threatens to Close Fair Pavilion if Controversial Mural is Removed.\" "}<em>{"New York Times"}</em>{", 1 May 1964."}
                </span>
              </li>
              <li id="fn-108" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  108
                </span>
                <span className={styles.noteText}>
                  {"Telegram from AJC to Moses, 15 May 1964, World's Fair Corporation Archives, Box 278; Robert Alden. \"Jewish Congress Seeks to Picket Jordan Pavilion.\" "}<em>{"New York Times"}</em>{", 18 May 1964; Telegram from Moses to AJC, 18 May 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-109" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  109
                </span>
                <span className={styles.noteText}>
                  <em>{"PR Newswire"}</em>{", 21 May 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-110" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  110
                </span>
                <span className={styles.noteText}>
                  {"Telegrams from Mehdi to Moses and Moses to Mehdi, 19 May 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-111" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  111
                </span>
                <span className={styles.noteText}>
                  {"\"Suit Asks Closing of Jordan Exhibit.\" "}<em>{"New York Times"}</em>{", 21 May 1964; Mohammed T. Mehdi. \"Jordan's Mural and Free Speech.\" "}<em>{"New York Times"}</em>{", 3 June 1964."}
                </span>
              </li>
              <li id="fn-112" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  112
                </span>
                <span className={styles.noteText}>
                  {"\"Suit on Fair Mural is Argued in Court.\" "}<em>{"New York Times"}</em>{", 5 June 1964."}
                </span>
              </li>
              <li id="fn-113" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  113
                </span>
                <span className={styles.noteText}>
                  {"Robert Moses. \"Why a Fair? And Why This Fair?\" "}<em>{"New York Times"}</em>{", 22 Apr 1964."}
                </span>
              </li>
              <li id="fn-114" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  114
                </span>
                <span className={styles.noteText}>
                  {"Francis X. Clines. \"French Exhibition is Ordered Closed By Fair Officials.\" "}<em>{"New York Times"}</em>{", 10 May 1964."}
                </span>
              </li>
              <li id="fn-115" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  115
                </span>
                <span className={styles.noteText}>
                  {"\"Fair Bids Protestants Cancel Film Showing Jesus as a Clown.\" "}<em>{"New York Times"}</em>{", 9 April 1964."}
                </span>
              </li>
              <li id="fn-116" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  116
                </span>
                <span className={styles.noteText}>
                  {"Philip H. Dougherty. \"Moses Shrugs Off Low Crowds And Folding Shows at the Fair.\" "}<em>{"New York Times"}</em>{", 1 August 1964."}
                </span>
              </li>
              <li id="fn-117" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  117
                </span>
                <span className={styles.noteText}>
                  {"Caro, 1101."}
                </span>
              </li>
              <li id="fn-118" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  118
                </span>
                <span className={styles.noteText}>
                  {"Caro, 411."}
                </span>
              </li>
              <li id="fn-119" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  119
                </span>
                <span className={styles.noteText}>
                  {"\"Shintoist Purifies Japan's Fair Site,\" "}<em>{"New York Times"}</em>{", 23 April 1963."}
                </span>
              </li>
              <li id="fn-120" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  120
                </span>
                <span className={styles.noteText}>
                  {"\"Israel Withdraws from '64-65 Fair; Cites Rise in Costs,\" "}<em>{"New York Times"}</em>{", 22 October 1962; Caro, 1101."}
                </span>
              </li>
              <li id="fn-121" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  121
                </span>
                <span className={styles.noteText}>
                  {"Nicholson, 178-183."}
                </span>
              </li>
              <li id="fn-122" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  122
                </span>
                <span className={styles.noteText}>
                  {"Roberta Strauss Feuerlich. \"God and Man in Flushing Meadow,\" "}<em>{"Reporter"}</em>{", 13 August 1964, in Moses, "}<em>{"Dangerous Trade"}</em>{", 612."}
                </span>
              </li>
              <li id="fn-123" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  123
                </span>
                <span className={styles.noteText}>
                  {"\"Religion Present Throughout Fair,\" "}<em>{"New York Times"}</em>{", 22 April 1964."}
                </span>
              </li>
              <li id="fn-124" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  124
                </span>
                <span className={styles.noteText}>
                  {"Letter from Ghaleb Barakat to Charles Poletti, 7 June 1964; Letter from Rifai'I to Plimpton, 11 June 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-125" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  125
                </span>
                <span className={styles.noteText}>
                  {"City Council Resolution, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-126" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  126
                </span>
                <span className={styles.noteText}>
                  {"\"Council Unit Hits Jordanian Mural,\" "}<em>{"New York Times"}</em>{", 19 June 1964."}
                </span>
              </li>
              <li id="fn-127" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  127
                </span>
                <span className={styles.noteText}>
                  {"Walter Carlson. \"Israeli Pavilion To Answer Mural,\" "}<em>{"New York Times"}</em>{", 25 June 1964."}
                </span>
              </li>
              <li id="fn-128" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  128
                </span>
                <span className={styles.noteText}>
                  {"Letters from Moses to Harris and from Harris to Moses, World's Fair Corporation Archives, Box 277."}
                </span>
              </li>
              <li id="fn-129" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  129
                </span>
                <span className={styles.noteText}>
                  {"Letter from Seymour Halpern to Moses, 29 May 1964; Letter from Moses to Halpern, 2 June 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-130" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  130
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to office of Keating, 21 May 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-131" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  131
                </span>
                <span className={styles.noteText}>
                  {"Robert Alden. \"Protestants Keep 'Parable' at Fair,\" "}<em>{"New York Times"}</em>{", 25 May 1964."}
                </span>
              </li>
              <li id="fn-132" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  132
                </span>
                <span className={styles.noteText}>
                  {"Caro, 1111; \"Zaretzki Assails Moses As 'Despot,'\" "}<em>{"New York Times"}</em>{", 29 June 1964; Walter Carlson. \"Alex Rose Resigns At Fair Over Mural,\" "}<em>{"New York Times"}</em>{", 24 June 1964."}
                </span>
              </li>
              <li id="fn-133" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  133
                </span>
                <span className={styles.noteText}>
                  {"Walter Carlson. \"Alex Rose Resigns At Fair Over Mural,\" "}<em>{"New York Times"}</em>{", 24 June 1964."}
                </span>
              </li>
              <li id="fn-134" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  134
                </span>
                <span className={styles.noteText}>
                  {"\"Zaretzki Assails Moses As 'Despot,'\" "}<em>{"New York Times"}</em>{", 29 June 1964."}
                </span>
              </li>
              <li id="fn-135" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  135
                </span>
                <span className={styles.noteText}>
                  {"Walter Carlson. \"Fair Scores Council's Demand For Removal of Jordan Mural,\" "}<em>{"New York Times"}</em>{", 1 July 1964."}
                </span>
              </li>
              <li id="fn-136" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  136
                </span>
                <span className={styles.noteText}>
                  {"Letter from Lionel Harris to Poletti, 23 July 1964, World's Fair Corporation Archives, Box 278."}
                </span>
              </li>
              <li id="fn-137" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  137
                </span>
                <span className={styles.noteText}>
                  {"Robert Moses. \"Harness the Jordan,\" "}<em>{"New York Times"}</em>{", 5 June 1971."}
                </span>
              </li>
              <li id="fn-138" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  138
                </span>
                <span className={styles.noteText}>
                  {"Robert Alden. \"Israel Premier Cancels Fair Visit in Dispute Over Jordan Pavilion,\" "}<em>{"New York Times"}</em>{", 23 May 1964."}
                </span>
              </li>
              <li id="fn-139" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  139
                </span>
                <span className={styles.noteText}>
                  {"Letter from Moses to WNET, 25 November 1977, Poletti Papers."}
                </span>
              </li>
              <li id="fn-140" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  140
                </span>
                <span className={styles.noteText}>
                  {"Caro, 1093."}
                </span>
              </li>
              <li id="fn-141" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  141
                </span>
                <span className={styles.noteText}>
                  <em>{"Washington Post"}</em>{", 2 July 1964; Will Lissner. \"12 Jewish Leaders Acquitted In Picketing at the World's Fair,\" "}<em>{"New York Times"}</em>{", 30 July 1964; Robert Alden. \"Pieta is Prepared For Fair Opening,\" "}<em>{"New York Times"}</em>{", 10 April 1965."}
                </span>
              </li>
              <li id="fn-142" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  142
                </span>
                <span className={styles.noteText}>
                  {"Tania Long. \"Fight Breaks Out In Dispute At Fair,\" "}<em>{"New York Times"}</em>{", 1 May 1965."}
                </span>
              </li>
              <li id="fn-143" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  143
                </span>
                <span className={styles.noteText}>
                  {"Memo to from Henry Prehodka to Lionel Harris, 19 May 1965, World's Fair Corporation Archives, Box 277."}
                </span>
              </li>
            </ol>
          </section>
          <section className={styles.section} aria-labelledby="sec-144">
            <h2 id="sec-144" className={styles.sectionHeading}>
              {"Conclusion"}
            </h2>
            <ol className={styles.noteList} start={144}>
              <li id="fn-144" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  144
                </span>
                <span className={styles.noteText}>
                  {"Cable from Poletti to Moses, 16-17 June 1961, Poletti Papers, Folder S224."}
                </span>
              </li>
              <li id="fn-145" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  145
                </span>
                <span className={styles.noteText}>
                  <em>{"Official Guide"}</em>{", 157."}
                </span>
              </li>
              <li id="fn-146" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  146
                </span>
                <span className={styles.noteText}>
                  {"Indira Gandhi in Moses, "}<em>{"Dangerous Trade"}</em>{", 567."}
                </span>
              </li>
              <li id="fn-147" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  147
                </span>
                <span className={styles.noteText}>
                  <em>{"Official Guide"}</em>{", 159."}
                </span>
              </li>
              <li id="fn-148" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  148
                </span>
                <span className={styles.noteText}>
                  {"Rydell, "}<em>{"All the World's a Fair"}</em>{", 154-183."}
                </span>
              </li>
              <li id="fn-149" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  149
                </span>
                <span className={styles.noteText}>
                  {"\"The World of Already,\" "}<em>{"Time"}</em>{", 5 June 1964, 52."}
                </span>
              </li>
              <li id="fn-150" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  150
                </span>
                <span className={styles.noteText}>
                  {"Pamphlet on Guinea groundbreaking, 18 July 1963, Poletti Papers, Folder S233."}
                </span>
              </li>
              <li id="fn-151" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  151
                </span>
                <span className={styles.noteText}>
                  {"Transcript of Africa Press Conference, 12 November 1963, Poletti Papers, Folder S233."}
                </span>
              </li>
              <li id="fn-152" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  152
                </span>
                <span className={styles.noteText}>
                  {"Progress Report #6, 12 September 1962, World's Fair Corporation Archives, Box 69."}
                </span>
              </li>
              <li id="fn-153" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  153
                </span>
                <span className={styles.noteText}>
                  {"Robert Moses. \"Robert Moses from the Bridge,\" "}<em>{"Newsday"}</em>{", 8 January 1966."}
                </span>
              </li>
              <li id="fn-154" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  154
                </span>
                <span className={styles.noteText}>
                  <em>{"Official Guide"}</em>{", 86."}
                </span>
              </li>
              <li id="fn-155" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  155
                </span>
                <span className={styles.noteText}>
                  {"\"The World of Already,\" "}<em>{"Time"}</em>{", 5 June 1964, 49."}
                </span>
              </li>
              <li id="fn-156" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  156
                </span>
                <span className={styles.noteText}>
                  {"Francis Thompson. \"Introduction\" in "}<em>{"To Be Alive! From the Film by Frances Thomson and Alexander Hammid"}</em>{", ed. Alistair Reid (New York: MacMillan Company, 1966)."}
                </span>
              </li>
              <li id="fn-157" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  157
                </span>
                <span className={styles.noteText}>
                  <em>{"Official Guide"}</em>{",100."}
                </span>
              </li>
              <li id="fn-158" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  158
                </span>
                <span className={styles.noteText}>
                  {"\"The World of Already,\" 5 June 1964, "}<em>{"Time"}</em>{", 50."}
                </span>
              </li>
              <li id="fn-159" className={styles.note}>
                <span className={styles.noteNum} aria-hidden="true">
                  159
                </span>
                <span className={styles.noteText}>
                  {"Robert Alden. \"Despite Controversies, Attendances Passes All Other Expositions,\" "}<em>{"New York Times"}</em>{", 17 October 1965."}
                </span>
              </li>
            </ol>
          </section>

          <p className={styles.copyright}>
            © Copyright 2005 Sharyn Elise Jackson, All Rights Reserved.
          </p>
        </div>
      </article>

      <Nav2Bar
        previousHref="/intpar07"
        explicitPrevious
        nextHref="/intpar09"
        hideOverview
      />
    </>
  );
}
