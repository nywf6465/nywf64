#!/usr/bin/env python3
import html
import re
from pathlib import Path


def clean(s: str) -> str:
    s = re.sub(r"<br\s*/?>", " ", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).replace("\xa0", " ").strip()


def jsx_text(s: str) -> str:
    parts: list[str] = []
    i = 0
    while i < len(s):
        if s.startswith("&quot;", i):
            parts.append("&quot;")
            i += 6
            continue
        c = s[i]
        if c == "&":
            j = s.find(";", i)
            if j != -1:
                parts.append(s[i : j + 1])
                i = j + 1
                continue
        if c == '"':
            parts.append("&quot;")
        elif c == "\\":
            parts.append("\\\\")
        elif c in {"<", ">"}:
            parts.append("")
        else:
            parts.append(c)
        i += 1
    return "".join(parts)


raw = Path("/tmp/ibm-legacy/ibm17.html").read_text(errors="ignore")
paras = [
    clean(m.group(1))
    for m in re.finditer(
        r'<font face="Arial" color="black">(.*?)</font>', raw, re.S
    )
    if len(clean(m.group(1))) > 40
]
letter_lines = [
    clean(x)
    for x in re.findall(
        r'<i><font size="-1" color="black"><b>(.*?)</b></font></i>', raw, re.S
    )
]

para_block = "\n".join(f"            <p>{jsx_text(p)}</p>" for p in paras)
letter_block = "\n".join(
    f'              <p className={{styles.letterLine}}><em>{jsx_text(l)}</em></p>'
    for l in letter_lines
)

page = f'''import type {{ Metadata }} from "next";
import Image from "next/image";
import {{ IbmNavChrome }} from "@/components/IbmNavChrome";
import {{ Nav2Bar }} from "@/components/Nav2Bar";
import styles from "./ibm17.module.css";
import heroBottomBar from "@/styles/heroBottomBar.module.css";
import overviewHeroStyles from "@/styles/overviewPageHero.module.css";

export const metadata: Metadata = {{
  title: "Essay: My IBM at the Fair — IBM Pavilion — nywf64.com",
  description:
    "Oren Kugler’s essay My IBM at the Fair — 1964/1965 New York World’s Fair on nywf64.com.",
}};

/** Essay from legacy ibm17.html — legacy wording and typos preserved. */
export default function Ibm17Page() {{
  return (
    <>
      <section className={{styles.hero}} aria-label="IBM Pavilion">
        <div
          className={{`${{overviewHeroStyles.frame}} ${{heroBottomBar.photoFrame}}`}}
        >
          <Image
            src="/images/ibmoverview/hero-banner.jpg"
            alt="IBM Pavilion at the 1964/1965 New York World’s Fair"
            width={{1905}}
            height={{826}}
            priority
            sizes="100vw"
            className={{overviewHeroStyles.art}}
            unoptimized
          />
        </div>
      </section>

      <IbmNavChrome />

      <article className={{styles.article}} aria-labelledby="ibm17-title">
        <header className={{styles.titleBar}}>
          <h1 id="ibm17-title" className={{styles.titleBarMain}}>
            <em>My IBM at the Fair</em>
          </h1>
          <p className={{styles.titleBarByline}}>... an essay by Oren Kugler</p>
        </header>

        <div className={{styles.articleInner}}>
          <div className={{styles.letterRow}}>
            <Image
              src="/images/ibm17/ibm01.jpg"
              alt=""
              width={{260}}
              height={{242}}
              className={{styles.letterPhoto}}
              unoptimized
            />
            <div className={{styles.letter}}>
{letter_block}
            </div>
          </div>

          <div className={{styles.body}}>
{para_block}
          </div>

          <figure className={{styles.figure}}>
            <Image
              src="/images/ibm17/ibm05.jpg"
              alt=""
              width={{379}}
              height={{261}}
              className={{styles.inlinePhoto}}
              unoptimized
            />
            <figcaption className={{styles.figCaption}}>
              <em>
                Oren&apos;s IBM Pavilion of the 1964/1965 New York World&apos;s Fair
                and the giant &quot;ovoid&quot; theater perched 90 feet above the
                main pavilion.
              </em>
            </figcaption>
          </figure>

          <figure className={{styles.figure}}>
            <Image
              src="/images/ibm17/ibm04.jpg"
              alt=""
              width={{240}}
              height={{238}}
              className={{styles.inlinePhoto}}
              unoptimized
            />
            <figcaption className={{styles.figCaption}}>
              <em>
                The &quot;People Wall&quot; - a moving grandstand seating 500 -
                lifts visitors into the giant ovoid theater overhead where a film
                on the workings of the Computer was shown.
              </em>
            </figcaption>
          </figure>

          <figure className={{styles.figure}}>
            <Image
              src="/images/ibm17/ibm03.jpg"
              alt=""
              width={{481}}
              height={{252}}
              className={{styles.inlinePhoto}}
              unoptimized
            />
            <figcaption className={{styles.figCaption}}>
              <em>
                IBM Pavilion&apos;s Master of Ceremonies greets visitors on the
                People Wall. Photo on the left shows MC&apos;s descent from the
                ovoid theater.
              </em>
            </figcaption>
          </figure>

          <figure className={{styles.figure}}>
            <Image
              src="/images/ibm17/ibm40.jpg"
              alt=""
              width={{420}}
              height={{320}}
              className={{styles.inlinePhoto}}
              unoptimized
            />
            <figcaption className={{styles.figCaption}}>
              <em>
                I received my draft notice about a month before the Fair was due
                to end. I left the Fair and IBM to spend some time with family and
                friends before going into the Army. By the way I did not leave the
                employ of IBM. Back in the 1960s, if you were drafted or elected
                to enlist for two years, you were still employed by IBM. The only
                difference was that you received 25% of your salary every month
                for the two years you served. Military pay being what it was made
                receiving more money from your employer then the Army paid you a
                major benefit. My manager at the Fair called me into his office
                before I left to bid me good luck and farewell and presented me
                with what everyone else would being receiving at the conclusion of
                the Fair. As you can see it is a pen mounted on marble with my
                name tag, the same as I wore on my suit every day, and a medallion
                commemorating the IBM Pavilion and the New York Worlds Fair. The
                single reminder of the Fair has increased in personal value to me
                with every year that passes since my Worlds Fair experience.
              </em>
            </figcaption>
          </figure>

          <p className={{styles.copy}}>
            &copy; Copyright 2003 Oren Kugler -- do not reprint without permission.
          </p>

          <div className={{styles.thanks}}>
            <p>
              Thank you to Oren Kugler for giving us a look back at the workings
              of the IBM pavilion at the Fair.
            </p>
          </div>
        </div>
      </article>

      <Nav2Bar
        previousHref="/ibm16"
        overviewHref="/ibmoverview"
        nextHref="/ibm18"
      />
    </>
  );
}}
'''

Path("/tmp/ibm-work/src/app/ibm17").mkdir(parents=True, exist_ok=True)
Path("/tmp/ibm-work/src/app/ibm17/page.tsx").write_text(page, encoding="utf-8")
print(f"Wrote ibm17 with {len(paras)} paragraphs")
