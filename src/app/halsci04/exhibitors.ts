/**
 * Hall of Science sub-exhibitors from legacy halsci04.html
 * (1964 World's Fair Information Manual). Legacy spellings preserved
 * (Divison, Subsidary).
 */
export const EXHIBITORS_1964 = [
  "Abbott Laboratories",
  "Airborne Instruments Laboratory - Divison of Cutler-Hammer Inc.",
  "American Cancer Society",
  "American Chemical Society",
  "Ames Company, Inc. - A Subsidary of Miles Laboratories",
  "General Aniline and Film Corporation",
  "Hearing Aid Industry Conference",
  "Interchemical Corporation",
  "International Telephone and Telegraph Company",
  "Martin Marietta Corporation",
  "U. S. Atomic Energy Commission",
  "Upjohn Company",
] as const;

export const EXHIBITORS_1964_LEFT = EXHIBITORS_1964.slice(0, 6);
export const EXHIBITORS_1964_RIGHT = EXHIBITORS_1964.slice(6);
