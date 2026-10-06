import type { NextConfig } from "next";

/**
 * When the legacy dump is available, map planned routes to static archive
 * content HTML (not .shtml chrome). Stems from src/lib/legacy.ts.
 *
 * Footer “Updated” date: build-time stamp via scripts/write-site-updated.mjs
 * (see src/lib/siteUpdated.ts). Do not walk public/ at request time — that
 * made Next trace the whole asset tree into every lambda (Vercel ENOSPC).
 */

const nextConfig: NextConfig = {
  // Allow Cursor Try Live / desktop preview proxies + Cloudflare quick tunnels
  // Without trycloudflare here, client components never hydrate over the tunnel
  // (hamburger onClick is a no-op — SSR button only).
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.cursor.sh",
    "*.cursor.com",
    "*.cursorapi.com",
    "*.trycloudflare.com",
  ],
  // Keep serverless traces lean — packaging failed with "no space left on
  // device" when every route NFT included ~235MB of public/ (footer mtime walk).
  outputFileTracingExcludes: {
    "*": [
      "public/**",
      "node_modules/next/dist/docs/**",
      "node_modules/**/*.md",
      "node_modules/**/*.markdown",
      "node_modules/**/README*",
      "node_modules/**/LICENSE*",
      "node_modules/**/CHANGELOG*",
      "node_modules/@types/**",
      "node_modules/typescript/**",
      "node_modules/eslint/**",
      "node_modules/eslint-config-next/**",
    ],
  },
  async redirects() {
    return [
      // Attraction overview pages removed — send traffic to first topic
      {
        source: "/adminbldgoverview",
        destination: "/adminbldg01",
        permanent: true,
      },
      {
        source: "/aertowoverview",
        destination: "/aertow01",
        permanent: true,
      },
      {
        source: "/africaoverview",
        destination: "/africa01",
        permanent: true,
      },
      {
        source: "/alaskaoverview",
        destination: "/alaska01",
        permanent: true,
      },
      {
        source: "/allstaoverview",
        destination: "/allsta01",
        permanent: true,
      },
      {
        source: "/amerisroverview",
        destination: "/amerisr01",
        permanent: true,
      },
      {
        source: "/amexoverview",
        destination: "/amex01",
        permanent: true,
      },
      {
        source: "/amfoverview",
        destination: "/amf01",
        permanent: true,
      },
      {
        source: "/amindoverview",
        destination: "/amind01",
        permanent: true,
      },
      {
        source: "/amisrloverview",
        destination: "/amerisr01",
        permanent: true,
      },
      {
        source: "/ampridoverview",
        destination: "/amprid01",
        permanent: true,
      },
      {
        source: "/amptheoverview",
        destination: "/ampthe01",
        permanent: true,
      },
      {
        source: "/archameroverview",
        destination: "/archamer01",
        permanent: true,
      },
      {
        source: "/argentoverview",
        destination: "/argent01",
        permanent: true,
      },
      {
        source: "/arlhatoverview",
        destination: "/arlhat01",
        permanent: true,
      },
      {
        source: "/astfountoverview",
        destination: "/astfount01",
        permanent: true,
      },
      {
        source: "/atomhosoverview",
        destination: "/atomhos01",
        permanent: true,
      },
      {
        source: "/austriaoverview",
        destination: "/austria01",
        permanent: true,
      },
      {
        source: "/autthroverview",
        destination: "/autthr01",
        permanent: true,
      },
      {
        source: "/avisoverview",
        destination: "/avis01",
        permanent: true,
      },
      {
        source: "/barbufoverview",
        destination: "/barbuf01",
        permanent: true,
      },
      {
        source: "/belloverview",
        destination: "/bell01",
        permanent: true,
      },
      {
        source: "/belviloverview",
        destination: "/belvil01",
        permanent: true,
      },
      {
        source: "/berlinoverview",
        destination: "/berlin01",
        permanent: true,
      },
      {
        source: "/betlivoverview",
        destination: "/betliv01",
        permanent: true,
      },
      {
        source: "/bilgraoverview",
        destination: "/bilgra01",
        permanent: true,
      },
      {
        source: "/bountyoverview",
        destination: "/bounty01",
        permanent: true,
      },
      {
        source: "/boustroverview",
        destination: "/boustr01",
        permanent: true,
      },
      {
        source: "/boyscooverview",
        destination: "/boysco01",
        permanent: true,
      },
      {
        source: "/braraioverview",
        destination: "/brarai01",
        permanent: true,
      },
      {
        source: "/brilionoverview",
        destination: "/brilion01",
        permanent: true,
      },
      {
        source: "/caribboverview",
        destination: "/caribb01",
        permanent: true,
      },
      {
        source: "/carnivoverview",
        destination: "/carniv01",
        permanent: true,
      },
      {
        source: "/carparoverview",
        destination: "/carpar01",
        permanent: true,
      },
      {
        source: "/cenameriverview",
        destination: "/cenamer01",
        permanent: true,
      },
      {
        source: "/cengrioverview",
        destination: "/cengri01",
        permanent: true,
      },
      {
        source: "/chinaoverview",
        destination: "/china01",
        permanent: true,
      },
      {
        source: "/chriscioverview",
        destination: "/chrsci01",
        permanent: true,
      },
      {
        source: "/chrscioverview",
        destination: "/chrsci01",
        permanent: true,
      },
      {
        source: "/chrysleroverview",
        destination: "/chryslerguidebook",
        permanent: true,
      },
      {
        source: "/chucanoverview",
        destination: "/chucan01",
        permanent: true,
      },
      {
        source: "/chucenoverview",
        destination: "/chucen01",
        permanent: true,
      },
      {
        source: "/chukininnoverview",
        destination: "/chukininn01",
        permanent: true,
      },
      {
        source: "/citservoverview",
        destination: "/citserv01",
        permanent: true,
      },
      {
        source: "/clairoverview",
        destination: "/clair01",
        permanent: true,
      },
      {
        source: "/cokeoverview",
        destination: "/coke01",
        permanent: true,
      },
      {
        source: "/conciroverview",
        destination: "/concir01",
        permanent: true,
      },
      {
        source: "/coninsoverview",
        destination: "/conins01",
        permanent: true,
      },
      {
        source: "/conparoverview",
        destination: "/conpar01",
        permanent: true,
      },
      {
        source: "/danwatoverview",
        destination: "/danwat01",
        permanent: true,
      },
      {
        source: "/democroverview",
        destination: "/democr01",
        permanent: true,
      },
      {
        source: "/denmarkoverview",
        destination: "/denmark01",
        permanent: true,
      },
      {
        source: "/dupontoverview",
        destination: "/dupont01",
        permanent: true,
      },
      {
        source: "/dynmatoverview",
        destination: "/dynmat01",
        permanent: true,
      },
      {
        source: "/easkodoverview",
        destination: "/easkod01",
        permanent: true,
      },
      {
        source: "/easternoverview",
        destination: "/eastern01",
        permanent: true,
      },
      {
        source: "/entbuioverview",
        destination: "/entbui01",
        permanent: true,
      },
      {
        source: "/equitoverview",
        destination: "/equit01",
        permanent: true,
      },
      {
        source: "/fesgasoverview",
        destination: "/fesgas01",
        permanent: true,
      },
      {
        source: "/fiestaoverview",
        destination: "/fiesta01",
        permanent: true,
      },
      {
        source: "/finartoverview",
        destination: "/finart01",
        permanent: true,
      },
      {
        source: "/firnatoverview",
        destination: "/firnat01",
        permanent: true,
      },
      {
        source: "/floridaoverview",
        destination: "/floridaguidebook",
        permanent: true,
      },
      {
        source: "/flowatskioverview",
        destination: "/flowatski01",
        permanent: true,
      },
      {
        source: "/fordoverview",
        destination: "/ford01",
        permanent: true,
      },
      {
        source: "/formicaoverview",
        destination: "/formica01",
        permanent: true,
      },
      {
        source: "/fouconoverview",
        destination: "/foucon01",
        permanent: true,
      },
      {
        source: "/foufaioverview",
        destination: "/Foucault01",
        permanent: true,
      },
      {
        source: "/fouplaoverview",
        destination: "/foupla01",
        permanent: true,
      },
      {
        source: "/franceoverview",
        destination: "/france01",
        permanent: true,
      },
      {
        source: "/funlanoverview",
        destination: "/funlan01",
        permanent: true,
      },
      {
        source: "/garmedoverview",
        destination: "/garmed01",
        permanent: true,
      },
      {
        source: "/gencigoverview",
        destination: "/gencig01",
        permanent: true,
      },
      {
        source: "/geneleoverview",
        destination: "/geneleguidebook",
        permanent: true,
      },
      {
        source: "/genfoooverview",
        destination: "/genfoo01",
        permanent: true,
      },
      {
        source: "/gmoverview",
        destination: "/gmguidebook",
        permanent: true,
      },
      {
        source: "/greeceoverview",
        destination: "/greece01",
        permanent: true,
      },
      {
        source: "/greyhoundoverview",
        destination: "/greyhound01",
        permanent: true,
      },
      {
        source: "/guineaoverview",
        destination: "/guinea01",
        permanent: true,
      },
      {
        source: "/haleduoverview",
        destination: "/haledu01",
        permanent: true,
      },
      {
        source: "/halfreoverview",
        destination: "/halfre01",
        permanent: true,
      },
      {
        source: "/halscioverview",
        destination: "/halsci01",
        permanent: true,
      },
      {
        source: "/hawaiioverview",
        destination: "/hawaii01",
        permanent: true,
      },
      {
        source: "/heartlandoverview",
        destination: "/heartland01",
        permanent: true,
      },
      {
        source: "/hertzoverview",
        destination: "/hertz01",
        permanent: true,
      },
      {
        source: "/hollywoodoverview",
        destination: "/hollywood01",
        permanent: true,
      },
      {
        source: "/honkonoverview",
        destination: "/honkon01",
        permanent: true,
      },
      {
        source: "/hougtoverview",
        destination: "/hougt01",
        permanent: true,
      },
      {
        source: "/ibmoverview",
        destination: "/ibm01",
        permanent: true,
      },
      {
        source: "/illinoisoverview",
        destination: "/illinoisguidebook",
        permanent: true,
      },
      {
        source: "/indiaoverview",
        destination: "/india01",
        permanent: true,
      },
      {
        source: "/indonesoverview",
        destination: "/indones01",
        permanent: true,
      },
      {
        source: "/intplaoverview",
        destination: "/atoz",
        permanent: true,
      },
      {
        source: "/irelandoverview",
        destination: "/ireland01",
        permanent: true,
      },
      {
        source: "/japanoverview",
        destination: "/japan01",
        permanent: true,
      },
      {
        source: "/jaycopoverview",
        destination: "/jaycop01",
        permanent: true,
      },
      {
        source: "/johwaxoverview",
        destination: "/johwax01",
        permanent: true,
      },
      {
        source: "/jordanoverview",
        destination: "/jordan01",
        permanent: true,
      },
      {
        source: "/julfaroverview",
        destination: "/julfar01",
        permanent: true,
      },
      {
        source: "/kidlanoverview",
        destination: "/kidlan01",
        permanent: true,
      },
      {
        source: "/koreaoverview",
        destination: "/korea01",
        permanent: true,
      },
      {
        source: "/lakcruoverview",
        destination: "/lakcru01",
        permanent: true,
      },
      {
        source: "/lebanooverview",
        destination: "/lebano01",
        permanent: true,
      },
      {
        source: "/lespouoverview",
        destination: "/lespou01",
        permanent: true,
      },
      {
        source: "/lightingoverview",
        destination: "/lighting01",
        permanent: true,
      },
      {
        source: "/lithwayoverview",
        destination: "/litwaycro01",
        permanent: true,
      },
      {
        source: "/litwaycrooverview",
        destination: "/litwaycro01",
        permanent: true,
      },
      {
        source: "/logfluoverview",
        destination: "/logflu01",
        permanent: true,
      },
      {
        source: "/lonislrroverview",
        destination: "/lonislrr01",
        permanent: true,
      },
      {
        source: "/louisiaoverview",
        destination: "/louisia01",
        permanent: true,
      },
      {
        source: "/lowengaroverview",
        destination: "/lowengar01",
        permanent: true,
      },
      {
        source: "/lunfountoverview",
        destination: "/lunfount01",
        permanent: true,
      },
      {
        source: "/mainmalloverview",
        destination: "/mainmall01",
        permanent: true,
      },
      {
        source: "/malaysiaoverview",
        destination: "/malaysia01",
        permanent: true,
      },
      {
        source: "/marylandoverview",
        destination: "/maryland01",
        permanent: true,
      },
      {
        source: "/masonoverview",
        destination: "/mason01",
        permanent: true,
      },
      {
        source: "/maspizoverview",
        destination: "/maspiz01",
        permanent: true,
      },
      {
        source: "/medphooverview",
        destination: "/medpho01",
        permanent: true,
      },
      {
        source: "/mexicooverview",
        destination: "/mexico01",
        permanent: true,
      },
      {
        source: "/midwestoverview",
        destination: "/midwest01",
        permanent: true,
      },
      {
        source: "/minnesotaoverview",
        destination: "/minnesota01",
        permanent: true,
      },
      {
        source: "/missourioverview",
        destination: "/missouri01",
        permanent: true,
      },
      {
        source: "/montanaoverview",
        destination: "/montana01",
        permanent: true,
      },
      {
        source: "/morchuoverview",
        destination: "/morchu01",
        permanent: true,
      },
      {
        source: "/mormonoverview",
        destination: "/atoz",
        permanent: true,
      },
      {
        source: "/morocooverview",
        destination: "/moroco01",
        permanent: true,
      },
      {
        source: "/natmarparoverview",
        destination: "/natmarpar01",
        permanent: true,
      },
      {
        source: "/ncroverview",
        destination: "/ncr01",
        permanent: true,
      },
      {
        source: "/newengoverview",
        destination: "/neweng01",
        permanent: true,
      },
      {
        source: "/newjeroverview",
        destination: "/newjer01",
        permanent: true,
      },
      {
        source: "/newmexoverview",
        destination: "/newmex01",
        permanent: true,
      },
      {
        source: "/newyorcitoverview",
        destination: "/newyorcit01",
        permanent: true,
      },
      {
        source: "/newyoroverview",
        destination: "/newyorguidebook",
        permanent: true,
      },
      {
        source: "/nprogfountoverview",
        destination: "/nprogfount01",
        permanent: true,
      },
      {
        source: "/oklahomaoverview",
        destination: "/oklahoma01",
        permanent: true,
      },
      {
        source: "/oregonoverview",
        destination: "/oregon01",
        permanent: true,
      },
      {
        source: "/pakistoverview",
        destination: "/pakist01",
        permanent: true,
      },
      {
        source: "/panamgoverview",
        destination: "/panamg01",
        permanent: true,
      },
      {
        source: "/parpenoverview",
        destination: "/parpen01",
        permanent: true,
      },
      {
        source: "/pavamioverview",
        destination: "/pavami01",
        permanent: true,
      },
      {
        source: "/pavparoverview",
        destination: "/pavpar01",
        permanent: true,
      },
      {
        source: "/pennsyoverview",
        destination: "/pennsylvania01",
        permanent: true,
      },
      {
        source: "/pepsioverview",
        destination: "/pepsiguidebook",
        permanent: true,
      },
      {
        source: "/philipoverview",
        destination: "/philip01",
        permanent: true,
      },
      {
        source: "/polyneoverview",
        destination: "/polynesia01",
        permanent: true,
      },
      {
        source: "/poolinoverview",
        destination: "/poolin01",
        permanent: true,
      },
      {
        source: "/poorefoverview",
        destination: "/pooref01",
        permanent: true,
      },
      {
        source: "/porautoverview",
        destination: "/poraut01",
        permanent: true,
      },
      {
        source: "/prebuioverview",
        destination: "/prebuilt01",
        permanent: true,
      },
      {
        source: "/proorthoverview",
        destination: "/proort01",
        permanent: true,
      },
      {
        source: "/proortoverview",
        destination: "/proort01",
        permanent: true,
      },
      {
        source: "/properoverview",
        destination: "/atoz",
        permanent: true,
      },
      {
        source: "/rcaoverview",
        destination: "/rca01",
        permanent: true,
      },
      {
        source: "/rheingoverview",
        destination: "/rheing01",
        permanent: true,
      },
      {
        source: "/rocthroverview",
        destination: "/rocthr01",
        permanent: true,
      },
      {
        source: "/rusorthoverview",
        destination: "/rusort01",
        permanent: true,
      },
      {
        source: "/rusortoverview",
        destination: "/rusort01",
        permanent: true,
      },
      {
        source: "/sanmaroverview",
        destination: "/sanmar01",
        permanent: true,
      },
      {
        source: "/schcenoverview",
        destination: "/schcen01",
        permanent: true,
      },
      {
        source: "/scopapoverview",
        destination: "/scopap01",
        permanent: true,
      },
      {
        source: "/sermscioverview",
        destination: "/sersci01",
        permanent: true,
      },
      {
        source: "/serscioverview",
        destination: "/sersci01",
        permanent: true,
      },
      {
        source: "/sevupoverview",
        destination: "/sevup01",
        permanent: true,
      },
      {
        source: "/sheastaoverview",
        destination: "/sheasta01",
        permanent: true,
      },
      {
        source: "/sierraoverview",
        destination: "/sierra01",
        permanent: true,
      },
      {
        source: "/simmonoverview",
        destination: "/summon01",
        permanent: true,
      },
      {
        source: "/sinclairoverview",
        destination: "/sinclair01",
        permanent: true,
      },
      {
        source: "/singeroverview",
        destination: "/singer01",
        permanent: true,
      },
      {
        source: "/skfoverview",
        destination: "/skf01",
        permanent: true,
      },
      {
        source: "/socmobiloverview",
        destination: "/socmobil01",
        permanent: true,
      },
      {
        source: "/solfountoverview",
        destination: "/solfount01",
        permanent: true,
      },
      {
        source: "/spacparkoverview",
        destination: "/spacpark01",
        permanent: true,
      },
      {
        source: "/spainoverview",
        destination: "/spain01",
        permanent: true,
      },
      {
        source: "/sprogfountoverview",
        destination: "/sprogfount01",
        permanent: true,
      },
      {
        source: "/sudanoverview",
        destination: "/sudan01",
        permanent: true,
      },
      {
        source: "/swedenoverview",
        destination: "/sweden01",
        permanent: true,
      },
      {
        source: "/swiskyoverview",
        destination: "/swisky01",
        permanent: true,
      },
      {
        source: "/switzoverview",
        destination: "/switz01",
        permanent: true,
      },
      {
        source: "/texasoverview",
        destination: "/texas01",
        permanent: true,
      },
      {
        source: "/thaioverview",
        destination: "/thai01",
        permanent: true,
      },
      {
        source: "/thrridoverview",
        destination: "/thrrid01",
        permanent: true,
      },
      {
        source: "/tipbandoverview",
        destination: "/tipband01",
        permanent: true,
      },
      {
        source: "/towersoverview",
        destination: "/towers01",
        permanent: true,
      },
      {
        source: "/trantravoverview",
        destination: "/trantrav01",
        permanent: true,
      },
      {
        source: "/travelersoverview",
        destination: "/travelers01",
        permanent: true,
      },
      {
        source: "/twothooverview",
        destination: "/twotho01",
        permanent: true,
      },
      {
        source: "/twotriboverview",
        destination: "/twotho01",
        permanent: true,
      },
      {
        source: "/twrlitoverview",
        destination: "/twrlit01",
        permanent: true,
      },
      {
        source: "/uaroverview",
        destination: "/uar01",
        permanent: true,
      },
      {
        source: "/undrghomeoverview",
        destination: "/undrghome01",
        permanent: true,
      },
      {
        source: "/unisphoverview",
        destination: "/unisph01",
        permanent: true,
      },
      {
        source: "/unistaoverview",
        destination: "/unista01",
        permanent: true,
      },
      {
        source: "/unoverview",
        destination: "/un01",
        permanent: true,
      },
      {
        source: "/uspooverview",
        destination: "/uspo01",
        permanent: true,
      },
      {
        source: "/usruboverview",
        destination: "/usrub01",
        permanent: true,
      },
      {
        source: "/vaticanoverview",
        destination: "/vaticanguidebook",
        permanent: true,
      },
      {
        source: "/veneerview",
        destination: "/veneze01",
        permanent: true,
      },
      {
        source: "/walwaxoverview",
        destination: "/walwax01",
        permanent: true,
      },
      {
        source: "/weshouoverview",
        destination: "/weshou01",
        permanent: true,
      },
      {
        source: "/wesviroverview",
        destination: "/wesvir01",
        permanent: true,
      },
      {
        source: "/wfmaroverview",
        destination: "/wfmar01",
        permanent: true,
      },
      {
        source: "/wfpavoverview",
        destination: "/wfpav01",
        permanent: true,
      },
      {
        source: "/wisconsinoverview",
        destination: "/wisconsin01",
        permanent: true,
      },
      {
        source: "/worfoooverview",
        destination: "/worfoo01",
        permanent: true,
      },
      // Retarget mistaken `us*` prefix → canonical `unista*` United States routes
      {
        source: "/usoverview",
        destination: "/unista01",
        permanent: true,
      },
      {
        source: "/us01",
        destination: "/unista01",
        permanent: true,
      },
      // Fountains of the Fairs — old foufair* / foufairoverview → Foucault / foufaioverview
      {
        source: "/foufairoverview",
        destination: "/Foucault01",
        permanent: true,
      },
      {
        source: "/foufair01",
        destination: "/Foucault01",
        permanent: true,
      },
      {
        source: "/foufair02",
        destination: "/Foucault02",
        permanent: true,
      },
      {
        source: "/foufair03",
        destination: "/Foucault03",
        permanent: true,
      },
      {
        source: "/foufair04",
        destination: "/Foucault04",
        permanent: true,
      },
      // Lunar Fountain — mistaken lunfont* (missing “u”) → lunfount*
      {
        source: "/lunfontoverview",
        destination: "/lunfount01",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
