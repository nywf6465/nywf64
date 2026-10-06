import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak guidebook page.
 * Body from legacy easkod01.html. Layout: GuidebookSouvenirPage (/bell01).
 */
export default function Easkod01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod01-title"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkodoverview"
      nextHref="/easkod02"
      guide1964={{
        cover: {
          src: "/images/easkod01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/easkod01/kodaklogo64.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "EASTMAN KODAK",
        copy: (
          <>
            The world&apos;s largest outdoor photographic prints in color,
            visible from almost every point in the Fair, call attention to the
            unusual pavilion below, which has an undulating display roof of
            reinforced concrete and 15 exhibit sections, including two theaters.
            The pavilion has a threefold purpose: to demonstrate the wealth of
            experience to be gained from photography, to provide scenes for
            on-the-spot picture-taking, and to show the influence of photography
            on various aspects of modern life, among them science, leisure,
            medicine, industry and education. Multilingual attendants are on
            hand.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "FLOATING CARPET.",
            body: (
              <>
                The roof of the building provides a variety of backgrounds for
                photographers, including gently sloping walkways, sculptured
                fountains, pools containing exotic flowers - and even an area
                simulating the moon&apos;s surface. Reached by stairways and
                escalators, the roof is 363 feet in length and is supported by
                an unusual arrangement of columns that from a distance makes it
                appear to float.
              </>
            ),
          },
          {
            label: "COLOR GIANTS.",
            body: (
              <>
                Five color photographs, each 30 by 36 feet in size and
                illuminated day and night, are mounted on a tower 80 feet high
                which rises above one end of the pavilion. The prints, changed
                every four weeks, are selected from among thousands of
                photographs taken by special camera crews that traveled through
                much of the world looking for striking pictures of nature and of
                people at work and play.
              </>
            ),
          },
          {
            label: "SEEING, HEARING AND LEARNING.",
            body: (
              <>
                A 23-minute color move, <em>The Searching Eye</em>, made by the
                noted film technician Saul Bass, gives a child&apos;s view of
                common-place and unusual wonders of the world. Utilizing a new
                multi-image, 70-millimeter projection process, the movie is
                shown in a large, air-conditioned circular theater which is
                built into the base of the eight-story picture tower. In the
                smaller theater, which is entered from the roof of the pavilion,
                there are fashion shows and exhibits of Kodak&apos;s textiles as
                well as other nonphotographic products.
              </>
            ),
          },
          {
            label: "ANSWERS AND EXHIBITS.",
            body: (
              <>
                On the ground floor is a potpourri of services and displays.
                Attendants in an information center direct people to photogenic
                events being held at the Fair, specialists answer questions on
                photography, and technicians make free minor camera repairs and
                adjustments. Included among the exhibits:
                <br />
                <br />
                <strong>
                  <em>¶ </em>
                </strong>
                <em>&quot;Adventures in Photography&quot;</em> is a display of
                pictures illustrating the range of photographic opportunities
                for the average camera user.
                <br />
                <br />
                <strong>
                  <em>¶ </em>
                </strong>
                <em>The Science Area</em> is devoted to examples of
                photography&apos;s value to science and explanations of the
                science of photography.
                <br />
                <br />
                <strong>
                  <em>¶ </em>
                </strong>
                <em>Prizewinning photographs</em> have been assembled from a
                variety of competitions.
                <br />
                <br />
                <strong>
                  <em>¶ </em>
                </strong>
                <em>X-ray uses</em> for determining the fitness of pilots and
                airplanes, solving crimes and proving the authenticity of works
                of art are on display.
                <br />
                <br />
                <strong>
                  <em>¶ </em>
                </strong>
                <em>Movie techniques,</em> home and professional, are shown in
                two exhibits that also display the latest in movie equipment.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/easkod01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/easkod01/kodaklogo.gif",
          width: 144,
          height: 79,
          alt: "",
        },
        name: "EASTMAN KODAK",
        nameFace: "arial",
        summary: (
          <>
            Atop the pavilion are huge colored prints and a
            &quot;moondeck&quot; for picture-taking; inside are exhibits and an
            award-winning film.
          </>
        ),
        copy: (
          <>
            Saul Bass&apos;s 20-minute color film &quot;The Searching
            Eye,&quot; which was honored at the New York Film Festival, presents
            a camera-eye view of the world&apos;s wonders. Utilizing a new
            multi-image, 70-mm projection process, the movie is shown in a large
            circular theater. Elsewhere, films feature Kodak&apos;s new cameras
            and accessories and the company&apos;s textiles, chemicals and
            plastics.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "MOONDECK.",
            labelFace: "arial",
            body: (
              <>
                The building&apos;s undulating roof offers many novel
                backgrounds for camera bugs. Raised platforms are provided for
                photographing the Fair itself.
              </>
            ),
          },
          {
            label: "COLOR GIANTS.",
            labelFace: "arial",
            body: (
              <>
                Atop the 80-foot tower are five big illuminated color prints
                selected from thousands of striking pictures.
              </>
            ),
          },
          {
            label: "ANSWERS AND EXHIBITS.",
            labelFace: "arial",
            body: (
              <>
                In an information center, multilingual experts answer questions
                on photography and show amateurs how to take better pictures. An
                &quot;Adventures in Photography&quot; exhibit illustrates the
                wide range of creative opportunities for hobbyists. Other
                exhibits illustrate movie techniques, prizewinning pictures and
                other uses of photography.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/easkod01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/easkod01/indsmlmap.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/easkodmap",
      }}
    />
  );
}
