import type { Metadata } from "next";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Construction \u2014 General Electric \u2014 nywf64.com",
  description:
    "General Electric Progressland construction — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric Construction — photographs standard.
 * Body from legacy genele07.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Genele07Page() {
  return (
    <PhotographsPage
      heroLabel="General Electric Pavilion"
      titleId="genele07-title"
      title="Construction"
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele06"
      overviewHref="/geneleoverview"
      nextHref="/genele08"
      sections={[
        {
          heading: "Aerial views of the General Electric Pavilion under construction. (Top) Spring/S...",
          photos: [
            {
              image: {
                src: "/images/genele07/ge128.jpg",
                width: 500,
                height: 371,
                alt: "Aerial views of the General Electric Pavilion under construction. (Top) Spring/Summer 1963. (Bottom) Fall/Winter 1963.",
              },
              title: "Aerial views of the General Electric Pavilion under construction. (Top) Spring/Summer 1963. (Bottom) Fall/Winter 1963.",
              source: "Source: General Electric Pavilion publicity photographs presented courtesy Mike Kraus Collection.",
            },
            {
              image: {
                src: "/images/genele07/ge129.jpg",
                width: 500,
                height: 371,
                alt: "Aerial views of the General Electric Pavilion under construction. (Top) Spring/Summer 1963. (Bottom) Fall/Winter 1963.",
              },
              title: "Aerial views of the General Electric Pavilion under construction. (Top) Spring/Summer 1963. (Bottom) Fall/Winter 1963.",
              source: "Source: General Electric Pavilion publicity photographs presented courtesy Mike Kraus Collection.",
            },
          ],
        },
        {
          heading: "(Top) Factory \"front\" under construction in Medallion City. (Bottom) Workmen pre...",
          photos: [
            {
              image: {
                src: "/images/genele07/ge132.jpg",
                width: 377,
                height: 500,
                alt: "(Top) Factory \"front\" under construction in Medallion City. (Bottom) Workmen prepare the Steel Mill diorama for Medallio",
              },
              title: (<>
                (Top) Factory &quot;front&quot; under construction in Medallion City. (Bottom) Workmen prepare the Steel Mill diorama for Medallion City.
              </>),
              source: "Source: General Electric publicity photographs presented courtesy Mike Kraus Collection.",
            },
            {
              image: {
                src: "/images/genele07/ge133.jpg",
                width: 500,
                height: 384,
                alt: "(Top) Factory \"front\" under construction in Medallion City. (Bottom) Workmen prepare the Steel Mill diorama for Medallio",
              },
              title: (<>
                (Top) Factory &quot;front&quot; under construction in Medallion City. (Bottom) Workmen prepare the Steel Mill diorama for Medallion City.
              </>),
              source: "Source: General Electric publicity photographs presented courtesy Mike Kraus Collection.",
            },
          ],
        },
        {
          heading: "(Top) Wald Disney inspects a model of the GE Pavilion in 1963 along with Gerald ...",
          photos: [
            {
              image: {
                src: "/images/genele07/ge131.jpg",
                width: 396,
                height: 500,
                alt: "(Top) Wald Disney inspects a model of the GE Pavilion in 1963 along with Gerald L. Phillippe, President, General Electri",
              },
              title: (<>
                (Top) Wald Disney inspects a model of the GE Pavilion in 1963 along with Gerald L. Phillippe, President, General Electric Corporation and Steven C. Van Voorhis, Manager, GE World&apos;s Fair Operations. (Bottom) Walt Disney speaks to VIP&apos;s at the General Electric Pavilion. The men in dark suits, arms folded, left center, are: Steven C. Van Voorhis (left) and Gerald L. Phillippe.
              </>),
              source: (<></>),
            },
            {
              image: {
                src: "/images/genele07/ge130.jpg",
                width: 500,
                height: 400,
                alt: "(Top) Wald Disney inspects a model of the GE Pavilion in 1963 along with Gerald L. Phillippe, President, General Electri",
              },
              title: (<>
                (Top) Wald Disney inspects a model of the GE Pavilion in 1963 along with Gerald L. Phillippe, President, General Electric Corporation and Steven C. Van Voorhis, Manager, GE World&apos;s Fair Operations. (Bottom) Walt Disney speaks to VIP&apos;s at the General Electric Pavilion. The men in dark suits, arms folded, left center, are: Steven C. Van Voorhis (left) and Gerald L. Phillippe.
              </>),
              source: (<></>),
            },
          ],
        },
      ]}
    />
  );
}
