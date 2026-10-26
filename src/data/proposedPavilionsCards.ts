import {
  AMERICAN_INDIAN_EXPOSITION,
  ARCH_OF_THE_AMERICAS,
  ARGENTINA,
} from "@/data/aCards";
import { FRANCE } from "@/data/fCards";
import { HEARTLAND } from "@/data/hCards";
import type { FountainsCard } from "@/data/fountainsCards";

/**
 * Proposed Pavilions Never Built link-card rows — fountains / religions model.
 * 1. American Indian Exposition — Attractions from A to Z (`/A`)
 * 2. Arch of the Americas — Attractions from A to Z (`/A`)
 * 3. Argentina — Attractions from A to Z (`/A`)
 * 4. France — Attractions from A to Z (`/F`)
 * 5. Heartland States — Attractions from A to Z (`/H`)
 */
export type ProposedPavilionsCard = FountainsCard;

export const PROPOSED_PAVILIONS_CARDS: ProposedPavilionsCard[] = [
  AMERICAN_INDIAN_EXPOSITION,
  ARCH_OF_THE_AMERICAS,
  ARGENTINA,
  FRANCE,
  HEARTLAND,
];
