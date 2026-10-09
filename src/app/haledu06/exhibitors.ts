export type ExhibitorLine = string | { text: string; indent: true };

/**
 * Hall of Education sub-exhibitors from legacy haledu06.html
 * (1964 World's Fair Information Manual). Legacy spellings preserved
 * (Compay, Inc/, Modernfold doors, Wilkie Brothers Foundations, etc.).
 */
export const EXHIBITORS_1964: ExhibitorLine[] = [
  "A Nation's Heritage",
  "American Board of Missions to the Jews, Inc.",
  "American Optometric Association",
  "American Seating Company",
  "Baby Career Institute",
  "Bancroft, Avery & McAllister",
  { text: "for Walter Keane Printing", indent: true },
  "Baldridge Reading Services, Inc.",
  "Bioscope Manufacturing Co.",
  "Book House for Children, The",
  "Brunswick Corporation",
  "Carter's Ink Co.",
  "Civic Education Service, Inc.",
  "Collegiate Cap & Gown Company",
  "Confraternity of Christian Doctrine, The",
  "Constance Bannister Enterprises",
  "Contract Hardware",
  "Dawn Bible Students Association",
  "Deutscher & Sons Inc.",
  "Do-All Manufacturing Co.",
  "Edmund Scientific Co.",
  "Electronic Directory Processing Corp.",
  "Endicott-Johnson Corp.",
  "F. E. Compton & Company",
  "Fedders Corp.",
  "Gulf American Land Corp.",
  "Hamelin-Harvard Associated Co.",
  "Johnson Service Compay Inc.",
  "Merkos L'Inyonei Chinuch, Inc.",
  "Miro Pen Corp.",
  "Modernfold doors Inc.",
  "National Catholic Educational Assoc., The",
  "New Castle Products Inc/",
  "New York Bible Society, The",
  "New York Daily News",
  "New York State Podiatry Association",
  "Noble and Noble Publishers Inc.",
  "Owens-Corning Fiberglas",
  "Paperbacks at the Fair, Inc.",
  "Pepsi-Cola Company",
  "Republic Steel Corp.",
  "S & A Stores Inc.",
  "Seaway Associates Inc.",
  { text: "(featuring Polymer Products Co.)", indent: true },
  "Shorewood Publishing Company",
  "Sportservice Corporation",
  "Taylor Company, The Halsey W.",
  "Torjesen Inc.",
  "U. S. Industries Inc.",
  "U. S. Rubber Co.",
  "WNYC-TV",
  "Wilkie Brothers Foundations",
  "Youth in Science at the",
  { text: "New York World's Fair", indent: true },
];

/** Split for a two-column layout roughly matching legacy density. */
export const EXHIBITORS_1964_LEFT = EXHIBITORS_1964.slice(0, 28);
export const EXHIBITORS_1964_RIGHT = EXHIBITORS_1964.slice(28);
