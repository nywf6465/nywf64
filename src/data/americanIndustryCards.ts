import {
  ALL_STATE,
  AMERICAN_EXPRESS,
  ARLINGTON_HAT,
  AVIS_ANTIQUE_CAR_RIDE,
} from "@/data/aCards";
import { BELL_SYSTEM, BETTER_LIVING_CENTER } from "@/data/bCards";
import {
  CHRYSLER,
  CHUNKY_CANDY,
  CLAIROL,
  COCA_COLA,
  CONTINENTAL_INSURANCE,
} from "@/data/cCards";
import { DEMONSTRATION_CENTER, DUPONT } from "@/data/dCards";
import {
  EASTERN_AIR_LINES,
  EASTMAN_KODAK,
  EQUITABLE_LIFE,
} from "@/data/eCards";
import {
  FESTIVAL_OF_GAS,
  FIRST_NATIONAL_CITY_BANK,
  FORD,
  FORMICA,
} from "@/data/fCards";
import {
  GENERAL_CIGAR,
  GENERAL_ELECTRIC,
  GENERAL_FOODS_ARCHES,
  GENERAL_MOTORS,
  GREYHOUND,
} from "@/data/gCards";
import {
  HALL_OF_EDUCATION,
  HALL_OF_FREE_ENTERPRISE,
  HALL_OF_SCIENCE,
  HERTZ,
  HOUGT,
} from "@/data/hCards";
import { IBM } from "@/data/iCards";
import { JOHWAX, JULFAR } from "@/data/jCards";
import { LONISLRR, LOWENGAR } from "@/data/lCards";
import { AMF } from "@/data/mCards";
import { NCR } from "@/data/nCards";
import {
  PARKER_PEN,
  PAVILION_OF_AMERICAN_INTERIORS,
  PEPSI_COLA,
  PORT_AUTHORITY_HELIPORT,
} from "@/data/pCards";
import { RCA, RHEINGOLD } from "@/data/rCards";
import {
  SCHAEFER,
  SCOTT_PAPER,
  SEVEN_UP,
  SIMMONS,
  SINCLAIR,
  SINGER_BOWL,
  SKF,
  SOCONY_MOBIL,
} from "@/data/sCards";
import {
  TIPARILLO_BAND_PAVILION,
  TOWER_OF_LIGHT,
  TRANSPORTATION_AND_TRAVEL,
  TRAVELERS_INSURANCE,
} from "@/data/tCards";
import {
  UNDERGROUND_WORLD_HOME,
  UNISPHERE,
  US_POST_OFFICE,
  US_RUBBER,
} from "@/data/uCards";
import { WESTINGHOUSE, WORLD_OF_FOOD } from "@/data/wCards";
import type { FountainsCard } from "@/data/fountainsCards";

/**
 * Exhibits of American Industry link-card rows — fountains / religions model.
 * 1. All-State Properties & Macy's — Attractions from A to Z (`/A`)
 * 2. American Express — Attractions from A to Z (`/A`)
 * 3. Arlington Hat — Attractions from A to Z (`/A`)
 * 4. Avis Antique Car Ride — Attractions from A to Z (`/A`)
 * 5. Bell System — Attractions from A to Z (`/B`)
 * 6. Better Living Center — Attractions from A to Z (`/B`)
 * 7. Chrysler — Attractions from A to Z (`/C`)
 * 8. Chunky Candy — Attractions from A to Z (`/C`)
 * 9. Clairol — Attractions from A to Z (`/C`)
 * 10. Coca-Cola — Attractions from A to Z (`/C`)
 * 11. Continental Insurance — Attractions from A to Z (`/C`)
 * 12. Demonstration Center — Attractions from A to Z (`/D`)
 * 13. DuPont — Attractions from A to Z (`/D`)
 * 14. Eastern Air Lines — Attractions from A to Z (`/E`)
 * 15. Eastman Kodak — Attractions from A to Z (`/E`)
 * 16. Equitable Life Assurance Society — Attractions from A to Z (`/E`)
 * 17. Festival of Gas — Attractions from A to Z (`/F`)
 * 18. First National City Bank — Attractions from A to Z (`/F`)
 * 19. Ford — Attractions from A to Z (`/F`)
 * 20. Formica — Attractions from A to Z (`/F`)
 * 21. General Cigar — Attractions from A to Z (`/G`)
 * 22. General Electric — Attractions from A to Z (`/G`)
 * 23. General Foods Arches — Attractions from A to Z (`/G`)
 * 24. General Motors — Attractions from A to Z (`/G`)
 * 25. Greyhound — Attractions from A to Z (`/G`)
 * 26. Hall of Education — Attractions from A to Z (`/H`)
 * 27. Hall of Free Enterprise — Attractions from A to Z (`/H`)
 * 28. Hall of Science — Attractions from A to Z (`/H`)
 * 29. Hertz Travel Center — Attractions from A to Z (`/H`)
 * 30. House of Good Taste — Attractions from A to Z (`/H`)
 * 31. International Business Machines — Attractions from A to Z (`/I`)
 * 32. Johnson Wax — Attractions from A to Z (`/J`)
 * 33. Julimar Farm — Attractions from A to Z (`/J`)
 * 34. Long Island Rail Road — Attractions from A to Z (`/L`)
 * 35. Lowenbrau Gardens — Attractions from A to Z (`/L`)
 * 36. Monorail — Attractions from A to Z (`/M`)
 * 37. NCR — Attractions from A to Z (`/N`)
 * 38. Parker Pen — Attractions from A to Z (`/P`)
 * 39. Pavilion of American Interiors — Attractions from A to Z (`/P`)
 * 40. Pepsi-Cola — Attractions from A to Z (`/P`)
 * 41. Port Authority Heliport — Attractions from A to Z (`/P`)
 * 42. RCA — Attractions from A to Z (`/R`)
 * 43. Rheingold — Attractions from A to Z (`/R`)
 * 44. Schaefer — Attractions from A to Z (`/S`)
 * 45. Scott Paper — Attractions from A to Z (`/S`)
 * 46. Seven-Up — Attractions from A to Z (`/S`)
 * 47. Simmons — Attractions from A to Z (`/S`)
 * 48. Sinclair — Attractions from A to Z (`/S`)
 * 49. Singer Bowl — Attractions from A to Z (`/S`)
 * 50. SKF — Attractions from A to Z (`/S`)
 * 51. Socony Mobil — Attractions from A to Z (`/S`)
 * 52. Tiparillo Band Pavilion — Attractions from A to Z (`/T`)
 * 53. Tower of Light — Attractions from A to Z (`/T`)
 * 54. Transportation & Travel — Attractions from A to Z (`/T`)
 * 55. Travelers Insurance — Attractions from A to Z (`/T`)
 * 56. U.S. Post Office — Attractions from A to Z (`/U`)
 * 57. U.S. Rubber — Attractions from A to Z (`/U`)
 * 58. Unisphere — Attractions from A to Z (`/U`)
 * 59. Underground World Home — Attractions from A to Z (`/U`)
 * 60. Westinghouse — Attractions from A to Z (`/W`)
 * 61. World of Food — Attractions from A to Z (`/W`)
 */
export type AmericanIndustryCard = FountainsCard;

export const AMERICAN_INDUSTRY_CARDS: AmericanIndustryCard[] = [
  ALL_STATE,
  AMERICAN_EXPRESS,
  ARLINGTON_HAT,
  AVIS_ANTIQUE_CAR_RIDE,
  BELL_SYSTEM,
  BETTER_LIVING_CENTER,
  CHRYSLER,
  CHUNKY_CANDY,
  CLAIROL,
  COCA_COLA,
  CONTINENTAL_INSURANCE,
  DEMONSTRATION_CENTER,
  DUPONT,
  EASTERN_AIR_LINES,
  EASTMAN_KODAK,
  EQUITABLE_LIFE,
  FESTIVAL_OF_GAS,
  FIRST_NATIONAL_CITY_BANK,
  FORD,
  FORMICA,
  GENERAL_CIGAR,
  GENERAL_ELECTRIC,
  GENERAL_FOODS_ARCHES,
  GENERAL_MOTORS,
  GREYHOUND,
  HALL_OF_EDUCATION,
  HALL_OF_FREE_ENTERPRISE,
  HALL_OF_SCIENCE,
  HERTZ,
  HOUGT,
  IBM,
  JOHWAX,
  JULFAR,
  LONISLRR,
  LOWENGAR,
  AMF,
  NCR,
  PARKER_PEN,
  PAVILION_OF_AMERICAN_INTERIORS,
  PEPSI_COLA,
  PORT_AUTHORITY_HELIPORT,
  RCA,
  RHEINGOLD,
  SCHAEFER,
  SCOTT_PAPER,
  SEVEN_UP,
  SIMMONS,
  SINCLAIR,
  SINGER_BOWL,
  SKF,
  SOCONY_MOBIL,
  TIPARILLO_BAND_PAVILION,
  TOWER_OF_LIGHT,
  TRANSPORTATION_AND_TRAVEL,
  TRAVELERS_INSURANCE,
  US_POST_OFFICE,
  US_RUBBER,
  UNISPHERE,
  UNDERGROUND_WORLD_HOME,
  WESTINGHOUSE,
  WORLD_OF_FOOD,
];
