import type { Metadata } from "next";
import { HougtNavChrome } from "@/components/HougtNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — House of Good Taste — nywf64.com",
  description:
    "House of Good Taste photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab =
  "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.";
const kraus =
  "SOURCE: © Copyright Mike Kraus Collection";

/** Body from legacy hougt05.html (Photograph Scrap Book banner omitted). */
export default function Hougt05Page() {
  return (
    <PhotographsPage
      heroLabel="House of Good Taste"
      titleId="hougt05-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/hougtoverview/hero-banner.jpg",
        alt: "House of Good Taste at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HougtNavChrome />}
      previousHref="/hougt04"
      overviewHref="/hougtoverview"
      nextHref="/hougt06"
      sections={[
        {
          heading: "Gallery of Photographs",
          photos: [
            {
              image: {
                src: "/images/hougt05/5484.jpg",
                width: 400,
                height: 267,
                alt: "Entrance to the House of Good Taste",
              },
              title: "Entrance to the House of Good Taste",
              source: photoLab,
            },
            {
              image: {
                src: "/images/hougt05/hougt42.jpg",
                width: 560,
                height: 334,
                alt: "House of Good Taste entrance from the Mike Kraus Collection",
              },
              title:
                "A much more lively HGT entrance from the Mike Kraus Collection. The see-through name sign has given way to more visible solid red signage. Note the \"Cocktails - Restaurant\" signs indicating this shot was probably taken in 1965.",
              source: kraus,
            },
            {
              image: {
                src: "/images/hougt05/hougt66.jpg",
                width: 560,
                height: 376,
                alt: "House of Good Taste with Edward Durell Stone Modern House",
              },
              title:
                "What appears to be a mid-sixties scene of suburbia is actually The House of Good Taste at the World's Fair with Edward Durell Stone's Modern House in the foreground.",
              source: kraus,
            },
            {
              image: {
                src: "/images/hougt05/hougt67.jpg",
                width: 560,
                height: 347,
                alt: "Traditional Home of The House of Good Taste exhibit",
              },
              title: "The Traditional Home of The House of Good Taste exhibit.",
              source: kraus,
            },
            {
              image: {
                src: "/images/hougt05/hougt68.jpg",
                width: 560,
                height: 380,
                alt: "Traditional Home of The House of Good Taste exhibit",
              },
              title: "The Traditional Home of The House of Good Taste exhibit.",
              source: kraus,
            },
            {
              image: {
                src: "/images/hougt05/hougt69.jpg",
                width: 560,
                height: 318,
                alt: "Pavilion of Hidden Assets",
              },
              title:
                "The Pavilion of Hidden Assets is prominently featured in this photograph.",
              source: kraus,
            },
            {
              image: {
                src: "/images/hougt05/hougt70.jpg",
                width: 560,
                height: 368,
                alt: "Stone House courtyard",
              },
              title:
                "A nice view of one of the Stone House courtyards from a high vantage point.",
              source: kraus,
            },
          ],
        },
      ]}
    />
  );
}
