import type { Metadata } from "next";
import { ThaiNavChrome } from "@/components/ThaiNavChrome";
import { PostcardPage } from "@/components/PostcardPage";

export const metadata: Metadata = {
  title: "Postcards — Thailand — nywf64.com",
  description:
    "Thailand pavilion postcards from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thailand postcards page — “postcards” standard.
 * Body from legacy thai03.html. Layout: PostcardPage (/bell03 standard).
 */
export default function Thai03Page() {
  return (
    <PostcardPage
      heroLabel="Thailand"
      titleId="thai03-title"
      hero={{
        src: "/images/thaioverview/hero-banner.jpg",
        alt: "Thailand pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ThaiNavChrome />}
      previousHref="/thai02"
      overviewHref="/thaioverview"
      nextHref="/thai04"
      entries={[
        {
          front: {
            src: "/images/thai03/65630-B.jpg",
            width: 450,
            height: 283,
            alt: "Thailand Pavilion postcard No. 65630-B",
          },
          reverse: {
            src: "/images/thai03/65630-Breverse.jpg",
            width: 300,
            height: 88,
            alt: "Reverse — Thailand Pavilion postcard No. 65630-B",
          },
          meta: [
            "Thailand Pavilion",
            "Official Postcard",
            "No. 65630-B",
            "Dexter No. N/A",
            "Manhattan No. N/A",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/thai03/86859-B.jpg",
            width: 450,
            height: 279,
            alt: "Thailand Pavilion postcard No. 86859-B",
          },
          reverse: {
            src: "/images/thai03/86859-Breverse.jpg",
            width: 300,
            height: 96,
            alt: "Reverse — Thailand Pavilion postcard No. 86859-B",
          },
          meta: [
            "Thailand Pavilion",
            "Official Postcard",
            "No. 86859-B",
            "Dexter No. WF-51",
            "Manhattan No. W-54",
          ],
          sources: [
            "Source: Postcard Published by Dexter Press, West Nyack, N.Y.",
            "Source: Postcard Published by Manhattan Post Card Publishing Co., New York, N.Y.",
          ],
        },
        {
          front: {
            src: "/images/thai03/None4.jpg",
            width: 450,
            height: 298,
            alt: "Thailand Pavilion exhibitor postcard",
          },
          reverse: {
            src: "/images/thai03/None4reverse.jpg",
            width: 300,
            height: 70,
            alt: "Reverse — Thailand Pavilion exhibitor postcard",
          },
          meta: [
            "Thailand Pavilion",
            <span key="exhibitor" style={{ color: "#1e90ff" }}>
              Exhibitor Postcard
            </span>,
            "No. N/A",
          ],
          sources: [
            "Source: Postcard Made by Unknown",
            "Source: Postcard Published by Department of Economic Relations, Bangkok, Thailand",
          ],
        },
        {
          front: {
            src: "/images/thai03/WF-8.jpg",
            width: 450,
            height: 282,
            alt: "Thailand Pavilion unauthorized postcard No. WF8",
          },
          reverse: {
            src: "/images/thai03/WF-8reverse.jpg",
            width: 300,
            height: 81,
            alt: "Reverse — Thailand Pavilion unauthorized postcard No. WF8",
          },
          meta: [
            "Thailand Pavilion",
            <span key="unauthorized" style={{ color: "#ff0000" }}>
              Unauthorized Postcard
            </span>,
            "No. WF8",
          ],
          sources: [
            "Source: Postcard Published by Progressive Publications, Inc.",
          ],
        },
      ]}
    />
  );
}
