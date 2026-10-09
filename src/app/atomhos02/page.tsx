import type { Metadata } from "next";
import { AtomhosNavChrome } from "@/components/AtomhosNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Atomedic Hospital — nywf64.com",
  description:
    "Atomedic Hospital entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Atomedic Hospital Information Manual page — “manual” standard.
 * Body from legacy atomhos02.html. Layout: InformationManualPage (/bell02).
 */
export default function Atomhos02Page() {
  return (
    <InformationManualPage
      heroLabel="Atomedic Hospital"
      titleId="atomhos02-title"
      hero={{
        src: "/images/atomhosoverview/hero-banner.jpg",
        alt: "Atomedic Hospital at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AtomhosNavChrome />}
      previousHref="/atomhos01"
      overviewHref="/atomhosoverview"
      nextHref="/atomhos03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Atomedic Hospital"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Hugh C. MacGuire, M. D.",
            "Atomedic Research Center",
            "P. O. Box 2664",
            "Montgomery 5, Alabama",
            "205 265-0701",
            "and",
            "Atomedic Hospital",
            "New York World's Fair",
            "World's Fair, New York 11380",
            "WF 4-4810",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["General Sheldon Brownton"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 26, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 14",
            "Meridian Road",
            "North of Bock 4,",
            "In the Service Area",
          ],
        },
        {
          label: "DESIGN ENGINEER",
          lines: [
            "Mr. William Streed",
            "P. O. Box 2664",
            "Montgomery 5, Alabama",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Turner Construction Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/atomhos02/manual-photo.jpg",
        width: 600,
        height: 165,
        alt: "Atomedic Hospital",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Atomedic Hospital is the functioning emergency hospital of the
              Fair. <u>Tours</u> will be arranged for professional personnel,
              hospital administrators, health insurance experts and delegates
              from foreign areas by appointment only.
            </>
          ),
        },
        {
          body: (
            <>
              The circular, 100 foot diameter structure is made of aluminum and
              insulated with foam plastic. The central core of the hospital
              houses control and monitoring equipment and provides space for
              emergency surgery. Surrounding this, there are 22, two bed wards.
              Only emergency medical-surgical services are provided at the Fair.
              Call boxes assure prompt medical attention within minutes of an
              emergency.
            </>
          ),
        },
        {
          body: (
            <>
              The hospital is staffed by 20 professional nurses, who also
              maintain three first-aid stations. Services are available to the
              degree required on a 24 hour basis. There are one to three doctors
              on the grounds during operational periods. Patients requiring
              definitive care are transferred to local hospitals.
            </>
          ),
        },
        {
          body: (
            <>
              Constant <u>nurse-patient communication</u> - both verbal and
              visual - is available via closed circuit television. The latest
              equipment for continuous monitoring of patients&apos; body
              functions, including a computer which can automatically sense
              trouble, is demonstrated. Utility requirments, including air
              cleaning and conditioning and emergency power is concentrated in a{" "}
              <u>&quot;power pack&quot;</u> next to the hospital.
            </>
          ),
        },
        {
          body: (
            <>
              The hospital is sponsored on a voluntary basis by 90 leading
              United States industries and donated for use by the Fair, through
              the Atomdeic Research Center.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/atomhos02/produced-photo.jpg",
        width: 600,
        height: 332,
        alt: "Atomedic Hospital",
        bordered: true,
        title: "Atomedic Hospital",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}
